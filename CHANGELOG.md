# Changelog

All notable changes. Atlas changes list the obligation ids affected. Dates are in ISO format.

## [Unreleased]

### Added
- Privacy notice at https://aigovernancechain.com/privacy/ covering the professional networking list built from public sources, the LinkedIn newsletter and website hosting (Swiss FADP and EU GDPR), with a separate right-to-object box. Linked from the homepage footer and listed in `sitemap.xml`.

### Fixed
- Atlas: URLs inside inline YAML maps are now quoted in 6 regime files (cn, kr, us-ca, us-il, us-ny-nyc, us-ny), so YAML 1.1 parsers such as Python's PyYAML can load every regime file. Parsed values are unchanged; `atlas.json`, the calendars and the cards are unaffected.
- Website footer: the Harvard Business Review Advisory Council line now uses the wording HBR's membership terms allow; the trademark line links to TRADEMARK.md and says "licence"; the third-party note on episode pages matches what they load once a video is live.
- Atlas: `AGC-CH-DPO-46-1` (Swiss Data Protection Ordinance Art. 46(1), logging assessment by 31 December 2026) now applies to federal bodies and their processors only (role `public-body`). Art. 46(1) refers to the Art. 4(2) assessment, which binds federal bodies; private controllers fall under Art. 4(1). It was tagged for every role, so `scope` and `check` showed it, with a 180-day warning, to private deployers. The two calendar events now start with "Federal bodies" (their calendar UIDs change).
- Citations no longer repeat the instrument name (for example "FTC Act §5(a)" instead of "FTC Act section 5 FTC Act §5(a)") in the CLI, calendar, cards, generated AI_GOVERNANCE.md tables, MCP results and the website. Compiled obligations now carry a `cite` field.

### Changed
- README links the scope finder at aigovernancechain.com.
- TRADEMARK.md explains how to ask for a written licence to use the name or logo, matching the website footer.

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
