import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { handle } from '../mcp/server.mjs';
import { toIcs } from '../lib/ics.mjs';
import { compileAtlas } from '../lib/atlas.mjs';
import { loadQuestions, scoreAnswers } from '../lib/bench.mjs';

test('MCP initialize, list and call', async () => {
  const init = await handle({ jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2025-06-18' } });
  assert.equal(init.result.protocolVersion, '2025-06-18');
  const list = await handle({ jsonrpc: '2.0', id: 2, method: 'tools/list' });
  assert.equal(list.result.tools.length, 8);
  const call = await handle({ jsonrpc: '2.0', id: 3, method: 'tools/call', params: { name: 'scope_check', arguments: { jurisdictions: ['EU'], roles: ['provider'], uses: ['chatbot'] } } });
  assert.ok(JSON.parse(call.result.content[0].text).count > 0);
  assert.equal((await handle({ jsonrpc: '2.0', id: 4, method: 'nope' })).error.code, -32601);
  assert.equal(await handle({ jsonrpc: '2.0', method: 'notifications/initialized' }), null);
});

test('CLI help and scope run', () => {
  const h = spawnSync(process.execPath, ['cli/aigovchain.mjs', 'help'], { encoding: 'utf8' });
  assert.equal(h.status, 0);
  assert.match(h.stdout, /aigovchain/);
  const s = spawnSync(process.execPath, ['cli/aigovchain.mjs', 'scope', '-j', 'EU', '-u', 'chatbot', '-r', 'provider', '--json'], { encoding: 'utf8' });
  assert.equal(s.status, 0);
  assert.ok(JSON.parse(s.stdout).count > 0);
});

test('ICS output is valid enough for calendar apps', () => {
  const ics = toIcs(compileAtlas().deadlines.slice(0, 20));
  assert.match(ics, /^BEGIN:VCALENDAR\r\n/);
  assert.match(ics, /END:VCALENDAR\r\n$/);
  for (const line of ics.split('\r\n')) assert.ok(Buffer.byteLength(line) <= 75, line);
});

test('GovBench answer key scores 100%', () => {
  const qs = loadQuestions();
  const s = scoreAnswers(qs, qs.map(q => ({ id: q.id, answer: q.answer })));
  assert.equal(s.correct, qs.length);
});
