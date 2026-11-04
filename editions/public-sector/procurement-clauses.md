# Model AI procurement clauses for public bodies

Use these as original starting text for a tender, framework call-off or contract schedule. Fill every bracket, set measurable acceptance criteria and obtain procurement, privacy, security and legal review. Adapt to the public body's procurement law and the service's risk. These clauses do not make the supplier the public decision-maker and do not transfer the body's statutory duties.

## Reference materials

- The European Commission's Public Buyers Community lists the updated EU Model Contractual Clauses for AI procurement, published 5 March 2025: a full version for high-risk AI, a light version for non-high-risk AI and a commentary. The high-risk and light clauses are working documents for public buyers and state that they do not reflect an official Commission position. Treat them as drafting aids, not legislation. Check the resource page for later versions before use: [Updated EU AI model contractual clauses](https://public-buyers-community.ec.europa.eu/communities/procurement-ai/resources/updated-eu-ai-model-contractual-clauses); [Public Buyers Community resources](https://public-buyers-community.ec.europa.eu/communities/procurement-ai/resources).
- The EU high-risk clause file describes requirements around risk management, pre-delivery testing, documentation, data governance, quality management and audit cooperation: [MCC-AI High-Risk, February 2025 (DOCX)](https://public-buyers-community.ec.europa.eu/system/files/2025-05/Model%20Clauses%20High%20Risk.docx). The non-high-risk light version is here: [MCC-AI Light, February 2025 (DOCX)](https://public-buyers-community.ec.europa.eu/system/files/2025-05/Model%20Clauses%20Light%20Version%20%281%29.docx).
- UK PPN 017 is a current official reference for identifying AI use in procurements and services, supplier disclosure and protecting confidential tender information from training use. It applies to central government, executive agencies and non-departmental public bodies: [PPN 017, Feb 2025](https://www.gov.uk/government/publications/ppn-017-improving-transparency-of-ai-use-in-procurement/ppn-017-improving-transparency-of-ai-use-in-procurement-html).
- US federal buyers can consult OMB M-25-22 for acquisition provisions on government data, IP, testing, monitoring, documentation, portability and vendor lock-in: [OMB M-25-22](https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-22-Driving-Efficient-Acquisition-of-Artificial-Intelligence-in-Government.pdf). OMB M-26-04 adds LLM-specific procurement requirements and expressly complements M-25-22: [OMB M-26-04](https://www.whitehouse.gov/wp-content/uploads/2025/12/M-26-04-Increasing-Public-Trust-in-Artificial-Intelligence-Through-Unbiased-AI-Principles-1.pdf). These memoranda apply to covered federal agencies, not state or local buyers.

## Schedule: AI system requirements

### 1. System disclosure, inventory and documentation

**1.1 Complete disclosure.** The Supplier must identify every AI system, model, agent, AI-enabled feature, third-party service and subprocessor used to perform this Contract, including AI embedded in a product or used by the Supplier's staff to deliver the service. Before use, the Supplier must give the Authority a current schedule stating: (a) system and model name, provider and version; (b) intended purpose and limits; (c) where and by whom it will be used; (d) data categories and sources; (e) outputs and downstream actions; (f) hosting and processing locations; (g) human review points; and (h) known material risks and mitigations.

**1.2 Change notice.** The Supplier must give the Authority at least [30] calendar days' written notice before changing the model, data source, intended purpose, decision role, hosting location, subprocessor, safety controls or material performance characteristics. An emergency security fix may be deployed sooner if the Supplier gives immediate notice and a full change record within [24] hours. The Authority may require testing, approval or rollback before a material change is used in production.

**1.3 Evidence.** Before acceptance, and on request during the Contract, the Supplier must provide current technical and operational documentation sufficient for the Authority to assess fitness for purpose, limitations, risks, data flows, human oversight, test results and applicable legal duties. The Supplier may redact genuine trade secrets only where the redaction does not prevent the Authority, its auditor or a competent authority from verifying compliance.

### 2. Data use, confidentiality and model training

**2.1 Limited purpose.** The Supplier may process Authority data only to provide, secure, support and maintain the contracted service and only on documented instructions from the Authority. The Supplier must not sell, disclose, combine, reuse or otherwise exploit Authority data for an unrelated purpose.

**2.2 No general-model training.** Without the Authority's prior, specific written approval, the Supplier must not use Authority data, personal data, confidential information, prompts, outputs, feedback, evaluation material or derived data to train, fine-tune or improve a model or service offered to another customer or to the public. Approval for one dataset or purpose does not approve another. Silence is not approval.

**2.3 Data handling.** The Supplier must document data categories, source, purpose, access, storage location, retention, deletion, onward disclosure and any international transfer. It must not retain data longer than the documented period needed for the Contract or applicable law. At expiry or termination, it must return or securely delete Authority data as directed and certify the result, subject to any legal preservation duty.

**2.4 Subprocessors.** No subprocessor may receive Authority data or provide an AI component without prior written approval. The Supplier remains responsible for each approved subprocessor and must flow down equivalent obligations.

### 3. Human oversight and public-service decisions

**3.1 Authority remains accountable.** The Authority retains responsibility for its statutory and administrative decisions. The Supplier must not make, communicate or implement a decision on the Authority's behalf unless the Contract expressly authorises that act and the Authority has confirmed its legal basis and safeguards.

**3.2 Practical human control.** For any output that may materially affect an individual's rights, eligibility, service, health, safety or access to a benefit, the Supplier must provide designated, trained Authority staff with the information, time, tools and authority needed to assess the case independently, reject or override the output, obtain additional evidence, pause the system and escalate an issue. A routine confirmation click is not a human review.

**3.3 Human route and challenge.** The service must provide an accessible route for a person to request human review, correct relevant information and challenge an adverse outcome. The Supplier must support the Authority in investigating and responding to the request within [two business days] or the shorter statutory deadline.

**3.4 Safe stop.** The system must support a documented and tested way for the Authority to suspend the AI function without losing access to the underlying public service. The Supplier must assist with a safe stop and restart.

### 4. Testing, quality and bias

**4.1 Pre-deployment tests.** Before production, the Supplier must test the system against agreed acceptance criteria and representative, lawfully obtained data. The test plan must cover accuracy, reliability, robustness, accessibility, security, foreseeable misuse, unsafe outputs, drift and performance across relevant user groups and operating conditions.

**4.2 Fairness evidence.** The Supplier must disclose the evaluation method, dataset provenance, limitations, disaggregated results where lawful and statistically meaningful, and known gaps. The Supplier must not claim that a system is “bias-free.” The Authority may require independent testing or additional tests for groups at risk of disadvantage.

**4.3 Ongoing quality.** The Supplier must monitor performance and report material degradation, drift, failures or new risks. It must re-test after a material change, incident or change of context. The Authority may set performance thresholds in Schedule [X]. If a threshold is missed, the Supplier must propose corrective action promptly and support rollback or suspension.

### 5. Logs, audit and inspection

**5.1 Event records.** The Supplier must enable logs sufficient to reconstruct system use, subject to data minimisation and applicable law. Logs must include, as relevant: date/time; system and model version; user or service identity; input and output or a secure reference to them; retrieval sources; tool calls; human review, approval, override or escalation; model/configuration changes; errors; and incident identifiers.

**5.2 Retention and access.** The parties will set a retention period of [X] in Schedule [data retention]. The Supplier must preserve relevant records when there is an investigation, complaint, legal hold or incident. The Authority and its authorised independent auditor may inspect relevant records, controls, test results and evidence on reasonable notice, or immediately where required to investigate a serious incident or comply with law. Supplier confidentiality does not prevent lawful access by a regulator or auditor.

**5.3 Audit assistance.** The Supplier must provide reasonable access, staff support and evidence needed for the Authority to assess compliance, perform a privacy or fundamental-rights impact assessment, respond to an affected person, or cooperate with a competent authority. The Authority may publish high-level audit findings where lawful and subject to appropriate protection for personal, security-sensitive and genuinely confidential information.

### 6. Incident notification and response

**6.1 Initial notice.** The Supplier must notify the Authority's named incident contact without undue delay and no later than **4 hours** after becoming aware of an incident that has caused, or may cause, death or physical harm, an unlawful or materially incorrect public decision, a serious rights impact, a personal-data breach, unauthorised access, material service interruption or a compromise of system integrity. For any other AI-related incident that could materially affect the Authority or service users, notice is due within **24 hours**.

**6.2 Updates and cooperation.** The first notice may be preliminary. It must identify the affected system/version, incident time, known or likely impact, immediate containment and a contact. The Supplier must provide a fuller written report within [72 hours], preserve evidence, cooperate with the Authority's investigation and provide regular updates. The Supplier must not notify affected people, media or regulators on the Authority's behalf unless law or the Authority requires it.

**6.3 Incident plan.** Before production, the Supplier must provide an incident playbook, escalation contacts and a tested process for containment, suspension, recovery, evidence preservation and safe resumption. Contract notice deadlines do not replace statutory notification deadlines.

### 7. Security and resilience

**7.1 Controls.** The Supplier must apply security controls proportionate to the sensitivity and consequences of the service, including least-privilege access, strong authentication, encryption in transit and at rest, secure secrets handling, vulnerability management, software supply-chain controls, backups, recovery tests, and protection against prompt injection, data exfiltration and unauthorised tool use where relevant.

**7.2 Assurance.** Before go-live and at least annually, the Supplier must provide current security assurance evidence and remediate critical findings within [30] days or a shorter period set by the Authority. The Authority may require a focused assessment or penetration test where justified by risk. A certification is evidence, not a substitute for the Authority's risk assessment.

**7.3 Resilience.** The Supplier must document availability, recovery objectives, dependencies, failure modes and fallback procedures. The public service must have a usable alternative when the AI system is unavailable or suspended.

### 8. Exit, portability and continuity

**8.1 Portable outputs.** On request and at exit, the Supplier must export Authority data, configuration, records, logs, evaluation artefacts and Authority-funded deliverables in documented, commonly used, machine-readable formats. It must document schemas and interfaces and provide reasonable transition assistance for [90] days at the agreed rates.

**8.2 No artificial lock-in.** The Supplier must disclose material licensing, usage, export, storage and egress charges before award. It must not withhold Authority data, logs, documentation or transition support because of a disputed invoice, except where law requires otherwise.

**8.3 Deletion and continuity.** After the Authority confirms successful transfer, the Supplier must delete remaining copies and backups on the agreed schedule, except records it must retain by law, which remain protected and unavailable for other use. The Supplier must maintain service continuity during an orderly transition.

### 9. Required `AI_GOVERNANCE.md` deliverable

**9.1 Delivery.** No later than acceptance, the Supplier must deliver a versioned `AI_GOVERNANCE.md` file for each AI system or material AI-enabled service. The file must use the Authority's agreed schema, identify the system, owner, repository or service location, roles, jurisdictions, uses, self-assessed risk and rationale, model/provider, controls, obligations acknowledged or waived, governance and security contacts, review dates, and the evidence or reason for each control status.

**9.2 Maintenance.** The Supplier must update the file after each material system, model, data, purpose, deployment or control change, and at least every [six months]. Each update must identify the change, date and responsible reviewer. The Supplier must not mark a control implemented unless it can provide evidence.

**9.3 Accuracy.** The file is a supplier declaration, not a conformity assessment or legal opinion. The Authority may reject an incomplete or misleading file and may require supporting evidence.

## Optional tender questions

Ask bidders to answer these questions in a structured response. State in the procurement documents which answers are scored and how.

1. Identify any AI used in the proposed service or in delivering the contract, including subcontractor and embedded AI.
2. Describe the system's intended purpose, limits, model/provider, data, hosting, version-change process and human review points.
3. Explain how the service supports independent testing, fairness analysis, monitoring, logging, incident response, access for audit and exit portability.
4. State whether any Authority data or outputs are used for training or improvement, and identify the default and any opt-in settings.
5. Describe how the bidder will support the Authority's legal classification, impact assessments, transparency record, notices and individual recourse.
6. Provide evidence of security testing, accessibility, performance by relevant user groups and known limitations.

## Implementation notes

- For EU high-risk procurement, map the clauses to the current AI Act, the February 2025 MCC-AI high-risk version and the actual role split between provider and deployer. Do not silently treat the contract as changing statutory roles.
- For non-high-risk AI, use proportionate requirements rather than copying every high-risk obligation wholesale.
- For UK central-government tenders, check PPN 017 and its current scope. Its sample AI bid disclosure questions are informational and should not be scored unless the tender separately and lawfully states how relevant questions are evaluated.
- For US federal procurement, check M-25-22's applicability date and any agency-specific clauses. It does not govern a municipality or state buyer.
