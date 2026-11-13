# Roadmap: v0.1 (4 Nov 2026) to v2 (18 Jan 2027)

The project brainstormed and scored 40 ideas (method: score on 7 criteria, rank, park the weakest). 37 are scheduled below. 3 are parked on purpose.

**How dates work.** Quality beats dates. A piece that is not ready on its date ships as `experimental` or moves to the next release, and the change is recorded in [CHANGELOG.md](CHANGELOG.md). Score = average of the 7 criteria (0 to 100).

## v0.1: shipped 4 Nov 2026

| # | Idea | Score | What shipped |
|---|---|---|---|
| I04 | Governance Agent Skills pack | 85.0 | 3 skills: `ai-law-check`, `ai-governance-md`, `agent-oversight` |
| I06 | AI_GOVERNANCE.md open standard + generator | 84.3 | Spec v0.1, JSON schema, `init`, 16 checks |
| I07 | Fact-based governance badge network | 80.0 | `aigovchain badge` (shields.io endpoint + SVG); wording rules |
| I12 | World AI-law deadline calendar | 79.3 | 300 events, ICS feed, per-regime feeds, DEADLINES.md |
| I05 | MCP server | 77.9 | 8 read-only tools over stdio |
| I23 | Agent Jail 30-second demo | 77.9 | `aigovchain jail` + GIF |
| I02 | 60-second regime cards | 77.9 | 17 cards in 12 Tier-1 groups |
| I08 | Shield Action (SARIF + PR summary) | 76.4 | Composite Action, job summary, SARIF, Evidence Pack artifact |
| I03 | Scope wizard / CLI | 76.4 | `aigovchain scope`, interactive `init` |
| I32 | Agent rails SDK | 75.0 | JS and Python, alpha: default deny, limits, approval, spend limit, kill switch, trust boundaries |
| I31 | AI Governance CTF arena | 74.3 | Levels 01 to 03 (20 planned) |
| I01 | Obligation Atlas | 72.1 | 17 regime files, 198 obligations, validator, compiled JSON |
| I14 | Evidence Pack | 70.0 | `aigovchain evidence` with hashes and CI metadata |
| I22 | GovBench | 70.0 | 549 questions, scorer |
| I19 | Public-sector edition | 68.6 | Obligations by jurisdiction, procurement clauses, transparency record |
| I18 | Translations | 69.3 | Quickstart in fr, de, it, es, pt-BR |
| I10 | Universal crosswalk | 63.6 | Draft: 32 controls to EU AI Act, NIST AI RMF, ISO/IEC 42001, OWASP Agentic |

## v0.2: shipped 9 Nov 2026 (early from v1)

| # | Idea | Score | What shipped |
|---|---|---|---|
| I09 | Agent oversight policy packs (OPA/Cedar) | 76.4 | `aigovchain policy --target rego\|cedar`; CI checks rails, OPA and Cedar give the same decision on 600 requests |
| I36 | AI-BOM generator (CycloneDX / SPDX 3.0 AI) | 72.9 | `aigovchain aibom`: CycloneDX 1.6 and SPDX 3.0.1 (AI and Dataset profiles) from `models:` and dependency files |
| I31 | CTF arena (continued) | 74.3 | Levels 04 to 10 live |
| I32 | Agent rails SDK (continued) | 75.0 | `run_as`, `read_only`, `allowed_tables`, circuit breaker and memory write sources in JavaScript and Python; manipulation guard and content marking in JavaScript |

## v0.3: shipped 13 Nov 2026 (early from v1)

| # | Idea | Score | What shipped |
|---|---|---|---|
| New | Drift check: the file versus the live agent config (`AGC-CHK-17`) | n/a | Check 17 in the CLI and in the Shield Action from `@v0.3.0`; open for review until v1 |
| I08 | Shield Action (continued) | 76.4 | Root `action.yml`, so the Action can be listed on GitHub Marketplace |
| I05 | MCP server (continued) | 77.9 | `server.json` and `mcpName` for the official MCP Registry |

## v1: 30 Nov 2026

