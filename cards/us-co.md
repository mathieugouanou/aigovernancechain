# Colorado ADMT Act and Chatbot Safety Act

> Colorado's successor ADMT law requires developer documentation, deployer notices and consumer recourse for consequential decisions; a separate law governs public conversational AI and minors.

**Jurisdiction:** Colorado (`US-CO`) · **As of:** 4 Nov 2026 · **Review:** draft-unreviewed ([reviewer seat open](../REVIEWERS.md))

**Who it hits:** Colorado developers and deployers of automated decision-making technology used in consequential decisions, plus operators of public conversational AI services, including services used by minors.

**Status:** Binding. SB 24-205's delayed duties apply during the transition through 2026-12-31; SB 26-189 and HB 26-1263's main duties apply from 2027-01-01. Proposed AG rules had a 2026-10-26 hearing; final rules were not confirmed by 2026-11-04.

## Instruments

| Instrument | Force | Status | Penalties |
|---|---|---|---|
| [Colorado AI Act (2024)](https://leg.colorado.gov/laws/session-laws/SB24-205/198/download): Senate Bill 24-205, Consumer Protections for Artificial Intelligence Systems | binding | in-force | Violations were deceptive trade practices enforceable by the Colorado Attorney General or district attorneys; the Colorado Consumer Protection Act generally allows up to $20,000 per violation (up to $50,000 for a violation against an elderly person). |
| [Colorado ADMT Act](https://leg.colorado.gov/laws/session-laws/SB26-189/131/download): Senate Bill 26-189, Automated Decision-Making Technology in Consequential Decisions | binding | partially-applicable | A Part 17 violation is a deceptive trade practice. The Attorney General enforces through the Colorado Consumer Protection Act; violations of §§ 6-1-1702 to 1705 are enforceable exclusively by the Attorney General. The general CCPA ceiling is $20,000 per violation ($50,000 for a violation against an elderly person), with a separate violation for each consumer or transaction. Before 2030, the Attorney General generally gives 60 days to cure if a cure is possible, but not for knowing or repeated violations; the Act creates no new private right of action and preserves existing remedies under other law. |
| [Colorado Chatbot Safety Act](https://leg.colorado.gov/laws/session-laws/HB26-1263/208/download): House Bill 26-1263, Conversational Artificial Intelligence Service Operator Requirements | binding | in-force | Violations are deceptive trade practices under the Colorado Consumer Protection Act; the general CCPA civil penalty ceiling is $20,000 per violation ($50,000 for a violation against an elderly person), with a separate violation for each consumer or transaction. The statutory duties in § 6-1-1708 generally begin 2027-01-01. |

## Key dates

- **2024-05-17** (passed) Colorado AI Act (2024): SB 24-205 was signed; its high-risk AI duties were initially scheduled for 2026-02-01
- **2025-11-25** (passed) Colorado AI Act (2024): SB 25B-004 took effect and delayed SB 24-205 requirements until 2026-06-30
- **2026-05-14** (passed) Colorado ADMT Act: SB 26-189 was signed; specified rulemaking and procedural provisions took effect upon passage
- **2026-06-30** (passed) Mark and disclose synthetic content (Colorado AI Act (2024) C.R.S. § 6-1-1705 (SB 24-205 version))
- **2026-06-30** (passed) Notify consumers and publish high-risk system information (Colorado AI Act (2024) C.R.S. §§ 6-1-1703(5), 6-1-1704 (SB 24-205 version))
- **2026-06-30** (passed) Run risk management and impact assessments for high-risk AI (Colorado AI Act (2024) C.R.S. § 6-1-1703 (SB 24-205 version))
- **2026-06-30** (passed) Use reasonable care and document high-risk systems (Colorado AI Act (2024) C.R.S. § 6-1-1702 (SB 24-205 version))
- **2026-08-11** (passed) Colorado ADMT Act: Department of Law filed proposed ADMT and chatbot rules
- **2026-08-12** (passed) Colorado Chatbot Safety Act: HB 26-1263 took effect as an Act
- **2026-10-06** (passed) Colorado ADMT Act: Interim draft rules were released
- **2026-10-26** (passed) Colorado ADMT Act: Formal rulemaking hearing on proposed 4 CCR 904-6 rules
- **2027-01-01** Main chatbot operator duties begin
- **2027-01-01** SB 26-189 successor duties apply and Attorney General rules on disclosures and consumer rights are due
- **2027-07-01** First annual chatbot safety report to the Attorney General
- **2030-01-01** Colorado ADMT Act: SB 26-189's 60-day cure provision is repealed effective this date

## Obligations (13)

| ID | Article | Obligation | Applies from | Status | Controls | Confidence |
|---|---|---|---|---|---|---|
| `AGC-US-CO-SB24205-1702` | [C.R.S. § 6-1-1702 (SB 24-205 version)](https://leg.colorado.gov/laws/session-laws/SB24-205/198/download) | **Use reasonable care and document high-risk systems**: Developers of high-risk AI systems must use reasonable care to protect consumers from known or reasonably foreseeable risks of algorithmic discrimination and provide downstream deployers with required system documentation. The original law also requires disclosure of discovered algorithmic discrimination to the Attorney General and known downstream developers or deployers within 90 days. | 2026-06-30 | applicable | risk_management, bias_testing, technical_documentation, incident_reporting | high |
| `AGC-US-CO-SB24205-1703` | [C.R.S. § 6-1-1703 (SB 24-205 version)](https://leg.colorado.gov/laws/session-laws/SB24-205/198/download) | **Run risk management and impact assessments for high-risk AI**: Deployers of high-risk AI systems must use reasonable care to protect consumers from algorithmic-discrimination risks and implement a risk-management policy and program. They must complete an impact assessment before deployment and at least annually, and within 90 days after an intentional and substantial modification, subject to statutory exceptions. | 2026-06-30 | applicable | risk_management, impact_assessment, bias_testing | high |
| `AGC-US-CO-SB24205-1704` | [C.R.S. §§ 6-1-1703(5), 6-1-1704 (SB 24-205 version)](https://leg.colorado.gov/laws/session-laws/SB24-205/198/download) | **Notify consumers and publish high-risk system information**: Deployers must provide the required consumer notice when a high-risk system is used for a consequential decision and publish a statement describing the types of high-risk systems they deploy and how they manage known algorithmic-discrimination risks. The statement must be updated at least annually, subject to statutory exceptions. | 2026-06-30 | applicable | transparency_notice, ai_disclosure | high |
| `AGC-US-CO-SB24205-1705` | [C.R.S. § 6-1-1705 (SB 24-205 version)](https://leg.colorado.gov/laws/session-laws/SB24-205/198/download) | **Mark and disclose synthetic content**: Developers of covered systems that generate or manipulate synthetic digital content must provide a machine-readable marker, to the extent technically feasible, and deployers must disclose to consumers that content is artificially generated or manipulated. This is a predecessor duty scheduled to be replaced on 2027-01-01. | 2026-06-30 | applicable | content_marking, deepfake_label | high |
| `AGC-US-CO-SB26189-1702` | [C.R.S. § 6-1-1702(1)-(3)](https://leg.colorado.gov/laws/session-laws/SB26-189/131/download) | **Give deployers usable documentation for covered ADMT**: Developers must provide each deployer with an understandable statement of intended and known harmful uses, known training-data categories, limitations and risks, instructions for appropriate use, monitoring and meaningful human review, and information reasonably needed for deployer disclosures. They must give timely notice of material updates, substantial modifications, or changes to intended use, limitations, or risk mitigation; the detailed documentation duties apply only to uses marketed, advertised, configured, contracted, sold, or licensed for consequential decisions. | 2027-01-01 | not-yet-applicable | technical_documentation, transparency_notice, human_oversight, risk_management | high |
| `AGC-US-CO-SB26189-1702-RECORDS` | [C.R.S. §§ 6-1-1702(4), 6-1-1703](https://leg.colorado.gov/laws/session-laws/SB26-189/131/download) | **Keep developer and deployer compliance records**: Developers must retain records reasonably necessary to demonstrate compliance for at least three years after creating each record. Deployers must retain records reasonably necessary to demonstrate compliance for at least three years after the consequential decision, including relevant system-version, change-log, and mitigation records. | 2027-01-01 | not-yet-applicable | audit_log, technical_documentation | high |
| `AGC-US-CO-SB26189-1704-1` | [C.R.S. § 6-1-1704(1)-(2)](https://leg.colorado.gov/laws/session-laws/SB26-189/131/download) | **Tell consumers before covered ADMT influences a decision**: Before using covered ADMT to materially influence a consequential decision, a deployer must give the consumer clear and conspicuous notice that the decision uses ADMT and instructions for obtaining further information. A prominent public notice reasonably accessible near consumer interactions may satisfy this requirement. | 2027-01-01 | not-yet-applicable | transparency_notice, ai_disclosure | high |
| `AGC-US-CO-SB26189-1704-3` | [C.R.S. § 6-1-1704(3)](https://leg.colorado.gov/laws/session-laws/SB26-189/131/download) | **Explain the ADMT role after an adverse outcome**: Within 30 days after an adverse outcome, the deployer must give a plain-language description of the consequential decision and ADMT's role, a simple process for requesting more information about the system and inputs, and an explanation of the consumer's data-correction and human-review rights. The statute does not itself require a full individualized rationale for why the outcome occurred; federal-law, trade-secret, and other statutory limits apply. | 2027-01-01 | not-yet-applicable | transparency_notice, contest_and_appeal | high |
| `AGC-US-CO-SB26189-1705` | [C.R.S. § 6-1-1705(1)](https://leg.colorado.gov/laws/session-laws/SB26-189/131/download) | **Offer data correction and meaningful human review on request**: After an adverse outcome materially influenced by covered ADMT, a consumer may request instructions for accessing and correcting factually incorrect or materially inaccurate personal data used in the decision, plus an opportunity for meaningful human review and reconsideration to the extent commercially reasonable. The right does not require correction of opinions, predictions, scores, or protected evaluations; education deployers subject to FERPA may use existing compliant processes. | 2027-01-01 | not-yet-applicable | contest_and_appeal, transparency_notice, human_oversight | high |
| `AGC-US-CO-HB261263-1708-2` | [C.R.S. § 6-1-1708(2)](https://leg.colorado.gov/laws/session-laws/HB26-1263/208/download) | **Estimate ages and protect minor chatbot users**: Operators must use commercially reasonable or generally accepted methods to estimate account-holder and user ages and may not willfully disregard clear and convincing evidence that a person is a minor. When the operator knows a user is a minor, it must give the required AI disclosure, avoid unpredictable engagement rewards, use technically feasible protections against specified sexual content and intimate depictions, take reasonable measures against simulated emotional dependence, stop explicit sexual exchanges, comply with minor-privacy duties, and provide privacy and account controls to minors and their parents or guardians. | 2027-01-01 | not-yet-applicable | minors_protection, privacy_compliance, user_controls, content_moderation, ai_disclosure | high |
| `AGC-US-CO-HB261263-1708-3` | [C.R.S. § 6-1-1708(3)](https://leg.colorado.gov/laws/session-laws/HB26-1263/208/download) | **Disclose that a conversational AI service is AI**: Operators must clearly and conspicuously tell users that the service is artificial intelligence. The disclosure must appear at the beginning of the user's first interaction each calendar day, at least once every three hours in a continuous interaction or persistently on screen, and in response to a user's question about whether it is AI rather than human. | 2027-01-01 | not-yet-applicable | ai_disclosure | high |
| `AGC-US-CO-HB261263-1708-4-6` | [C.R.S. § 6-1-1708(4), (6)](https://leg.colorado.gov/laws/session-laws/HB26-1263/208/download) | **Respond to suicide and self-harm prompts and report annually**: Operators must implement a protocol for responses to user prompts about suicidal ideation or self-harm, including referral to an appropriate crisis service (not law enforcement) and escalation for repeated or severe indicators. Beginning 2027-07-01, operators must report annually to the Attorney General the referral count, relevant protocols and AG-requested efficacy metrics, without user identifiers or personal information, using evidence-based measurement methods. | 2027-01-01 | not-yet-applicable | content_moderation, incident_reporting, minors_protection | high |
| `AGC-US-CO-HB261263-1708-5` | [C.R.S. § 6-1-1708(5)](https://leg.colorado.gov/laws/session-laws/HB26-1263/208/download) | **Do not misrepresent chatbot outputs as professional services**: Operators may not knowingly or recklessly state that chatbot output is provided by, endorsed by, or equivalent to services provided by a licensed health-care or legal professional, a licensed/certified/registered mental-health professional, or a qualified dietitian. | 2027-01-01 | not-yet-applicable | prohibited_practices_screen | high |

## Start here

The controls this regime asks for most often. Declare them in your `AI_GOVERNANCE.md`:

- `transparency_notice`: Affected people get notice and explanation (5 obligations)
- `ai_disclosure`: People are told they are dealing with an AI (4 obligations)
- `risk_management`: Documented, ongoing risk management (3 obligations)
- `technical_documentation`: Technical documentation is kept up to date (3 obligations)
- `bias_testing`: Bias or disparate-impact testing (2 obligations)

## Check your system

```bash
npx github:mathieugouanou/aigovernancechain scope -j US-CO -r deployer -u chatbot
npx github:mathieugouanou/aigovernancechain deadlines -j US-CO --days 365
```

## Sources

- [Colorado SB 24-205 session law (Chapter 198)](https://leg.colorado.gov/laws/session-laws/SB24-205/198/download)
- [Colorado SB 25B-004 session law (Chapter 3), delaying SB 24-205 implementation](https://leg.colorado.gov/laws/session-laws/SB25B-004/3/download)
- [Colorado SB 26-189 session law (Chapter 131)](https://leg.colorado.gov/laws/session-laws/SB26-189/131/download)
- [Colorado HB 26-1263 session law (Chapter 208)](https://leg.colorado.gov/laws/session-laws/HB26-1263/208/download)
- [Colorado Attorney General: ADMT and Chatbot Safety rulemaking](https://coag.gov/ai/)
- [Colorado SB 25-282 session law amending CCPA civil penalties](https://leg.colorado.gov/laws/session-laws/SB25-282/412/download)

---

Generated from [`atlas/regimes/us-co.yaml`](../atlas/regimes/us-co.yaml). Edit the YAML, not this card. Draft open data under CC BY 4.0, not legal advice. [Report an error](https://github.com/mathieugouanou/aigovernancechain/issues/new?template=obligation-correction.yml).
