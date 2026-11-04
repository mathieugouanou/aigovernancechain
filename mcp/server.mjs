// AI Governance Chain MCP server (stdio, JSON-RPC 2.0, newline-delimited). Zero dependencies.
// Client config:  { "command": "npx", "args": ["-y", "github:mathieugouanou/aigovernancechain", "mcp"] }
import readline from 'node:readline';
import { loadAtlas, scope, upcoming, search } from '../lib/atlas.mjs';
import { runChecks, generateGovernanceMd, TOOL_VERSION } from '../lib/governance-md.mjs';
import { toMarkdown } from '../lib/report.mjs';
import * as V from '../lib/vocab.mjs';

const SUPPORTED_PROTOCOLS = ['2025-11-25', '2025-06-18', '2025-03-26', '2024-11-05'];
const DISCLAIMER = 'Source: AI Governance Chain Obligation Atlas (open data, draft unless a regime says otherwise). Not legal advice. Cite the source_url for each obligation.';
const slim = o => ({ id: o.id, jurisdiction: o.jurisdiction, instrument: o.instrument_short, article: o.article, cite: o.cite, title: o.title, plain: o.plain, status: o.status, applies_from: o.applies_from ?? null, applies_to: o.applies_to, controls: o.controls, penalty: o.penalty, source_url: o.source_url, confidence: o.confidence, review_status: o.review_status, as_of: o.as_of });
const strArr = d => ({ type: 'array', items: { type: 'string' }, description: d });

export const TOOLS = [
  { name: 'atlas_list_regimes', description: 'List the AI-governance regimes in the Obligation Atlas (EU AI Act, US federal and states, China, Korea, Japan, UK, Singapore, Switzerland, India, Vietnam, Council of Europe) with obligation counts and review status.', inputSchema: { type: 'object', properties: {} }, annotations: { readOnlyHint: true, openWorldHint: false } },
  { name: 'atlas_get_regime', description: 'Get one regime: instruments, key dates, official links and all its obligations. Use a regime id (eu, us-ca, cn ...) or a jurisdiction code (EU, US-CA, CN ...).', inputSchema: { type: 'object', properties: { regime: { type: 'string' } }, required: ['regime'] }, annotations: { readOnlyHint: true } },
  { name: 'atlas_search', description: 'Full-text search over all obligations (ids, titles, plain-language summaries, articles, controls). Returns the best matches with source links.', inputSchema: { type: 'object', properties: { query: { type: 'string' }, limit: { type: 'integer', minimum: 1, maximum: 50 } }, required: ['query'] }, annotations: { readOnlyHint: true } },
  { name: 'atlas_get_obligation', description: 'Get one obligation by its stable id, for example AGC-EU-AIA-50-1.', inputSchema: { type: 'object', properties: { id: { type: 'string' } }, required: ['id'] }, annotations: { readOnlyHint: true } },
  { name: 'scope_check', description: `Which AI-governance obligations apply to a system? Give jurisdictions (${Object.keys(V.JURISDICTIONS).join(', ')} or EU member codes), roles (${V.ROLES.join(', ')}) and uses (${V.USES.join(', ')}).`, inputSchema: { type: 'object', properties: { jurisdictions: strArr('Jurisdiction codes'), roles: strArr('Roles of the organisation'), uses: strArr('What the AI system does'), applicable_now_only: { type: 'boolean' } }, required: ['jurisdictions'] }, annotations: { readOnlyHint: true } },
  { name: 'upcoming_deadlines', description: 'Dates when AI-governance obligations start to apply or reports are due, within a window from a start date.', inputSchema: { type: 'object', properties: { days: { type: 'integer', minimum: 1, maximum: 3650 }, from: { type: 'string', description: 'YYYY-MM-DD, default today' }, jurisdictions: strArr('Optional filter') } }, annotations: { readOnlyHint: true } },
  { name: 'check_ai_governance_md', description: 'Run the 16 AI Governance Chain checks on the text of an AI_GOVERNANCE.md file and return results with a Markdown summary.', inputSchema: { type: 'object', properties: { text: { type: 'string', description: 'Full file content' } }, required: ['text'] }, annotations: { readOnlyHint: true } },
  { name: 'generate_ai_governance_md', description: 'Generate a starter AI_GOVERNANCE.md for a system profile, with in-scope obligations and controls set to todo. Returns the file text; it does not write files.', inputSchema: { type: 'object', properties: { name: { type: 'string' }, description: { type: 'string' }, owner: { type: 'string' }, jurisdictions: strArr('Jurisdiction codes'), roles: strArr('Roles'), uses: strArr('Uses') }, required: ['jurisdictions'] }, annotations: { readOnlyHint: true } },
];

function text(obj) { return { content: [{ type: 'text', text: typeof obj === 'string' ? obj : JSON.stringify(obj, null, 2) }] }; }