| # | Idea | Score | Deliverable |
|---|---|---|---|
| I30 | Neutral foundation stewardship | 62.1 | Charter in force, GitHub organisation, Technical Steering Committee seats opened, foundation application filed. Trademark transfer decided only if accepted |
| I26 | Country maintainer and expert-reviewer network | 71.4 | First named reviewers seated; all 12 Tier-1 seats targeted by 31 Dec 2026 |
| I09 | Agent oversight policy packs (OPA/Cedar) | 76.4 | Shipped early in v0.2 (9 Nov 2026) |
| New | Drift check: the file versus the live agent config (`AGC-CHK-17`) | n/a | Raised in public feedback on 10 Nov 2026. Drafted the same day; shipped early in v0.3 (13 Nov 2026), open for review until v1 |
| I20 | SME 1-day starter | 76.4 | A one-day path for small teams: scope, file, Action, evidence |
| I15 | Awesome AI Governance curated list | 76.4 | Curated, cited list with inclusion rules and no paid placements |
| I21 | 30-day Governance Speedrun | 75.7 | Daily tasks with issue templates; opt-in, no rewards for stars |
| I11 | Law Diff changelog + weekly releases | 75.0 | Weekly tagged Atlas releases with a human-readable diff |
| I16 | World map SVG + shareable social cards | 75.0 | Generated map and per-regime cards for posts |
| I37 | Signed governance attestations (Sigstore) | 72.1 | Evidence Pack attestation recipe and verification command |
| I36 | AI-BOM generator (CycloneDX / SPDX 3.0 AI) | 72.9 | Shipped early in v0.2 (9 Nov 2026) |
| I31 | CTF arena (continued) | 74.3 | Levels 04 to 10 shipped early in v0.2 (9 Nov 2026) |
| I22 | GovBench (continued) | 70.0 | Public leaderboard with method and limits |
| I01 | Atlas (continued) | 72.1 | First Tier-2 regimes (for example Canada, Brazil, Australia, UAE) |

## v2: 18 Jan 2027

| # | Idea | Score | Deliverable |
|---|---|---|---|
| I35 | Governance telemetry on OpenTelemetry | 74.3 | Rails decisions as OTel events with semantic conventions |
| I33 | Red-team runner mapped to obligations | 71.4 | Runs OWASP Agentic scenarios and links failures to obligations |
| I13 | Multilingual template library | 70.7 | Notices, FRIA/DPIA skeletons, policies in 5 languages |
| I34 | Fairness and provenance checks | 70.0 | Wrappers for Fairlearn/AIF360 and C2PA checks, results into the Evidence Pack |
| I25 | University / Edu edition | 69.3 | Course pack built on the CTF and the Atlas |
| I27 | Lawbot (Dependabot for AI law) | 67.1 | The Action opens an issue in your own repo when an Atlas change affects your file (opt-in) |
| I38 | Free skills badge (Open Badges 3.0) | 67.1 | Badge for CTF completion. Never for stars or shares |
| I17 | Gazette agent drafting PRs | 65.0 | Agent watches official journals and drafts Atlas PRs in this repo; humans review every change |
| I24 | Incident and enforcement tracker | 64.3 | Cited enforcement actions linked to obligations |
| I39 | Opt-in Governance-Ready PRs | 63.6 | Help for maintainers who ask for it. No unsolicited PRs |
| I07 | Badges (continued) | 80.0 | Signed badges backed by attestations |
| I14 | Evidence Pack (continued) | 70.0 | Draft Annex IV and NIST AI RMF exporters |
| I10 | Crosswalk (continued) | 63.6 | Expert-reviewed mappings |
| I31 | CTF arena (completed) | 74.3 | Levels 11 to 20 |
| I18 | Translations (continued) | 69.3 | 15 languages |

## Parked, with reasons

| # | Idea | Score | Why parked |
|---|---|---|---|
| I28 | Agent-to-agent compliance handshake | 57.1 | Premature: no demand signal yet and high build effort |
| I29 | Regulatory pressure index | 59.3 | Easy to criticise as arbitrary; reputational risk for a trust-based project |
| I40 | Multi-language SDK parity + single-binary CLI | 60.7 | Multiplies cost before value is proven. JS and Python cover v0 to v2 |

## Running alongside, 4 Nov to 31 Dec 2026

- **40 discovery interviews**, including 10 agent builders, logged in a public issue. Guide: [DISCOVERY.md](DISCOVERY.md). Findings can reorder v1 and v2.
- **12 named reviewers**, one per Tier-1 regime. See [REVIEWERS.md](REVIEWERS.md).

## Growth rules

No paid stars, no star-for-reward schemes, no bots, no unsolicited pull requests to other projects, no gaming of trending lists. Growth comes from being useful and easy to share.
