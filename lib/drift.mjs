// Check 17: compare the agent section of AI_GOVERNANCE.md with the live agent configuration
// committed in the repository: agent client MCP files and GitHub Actions token permissions.
//
// It reads files only. It cannot see settings outside the repository (a user's home folder,
// organisation or managed policies, cloud IAM, OAuth grants, tokens issued at runtime).
// The runtime rails or a policy enforcement point cover what happens at call time.
import fs from 'node:fs';
import path from 'node:path';
import { load as yamlLoad } from '../vendor/js-yaml.mjs';

// Project-level files that can expose or auto-approve agent tools. Paths are relative to the repository root.
export const CLIENT_FILES = [
  { file: '.mcp.json', client: 'Claude Code', kind: 'servers', key: 'mcpServers' },
  { file: '.claude/settings.json', client: 'Claude Code', kind: 'claude-settings' },
  { file: '.claude/settings.local.json', client: 'Claude Code', kind: 'claude-settings' },
  { file: '.vscode/mcp.json', client: 'VS Code', kind: 'servers', key: 'servers' },
  { file: '.cursor/mcp.json', client: 'Cursor', kind: 'servers', key: 'mcpServers' },
  { file: '.gemini/settings.json', client: 'Gemini CLI', kind: 'servers', key: 'mcpServers' },
  { file: '.roo/mcp.json', client: 'Roo Code', kind: 'servers', key: 'mcpServers' },
];

// GitHub Actions GITHUB_TOKEN permission scopes, used to expand read-all and write-all.
export const TOKEN_SCOPES = ['actions', 'attestations', 'checks', 'contents', 'deployments', 'discussions', 'id-token', 'issues', 'models', 'packages', 'pages', 'pull-requests', 'security-events', 'statuses'];
const RANK = { none: 0, read: 1, write: 2 };

// JSON with comments and trailing commas (VS Code and Gemini CLI accept both).
export function parseJsonc(src) {
  let out = '';
  let inStr = false;
  for (let i = 0; i < src.length; i++) {
    const ch = src[i], nx = src[i + 1];
    if (inStr) {
      out += ch;
      if (ch === '\\') { out += nx ?? ''; i++; } else if (ch === '"') inStr = false;
      continue;
    }
    if (ch === '"') { inStr = true; out += ch; continue; }
    if (ch === '/' && nx === '/') { while (i < src.length && src[i] !== '\n') i++; out += '\n'; continue; }
    if (ch === '/' && nx === '*') { i += 2; while (i < src.length && !(src[i] === '*' && src[i + 1] === '/')) i++; i++; continue; }
    out += ch;
  }
  return JSON.parse(out.replace(/,(\s*[}\]])/g, '$1'));
}

const list = v => (Array.isArray(v) ? v.map(String) : []);
const normServer = s => String(s).replace(/[.\s]/g, '_');

// Read the live configuration under root. Returns { root, files, servers, approvals, workflows, errors }.
export function collectLiveConfig(root = process.cwd()) {
  const live = { root, files: [], servers: [], approvals: [], workflows: {}, errors: [] };
  const read = rel => { const p = path.join(root, rel); return fs.existsSync(p) && fs.statSync(p).isFile() ? fs.readFileSync(p, 'utf8') : null; };
  const claudeDisabled = new Set();
  const claudeRules = [];

  for (const spec of CLIENT_FILES) {
    const src = read(spec.file);
    if (src === null) continue;
    let json;
    try { json = parseJsonc(src); } catch (e) { live.errors.push(`${spec.file}: cannot parse (${e.message.split('\n')[0]})`); continue; }
    live.files.push(spec.file);
    if (spec.kind === 'claude-settings') {
      for (const s of list(json.disabledMcpjsonServers)) claudeDisabled.add(normServer(s));
      const perms = json.permissions || {};
      for (const r of list(perms.allow)) claudeRules.push({ file: spec.file, rule: r, effect: 'allow' });
      for (const r of list(perms.deny)) claudeRules.push({ file: spec.file, rule: r, effect: 'deny' });
      if (perms.defaultMode === 'bypassPermissions') live.approvals.push({ client: spec.client, file: spec.file, server: '*', pattern: '*', via: 'defaultMode: bypassPermissions' });
      continue;
    }
    const servers = json[spec.key] && typeof json[spec.key] === 'object' ? json[spec.key] : {};
    const gem = spec.client === 'Gemini CLI' ? (json.mcp || {}) : {};
    for (const [name, cfg] of Object.entries(servers)) {
      if (!cfg || typeof cfg !== 'object') continue;
      if (cfg.disabled === true) continue;
      if (Array.isArray(gem.allowed) && !gem.allowed.includes(name)) continue;
      if (list(gem.excluded).includes(name)) continue;
      const removed = new Set([...list(cfg.excludeTools), ...list(cfg.disabledTools)]);
      let exposed = null; // null: every tool the server offers
      if (Array.isArray(cfg.includeTools)) exposed = list(cfg.includeTools).filter(t => !removed.has(t));
      live.servers.push({ client: spec.client, file: spec.file, name, exposed, removed: [...removed] });
      if (spec.client === 'Gemini CLI' && cfg.trust === true) live.approvals.push({ client: spec.client, file: spec.file, server: name, pattern: '*', via: 'trust: true' });
      for (const t of list(cfg.alwaysAllow)) if (!removed.has(t)) live.approvals.push({ client: spec.client, file: spec.file, server: name, pattern: t, via: 'alwaysAllow' });
    }
  }

  // Claude Code permission rules name MCP tools as mcp__<server>__<tool>, mcp__<server>__* or mcp__<server>.
  // Other rules (Bash, Edit, WebFetch and so on) are built-in tools and are not compared here.
  const denies = claudeRules.filter(r => r.effect === 'deny').map(r => parseClaudeRule(r.rule)).filter(Boolean);
  for (const r of claudeRules.filter(x => x.effect === 'allow')) {
    const p = parseClaudeRule(r.rule);
    if (!p || claudeDisabled.has(p.server)) continue;
    if (p.pattern !== '*' && !p.pattern.includes('*') && denies.some(d => d.server === p.server && globMatch(d.pattern, p.pattern))) continue;
    live.approvals.push({ client: 'Claude Code', file: r.file, server: p.server, pattern: p.pattern, via: `permissions.allow "${r.rule}"` });
  }
  live.servers = live.servers.filter(s => !(s.file === '.mcp.json' && claudeDisabled.has(normServer(s.name))));
  return live;
}

