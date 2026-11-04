# New York AI and algorithmic decision rules (US-NY)

As of 2026-11-04. Review: draft-unreviewed. Binding. Article 47 and the pricing disclosure are applicable; the amended RAISE Act and Article 48 are scheduled for 2027, with LOADinG inventory disclosures due December 30, 2026.

## AGC-US-NY-RAISE-1421-1: Publish and maintain a frontier AI framework
- Rule: RAISE Act GBL §1421(1)-(2), as enacted by Chapter 96 of 2026 · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles developer, provider; uses frontier-model; conditions: Applies to frontier models developed, deployed, or operating wholly or partly in New York, subject to statutory exceptions. A frontier model exceeds 10^26 integer or floating-point operations; a large frontier developer has affiliate-inclusive annual gross revenue over $500 million in the preceding calendar year.
- What: A large frontier developer must write, implement, follow, and publish a frontier AI framework addressing catastrophic-risk assessment and mitigation, deployment review, cybersecurity, incident response, governance, and risks from internal use. It must review the framework at least annually and publish material changes with a justification within 30 days.
- Controls: safety_framework, risk_management, security_testing, incident_reporting
- Source: https://legislation.nysenate.gov/pdf/bills/2025/S8828

## AGC-US-NY-RAISE-1421-3: Publish frontier-model transparency reports
- Rule: RAISE Act GBL §1421(3), (5)-(6), as enacted by Chapter 96 of 2026 · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles developer, provider; uses frontier-model; conditions: Frontier-model and New York territorial thresholds apply; the additional risk-assessment summaries apply only to large frontier developers.
- What: Before or concurrently with deployment of a new or substantially modified frontier model, a frontier developer must publish a transparency report describing the model's release, supported languages and output modalities, intended uses, restrictions, and a developer contact mechanism. Large frontier developers must add summaries of catastrophic-risk assessments and related evaluation steps; permitted redactions require a public description and justification, and unredacted information must be retained for five years.
- Controls: transparency_notice, technical_documentation, risk_management
- Source: https://legislation.nysenate.gov/pdf/bills/2025/S8828

## AGC-US-NY-RAISE-1422-2: Submit internal-use catastrophic-risk summaries
- Rule: RAISE Act GBL §1422(2), as enacted by Chapter 96 of 2026 · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles developer, provider; uses frontier-model; conditions: Large frontier developers only; affiliate-inclusive annual gross revenue over $500 million in the preceding calendar year.
- What: A large frontier developer must transmit the Office a summary of each assessment of catastrophic risk resulting from internal use of its frontier models every three months, or on another reasonable schedule that it specifies in writing to the Office and Attorney General and updates as appropriate with the Office's agreement.
- Controls: risk_management, incident_reporting, technical_documentation
- Source: https://legislation.nysenate.gov/pdf/bills/2025/S8828

## AGC-US-NY-RAISE-1422-3: Report critical safety incidents on time
- Rule: RAISE Act GBL §1422(3), as enacted by Chapter 96 of 2026 · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles developer, provider; uses frontier-model; conditions: Critical safety incidents concerning frontier models within the Act's New York scope; the 24-hour duty is triggered by discovery of imminent risk of death or serious physical injury.
- What: A frontier developer must report a critical safety incident to the Office within 72 hours after determining that it occurred or learning facts sufficient for a reasonable belief that it occurred. If the incident poses an imminent risk of death or serious physical injury, the developer must also disclose it within 24 hours to an appropriate authority with jurisdiction, as required by law.
- Controls: incident_reporting, risk_management
- Source: https://legislation.nysenate.gov/pdf/bills/2025/S8828

## AGC-US-NY-RAISE-1428: File the large-developer disclosure and pay assessments
- Rule: RAISE Act GBL §1428(1)-(4), as enacted by Chapter 96 of 2026 · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles developer, provider; uses frontier-model; conditions: Large frontier developers only, subject to statutory exceptions; registration disclosures include developer identity, New York offices, specified ownership information, and regulatory contacts.
- What: A large frontier developer may not develop, deploy, or operate a frontier model wholly or partly in New York without a current disclosure statement filed with the Office and payment of its required share of administration costs. The statement must be renewed at least every two years and earlier after specified ownership or material-information changes.
- Controls: registration, audit_log
- Source: https://legislation.nysenate.gov/pdf/bills/2025/S8828

