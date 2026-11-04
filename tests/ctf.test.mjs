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
