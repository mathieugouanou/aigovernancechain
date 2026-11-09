// AI-BOM generator: an inventory of the models, datasets and software dependencies of an AI system,
// built from the models section of AI_GOVERNANCE.md plus the project's dependency files.
// Outputs CycloneDX 1.6 JSON (machine-learning-model components) or SPDX 3.0.1 JSON-LD (AI and Dataset profiles).
// An AI-BOM lists declared components. It cannot prove which model actually runs. Not legal advice.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { parseGovernanceMd, TOOL_VERSION } from './governance-md.mjs';

const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'item';
const sha = s => crypto.createHash('sha256').update(String(s)).digest('hex');
const uuidFrom = s => { const h = sha(s); return `${h.slice(0, 8)}-${h.slice(8, 12)}-5${h.slice(13, 16)}-${((parseInt(h[16], 16) & 3) | 8).toString(16)}${h.slice(17, 20)}-${h.slice(20, 32)}`; };
const clean = o => Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined && v !== null && !(Array.isArray(v) && !v.length)));
const isUrl = s => /^https?:\/\//i.test(String(s || ''));
// Common SPDX licence ids. Anything else is written as a licence name, which every validator accepts.
const SPDX_IDS = new Set(['Apache-2.0', 'MIT', 'BSD-2-Clause', 'BSD-3-Clause', 'GPL-2.0-only', 'GPL-3.0-only', 'LGPL-3.0-only', 'MPL-2.0', 'CC0-1.0', 'CC-BY-4.0', 'CC-BY-SA-4.0', 'CC-BY-NC-4.0', 'CDLA-Permissive-2.0', 'Unlicense']);
const cdxLicense = l => (SPDX_IDS.has(l) ? { license: { id: l } } : { license: { name: l } });

// ---------- read what the project declares ----------
export function readModels(fm) {
  return (fm.models || []).filter(m => m && m.name).map(m => ({
    name: String(m.name),
    provider: m.provider ? String(m.provider) : undefined,
    version: m.version ? String(m.version) : undefined,
    model_card: m.model_card ? String(m.model_card) : undefined,
    license: m.license ? String(m.license) : undefined,
    task: m.task ? String(m.task) : undefined,
    datasets: (m.datasets || []).map(d => (typeof d === 'string' ? { name: d } : { name: String(d.name), url: d.url ? String(d.url) : undefined, license: d.license ? String(d.license) : undefined })).filter(d => d.name),
  }));
}

export function readDependencies(dir = '.') {
  const deps = [];
  const pj = path.join(dir, 'package.json');
  if (fs.existsSync(pj)) {
    const p = JSON.parse(fs.readFileSync(pj, 'utf8'));
    let lock = null;
    const pl = path.join(dir, 'package-lock.json');
    if (fs.existsSync(pl)) { try { lock = JSON.parse(fs.readFileSync(pl, 'utf8')); } catch { lock = null; } }
    for (const [name, range] of Object.entries({ ...(p.dependencies || {}), ...(p.optionalDependencies || {}) })) {
      const locked = lock?.packages?.[`node_modules/${name}`]?.version;
      const version = locked || String(range).replace(/^[\^~>=<\s]+/, '').split(/\s/)[0] || undefined;
      deps.push({ ecosystem: 'npm', name, version, exact: !!locked });
    }
  }
  const rq = path.join(dir, 'requirements.txt');
  if (fs.existsSync(rq)) {
    for (const raw of fs.readFileSync(rq, 'utf8').split(/\r?\n/)) {
      const line = raw.replace(/#.*/, '').trim();
      if (!line || line.startsWith('-')) continue;
      const m = /^([A-Za-z0-9_.\-]+)(?:\[[^\]]*\])?\s*(==|>=|~=|<=|>|<)?\s*([A-Za-z0-9_.\-+]+)?/.exec(line);
      if (m) deps.push({ ecosystem: 'pypi', name: m[1].toLowerCase().replace(/_/g, '-'), version: m[3], exact: m[2] === '==' });
    }
  }
  return deps;
}

const purl = d => `pkg:${d.ecosystem}/${d.ecosystem === 'npm' && d.name.startsWith('@') ? d.name.replace('@', '%40') : d.name}${d.version && d.exact ? `@${d.version}` : ''}`;

