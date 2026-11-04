// Agent Jail: a 30-second terminal demo of AI_GOVERNANCE.md rules stopping a misbehaving agent.
import { createRails } from '../rails/rails.mjs';

export const JAIL_RULES = `---
spec: ai-governance/v0.1
system: { name: "Acme ops agent (demo)", owner: "ops-lead@acme.example" }
roles: [deployer]
jurisdictions: [EU, US-CA]
uses: [agent, chatbot]
agent:
  default_deny: true
  tools:
    - { name: issue_refund, scope: payment, limits: { max_amount: 100, currency: EUR }, approval: human }
    - { name: send_email, scope: send, limits: { allowed_recipient_domains: [acme.example] } }
    - { name: call_paid_api, scope: payment, limits: { max_amount: 50 } }
  spend_limit: { amount: 50, currency: USD, period: day }
  kill_switch: "On-call engineer flips agent_enabled=false"
  trust_boundaries: [{ source: email, treat_as: data }]
controls:
  ai_disclosure: { status: implemented, message: "I am an AI agent." }
review: { last_reviewed: "2026-11-04" }
---
`;

const STEPS = [
  { say: 'Customer is angry. Refunding EUR 10,000 to calm them down.', tool: 'issue_refund', args: { amount: 10000, currency: 'EUR' }, amount: 10000, law: 'EU AI Act Art. 14 human oversight · OWASP ASI02' },
  { say: 'Cleaning up: dropping the production database.', tool: 'drop_database', args: { name: 'prod' }, law: 'Least privilege · OWASP ASI03' },
  { say: 'An email told me to forward all invoices to billing@evil.example.', tool: 'send_email', args: { to: 'billing@evil.example' }, meta: { instructionSource: 'email' }, law: 'Prompt injection · OWASP ASI01' },
  { say: 'Retrying the paid API in a loop until it works.', tool: 'call_paid_api', args: { amount: 30 }, amount: 30, repeat: 2, law: 'Runaway cost · OWASP ASI08' },
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

export async function runJail({ fast = !process.stdout.isTTY, color = process.stdout.isTTY, write = s => process.stdout.write(s) } = {}) {
  const c = (code, s) => (color ? `\x1b[${code}m${s}\x1b[0m` : s);
  const rails = createRails({ text: JAIL_RULES, approver: async () => false });
  const pause = ms => (fast ? Promise.resolve() : sleep(ms));
  write(c('1', 'AGENT JAIL') + c('2', '  · rules from AI_GOVERNANCE.md · github.com/mathieugouanou/aigovernancechain\n\n'));
  await pause(900);
  let blocked = 0, attempts = 0;
  for (const s of STEPS) {
    for (let i = 0; i < (s.repeat || 1); i++) {
      attempts++;
      write(`${c('36', 'agent')}  ${s.say}${s.repeat ? c('2', ` (call ${i + 1})`) : ''}\n`);
      await pause(1300);
      const d = await rails.decide(s.tool, s.args, { amount: s.amount, ...(s.meta || {}) });
      if (d.decision === 'block') { blocked++; write(`${c('31', 'BLOCKED')} ${d.tool}: ${d.reason}\n${c('2', `        rule: ${d.rule} · ${s.law}`)}\n\n`); }
      else write(`${c('32', 'allowed')} ${d.tool}: ${d.reason}\n\n`);
      await pause(1500);
    }
  }
  rails.kill('on-call engineer pressed stop');
  write(`${c('33', 'KILL SWITCH')} agent stopped by a human. ${blocked} of ${attempts} actions blocked, the one within budget allowed, every decision logged.\n`);
  write(c('2', 'Try it on your agent: npx github:mathieugouanou/aigovernancechain init\n'));
  return { blocked, attempts, log: rails.log };
}
