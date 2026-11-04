# Colorado ADMT Act and Chatbot Safety Act (US-CO)

As of 2026-11-04. Review: draft-unreviewed. Binding. SB 24-205's delayed duties apply during the transition through 2026-12-31; SB 26-189 and HB 26-1263's main duties apply from 2027-01-01. Proposed AG rules had a 2026-10-26 hearing; final rules were not confirmed by 2026-11-04.

## AGC-US-CO-SB24205-1702: Use reasonable care and document high-risk systems
- Rule: Colorado AI Act (2024) C.R.S. § 6-1-1702 (SB 24-205 version) · status applicable · applies from 2026-06-30 · confidence high
- Who: roles developer; uses significant-decision, hiring, credit, education, healthcare, insurance, essential-services, critical-infrastructure, justice, migration; conditions: High-risk AI systems making or substantially influencing a consequential decision; these predecessor duties apply during the transition before 2027-01-01.
- What: Developers of high-risk AI systems must use reasonable care to protect consumers from known or reasonably foreseeable risks of algorithmic discrimination and provide downstream deployers with required system documentation. The original law also requires disclosure of discovered algorithmic discrimination to the Attorney General and known downstream developers or deployers within 90 days.
- Controls: risk_management, bias_testing, technical_documentation, incident_reporting
- Source: https://leg.colorado.gov/laws/session-laws/SB24-205/198/download

## AGC-US-CO-SB24205-1703: Run risk management and impact assessments for high-risk AI
- Rule: Colorado AI Act (2024) C.R.S. § 6-1-1703 (SB 24-205 version) · status applicable · applies from 2026-06-30 · confidence high
- Who: roles deployer; uses significant-decision, hiring, credit, education, healthcare, insurance, essential-services, critical-infrastructure, justice, migration; conditions: High-risk AI systems making or substantially influencing consequential decisions; predecessor duties apply only until the successor framework takes effect on 2027-01-01.
- What: Deployers of high-risk AI systems must use reasonable care to protect consumers from algorithmic-discrimination risks and implement a risk-management policy and program. They must complete an impact assessment before deployment and at least annually, and within 90 days after an intentional and substantial modification, subject to statutory exceptions.
- Controls: risk_management, impact_assessment, bias_testing
- Source: https://leg.colorado.gov/laws/session-laws/SB24-205/198/download

## AGC-US-CO-SB24205-1704: Notify consumers and publish high-risk system information
- Rule: Colorado AI Act (2024) C.R.S. §§ 6-1-1703(5), 6-1-1704 (SB 24-205 version) · status applicable · applies from 2026-06-30 · confidence high
- Who: roles deployer; uses significant-decision, hiring, credit, education, healthcare, insurance, essential-services, critical-infrastructure, justice, migration; conditions: High-risk AI systems deployed to make or substantially influence consequential decisions; predecessor duties apply until 2027-01-01.
- What: Deployers must provide the required consumer notice when a high-risk system is used for a consequential decision and publish a statement describing the types of high-risk systems they deploy and how they manage known algorithmic-discrimination risks. The statement must be updated at least annually, subject to statutory exceptions.
- Controls: transparency_notice, ai_disclosure
- Source: https://leg.colorado.gov/laws/session-laws/SB24-205/198/download

## AGC-US-CO-SB24205-1705: Mark and disclose synthetic content
- Rule: Colorado AI Act (2024) C.R.S. § 6-1-1705 (SB 24-205 version) · status applicable · applies from 2026-06-30 · confidence high
- Who: roles developer, deployer; uses generated-media, deepfake; conditions: Systems that generate or manipulate synthetic digital content, subject to the statutory exceptions.
- What: Developers of covered systems that generate or manipulate synthetic digital content must provide a machine-readable marker, to the extent technically feasible, and deployers must disclose to consumers that content is artificially generated or manipulated. This is a predecessor duty scheduled to be replaced on 2027-01-01.
- Controls: content_marking, deepfake_label
- Source: https://leg.colorado.gov/laws/session-laws/SB24-205/198/download

