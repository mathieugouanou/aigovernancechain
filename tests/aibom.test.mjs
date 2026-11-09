import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { buildAibom, readDependencies } from '../lib/aibom.mjs';

const FILE = `---
spec: ai-governance/v0.1
system: { name: "Acme support assistant", owner: "ai-lead@acme.example", description: "Answers customer questions" }
roles: [deployer]
jurisdictions: [EU]
uses: [chatbot]
models:
  - name: "acme/support-llm"
    provider: "Acme AI"
    version: "2026-10"
    model_card: "https://acme.example/model-card"
    license: "Apache-2.0"
    task: "text-generation"
    datasets:
      - { name: "Acme support tickets 2025", url: "https://acme.example/data/tickets", license: "Proprietary" }
  - name: "intfloat/e5-small-v2"
    provider: "Hugging Face"
    model_card: "docs/model-card-e5.md"
---
`;
const NOW = '2026-11-09T12:00:00Z';

function project() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'agc-aibom-'));
  fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify({ name: 'x', dependencies: { openai: '^4.70.0', '@scope/tool': '1.2.3' } }));
  fs.writeFileSync(path.join(dir, 'requirements.txt'), 'torch==2.5.1\ntransformers>=4.46  # pinned later\n-r other.txt\n');
  return dir;
}

test('reads npm and PyPI dependencies', () => {
  const deps = readDependencies(project());
  assert.deepEqual(deps.map(d => `${d.ecosystem}:${d.name}`), ['npm:openai', 'npm:@scope/tool', 'pypi:torch', 'pypi:transformers']);
  assert.equal(deps.find(d => d.name === 'torch').exact, true);
  assert.equal(deps.find(d => d.name === 'transformers').exact, false);
});

test('CycloneDX 1.6 AI-BOM lists models, datasets and libraries', () => {
  const { bom, summary, file } = buildAibom({ text: FILE, dir: project(), format: 'cyclonedx', now: NOW });
  assert.equal(file, 'aibom.cdx.json');
  assert.deepEqual(summary, { models: 2, datasets: 1, dependencies: 4 });
  assert.equal(bom.bomFormat, 'CycloneDX');
  assert.equal(bom.specVersion, '1.6');
  assert.match(bom.serialNumber, /^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-5[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
  const types = bom.components.map(c => c.type);
  assert.equal(types.filter(t => t === 'machine-learning-model').length, 2);
  assert.equal(types.filter(t => t === 'data').length, 1);
  assert.equal(types.filter(t => t === 'library').length, 4);
  const llm = bom.components.find(c => c.name === 'acme/support-llm');
  assert.equal(llm.modelCard.modelParameters.task, 'text-generation');
  assert.deepEqual(llm.licenses, [{ license: { id: 'Apache-2.0' } }]);
  assert.equal(bom.components.find(c => c.name === 'torch').purl, 'pkg:pypi/torch@2.5.1');
  assert.equal(bom.components.find(c => c.name === '@scope/tool').purl, 'pkg:npm/%40scope/tool');
  const refs = new Set(bom.components.map(c => c['bom-ref']));
  assert.equal(refs.size, bom.components.length, 'bom-refs are unique');
  for (const d of bom.dependencies[0].dependsOn) assert.ok(refs.has(d), d);
});

test('the same input gives the same serial number', () => {
  const a = buildAibom({ text: FILE, dir: project(), now: NOW }).bom.serialNumber;
  const b = buildAibom({ text: FILE, dir: project(), now: '2027-01-01T00:00:00Z' }).bom.serialNumber;
  assert.equal(a, b);
});

test('SPDX 3.0.1 AI-BOM uses the AI and Dataset profiles', () => {
  const { bom, file } = buildAibom({ text: FILE, dir: project(), format: 'spdx', now: NOW });
  assert.equal(file, 'aibom.spdx3.json');
  assert.equal(bom['@context'], 'https://spdx.org/rdf/3.0.1/spdx-context.jsonld');
  const g = bom['@graph'];
  const doc = g.find(x => x.type === 'SpdxDocument');
  assert.deepEqual(doc.profileConformance, ['core', 'software', 'ai', 'dataset']);
  assert.equal(g.filter(x => x.type === 'ai_AIPackage').length, 2);
  assert.equal(g.filter(x => x.type === 'dataset_DatasetPackage').length, 1);
  assert.ok(g.some(x => x.type === 'Relationship' && x.relationshipType === 'trainedOn'));
  const ids = g.filter(x => x.spdxId).map(x => x.spdxId);
  assert.equal(new Set(ids).size, ids.length, 'spdxIds are unique');
});

test('--no-deps leaves dependencies out, and unknown formats fail', () => {
  assert.equal(buildAibom({ text: FILE, dir: project(), includeDeps: false, now: NOW }).summary.dependencies, 0);
  assert.throws(() => buildAibom({ text: FILE, format: 'xml' }), /Unknown format/);
});
