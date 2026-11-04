#!/usr/bin/env node
// Build every generated file from atlas/regimes/*.yaml.
//   node scripts/build.mjs           write files
//   node scripts/build.mjs --check   fail if generated files are out of date (used in CI)
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, compileAtlas, validateAll } from '../lib/atlas.mjs';
import { toIcs } from '../lib/ics.mjs';
import { generateQuestions } from '../lib/bench.mjs';
import { JURISDICTIONS, CONTROLS } from '../lib/vocab.mjs';

const check = process.argv.includes('--check');
const v = validateAll();
if (v.errors.length) { for (const e of v.errors) console.error(`error: ${e}`); process.exit(1); }

const atlas = compileAtlas();
const out = new Map();
const put = (rel, content) => out.set(rel, content.endsWith('\n') ? content : content + '\n');
const REPO = 'https://github.com/mathieugouanou/aigovernancechain';
const fmtDate = d => (d ? new Date(d + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }) : 'n/a');
const cell = s => String(s ?? '').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
const obsOf = id => atlas.obligations.filter(o => o.regime === id);

// Tier-1 regimes: 12 groups promised for v0 (US states share one group).
export const TIER1 = [
  { group: 'European Union', ids: ['eu'] },
  { group: 'United States (federal)', ids: ['us'] },
  { group: 'United States (states)', ids: ['us-ca', 'us-co', 'us-tx', 'us-ny', 'us-ny-nyc', 'us-il'] },
  { group: 'China', ids: ['cn'] },
  { group: 'South Korea', ids: ['kr'] },
  { group: 'Japan', ids: ['jp'] },
  { group: 'Vietnam', ids: ['vn'] },
  { group: 'India', ids: ['in'] },
  { group: 'United Kingdom', ids: ['gb'] },
  { group: 'Singapore', ids: ['sg'] },
  { group: 'Switzerland', ids: ['ch'] },
  { group: 'Council of Europe', ids: ['coe'] },
];

// 1. Atlas JSON
const atlasJson = JSON.stringify(atlas, null, 2);
put('atlas/dist/atlas.json', atlasJson);
put('docs/atlas.json', JSON.stringify(atlas));