## AGC-US-CO-SB26189-1702: Give deployers usable documentation for covered ADMT
- Rule: Colorado ADMT Act C.R.S. § 6-1-1702(1)-(3) · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles developer; uses significant-decision, hiring, education, credit, insurance, healthcare, essential-services; conditions: A covered ADMT materially influences a consequential decision in education, employment, housing, financial/lending services, insurance, health-care services, or essential government services; statutory definition excludes specified ordinary tools and human-review-only tasks.
- What: Developers must provide each deployer with an understandable statement of intended and known harmful uses, known training-data categories, limitations and risks, instructions for appropriate use, monitoring and meaningful human review, and information reasonably needed for deployer disclosures. They must give timely notice of material updates, substantial modifications, or changes to intended use, limitations, or risk mitigation; the detailed documentation duties apply only to uses marketed, advertised, configured, contracted, sold, or licensed for consequential decisions.
- Controls: technical_documentation, transparency_notice, human_oversight, risk_management
- Source: https://leg.colorado.gov/laws/session-laws/SB26-189/131/download

## AGC-US-CO-SB26189-1702-RECORDS: Keep developer and deployer compliance records
- Rule: Colorado ADMT Act C.R.S. §§ 6-1-1702(4), 6-1-1703 · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles developer, deployer; uses significant-decision; conditions: Covered ADMT used to materially influence a consequential decision; longer retention applies when required by other law.
- What: Developers must retain records reasonably necessary to demonstrate compliance for at least three years after creating each record. Deployers must retain records reasonably necessary to demonstrate compliance for at least three years after the consequential decision, including relevant system-version, change-log, and mitigation records.
- Controls: audit_log, technical_documentation
- Source: https://leg.colorado.gov/laws/session-laws/SB26-189/131/download

## AGC-US-CO-SB26189-1704-1: Tell consumers before covered ADMT influences a decision
- Rule: Colorado ADMT Act C.R.S. § 6-1-1704(1)-(2) · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles deployer; uses significant-decision, hiring, education, credit, insurance, healthcare, essential-services; conditions: The covered ADMT materially influences a consequential decision affecting the consumer; housing is also a covered domain.
- What: Before using covered ADMT to materially influence a consequential decision, a deployer must give the consumer clear and conspicuous notice that the decision uses ADMT and instructions for obtaining further information. A prominent public notice reasonably accessible near consumer interactions may satisfy this requirement.
- Controls: transparency_notice, ai_disclosure
- Source: https://leg.colorado.gov/laws/session-laws/SB26-189/131/download

## AGC-US-CO-SB26189-1704-3: Explain the ADMT role after an adverse outcome
- Rule: Colorado ADMT Act C.R.S. § 6-1-1704(3) · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles deployer; uses significant-decision, hiring, education, credit, insurance, healthcare, essential-services; conditions: A covered ADMT materially influences a consequential decision that results in an adverse outcome for a consumer; housing is also a covered domain.
- What: Within 30 days after an adverse outcome, the deployer must give a plain-language description of the consequential decision and ADMT's role, a simple process for requesting more information about the system and inputs, and an explanation of the consumer's data-correction and human-review rights. The statute does not itself require a full individualized rationale for why the outcome occurred; federal-law, trade-secret, and other statutory limits apply.
- Controls: transparency_notice, contest_and_appeal
- Source: https://leg.colorado.gov/laws/session-laws/SB26-189/131/download

