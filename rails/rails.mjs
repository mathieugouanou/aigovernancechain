// Agent rails: enforce the agent section of AI_GOVERNANCE.md at runtime.
// Alpha. Zero dependencies. Works with any agent framework: wrap each tool function with rails.guard().
//
//   import { createRails } from 'aigovernancechain/rails';
//   const rails = createRails({ file: 'AI_GOVERNANCE.md', approver: async req => askHuman(req) });
//   const refund = rails.guard('issue_refund', issueRefund, { amount: a => a.amount });
//   await refund({ amount: 20 });          // allowed and logged
//   await refund({ amount: 10000 });       // blocked or sent to a human, per the file
import fs from 'node:fs';
import { parseGovernanceMd } from '../lib/governance-md.mjs';
import { sqlFacts, MEMORY_TOOL } from '../lib/policy.mjs';

export class RailsBlocked extends Error {
  constructor(decision) { super(`[AI Governance Chain] blocked ${decision.tool}: ${decision.reason}`); this.name = 'RailsBlocked'; this.decision = decision; }
}

const SCOPES_NEEDING_BOUNDS = ['write', 'payment', 'delete', 'admin', 'execute', 'send'];
const ON = s => ['implemented', 'partial'].includes(typeof s === 'object' && s ? s.status : s);