## AGC-US-NY-GBL47-1701: Detect and respond to self-harm signals
- Rule: AI Companion Models Law GBL §1701 · status applicable · applies from 2025-11-05 · confidence high
- Who: roles provider, deployer; uses companion, chatbot; conditions: Covers an AI system designed to simulate a sustained human-like relationship through retained interaction/preferences, unsolicited emotion-based questions, and ongoing dialogue about personal matters; statutory customer-service, efficiency/research/technical-assistance, and internal-use exclusions apply.
- What: An operator may provide a qualifying AI companion only if it has a protocol using reasonable efforts to detect and address users' expressions of suicidal ideation or self-harm. When such an expression is detected, the protocol must notify the user and refer them to crisis services, including 9-8-8 or another appropriate service.
- Controls: risk_management, minors_protection
- Source: https://www.nysenate.gov/legislation/laws/GBS/1701

## AGC-US-NY-GBL47-1702: Remind users that a companion is not human
- Rule: AI Companion Models Law GBL §1702 · status applicable · applies from 2025-11-05 · confidence high
- Who: roles provider, deployer; uses companion, chatbot; conditions: Same Article 47 definition and statutory exclusions as §1701.
- What: An operator must give a clear and conspicuous notice at the beginning of an AI-companion interaction, no more than once per day, and at least every three hours during continuing interactions. The notice must say verbally or in writing that the user is not communicating with a human.
- Controls: ai_disclosure, transparency_notice
- Source: https://www.nysenate.gov/legislation/laws/GBS/1702

## AGC-US-NY-GBL349A-2: Disclose personalized algorithmic prices
- Rule: Algorithmic Pricing Disclosure Act GBL §349-a(2) · status applicable · applies from 2025-07-08 · confidence high
- Who: roles any; uses any-ai, profiling; conditions: Applies to covered New York entities and consumer-facing prices set dynamically by an algorithm using personal data; statutory definitions and exceptions apply. The law regulates algorithmic pricing, not only AI systems.
- What: An entity that sets the price of a specific good or service using personalized algorithmic pricing and advertises or otherwise presents that price to a New York consumer using personal data specific to that consumer must display the prescribed clear and conspicuous disclosure: “THIS PRICE WAS SET BY AN ALGORITHM USING YOUR PERSONAL DATA”. The statute requires disclosure; it does not prohibit personalized algorithmic pricing.
- Controls: transparency_notice, privacy_compliance
- Source: https://www.nysenate.gov/legislation/laws/GBS/349-A

## AGC-US-NY-LOAD-103E: Maintain and publish the State AI inventory
- Rule: LOADinG Act State Technology Law §103-e(1)-(5) · status applicable · applies from 2025-07-01 · confidence high
- Who: roles public-body; uses public-sector-use, any-ai; conditions: Applies to State agencies and AI systems meeting the statute's definition, including systems that may directly impact the public; basic calculations, basic automation, and specified rule-based systems are excluded.
- What: The Office of Information Technology Services must maintain and publish an annual inventory of State-agency AI systems, including information such as purpose and uses. State agencies must submit requested inventory data at least 60 days before the annual December 30 publication date; specified security-sensitive information may be withheld.
- Controls: technical_documentation, transparency_notice
- Source: https://www.nysenate.gov/legislation/laws/STT/103-E

## AGC-US-NY-LOAD-402: Publish State-agency employment-tool lists
- Rule: LOADinG Act State Technology Law §§401-402 · status applicable · applies from 2025-07-01 · confidence high
- Who: roles public-body, employer, deployer; uses hiring, public-sector-use; conditions: State-agency tools that materially automate or replace human employment decision-making; the statutory definition excludes basic computerized processes that do not materially affect an individual's rights, liberties, benefits, safety, or welfare.
- What: A State agency using an automated employment decision-making tool must publish a list on its website by December 30 following the applicable effective date and annually thereafter. The list must describe each tool, state when agency use began, and summarize its purpose and use.
- Controls: transparency_notice, technical_documentation
- Source: https://www.nysenate.gov/legislation/laws/STT/402

