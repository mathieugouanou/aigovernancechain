# Changelog

All notable changes. Atlas changes list the obligation ids affected. Dates are in ISO format.

## [0.1.0] - 2026-11-04

First public release under the new open-source scope. The previous content of this repository (instrument library, storefront, PDFs) moved to [aigovernancechain-library](https://github.com/mathieugouanou/aigovernancechain-library).

### Added
- Obligation Atlas: 17 regime files, 198 obligations, as of 2026-11-04, all `draft-unreviewed`. EU AI Act as amended by Regulation (EU) 2026/1744 (Digital Omnibus on AI).
- Regime cards (12 Tier-1 groups), deadline calendar (300 events, ICS feeds), compiled `atlas.json`.
- AI_GOVERNANCE.md specification v0.1 (`ai-governance/v0.1`), JSON schema, 3 examples.
- `aigovchain` CLI: scope, deadlines, atlas, init, check (text, Markdown, JSON, SARIF), badge, evidence, ctf, jail, bench, mcp.
- MCP server with 8 read-only tools.
- Shield GitHub Action (composite).
- Agent rails for JavaScript and Python (alpha).
- Agent Skills: ai-law-check, ai-governance-md, agent-oversight.
- Crosswalks: 32 controls to EU AI Act, NIST AI RMF 1.0, ISO/IEC 42001 Annex A, OWASP Agentic Top 10 2026 (draft).
- GovBench: 549 questions.
- AI Governance CTF levels 01 to 03; Agent Jail demo.
- Public-sector edition; quickstart translations (fr, de, it, es, pt-BR).
- Charter, governance, licences (Apache-2.0 for code, CC BY 4.0 for data and docs), disclaimer, trademark policy.

### Known uncertainties (flagged in the data)
- New York Article 48 companion-chatbot rules: effective date contested (1 Jan vs 1 Jun 2027), confidence medium.
- Colorado: SB 24-205 transition and SB 26-189 (effective 1 Jan 2027); enforcement subject to pending litigation.
- Council of Europe Framework Convention: not yet in force (2 ratifications as of 2026-11-04).
- South Korea AI Basic Act: fines grace period of at least one year from 22 Jan 2026; end date not announced.