// ---------- CycloneDX 1.6 ----------
export function toCycloneDX({ fm, models, deps, now }) {
  const sys = fm.system?.name || 'AI system';
  const rootRef = `system-${slug(sys)}`;
  const comps = [];
  const refs = [];
  for (const m of models) {
    const ref = `model-${slug(m.provider || '')}-${slug(m.name)}${m.version ? '-' + slug(m.version) : ''}`;
    refs.push(ref);
    comps.push(clean({
      type: 'machine-learning-model',
      'bom-ref': ref,
      name: m.name,
      version: m.version,
      supplier: m.provider ? { name: m.provider } : undefined,
      licenses: m.license ? [cdxLicense(m.license)] : undefined,
      modelCard: m.task || m.datasets.length ? clean({
        modelParameters: clean({
          task: m.task,
          datasets: m.datasets.length ? m.datasets.map(d => ({ ref: `data-${slug(d.name)}` })) : undefined,
        }),
      }) : undefined,
      externalReferences: m.model_card && isUrl(m.model_card) ? [{ type: 'model-card', url: m.model_card }] : undefined,
      properties: m.model_card && !isUrl(m.model_card) ? [{ name: 'aigovernancechain:model_card', value: m.model_card }] : undefined,
    }));
    for (const d of m.datasets) {
      const dref = `data-${slug(d.name)}`;
      if (comps.some(c => c['bom-ref'] === dref)) continue;
      refs.push(dref);
      comps.push(clean({
        type: 'data',
        'bom-ref': dref,
        name: d.name,
        data: [{ type: 'dataset', name: d.name }],
        licenses: d.license ? [cdxLicense(d.license)] : undefined,
        externalReferences: d.url && isUrl(d.url) ? [{ type: 'distribution', url: d.url }] : undefined,
      }));
    }
  }
  for (const d of deps) {
    const ref = `lib-${d.ecosystem}-${slug(d.name)}`;
    refs.push(ref);
    comps.push(clean({ type: 'library', 'bom-ref': ref, name: d.name, version: d.version, purl: purl(d) }));
  }
  return {
    $schema: 'http://cyclonedx.org/schema/bom-1.6.schema.json',
    bomFormat: 'CycloneDX',
    specVersion: '1.6',
    serialNumber: `urn:uuid:${uuidFrom(JSON.stringify({ sys, models, deps }))}`,
    version: 1,
    metadata: {
      timestamp: now,
      tools: { components: [{ type: 'application', name: 'aigovchain', version: TOOL_VERSION, externalReferences: [{ type: 'website', url: 'https://aigovernancechain.com' }] }] },
      component: clean({ type: 'application', 'bom-ref': rootRef, name: sys, description: fm.system?.description }),
      properties: [{ name: 'aigovernancechain:note', value: 'Generated from AI_GOVERNANCE.md and dependency files. Lists declared components only. Not legal advice.' }],
    },
    components: comps,
    dependencies: [{ ref: rootRef, dependsOn: refs }, ...refs.map(r => ({ ref: r }))],
  };
}

