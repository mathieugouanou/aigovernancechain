# Vietnam AI Law

> Vietnam's AI law assigns duties by risk tier, with high-risk controls and conformity checks, AI-content transparency, and incident reporting.

**Jurisdiction:** Vietnam (`VN`) · **As of:** 4 Nov 2026 · **Review:** draft-unreviewed ([reviewer seat open](../REVIEWERS.md))

**Who it hits:** Vietnamese and foreign developers, providers, deployers and users participating in AI activities in Vietnam; public bodies and personal-data processors have additional duties.

**Status:** Binding and in force. Existing systems have staged transition deadlines of 1 March 2027 for most sectors and 1 September 2027 for healthcare, education and finance.

## Instruments

| Instrument | Force | Status | Penalties |
|---|---|---|---|
| [Vietnam AI Law](https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/01/luat134.signed.pdf): Law No. 134/2025/QH15 on Artificial Intelligence | binding | partially-applicable | Article 29 refers violations to administrative sanctions or criminal prosecution and provides for civil compensation; this Law does not state a numerical fine cap here. |
| [AI Law Implementing Decree](https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/4/142-2026-ndcp.signed.pdf): Decree No. 142/2026/ND-CP detailing provisions and implementation measures for the Law on Artificial Intelligence | binding | in-force | n/a |
| [High-Risk AI List](https://congbaocdn.chinhphu.vn/180507251028987904/2026/7/14/469951-1784024086_v1_1784024564_signed.pdf): Decision No. 33/2026/QD-TTg promulgating the List of High-Risk AI Systems | binding | in-force | n/a |
| [Personal Data Protection Law](https://congbao.chinhphu.vn/van-ban/luat-so-91-2025-qh15-45578.htm): Law No. 91/2025/QH15 on Personal Data Protection | binding | in-force | n/a |

## Key dates

- **2025-12-10** (passed) Vietnam AI Law: Adopted by the National Assembly
- **2026-01-01** (passed) Personal Data Protection Law: Personal Data Protection Law enters into force
- **2026-01-01** (passed) Protect personal data processed using AI (Personal Data Protection Law Art. 30(1)-(5))
- **2026-03-01** (passed) Assess conformity of high-risk AI before use and after significant changes (Vietnam AI Law Art. 13; Decree 142, Art. 13; Decision 33/2026/QD-TTg)
- **2026-03-01** (passed) Assess public-sector AI impacts before qualifying use (AI Law Implementing Decree Art. 27(3)-(4) of the AI Law; Decree 142, Art. 20)
- **2026-03-01** (passed) Classify AI by risk and notify medium- and high-risk systems (Vietnam AI Law Art. 9-10; Decree 142, Arts. 5-6, 11-12 and 14)
- **2026-03-01** (passed) Disclose AI interactions and machine-mark generated audio, images and video (Vietnam AI Law Art. 11(1)-(2); Decree 142, Art. 17)
- **2026-03-01** (passed) Do not use AI for prohibited or unlawful purposes (Vietnam AI Law Art. 7(1)-(6))
- **2026-03-01** (passed) Foreign high-risk providers must maintain a Vietnam contact point (Vietnam AI Law Art. 14(6))
- **2026-03-01** (passed) Manage high-risk systems with documented controls and human oversight (Vietnam AI Law Art. 14(1)-(5); Decree 142, Art. 15)
- **2026-03-01** (passed) Notify the public and visibly label potentially misleading AI content (Vietnam AI Law Art. 11(3)-(5); Decree 142, Art. 18)
- **2026-03-01** (passed) Vietnam AI Law: Law enters into force
- **2026-04-30** (passed) AI Law Implementing Decree: Decree issued
- **2026-05-01** (passed) AI Law Implementing Decree: Decree enters into force
- **2026-05-01** (passed) Contain and report serious AI incidents on time (AI Law Implementing Decree Art. 12 of the AI Law; Decree 142, Art. 19(2)-(8))
- **2026-06-30** (passed) High-Risk AI List: Decision issued
- **2026-08-15** (passed) High-Risk AI List: High-risk list and criteria take effect
- **2027-03-01** Complete transition compliance for pre-existing AI systems outside healthcare, education and finance, and qualifying legacy systems under Decision 33
- **2027-09-01** Complete transition compliance for pre-existing AI systems in healthcare, education and finance

## Obligations (10)

| ID | Article | Obligation | Applies from | Status | Controls | Confidence |
|---|---|---|---|---|---|---|
| `AGC-VN-AILAW-7` | [Art. 7(1)-(6)](https://en.baochinhphu.vn/viet-nams-law-on-artificial-intelligence-111260715113551787.htm) | **Do not use AI for prohibited or unlawful purposes**: The Law prohibits using AI to commit illegal acts or violate others' lawful interests; to systematically deceive or manipulate people through synthetic simulations of real persons or events where serious harm results; to exploit vulnerable groups to cause harm; or to create or spread falsified content capable of seriously harming national security, public order or social safety. It also prohibits unlawful data use, disabling required human oversight, and concealing or falsifying mandatory transparency information, labels or warnings. | 2026-03-01 | applicable | prohibited_practices_screen, privacy_compliance | high |
| `AGC-VN-AILAW-9-10` | [Art. 9-10; Decree 142, Arts. 5-6, 11-12 and 14](https://en.baochinhphu.vn/viet-nams-law-on-artificial-intelligence-111260715113551787.htm) | **Classify AI by risk and notify medium- and high-risk systems**: Providers must classify each AI system before putting it into use. The Law distinguishes high-, medium- and low-risk systems; providers must prepare classification dossiers and notify the Ministry of Science and Technology before service for medium- and high-risk systems. Deployers take over the provider's classification and must cooperate in reclassification when a deployment change, integration or modified function or purpose creates new or higher risk. | 2026-03-01 | applicable | risk_management, technical_documentation, registration | high |
| `AGC-VN-AILAW-11-1-2` | [Art. 11(1)-(2); Decree 142, Art. 17](https://en.baochinhphu.vn/viet-nams-law-on-artificial-intelligence-111260715113551787.htm) | **Disclose AI interactions and machine-mark generated audio, images and video**: Providers must ensure that people interacting directly with an AI system are informed they are interacting with AI. Providers must also apply machine-readable technical marks to AI-generated or edited audio, image and video outputs, using a method permitted by the Decree and maintaining the marking through generation and export within the system's control. | 2026-03-01 | applicable | ai_disclosure, content_marking | high |
| `AGC-VN-AILAW-11-3-4` | [Art. 11(3)-(5); Decree 142, Art. 18](https://en.baochinhphu.vn/viet-nams-law-on-artificial-intelligence-111260715113551787.htm) | **Notify the public and visibly label potentially misleading AI content**: Deployers must clearly notify the public when releasing AI-generated or edited text, audio, images or video that could confuse people about the authenticity of an event or person. They must visibly label AI audio, image or video that simulates a real person's appearance or voice, or recreates a real event, so it can be distinguished from authentic content. | 2026-03-01 | applicable | transparency_notice, deepfake_label | high |
| `AGC-VN-D142-19` | [Art. 12 of the AI Law; Decree 142, Art. 19(2)-(8)](https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/4/142-2026-ndcp.signed.pdf) | **Contain and report serious AI incidents on time**: Developers and providers must promptly take technical measures to correct, suspend or recall a system and notify the competent authority; deployers and users must record incidents, limit harm and notify the provider. A provider, or a deployer unable to contact the provider, must make a preliminary report within 72 hours after confirming an urgent serious incident (including death or serious health harm, serious public service disruption or national-security effects, and uncontrolled rights harm); other serious incidents are due within five working days. A final remediation report is due within 15 days after the preliminary report. | 2026-05-01 | applicable | incident_reporting, audit_log, post_market_monitoring | high |
| `AGC-VN-AILAW-13` | [Art. 13; Decree 142, Art. 13; Decision 33/2026/QD-TTg](https://en.baochinhphu.vn/viet-nams-law-on-artificial-intelligence-111260715113551787.htm) | **Assess conformity of high-risk AI before use and after significant changes**: Providers of high-risk systems must complete conformity assessment before putting the system into service and reassess after significant changes that affect the original result. Systems on the Prime Minister's list requiring mandatory certification need assessment by a registered or recognized conformity-assessment organization; other high-risk systems may be self-assessed by the provider or assessed by such an organization. Providers must maintain conformity and disclose assessment results as required by the Decree. | 2026-03-01 | applicable | conformity_assessment, technical_documentation | high |
| `AGC-VN-AILAW-14` | [Art. 14(1)-(5); Decree 142, Art. 15](https://en.baochinhphu.vn/viet-nams-law-on-artificial-intelligence-111260715113551787.htm) | **Manage high-risk systems with documented controls and human oversight**: Providers of high-risk systems must maintain risk-management measures, govern training, testing and operational data, keep technical dossiers and logs, design for human oversight and intervention, meet transparency and incident duties, and give deployers and affected people functional information, operating guidance and risk warnings without disclosing source code or protected business secrets. Deployers must use systems within their classified purpose and risk, monitor operation, protect data, enable human intervention, control emerging risks and cooperate with providers and authorities. | 2026-03-01 | applicable | risk_management, data_governance, technical_documentation, audit_log, human_oversight, transparency_notice, privacy_compliance | high |
| `AGC-VN-AILAW-14-6` | [Art. 14(6)](https://en.baochinhphu.vn/viet-nams-law-on-artificial-intelligence-111260715113551787.htm) | **Foreign high-risk providers must maintain a Vietnam contact point**: A foreign provider whose high-risk AI system is provided in Vietnam must have a legal contact point in Vietnam. If the system is subject to mandatory conformity certification before it is put into service, the provider must also have a commercial presence or an authorized representative in Vietnam. | 2026-03-01 | applicable | local_representative | high |
| `AGC-VN-D142-20` | [Art. 27(3)-(4) of the AI Law; Decree 142, Art. 20](https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/4/142-2026-ndcp.signed.pdf) | **Assess public-sector AI impacts before qualifying use**: State agencies must prepare an impact-assessment report before using a high-risk AI system or a system whose output is directly used as the basis for an administrative decision. The report must identify and assess risks, state control and mitigation measures, and explain human oversight and intervention; agencies must publish it except for state secrets, business secrets and personal data, and reassess after relevant changes create new or changed risks. | 2026-03-01 | applicable | impact_assessment, human_oversight, transparency_notice, risk_management | high |
| `AGC-VN-PDPL-30` | [Art. 30(1)-(5)](https://congbao.chinhphu.vn/van-ban/luat-so-91-2025-qh15-45578.htm) | **Protect personal data processed using AI**: Personal data in AI processing must be used for the stated purpose and limited to what is necessary, with appropriate security measures, authentication and access controls. Personal-data processing by AI must be classified by risk level so appropriate protections can be applied; the Law prohibits using or developing AI systems involving personal data to harm national defense, security, public order or safety, or another person's life, health, dignity, reputation or property. | 2026-01-01 | applicable | privacy_compliance, risk_management, data_governance, prohibited_practices_screen | high |

## Start here

The controls this regime asks for most often. Declare them in your `AI_GOVERNANCE.md`:

- `risk_management`: Documented, ongoing risk management (4 obligations)
- `privacy_compliance`: Personal-data law duties linked to the AI use (3 obligations)
- `technical_documentation`: Technical documentation is kept up to date (3 obligations)
- `transparency_notice`: Affected people get notice and explanation (3 obligations)
- `prohibited_practices_screen`: Use case screened against banned practices (2 obligations)

## Check your system

```bash
npx github:mathieugouanou/aigovernancechain scope -j VN -r deployer -u chatbot
npx github:mathieugouanou/aigovernancechain deadlines -j VN --days 365
```

## Sources

- [Law No. 134/2025/QH15 on Artificial Intelligence — official English translation](https://en.baochinhphu.vn/viet-nams-law-on-artificial-intelligence-111260715113551787.htm)
- [Law No. 134/2025/QH15 — official signed text and metadata](https://vanban.chinhphu.vn/?docid=216334&pageid=27160)
- [Decree No. 142/2026/ND-CP — official signed text and metadata](https://vanban.chinhphu.vn/?pageid=27160&docid=218029)
- [Decision No. 33/2026/QD-TTg — official signed text](https://congbaocdn.chinhphu.vn/180507251028987904/2026/7/14/469951-1784024086_v1_1784024564_signed.pdf)
- [Law No. 91/2025/QH15 on Personal Data Protection — official gazette record](https://congbao.chinhphu.vn/van-ban/luat-so-91-2025-qh15-45578.htm)
- [Law No. 71/2025/QH15 on Digital Technology Industry — official gazette record](https://congbao.chinhphu.vn/van-ban/luat-so-71-2025-qh15-45555.htm)

---

Generated from [`atlas/regimes/vn.yaml`](../atlas/regimes/vn.yaml). Edit the YAML, not this card. Draft open data under CC BY 4.0, not legal advice. [Report an error](https://github.com/mathieugouanou/aigovernancechain/issues/new?template=obligation-correction.yml).
