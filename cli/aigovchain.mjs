#!/usr/bin/env node
// aigovchain: the AI Governance Chain command line. Zero dependencies, Node 18+.
// Run without installing:  npx github:mathieugouanou/aigovernancechain <command>
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline/promises';
import { loadAtlas, scope, upcoming, search, validateAll, compileAtlas } from '../lib/atlas.mjs';
import { runChecks, generateGovernanceMd, readGovernanceFile, parseGovernanceMd, TOOL_VERSION } from '../lib/governance-md.mjs';
import { toText, toMarkdown, toSarif, toBadgeJson, toBadgeSvg } from '../lib/report.mjs';
import { buildEvidencePack } from '../lib/evidence.mjs';
import { toIcs } from '../lib/ics.mjs';
import { LEVELS, startLevel, runLevel, formatRun } from '../lib/ctf.mjs';
import { runJail } from '../lib/jail.mjs';
import * as V from '../lib/vocab.mjs';
process.stdout.on('error', e => { if (e.code === 'EPIPE') process.exit(0); throw e; });

const HELP = `AI Governance Chain v${TOOL_VERSION}: law -> obligation -> control -> gate -> evidence -> oversight
Open data and tools. Draft, not legal advice.

Usage: aigovchain <command> [options]

Find what applies
  scope      -j EU,US-CA -r deployer -u chatbot,agent [--from AI_GOVERNANCE.md] [--now] [--json]
  deadlines  [--days 180] [-j EU] [--from YYYY-MM-DD] [--ics file.ics] [--json]
  atlas      list | show <regime> | obligation <id> | search <words> | validate | build

Write and check your AI_GOVERNANCE.md
  init       [--name ..] [--owner ..] [-j ..] [-r ..] [-u ..] [--out AI_GOVERNANCE.md] [--force] [--yes] [--example]
  check      [--file AI_GOVERNANCE.md] [--format text|md|json|sarif] [--sarif out.sarif] [--summary] [--fail-on fail|warn|never]
  badge      [--file AI_GOVERNANCE.md] [--out .governance]      writes badge.json (shields endpoint) and badge.svg
  evidence   [--file AI_GOVERNANCE.md] [--out governance-evidence]

Learn and demo
  jail       30-second demo of rules stopping a misbehaving agent [--fast]
  ctf        list | start <level> | run <level> [--file path]
  bench      GovBench: [--questions] print questions | --answers answers.jsonl [--json]

Integrations
  mcp        start the MCP server on stdio (for Claude, Cursor, VS Code and other MCP clients)
  version    print the version

Docs: https://github.com/mathieugouanou/aigovernancechain`;

function parseArgs(argv) {
  const out = { _: [] };
  const alias = { j: 'jurisdictions', r: 'roles', u: 'uses', f: 'file', o: 'out', h: 'help', y: 'yes' };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--') { out._.push(...argv.slice(i + 1)); break; }
    let m;
    if ((m = /^--no-(.+)$/.exec(a))) { out[m[1]] = false; continue; }
    if ((m = /^--([^=]+)=(.*)$/.exec(a))) { out[m[1]] = m[2]; continue; }
    if ((m = /^(?:--(.+)|-([a-zA-Z]))$/.exec(a))) {
      const key = m[1] || alias[m[2]] || m[2];
      const nxt = argv[i + 1];
      if (nxt !== undefined && !nxt.startsWith('-')) { out[key] = nxt; i++; } else out[key] = true;
      continue;
    }
    out._.push(a);
  }
  return out;
}
const list = v => (v === undefined || v === true ? [] : String(v).split(',').map(s => s.trim()).filter(Boolean));
const today = () => new Date().toISOString().slice(0, 10);
const color = process.stdout.isTTY && !process.env.NO_COLOR;
const dim = s => (color ? `\x1b[2m${s}\x1b[0m` : s);
const bold = s => (color ? `\x1b[1m${s}\x1b[0m` : s);

function profileFrom(args) {
  if (args.from) {
    const t = readGovernanceFile(args.from);
    if (!t) throw new Error(`${args.from} not found`);
    const p = parseGovernanceMd(t);
    if (p.error) throw new Error(p.error);
    return { jurisdictions: (p.frontMatter.jurisdictions || []).map(V.normalizeJurisdiction), roles: p.frontMatter.roles || [], uses: p.frontMatter.uses || [] };
  }
  return { jurisdictions: list(args.jurisdictions).map(V.normalizeJurisdiction), roles: list(args.roles), uses: list(args.uses) };
}