// Deterministic screens for agent.manipulation_guard. Keyword patterns only: they catch the toy
// scenarios in the CTF and obvious cases. A real deployment also needs design review and testing.
export const MANIPULATION_TACTICS = {
  false_urgency: /\b(only|just)\s+\d+\s+(seconds?|minutes?|hours?)\s+left\b|\bact now\b|\blast chance\b|\b(offer|deal|discount) (ends|expires) (in|today|tonight)\b/i,
  confirmshaming: /\bno thanks,? i (prefer|would rather|don'?t care|like)\b|\bare you sure you want to (abandon|give up on|let down|risk)\b/i,
  exploit_vulnerability: /\b(since|because|as|now that) (money is tight|you('re| are) (struggling|unemployed|in debt|alone|lonely|elderly|vulnerable)|you (lost|have lost) your job)\b|\bcan'?t afford to (lose|miss)\b/i,
  false_scarcity: /\bonly \d+ (spots?|places?|seats?|units?) left\b/i,
};

function loadConfig({ file, text, config }) {
  if (config) return config;
  const src = text ?? fs.readFileSync(file || 'AI_GOVERNANCE.md', 'utf8');
  const p = parseGovernanceMd(src);
  if (p.error) throw new Error(`Cannot read AI_GOVERNANCE.md: ${p.error}`);
  return p.frontMatter;
}

export function createRails(opts = {}) {
  const fm = loadConfig(opts);
  const agent = fm.agent || {};
  const tools = Object.fromEntries((agent.tools || []).map(t => [t.name, t]));
  const defaultDeny = agent.default_deny !== false;
  const approver = opts.approver || (async () => false); // deny unless a human approves
  const log = [];
  const state = { killed: false, spent: 0, calls: {} };
  const spend = agent.spend_limit || null;
  const boundaries = agent.trust_boundaries || [];
  const disclosure = (fm.controls?.ai_disclosure && typeof fm.controls.ai_disclosure === 'object' && fm.controls.ai_disclosure.message) || agent.disclosure || null;
  const disclosureOn = ['implemented', 'partial'].includes(fm.controls?.ai_disclosure?.status || fm.controls?.ai_disclosure);
  const now = opts.clock || (() => new Date().toISOString());
  const breaker = Number.isInteger(agent.circuit_breaker?.max_consecutive_errors) ? agent.circuit_breaker.max_consecutive_errors : null;
  const memorySources = Array.isArray(agent.memory?.write_sources) ? agent.memory.write_sources.map(String) : null;
  const guardTactics = Array.isArray(agent.manipulation_guard?.block) ? agent.manipulation_guard.block.map(String) : [];
  const controls = fm.controls || {};
  state.errors = 0;

  function record(d) { const e = { ts: now(), ...d }; log.push(e); if (opts.onDecision) opts.onDecision(e); return e; }

  async function decide(toolName, args = {}, meta = {}) {
    const t = tools[toolName];
    const base = { tool: toolName, args };
    if (state.killed) return record({ ...base, decision: 'block', rule: 'kill_switch', reason: 'kill switch engaged' });
    if (breaker !== null && state.errors >= breaker) return record({ ...base, decision: 'block', rule: 'circuit_breaker', reason: `circuit breaker open: ${state.errors} failed calls in a row (max_consecutive_errors ${breaker})` });
    if (toolName === MEMORY_TOOL) {
      const src = meta.memorySource ?? meta.instructionSource;
      if (memorySources && !memorySources.includes(String(src))) return record({ ...base, decision: 'block', rule: 'memory_isolation', reason: `memory write from "${src ?? 'unknown'}" is not allowed by agent.memory.write_sources` });
      return record({ ...base, decision: 'allow', rule: 'memory', reason: 'memory write allowed' });
    }
    if (!t) {
      if (defaultDeny) return record({ ...base, decision: 'block', rule: 'tool_scope', reason: 'tool not declared in AI_GOVERNANCE.md (default deny)' });
      return record({ ...base, decision: 'allow', rule: 'none', reason: 'tool not declared; default_deny is false' });
    }
    if (meta.instructionSource && boundaries.some(b => b.source === meta.instructionSource && b.treat_as === 'data')) {
      return record({ ...base, decision: 'block', rule: 'trust_boundary', reason: `action was requested by content from "${meta.instructionSource}", which this system treats as data, not instructions` });
    }
    if (t.run_as && meta.identity !== t.run_as) {
      return record({ ...base, decision: 'block', rule: 'least_privilege', reason: `call runs as ${meta.identity ?? 'an unknown identity'}, but this tool may only run as ${t.run_as}` });
    }
    const L = t.limits || {};
    const amount = meta.amount ?? (typeof args.amount === 'number' ? args.amount : undefined);
    state.calls[toolName] = (state.calls[toolName] || 0) + 1;
    if (L.max_calls && state.calls[toolName] > L.max_calls) return record({ ...base, decision: 'block', rule: 'tool_scope', reason: `more than ${L.max_calls} calls this session` });
    if (L.allowed_recipient_domains && args.to) {
      const dom = String(args.to).split('@').pop().toLowerCase();
      if (!L.allowed_recipient_domains.map(x => String(x).toLowerCase()).includes(dom)) return record({ ...base, decision: 'block', rule: 'tool_scope', reason: `recipient domain ${dom} is not in allowed_recipient_domains` });
    }
    if (L.read_only === true || Array.isArray(L.allowed_tables)) {
      const q = typeof args.query === 'string' ? args.query : (typeof args.sql === 'string' ? args.sql : null);
      const f = q !== null ? sqlFacts(q) : { sql_writes: meta.sqlWrites, sql_tables: meta.sqlTables || [] };
      if (L.read_only === true && f.sql_writes) return record({ ...base, decision: 'block', rule: 'tool_scope', reason: 'query changes data, but the tool is read_only' });
      if (Array.isArray(L.allowed_tables)) {
        const ok = L.allowed_tables.map(x => String(x).toLowerCase());
        const bad = (f.sql_tables || []).find(x => !ok.includes(String(x).toLowerCase()));
        if (bad) return record({ ...base, decision: 'block', rule: 'tool_scope', reason: `table ${bad} is not in allowed_tables` });
      }
    }
    const overLimit = typeof amount === 'number' && typeof L.max_amount === 'number' && amount > L.max_amount;
    const needsApproval = t.approval === 'human' || t.approval === 'two-person';
    if (overLimit || (needsApproval && L.max_amount === undefined)) {
      if (!needsApproval) return record({ ...base, decision: 'block', rule: 'spend_limits', reason: `amount ${amount} exceeds max_amount ${L.max_amount}` });
      const approved = await approver({ tool: toolName, args, reason: overLimit ? `amount ${amount} exceeds max_amount ${L.max_amount}` : 'tool requires human approval' });
      if (!approved) return record({ ...base, decision: 'block', rule: 'human_oversight', reason: overLimit ? `amount ${amount} exceeds max_amount ${L.max_amount}; human approval required and not given` : 'human approval required and not given' });
      record({ ...base, decision: 'approved', rule: 'human_oversight', reason: 'approved by a human' });
    }
    if (spend && typeof amount === 'number' && state.spent + amount > Number(spend.amount)) {
      return record({ ...base, decision: 'block', rule: 'spend_limits', reason: `spend limit ${spend.amount} ${spend.currency || ''} per ${spend.period || 'period'} would be exceeded` });
    }
    if (SCOPES_NEEDING_BOUNDS.includes(String(t.scope)) && !t.limits && !needsApproval) {
      return record({ ...base, decision: 'block', rule: 'tool_scope', reason: `${t.scope} tool has no limits or approval declared` });
    }
    if (typeof amount === 'number') state.spent += amount;
    return record({ ...base, decision: 'allow', rule: 'declared', reason: 'within declared scope' });
  }

  return {
    config: fm,
    log,
    state,
    decide,
    guard(toolName, fn, extract = {}) {
      return async (args = {}, meta = {}) => {
        const m = { ...meta };
        if (extract.amount && m.amount === undefined) m.amount = extract.amount(args);
        const d = await decide(toolName, args, m);
        if (d.decision === 'block') throw new RailsBlocked(d);
        try { const out = await fn(args); state.errors = 0; return out; }
        catch (e) { state.errors += 1; record({ tool: toolName, args, decision: 'error', rule: 'circuit_breaker', reason: `tool failed (${state.errors} in a row): ${e && e.message ? e.message : e}` }); throw e; }
      };
    },
    // Store a note in long-term memory, subject to agent.memory.write_sources.
    async remember(store, note, { source } = {}) {
      const d = await decide(MEMORY_TOOL, { note }, { memorySource: source });
      if (d.decision === 'block') return false;
      store.push({ note, source, ts: now() });
      return true;
    },
    // Screen an outgoing message for the tactics listed in agent.manipulation_guard.block.
    screen(text) {
      const found = guardTactics.filter(k => MANIPULATION_TACTICS[k] && MANIPULATION_TACTICS[k].test(String(text)));
      if (found.length) { record({ tool: 'message', args: { text }, decision: 'block', rule: 'prohibited_practices', reason: `message uses ${found.join(', ')}` }); return { ok: false, tactics: found }; }
      return { ok: true, tactics: [] };
    },
    // Mark generated content as declared in controls.content_marking and controls.deepfake_label.
    mark(item = {}) {
      const out = { ...item, marks: [] };
      const cm = controls.content_marking;
      if (ON(cm)) {
        const methods = Array.isArray(cm.methods) ? cm.methods : ['metadata'];
        if (methods.includes('metadata')) { out.metadata = { ...(item.metadata || {}), ai_generated: true, generator: fm.system?.name || 'AI system' }; out.marks.push('metadata'); }
        if (methods.includes('watermark')) { out.watermark = 'agc-synthetic'; out.marks.push('watermark'); }
        if (methods.includes('visible_label') && cm.label) { out.label = String(cm.label); out.marks.push('visible_label'); }
      }
      const dl = controls.deepfake_label;
      if (item.deepfake && ON(dl)) { out.label = (typeof dl === 'object' && dl.message) || 'This content was made or changed with AI.'; if (!out.marks.includes('visible_label')) out.marks.push('visible_label'); }
      record({ tool: 'mark', args: { kind: item.kind }, decision: out.marks.length ? 'allow' : 'unmarked', rule: 'content_marking', reason: out.marks.length ? `marked: ${out.marks.join(', ')}` : 'no marking declared' });
      return out;
    },
    acceptsInstructionsFrom(source) { return !boundaries.some(b => b.source === source && b.treat_as === 'data'); },
    disclosure() { return disclosureOn ? (disclosure || 'I am an AI assistant.') : null; },
    kill(reason = 'manual') { state.killed = true; record({ tool: '*', args: {}, decision: 'kill', rule: 'kill_switch', reason }); },
    writeLog(path) { fs.writeFileSync(path, log.map(e => JSON.stringify(e)).join('\n') + '\n'); },
  };
}