function parseClaudeRule(rule) {
  const m = /^mcp__(.+?)(?:__(.+))?$/.exec(String(rule).trim());
  if (!m || m[1].includes('*')) return null; // unanchored globs approve nothing in Claude Code
  return { server: m[1], pattern: m[2] || '*' };
}

export function globMatch(pattern, name) {
  if (!String(pattern).includes('*')) return pattern === name;
  const re = new RegExp('^' + String(pattern).split('*').map(s => s.replace(/[.+?^${}()|[\]\\]/g, '\\$&')).join('.*') + '$');
  return re.test(name);
}

// A declared tool name matches a live tool when it is the bare tool name or a server-qualified form.
function qualifiedForms(server, tool) {
  const s = String(server), n = normServer(server);
  return new Set([tool, `${s}.${tool}`, `${s}/${tool}`, `${s}__${tool}`, `mcp__${n}__${tool}`, `${n}.${tool}`, `${n}__${tool}`]);
}
function declaredFor(tools, server, tool) {
  const forms = qualifiedForms(server, tool);
  return tools.find(t => forms.has(String(t.name)));
}
// Declared tools that a wildcard approval on a server can reach: names qualified with that server,
// plus bare names the server is known to expose.
function declaredUnder(tools, server, pattern, exposed) {
  const n = normServer(server);
  return tools.filter(t => {
    const name = String(t.name);
    for (const pre of [`${server}.`, `${server}/`, `${server}__`, `mcp__${n}__`, `${n}.`, `${n}__`]) if (name.startsWith(pre)) return globMatch(pattern, name.slice(pre.length));
    return Array.isArray(exposed) && exposed.includes(name) && globMatch(pattern, name);
  });
}
const needsHuman = t => ['human', 'two-person'].includes(String(t?.approval || '').toLowerCase());

function normPerms(p) {
  if (p === undefined || p === null) return null;
  if (p === 'read-all') return Object.fromEntries(TOKEN_SCOPES.map(k => [k, 'read']));
  if (p === 'write-all') return Object.fromEntries(TOKEN_SCOPES.map(k => [k, 'write']));
  if (typeof p !== 'object') return {};
  return Object.fromEntries(Object.entries(p).map(([k, v]) => [k, String(v).toLowerCase()]));
}

