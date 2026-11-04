---
spec: ai-governance/v0.1
system:
  name: Rivermere Benefits Navigator and Triage Assistant
  description: "Fictional public-facing benefits chatbot and staff triage aid. It answers service questions and suggests document checks and a casework queue; it cannot decide eligibility or award, refuse, reduce, or recover a benefit."
  owner: Rivermere Municipality Benefits Service (fictional)
  repository: https://example.invalid/rivermere/benefits-navigator
roles:
  - deployer
  - public-body
jurisdictions:
  - EU
  - CH
uses:
  - chatbot
  - essential-services
  - public-sector-use
risk:
  self_assessed: high
  rationale: "Provisional self-assessment. The system supports a process involving essential public assistance benefits and could influence case handling. Screen against EU AI Act Annex III point 5(a) and applicable Swiss, federal, cantonal and local rules before any operational deployment. Pilot status does not itself determine legal classification."
models:
  - name: QueueAssist 2.3 (fictional)
    provider: Rivermere Digital Works Ltd. (fictional)
controls:
  ai_disclosure:
    status: implemented
    evidence: "The chatbot identifies itself as automated before the conversation begins."
  human_oversight:
    status: implemented
    evidence: "A trained benefits officer reviews every queue suggestion against the source application and can override or disregard it. No benefit decision is made by the system."
  kill_switch:
    status: implemented
    evidence: "The fictional pilot can be suspended by the Benefits Operations Manager; manual application processing remains available."
  audit_log:
    status: partial
    evidence: "Pilot access and output events are logged. Retention, export and review procedures remain to be approved before production."
  risk_management:
    status: partial
    evidence: "A pilot risk log exists. The full production risk-management process and residual-risk approval are not complete."
  impact_assessment:
    status: planned
    how: "Complete and approve a DPIA and any required EU AI Act fundamental-rights impact assessment before production; assess applicable Swiss and cantonal requirements separately."
  bias_testing:
    status: planned
    how: "Before production, test false urgency and missed urgent cases across relevant groups and languages where lawful and statistically meaningful."
  data_governance:
    status: partial
    evidence: "Pilot data categories and supplier training restrictions are documented; final provenance, retention and deletion schedules are pending."
  technical_documentation:
    status: partial
    evidence: "Pilot workflow and model version are recorded; production documentation and provider evidence are not yet accepted."
  incident_reporting:
    status: partial
    evidence: "Pilot staff have an escalation route. Supplier notice deadlines and external reporting procedures require final approval."
  transparency_notice:
    status: implemented
    evidence: "The fictional public record and chatbot notice describe the system's limited role and link to a human contact route."
  contest_and_appeal:
    status: implemented
    evidence: "Applicants can use existing human review and appeal channels. The chatbot does not determine or communicate a benefit decision."
  ai_literacy:
    status: partial
    evidence: "Pilot operators received an initial briefing; role-based training and competency records are required before production."
  prohibited_practices_screen:
    status: implemented
    evidence: "The pilot assessment screens prohibited practices and bars social scoring, biometric identification and unrelated reuse. Re-screen after a material change."
  registration:
    status: planned
    how: "Confirm whether public-deployer and provider database registration applies and complete it before the relevant EU AI Act deadline. Check any separate Swiss or local register."
  privacy_compliance:
    status: partial
    evidence: "The pilot minimises inputs and restricts access. Legal basis, notices, DPIA approval, retention and applicable Swiss federal/cantonal rules remain under review."
  security_testing:
    status: partial
    evidence: "The pilot uses staff accounts and an approved environment. Independent security testing and prompt-injection testing are required before production."
  post_market_monitoring:
    status: planned
    how: "Set production monitoring, complaint review, drift thresholds and an annual review before go-live."
  accuracy_robustness:
    status: partial
    evidence: "Initial shadow-mode comparison is underway. Acceptance thresholds and independent validation have not been approved."
  user_controls:
    status: implemented
    how: "Residents can skip the chatbot and use the phone line, counter or web form at any time."