// ---------- SPDX 3.0.1 JSON-LD ----------
export function toSPDX({ fm, models, deps, now }) {
  const sys = fm.system?.name || 'AI system';
  const ns = `https://spdx.org/spdxdocs/aigovchain-${slug(sys)}-${sha(JSON.stringify({ sys, models, deps })).slice(0, 12)}`;
  const id = s => `${ns}#${s}`;
  const ci = '_:creationinfo';
  const g = [];
  const toolId = id('tool-aigovchain');
  const agentId = id('agent-aigovchain');
  g.push({ type: 'CreationInfo', '@id': ci, specVersion: '3.0.1', created: now, createdBy: [agentId], createdUsing: [toolId] });
  g.push({ type: 'Agent', spdxId: agentId, creationInfo: ci, name: 'AI Governance Chain aigovchain' });
  g.push({ type: 'Tool', spdxId: toolId, creationInfo: ci, name: `aigovchain ${TOOL_VERSION}` });
  const orgs = new Map();
  const org = name => { if (!orgs.has(name)) { const oid = id(`org-${slug(name)}`); orgs.set(name, oid); g.push({ type: 'Organization', spdxId: oid, creationInfo: ci, name }); } return orgs.get(name); };
  const rootId = id(`system-${slug(sys)}`);
  g.push(clean({ type: 'software_Package', spdxId: rootId, creationInfo: ci, name: sys, description: fm.system?.description, software_primaryPurpose: 'application' }));
  const children = [];
  const rels = [];
  for (const m of models) {
    const mid = id(`model-${slug(m.provider || '')}-${slug(m.name)}${m.version ? '-' + slug(m.version) : ''}`);
    children.push(mid);
    g.push(clean({
      type: 'ai_AIPackage', spdxId: mid, creationInfo: ci, name: m.name,
      software_packageVersion: m.version,
      suppliedBy: m.provider ? org(m.provider) : undefined,
      software_primaryPurpose: 'model',
      software_homePage: m.model_card && isUrl(m.model_card) ? m.model_card : undefined,
      ai_typeOfModel: m.task ? [m.task] : undefined,
      comment: m.model_card && !isUrl(m.model_card) ? `Model card: ${m.model_card}` : undefined,
    }));
    for (const d of m.datasets) {
      const did = id(`data-${slug(d.name)}`);
      if (!g.some(x => x.spdxId === did)) {
        g.push(clean({ type: 'dataset_DatasetPackage', spdxId: did, creationInfo: ci, name: d.name, software_primaryPurpose: 'data', software_downloadLocation: d.url && isUrl(d.url) ? d.url : undefined, dataset_datasetType: ['other'] }));
        children.push(did);
      }
      rels.push({ type: 'Relationship', spdxId: id(`rel-${slug(m.name)}-trainedOn-${slug(d.name)}`), creationInfo: ci, from: mid, relationshipType: 'trainedOn', to: [did] });
    }
  }
  for (const d of deps) {
    const pid = id(`lib-${d.ecosystem}-${slug(d.name)}`);
    children.push(pid);
    g.push(clean({ type: 'software_Package', spdxId: pid, creationInfo: ci, name: d.name, software_packageVersion: d.version, software_packageUrl: purl(d), software_primaryPurpose: 'library' }));
  }
  if (children.length) rels.push({ type: 'Relationship', spdxId: id('rel-system-dependsOn'), creationInfo: ci, from: rootId, relationshipType: 'dependsOn', to: children });
  g.push(...rels);
  const docId = id('document');
  const all = g.filter(x => x.spdxId).map(x => x.spdxId);
  const profiles = ['core', 'software'];
  if (models.length) profiles.push('ai');
  if (models.some(m => m.datasets.length)) profiles.push('dataset');
  g.push({ type: 'SpdxDocument', spdxId: docId, creationInfo: ci, name: `AI-BOM for ${sys}`, comment: 'Generated by aigovchain aibom from AI_GOVERNANCE.md and dependency files. Lists declared components only. Not legal advice.', profileConformance: profiles, rootElement: [rootId], element: all, dataLicense: 'https://spdx.org/licenses/CC0-1.0' });
  return { '@context': 'https://spdx.org/rdf/3.0.1/spdx-context.jsonld', '@graph': g };
}

export function buildAibom({ text, dir = '.', format = 'cyclonedx', now = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z'), includeDeps = true }) {
  const p = parseGovernanceMd(text);
  if (p.error) throw new Error(`Cannot read AI_GOVERNANCE.md: ${p.error}`);
  const fm = p.frontMatter;
  const models = readModels(fm);
  const deps = includeDeps ? readDependencies(dir) : [];
  const summary = { models: models.length, datasets: new Set(models.flatMap(m => m.datasets.map(d => d.name))).size, dependencies: deps.length };
  if (format === 'cyclonedx' || format === 'cdx') return { bom: toCycloneDX({ fm, models, deps, now }), summary, file: 'aibom.cdx.json' };
  if (format === 'spdx' || format === 'spdx3') return { bom: toSPDX({ fm, models, deps, now }), summary, file: 'aibom.spdx3.json' };
  throw new Error(`Unknown format "${format}". Use cyclonedx or spdx.`);
}
