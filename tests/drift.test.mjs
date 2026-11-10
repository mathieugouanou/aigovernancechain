// Check 17: the declared agent versus the live config committed in the repository.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { compileAtlas } from '../lib/atlas.mjs';
import { runChecks } from '../lib/governance-md.mjs';
import { collectLiveConfig, compareLiveConfig, parseJsonc } from '../lib/drift.mjs';

const atlas = compileAtlas();
const today = '2026-11-10';

const AGENT = (extra = '') => `---
spec: ai-governance/v0.1
system: { name: a, owner: b }
roles: [deployer]
jurisdictions: [JP]
uses: [agent]
agent:
  default_deny: true
  tools:
    - { name: github.search_issues, scope: read }
    - { name: github.create_issue, scope: write, approval: human }
    - { name: lint, scope: read }
  kill_switch: "Owner sets agent_enabled=false"
  spend_limit: { amount: 0, currency: USD, period: day }
${extra}contacts: { governance: x }
review: { last_reviewed: "2026-11-01" }
---
`;

function repo(files) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'agc-drift-'));
  for (const [rel, body] of Object.entries(files)) {
    fs.mkdirSync(path.dirname(path.join(dir, rel)), { recursive: true });
    fs.writeFileSync(path.join(dir, rel), typeof body === 'string' ? body : JSON.stringify(body, null, 2));
  }
  return dir;
}
const chk17 = (md, dir) => runChecks({ text: md, atlas, today, live: dir ? collectLiveConfig(dir) : null }).results.find(r => r.id === 'AGC-CHK-17');

test('check 17 is skipped for a non-agent, without a repository, or with nothing to compare', () => {
  const chatbot = AGENT().replace('uses: [agent]', 'uses: [chatbot]');
  assert.equal(chk17(chatbot, repo({})).status, 'skip');
  assert.equal(chk17(AGENT(), null).status, 'skip');
  const r = chk17(AGENT(), repo({}));
  assert.equal(r.status, 'skip');
  assert.match(r.message, /Nothing to compare/);
});

test('Claude Code: auto-approving a tool the file says needs a human fails', () => {
  const dir = repo({
    '.mcp.json': { mcpServers: { github: { command: 'npx', args: ['-y', 'github-mcp'] } } },
    '.claude/settings.json': { permissions: { allow: ['mcp__github__search_issues', 'mcp__github__create_issue', 'Bash(npm test)'] } },
  });
  const r = chk17(AGENT(), dir);
  assert.equal(r.status, 'fail');
  assert.match(r.message, /auto-approves "create_issue", but the file requires approval: human/);
  assert.ok(!r.details.some(d => /search_issues/.test(d.message)), 'declared read tool is fine');
});

test('Claude Code: an approved tool missing from agent.tools fails, and deny rules win', () => {
  const dir = repo({
    '.mcp.json': { mcpServers: { github: { command: 'x' } } },
    '.claude/settings.json': { permissions: { allow: ['mcp__github__delete_repo', 'mcp__github__merge_pr'], deny: ['mcp__github__merge_pr'] } },
  });
  const r = chk17(AGENT(), dir);
  assert.equal(r.status, 'fail');
  assert.match(r.message, /"delete_repo" on server "github", which agent.tools does not declare/);
  assert.ok(!r.details.some(d => /merge_pr/.test(d.message)));
});

test('Claude Code: a server-wide wildcard fails when it covers a human-approval tool', () => {
  const dir = repo({ '.mcp.json': { mcpServers: { github: { command: 'x' } } }, '.claude/settings.json': { permissions: { allow: ['mcp__github__*'] } } });
  const r = chk17(AGENT(), dir);
  assert.equal(r.status, 'fail');
  assert.match(r.message, /including github.create_issue/);
  const read = repo({ '.mcp.json': { mcpServers: { github: { command: 'x' } } }, '.claude/settings.json': { permissions: { allow: ['mcp__github__search_*'] } } });
  assert.ok(chk17(AGENT(), read).details.some(d => d.status === 'warn' && /including tools the server adds later/.test(d.message)));
});

