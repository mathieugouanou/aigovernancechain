// Evidence Pack: a dated, hashed bundle showing what was declared and checked.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { TOOL_VERSION } from './governance-md.mjs';

const sha256 = buf => crypto.createHash('sha256').update(buf).digest('hex');

export function buildEvidencePack({ res, text, file = 'AI_GOVERNANCE.md', atlas, outDir = 'governance-evidence', cwd = process.cwd(), now = new Date() }) {
  fs.mkdirSync(outDir, { recursive: true });
  const fm = res.frontMatter || {};
  const controls = fm.controls || {};
  const evidenceFiles = [];
  for (const [key, v] of Object.entries(controls)) {
    const ev = v && typeof v === 'object' ? v.evidence : null;
    for (const p of [].concat(ev || [])) {
      if (typeof p !== 'string' || /^https?:/.test(p)) { if (p) evidenceFiles.push({ control: key, ref: p, kind: 'link' }); continue; }
      const abs = path.resolve(cwd, p);
      if (fs.existsSync(abs) && fs.statSync(abs).isFile()) evidenceFiles.push({ control: key, ref: p, kind: 'file', sha256: sha256(fs.readFileSync(abs)), bytes: fs.statSync(abs).size });
      else evidenceFiles.push({ control: key, ref: p, kind: 'missing' });
    }
  }
  const statusOf = k => { const v = controls[k]; return typeof v === 'string' ? v : v?.status || 'not-declared'; };
  const pack = {
    spec: 'agc-evidence/v0.1',
    generated_at: now.toISOString(),
    tool: { name: 'AI Governance Chain', version: TOOL_VERSION },
    atlas: { generated: atlas?.generated, obligations: atlas?.obligations?.length, review_status: 'draft-unreviewed unless stated per regime' },
    source: {
      repository: process.env.GITHUB_REPOSITORY || null,
      commit: process.env.GITHUB_SHA || null,
      ref: process.env.GITHUB_REF || null,
      run_url: process.env.GITHUB_SERVER_URL && process.env.GITHUB_RUN_ID ? `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}` : null,
    },
    governance_file: { path: file, sha256: text ? sha256(Buffer.from(text)) : null },
    system: fm.system || null,
    profile: res.profile,
    summary: res.summary,
    checks: res.results.map(({ id, link, title, status, message, obligations }) => ({ id, link, title, status, message, obligations })),
    obligations: (res.applicable || []).map(o => ({ id: o.id, jurisdiction: o.jurisdiction, instrument: o.instrument_short, article: o.article, title: o.title, status: o.status, applies_from: o.applies_from, source_url: o.source_url, confidence: o.confidence, controls: (o.controls || []).map(c => ({ control: c, declared_status: statusOf(c) })) })),
    evidence_files: evidenceFiles,
    disclaimer: 'Self-declared information checked automatically against a draft open dataset. This is not a conformity assessment, audit, certification or legal advice.',
  };
  const json = JSON.stringify(pack, null, 2) + '\n';
  fs.writeFileSync(path.join(outDir, 'evidence.json'), json);
  const md = [];
  md.push(`# Evidence Pack: ${fm.system?.name || 'AI system'}`);
  md.push('');
  md.push(`Generated ${pack.generated_at} by AI Governance Chain v${TOOL_VERSION}.`);
  if (pack.source.repository) md.push(`Repository ${pack.source.repository} at commit ${pack.source.commit}.`);
  md.push(`AI_GOVERNANCE.md SHA-256: \`${pack.governance_file.sha256}\``);
  md.push('');
  md.push(`**Checks:** ${res.summary.passed}/${res.summary.total} passed, ${res.summary.warnings} warning(s), ${res.summary.failed} failure(s).`);
  md.push('');
  md.push('| Obligation | Rule | Status | Applies from | Controls (declared status) |');
  md.push('|---|---|---|---|---|');
  for (const o of pack.obligations) md.push(`| ${o.id} | ${o.instrument} ${o.article}: ${o.title} | ${o.status} | ${o.applies_from || 'n/a'} | ${o.controls.map(c => `${c.control} (${c.declared_status})`).join(', ')} |`);
  md.push('');
  if (evidenceFiles.length) {
    md.push('| Control | Evidence | Kind | SHA-256 |');
    md.push('|---|---|---|---|');
    for (const e of evidenceFiles) md.push(`| ${e.control} | ${e.ref} | ${e.kind} | ${e.sha256 ? `\`${e.sha256.slice(0, 16)}...\`` : ''} |`);
    md.push('');
  }
  md.push(`_${pack.disclaimer}_`);
  md.push('');
  fs.writeFileSync(path.join(outDir, 'EVIDENCE.md'), md.join('\n'));
  return { dir: outDir, sha256: sha256(Buffer.from(json)), pack };
}
