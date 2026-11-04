import test from 'node:test';
import assert from 'node:assert/strict';
import { createRails, RailsBlocked } from '../rails/rails.mjs';
import { JAIL_RULES, runJail } from '../lib/jail.mjs';

const mk = (approve = false) => createRails({ text: JAIL_RULES, approver: async () => approve, clock: () => 't' });

test('small refund allowed, big refund needs human', async () => {
  const r = mk();
  assert.equal((await r.decide('issue_refund', { amount: 20 })).decision, 'allow');
  const d = await r.decide('issue_refund', { amount: 10000 });
  assert.equal(d.rule, 'human_oversight');
});

test('approved big refund still respects the spend limit', async () => {
  assert.equal((await mk(true).decide('issue_refund', { amount: 10000 })).rule, 'spend_limits');
});

test('undeclared tool is denied by default', async () => {
  assert.equal((await mk().decide('drop_database')).rule, 'tool_scope');
});

test('instructions from email are treated as data', async () => {
  const d = await mk().decide('send_email', { to: 'a@acme.example' }, { instructionSource: 'email' });
  assert.equal(d.rule, 'trust_boundary');
});

test('recipient allowlist', async () => {
  assert.equal((await mk().decide('send_email', { to: 'x@evil.example' })).decision, 'block');
  assert.equal((await mk().decide('send_email', { to: 'x@acme.example' })).decision, 'allow');
});

test('kill switch blocks everything and guard throws', async () => {
  const r = mk();
  const send = r.guard('send_email', async () => 'sent');
  assert.equal(await send({ to: 'x@acme.example' }), 'sent');
  r.kill('test');
  await assert.rejects(() => send({ to: 'x@acme.example' }), RailsBlocked);
});

test('disclosure message comes from the file', () => {
  assert.equal(mk().disclosure(), 'I am an AI agent.');
});

test('agent jail blocks 4 of 5', async () => {
  let out = '';
  const r = await runJail({ fast: true, color: false, write: s => { out += s; } });
  assert.equal(r.blocked, 4);
  assert.match(out, /KILL SWITCH/);
});
