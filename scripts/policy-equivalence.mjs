#!/usr/bin/env node
// Checks that the compiled OPA (Rego) and Cedar policies decide exactly like the runtime rails.
// Needs the opa binary (env OPA or on PATH) and @cedar-policy/cedar-wasm (env CEDAR_WASM or installed).
// Used by CI (.github/workflows/ci.yml, job "policy-engines"). Not needed to use the CLI.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { createRails } from '../rails/rails.mjs';
import { compilePolicy, sqlFacts, MEMORY_TOOL, agentModel } from '../lib/policy.mjs';
import { parseGovernanceMd } from '../lib/governance-md.mjs';

export const POLICY_TEST_RULES = `---
spec: ai-governance/v0.1
system: { name: "Policy test agent", owner: "ops-lead@acme.example" }
roles: [deployer]
jurisdictions: [EU]
uses: [agent]
agent:
  default_deny: true
  tools:
    - { name: search_docs, scope: read }
    - { name: issue_refund, scope: payment, limits: { max_amount: 100, currency: EUR }, approval: human }
    - { name: wire_funds, scope: payment, limits: { max_amount: 1000, currency: EUR }, approval: two-person }
    - { name: send_email, scope: send, limits: { allowed_recipient_domains: [acme.example], max_calls: 3 } }
    - { name: call_paid_api, scope: payment, limits: { max_amount: 50 } }
    - { name: run_sql, scope: execute, limits: { read_only: true, allowed_tables: [orders, products] } }
    - { name: reset_password, scope: admin, run_as: svc-helpdesk, limits: { max_calls: 5 } }
    - { name: delete_user, scope: delete }
    - { name: publish_post, scope: write, approval: human }
  spend_limit: { amount: 500, currency: EUR, period: day }
  circuit_breaker: { max_consecutive_errors: 3 }
  memory: { write_sources: [user], retention_days: 30 }
  kill_switch: "On-call engineer sets agent_enabled=false"
  trust_boundaries:
    - { source: email, treat_as: data }
    - { source: web, treat_as: data }
controls:
  tool_scope: { status: implemented, how: "Rails and compiled policies" }
review: { last_reviewed: "2026-11-09" }
---
`;

// Deterministic pseudo-random generator so every run tests the same cases.
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 2 ** 32; }; }
const pick = (r, a) => a[Math.floor(r() * a.length)];

export function makeCases(n = 600, seed = 42) {
  const r = rng(seed);
  const tools = ['search_docs', 'issue_refund', 'wire_funds', 'send_email', 'call_paid_api', 'run_sql', 'reset_password', 'delete_user', 'publish_post', 'drop_database', MEMORY_TOOL];
  const cases = [];
  for (let i = 0; i < n; i++) {
    const c = {
      tool: pick(r, tools),
      amount: pick(r, [undefined, undefined, 0, 20, 50, 51, 100, 101, 400, 1000, 1001]),
      recipient_domain: pick(r, [undefined, 'acme.example', 'evil.example']),
      instruction_source: pick(r, [undefined, 'user', 'user', 'email', 'web']),
      identity: pick(r, [undefined, 'svc-helpdesk', 'svc-helpdesk', 'admin-root']),
      human_approved: pick(r, [false, true]),
      approvals: pick(r, [0, 1, 2]),
      calls_before: pick(r, [0, 0, 2, 3, 5]),
      spent: pick(r, [0, 0, 450]),
      kill_switch_engaged: r() < 0.05,
      consecutive_errors: pick(r, [0, 0, 0, 2, 3]),
      sql: pick(r, [undefined, 'SELECT count(*) FROM orders', 'DELETE FROM orders WHERE id = 1', 'SELECT email FROM customers', 'SELECT p.name FROM products p JOIN orders o ON o.pid = p.id']),
      memory_source: pick(r, ['user', 'web', 'email']),
    };
    if (!c.human_approved) c.approvals = 0;
    cases.push(c);
  }
  return cases;
}

const clean = o => Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined));

export function toInput(c) {
  const f = c.sql ? sqlFacts(c.sql) : {};
  return clean({
    tool: c.tool, amount: c.amount, recipient_domain: c.recipient_domain, instruction_source: c.instruction_source,
    identity: c.identity, human_approved: c.human_approved, approvals: c.approvals, calls_before: c.calls_before,
    spent: c.spent, kill_switch_engaged: c.kill_switch_engaged, consecutive_errors: c.consecutive_errors,
    sql_writes: c.sql ? f.sql_writes : undefined, sql_tables: c.sql ? f.sql_tables : undefined,
    memory_source: c.tool === MEMORY_TOOL ? c.memory_source : undefined,
  });
}

