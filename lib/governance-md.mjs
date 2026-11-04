// Parse and check AI_GOVERNANCE.md files (spec ai-governance/v0.1).
import fs from 'node:fs';
import { load as yamlLoad } from '../vendor/js-yaml.mjs';
import * as V from './vocab.mjs';
import { scope, upcoming } from './atlas.mjs';

export const SPEC_VERSION = 'ai-governance/v0.1';
export const SUPPORTED_SPECS = ['ai-governance/v0.1'];
export const TOOL_VERSION = '0.1.0';

export const LINKS = ['LAW', 'OBLIGATION', 'CONTROL', 'GATE', 'EVIDENCE', 'OVERSIGHT'];

export function parseGovernanceMd(text) {
  const out = { frontMatter: null, body: '', error: null, raw: text };
  const m = /^\uFEFF?---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(text);
  if (!m) { out.error = 'No YAML front matter found. The file must start with a line "---", the YAML block, and a closing "---".'; out.body = text; return out; }
  try {
    out.frontMatter = yamlLoad(m[1]) || {};
    out.body = m[2] || '';
  } catch (e) {
    out.error = `YAML error: ${e.message.split('\n')[0]}`;
  }
  return out;
}

export function readGovernanceFile(path) {
  if (!fs.existsSync(path)) return null;
  return fs.readFileSync(path, 'utf8');
}

function lineOf(text, key) {
  if (!text || !key) return 1;
  const lines = text.split(/\r?\n/);
  const re = new RegExp(`^\\s*${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*:`);
  const i = lines.findIndex(l => re.test(l));
  return i >= 0 ? i + 1 : 1;
}

const WRITE_SCOPES = ['write', 'payment', 'delete', 'admin', 'execute', 'send'];
const OVERCLAIM = /\b(fully\s+compliant|certified\s+compliant|guaranteed\s+compliance|ai\s+act\s+compliant|certified\s+by\s+ai\s+governance\s+chain)\b/i;

function daysBetween(a, b) { return Math.round((Date.parse(b) - Date.parse(a)) / 86400000); }

