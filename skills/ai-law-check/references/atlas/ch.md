# Swiss AI governance (CH)

As of 2026-11-04. Review: draft-unreviewed. Binding FADP and Data Protection Ordinance duties apply today. The Federal Council reported a spring 2027 consultation for proposed AI legislation; OFCOM's AI Code of Conduct guide is voluntary.

## AGC-CH-FADP-6-7: Process personal data transparently and build privacy in by design
- Rule: Revised FADP Art. 6(1)–(5) and Art. 7 · status applicable · applies from 2023-09-01 · confidence high
- Who: roles any; uses any-ai; conditions: Applies when AI processing concerns personal data of natural persons and the organisation is a private person or federal body within the FADP's scope.
- What: Personal data must be processed lawfully, in good faith and proportionately; the purpose must be recognisable to the data subject and further processing must remain compatible with that purpose. Controllers must design processing to respect these principles from the planning stage and use suitable default settings to limit data to what is necessary.
- Controls: privacy_compliance, transparency_notice, user_controls
- Source: https://www.fedlex.admin.ch/eli/cc/2022/491/en

## AGC-CH-FADP-12: Keep a record of processing activities
- Rule: Revised FADP Art. 12(1)–(5); DPO Art. 24 · status applicable · applies from 2023-09-01 · confidence high
- Who: roles any; uses any-ai; conditions: Record only processing of personal data; the small-organisation exception and its sensitive-data/high-risk-profiling limits are in DPO Art. 24.
- What: Controllers and processors must keep records describing their processing activities, including purpose, data and data-subject categories, recipients, retention, security measures and relevant foreign disclosures. Natural persons and private organisations with fewer than 250 employees are generally exempt unless they process a large volume of sensitive personal data or carry out high-risk profiling; federal bodies must notify the FDPIC of their records.
- Controls: audit_log, privacy_compliance
- Source: https://www.fedlex.admin.ch/eli/cc/2022/491/en

## AGC-CH-FADP-19-6: Tell people how AI processes their personal data
- Rule: Revised FADP Art. 6(3), 19(1)–(2); FDPIC, AI and data protection, Transparent information · status applicable · applies from 2023-09-01 · confidence medium
- Who: roles provider, deployer, any; uses any-ai, chatbot, agent; conditions: Only where personal data is processed within the FADP's scope; the FDPIC's AI-specific disclosure statement is its application of general FADP transparency duties, not a separate AI Act.
- What: Controllers must make the purpose of personal-data processing recognisable and inform data subjects appropriately when collecting personal data, including the controller's identity, processing purpose and, where applicable, recipients. The FDPIC says that AI providers and users should make purpose, functionality and data sources transparent; users of directly interactive language models should know they are communicating with a machine and how their prompts may be used.
- Controls: ai_disclosure, transparency_notice, privacy_compliance
- Source: https://www.fedlex.admin.ch/eli/cc/2022/491/en

## AGC-CH-FADP-21: Notify people about consequential decisions made solely by automation and offer human review
- Rule: Revised FADP Art. 21(1)–(4) · status applicable · applies from 2023-09-01 · confidence high
- Who: roles deployer, public-body, any; uses significant-decision, profiling, credit, hiring, education, healthcare, essential-services; conditions: Only automated individual decisions with legal consequences or considerable adverse effects; the Art. 21(3) exceptions and federal-body hearing qualification apply.
- What: If a decision is based exclusively on automated processing and has legal consequences or a considerable adverse effect, the controller must inform the data subject. On request, the person may express their view and request review by a natural person; federal bodies must designate such decisions. The Act has exceptions, including where an eligible contract-related request is granted or the person explicitly consented to automation.
- Controls: transparency_notice, human_oversight, contest_and_appeal
- Source: https://www.fedlex.admin.ch/eli/cc/2022/491/en

## AGC-CH-FADP-22: Assess high-risk personal-data processing before deployment
- Rule: Revised FADP Art. 22(1)–(5) and Art. 23 · status applicable · applies from 2023-09-01 · confidence high
- Who: roles provider, deployer, public-body, any; uses any-ai, profiling, biometric-categorisation, remote-biometric-id, significant-decision; conditions: Applies only where personal-data processing is likely to present high risk; statutory exemptions and the certified-product/code-of-conduct route are set out in Arts. 22–23.
- What: Before processing likely to create a high risk to a person's personality or fundamental rights, the controller must complete a data protection impact assessment describing the processing, risks and protective measures. High risk depends on the nature, extent, circumstances and purpose, including large-scale sensitive-data processing or large-scale systematic monitoring of public areas; residual high risk generally requires prior consultation with the FDPIC, subject to statutory exceptions.
- Controls: impact_assessment, risk_management, privacy_compliance
- Source: https://www.fedlex.admin.ch/eli/cc/2022/491/en