## AGC-US-CO-SB26189-1705: Offer data correction and meaningful human review on request
- Rule: Colorado ADMT Act C.R.S. § 6-1-1705(1) · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles deployer; uses significant-decision, hiring, education, credit, insurance, healthcare, essential-services; conditions: Consumer experienced an adverse outcome from a consequential decision materially influenced by covered ADMT; meaningful review is subject to commercial reasonableness and statutory exceptions.
- What: After an adverse outcome materially influenced by covered ADMT, a consumer may request instructions for accessing and correcting factually incorrect or materially inaccurate personal data used in the decision, plus an opportunity for meaningful human review and reconsideration to the extent commercially reasonable. The right does not require correction of opinions, predictions, scores, or protected evaluations; education deployers subject to FERPA may use existing compliant processes.
- Controls: contest_and_appeal, transparency_notice, human_oversight
- Source: https://leg.colorado.gov/laws/session-laws/SB26-189/131/download

## AGC-US-CO-HB261263-1708-2: Estimate ages and protect minor chatbot users
- Rule: Colorado Chatbot Safety Act C.R.S. § 6-1-1708(2) · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles any; uses chatbot, companion, minors; conditions: Operator develops and makes publicly available or offers a conversational AI service accessible to the general public that primarily simulates human conversation; minor means under 18, and an estimated age/range is treated as knowledge.
- What: Operators must use commercially reasonable or generally accepted methods to estimate account-holder and user ages and may not willfully disregard clear and convincing evidence that a person is a minor. When the operator knows a user is a minor, it must give the required AI disclosure, avoid unpredictable engagement rewards, use technically feasible protections against specified sexual content and intimate depictions, take reasonable measures against simulated emotional dependence, stop explicit sexual exchanges, comply with minor-privacy duties, and provide privacy and account controls to minors and their parents or guardians.
- Controls: minors_protection, privacy_compliance, user_controls, content_moderation, ai_disclosure
- Source: https://leg.colorado.gov/laws/session-laws/HB26-1263/208/download

## AGC-US-CO-HB261263-1708-3: Disclose that a conversational AI service is AI
- Rule: Colorado Chatbot Safety Act C.R.S. § 6-1-1708(3) · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles any; uses chatbot, companion, minors; conditions: Operators of covered conversational AI services; separate disclosure format applies to known minor users under § 6-1-1708(2)(a).
- What: Operators must clearly and conspicuously tell users that the service is artificial intelligence. The disclosure must appear at the beginning of the user's first interaction each calendar day, at least once every three hours in a continuous interaction or persistently on screen, and in response to a user's question about whether it is AI rather than human.
- Controls: ai_disclosure
- Source: https://leg.colorado.gov/laws/session-laws/HB26-1263/208/download

## AGC-US-CO-HB261263-1708-4-6: Respond to suicide and self-harm prompts and report annually
- Rule: Colorado Chatbot Safety Act C.R.S. § 6-1-1708(4), (6) · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles any; uses chatbot, companion, minors; conditions: Operators of covered conversational AI services; the first annual reporting date is 2027-07-01 and the report must not contain user identifiers or personal information.
- What: Operators must implement a protocol for responses to user prompts about suicidal ideation or self-harm, including referral to an appropriate crisis service (not law enforcement) and escalation for repeated or severe indicators. Beginning 2027-07-01, operators must report annually to the Attorney General the referral count, relevant protocols and AG-requested efficacy metrics, without user identifiers or personal information, using evidence-based measurement methods.
- Controls: content_moderation, incident_reporting, minors_protection
- Source: https://leg.colorado.gov/laws/session-laws/HB26-1263/208/download

## AGC-US-CO-HB261263-1708-5: Do not misrepresent chatbot outputs as professional services
- Rule: Colorado Chatbot Safety Act C.R.S. § 6-1-1708(5) · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles any; uses chatbot, companion; conditions: Operators of covered conversational AI services.
- What: Operators may not knowingly or recklessly state that chatbot output is provided by, endorsed by, or equivalent to services provided by a licensed health-care or legal professional, a licensed/certified/registered mental-health professional, or a qualified dietitian.
- Controls: prohibited_practices_screen
- Source: https://leg.colorado.gov/laws/session-laws/HB26-1263/208/download
