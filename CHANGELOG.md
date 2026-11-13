# Changelog

All notable changes. Atlas changes list the obligation ids affected. Dates are in ISO format.

## [Unreleased]

### Fixed
- Our own `AI_GOVERNANCE.md` made a claim the history did not support: "Every change is a reviewed pull request" (`human_oversight: implemented`, 4 to 10 Nov 2026). Before this correction on 10 Nov 2026 the history held 168 commits across this repository and the library, 1 pull request and 0 reviews. `human_oversight` is now `partial` (due 18 Jan 2027), `ai_literacy` is `partial` (no dated training record by role yet, due 31 Dec 2026), and `audit_log` no longer cites reviews. Found by our own gap analysis of 6 Nov 2026 (gaps G-K1 and G-H3).
- `GOVERNANCE.md` now says what happens today next to the review rule: one maintainer, no second reviewer yet, pull requests for every change from 20 Nov 2026.

### Added
- Check 17, `AGC-CHK-17` "Live agent config stays within the file" ([`lib/drift.mjs`](lib/drift.mjs), [spec section 5.1](spec/AI_GOVERNANCE-spec.md#51-check-17-the-file-versus-the-live-config)). Checks 01 to 16 read only what the file declares; check 17 compares the `agent` section with the config committed next to it: MCP client files for Claude Code, VS Code, Cursor, Gemini CLI and Roo Code, and the token permissions of the workflows listed in the new optional field `agent.ci` (`workflows`, `max_permissions`). It fails when a tool is exposed or auto-approved without being declared, when a tool the file says needs human approval is auto-approved, or when a workflow job grants wider permissions than declared. It warns on servers without a tool allowlist, wildcard approvals and jobs with no `permissions`. Skipped for files that declare no agent and when there is nothing to compare, so those files keep their badge counts. New `check` options `--root` and `--no-live`. 13 tests. Raised in public feedback on 10 Nov 2026; open for review until v1.
- Our own `AI_GOVERNANCE.md` now declares the AI agent that helps maintain the repository: an `agent` block (default deny, 6 declared actions with human approval for every one that changes or publishes anything, a CHF 0 spend limit, a kill switch, web, email and issues treated as data) and `x-agent-identity`. The file states the limits plainly: the agent runs in the project lead's GitHub session, and the rails do not run inside it. `uses` now includes `agent`, so checks 10 to 13 apply; 16 of 16 pass (gap G-A5).
- [Ask your team](leaders/README.md): five questions for leaders who do not write code (can we stop our agents, who owns the stop, which rules hit us and by when, what do we tell the board, what do we ask vendors), each answered by a file or a command.
- Listing files, not yet published: a root `action.yml` so the Shield can be listed on GitHub Marketplace (`action/action.yml` keeps working; a new test keeps the two in sync), `server.json` plus `mcpName` in `package.json` for the official MCP Registry (needs the npm package first), and `glama.json`.
- `.github/dependabot.yml` (weekly updates of the GitHub Actions used here) and an OpenSSF Scorecard workflow on `main`, with actions pinned to full commit SHAs.

### Changed
- README first screen: one working command, the Agent Jail result and three doors (Developers, Leaders, Public bodies). "What is in v0.1" is now "What is in the repository", and the audience line reads "Risk, legal and audit teams".
- Keywords in `package.json` and `CITATION.cff`: "policy as code" replaces a claim word the project does not use.

## [0.2.0] - 2026-11-09

Ships three v1 items early, before the Season 3 episodes that show them.

### Added
- `aigovchain policy --target rego|cedar [--file] [--out]`: compiles the agent section of `AI_GOVERNANCE.md` to an Open Policy Agent (OPA) Rego policy, or to a Cedar policy set with its schema ([`lib/policy.mjs`](lib/policy.mjs)). New CI job `policy-engines` runs [`scripts/policy-equivalence.mjs`](scripts/policy-equivalence.mjs): the runtime rails, OPA and Cedar must give the same allow or block decision on 600 generated requests.
- `aigovchain aibom [--format cyclonedx|spdx] [--file] [--out] [--no-deps]`: AI bill of materials from `models[]` plus `package.json`, `package-lock.json` and `requirements.txt`, as CycloneDX 1.6 JSON or SPDX 3.0.1 JSON-LD with the AI and Dataset profiles ([`lib/aibom.mjs`](lib/aibom.mjs)). Lists declared components only.
- AI Governance CTF levels 04 to 10: Borrowed badge, SQL free-for-all, Sticky memory, Loan desk, Deepfake desk, Dark-pattern bot, Runaway loop. Each ships with a vulnerable starter file and a tested fix.
- Agent rules (optional fields, spec id unchanged): `tools[].run_as`, `limits.read_only`, `limits.allowed_tables`, `agent.circuit_breaker`, `agent.memory`, `agent.manipulation_guard`; `models[].license`, `models[].task`, `models[].datasets`; `content_marking.methods` and `label`. JSON schema and [spec section 3](spec/AI_GOVERNANCE-spec.md#3-agent-section-runtime-rails) updated, with the full evaluation order.
- Rails (JavaScript and Python): least-privilege identities, read-only SQL and table allowlists, circuit breaker, memory write sources (`remember()`). JavaScript only for now: `screen()` for manipulative messages and `mark()` for generated content.
- Tests for the policy compiler, the AI-BOM, the new rails rules and levels 04 to 10.
- Privacy notice at https://aigovernancechain.com/privacy/ covering the professional networking list built from public sources, the LinkedIn newsletter and website hosting (Swiss FADP and EU GDPR), with a separate right-to-object box. Linked from the homepage footer and listed in `sitemap.xml`.

### Fixed
- Atlas: URLs inside inline YAML maps are now quoted in 6 regime files (cn, kr, us-ca, us-il, us-ny-nyc, us-ny), so YAML 1.1 parsers such as Python's PyYAML can load every regime file. Parsed values are unchanged; `atlas.json`, the calendars and the cards are unaffected.
- Website footer: the Harvard Business Review Advisory Council line now uses the wording HBR's membership terms allow; the trademark line links to TRADEMARK.md and says "licence"; the third-party note on episode pages matches what they load once a video is live.
- Atlas: `AGC-CH-DPO-46-1` (Swiss Data Protection Ordinance Art. 46(1), logging assessment by 31 December 2026) now applies to federal bodies and their processors only (role `public-body`). Art. 46(1) refers to the Art. 4(2) assessment, which binds federal bodies; private controllers fall under Art. 4(1). It was tagged for every role, so `scope` and `check` showed it, with a 180-day warning, to private deployers. The two calendar events now start with "Federal bodies" (their calendar UIDs change).
- Citations no longer repeat the instrument name (for example "FTC Act §5(a)" instead of "FTC Act section 5 FTC Act §5(a)") in the CLI, calendar, cards, generated AI_GOVERNANCE.md tables, MCP results and the website. Compiled obligations now carry a `cite` field.

### Changed
- Watch pages label premiere times as Geneva time (CET). The times themselves are unchanged.
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