## AGC-CH-FADP-24: Report high-risk personal-data security breaches
- Rule: Revised FADP Art. 24(1)–(4) · status applicable · applies from 2023-09-01 · confidence high
- Who: roles provider, deployer, public-body, any; uses any-ai; conditions: Only where AI-related personal data are involved and a breach is likely to create a high risk to data subjects.
- What: A controller must notify the FDPIC as quickly as possible of a data-security breach likely to result in a high risk to a person's personality or fundamental rights, describing the breach, its consequences and measures taken or planned. A processor must notify the controller as quickly as possible; the controller must inform affected people where needed for their protection or at the FDPIC's request.
- Controls: incident_reporting, privacy_compliance
- Source: https://www.fedlex.admin.ch/eli/cc/2022/491/en

## AGC-CH-FADP-25: Provide access information, including about automated decisions
- Rule: Revised FADP Art. 25(1)–(2)(e)–(g) · status applicable · applies from 2023-09-01 · confidence high
- Who: roles provider, deployer, public-body, any; uses any-ai, profiling, significant-decision; conditions: Applies to personal data within the FADP's scope; access rights may be limited in the cases set out in Arts. 26–27.
- What: On request, a person may ask whether personal data about them is being processed and receive information needed to exercise their rights. This includes the purpose, available source of data not collected from them, and, if applicable, whether an automated individual decision was taken and the logic behind it, subject to the Act's exceptions.
- Controls: transparency_notice, contest_and_appeal, privacy_compliance
- Source: https://www.fedlex.admin.ch/eli/cc/2022/491/en

## AGC-CH-DPO-4: Log qualifying automated processing and keep logs protected
- Rule: Data Protection Ordinance Art. 4(1)–(5) · status applicable · applies from 2025-12-01 · confidence high
- Who: roles provider, deployer, public-body, any; uses any-ai, profiling, law-enforcement; conditions: Applies to automated processing of personal data; private-sector logging depends on the Art. 4(1) risk conditions, while federal-body duties are specified in Art. 4(2).
- What: Private controllers and processors must log specified data operations and access when they automate large-volume sensitive-data processing or high-risk profiling and preventive measures cannot ensure protection. Federal bodies and their processors must log specified operations for sensitive data, profiling and covered law-enforcement processing; for other automated processing they must assess fundamental-rights risks and decide whether and how far to log. Required logs identify who did what and when, are kept at least one year, and are separated and access-restricted.
- Controls: audit_log, privacy_compliance, risk_management
- Source: https://www.fedlex.admin.ch/eli/cc/2022/568/en

## AGC-CH-DPO-46-1: Assess logging needs for legacy automated processing by the transition deadline
- Rule: Data Protection Ordinance Art. 46(1) · status not-yet-applicable · applies from 2026-12-31 · confidence high
- Who: roles provider, deployer, public-body, any; uses any-ai; conditions: Only legacy automated processing begun or planned before the 29 October 2025 amendment; excluded categories remain subject to Art. 4 without this transition.
- What: For automated personal-data processing planned or started before 1 December 2025, the controller must assess the need for logging by 31 December 2026; if logging is needed, it must be implemented by 31 December 2029. This transition does not cover automated processing of sensitive personal data, profiling, or processing within the law-enforcement data-protection directive.
- Controls: audit_log, risk_management, privacy_compliance
- Source: https://www.fedlex.admin.ch/eli/cc/2022/568/en

## AGC-CH-AICG-VOL: Use OFCOM's voluntary AI Code of Conduct toolkit if adopting self-regulation
- Rule: OFCOM Guide on an AI Code of Conduct, voluntary toolkit · status voluntary · applies from 2026-10-28 · confidence high
- Who: roles provider, deployer, public-body; uses any-ai
- What: OFCOM's toolkit helps associations and businesses create voluntary AI guidelines, with suggested texts on 10 topics and a process for developing and improving commitments. It is not legislation and creates no mandatory duty to adopt a code.
- Controls: risk_management
- Source: https://www.bakom.admin.ch/en/newnsb/s2TQiUUjrA5D