export async function railsDecision(text, c) {
  const fm = parseGovernanceMd(text).frontMatter;
  const tool = (fm.agent.tools || []).find(t => t.name === c.tool);
  const need = tool && tool.approval === 'two-person' ? 2 : 1;
  const rails = createRails({ text, approver: async () => c.human_approved && c.approvals >= need, clock: () => 't' });
  rails.state.calls[c.tool] = c.calls_before;
  rails.state.spent = c.spent;
  rails.state.errors = c.consecutive_errors;
  if (c.kill_switch_engaged) rails.state.killed = true;
  const args = clean({ to: c.recipient_domain ? `someone@${c.recipient_domain}` : undefined, query: c.sql });
  const meta = clean({ amount: c.amount, instructionSource: c.instruction_source, identity: c.identity, memorySource: c.tool === MEMORY_TOOL ? c.memory_source : undefined });
  const d = await rails.decide(c.tool, args, meta);
  return d.decision === 'block' ? 'deny' : 'allow';
}

export function opaDecisions(rego, inputs, opa = process.env.OPA || 'opa') {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'agc-opa-'));
  fs.writeFileSync(path.join(dir, 'policy.rego'), rego);
  fs.writeFileSync(path.join(dir, 'input.json'), JSON.stringify({ cases: inputs }));
  const q = '[d | some i; c := input.cases[i]; d := data.aigovernancechain.agent.allow with input as c]';
  const out = JSON.parse(execFileSync(opa, ['eval', '--format', 'json', '-d', path.join(dir, 'policy.rego'), '-i', path.join(dir, 'input.json'), q], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }));
  return out.result[0].expressions[0].value.map(v => (v ? 'allow' : 'deny'));
}

export async function loadCedar() {
  const spec = process.env.CEDAR_WASM || '@cedar-policy/cedar-wasm/nodejs';
  try { return await import(spec); } catch { /* fall through */ }
  const req = createRequire(path.join(process.cwd(), 'noop.js'));
  return import(req.resolve('@cedar-policy/cedar-wasm/nodejs'));
}

export function cedarDecisions(cedar, compiled, model, inputs) {
  const declared = new Set([...model.tools.map(t => t.name), MEMORY_TOOL]);
  const principal = { type: 'Agent', id: compiled.principal.match(/"(.*)"/)[1] };
  return inputs.map(inp => {
    if (!declared.has(inp.tool)) return 'deny'; // Cedar only knows declared actions: undeclared tools are denied.
    const ctx = { kill_switch_engaged: !!inp.kill_switch_engaged, human_approved: !!inp.human_approved, approvals: inp.approvals ?? 0, calls_before: inp.calls_before ?? 0, spent: inp.spent ?? 0, consecutive_errors: inp.consecutive_errors ?? 0 };
    for (const k of ['amount', 'recipient_domain', 'instruction_source', 'identity', 'sql_writes', 'sql_tables', 'memory_source']) if (inp[k] !== undefined) ctx[k] = inp[k];
    const ans = cedar.isAuthorized({ principal, action: { type: 'Action', id: inp.tool }, resource: { type: 'Tool', id: inp.tool }, context: ctx, schema: compiled.schema, validateRequest: true, policies: { staticPolicies: compiled.policies }, entities: [] });
    if (ans.type !== 'success') throw new Error(`Cedar error for ${JSON.stringify(inp)}: ${JSON.stringify(ans.errors)}`);
    return ans.response.decision === 'allow' ? 'allow' : 'deny';
  });
}

export async function runEquivalence({ text = POLICY_TEST_RULES, n = 600, log = console.log } = {}) {
  const fm = parseGovernanceMd(text).frontMatter;
  const cases = makeCases(n);
  const inputs = cases.map(toInput);
  const rails = [];
  for (const c of cases) rails.push(await railsDecision(text, c));
  const rego = compilePolicy(text, 'rego')['policy.rego'];
  const opa = opaDecisions(rego, inputs);
  const cedar = await loadCedar();
  const cc = compilePolicy(text, 'cedar');
  const v = cedar.validate({ schema: cc['policy.cedarschema'], policies: { staticPolicies: cc['policy.cedar'] } });
  if (v.type !== 'success' || v.validationErrors.length) throw new Error(`Cedar validation failed: ${JSON.stringify(v)}`);
  const { toCedar } = await import('../lib/policy.mjs');
  const ced = cedarDecisions(cedar, toCedar(fm), agentModel(fm), inputs);
  const diffs = [];
  cases.forEach((c, i) => { if (rails[i] !== opa[i] || rails[i] !== ced[i]) diffs.push({ case: inputs[i], rails: rails[i], opa: opa[i], cedar: ced[i] }); });
  const allows = rails.filter(x => x === 'allow').length;
  log(`policy equivalence: ${cases.length} requests, ${allows} allowed and ${cases.length - allows} blocked by the rails; OPA differs on ${opa.filter((x, i) => x !== rails[i]).length}, Cedar differs on ${ced.filter((x, i) => x !== rails[i]).length}`);
  return { cases: cases.length, allows, diffs };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const r = await runEquivalence();
  if (r.diffs.length) { console.error(JSON.stringify(r.diffs.slice(0, 10), null, 2)); process.exit(1); }
}