function printObligations(obs) {
  const byJ = {};
  for (const o of obs) (byJ[o.jurisdiction] ||= []).push(o);
  for (const [j, arr] of Object.entries(byJ)) {
    console.log(bold(`\n${j} · ${V.JURISDICTIONS[j] || j}`));
    for (const o of arr.sort((a, b) => String(a.applies_from).localeCompare(String(b.applies_from)))) {
      console.log(`  ${o.id.padEnd(26)} ${String(o.applies_from || 'n/a').padEnd(10)} ${o.status.padEnd(18)} ${o.instrument_short} ${o.article}: ${o.title}`);
    }
  }
}

const commands = {
  async help() { console.log(HELP); },
  async version() { console.log(TOOL_VERSION); },

  async scope(args) {
    const atlas = loadAtlas();
    const p = profileFrom(args);
    if (!p.jurisdictions.length) throw new Error('Give at least one jurisdiction, e.g. -j EU,US-CA (or --from AI_GOVERNANCE.md)');
    if (!p.roles.length) p.roles = ['deployer'];
    if (!p.uses.length) p.uses = ['any-ai'];
    const obs = scope(atlas, { ...p, includeFuture: !args.now });
    if (args.json) return console.log(JSON.stringify({ profile: p, count: obs.length, obligations: obs }, null, 2));
    console.log(`${bold(`${obs.length} obligation(s)`)} for ${p.roles.join('/')} · ${p.uses.join('/')} · ${p.jurisdictions.join(', ')} ${dim(`(Atlas ${atlas.generated}, draft, not legal advice)`)}`);
    printObligations(obs);
    console.log(dim('\nNext: aigovchain init  (writes AI_GOVERNANCE.md with these obligations)'));
  },

  async deadlines(args) {
    const atlas = loadAtlas();
    const days = Number(args.days || 180);
    const from = args.from && args.from !== true ? args.from : today();
    const js = list(args.jurisdictions).map(V.normalizeJurisdiction);
    const d = args.all ? atlas.deadlines : upcoming(atlas, { from, days, jurisdictions: js });
    if (args.ics) {
      const file = args.ics === true ? 'ai-law-deadlines.ics' : args.ics;
      fs.writeFileSync(file, toIcs(d));
      return console.log(`Wrote ${d.length} event(s) to ${file}. Subscribe to the live feed instead: https://aigovernancechain.com/deadlines.ics`);
    }
    if (args.json) return console.log(JSON.stringify(d, null, 2));
    console.log(bold(`${d.length} date(s) ${args.all ? 'in the Atlas' : `in the next ${days} days from ${from}`}`) + dim(' · draft, not legal advice'));
    for (const x of d) console.log(`  ${x.date}  ${x.jurisdiction.padEnd(9)} ${x.title}${x.obligations?.length ? dim(`  ${x.obligations.join(', ')}`) : ''}`);
  },

  async atlas(args) {
    const sub = args._[1] || 'list';
    const atlas = loadAtlas();
    if (sub === 'list') {
      console.log(bold(`${atlas.regimes.length} regimes, ${atlas.obligations.length} obligations`) + dim(` · Atlas ${atlas.generated}`));
      for (const r of atlas.regimes) console.log(`  ${r.id.padEnd(10)} ${r.jurisdiction.padEnd(9)} ${String(atlas.obligations.filter(o => o.regime === r.id).length).padStart(3)}  ${r.card?.title || r.name}  ${dim(`as of ${r.as_of} · ${r.review?.status}`)}`);
      return;
    }
    if (sub === 'show') {
      const id = args._[2];
      const r = atlas.regimes.find(x => x.id === id || x.jurisdiction === V.normalizeJurisdiction(id || ''));
      if (!r) throw new Error(`Unknown regime "${id}". Run: aigovchain atlas list`);
      if (args.json) return console.log(JSON.stringify({ ...r, obligations: atlas.obligations.filter(o => o.regime === r.id) }, null, 2));
      console.log(bold(r.card?.title || r.name));
      console.log(r.card?.one_liner || '');
      console.log(dim(`as of ${r.as_of} · review ${r.review?.status}`));
      for (const i of r.instruments) console.log(`  ${i.short || i.code}: ${i.title} (${i.status}) ${dim(i.official_url)}`);
      printObligations(atlas.obligations.filter(o => o.regime === r.id));
      return;
    }
    if (sub === 'obligation') {
      const o = atlas.obligations.find(x => x.id === args._[2]);
      if (!o) throw new Error(`Unknown obligation "${args._[2]}"`);
      return console.log(JSON.stringify(o, null, 2));
    }
    if (sub === 'search') {
      const q = args._.slice(2).join(' ');
      const res = search(atlas, q, Number(args.limit || 20));
      if (args.json) return console.log(JSON.stringify(res, null, 2));
      for (const o of res) console.log(`  ${o.id.padEnd(26)} ${o.instrument_short} ${o.article}: ${o.title}`);
      if (!res.length) console.log('No match.');
      return;
    }
    if (sub === 'validate') {
      const r = validateAll();
      for (const w of r.warnings) console.log(`warning: ${w}`);
      for (const e of r.errors) console.log(`error: ${e}`);
      console.log(`${r.files} file(s), ${r.obligations} obligation(s), ${r.errors.length} error(s), ${r.warnings.length} warning(s)`);
      if (r.errors.length) process.exitCode = 1;
      return;
    }
    if (sub === 'build') {
      const a = compileAtlas();
      const out = args.out && args.out !== true ? args.out : 'atlas.json';
      fs.writeFileSync(out, JSON.stringify(a, null, 2) + '\n');
      return console.log(`Wrote ${out}`);
    }
    throw new Error(`Unknown atlas command "${sub}"`);
  },

  async init(args) {
    const atlas = loadAtlas();
    const out = args.out && args.out !== true ? args.out : 'AI_GOVERNANCE.md';
    if (fs.existsSync(out) && !args.force) throw new Error(`${out} already exists. Use --force to overwrite, or --out another-file.md`);
    let p = {
      name: args.name, owner: args.owner, description: args.description,
      jurisdictions: list(args.jurisdictions), roles: list(args.roles), uses: list(args.uses),
    };
    if (args.example) p = { name: 'Acme support agent', owner: 'ai-owner@acme.example', description: 'Answers customer questions and can issue small refunds.', jurisdictions: ['EU', 'US-CA'], roles: ['deployer'], uses: ['chatbot', 'agent'] };
    const interactive = process.stdin.isTTY && !args.yes && !args.example && !(p.jurisdictions.length && p.uses.length);
    if (interactive) {
      const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
      const ask = async (q, def) => (await rl.question(`${q}${def ? dim(` [${def}]`) : ''}: `)).trim() || def;
      console.log(bold('AI_GOVERNANCE.md generator') + dim(' · press Enter to accept the default'));
      p.name = await ask('System name', p.name || path.basename(process.cwd()));
      p.description = await ask('What does it do (one sentence)', p.description || 'Answers customer questions.');
      p.owner = await ask('Accountable owner (email or team)', p.owner || 'ai-owner@example.com');
      console.log(dim(`Jurisdictions: ${Object.keys(V.JURISDICTIONS).filter(j => j !== 'INTL').join(', ')} (EU member codes like DE also work)`));
      p.jurisdictions = list(await ask('Where is it used', p.jurisdictions.join(',') || 'EU'));
      console.log(dim(`Roles: ${V.ROLES.filter(r => r !== 'any').join(', ')}`));
      p.roles = list(await ask('Your role(s)', p.roles.join(',') || 'deployer'));
      console.log(dim(`Uses: ${V.USES.join(', ')}`));
      p.uses = list(await ask('Use(s)', p.uses.join(',') || 'chatbot'));
      rl.close();
    }
    p.jurisdictions = p.jurisdictions.length ? p.jurisdictions : ['EU'];
    p.roles = p.roles.length ? p.roles : ['deployer'];
    p.uses = p.uses.length ? p.uses : ['chatbot'];
    const bad = [...p.roles.filter(r => !V.ROLES.includes(r)).map(r => `role ${r}`), ...p.uses.filter(u => !V.USES.includes(u)).map(u => `use ${u}`)];
    if (bad.length) throw new Error(`Unknown ${bad.join(', ')}. See atlas/FORMAT.md for the vocabulary.`);
    const md = generateGovernanceMd({ ...p, atlas, today: today() });
    fs.writeFileSync(out, md);
    const n = scope(atlas, { jurisdictions: p.jurisdictions.map(V.normalizeJurisdiction), roles: p.roles, uses: p.uses }).length;
    console.log(`Wrote ${bold(out)} with ${n} obligation(s) in scope.`);
    console.log(`Next: replace each ${bold('todo')} with a real status, then run ${bold('aigovchain check')}.`);
  },

  async check(args) {
    const file = args.file && args.file !== true ? args.file : 'AI_GOVERNANCE.md';
    const atlas = loadAtlas();
    const text = readGovernanceFile(file);
    const res = runChecks({ text, atlas, file, today: args.today && args.today !== true ? args.today : today() });
    const fmt = args.format || 'text';
    if (fmt === 'json') console.log(JSON.stringify({ summary: res.summary, results: res.results, profile: res.profile, obligations: res.applicable.map(o => o.id) }, null, 2));
    else if (fmt === 'md') console.log(toMarkdown(res));
    else if (fmt === 'sarif') console.log(JSON.stringify(toSarif(res, { file }), null, 2));
    else console.log(toText(res, { color }));
    if (args.sarif) { const f = args.sarif === true ? 'aigovchain.sarif' : args.sarif; fs.writeFileSync(f, JSON.stringify(toSarif(res, { file }), null, 2)); if (fmt === 'text') console.log(dim(`SARIF written to ${f}`)); }
    if (args.summary && process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, toMarkdown(res) + '\n');
    if (args['markdown-out']) fs.writeFileSync(args['markdown-out'], toMarkdown(res) + '\n');
    const failOn = args.fail === false ? 'never' : (args['fail-on'] || 'fail');
    if ((failOn === 'fail' && res.summary.failed) || (failOn === 'warn' && (res.summary.failed || res.summary.warnings))) process.exitCode = 1;
  },

  async badge(args) {
    const file = args.file && args.file !== true ? args.file : 'AI_GOVERNANCE.md';
    const outDir = args.out && args.out !== true ? args.out : '.governance';
    const res = runChecks({ text: readGovernanceFile(file), atlas: loadAtlas(), file, today: today() });
    const b = toBadgeJson(res);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'badge.json'), JSON.stringify(b) + '\n');
    fs.writeFileSync(path.join(outDir, 'badge.svg'), toBadgeSvg(b));
    console.log(`Badge: ${b.label} | ${b.message} (${b.color}) -> ${outDir}/badge.json, ${outDir}/badge.svg`);
    console.log(dim('The badge states checked facts about a self-declared file. It is not a certification.'));
  },

  async evidence(args) {
    const file = args.file && args.file !== true ? args.file : 'AI_GOVERNANCE.md';
    const atlas = loadAtlas();
    const text = readGovernanceFile(file);
    const res = runChecks({ text, atlas, file, today: today() });
    const r = buildEvidencePack({ res, text, file, atlas, outDir: args.out && args.out !== true ? args.out : 'governance-evidence' });
    console.log(`Evidence Pack written to ${r.dir}/ (evidence.json sha256 ${r.sha256.slice(0, 16)}...)`);
    console.log(dim('Tip: in GitHub Actions, attest it with actions/attest-build-provenance to make it tamper-evident.'));
  },

  async jail(args) { await runJail({ fast: !!args.fast || !process.stdout.isTTY, color }); },

  async ctf(args) {
    const sub = args._[1] || 'list';
    if (sub === 'list') {
      console.log(bold('AI Governance CTF') + dim(' · break a toy agent, fix it with AI_GOVERNANCE.md'));
      for (const l of LEVELS) console.log(`  ${l.id}  ${l.title.padEnd(16)} ${dim(l.maps.join('; '))}`);
      console.log(dim('\nStart: aigovchain ctf start 01'));
      return;
    }
    if (sub === 'start') {
      const dir = startLevel(args._[2] || '01');
      console.log(`Level copied to ${bold(path.relative(process.cwd(), dir) || dir)}. Read its README.md, then run: aigovchain ctf run ${args._[2] || '01'}`);
      return;
    }
    if (sub === 'run') {
      const r = await runLevel(args._[2] || '01', { file: args.file && args.file !== true ? args.file : undefined });
      console.log(formatRun(r, { color }));
      if (!r.solved) process.exitCode = 1;
      return;
    }
    throw new Error(`Unknown ctf command "${sub}"`);
  },

  async bench(args) {
    const { loadQuestions, scoreAnswers } = await import('../lib/bench.mjs');
    const qs = loadQuestions();
    if (args.questions || !args.answers) {
      if (args.json || args.questions) { for (const q of qs) console.log(JSON.stringify({ id: q.id, type: q.type, question: q.question, choices: q.choices })); return; }
    }
    if (!args.answers) { console.log(`GovBench has ${qs.length} questions. Print them with --questions, answer with your model, then score with --answers answers.jsonl`); return; }
    const answers = fs.readFileSync(args.answers, 'utf8').split(/\r?\n/).filter(Boolean).map(l => JSON.parse(l));
    const s = scoreAnswers(qs, answers);
    if (args.json) return console.log(JSON.stringify(s, null, 2));
    console.log(bold(`GovBench score: ${s.correct}/${s.total} (${(100 * s.accuracy).toFixed(1)}%)`) + dim(` · ${s.unanswered} unanswered · dataset ${s.dataset}`));
    for (const [t, v] of Object.entries(s.byType)) console.log(`  ${t.padEnd(12)} ${v.correct}/${v.total}`);
  },

  async mcp() { const { startServer } = await import('../mcp/server.mjs'); startServer(); },
};

async function main() {
  const args = parseArgs(process.argv.slice(2));
  let cmd = args._[0] || 'help';
  if (args.help || cmd === '--help') cmd = 'help';
  if (args.version && !args._[0]) cmd = 'version';
  const fn = commands[cmd];
  if (!fn) { console.error(`Unknown command "${cmd}".\n`); console.log(HELP); process.exitCode = 2; return; }
  try { await fn(args); }
  catch (e) { console.error(`aigovchain ${cmd}: ${e.message}`); process.exitCode = 2; }
}

main();
