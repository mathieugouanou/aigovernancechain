# Technical Charter (draft, effective 4 Nov 2026)

This charter sets out how AI Governance Chain (the "Project") is run so that no single person or company controls the shared data, the AI_GOVERNANCE.md specification or the tools. It is written to be compatible with hosting by a neutral open-source foundation.

## 1. Mission and scope

Turn AI-governance law into open, cited, machine-readable obligations, and into tools that let people, AI agents and CI act on them: LAW, OBLIGATION, CONTROL, GATE, EVIDENCE, OVERSIGHT. In scope: the Obligation Atlas, the AI_GOVERNANCE.md specification, the CLI, MCP server, GitHub Action, agent rails, skills, crosswalks, GovBench, the CTF and editions built on them.

## 2. Technical Steering Committee (TSC)

- Until v1 (30 Nov 2026) the founder, Mathieu K. Gouanou, acts as interim project lead.
- From v1 the TSC has 3 to 7 voting members: maintainers and named regime reviewers who have made sustained contributions. Seats are filled by nomination in a public issue and a TSC vote.
- No single employer or affiliated group may hold more than one third of TSC seats.
- The TSC decides by lazy consensus in public issues or pull requests (at least 72 hours). If consensus fails, a simple majority of TSC members decides. Changes to this charter need two thirds.
- The TSC sets the roadmap, approves releases, appoints maintainers and reviewers, and handles appeals under the Code of Conduct.

## 3. Roles

| Role | Can | Becomes one by |
|---|---|---|
| Contributor | Open issues and pull requests | Contributing |
| Maintainer | Merge pull requests in an area | TSC appointment after sustained contributions |
| Regime reviewer | Sign off a regime file (`review.status: expert-reviewed`) | TSC appointment; named publicly in [REVIEWERS.md](REVIEWERS.md) |
| TSC member | Vote on project decisions | Section 2 |

## 4. Contributions

- Every commit carries a Developer Certificate of Origin sign-off (`git commit -s`). No contributor licence agreement.
- Inbound = outbound: code under Apache-2.0, data, documentation and the specification under CC BY 4.0.
- Facts in the Atlas need a primary source wherever possible. Reviewers check sources, not opinions.

## 5. Neutrality and conflicts of interest

- No paid placement, paid ranking or paid review of any vendor, product or law firm, in any file.
- The founder's commercial AI-governance offerings are disclosed in the README and may not be promoted elsewhere in the repository. The former instrument library lives in a separate repository under its own licence.
- TSC members, maintainers and reviewers declare relevant conflicts (employer, clients, products) in [REVIEWERS.md](REVIEWERS.md) or their TSC nomination and abstain where a decision affects them directly.
- Vendors, regulators, law firms and public bodies are welcome to contribute under the same rules as everyone else.

## 6. Trademark, domain and accounts

- The name "AI Governance Chain" and the domain aigovernancechain.com are currently held by Mathieu K. Gouanou and used for the Project under [TRADEMARK.md](TRADEMARK.md).
- The file name `AI_GOVERNANCE.md` and the specification are free for anyone to use and implement.
- If a neutral foundation accepts the Project, the founder will decide on transferring the name, domain and GitHub organisation to it, as foundations usually require. Until then the founder commits not to use the name to restrict use of the open data, specification or tools.

## 7. Foundation path

- By 30 Nov 2026: this charter in force with an elected TSC process, a dedicated GitHub organisation, and an application to a neutral foundation (candidates include LF Projects / LF AI & Data and the Agentic AI Foundation).
- Acceptance and timing depend on the foundation's own process and requirements (for example an OSI-approved licence, neutral ownership of marks and accounts, and supporting member organisations).

## 8. Amendments

The TSC may amend this charter by a two-thirds vote after a public comment period of at least 14 days.
