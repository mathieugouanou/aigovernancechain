// Load, validate and query the Obligation Atlas.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { load as yamlLoad } from '../vendor/js-yaml.mjs';
import * as V from './vocab.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(HERE, '..');
export const REGIME_DIR = path.join(ROOT, 'atlas', 'regimes');
export const DIST = path.join(ROOT, 'atlas', 'dist', 'atlas.json');

const DATE = /^\d{4}-\d{2}-\d{2}$/;
const ID = /^AGC-[A-Z]+(?:-[A-Z]+)*-[A-Z0-9]+(?:-[A-Z0-9]+)*$/;

export function readRegimeFiles(dir = REGIME_DIR) {
  return fs.readdirSync(dir).filter(f => f.endsWith('.yaml')).sort().map(f => {
    const text = fs.readFileSync(path.join(dir, f), 'utf8');
    return { file: f, data: yamlLoad(text) };
  });
}

function err(list, file, where, msg) { list.push(`${file}: ${where}: ${msg}`); }

export function validateRegime(file, r, seenIds = new Set()) {
  const e = [];
  const w = [];
  if (!r || typeof r !== 'object') { err(e, file, 'root', 'not a YAML mapping'); return { errors: e, warnings: w }; }
  const base = file.replace(/\.yaml$/, '');
  if (r.id !== base) err(e, file, 'id', `must equal file name "${base}"`);
  if (!V.JURISDICTIONS[r.jurisdiction]) err(e, file, 'jurisdiction', `unknown code "${r.jurisdiction}"`);
  for (const k of ['name', 'as_of']) if (!r[k]) err(e, file, k, 'required');
  if (r.as_of && !DATE.test(String(r.as_of))) err(e, file, 'as_of', 'must be "YYYY-MM-DD" (quoted)');
  if (!r.review || !V.REVIEW_STATUS.includes(r.review.status)) err(e, file, 'review.status', `one of ${V.REVIEW_STATUS.join(', ')}`);
  if (!r.card || !r.card.title || !r.card.one_liner) err(e, file, 'card', 'title and one_liner required');
  const instIds = new Set();
  if (!Array.isArray(r.instruments) || r.instruments.length === 0) err(e, file, 'instruments', 'at least one instrument');
  for (const [i, ins] of (r.instruments || []).entries()) {
    const at = `instruments[${i}] ${ins?.id || ''}`;
    for (const k of ['id', 'code', 'title', 'type', 'legal_force', 'status', 'official_url']) if (!ins?.[k]) err(e, file, at, `${k} required`);
    if (ins?.type && !V.INSTRUMENT_TYPES.includes(ins.type)) err(e, file, at, `type "${ins.type}" not in vocabulary`);
    if (ins?.legal_force && !V.LEGAL_FORCE.includes(ins.legal_force)) err(e, file, at, `legal_force "${ins.legal_force}" not in vocabulary`);
    if (ins?.status && !V.INSTRUMENT_STATUS.includes(ins.status)) err(e, file, at, `status "${ins.status}" not in vocabulary`);
    if (ins?.official_url && !/^https?:\/\//.test(ins.official_url)) err(e, file, at, 'official_url must be http(s)');
    for (const [j, d] of (ins?.key_dates || []).entries()) {
      if (!DATE.test(String(d?.date))) err(e, file, `${at} key_dates[${j}]`, 'date must be "YYYY-MM-DD"');
      if (!d?.event) err(e, file, `${at} key_dates[${j}]`, 'event required');
    }
    if (ins?.id) instIds.add(ins.id);
  }
  if (!Array.isArray(r.obligations) || r.obligations.length === 0) err(e, file, 'obligations', 'at least one obligation');
  for (const [i, o] of (r.obligations || []).entries()) {
    const at = `obligations[${i}] ${o?.id || ''}`;
    for (const k of ['id', 'instrument', 'article', 'title', 'plain', 'applies_to', 'status', 'controls', 'source_url', 'confidence']) if (o?.[k] === undefined || o?.[k] === '') err(e, file, at, `${k} required`);
    if (o?.id && !ID.test(o.id)) err(e, file, at, 'id must look like AGC-<JUR>-<CODE>-<ARTICLE> in capitals, digits and hyphens');
    if (o?.id && seenIds.has(o.id)) err(e, file, at, 'duplicate id');
    if (o?.id) seenIds.add(o.id);
    if (o?.instrument && !instIds.has(o.instrument)) err(e, file, at, `instrument "${o.instrument}" not defined in instruments`);
    const roles = o?.applies_to?.roles || [];
    const uses = o?.applies_to?.uses || [];
    if (!roles.length) err(e, file, at, 'applies_to.roles required');
    if (!uses.length) err(e, file, at, 'applies_to.uses required');
    for (const x of roles) if (!V.ROLES.includes(x)) err(e, file, at, `role "${x}" not in vocabulary`);
    for (const x of uses) if (!V.USES.includes(x)) err(e, file, at, `use "${x}" not in vocabulary`);
    for (const c of o?.controls || []) if (!V.CONTROLS[c]) err(e, file, at, `control "${c}" not in vocabulary`);
    if (o?.status && !V.OBLIGATION_STATUS.includes(o.status)) err(e, file, at, `status "${o.status}" not in vocabulary`);
    if (o?.confidence && !V.CONFIDENCE.includes(o.confidence)) err(e, file, at, `confidence "${o.confidence}" not in vocabulary`);
    if (o?.applies_from !== null && o?.applies_from !== undefined && !DATE.test(String(o.applies_from))) err(e, file, at, 'applies_from must be "YYYY-MM-DD" or null');
    if (o?.source_url && !/^https?:\/\//.test(o.source_url)) err(e, file, at, 'source_url must be http(s)');
    if (o?.plain && o.plain.length > 900) w.push(`${file}: ${at}: plain text is long (${o.plain.length} chars); keep it under 900`);
    if (o?.status === 'applicable' && o?.applies_from && o.applies_from > (r.as_of || '')) w.push(`${file}: ${at}: status applicable but applies_from ${o.applies_from} is after as_of ${r.as_of}`);
    if (o?.status === 'not-yet-applicable' && o?.applies_from && o.applies_from <= (r.as_of || '')) w.push(`${file}: ${at}: status not-yet-applicable but applies_from ${o.applies_from} is on or before as_of ${r.as_of}`);
  }
  for (const [i, d] of (r.deadlines || []).entries()) {
    if (!DATE.test(String(d?.date))) err(e, file, `deadlines[${i}]`, 'date must be "YYYY-MM-DD"');
    if (!d?.title) err(e, file, `deadlines[${i}]`, 'title required');
    for (const id of d?.obligations || []) if (!(r.obligations || []).some(o => o.id === id)) err(e, file, `deadlines[${i}]`, `unknown obligation ${id}`);
  }
  return { errors: e, warnings: w };
}

export function validateAll(dir = REGIME_DIR) {
  const seen = new Set();
  const errors = [], warnings = [];
  const files = readRegimeFiles(dir);
  for (const { file, data } of files) {
    const r = validateRegime(file, data, seen);
    errors.push(...r.errors); warnings.push(...r.warnings);
  }
  return { files: files.length, obligations: seen.size, errors, warnings };
}

let cache = null;
export function loadAtlas() {
  if (cache) return cache;
  if (fs.existsSync(DIST)) cache = JSON.parse(fs.readFileSync(DIST, 'utf8'));
  else cache = compileAtlas();
  return cache;
}

export function compileAtlas(dir = REGIME_DIR) {
  const regimes = readRegimeFiles(dir).map(({ data }) => data);
  const obligations = [];
  const deadlines = [];
  for (const r of regimes) {
    const instById = Object.fromEntries((r.instruments || []).map(i => [i.id, i]));
    const curated = (r.deadlines || []).map(d => ({ date: String(d.date), title: d.title, jurisdiction: r.jurisdiction, regime: r.id, instrument: d.instrument || null, obligations: d.obligations || [], kind: 'deadline', source: d.source || (d.instrument && instById[d.instrument]?.official_url) || null }));
    const curatedDates = new Set(curated.map(d => d.date));
    const covered = new Set(curated.flatMap(d => d.obligations.map(id => `${d.date}|${id}`)));
    for (const o of r.obligations || []) {
      obligations.push({ ...o, regime: r.id, jurisdiction: r.jurisdiction, instrument_short: instById[o.instrument]?.short || instById[o.instrument]?.title, cite: citeOf(instById[o.instrument]?.short || instById[o.instrument]?.title, o.article), review_status: r.review?.status || 'draft-unreviewed', as_of: r.as_of });
      if (o.applies_from && !covered.has(`${o.applies_from}|${o.id}`)) deadlines.push({ date: String(o.applies_from), title: `${o.title} (${citeOf(instById[o.instrument]?.short, o.article)})`, jurisdiction: r.jurisdiction, regime: r.id, instrument: o.instrument, obligations: [o.id], kind: 'applies', source: o.source_url });
    }
    // milestones only where no curated deadline exists for that regime on that date
    for (const ins of r.instruments || []) for (const d of ins.key_dates || []) if (!curatedDates.has(String(d.date))) deadlines.push({ date: String(d.date), title: `${ins.short || ins.title}: ${d.event}`, jurisdiction: r.jurisdiction, regime: r.id, instrument: ins.id, obligations: [], kind: 'milestone', source: d.source || ins.official_url });
    deadlines.push(...curated);
  }
  // de-duplicate identical date+title pairs; drop milestones that repeat an obligation start of the same instrument on the same date
  const seen = new Set();
  const applyKeys = new Set(deadlines.filter(d => d.kind === 'applies').map(d => `${d.date}|${d.instrument}`));
  const uniq = deadlines
    .filter(d => !(d.kind === 'milestone' && applyKeys.has(`${d.date}|${d.instrument}`) && /appl|effect|begin|start|commence/i.test(d.title)))
    .filter(d => { const k = `${d.date}|${d.title}`; if (seen.has(k)) return false; seen.add(k); return true; })
    .sort((a, b) => a.date.localeCompare(b.date) || a.jurisdiction.localeCompare(b.jurisdiction) || a.title.localeCompare(b.title));
  const generated = regimes.map(r => String(r.as_of || '')).sort().pop() || new Date().toISOString().slice(0, 10);
  return { spec: 'agc-atlas/v0.1', generated, license: 'CC-BY-4.0', disclaimer: 'Draft open data. Not legal advice. Check each source_url.', regimes: regimes.map(r => ({ id: r.id, jurisdiction: r.jurisdiction, name: r.name, as_of: r.as_of, review: r.review, card: r.card, instruments: r.instruments, sources: r.sources || [] })), obligations, deadlines: uniq };
}

// Which obligations apply to a system profile?
/** Human citation without repeating the instrument name, e.g. "EU AI Act Art. 50(1)" or "FTC Act §5(a)". */
export function citeOf(short, article) {
  const sh = String(short || '').trim(), art = String(article || '').trim();
  if (!sh) return art;
  if (!art) return sh;
  const first = sh.split(/\s+/)[0].toLowerCase();
  return art.toLowerCase().startsWith(first) ? art : `${sh} ${art}`;
}

export function scope(atlas, { jurisdictions = [], roles = [], uses = [], includeFuture = true, includeVoluntary = true } = {}) {
  const J = new Set(V.expandJurisdictions(jurisdictions));
  const R = new Set(roles.map(String));
  const U = new Set(uses.map(String));
  return atlas.obligations.filter(o => {
    if (!J.has(o.jurisdiction)) return false;
    const oroles = o.applies_to?.roles || [];
    const ouses = o.applies_to?.uses || [];
    const roleOk = oroles.includes('any') || oroles.some(x => R.has(x)) || (R.has('provider') && oroles.includes('developer')) || (R.has('developer') && oroles.includes('provider'));
    const useOk = ouses.includes('any-ai') || ouses.some(x => U.has(x)) || (U.has('frontier-model') && ouses.includes('gpai-model'));
    if (!roleOk || !useOk) return false;
    if (o.status === 'repealed') return false;
    if (!includeFuture && (o.status === 'not-yet-applicable' || o.status === 'proposed')) return false;
    if (!includeVoluntary && o.status === 'voluntary') return false;
    return true;
  });
}

export function upcoming(atlas, { from = new Date().toISOString().slice(0, 10), days = 180, jurisdictions = null } = {}) {
  const end = new Date(Date.parse(from) + days * 86400000).toISOString().slice(0, 10);
  const J = jurisdictions && jurisdictions.length ? new Set(V.expandJurisdictions(jurisdictions)) : null;
  return atlas.deadlines.filter(d => d.date >= from && d.date <= end && (!J || J.has(d.jurisdiction)));
}

export function search(atlas, q, limit = 20) {
  const terms = String(q || '').toLowerCase().split(/\s+/).filter(Boolean);
  const scored = atlas.obligations.map(o => {
    const hay = `${o.id} ${o.title} ${o.plain} ${o.article} ${o.instrument_short} ${o.jurisdiction} ${(o.controls || []).join(' ')} ${(o.applies_to?.uses || []).join(' ')}`.toLowerCase();
    const s = terms.reduce((n, t) => n + (hay.includes(t) ? 1 : 0), 0);
    return [s, o];
  }).filter(([s]) => s > 0).sort((a, b) => b[0] - a[0]);
  return scored.slice(0, limit).map(([, o]) => o);
}
