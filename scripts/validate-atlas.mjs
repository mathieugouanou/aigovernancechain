#!/usr/bin/env node
// Validate every file in atlas/regimes (or a single file passed as argument).
import path from 'node:path';
import fs from 'node:fs';
import { load as yamlLoad } from '../vendor/js-yaml.mjs';
import { validateAll, validateRegime } from '../lib/atlas.mjs';

const arg = process.argv[2];
let res;
if (arg) {
  const file = path.basename(arg);
  let data;
  try { data = yamlLoad(fs.readFileSync(arg, 'utf8')); }
  catch (e) { console.error(`YAML parse error in ${file}: ${e.message}`); process.exit(1); }
  const r = validateRegime(file, data);
  res = { files: 1, obligations: (data?.obligations || []).length, ...r };
} else {
  res = validateAll();
}
for (const w of res.warnings) console.log(`warning  ${w}`);
for (const e of res.errors) console.log(`ERROR    ${e}`);
console.log(`\n${res.files} file(s), ${res.obligations} obligation(s), ${res.errors.length} error(s), ${res.warnings.length} warning(s)`);
process.exit(res.errors.length ? 1 : 0);
