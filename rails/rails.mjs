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

export class RailsBlocked extends Error {
  constructor(decision) { super(`[AI Governance Chain] blocked ${decision.tool}: ${decision.reason}`); this.name = 'RailsBlocked'; this.decision = decision; }
}

const SCOPES_NEEDING_BOUNDS = ['write', 'payment', 'delete', 'admin', 'execute', 'send'];

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

  function record(d) { const e = { ts: now(), ...d }; log.push(e); if (opts.onDecision) opts.onDecision(e); return e; }

  async function decide(toolName, args = {}, meta = {}) {
    const t = tools[toolName];
    const base = { tool: toolName, args };
    if (state.killed) return record({ ...base, decision: 'block', rule: 'kill_switch', reason: 'kill switch engaged' });
    if (!t) {
      if (defaultDeny) return record({ ...base, decision: 'block', rule: 'tool_scope', reason: 'tool not declared in AI_GOVERNANCE.md (default deny)' });
      return record({ ...base, decision: 'allow', rule: 'none', reason: 'tool not declared; default_deny is false' });
    }
    if (meta.instructionSource && boundaries.some(b => b.source === meta.instructionSource && b.treat_as === 'data')) {
      return record({ ...base, decision: 'block', rule: 'trust_boundary', reason: `action was requested by content from "${meta.instructionSource}", which this system treats as data, not instructions` });
    }
    const L = t.limits || {};
    const amount = meta.amount ?? (typeof args.amount === 'number' ? args.amount : undefined);
    state.calls[toolName] = (state.calls[toolName] || 0) + 1;
    if (L.max_calls && state.calls[toolName] > L.max_calls) return record({ ...base, decision: 'block', rule: 'tool_scope', reason: `more than ${L.max_calls} calls this session` });
    if (L.allowed_recipient_domains && args.to) {
      const dom = String(args.to).split('@').pop().toLowerCase();
      if (!L.allowed_recipient_domains.map(x => String(x).toLowerCase()).includes(dom)) return record({ ...base, decision: 'block', rule: 'tool_scope', reason: `recipient domain ${dom} is not in allowed_recipient_domains` });
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
        return fn(args);
      };
    },
    acceptsInstructionsFrom(source) { return !boundaries.some(b => b.source === source && b.treat_as === 'data'); },
    disclosure() { return disclosureOn ? (disclosure || 'I am an AI assistant.') : null; },
    kill(reason = 'manual') { state.killed = true; record({ tool: '*', args: {}, decision: 'kill', rule: 'kill_switch', reason }); },
    writeLog(path) { fs.writeFileSync(path, log.map(e => JSON.stringify(e)).join('\n') + '\n'); },
  };
}