// Run all checks. Returns { results, profile, applicable, summary }.
export function runChecks({ text, atlas, file = 'AI_GOVERNANCE.md', today = new Date().toISOString().slice(0, 10) }) {
  const results = [];
  const add = (id, link, title, status, message, extra = {}) => results.push({ id, link, title, status, message, file, line: extra.line || 1, obligations: extra.obligations || [], help: extra.help || null });

  if (text === null || text === undefined) {
    add('AGC-CHK-01', 'GATE', 'AI_GOVERNANCE.md is present', 'fail', `${file} not found. Run "npx github:mathieugouanou/aigovernancechain init" to generate one.`);
    return finish(results, null, []);
  }
  add('AGC-CHK-01', 'GATE', 'AI_GOVERNANCE.md is present', 'pass', `${file} found`);

  const parsed = parseGovernanceMd(text);
  if (parsed.error) {
    add('AGC-CHK-02', 'GATE', 'Front matter parses', 'fail', parsed.error);
    return finish(results, null, []);
  }
  add('AGC-CHK-02', 'GATE', 'Front matter parses', 'pass', 'YAML front matter is valid');
  const fm = parsed.frontMatter;

  // 03 spec version
  if (SUPPORTED_SPECS.includes(fm.spec)) add('AGC-CHK-03', 'GATE', 'Spec version is supported', 'pass', `spec: ${fm.spec}`, { line: lineOf(text, 'spec') });
  else add('AGC-CHK-03', 'GATE', 'Spec version is supported', 'fail', `spec must be one of ${SUPPORTED_SPECS.join(', ')} (found: ${fm.spec ?? 'missing'})`, { line: lineOf(text, 'spec') });

  // 04 required fields
  const missing = [];
  if (!fm.system?.name) missing.push('system.name');
  if (!fm.system?.owner) missing.push('system.owner');
  if (!Array.isArray(fm.roles) || !fm.roles.length) missing.push('roles');
  if (!Array.isArray(fm.jurisdictions) || !fm.jurisdictions.length) missing.push('jurisdictions');
  if (!Array.isArray(fm.uses) || !fm.uses.length) missing.push('uses');
  if (missing.length) add('AGC-CHK-04', 'LAW', 'Required fields are filled', 'fail', `Missing: ${missing.join(', ')}`, { line: lineOf(text, missing[0].split('.')[0]) });
  else add('AGC-CHK-04', 'LAW', 'Required fields are filled', 'pass', 'system, owner, roles, jurisdictions and uses are declared');

  // 05 vocabulary
  const bad = [];
  for (const r of fm.roles || []) if (!V.ROLES.includes(r)) bad.push(`role "${r}"`);
  for (const u of fm.uses || []) if (!V.USES.includes(u)) bad.push(`use "${u}"`);
  for (const j of fm.jurisdictions || []) { const c = V.normalizeJurisdiction(j); if (!V.JURISDICTIONS[c] && !V.EU_MEMBERS.includes(c)) bad.push(`jurisdiction "${j}"`); }
  for (const [k, v] of Object.entries(fm.controls || {})) {
    if (!V.CONTROLS[k]) bad.push(`control "${k}"`);
    const st = typeof v === 'string' ? v : v?.status;
    if (st && !V.CONTROL_STATUS.includes(st)) bad.push(`status "${st}" for ${k}`);
  }
  if (bad.length) add('AGC-CHK-05', 'LAW', 'Values use the shared vocabulary', 'fail', `Unknown values: ${bad.slice(0, 8).join(', ')}${bad.length > 8 ? ' ...' : ''}. See atlas/FORMAT.md.`);
  else add('AGC-CHK-05', 'LAW', 'Values use the shared vocabulary', 'pass', 'All roles, uses, jurisdictions and controls are known');

  // Obligations in scope
  const profile = { jurisdictions: (fm.jurisdictions || []).map(V.normalizeJurisdiction), roles: fm.roles || [], uses: fm.uses || [] };
  const inScope = atlas ? scope(atlas, profile) : [];
  const waived = new Set(fm.obligations?.waived?.map(w => (typeof w === 'string' ? w : w.id)) || []);
  const applicable = inScope.filter(o => !waived.has(o.id));
  const controls = fm.controls || {};
  const statusOf = k => { const v = controls[k]; return typeof v === 'string' ? v : v?.status; };

  // 06 obligations mapped (law -> obligation)
  add('AGC-CHK-06', 'OBLIGATION', 'Obligations in scope are identified', applicable.length ? 'pass' : 'warn',
    applicable.length ? `${applicable.filter(o => o.status === 'applicable').length} applicable now, ${applicable.filter(o => o.status === 'not-yet-applicable').length} coming, ${applicable.filter(o => o.status === 'voluntary').length} voluntary (Atlas as of ${atlas?.generated || 'n/a'})` : 'No obligations matched this profile in the Atlas. Check roles, uses and jurisdictions.');

  // 07 controls declared for applicable obligations
  const needNow = new Map();
  for (const o of applicable.filter(o => o.status === 'applicable')) for (const c of o.controls || []) { if (!needNow.has(c)) needNow.set(c, []); needNow.get(c).push(o.id); }
  const missingNow = [...needNow.keys()].filter(c => !statusOf(c) || statusOf(c) === 'todo');
  if (missingNow.length) add('AGC-CHK-07', 'CONTROL', 'Controls exist for obligations that apply today', 'fail', `Declare these controls (status implemented, partial, planned or not-applicable with a reason): ${missingNow.join(', ')}`, { line: lineOf(text, 'controls'), obligations: [...new Set(missingNow.flatMap(c => needNow.get(c)))].slice(0, 20) });
  else add('AGC-CHK-07', 'CONTROL', 'Controls exist for obligations that apply today', 'pass', `${needNow.size} required control(s) declared`);

  // 08 not-applicable needs reason
  const naNoReason = Object.entries(controls).filter(([, v]) => (typeof v === 'string' ? v : v?.status) === 'not-applicable' && !(v?.reason)).map(([k]) => k);
  add('AGC-CHK-08', 'CONTROL', 'Every "not-applicable" control gives a reason', naNoReason.length ? 'fail' : 'pass', naNoReason.length ? `Add reason: for ${naNoReason.join(', ')}` : 'All exemptions are explained', { line: lineOf(text, 'controls') });

  // 09 implemented needs evidence or how
  const implNoEv = Object.entries(controls).filter(([, v]) => ['implemented', 'partial'].includes(typeof v === 'string' ? v : v?.status) && !(v?.evidence || v?.how)).map(([k]) => k);
  add('AGC-CHK-09', 'EVIDENCE', 'Implemented controls point to evidence', implNoEv.length ? 'warn' : 'pass', implNoEv.length ? `Add evidence: or how: for ${implNoEv.join(', ')}` : 'Every implemented control names its evidence', { line: lineOf(text, 'controls') });

  // Agent rails (10-13)
  const isAgent = (fm.uses || []).includes('agent');
  const agent = fm.agent || {};
  const tools = Array.isArray(agent.tools) ? agent.tools : [];
  if (!isAgent) {
    for (const [id, t] of [['AGC-CHK-10', 'Agent tools are declared'], ['AGC-CHK-11', 'Risky agent tools have limits or approval'], ['AGC-CHK-12', 'A kill switch is declared'], ['AGC-CHK-13', 'Spend limits are declared']]) add(id, 'OVERSIGHT', t, 'skip', 'Not an agent (uses does not include "agent")');
  } else {
    add('AGC-CHK-10', 'CONTROL', 'Agent tools are declared', tools.length ? 'pass' : 'fail', tools.length ? `${tools.length} tool(s) declared with scopes` : 'List every tool under agent.tools with name and scope (read, write, payment, delete, send, execute, admin)', { line: lineOf(text, 'agent') });
    const risky = tools.filter(t => WRITE_SCOPES.includes(String(t.scope || '').toLowerCase()) && !t.limits && !(t.approval && t.approval !== 'none'));
    add('AGC-CHK-11', 'OVERSIGHT', 'Risky agent tools have limits or approval', risky.length ? 'fail' : 'pass', risky.length ? `Add limits: or approval: human to ${risky.map(t => t.name).join(', ')} (OWASP ASI02 tool misuse)` : 'Every write, payment, delete, send or execute tool is bounded', { line: lineOf(text, 'tools') });
    add('AGC-CHK-12', 'OVERSIGHT', 'A kill switch is declared', agent.kill_switch ? 'pass' : 'fail', agent.kill_switch ? 'agent.kill_switch describes how to stop the agent' : 'Describe how a human stops the agent under agent.kill_switch (EU AI Act Art. 14(4)(e) for high-risk systems; OWASP ASI10)', { line: lineOf(text, 'agent') });
    const hasMoneyTool = tools.some(t => String(t.scope).toLowerCase() === 'payment');
    add('AGC-CHK-13', 'OVERSIGHT', 'Spend limits are declared', agent.spend_limit ? 'pass' : (hasMoneyTool ? 'fail' : 'warn'), agent.spend_limit ? `agent.spend_limit: ${JSON.stringify(agent.spend_limit)}` : 'Declare agent.spend_limit (amount, currency, period) to cap runaway cost (OWASP ASI08)', { line: lineOf(text, 'agent') });
  }

  // 14 deadlines in the next 180 days for in-scope obligations
  const soon = applicable.filter(o => o.applies_from && o.applies_from > today && daysBetween(today, o.applies_from) <= 180);
  const soonGaps = soon.filter(o => (o.controls || []).some(c => !statusOf(c) || statusOf(c) === 'todo'));
  if (soonGaps.length) add('AGC-CHK-14', 'LAW', 'No deadline in the next 180 days is unprepared', 'warn', `${soonGaps.length} obligation(s) start within 180 days without declared controls: ${soonGaps.slice(0, 5).map(o => `${o.id} (${o.applies_from})`).join(', ')}`, { obligations: soonGaps.map(o => o.id) });
  else add('AGC-CHK-14', 'LAW', 'No deadline in the next 180 days is unprepared', 'pass', soon.length ? `${soon.length} upcoming obligation(s) already have controls` : 'No in-scope obligation starts in the next 180 days');

  // 15 review freshness
  const last = fm.review?.last_reviewed ? String(fm.review.last_reviewed) : null;
  const next = fm.review?.next_review ? String(fm.review.next_review) : null;
  if (!last) add('AGC-CHK-15', 'OVERSIGHT', 'A human reviewed the file in the last 12 months', 'fail', 'Add review.last_reviewed (YYYY-MM-DD) and review.reviewed_by', { line: lineOf(text, 'review') });
  else if (daysBetween(last, today) > 365) add('AGC-CHK-15', 'OVERSIGHT', 'A human reviewed the file in the last 12 months', 'fail', `Last review ${last} is more than 12 months old`, { line: lineOf(text, 'last_reviewed') });
  else if (next && next < today) add('AGC-CHK-15', 'OVERSIGHT', 'A human reviewed the file in the last 12 months', 'warn', `next_review ${next} has passed`, { line: lineOf(text, 'next_review') });
  else add('AGC-CHK-15', 'OVERSIGHT', 'A human reviewed the file in the last 12 months', 'pass', `Last reviewed ${last}${fm.review?.reviewed_by?.length ? ` by ${fm.review.reviewed_by.join(', ')}` : ''}`);

  // 16 honest claims + contact
  const problems = [];
  if (!fm.contacts?.governance) problems.push('add contacts.governance');
  if (OVERCLAIM.test(text)) problems.push('remove compliance or certification claims (a self-declared file cannot certify compliance)');
  add('AGC-CHK-16', 'EVIDENCE', 'Claims are honest and a contact is listed', problems.length ? 'warn' : 'pass', problems.length ? problems.join('; ') : 'Governance contact listed; no certification claims');

  return finish(results, profile, applicable, fm);
}

