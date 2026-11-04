# California AI and automated-decision duties (US-CA)

As of 2026-11-04. Review: draft-unreviewed. Binding requirements are already in force for several covered uses. Major next dates are 2027-01-01 for CATA platform/hosting and ADMT duties, 2027-07-01 for child-safety assessments and companion-chatbot annual reports, and 2028-01-01 for capture-device provenance duties.

## AGC-US-CA-SB53-22757-12-A: Publish and maintain a frontier safety framework
- Rule: TFAIA / SB 53 BPC § 22757.12(a)–(b) · status applicable · applies from 2026-01-01 · confidence high
- Who: roles developer, provider; uses frontier-model; conditions: A frontier model is a foundation model trained using more than 10^26 integer or floating-point operations, including original training and qualifying later fine-tuning or modification. A large frontier developer is a developer together with affiliates whose preceding-year annual gross revenue exceeds $500 million.
- What: A large frontier developer must write, implement, follow and clearly publish a frontier AI framework covering catastrophic-risk assessment, mitigations, governance, cybersecurity and safe deployment. It must review the framework at least annually, update it as needed, and publish a summary of material changes with reasons within 30 days.
- Controls: safety_framework, risk_management, security_testing
- Source: https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53

## AGC-US-CA-SB53-22757-12-C-13: Publish deployment reports and report critical safety incidents
- Rule: TFAIA / SB 53 BPC §§ 22757.12(c)–(d), 22757.13(c) · status applicable · applies from 2026-01-01 · confidence high
- Who: roles developer, provider; uses frontier-model; conditions: Applies to developers of models exceeding the statutory 10^26-compute frontier-model threshold; the enhanced report and internal-use assessment requirements apply to large frontier developers exceeding the $500 million preceding-year revenue threshold.
- What: Before or concurrently with deployment of a new or substantially modified frontier model, a frontier developer must publish a transparency report with specified release, contact, capability, use and restriction information; large developers add specified risk-assessment and evaluation information. A developer must report a critical safety incident to the Office of Emergency Services within 15 days after discovery, or notify an appropriate authority within 24 hours if the incident poses an imminent risk of death or serious physical injury; large developers also transmit confidential summaries of internal-use catastrophic-risk assessments to OES quarterly or on an alternate schedule communicated in writing.
- Controls: transparency_notice, incident_reporting, risk_management, audit_log
- Source: https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53

## AGC-US-CA-CATA-22757-2: Provide a free generative-AI disclosure verification tool
- Rule: California AI Transparency Act BPC § 22757.2 · status applicable · applies from 2026-08-02 · confidence high
- Who: roles provider, developer; uses generated-media; conditions: Covers providers of publicly accessible generative-AI systems in California, subject to statutory exceptions, including a temporary assistive-technology exemption. SB 1000, effective 2026-09-30, removed the former more-than-one-million-monthly-user threshold.
- What: A covered provider must make a free, publicly accessible tool available to determine whether image, video or audio content was created or altered using its generative-AI system. The tool must expose the specified provenance information while limiting personal-information collection and retention as the statute requires.
- Controls: content_marking, privacy_compliance
- Source: https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB1000

## AGC-US-CA-CATA-22757-3: Embed latent provenance disclosures in generated or altered media
- Rule: California AI Transparency Act BPC § 22757.3 · status applicable · applies from 2026-08-02 · confidence high
- Who: roles provider, developer; uses generated-media; conditions: Applies to covered generative-AI providers when latent disclosure is technically feasible; minor modifications and the temporary assistive-technology exemption are excluded as specified by statute.
- What: Where technically feasible, a provider must embed a latent disclosure in image, video and audio content created or altered by its generative-AI system, except for specified minor modifications. The disclosure must identify the AI origin and include the information prescribed by statute; providers must also give licensees required notice and act on identified noncompliant modifications within the statutory time limits.
- Controls: content_marking
- Source: https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB1000

## AGC-US-CA-CATA-22757-3-1-3-2: Detect and disclose provenance on large platforms and GenAI hosting services
- Rule: California AI Transparency Act BPC §§ 22757.3.1–22757.3.2 · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles platform; uses generated-media, deepfake; conditions: A large online platform is a public-facing social-media, file-sharing, mass-messaging or stand-alone search platform that distributes content to users who did not create or collaborate on it and exceeded 2,000,000 unique monthly users during the preceding 12 months, excluding broadband and telecommunications services. A GenAI hosting platform is an internet website or application making model weights or source code available for download by California residents, regardless of compensation. Platform duties concern provenance data compliant with widely adopted specifications of an established standards-setting body.
- What: From 2027-01-01, a large online platform must provide a compliant mechanism to detect provenance data, display the prescribed indicator or disclosure, and permit inspection; it must take reasonable steps not to strip compliant provenance. A GenAI hosting platform must not knowingly make a covered system available if it does not comply with the latent-disclosure requirements, and platforms need not maintain, display or enable downloading of users' personal information as provenance.
- Controls: content_marking, transparency_notice
- Source: https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB2713