// 2. Calendar
const ics = toIcs(atlas.deadlines, { stamp: new Date(atlas.generated + 'T00:00:00Z') });
put('calendar/deadlines.ics', ics);
put('docs/deadlines.ics', ics);
for (const g of TIER1) {
  const J = new Set(g.ids.map(id => atlas.regimes.find(r => r.id === id)?.jurisdiction));
  const slug = g.ids.length > 1 ? 'us-states' : g.ids[0];
  put(`calendar/by-regime/${slug}.ics`, toIcs(atlas.deadlines.filter(d => J.has(d.jurisdiction)), { name: `AI-law deadlines: ${g.group} (AI Governance Chain)`, stamp: new Date(atlas.generated + 'T00:00:00Z') }));
}
{
  const L = [];
  const soonEnd = new Date(Date.parse(atlas.generated) + 365 * 86400000).toISOString().slice(0, 10);
  const next = atlas.deadlines.filter(d => d.date >= atlas.generated && d.date <= soonEnd);
  L.push('# World AI-law deadline calendar', '');
  L.push(`Generated from the Obligation Atlas as of **${fmtDate(atlas.generated)}**. ${atlas.deadlines.length} dated events across ${atlas.regimes.length} regimes. Draft open data, not legal advice: check the source before you act.`, '');
  L.push('**Subscribe** (updates when dates move): `https://aigovernancechain.com/deadlines.ics` in Google Calendar, Outlook or Apple Calendar ("add calendar from URL"). Per-regime feeds live in [`calendar/by-regime/`](by-regime/).', '');
  L.push('Spotted a date that moved? [Open a correction](https://github.com/mathieugouanou/aigovernancechain/issues/new?template=obligation-correction.yml). Dates do move: the EU Digital Omnibus and Colorado both shifted dates in 2026.', '');
  L.push(`## Next 12 months (${next.length})`, '');
  L.push('| Date | Where | What | Obligations |', '|---|---|---|---|');
  for (const d of next) L.push(`| ${d.date} | ${d.jurisdiction} | ${cell(d.title)}${d.source ? ` ([source](${d.source}))` : ''} | ${d.obligations.map(x => `\`${x}\``).join(' ')} |`);
  L.push('', '## Everything, by year', '');
  const years = [...new Set(atlas.deadlines.map(d => d.date.slice(0, 4)))].sort();
  for (const y of years) {
    L.push(`<details><summary>${y} (${atlas.deadlines.filter(d => d.date.startsWith(y)).length})</summary>`, '', '| Date | Where | What |', '|---|---|---|');
    for (const d of atlas.deadlines.filter(x => x.date.startsWith(y))) L.push(`| ${d.date} | ${d.jurisdiction} | ${cell(d.title)} |`);
    L.push('', '</details>', '');
  }
  put('calendar/DEADLINES.md', L.join('\n'));
}

// 3. Regime cards
for (const r of atlas.regimes) {
  const obs = obsOf(r.id);
  const L = [];
  L.push(`# ${r.card?.title || r.name}`, '');
  L.push(`> ${r.card?.one_liner || ''}`, '');
  L.push(`**Jurisdiction:** ${JURISDICTIONS[r.jurisdiction] || r.jurisdiction} (\`${r.jurisdiction}\`) · **As of:** ${fmtDate(r.as_of)} · **Review:** ${r.review?.status}${r.review?.reviewers?.length ? ` by ${r.review.reviewers.map(x => `@${x}`).join(', ')}` : ` ([reviewer seat open](../REVIEWERS.md))`}`, '');
  L.push(`**Who it hits:** ${r.card?.who_it_hits || 'n/a'}`, '');
  L.push(`**Status:** ${r.card?.status_line || 'n/a'}`, '');
  L.push('## Instruments', '', '| Instrument | Force | Status | Penalties |', '|---|---|---|---|');
  for (const i of r.instruments) L.push(`| [${cell(i.short || i.code)}](${i.official_url}): ${cell(i.title)} | ${i.legal_force} | ${i.status} | ${cell(i.penalties || 'n/a')} |`);
  const dates = atlas.deadlines.filter(d => d.regime === r.id && d.date >= '2024-01-01');
  if (dates.length) {
    L.push('', '## Key dates', '');
    for (const d of dates) L.push(`- **${d.date}** ${d.date >= r.as_of ? '' : '(passed) '}${d.title}`);
  }
  L.push('', `## Obligations (${obs.length})`, '', '| ID | Article | Obligation | Applies from | Status | Controls | Confidence |', '|---|---|---|---|---|---|---|');
  for (const o of obs) L.push(`| \`${o.id}\` | [${cell(o.article)}](${o.source_url}) | **${cell(o.title)}**: ${cell(o.plain)} | ${o.applies_from || 'n/a'} | ${o.status} | ${(o.controls || []).join(', ')} | ${o.confidence} |`);
  const ctrlCount = {};
  for (const o of obs.filter(o => o.status === 'applicable' || o.status === 'not-yet-applicable')) for (const c of o.controls || []) ctrlCount[c] = (ctrlCount[c] || 0) + 1;
  const top = Object.entries(ctrlCount).sort((a, b) => b[1] - a[1]).slice(0, 5);
  if (top.length) {
    L.push('', '## Start here', '', 'The controls this regime asks for most often. Declare them in your `AI_GOVERNANCE.md`:', '');
    for (const [c, n] of top) L.push(`- \`${c}\`: ${CONTROLS[c]} (${n} obligation${n > 1 ? 's' : ''})`);
  }
  L.push('', '## Check your system', '', '```bash', `npx github:mathieugouanou/aigovernancechain scope -j ${r.jurisdiction} -r deployer -u chatbot`, `npx github:mathieugouanou/aigovernancechain deadlines -j ${r.jurisdiction} --days 365`, '```', '');
  if (r.sources?.length) { L.push('## Sources', ''); for (const s of r.sources) L.push(`- [${cell(s.title)}](${s.url})`); L.push(''); }
  L.push('---', '', `Generated from [\`atlas/regimes/${r.id}.yaml\`](../atlas/regimes/${r.id}.yaml). Edit the YAML, not this card. Draft open data under CC BY 4.0, not legal advice. [Report an error](https://github.com/mathieugouanou/aigovernancechain/issues/new?template=obligation-correction.yml).`);
  put(`cards/${r.id}.md`, L.join('\n'));
}
{
  const L = ['# Regime cards', '', `One page per AI-governance regime: what it is, who it hits, the dates and every obligation with its source. ${atlas.regimes.length} regime files grouped into the 12 Tier-1 regimes. As of ${fmtDate(atlas.generated)}. Draft, not legal advice.`, '', '| Tier-1 regime | Card | Obligations | Next date | Review |', '|---|---|---|---|---|'];
  for (const g of TIER1) for (const [i, id] of g.ids.entries()) {
    const r = atlas.regimes.find(x => x.id === id);
    const next = atlas.deadlines.find(d => d.regime === id && d.date >= atlas.generated);
    L.push(`| ${i === 0 ? `**${g.group}**` : ''} | [${cell(r.card?.title || r.name)}](${id}.md) | ${obsOf(id).length} | ${next ? `${next.date}` : 'n/a'} | ${r.review?.status} |`);
  }
  L.push('', 'Want to own one of these? Each Tier-1 regime has an open [named reviewer seat](../REVIEWERS.md).');
  put('cards/README.md', L.join('\n'));
}