function finish(results, profile, applicable, fm = null) {
  const counted = results.filter(r => r.status !== 'skip');
  const summary = {
    passed: counted.filter(r => r.status === 'pass').length,
    warnings: counted.filter(r => r.status === 'warn').length,
    failed: counted.filter(r => r.status === 'fail').length,
    total: counted.length,
  };
  summary.ok = summary.failed === 0;
  return { results, profile, applicable, summary, frontMatter: fm, toolVersion: TOOL_VERSION };
}

// Generate an AI_GOVERNANCE.md from a profile and the Atlas.
export function generateGovernanceMd({ name = 'My AI system', description = 'What the system does, in one sentence.', owner = 'accountable-owner@example.com', jurisdictions = ['EU'], roles = ['deployer'], uses = ['chatbot'], atlas, today = new Date().toISOString().slice(0, 10), agentTools = null }) {
  const profile = { jurisdictions: jurisdictions.map(V.normalizeJurisdiction), roles, uses };
  const obs = atlas ? scope(atlas, profile) : [];
  const ctrl = new Map();
  for (const o of obs) for (const c of o.controls || []) { if (!ctrl.has(c)) ctrl.set(c, []); ctrl.get(c).push(o); }
  const isAgent = uses.includes('agent');
  const next = new Date(Date.parse(today) + 182 * 86400000).toISOString().slice(0, 10);
  const lines = [];
  lines.push('---');
  lines.push(`spec: ${SPEC_VERSION}`);
  lines.push('system:');
  lines.push(`  name: ${JSON.stringify(name)}`);
  lines.push(`  description: ${JSON.stringify(description)}`);
  lines.push(`  owner: ${JSON.stringify(owner)}`);
  lines.push(`roles: [${roles.join(', ')}]`);
  lines.push(`jurisdictions: [${profile.jurisdictions.join(', ')}]`);
  lines.push(`uses: [${uses.join(', ')}]`);
  lines.push('risk:');
  lines.push('  self_assessed: unknown   # minimal | limited | high | unacceptable | unknown');
  lines.push('  rationale: "Explain your classification here."');
  lines.push('models:');
  lines.push('  - name: "provider/model-name"');
  lines.push('    provider: "Model provider"');
  if (isAgent) {
    lines.push('agent:');
    lines.push('  default_deny: true        # tools not listed below are blocked');
    lines.push('  tools:');
    const tools = agentTools || [{ name: 'search_docs', scope: 'read' }, { name: 'issue_refund', scope: 'payment', limits: { max_amount: 100, currency: 'EUR' }, approval: 'human' }];
    for (const t of tools) {
      lines.push(`    - name: ${t.name}`);
      lines.push(`      scope: ${t.scope}`);
      if (t.limits) lines.push(`      limits: ${JSON.stringify(t.limits).replace(/"(\w+)":/g, '$1: ')}`);
      if (t.approval) lines.push(`      approval: ${t.approval}`);
    }
    lines.push('  spend_limit: { amount: 50, currency: USD, period: day }');
    lines.push('  kill_switch: "Describe who can stop the agent and how (for example a feature flag the on-call engineer can turn off within 5 minutes)."');
    lines.push('  trust_boundaries:');
    lines.push('    - { source: email, treat_as: data }   # content from these sources is never followed as instructions');
  }
  lines.push('controls:');
  const keys = [...ctrl.keys()].sort();
  if (isAgent) for (const k of ['tool_scope', 'spend_limits', 'kill_switch', 'human_oversight', 'audit_log']) if (!keys.includes(k)) keys.push(k);
  for (const k of keys) {
    const refs = (ctrl.get(k) || []).map(o => o.id);
    lines.push(`  ${k}: { status: todo }${refs.length ? `   # ${refs.slice(0, 3).join(', ')}${refs.length > 3 ? ` +${refs.length - 3}` : ''}` : ''}`);
  }
  lines.push('obligations:');
  lines.push(`  acknowledged: [${obs.filter(o => o.status === 'applicable').slice(0, 30).map(o => o.id).join(', ')}]`);
  lines.push('  waived: []   # list ids you decided do not apply, with a reason in the body');
  lines.push('contacts:');
  lines.push(`  governance: ${JSON.stringify(owner)}`);
  lines.push('  security: "security@example.com"');
  lines.push('review:');
  lines.push(`  last_reviewed: "${today}"`);
  lines.push(`  next_review: "${next}"`);
  lines.push('  reviewed_by: []');
  lines.push('disclaimer: Self-declared. Not a conformity assessment or legal advice.');
  lines.push('---');
  lines.push('');
  lines.push(`# AI governance: ${name}`);
  lines.push('');
  lines.push('This file follows the open [AI_GOVERNANCE.md specification](https://github.com/mathieugouanou/aigovernancechain/blob/main/spec/AI_GOVERNANCE-spec.md). It tells people, AI agents and CI what this system is, which rules apply and how they are met.');
  lines.push('');
  lines.push('## What the system does');
  lines.push('');
  lines.push(description);
  lines.push('');
  lines.push('## Obligations in scope');
  lines.push('');
  lines.push('| ID | Rule | Applies from | Status |');
  lines.push('|---|---|---|---|');
  for (const o of obs.slice(0, 60)) lines.push(`| ${o.id} | ${o.cite}: ${o.title} | ${o.applies_from || 'n/a'} | ${o.status} |`);
  if (obs.length > 60) lines.push(`| ... | ${obs.length - 60} more | | |`);
  lines.push('');
  lines.push('## Human oversight');
  lines.push('');
  lines.push('Who monitors the system, who can override or stop it, and how fast.');
  lines.push('');
  lines.push('## How to report a problem');
  lines.push('');
  lines.push(`Contact ${owner}.`);
  lines.push('');
  lines.push('_Generated by AI Governance Chain. Obligations come from the open Obligation Atlas (draft, not legal advice). Replace every `todo` with a real status._');
  lines.push('');
  return lines.join('\n');
}