## AGC-US-CA-CATA-22757-3-3: Support provenance disclosures in newly manufactured capture devices
- Rule: California AI Transparency Act BPC § 22757.3.3 · status not-yet-applicable · applies from 2028-01-01 · confidence high
- Who: roles product-manufacturer; uses generated-media; conditions: Applies to covered image, video and audio capture devices first manufactured for sale in California on or after 2028-01-01, subject to statutory technical-feasibility and specification conditions.
- What: Beginning 2028-01-01, a manufacturer of a covered capture device first produced for sale in California must provide an option to include and, where required, embed a latent disclosure identifying the manufacturer, device, version and capture date or time. The duty is subject to technical feasibility and the statute's accepted technical specifications.
- Controls: content_marking
- Source: https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB853

## AGC-US-CA-AB2013-CIV-3111: Publish generative-AI training-data documentation
- Rule: GenAI training-data documentation Civil Code § 3111 · status applicable · applies from 2026-01-01 · confidence high
- Who: roles developer; uses generated-media; conditions: Covers generative-AI systems or services released on or after 2022 and made available to Californians; statutory exceptions include specified systems and circumstances.
- What: A developer must publish documentation about the datasets used to develop a covered generative-AI system or service, including a high-level summary of source types, dataset purpose and characteristics, intellectual-property and personal-information content, processing, collection periods and use of synthetic data. The documentation must be posted publicly online by the initial deadline and updated before a subsequent release or substantial modification, subject to statutory exceptions.
- Controls: training_data_summary, data_governance, transparency_notice
- Source: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=3111.

## AGC-US-CA-SB243-22602: Disclose companion-chatbot identity and maintain crisis and minor safeguards
- Rule: Companion chatbot safeguards BPC §§ 22602(a)–(c), 22604 · status applicable · applies from 2026-01-01 · confidence high
- Who: roles provider, deployer, platform; uses companion, chatbot, minors; conditions: Applies to operators of companion chatbots made available to users in California; a companion chatbot is designed to provide adaptive, human-like responses and sustain a relationship across multiple interactions.
- What: A companion-chatbot operator must disclose when a reasonable person could be misled into believing the chatbot is human, maintain and publish a protocol for responding to suicidal ideation or self-harm, and provide a notice that the chatbot may not be suitable for some minors. Until 2027-01-01, the statute also requires specified disclosures, break reminders and protections for known minor users; SB 1119 repeals those § 22602(c) duties from that date.
- Controls: ai_disclosure, minors_protection, risk_management, transparency_notice
- Source: https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB243

## AGC-US-CA-SB243-22603: Report companion-chatbot safety and crisis-response information annually
- Rule: Companion chatbot safeguards BPC § 22603 · status not-yet-applicable · applies from 2027-07-01 · confidence high
- Who: roles provider, platform; uses companion, chatbot; conditions: Applies to operators of companion chatbots subject to the Act; the first annual report is due 2027-07-01 and covers the preceding calendar year as required by statute.
- What: An operator must submit an annual report stating the number of notifications sent to users about suicidal ideation or self-harm during the preceding calendar year and describing protocols for detecting, removing or responding to such content. Reports must avoid personally identifying information and include specified safety and use information.
- Controls: incident_reporting, minors_protection, audit_log
- Source: https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB243

## AGC-US-CA-SB1119-21811-13: Assess and mitigate child-safety risks in AI chatbots
- Rule: Child-accessible chatbot safety BPC §§ 21811–21814 · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles provider, deployer, platform; uses chatbot, companion, minors; conditions: Applies to covered operators of AI chatbots accessible to children, subject to statutory definitions and exclusions, including specified workplace-exclusive and postsecondary educational chatbots. The child-safety risk-assessment, mitigation and policy duties begin 2027-07-01; audit requirements have revenue thresholds, small-operator provisions and an exemption/phase-in before 2032.
- What: From 2027-01-01, operators must determine users' ages or apply child protections to all users. From 2027-07-01, before new or substantially modified releases, operators allowing children must document a safety risk assessment and mitigations, publish a safety policy and crisis procedures, and implement required safeguards, defaults and data or advertising restrictions. Under § 21814's AB 1405-conditioned text, operators with at least $500 million in prior-year gross revenue must complete an independent audit by 2029-01-01 or before first public availability (whichever is later), then every two years, submit an audit summary to the Attorney General within 30 business days and post a high-level summary within 90 days; operators below that threshold are exempt before 2032.
- Controls: impact_assessment, risk_management, minors_protection, user_controls, privacy_compliance, audit_log
- Source: https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB1119