test('Claude Code: defaultMode bypassPermissions fails when the file requires human approval', () => {
  const dir = repo({ '.claude/settings.json': { permissions: { defaultMode: 'bypassPermissions' } } });
  const r = chk17(AGENT(), dir);
  assert.equal(r.status, 'fail');
  assert.match(r.message, /defaultMode: bypassPermissions\) runs every tool without asking, including github.create_issue/);
});

test('Claude Code: servers rejected in disabledMcpjsonServers are ignored', () => {
  const dir = repo({ '.mcp.json': { mcpServers: { github: { command: 'x' } } }, '.claude/settings.local.json': { disabledMcpjsonServers: ['github'], permissions: { allow: ['mcp__github__delete_repo'] } } });
  assert.equal(chk17(AGENT(), dir).status, 'pass');
});

test('Gemini CLI: includeTools within the file passes; an extra tool fails; trust: true over a human tool fails', () => {
  const ok = repo({ '.gemini/settings.json': { mcpServers: { github: { command: 'x', includeTools: ['search_issues', 'create_issue'] } } } });
  const r = chk17(AGENT(), ok);
  assert.equal(r.status, 'pass', r.message);
  assert.match(r.message, /1 MCP server\(s\)/);
  const extra = repo({ '.gemini/settings.json': { mcpServers: { github: { command: 'x', includeTools: ['search_issues', 'delete_repo'], excludeTools: ['delete_repo'] }, shell: { command: 'y', includeTools: ['run'] } } } });
  const e = chk17(AGENT(), extra);
  assert.equal(e.status, 'fail');
  assert.match(e.message, /server "shell" exposes tool "run"/);
  assert.ok(!e.details.some(d => /delete_repo/.test(d.message)), 'excludeTools wins over includeTools');
  const trusted = repo({ '.gemini/settings.json': { mcpServers: { github: { command: 'x', includeTools: ['search_issues', 'create_issue'], trust: true } } } });
  assert.match(chk17(AGENT(), trusted).message, /trust: true.*create_issue.*need human approval/);
  const excluded = repo({ '.gemini/settings.json': { mcp: { excluded: ['shell'] }, mcpServers: { shell: { command: 'y', includeTools: ['run'] } } } });
  assert.equal(chk17(AGENT(), excluded).status, 'pass');
});

test('VS Code and Cursor: a server with no tool allowlist warns; JSONC comments and trailing commas parse', () => {
  const dir = repo({ '.vscode/mcp.json': '{\n  // project servers\n  "servers": {\n    "docs": { "type": "http", "url": "https://example.test/mcp", },\n  },\n}\n' });
  const r = chk17(AGENT(), dir);
  assert.equal(r.status, 'warn');
  assert.match(r.message, /server "docs" exposes every tool it offers/);
  assert.deepEqual(parseJsonc('{"u":"https://x.test//a", /* c */ "b":[1,2,],}'), { u: 'https://x.test//a', b: [1, 2] });
  const bad = repo({ '.cursor/mcp.json': '{ not json' });
  assert.equal(chk17(AGENT(), bad).status, 'fail');
});

test('Roo Code: alwaysAllow is compared and disabled servers or tools are ignored', () => {
  const dir = repo({ '.roo/mcp.json': { mcpServers: { github: { command: 'x', alwaysAllow: ['create_issue', 'delete_repo'], disabledTools: ['delete_repo'] }, old: { command: 'z', disabled: true, alwaysAllow: ['anything'] } } } });
  const r = chk17(AGENT(), dir);
  assert.equal(r.status, 'fail');
  assert.match(r.message, /alwaysAllow\) auto-approves "create_issue"/);
  assert.ok(!r.details.some(d => /delete_repo|anything/.test(d.message)));
});

test('default_deny: false turns undeclared tools into warnings', () => {
  const md = AGENT().replace('default_deny: true', 'default_deny: false');
  const dir = repo({ '.gemini/settings.json': { mcpServers: { shell: { command: 'y', includeTools: ['run'] } } } });
  assert.equal(chk17(md, dir).status, 'warn');
});

