import test from 'node:test';
import assert from 'node:assert/strict';
import { validateAll, compileAtlas, scope, upcoming, search } from '../lib/atlas.mjs';
import { expandJurisdictions, normalizeJurisdiction } from '../lib/vocab.mjs';

test('atlas validates with zero errors', () => {
  const r = validateAll();
  assert.equal(r.errors.length, 0, r.errors.join('\n'));
  assert.ok(r.obligations >= 150);
});

test('every obligation has a source, confidence and controls', () => {
  const a = compileAtlas();
  for (const o of a.obligations) {
    assert.match(o.source_url, /^https?:\/\//, o.id);
    assert.ok(['high', 'medium', 'low'].includes(o.confidence), o.id);
    assert.ok(o.controls.length > 0 || /no governance control/i.test(o.notes || ''), `${o.id}: add controls or explain in notes`);
  }
});

test('jurisdiction expansion', () => {
  assert.equal(normalizeJurisdiction('UK'), 'GB');
  const e = expandJurisdictions(['DE', 'US-NY-NYC']);
  for (const j of ['DE', 'EU', 'COE', 'US-NY-NYC', 'US-NY', 'US']) assert.ok(e.includes(j), j);
});

test('EU chatbot provider gets Art. 50(1)', () => {
  const a = compileAtlas();
  const ids = scope(a, { jurisdictions: ['FR'], roles: ['provider'], uses: ['chatbot'] }).map(o => o.id);
  assert.ok(ids.includes('AGC-EU-AIA-50-1'));
  assert.ok(ids.includes('AGC-EU-AIA-5'));
});

test('upcoming deadlines are sorted and in window', () => {
  const a = compileAtlas();
  const d = upcoming(a, { from: '2026-11-04', days: 120 });
  assert.ok(d.length > 0);
  for (let i = 1; i < d.length; i++) assert.ok(d[i - 1].date <= d[i].date);
  assert.ok(d.every(x => x.date >= '2026-11-04' && x.date <= '2027-03-04'));
});

test('search finds disclosure obligations', () => {
  assert.ok(search(compileAtlas(), 'disclose bot').length > 0);
});