function compareWorkflows(ci, root, findings) {
  const max = normPerms(ci.max_permissions);
  const wfs = list(ci.workflows);
  if (!max) findings.push({ status: 'fail', message: 'agent.ci has no max_permissions: declare the most the GITHUB_TOKEN may hold in the agent workflows' });
  if (!wfs.length) findings.push({ status: 'fail', message: 'agent.ci.workflows lists no workflow file' });
  let compared = 0;
  for (const rel of wfs) {
    const p = path.join(root, rel);
    if (!fs.existsSync(p)) { findings.push({ status: 'fail', message: `${rel} is declared in agent.ci.workflows but does not exist` }); continue; }
    let wf;
    try { wf = yamlLoad(fs.readFileSync(p, 'utf8')) || {}; } catch (e) { findings.push({ status: 'fail', message: `${rel}: cannot parse YAML (${e.message.split('\n')[0]})` }); continue; }
    const jobs = wf.jobs && typeof wf.jobs === 'object' ? wf.jobs : {};
    for (const [job, cfg] of Object.entries(jobs)) {
      compared++;
      const eff = normPerms(cfg?.permissions ?? wf.permissions);
      if (!eff) { findings.push({ status: 'warn', message: `${rel} job "${job}" sets no permissions, so the token gets the repository default (read and write on many older repositories). Set permissions explicitly` }); continue; }
      if (!max) continue;
      const wider = Object.entries(eff).filter(([k, v]) => (RANK[v] ?? 2) > (RANK[max[k]] ?? 0)).map(([k, v]) => `${k}: ${v}`);
      if (wider.length) findings.push({ status: 'fail', message: `${rel} job "${job}" grants ${wider.join(', ')}, wider than agent.ci.max_permissions` });
    }
  }
  return compared;
}

// Compare the declared agent section with the live configuration.
// Returns { status: pass|warn|fail|skip, message, findings }.
export function compareLiveConfig(fm, live) {
  const agent = fm?.agent || {};
  const tools = Array.isArray(agent.tools) ? agent.tools : [];
  const strict = agent.default_deny !== false;
  const findings = [];
  for (const e of live.errors || []) findings.push({ status: 'fail', message: e });

  for (const s of live.servers) {
    if (Array.isArray(s.exposed)) {
      for (const t of s.exposed) if (!declaredFor(tools, s.name, t)) findings.push({ status: strict ? 'fail' : 'warn', message: `${s.file}: server "${s.name}" exposes tool "${t}", which agent.tools does not declare` });
    } else {
      findings.push({ status: 'warn', message: `${s.file}: server "${s.name}" exposes every tool it offers, so the file cannot be compared tool by tool. Add a tool allowlist where the client supports one, or route its calls through the rails or a policy enforcement point` });
    }
  }

  for (const a of live.approvals) {
    const where = `${a.file} (${a.via})`;
    if (!a.pattern.includes('*')) {
      const d = declaredFor(tools, a.server, a.pattern);
      if (!d) findings.push({ status: strict ? 'fail' : 'warn', message: `${where} auto-approves "${a.pattern}" on server "${a.server}", which agent.tools does not declare` });
      else if (needsHuman(d)) findings.push({ status: 'fail', message: `${where} auto-approves "${a.pattern}", but the file requires approval: ${d.approval} for ${d.name}` });
      continue;
    }
    if (a.server === '*') {
      const human = tools.filter(needsHuman);
      findings.push({ status: human.length ? 'fail' : 'warn', message: `${where} runs every tool without asking${human.length ? `, including ${human.map(t => t.name).join(', ')}, which the file says need human approval` : ''}` });
      continue;
    }
    const exposed = live.servers.find(s => s.name === a.server || normServer(s.name) === normServer(a.server))?.exposed ?? null;
    const reach = declaredUnder(tools, a.server, a.pattern, exposed);
    const human = reach.filter(needsHuman);
    if (human.length) findings.push({ status: 'fail', message: `${where} auto-approves every tool matching "${a.pattern}" on server "${a.server}", including ${human.map(t => t.name).join(', ')}, which the file says need human approval` });
    else findings.push({ status: 'warn', message: `${where} auto-approves every tool matching "${a.pattern}" on server "${a.server}", including tools the server adds later. List the tools by name` });
  }

  let workflows = 0;
  if (agent.ci) workflows = compareWorkflows(agent.ci, live.root, findings);

  const nothing = !live.files.length && !(live.errors || []).length && !agent.ci;
  if (nothing) return { status: 'skip', message: 'Nothing to compare: no agent client config (.mcp.json, .claude/settings.json, .vscode/mcp.json, .cursor/mcp.json, .gemini/settings.json, .roo/mcp.json) and no agent.ci in this repository', findings };
  const fails = findings.filter(f => f.status === 'fail'), warns = findings.filter(f => f.status === 'warn');
  const status = fails.length ? 'fail' : warns.length ? 'warn' : 'pass';
  if (status === 'pass') {
    const parts = [];
    if (live.servers.length) parts.push(`${live.servers.length} MCP server(s)`);
    if (live.approvals.length) parts.push(`${live.approvals.length} auto-approval(s)`);
    if (workflows) parts.push(`${workflows} workflow job(s)`);
    return { status, message: `The live config stays within the declared agent: ${parts.join(', ') || 'no tools granted'} checked in ${[...live.files, ...(agent.ci ? list(agent.ci.workflows) : [])].join(', ')}`, findings };
  }
  const shown = [...fails, ...warns];
  return { status, message: shown.slice(0, 3).map(f => f.message).join('; ') + (shown.length > 3 ? `; and ${shown.length - 3} more` : ''), findings };
}