## AGC-US-CA-BOT-17941: Disclose a qualifying bot's artificial identity
- Rule: BOT Act BPC § 17941 · status applicable · applies from 2019-07-01 · confidence high
- Who: roles any; uses chatbot, generated-media; conditions: Narrowly applies to the combination of intent to mislead about artificial identity, knowing deception about the communication's content, and an aim to incentivize a commercial transaction or influence an election; statutory exceptions apply.
- What: A person using a bot online must clearly and conspicuously disclose that it is a bot when the person intends to mislead someone about the bot's artificial identity, knowingly deceive that person about the communication's content, and thereby incentivize a commercial transaction or influence a vote in an election. The disclosure must be reasonably designed to inform people that they are communicating with a bot.
- Controls: ai_disclosure, transparency_notice
- Source: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=17941.

## AGC-US-CA-CCPA-7150: Complete CCPA risk assessments for high-risk processing
- Rule: CPPA ADMT and risk assessments 11 CCR § 7150 and related risk-assessment provisions · status applicable · applies from 2026-01-01 · confidence high
- Who: roles deployer, employer, provider; uses significant-decision, profiling, hiring, credit, education, healthcare; conditions: Applies to businesses subject to the CCPA that engage in processing identified by the risk-assessment regulations; statutory business, processing and decision exceptions apply.
- What: A CCPA-covered business must conduct and document a risk assessment before initiating processing that presents significant risk to consumers, including selling or sharing personal information, processing sensitive personal information, using ADMT for a significant decision, specified profiling, and using personal information to train covered technologies. A covered business already conducting qualifying processing before the regulations took effect must complete the assessment by 2027-12-31 if that processing continues; required information and attestations for 2026–2027 assessments are due 2028-04-01.
- Controls: impact_assessment, risk_management, privacy_compliance, audit_log
- Source: https://cppa.ca.gov/regulations/pdf/ccpa_updates_cyber_risk_admt_appr_text.pdf

## AGC-US-CA-CCPA-7200-7222: Give notice, opt-out and access rights for covered ADMT
- Rule: CPPA ADMT and risk assessments 11 CCR §§ 7200–7222 · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles deployer, employer; uses significant-decision, hiring, credit, education, healthcare; conditions: Applies to CCPA-covered businesses using ADMT as defined by regulation to make or substantially replace human decisionmaking for a significant decision, subject to statutory and regulatory exclusions and exceptions.
- What: From 2027-01-01, a CCPA-covered business using covered ADMT for a significant decision must provide a prominent pre-use notice explaining the purpose, operation and consumer rights. Consumers generally have an opt-out right, subject to regulatory exceptions including certain qualifying human-appeal processes, and may request a plain-language explanation of the specific ADMT use, logic and role in the decision.
- Controls: transparency_notice, user_controls, contest_and_appeal, privacy_compliance
- Source: https://cppa.ca.gov/regulations/pdf/ccpa_updates_cyber_risk_admt_appr_text.pdf

## AGC-US-CA-CRC-11009-F: Prevent discriminatory employment use of automated decision systems
- Rule: Employment ADS regulations 2 CCR §§ 11009(f), 11013(c) · status applicable · applies from 2025-10-01 · confidence medium
- Who: roles employer; uses hiring, significant-decision; conditions: Applies to FEHA-covered employers and other covered entities using automated-decision systems or selection criteria in employment decisions; the regulations do not impose a freestanding universal anti-bias-testing mandate.
- What: An employer or other FEHA-covered entity may not use an automated-decision system or selection criteria that discriminates against applicants or employees on a protected basis. Anti-bias testing or its absence is relevant evidence in a discrimination claim or defense, while covered personnel and employment records must be retained for four years from record creation or the personnel action, whichever is later.
- Controls: bias_testing, audit_log
- Source: https://calcivilrights.ca.gov/wp-content/uploads/sites/32/2025/06/Final-Text-regulations-automated-employment-decision-systems.pdf

## AGC-US-CA-SB947-1522-1524: Require human corroboration and notice for workplace automated decisions
- Rule: Worker protections for automated decisions Labor Code §§ 1522, 1524 and 1526.7 · status not-yet-applicable · applies from 2027-07-01 · confidence high
- Who: roles employer; uses hiring, significant-decision; conditions: Applies to employers and automated decision systems as defined in SB 947 for covered employees; statutory exceptions include specified collective-bargaining, national-security and other circumstances.
- What: From 2027-07-01, covered employers may not rely solely on an automated decision system to discipline or terminate an employee, and must corroborate specified outputs with a human when those outputs are primarily relied upon. Employers must give employees notice after covered use and provide a description of relevant data on request; the Act also prohibits specified uses of automated systems in employment decisions.
- Controls: human_oversight, transparency_notice, contest_and_appeal, audit_log
- Source: https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB947