export async function callTool(name, a = {}) {
  const atlas = loadAtlas();
  const norm = arr => (arr || []).map(V.normalizeJurisdiction);
  switch (name) {
    case 'atlas_list_regimes':
      return text({ atlas_generated: atlas.generated, regimes: atlas.regimes.map(r => ({ id: r.id, jurisdiction: r.jurisdiction, name: r.name, title: r.card?.title, one_liner: r.card?.one_liner, as_of: r.as_of, review: r.review?.status, obligations: atlas.obligations.filter(o => o.regime === r.id).length })), note: DISCLAIMER });
    case 'atlas_get_regime': {
      const q = String(a.regime || '');
      const r = atlas.regimes.find(x => x.id === q.toLowerCase() || x.jurisdiction === V.normalizeJurisdiction(q));
      if (!r) return { isError: true, ...text(`Unknown regime "${q}". Call atlas_list_regimes.`) };
      return text({ ...r, obligations: atlas.obligations.filter(o => o.regime === r.id).map(slim), note: DISCLAIMER });
    }
    case 'atlas_search':
      return text({ results: search(atlas, a.query, Math.min(Number(a.limit) || 10, 50)).map(slim), note: DISCLAIMER });
    case 'atlas_get_obligation': {
      const o = atlas.obligations.find(x => x.id === a.id);
      if (!o) return { isError: true, ...text(`Unknown obligation id "${a.id}". Use atlas_search.`) };
      return text({ ...slim(o), note: DISCLAIMER });
    }
    case 'scope_check': {
      const p = { jurisdictions: norm(a.jurisdictions), roles: a.roles?.length ? a.roles : ['deployer'], uses: a.uses?.length ? a.uses : ['any-ai'] };
      const obs = scope(atlas, { ...p, includeFuture: !a.applicable_now_only });
      return text({ profile: p, count: obs.length, obligations: obs.map(slim), note: DISCLAIMER });
    }
    case 'upcoming_deadlines':
      return text({ deadlines: upcoming(atlas, { from: a.from || new Date().toISOString().slice(0, 10), days: Number(a.days) || 180, jurisdictions: norm(a.jurisdictions) }), note: DISCLAIMER });
    case 'check_ai_governance_md': {
      const res = runChecks({ text: a.text, atlas });
      return text({ summary: res.summary, results: res.results.map(({ id, link, title, status, message }) => ({ id, link, title, status, message })), markdown: toMarkdown(res) });
    }
    case 'generate_ai_governance_md':
      return text(generateGovernanceMd({ name: a.name, description: a.description, owner: a.owner, jurisdictions: a.jurisdictions?.length ? a.jurisdictions : ['EU'], roles: a.roles?.length ? a.roles : ['deployer'], uses: a.uses?.length ? a.uses : ['chatbot'], atlas }));
    default:
      return null;
  }
}

export async function handle(msg) {
  const { id, method, params } = msg;
  const ok = result => ({ jsonrpc: '2.0', id, result });
  const fail = (code, message) => ({ jsonrpc: '2.0', id, error: { code, message } });
  if (id === undefined || id === null) return null; // notification
  switch (method) {
    case 'initialize': {
      const asked = params?.protocolVersion;
      return ok({
        protocolVersion: SUPPORTED_PROTOCOLS.includes(asked) ? asked : '2025-06-18',
        capabilities: { tools: { listChanged: false }, resources: {}, prompts: {} },
        serverInfo: { name: 'aigovernancechain', title: 'AI Governance Chain', version: TOOL_VERSION },
        instructions: 'Open AI-governance obligations (law -> obligation -> control). Use scope_check first, then atlas_get_obligation for details. Always cite source_url and say the data is a draft and not legal advice.',
      });
    }
    case 'ping': return ok({});
    case 'tools/list': return ok({ tools: TOOLS });
    case 'tools/call': {
      try {
        const r = await callTool(params?.name, params?.arguments || {});
        if (!r) return fail(-32602, `Unknown tool: ${params?.name}`);
        return ok(r);
      } catch (e) { return ok({ isError: true, content: [{ type: 'text', text: `Error: ${e.message}` }] }); }
    }
    case 'resources/list': return ok({ resources: [] });
    case 'resources/templates/list': return ok({ resourceTemplates: [] });
    case 'prompts/list': return ok({ prompts: [] });
    default: return fail(-32601, `Method not found: ${method}`);
  }
}

export function startServer({ input = process.stdin, output = process.stdout } = {}) {
  const rl = readline.createInterface({ input, crlfDelay: Infinity });
  const send = obj => output.write(JSON.stringify(obj) + '\n');
  rl.on('line', async line => {
    if (!line.trim()) return;
    let msg;
    try { msg = JSON.parse(line); } catch { return send({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } }); }
    const batch = Array.isArray(msg) ? msg : [msg];
    for (const m of batch) { const r = await handle(m); if (r) send(r); }
  });
  process.stderr.write(`AI Governance Chain MCP server v${TOOL_VERSION} ready on stdio\n`);
}

if (import.meta.url === `file://${process.argv[1]}`) startServer();
