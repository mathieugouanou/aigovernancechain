---
spec: ai-governance/v0.1
system:
  name: "CV screening assistant"
  description: "Ranks job applications for recruiters, who make every decision."
  owner: "head-of-talent@example.com"
roles: [deployer, employer]
jurisdictions: [EU, US-NY-NYC, US-IL]
uses: [hiring, significant-decision, profiling]
risk:
  self_assessed: high
  rationale: "Annex III point 4(a) EU AI Act (recruitment); AEDT under NYC Local Law 144."
models:
  - { name: "screening-model-2", provider: "Example HR Tech Ltd." }
controls:
  prohibited_practices_screen: { status: implemented, evidence: "governance/art5-screening.md" }
  ai_literacy: { status: implemented, how: "Recruiter training on automation bias, refreshed yearly" }
  bias_testing: { status: implemented, evidence: "governance/bias-audit-2026.pdf" }
  transparency_notice: { status: implemented, evidence: "https://example.com/careers/ai-notice" }
  human_oversight: { status: implemented, how: "Recruiters review every ranked list; no automatic rejection" }
  contest_and_appeal: { status: implemented, how: "Candidates can request human review via careers@example.com" }
  privacy_compliance: { status: implemented, evidence: "governance/dpia-cv-screening.pdf" }
  impact_assessment: { status: implemented, evidence: "governance/dpia-cv-screening.pdf" }
  audit_log: { status: implemented, how: "Ranking inputs and outputs logged 4 years" }
  user_controls: { status: implemented, how: "Alternative selection process offered on request" }
  registration: { status: planned, owner: "Head of Talent", due: "2027-11-30" }
  risk_management: { status: partial, how: "Vendor risk review done; deployer monitoring plan in progress", due: "2027-06-30" }
  data_governance: { status: partial, how: "Vendor data sheet reviewed; our job-criteria data checked for proxies", due: "2027-03-31" }
  technical_documentation: { status: implemented, evidence: "governance/vendor-instructions-for-use.pdf" }
  security_testing: { status: partial, how: "Vendor penetration test report reviewed; prompt-injection tests on CV parsing planned", due: "2027-03-31" }
  accuracy_robustness: { status: implemented, evidence: "governance/validation-report-2026.pdf" }
contacts:
  governance: "head-of-talent@example.com"
  dpo: "dpo@example.com"
review:
  last_reviewed: "2026-11-04"
  next_review: "2027-02-04"
  reviewed_by: ["Head of Talent", "DPO", "Works council representative"]
---

# AI governance: CV screening assistant

## What the system does
Ranks applications against job criteria. Recruiters see the ranking with reasons and decide. The system never rejects a candidate on its own.

## Human oversight
Recruiters are trained to question the ranking. Monthly sampling compares rankings with recruiter decisions.

## How to report a problem
Candidates: careers@example.com. Data protection: dpo@example.com.