test('agent.ci: workflow token permissions wider than max_permissions fail', () => {
  const md = AGENT().replace('  kill_switch:', '  ci: { workflows: [.github/workflows/agent.yml], max_permissions: { contents: read, pull-requests: write } }\n  kill_switch:');
  assert.ok(md.includes('ci: {'));
  const ok = repo({ '.github/workflows/agent.yml': 'on: pull_request\npermissions:\n  contents: read\njobs:\n  review:\n    runs-on: ubuntu-latest\n    permissions: { contents: read, pull-requests: write }\n    steps: [{ run: echo }]\n' });
  assert.equal(chk17(md, ok).status, 'pass');
  const wide = repo({ '.github/workflows/agent.yml': 'on: pull_request\npermissions: write-all\njobs:\n  review:\n    runs-on: ubuntu-latest\n    steps: [{ run: echo }]\n  fix:\n    runs-on: ubuntu-latest\n    permissions: { contents: write }\n    steps: [{ run: echo }]\n' });
  const r = chk17(md, wide);
  assert.equal(r.status, 'fail');
  assert.match(r.message, /job "review" grants .*contents: write/);
  assert.ok(r.details.some(d => /job "fix" grants contents: write/.test(d.message)));
  const unset = repo({ '.github/workflows/agent.yml': 'on: push\njobs:\n  run:\n    runs-on: ubuntu-latest\n    steps: [{ run: echo }]\n' });
  assert.equal(chk17(md, unset).status, 'warn');
  const readAll = repo({ '.github/workflows/agent.yml': 'on: push\npermissions: read-all\njobs:\n  run:\n    runs-on: ubuntu-latest\n    steps: [{ run: echo }]\n' });
  assert.match(chk17(md, readAll).message, /grants actions: read/);
  assert.match(chk17(md, repo({})).message, /does not exist/);
  const noMax = AGENT().replace('  kill_switch:', '  ci: { workflows: [] }\n  kill_switch:');
  assert.equal(chk17(noMax, repo({})).status, 'fail');
});

test('the CLI runs check 17 against the repository next to the file', () => {
  const dir = repo({ 'AI_GOVERNANCE.md': AGENT(), '.mcp.json': { mcpServers: { github: { command: 'x' } } }, '.claude/settings.json': { permissions: { allow: ['mcp__github__create_issue'] } } });
  let out, code = 0;
  try { out = execFileSync(process.execPath, ['cli/aigovchain.mjs', 'check', '--file', path.join(dir, 'AI_GOVERNANCE.md'), '--format', 'json', '--fail-on', 'never'], { encoding: 'utf8' }); } catch (e) { code = e.status; out = e.stdout; }
  assert.equal(code, 0);
  const r = JSON.parse(out).results.find(x => x.id === 'AGC-CHK-17');
  assert.equal(r.status, 'fail');
  const nested = repo({ '.git/HEAD': 'ref: refs/heads/main\n', 'docs/AI_GOVERNANCE.md': AGENT(), '.roo/mcp.json': { mcpServers: { github: { command: 'x', alwaysAllow: ['delete_repo'] } } } });
  const n = JSON.parse(execFileSync(process.execPath, ['cli/aigovchain.mjs', 'check', '--file', path.join(nested, 'docs', 'AI_GOVERNANCE.md'), '--format', 'json', '--fail-on', 'never'], { encoding: 'utf8' }));
  assert.equal(n.results.find(x => x.id === 'AGC-CHK-17').status, 'fail', 'finds the config at the repository root');
  const off = JSON.parse(execFileSync(process.execPath, ['cli/aigovchain.mjs', 'check', '--file', path.join(dir, 'AI_GOVERNANCE.md'), '--format', 'json', '--fail-on', 'never', '--no-live'], { encoding: 'utf8' }));
  assert.equal(off.results.find(x => x.id === 'AGC-CHK-17').status, 'skip');
});

test('compareLiveConfig reports pass with a summary when everything matches', () => {
  const live = { root: '.', files: ['.roo/mcp.json'], servers: [{ client: 'Roo Code', file: '.roo/mcp.json', name: 'github', exposed: ['search_issues'], removed: [] }], approvals: [{ client: 'Roo Code', file: '.roo/mcp.json', server: 'github', pattern: 'search_issues', via: 'alwaysAllow' }], errors: [] };
  const r = compareLiveConfig({ agent: { tools: [{ name: 'github.search_issues', scope: 'read' }] } }, live);
  assert.equal(r.status, 'pass');
  assert.match(r.message, /1 MCP server\(s\), 1 auto-approval\(s\)/);
});