// 4. Skill references (progressive disclosure: the skill loads only the regime it needs)
{
  const idx = ['# Obligation Atlas index (for the ai-law-check skill)', '', `As of ${atlas.generated}. Load only the file for the jurisdiction you need.`, '', '| File | Jurisdiction | Regime | Obligations |', '|---|---|---|---|'];
  for (const r of atlas.regimes) {
    idx.push(`| references/atlas/${r.id}.md | ${r.jurisdiction} | ${cell(r.card?.title || r.name)} | ${obsOf(r.id).length} |`);
    const L = [`# ${r.card?.title || r.name} (${r.jurisdiction})`, '', `As of ${r.as_of}. Review: ${r.review?.status}. ${r.card?.status_line || ''}`, ''];
    for (const o of obsOf(r.id)) {
      L.push(`## ${o.id}: ${o.title}`, `- Rule: ${o.instrument_short} ${o.article} · status ${o.status} · applies from ${o.applies_from || 'n/a'} · confidence ${o.confidence}`, `- Who: roles ${o.applies_to.roles.join(', ')}; uses ${o.applies_to.uses.join(', ')}${o.applies_to.conditions ? `; conditions: ${o.applies_to.conditions}` : ''}`, `- What: ${o.plain}`, `- Controls: ${(o.controls || []).join(', ')}`, `- Source: ${o.source_url}`, '');
    }
    put(`skills/ai-law-check/references/atlas/${r.id}.md`, L.join('\n'));
  }
  put('skills/ai-law-check/references/atlas/INDEX.md', idx.join('\n'));
}

// 5. GovBench
{
  const qs = generateQuestions(atlas);
  put('govbench/questions.jsonl', qs.map(q => JSON.stringify(q)).join('\n'));
  const byType = qs.reduce((m, q) => ((m[q.type] = (m[q.type] || 0) + 1), m), {});
  put('govbench/STATS.md', `# GovBench dataset stats\n\nAs of ${atlas.generated}: **${qs.length} questions** from ${new Set(qs.map(q => q.id.split('#')[0])).size} high-confidence obligations in ${new Set(qs.map(q => q.jurisdiction)).size} jurisdictions.\n\n| Type | Questions |\n|---|---|\n${Object.entries(byType).map(([t, n]) => `| ${t} | ${n} |`).join('\n')}\n`);
}

