---
spec: ai-governance/v0.1
system:
  name: "AI Governance Chain (this repository)"
  description: "Open dataset and deterministic tools for AI governance. The tools contain no AI model. The content was drafted with AI assistance, and an AI agent helps the project lead maintain the repository."
  owner: "Mathieu K. Gouanou (@mathieugouanou), interim project lead"
  repository: "https://github.com/mathieugouanou/aigovernancechain"
  version: "0.3.0"
roles: [provider]
jurisdictions: [CH, EU]
uses: [any-ai, agent]
risk:
  self_assessed: minimal
  rationale: "The CLI, MCP server, Action and rails are rule-based and make no automated decisions about people. AI drafts documentation, data and code, and an AI agent prepares and commits changes after the project lead's go-ahead. Neither makes decisions about people."
models: []
controls:
  prohibited_practices_screen: { status: implemented, how: "Scope reviewed against EU AI Act Art. 5: no manipulation, scoring, biometrics or decisions about people" }
  ai_literacy: { status: partial, how: "Roles that use or oversee AI here: the project lead (who also supervises the AI agent) and contributors. Contributors get the rules in CONTRIBUTING.md (AI-assisted contributions section). No dated training record by role yet.", due: "2026-12-31" }
  ai_disclosure: { status: implemented, how: "AI-assisted drafting disclosed in README, this file and CONTRIBUTING.md", message: "Parts of this project were drafted with AI assistance and checked by a human against primary sources." }
  human_oversight: { status: partial, how: "The project lead decides every change and can revert any of them; the AI agent commits only after his go-ahead. No change had a second reviewer: before this correction on 10 Nov 2026 the history held 168 commits across this repository and the library, 1 pull request and 0 reviews. From 20 Nov 2026 every change arrives by pull request. Atlas changes need a cited source.", due: "2027-01-18" }
  audit_log: { status: implemented, how: "Public, dated git history of every change, and CHANGELOG.md" }
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
agent:
  default_deny: true
  tools:
    - { name: read_repositories_and_web, scope: read }
    - { name: edit_and_commit_files, scope: write, approval: human }
    - { name: open_or_merge_pull_request, scope: write, approval: human }
    - { name: create_tag_or_release, scope: admin, approval: human }
    - { name: delete_files_or_branches, scope: delete, approval: human }
    - { name: publish_or_send_outside_github, scope: send, approval: human }
  spend_limit: { amount: 0, currency: CHF, period: day }
  kill_switch: "The project lead ends the agent session and signs out of GitHub in that browser; effective at once"
  trust_boundaries:
    - { source: web, treat_as: data }
    - { source: email, treat_as: data }
    - { source: issues, treat_as: data }
x-agent-identity:
  what: "An AI browser agent from a commercial vendor, supervised by the project lead"
  runs_as: "The project lead's own GitHub session. A separate, narrower identity is planned."
  memory: "Keeps the project lead's standing rules and working notes in its own workspace. No passwords or keys."
  declared: "2026-11-10"
x-ai-assistance:
  used_for: ["drafting documentation", "summarising primary legal sources", "drafting code and tests", "preparing and committing changes after the project lead's go-ahead (see agent)"]
  human_review: "Every obligation links a primary source; regime files stay draft-unreviewed until a named reviewer signs off."
contacts:
  governance: "https://github.com/mathieugouanou/aigovernancechain/issues"
  security: "https://github.com/mathieugouanou/aigovernancechain/security/advisories/new"
review:
  last_reviewed: "2026-11-04"
  next_review: "2026-11-20"
  reviewed_by: ["Mathieu K. Gouanou"]
disclaimer: Self-declared. Not a conformity assessment or legal advice.
---

# AI governance: AI Governance Chain

We ask projects to publish an `AI_GOVERNANCE.md`, so here is ours.

## What the project does
It publishes open, cited AI-governance obligations and tools that check an `AI_GOVERNANCE.md` file. None of the tools calls an AI model or sends data anywhere.

## How AI was used
Large language models helped draft documentation, summarise primary legal sources and write code and tests. A human checked the output, every obligation links to its primary source, and every regime file stays `draft-unreviewed` until a named expert signs it off. Treat the data as a starting point, not as legal advice.

## The AI agent we use
An AI browser agent helps the project lead. It researches, drafts files, commits changes, opens and merges pull requests and creates releases, always in the project lead's logged-in GitHub session and only after his go-ahead. The `agent` block above lists those actions and the rules he applies. Three limits of this declaration:

- `approval: human` means the project lead's written go-ahead for a change set, sometimes given once for a named piece of work. It is not a click-by-click confirmation.
- The AI Governance Chain rails do not run inside the agent product. These rules are kept by the project lead's process and the product's own safeguards, not enforced by this repository's code.
- The agent acts as the project lead on GitHub. It has no identity of its own yet.

This file was redrafted by the AI agent on 10 Nov 2026 and published on the project lead's go-ahead. His line-by-line review is due by 20 Nov 2026.

## Human oversight
The project lead decides every change and can revert any of them. No change had a second reviewer: before this correction on 10 Nov 2026 the history held 168 commits across this repository and the [library](https://github.com/mathieugouanou/aigovernancechain-library), 1 pull request and 0 reviews. This file said "Every change is a reviewed pull request" from 4 to 10 Nov 2026. That was wrong, and we corrected it ([CHANGELOG](CHANGELOG.md)). From 20 Nov 2026 every change arrives by pull request; reviews by named experts start as they join ([REVIEWERS.md](REVIEWERS.md)). The Technical Steering Committee (from 30 Nov 2026) can overrule the project lead under the [charter](CHARTER.md).

## How to report a problem
Factual errors: [open a correction](https://github.com/mathieugouanou/aigovernancechain/issues/new?template=obligation-correction.yml). Security: [report privately](https://github.com/mathieugouanou/aigovernancechain/security/advisories/new).
