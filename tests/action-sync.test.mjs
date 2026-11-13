import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');

test('root action.yml (Marketplace) matches action/action.yml apart from the CLI path', () => {
  const root = read('action.yml').split('\n').filter(l => !l.startsWith('#')).join('\n')
    .replaceAll('${{ github.action_path }}/cli/aigovchain.mjs', 'CLI');
  const shield = read('action/action.yml')
    .replaceAll('${{ github.action_path }}/../cli/aigovchain.mjs', 'CLI');
  assert.equal(root, shield);
});

test('server.json and package.json agree for the MCP Registry', () => {
  const server = JSON.parse(read('server.json'));
  const pkg = JSON.parse(read('package.json'));
  assert.equal(server.name, pkg.mcpName);
  assert.equal(server.version, pkg.version);
  assert.equal(server.packages[0].identifier, pkg.name);
  assert.equal(server.packages[0].version, pkg.version);
  assert.ok(server.description.length <= 100);
});