// 5b. Keep skill references in sync with the spec, examples and vocabulary
put('skills/ai-governance-md/references/AI_GOVERNANCE-spec.md', fs.readFileSync(path.join(ROOT, 'spec', 'AI_GOVERNANCE-spec.md'), 'utf8').replace(/\]\(\.\.\//g, `](${REPO}/blob/main/`).replace(/\]\(examples\//g, '](examples/').replace(/\]\(ai-governance\.schema\.json\)/g, `](${REPO}/blob/main/spec/ai-governance.schema.json)`));
for (const f of fs.readdirSync(path.join(ROOT, 'spec', 'examples'))) put(`skills/ai-governance-md/references/examples/${f}`, fs.readFileSync(path.join(ROOT, 'spec', 'examples', f), 'utf8'));
{
  const { ROLES, USES } = await import('../lib/vocab.mjs');
  const L = ['# Shared vocabulary (ai-governance/v0.1)', '', '## Jurisdictions', '', ...Object.entries(JURISDICTIONS).map(([k, v]) => `- \`${k}\`: ${v}`), '', 'EU member codes (DE, FR, ...) imply EU. US state codes imply US.', '', '## Roles', '', ...ROLES.map(r => `- \`${r}\``), '', '## Uses', '', ...USES.map(u => `- \`${u}\``), '', '## Controls', '', ...Object.entries(CONTROLS).map(([k, v]) => `- \`${k}\`: ${v}`)];
  put('skills/ai-law-check/references/vocabulary.md', L.join('\n'));
}

// 5c. Crosswalk views
{
  const { load } = await import('../vendor/js-yaml.mjs');
  const cw = load(fs.readFileSync(path.join(ROOT, 'crosswalks', 'controls.yaml'), 'utf8'));
  const keys = Object.keys(CONTROLS);
  const missing = keys.filter(k => !cw.controls[k]);
  if (missing.length) { console.error(`crosswalk missing controls: ${missing.join(', ')}`); process.exit(1); }
  const FW = { eu_ai_act: 'EU AI Act', nist_ai_rmf: 'NIST AI RMF 1.0', iso_42001: 'ISO/IEC 42001 Annex A', owasp_agentic: 'OWASP Agentic Top 10 (2026)' };
  const atlasCount = k => atlas.obligations.filter(o => (o.controls || []).includes(k)).length;
  const L = ['# Crosswalks', '', `How the ${keys.length} AI Governance Chain controls relate to the EU AI Act, NIST AI RMF 1.0, ISO/IEC 42001:2023 Annex A and the OWASP Top 10 for Agentic Applications 2026. Declare a control once in \`AI_GOVERNANCE.md\`, see every framework it supports.`, '', `**Status:** ${cw.review.status}, confidence ${cw.review.confidence}, as of ${cw.as_of}. These are indicative "relates to" links, not equivalence or certification mappings. ISO/IEC 42001 is cited by Annex A control number only because the text is paywalled. Data: [\`controls.yaml\`](controls.yaml) (CC BY 4.0). See also [NIST's own AI RMF crosswalks](https://airc.nist.gov/airmf-resources/crosswalks/).`, '', '| Control | Meaning | Atlas obligations | EU AI Act | NIST AI RMF | ISO/IEC 42001 | OWASP Agentic |', '|---|---|---|---|---|---|---|'];
  for (const k of keys) { const c = cw.controls[k]; L.push(`| \`${k}\` | ${CONTROLS[k]} | ${atlasCount(k)} | ${(c.eu_ai_act || []).join(', ') || 'n/a'} | ${(c.nist_ai_rmf || []).join(', ') || 'n/a'} | ${(c.iso_42001 || []).join(', ') || 'n/a'} | ${(c.owasp_agentic || []).join(', ') || 'n/a'} |`); }
  L.push('', '## By framework', '', ...Object.entries(FW).map(([f, t]) => `- [${t}](${f}.md)`), '', 'Found a better mapping? [Open an issue](https://github.com/mathieugouanou/aigovernancechain/issues/new?template=obligation-correction.yml). Reviewers with ISO/IEC 42001 or NIST AI RMF practice are especially welcome.');
  put('crosswalks/README.md', L.join('\n'));
  for (const [f, t] of Object.entries(FW)) {
    const inv = {};
    for (const k of keys) for (const ref of cw.controls[k][f] || []) (inv[ref] ||= []).push(k);
    const refs = Object.keys(inv).sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
    const V = [`# ${t} -> AI Governance Chain controls`, '', `As of ${cw.as_of}. Draft, confidence ${cw.review.confidence}. Source: ${cw.frameworks[f].url}`, '', `| ${t} | Controls in AI_GOVERNANCE.md |`, '|---|---|', ...refs.map(r => `| ${r} | ${inv[r].map(x => `\`${x}\``).join(', ')} |`), '', '[Back to crosswalks](README.md)'];
    put(`crosswalks/${f}.md`, V.join('\n'));
  }
  put('docs/crosswalks.json', JSON.stringify(cw));
}

// 6. Schema copy for the website
const schemaSrc = path.join(ROOT, 'spec', 'ai-governance.schema.json');
if (fs.existsSync(schemaSrc)) put('docs/schema/ai-governance.v0.1.json', fs.readFileSync(schemaSrc, 'utf8'));

// Write or check
let stale = 0;
for (const [rel, content] of out) {
  const abs = path.join(ROOT, rel);
  const cur = fs.existsSync(abs) ? fs.readFileSync(abs, 'utf8') : null;
  if (cur === content) continue;
  if (check) { stale++; console.error(`out of date: ${rel}`); continue; }
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, content);
}
if (check && stale) { console.error(`\n${stale} generated file(s) are out of date. Run: node scripts/build.mjs`); process.exit(1); }
console.log(`${check ? 'Checked' : 'Built'} ${out.size} files: ${atlas.regimes.length} regimes, ${atlas.obligations.length} obligations, ${atlas.deadlines.length} dated events (as of ${atlas.generated}).`);