x-scoping-notes:
    - "EU AI Act: assess Annex III point 5(a) classification; if applicable, prepare deployer safeguards, human oversight, impact assessment, registration, transparency and explanation duties under Arts. 26, 27, 49 and 86, with the amended application dates and transition rules verified before deployment."
    - "Swiss FADP: assess lawful processing, transparency and any Art. 21 duties for solely automated individual decisions; the designed workflow requires human review and is not intended to make solely automated benefit decisions."
    - "Applicable national, cantonal and municipal privacy, equality, administrative-procedure, accessibility, procurement, records and sector rules must be identified separately for each deployment."
obligations:
  acknowledged: [AGC-EU-AIA-4, AGC-EU-AIA-5, AGC-EU-AIA-50-1]
  waived: []
contacts:
  governance: "AI Governance Lead, ai-governance@rivermere.example (fictional)"
  security: "Municipal Security Lead, security@rivermere.example (fictional)"
review:
  last_reviewed: "2026-11-04"
  next_review: "2027-05-04"
  reviewed_by:
    - "Fictional Benefits Service AI Governance Lead"
disclaimer: "Self-declared. Not a conformity assessment or legal advice."
---

# Rivermere Benefits Navigator and Triage Assistant

> **FICTIONAL EXAMPLE.** Rivermere Municipality, its staff, supplier, system and contacts are invented. This document illustrates a governance record and does not claim that the system exists or complies with law.

## Purpose and boundaries

The fictional municipality offers a conversational assistant that answers routine questions using approved service information. For staff, it also suggests whether an application file may be missing documents and proposes a casework queue. It does not determine eligibility, calculate or change benefits, make fraud findings, or grant, refuse, reduce or recover a payment.

The provisional self-assessment is **high risk** because the tool supports an essential public assistance service and may influence how applications are handled. A legal reviewer must confirm the classification and the relevant national law in each EU or Swiss deployment. No production deployment is approved by this example.

## Deployment and oversight

The fictional tool is in a restricted shadow-mode pilot. Its suggestions do not change application order or affect an applicant's outcome. A trained officer checks the source file and makes every operational choice. Officers can override a suggestion, report a problem, or suspend the tool. The ordinary human service and appeal channels remain available.

Before any public-facing pilot, the municipality would publish an accessible notice explaining the chatbot's AI role, limits and human contact route. Before production, it would complete required legal and impact assessments, approve performance thresholds, test accessibility and subgroup effects, confirm supplier documentation and registration duties, and establish monitoring and incident procedures.

## Data and supplier controls

The fictional pilot uses application status, dates, document-type codes and limited text excerpts. It excludes biometric data. The supplier may process the data only to provide the contracted service and is prohibited from using municipal prompts, applications, outputs or feedback to train a general-purpose or shared model without specific written approval. Access is limited to authorised staff. Retention and deletion schedules remain to be finalised before production.

## Records, incidents and review

The pilot records system/version, access and outputs so staff can investigate errors. The record is incomplete: log retention and export, supplier incident deadlines, production security tests, data provenance and ongoing monitoring still require approval. Any unsafe, materially inaccurate or discriminatory output is escalated to the service and security leads; the pilot is paused while the issue is assessed.

This declaration is fictional and self-assessed. Statuses describe the imagined pilot, not verified controls at a real public body. Review the legal assessment when the system, data, model, purpose, jurisdiction or workflow changes, and at least every six months.

## Legal and source notes

- EU AI Act high-risk classification to verify against Annex III point 5(a); public deployer duties, impact assessment, registration and explanation provisions include Arts. 26, 27, 49 and 86. The amended application date and public-authority transition in Arts. 111(2) and 113 must be checked against the current consolidated text before use: [Consolidated AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27/eng); [amending Regulation (EU) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng).
- Swiss FADP Art. 21 concerns solely automated individual decisions. Federal, cantonal and municipal scope differs: [Swiss FADP, Fedlex](https://www.fedlex.admin.ch/eli/cc/2022/491/en); [FDPIC AI and data protection guidance](https://www.edoeb.admin.ch/en/ai-and-data-protection).
