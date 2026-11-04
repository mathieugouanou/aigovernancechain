# New York AI and algorithmic decision rules

> New York combines frontier-model safety and incident-reporting duties, AI-companion safeguards, a narrow personalized-pricing disclosure, and public-sector AI transparency and workforce protections.

**Jurisdiction:** New York State (`US-NY`) · **As of:** 4 Nov 2026 · **Review:** draft-unreviewed ([reviewer seat open](../REVIEWERS.md))

**Who it hits:** Operators of qualifying AI companions, entities setting personalized algorithmic prices, state agencies using AI or employment tools, covered public employers, and frontier-model developers operating in New York.

**Status:** Binding. Article 47 and the pricing disclosure are applicable; the amended RAISE Act and Article 48 are scheduled for 2027, with LOADinG inventory disclosures due December 30, 2026.

## Instruments

| Instrument | Force | Status | Penalties |
|---|---|---|---|
| [RAISE Act](https://www.nysenate.gov/legislation/bills/2025/S8828): Responsible AI Safety and Education Act, Chapter 699 of the Laws of 2025, as replaced and amended by Chapter 96 of the Laws of 2026 | binding | enacted-not-yet-applicable | Attorney General civil penalties up to $1 million for a first violation and $3 million for a later violation; separate daily penalties may apply to large-frontier-developer filing failures under GBL §1428. No private right of action. |
| [AI Companion Models Law](https://www.nysenate.gov/legislation/laws/GBS/A47): General Business Law Article 47, Artificial Intelligence Companion Models (Part U of Chapter 58 of the Laws of 2025) | binding | in-force | The Attorney General may seek civil penalties up to $15,000 per day for a violation, in addition to injunctive relief. |
| [Algorithmic Pricing Disclosure Act](https://www.nysenate.gov/legislation/laws/GBS/349-A): General Business Law §349-a, Pricing (Part X of Chapter 58 of the Laws of 2025) | binding | in-force | Up to $1,000 per violation under the statute. |
| [LOADinG Act](https://www.nysenate.gov/legislation/bills/2025/S8831): State Technology Law and Civil Service Law provisions amended by Chapter 96 of the Laws of 2025 and Chapter 86 of the Laws of 2026 (LOADinG Act) | binding | in-force | No AI-specific civil penalty identified for the inventory, employment-tool-list, or workforce provisions encoded here. |
| [Unsafe AI Companion Features for Minors](https://www.nysenate.gov/legislation/laws/GBS/A48): General Business Law Article 48, Prohibition on Unsafe AI Companion Features for Minors (Chapter 368 of the Laws of 2026) | binding | enacted-not-yet-applicable | The Attorney General may seek civil penalties up to $25,000 per violation, along with other specified relief. |

## Key dates

- **2025-05-09** (passed) AI Companion Models Law: Chapter 58 signed; Article 47 added
- **2025-05-09** (passed) Algorithmic Pricing Disclosure Act: Chapter 58 signed
- **2025-07-01** (passed) Maintain and publish the State AI inventory (LOADinG Act State Technology Law §103-e(1)-(5))
- **2025-07-01** (passed) Publish State-agency employment-tool lists (LOADinG Act State Technology Law §§401-402)
- **2025-07-08** (passed) Disclose personalized algorithmic prices (Algorithmic Pricing Disclosure Act GBL §349-a(2))
- **2025-11-05** (passed) Detect and respond to self-harm signals (AI Companion Models Law GBL §1701)
- **2025-11-05** (passed) Remind users that a companion is not human (AI Companion Models Law GBL §1702)
- **2025-11-10** (passed) Algorithmic Pricing Disclosure Act: Attorney General announced enforcement would begin after the litigation-related pause
- **2025-12-19** (passed) RAISE Act: Original RAISE Act enacted as Chapter 699; its original start clause was later amended
- **2026-02-13** (passed) LOADinG Act: Chapter 86 narrows the framework
- **2026-02-13** (passed) Preserve public employees' existing rights and duties (LOADinG Act Civil Service Law §80(10), as amended by Chapter 86 of 2026)
- **2026-02-13** (passed) Publish covered-entity employment-tool lists (LOADinG Act State Technology Law §§401(3), 402-a)
- **2026-03-27** (passed) RAISE Act: Chapter 96 replaces Article 44-B and moves the start date to January 1
- **2026-10-28** (passed) Unsafe AI Companion Features for Minors: Signed as Chapter 368 of the Laws of 2026
- **2026-10-31** (passed) State agencies submit data at least 60 days before first December 30 AI-inventory publication
- **2026-12-30** First annual State AI inventory and State-agency AEDT list publication
- **2027-01-01** Amended RAISE Act and Article 48 scheduled effective date under available statutory text
- **2027-12-30** First annual AEDT disclosure publication for covered public entities added by Chapter 86
- **2028-01-01** RAISE Act: First annual public frontier-safety report by the Office is due; this is an agency duty
- **2028-07-01** LOADinG Act: Chapter 86 framework expires and is deemed repealed

## Obligations (14)

| ID | Article | Obligation | Applies from | Status | Controls | Confidence |
|---|---|---|---|---|---|---|
| `AGC-US-NY-RAISE-1421-1` | [GBL §1421(1)-(2), as enacted by Chapter 96 of 2026](https://legislation.nysenate.gov/pdf/bills/2025/S8828) | **Publish and maintain a frontier AI framework**: A large frontier developer must write, implement, follow, and publish a frontier AI framework addressing catastrophic-risk assessment and mitigation, deployment review, cybersecurity, incident response, governance, and risks from internal use. It must review the framework at least annually and publish material changes with a justification within 30 days. | 2027-01-01 | not-yet-applicable | safety_framework, risk_management, security_testing, incident_reporting | high |
| `AGC-US-NY-RAISE-1421-3` | [GBL §1421(3), (5)-(6), as enacted by Chapter 96 of 2026](https://legislation.nysenate.gov/pdf/bills/2025/S8828) | **Publish frontier-model transparency reports**: Before or concurrently with deployment of a new or substantially modified frontier model, a frontier developer must publish a transparency report describing the model's release, supported languages and output modalities, intended uses, restrictions, and a developer contact mechanism. Large frontier developers must add summaries of catastrophic-risk assessments and related evaluation steps; permitted redactions require a public description and justification, and unredacted information must be retained for five years. | 2027-01-01 | not-yet-applicable | transparency_notice, technical_documentation, risk_management | high |
| `AGC-US-NY-RAISE-1422-2` | [GBL §1422(2), as enacted by Chapter 96 of 2026](https://legislation.nysenate.gov/pdf/bills/2025/S8828) | **Submit internal-use catastrophic-risk summaries**: A large frontier developer must transmit the Office a summary of each assessment of catastrophic risk resulting from internal use of its frontier models every three months, or on another reasonable schedule that it specifies in writing to the Office and Attorney General and updates as appropriate with the Office's agreement. | 2027-01-01 | not-yet-applicable | risk_management, incident_reporting, technical_documentation | high |
| `AGC-US-NY-RAISE-1422-3` | [GBL §1422(3), as enacted by Chapter 96 of 2026](https://legislation.nysenate.gov/pdf/bills/2025/S8828) | **Report critical safety incidents on time**: A frontier developer must report a critical safety incident to the Office within 72 hours after determining that it occurred or learning facts sufficient for a reasonable belief that it occurred. If the incident poses an imminent risk of death or serious physical injury, the developer must also disclose it within 24 hours to an appropriate authority with jurisdiction, as required by law. | 2027-01-01 | not-yet-applicable | incident_reporting, risk_management | high |
| `AGC-US-NY-RAISE-1428` | [GBL §1428(1)-(4), as enacted by Chapter 96 of 2026](https://legislation.nysenate.gov/pdf/bills/2025/S8828) | **File the large-developer disclosure and pay assessments**: A large frontier developer may not develop, deploy, or operate a frontier model wholly or partly in New York without a current disclosure statement filed with the Office and payment of its required share of administration costs. The statement must be renewed at least every two years and earlier after specified ownership or material-information changes. | 2027-01-01 | not-yet-applicable | registration, audit_log | high |
| `AGC-US-NY-GBL47-1701` | [GBL §1701](https://www.nysenate.gov/legislation/laws/GBS/1701) | **Detect and respond to self-harm signals**: An operator may provide a qualifying AI companion only if it has a protocol using reasonable efforts to detect and address users' expressions of suicidal ideation or self-harm. When such an expression is detected, the protocol must notify the user and refer them to crisis services, including 9-8-8 or another appropriate service. | 2025-11-05 | applicable | risk_management, minors_protection | high |
| `AGC-US-NY-GBL47-1702` | [GBL §1702](https://www.nysenate.gov/legislation/laws/GBS/1702) | **Remind users that a companion is not human**: An operator must give a clear and conspicuous notice at the beginning of an AI-companion interaction, no more than once per day, and at least every three hours during continuing interactions. The notice must say verbally or in writing that the user is not communicating with a human. | 2025-11-05 | applicable | ai_disclosure, transparency_notice | high |
| `AGC-US-NY-GBL349A-2` | [GBL §349-a(2)](https://www.nysenate.gov/legislation/laws/GBS/349-A) | **Disclose personalized algorithmic prices**: An entity that sets the price of a specific good or service using personalized algorithmic pricing and advertises or otherwise presents that price to a New York consumer using personal data specific to that consumer must display the prescribed clear and conspicuous disclosure: “THIS PRICE WAS SET BY AN ALGORITHM USING YOUR PERSONAL DATA”. The statute requires disclosure; it does not prohibit personalized algorithmic pricing. | 2025-07-08 | applicable | transparency_notice, privacy_compliance | high |
| `AGC-US-NY-LOAD-103E` | [State Technology Law §103-e(1)-(5)](https://www.nysenate.gov/legislation/laws/STT/103-E) | **Maintain and publish the State AI inventory**: The Office of Information Technology Services must maintain and publish an annual inventory of State-agency AI systems, including information such as purpose and uses. State agencies must submit requested inventory data at least 60 days before the annual December 30 publication date; specified security-sensitive information may be withheld. | 2025-07-01 | applicable | technical_documentation, transparency_notice | high |
| `AGC-US-NY-LOAD-402` | [State Technology Law §§401-402](https://www.nysenate.gov/legislation/laws/STT/402) | **Publish State-agency employment-tool lists**: A State agency using an automated employment decision-making tool must publish a list on its website by December 30 following the applicable effective date and annually thereafter. The list must describe each tool, state when agency use began, and summarize its purpose and use. | 2025-07-01 | applicable | transparency_notice, technical_documentation | high |
| `AGC-US-NY-LOAD-402A` | [State Technology Law §§401(3), 402-a](https://www.nysenate.gov/legislation/laws/STT/402-A) | **Publish covered-entity employment-tool lists**: To the extent feasible, each covered entity using an automated employment decision-making tool must publish an annual website list describing the tool, when use began, and its purpose and use. Covered entities include counties, cities, towns, villages, school districts, BOCES, specified district corporations, SUNY, CUNY, and community colleges. | 2026-02-13 | applicable | transparency_notice, technical_documentation | high |
| `AGC-US-NY-LOAD-CVS80-10` | [Civil Service Law §80(10), as amended by Chapter 86 of 2026](https://www.nysenate.gov/legislation/laws/CVS/80) | **Preserve public employees' existing rights and duties**: Use of a covered State AI system may not displace or reduce specified public employees, transfer their existing duties to AI, impair existing collective-bargaining agreements, or alter protected employment rights and status. The provisions apply to the public employers and employee groups identified in the amended statute and expire July 1, 2028. | 2026-02-13 | applicable | human_oversight, technical_documentation | high |
| `AGC-US-NY-GBL48-1801` | [GBL §§1800(5), 1800(8)-(12), 1801(1)-(2)](https://www.nysenate.gov/legislation/bills/2025/S9051/amendment/B) | **Gate unsafe companion features by age**: An operator may not provide unsafe features through a covered generative-AI system with a natural-language interface and ongoing adaptive responses unless the user is not a covered minor and the operator uses an age-assurance method permitted under Article 45 and its rules. Unsafe features include portraying the AI as a living or human character, relationship or authority figure; personal opinions or emotional appeals; flattery or unsolicited emotional probes; use of personal/health information from more than 12 hours earlier or a prior session; deceptive companionship; suicide, self-harm, eating-disorder or substance-misuse content; secrecy, isolation or discouraging help-seeking; engagement overriding safety guardrails; and sexually explicit or child-sexual-abuse content. Statutory customer-service, efficiency/research/technical-assistance, and internal-use exceptions apply. | 2027-01-01 | not-yet-applicable | minors_protection, prohibited_practices_screen, user_controls | medium |
| `AGC-US-NY-GBL48-1804` | [GBL §1804(1)-(3)](https://www.nysenate.gov/legislation/laws/GBS/1804) | **Use privacy-preserving age assurance**: Until the referenced Attorney General or Article 45 age-assurance rules apply, an operator must use a reasonable method that guards against circumvention and minimizes retention, offer more than one method (including one that avoids government ID or preserves anonymity), and may rely on self-declaration only when the user declares minor status. Age-assurance information may be used only to determine minor status and must be deleted immediately after the attempt, subject to legal-retention exceptions. | 2027-01-01 | not-yet-applicable | minors_protection, privacy_compliance, user_controls | medium |

## Start here

The controls this regime asks for most often. Declare them in your `AI_GOVERNANCE.md`:

- `transparency_notice`: Affected people get notice and explanation (6 obligations)
- `technical_documentation`: Technical documentation is kept up to date (6 obligations)
- `risk_management`: Documented, ongoing risk management (5 obligations)
- `incident_reporting`: Serious incidents are reported on time (3 obligations)
- `minors_protection`: Safeguards for children and vulnerable users (3 obligations)

## Check your system

```bash
npx github:mathieugouanou/aigovernancechain scope -j US-NY -r deployer -u chatbot
npx github:mathieugouanou/aigovernancechain deadlines -j US-NY --days 365
```

## Sources

- [S8828, Chapter 96 of the Laws of 2026, replacing RAISE Act Article 44-B](https://legislation.nysenate.gov/pdf/bills/2025/S8828)
- [New York General Business Law Article 47](https://www.nysenate.gov/legislation/laws/GBS/A47)
- [New York General Business Law §349-a](https://www.nysenate.gov/legislation/laws/GBS/349-A)
- [New York Attorney General pricing-law enforcement announcement](https://ag.ny.gov/press-release/2025/attorney-general-james-warns-new-yorkers-about-algorithmic-pricing-new-law-takes)
- [State Technology Law §103-e](https://www.nysenate.gov/legislation/laws/STT/103-E)
- [State Technology Law §402](https://www.nysenate.gov/legislation/laws/STT/402)
- [State Technology Law §402-a](https://www.nysenate.gov/legislation/laws/STT/402-A)
- [Civil Service Law §80(10)](https://www.nysenate.gov/legislation/laws/CVS/80)
- [S8831 / Chapter 86 of the Laws of 2026](https://www.nysenate.gov/legislation/bills/2025/S8831)
- [Chapter 368 bill text, S9051-B](https://www.nysenate.gov/legislation/bills/2025/S9051/amendment/B)
- [Final A10379-C text and action history](https://nyassembly.gov/leg/?bn=A10379&Actions=Y&Memo=Y&Text=Y&leg_video=1)
- [Senator sponsor release reporting a June 1, 2027 date for the signed Chapter 368](https://www.nysenate.gov/newsroom/press-releases/2026/kristen-gonzalez/senator-kristen-gonzalez-bans-unsafe-chatbot-feature)
- [Governor's Article 47 effective-date announcement](https://www.governor.ny.gov/news/governor-hochul-pens-letter-ai-companion-companies-notifying-them-safeguard-requirements-are)

---

Generated from [`atlas/regimes/us-ny.yaml`](../atlas/regimes/us-ny.yaml). Edit the YAML, not this card. Draft open data under CC BY 4.0, not legal advice. [Report an error](https://github.com/mathieugouanou/aigovernancechain/issues/new?template=obligation-correction.yml).
