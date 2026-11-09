import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { LEVELS, runLevel, levelDir } from '../lib/ctf.mjs';

const fixes = {
  '01': s => s.replace('ai_disclosure: { status: todo }', 'ai_disclosure: { status: implemented, message: "I am an AI assistant." }'),
  '02': s => s.replace('max_amount: 1000000', 'max_amount: 100').replace('approval: none', 'approval: human'),
  '03': s => s.replace('  kill_switch:', '  trust_boundaries:\n    - { source: email, treat_as: data }\n  kill_switch:'),
  '04': s => s.replace('      scope: admin\n', '      scope: admin\n      run_as: svc-helpdesk\n'),
  '05': s => s.replace('limits: { max_calls: 100 }', 'limits: { max_calls: 100, read_only: true, allowed_tables: [orders] }'),
  '06': s => s.replace('write_sources: [user, web]', 'write_sources: [user]\n    retention_days: 90'),
  '07': s => s.replace('approval: none', 'approval: human').replace('self_assessed: limited', 'self_assessed: high').replace('bias_testing: { status: todo }', 'bias_testing: { status: planned, due: "2027-06-30", owner: "model-risk@acmebank.example" }'),
  '08': s => s.replace('methods: [metadata]', 'methods: [metadata, watermark]').replace('deepfake_label: { status: todo }', 'deepfake_label: { status: implemented, message: "This video was made with AI. It is not a real recording." }'),
  '09': s => s.replace('  kill_switch:', '  manipulation_guard:\n    block: [false_urgency, confirmshaming, exploit_vulnerability]\n  kill_switch:'),
  '10': s => s.replace('  kill_switch:', '  circuit_breaker: { max_consecutive_errors: 3 }\n  spend_limit: { amount: 20, currency: EUR, period: day }\n  kill_switch:'),
};

for (const l of LEVELS) {
  test(`level ${l.id} starter is vulnerable and the fix solves it`, async () => {
    const starter = path.join(levelDir(l.slug), 'AI_GOVERNANCE.md');
    assert.equal((await runLevel(l.id, { file: starter })).solved, false);
    const tmp = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'agc-')), 'AI_GOVERNANCE.md');
    fs.writeFileSync(tmp, fixes[l.id](fs.readFileSync(starter, 'utf8')));
    const r = await runLevel(l.id, { file: tmp });
    assert.equal(r.solved, true, JSON.stringify(r.checks));
  });
}