## AGC-US-NY-LOAD-402A: Publish covered-entity employment-tool lists
- Rule: LOADinG Act State Technology Law §§401(3), 402-a · status applicable · applies from 2026-02-13 · confidence high
- Who: roles public-body, employer, deployer; uses hiring, public-sector-use; conditions: To the extent feasible; first list is due December 30, 2027 for the provision added by Chapter 86 of 2026.
- What: To the extent feasible, each covered entity using an automated employment decision-making tool must publish an annual website list describing the tool, when use began, and its purpose and use. Covered entities include counties, cities, towns, villages, school districts, BOCES, specified district corporations, SUNY, CUNY, and community colleges.
- Controls: transparency_notice, technical_documentation
- Source: https://www.nysenate.gov/legislation/laws/STT/402-A

## AGC-US-NY-LOAD-CVS80-10: Preserve public employees' existing rights and duties
- Rule: LOADinG Act Civil Service Law §80(10), as amended by Chapter 86 of 2026 · status applicable · applies from 2026-02-13 · confidence high
- Who: roles public-body, employer, deployer; uses public-sector-use, any-ai; conditions: Applies to AI systems defined by State Technology Law §103-e and the covered public-sector employees/entities specified in the statute; the provision is scheduled to expire July 1, 2028.
- What: Use of a covered State AI system may not displace or reduce specified public employees, transfer their existing duties to AI, impair existing collective-bargaining agreements, or alter protected employment rights and status. The provisions apply to the public employers and employee groups identified in the amended statute and expire July 1, 2028.
- Controls: human_oversight, technical_documentation
- Source: https://www.nysenate.gov/legislation/laws/CVS/80

## AGC-US-NY-GBL48-1801: Gate unsafe companion features by age
- Rule: Unsafe AI Companion Features for Minors GBL §§1800(5), 1800(8)-(12), 1801(1)-(2) · status not-yet-applicable · applies from 2027-01-01 · confidence medium
- Who: roles provider, deployer; uses chatbot, companion, minors; conditions: A covered user is a user of a covered AI companion in New York who is not the operator or its agent/affiliate. A covered minor is a user whom the operator actually knows is under 18; the prohibition still requires the operator to use permitted age-assurance methods before providing unsafe features.
- What: An operator may not provide unsafe features through a covered generative-AI system with a natural-language interface and ongoing adaptive responses unless the user is not a covered minor and the operator uses an age-assurance method permitted under Article 45 and its rules. Unsafe features include portraying the AI as a living or human character, relationship or authority figure; personal opinions or emotional appeals; flattery or unsolicited emotional probes; use of personal/health information from more than 12 hours earlier or a prior session; deceptive companionship; suicide, self-harm, eating-disorder or substance-misuse content; secrecy, isolation or discouraging help-seeking; engagement overriding safety guardrails; and sexually explicit or child-sexual-abuse content. Statutory customer-service, efficiency/research/technical-assistance, and internal-use exceptions apply.
- Controls: minors_protection, prohibited_practices_screen, user_controls
- Source: https://www.nysenate.gov/legislation/bills/2025/S9051/amendment/B

## AGC-US-NY-GBL48-1804: Use privacy-preserving age assurance
- Rule: Unsafe AI Companion Features for Minors GBL §1804(1)-(3) · status not-yet-applicable · applies from 2027-01-01 · confidence medium
- Who: roles provider, deployer; uses chatbot, companion, minors; conditions: Operators of covered AI companions providing unsafe features under Article 48; statutory exceptions and applicable future regulations may alter the interim methods.
- What: Until the referenced Attorney General or Article 45 age-assurance rules apply, an operator must use a reasonable method that guards against circumvention and minimizes retention, offer more than one method (including one that avoids government ID or preserves anonymity), and may rely on self-declaration only when the user declares minor status. Age-assurance information may be used only to determine minor status and must be deleted immediately after the attempt, subject to legal-retention exceptions.
- Controls: minors_protection, privacy_compliance, user_controls
- Source: https://www.nysenate.gov/legislation/laws/GBS/1804
