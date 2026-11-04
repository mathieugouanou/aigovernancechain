import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { compileAtlas } from '../lib/atlas.mjs';
import { runChecks, generateGovernanceMd, parseGovernanceMd } from '../lib/governance-md.mjs';
import { toSarif, toBadgeJson, toMarkdown } from '../lib/report.mjs';

const atlas = compileAtlas();
const today = '2026-11-04';

test('missing file fails check 01', () => {
  const r = runChecks({ text: null, atlas, today });
  assert.equal(r.results[0].status, 'fail');
  assert.equal(toBadgeJson(r).message, 'missing');
});

test('generated file parses and lists controls as todo', () => {
  const md = generateGovernanceMd({ name: 'X', owner: 'o@x.test', jurisdictions: ['EU'], roles: ['provider'], uses: ['chatbot'], atlas, today });
  const p = parseGovernanceMd(md);
  assert.equal(p.error, null);
  assert.equal(p.frontMatter.controls.ai_disclosure.status, 'todo');
  const r = runChecks({ text: md, atlas, today });
  assert.equal(r.results.find(x => x.id === 'AGC-CHK-07').status, 'fail');
});

for (const f of ['spec/examples/minimal-chatbot.md', 'spec/examples/agent.md', 'spec/examples/hiring-high-risk.md', 'editions/public-sector/AI_GOVERNANCE.public-sector.example.md', 'AI_GOVERNANCE.md']) {
  test(`example passes all checks: ${f}`, () => {
    const r = runChecks({ text: fs.readFileSync(f, 'utf8'), atlas, today });
    assert.equal(r.summary.failed, 0, JSON.stringify(r.results.filter(x => x.status === 'fail')));
  });
}

test('unbounded payment tool fails check 11 and missing kill switch fails 12', () => {
  const md = `---\nspec: ai-governance/v0.1\nsystem: { name: a, owner: b }\nroles: [deployer]\njurisdictions: [EU]\nuses: [agent]\nagent:\n  tools: [{ name: pay, scope: payment }]\ncontacts: { governance: x }\nreview: { last_reviewed: "2026-11-01" }\n---\n`;
  const r = runChecks({ text: md, atlas, today });
  assert.equal(r.results.find(x => x.id === 'AGC-CHK-11').status, 'fail');
  assert.equal(r.results.find(x => x.id === 'AGC-CHK-12').status, 'fail');
  assert.equal(r.results.find(x => x.id === 'AGC-CHK-13').status, 'fail');
});

test('overclaiming wording is flagged', () => {
  const md = `---\nspec: ai-governance/v0.1\nsystem: { name: a, owner: b }\nroles: [deployer]\njurisdictions: [JP]\nuses: [chatbot]\ncontacts: { governance: x }\nreview: { last_reviewed: "2026-11-01" }\n---\nWe are fully compliant.\n`;
  assert.equal(runChecks({ text: md, atlas, today }).results.find(x => x.id === 'AGC-CHK-16').status, 'warn');
});

test('stale review fails check 15', () => {
  const md = `---\nspec: ai-governance/v0.1\nsystem: { name: a, owner: b }\nroles: [deployer]\njurisdictions: [JP]\nuses: [chatbot]\ncontacts: { governance: x }\nreview: { last_reviewed: "2024-01-01" }\n---\n`;
  assert.equal(runChecks({ text: md, atlas, today }).results.find(x => x.id === 'AGC-CHK-15').status, 'fail');
});

test('SARIF and Markdown outputs are well formed', () => {
  const md = generateGovernanceMd({ name: 'X', owner: 'o', jurisdictions: ['EU'], roles: ['provider'], uses: ['chatbot'], atlas, today });
  const r = runChecks({ text: md, atlas, today });
  const s = toSarif(r);
  assert.equal(s.version, '2.1.0');
  assert.ok(s.runs[0].results.length >= 1);
  assert.ok(s.runs[0].results.every(x => ['error', 'warning'].includes(x.level)));
  assert.match(toMarkdown(r), /Not legal advice/);
  assert.doesNotMatch(toMarkdown(r), /certified|compliant/i);
});
