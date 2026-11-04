// Output formats: terminal text, Markdown (PR summary), SARIF, badge JSON and SVG.
import { TOOL_VERSION } from './governance-md.mjs';

const ICON = { pass: 'PASS', warn: 'WARN', fail: 'FAIL', skip: 'SKIP' };
const C = { pass: '\x1b[32m', warn: '\x1b[33m', fail: '\x1b[31m', skip: '\x1b[90m', reset: '\x1b[0m', bold: '\x1b[1m', dim: '\x1b[2m' };

export function toText(res, { color = process.stdout.isTTY } = {}) {
  const c = k => (color ? C[k] : '');
  const lines = [];
  lines.push(`${c('bold')}AI Governance Chain checks${c('reset')}  ${c('dim')}v${TOOL_VERSION} · not legal advice${c('reset')}`);
  lines.push('');
  for (const r of res.results) {
    lines.push(`  ${c(r.status)}${ICON[r.status].padEnd(4)}${c('reset')}  ${r.link.padEnd(10)} ${r.title}`);
    if (r.status !== 'pass') lines.push(`        ${c('dim')}${r.message}${c('reset')}`);
  }
  const s = res.summary;
  lines.push('');
  lines.push(`${s.ok ? c('pass') : c('fail')}${s.passed}/${s.total} checks passed${c('reset')}, ${s.warnings} warning(s), ${s.failed} failure(s)`);
  if (res.applicable?.length) lines.push(`${c('dim')}${res.applicable.length} obligation(s) in scope. Run "aigovchain scope --from AI_GOVERNANCE.md" to list them.${c('reset')}`);
  return lines.join('\n');
}

export function toMarkdown(res, { title = 'AI Governance Chain checks' } = {}) {
  const s = res.summary;
  const lines = [];
  lines.push(`### ${title}: ${s.passed}/${s.total} passed${s.failed ? `, ${s.failed} failed` : ''}${s.warnings ? `, ${s.warnings} warning(s)` : ''}`);
  lines.push('');
  lines.push('| Link | Check | Result | Details |');
  lines.push('|---|---|---|---|');
  for (const r of res.results) {
    const msg = String(r.message).replace(/\|/g, '\\|');
    lines.push(`| ${r.link} | ${r.title} | ${ICON[r.status]} | ${msg} |`);
  }
  lines.push('');
  const upcoming = (res.applicable || []).filter(o => o.status === 'not-yet-applicable').sort((a, b) => String(a.applies_from).localeCompare(String(b.applies_from))).slice(0, 5);
  if (upcoming.length) {
    lines.push('**Next dates for this system**');
    lines.push('');
    for (const o of upcoming) lines.push(`- ${o.applies_from}: ${o.instrument_short} ${o.article}, ${o.title} (\`${o.id}\`)`);
    lines.push('');
  }
  lines.push(`<sub>Checks by AI Governance Chain v${TOOL_VERSION}. Self-declared facts checked against the open Obligation Atlas (draft). Not legal advice, not a conformity assessment.</sub>`);
  return lines.join('\n');
}

export function toSarif(res, { file = 'AI_GOVERNANCE.md' } = {}) {
  const rules = res.results.map(r => ({
    id: r.id,
    name: r.title.replace(/[^A-Za-z0-9]+/g, ''),
    shortDescription: { text: r.title },
    fullDescription: { text: `${r.link} link of the governance chain: ${r.title}` },
    helpUri: 'https://github.com/mathieugouanou/aigovernancechain/blob/main/spec/AI_GOVERNANCE-spec.md#checks',
    properties: { tags: ['ai-governance', r.link.toLowerCase()] },
  }));
  const results = res.results.filter(r => r.status === 'fail' || r.status === 'warn').map(r => ({
    ruleId: r.id,
    level: r.status === 'fail' ? 'error' : 'warning',
    message: { text: `${r.title}: ${r.message}${r.obligations?.length ? ` (obligations: ${r.obligations.slice(0, 8).join(', ')})` : ''}` },
    locations: [{ physicalLocation: { artifactLocation: { uri: file }, region: { startLine: r.line || 1 } } }],
  }));
  return {
    $schema: 'https://json.schemastore.org/sarif-2.1.0.json',
    version: '2.1.0',
    runs: [{
      tool: { driver: { name: 'AI Governance Chain', version: TOOL_VERSION, informationUri: 'https://github.com/mathieugouanou/aigovernancechain', rules } },
      results,
    }],
  };
}

// shields.io endpoint format: https://shields.io/badges/endpoint-badge
export function toBadgeJson(res) {
  const s = res.summary;
  if (!res.results.length || res.results[0].status === 'fail') return { schemaVersion: 1, label: 'AI_GOVERNANCE.md', message: 'missing', color: 'lightgrey' };
  const color = s.failed ? 'orange' : s.warnings ? 'yellowgreen' : 'brightgreen';
  return { schemaVersion: 1, label: 'AI_GOVERNANCE.md', message: `${s.passed}/${s.total} checks`, color };
}

const COLORS = { brightgreen: '#4c1', yellowgreen: '#a4a61d', orange: '#fe7d37', lightgrey: '#9f9f9f', blue: '#007ec6' };
function textWidth(t) { return Math.round([...t].reduce((w, ch) => w + (/[ilI.,:;|!' ]/.test(ch) ? 3.6 : /[mwMW]/.test(ch) ? 9.5 : /[A-Z0-9_]/.test(ch) ? 7.4 : 6.4), 0) + 10); }
export function toBadgeSvg({ label, message, color }) {
  const lw = textWidth(label), mw = textWidth(message), w = lw + mw;
  const fill = COLORS[color] || color;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="20" role="img" aria-label="${esc(label)}: ${esc(message)}"><title>${esc(label)}: ${esc(message)}</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="${w}" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="${lw}" height="20" fill="#555"/><rect x="${lw}" width="${mw}" height="20" fill="${fill}"/><rect width="${w}" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="11"><text x="${lw / 2}" y="14">${esc(label)}</text><text x="${lw + mw / 2}" y="14">${esc(message)}</text></g></svg>\n`;
}
