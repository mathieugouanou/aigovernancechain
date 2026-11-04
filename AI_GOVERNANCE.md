---
spec: ai-governance/v0.1
system:
  name: "AI Governance Chain (this repository)"
  description: "Open dataset and deterministic tools for AI governance. The tools contain no AI model; the content was drafted with AI assistance."
  owner: "Mathieu K. Gouanou (@mathieugouanou), interim project lead"
  repository: "https://github.com/mathieugouanou/aigovernancechain"
  version: "0.1.0"
roles: [provider]
jurisdictions: [CH, EU]
uses: [any-ai]
risk:
  self_assessed: minimal
  rationale: "The CLI, MCP server, Action and rails are rule-based and make no automated decisions about people. AI is used only as a drafting aid for documentation and data, with human review."
models: []
controls:
  prohibited_practices_screen: { status: implemented, how: "Scope reviewed against EU AI Act Art. 5: no manipulation, scoring, biometrics or decisions about people" }
  ai_literacy: { status: implemented, how: "The maintainer works in AI governance; contributors get the rules in CONTRIBUTING.md (AI-assisted contributions section)" }
  ai_disclosure: { status: implemented, how: "AI-assisted drafting disclosed in README, this file and CONTRIBUTING.md", message: "Parts of this project were drafted with AI assistance and checked by a human against primary sources." }
  human_oversight: { status: implemented, how: "Every change is a reviewed pull request; Atlas changes need a cited source" }
  audit_log: { status: implemented, how: "Git history and pull-request reviews" }
  security_testing: { status: partial, how: "Unit tests cover rails bypass cases; external review welcome via SECURITY.md", due: "2026-11-30" }
  accuracy_robustness: { status: partial, how: "Validator, build drift check and link check in CI; expert review pending (REVIEWERS.md)", due: "2026-12-31" }
  transparency_notice: { status: implemented, evidence: "DISCLAIMER.md" }
  risk_management: { status: partial, how: "Risks tracked in SECURITY.md, DISCLAIMER.md and review rules; formal register planned", due: "2026-11-30" }
  incident_reporting: { status: implemented, how: "Private vulnerability reporting (SECURITY.md); corrections tracked in public issues" }
  privacy_compliance: { status: not-applicable, reason: "The tools process no personal data. Contributor data is handled by GitHub under its own terms." }
  impact_assessment: { status: not-applicable, reason: "No high-risk processing of personal data and no decisions about people." }
  user_controls: { status: not-applicable, reason: "No automated processing of end users' data." }
  contest_and_appeal: { status: not-applicable, reason: "The project makes no decisions about people. Content disputes go to public issues." }
obligations:
  acknowledged: [AGC-EU-AIA-4, AGC-EU-AIA-5]
  waived: []
x-ai-assistance:
  used_for: ["drafting documentation", "summarising primary legal sources", "drafting code and tests"]
  human_review: "Every obligation links a primary source; regime files stay draft-unreviewed until a named reviewer signs off."
contacts:
  governance: "https://github.com/mathieugouanou/aigovernancechain/issues"
  security: "https://github.com/mathieugouanou/aigovernancechain/security/advisories/new"
review:
  last_reviewed: "2026-11-04"
  next_review: "2027-01-18"
  reviewed_by: ["Mathieu K. Gouanou"]
disclaimer: Self-declared. Not a conformity assessment or legal advice.
---

# AI governance: AI Governance Chain

We ask projects to publish an `AI_GOVERNANCE.md`, so here is ours.

## What the project does
It publishes open, cited AI-governance obligations and tools that check an `AI_GOVERNANCE.md` file. None of the tools calls an AI model or sends data anywhere.

## How AI was used
Large language models helped draft documentation, summarise primary legal sources and write code and tests. A human checked the output, every obligation links to its primary source, and every regime file stays `draft-unreviewed` until a named expert signs it off. Treat the data as a starting point, not as legal advice.

## Human oversight
All changes go through reviewed pull requests. The project lead can revert any change and the Technical Steering Committee (from 30 Nov 2026) can overrule the project lead under the [charter](CHARTER.md).

## How to report a problem
Factual errors: [open a correction](https://github.com/mathieugouanou/aigovernancechain/issues/new?template=obligation-correction.yml). Security: [report privately](https://github.com/mathieugouanou/aigovernancechain/security/advisories/new).
