# India AI Governance, Intermediary and Data Rules

> India combines voluntary AI governance guidance with binding intermediary duties and a phased personal-data protection regime.

**Jurisdiction:** India (`IN`) · **As of:** 4 Nov 2026 · **Review:** draft-unreviewed ([reviewer seat open](../REVIEWERS.md))

**Who it hits:** AI developers and deployers, intermediaries handling synthetic media, and Data Fiduciaries processing digital personal data in India or offering goods or services to people in India.

**Status:** Binding synthetic-media intermediary rules apply from 20 Feb 2026. DPDP institutional provisions began 13 Nov 2025; the Consent Manager phase starts 13 Nov 2026 and most substantive data duties start 13 May 2027. India AI Governance Guidelines remain voluntary.

## Instruments

| Instrument | Force | Status | Penalties |
|---|---|---|---|
| [India AI Governance Guidelines](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc2025115685601.pdf): India AI Governance Guidelines (2025) | voluntary | voluntary | n/a |
| [IT Intermediary Rules](https://www.meity.gov.in/static/uploads/2026/03/0b576f2071694b52e4cd6bb1b6dfab1e.pdf): Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, as amended by G.S.R. 120(E) and corrected by G.S.R. 148(E) | binding | in-force | Failure to observe due diligence can remove an intermediary’s exemption from liability under section 79(1) of the Information Technology Act (Rule 7); other liability may arise under applicable laws. These Rules do not set a single stand-alone fine for the duties listed here. |
| [DPDP Act](https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf): Digital Personal Data Protection Act, 2023 | binding | partially-applicable | Up to INR 250 crore for failure to take reasonable security safeguards, INR 200 crore for breach-notification failures, INR 150 crore for breach of Significant Data Fiduciary duties, and INR 50 crore for other Act or Rules breaches (section 33 and Schedule). |
| [DPDP Rules](https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf): Digital Personal Data Protection Rules, 2025 (G.S.R. 846(E)), as corrected by G.S.R. 892(E) | binding | partially-applicable | As provided by the DPDP Act, including the statutory maximums for the corresponding Act duties. |

## Key dates

- **2025-11-05** (passed) India AI Governance Guidelines: MeitY releases the India AI Governance Guidelines
- **2025-11-05** (passed) Use the voluntary India AI governance principles and practices (India AI Governance Guidelines, Parts 1–4)
- **2025-11-13** (passed) DPDP Act: Initial institutional and procedural provisions commence under G.S.R. 843(E)
- **2025-11-13** (passed) DPDP Rules: Rules 1, 2 and 17 to 21 commence on Gazette publication
- **2025-12-10** (passed) DPDP Rules: G.S.R. 892(E) makes textual corrections to the Rules notification
- **2026-02-10** (passed) IT Intermediary Rules: G.S.R. 120(E) notifies the 2026 amendments, including synthetic-information duties
- **2026-02-20** (passed) Act on specified unlawful-content orders within three hours (IT Intermediary Rules Rule 3(1)(d))
- **2026-02-20** (passed) IT Intermediary Rules: 2026 IT Rules amendments enter into force
- **2026-02-20** (passed) Prevent unlawful synthetic media and label other synthetic information (IT Intermediary Rules Rule 3(3)(a)(i)–(ii) and Rule 3(3)(b))
- **2026-02-20** (passed) Remove specified intimate or impersonating content within two hours of complaint (IT Intermediary Rules Rule 3(2)(b))
- **2026-02-20** (passed) Resolve intermediary grievances within seven days (IT Intermediary Rules Rule 3(2)(a)(i))
- **2026-02-20** (passed) Verify synthetic-media declarations before SSMI publication (IT Intermediary Rules Rule 4(1A))
- **2026-02-26** (passed) IT Intermediary Rules: G.S.R. 148(E) corrects statutory references in the February amendment
- **2026-11-13** DPDP Consent Manager phase begins (Act sections 6(9), 27(1)(d) and Rule 4)
- **2027-05-13** Most substantive DPDP Act and Rules duties apply

## Obligations (9)

| ID | Article | Obligation | Applies from | Status | Controls | Confidence |
|---|---|---|---|---|---|---|
| `AGC-IN-AIGG-1` | [India AI Governance Guidelines, Parts 1–4](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc2025115685601.pdf) | **Use the voluntary India AI governance principles and practices**: The Guidelines set out seven principles, recommendations across six governance pillars, an action plan and proposed institutional coordination and technical-support arrangements. They recommend that AI developers and deployers comply with existing Indian laws and voluntarily adopt measures such as risk mitigation, transparency, grievance redressal and responsible-AI practices; they do not create binding duties or a new horizontal AI law. | 2025-11-05 | voluntary | risk_management, impact_assessment, transparency_notice | high |
| `AGC-IN-ITR-3-3-A-I-II` | [Rule 3(3)(a)(i)–(ii) and Rule 3(3)(b)](https://www.meity.gov.in/static/uploads/2026/03/0b576f2071694b52e4cd6bb1b6dfab1e.pdf) | **Prevent unlawful synthetic media and label other synthetic information**: Intermediaries offering a computer resource that can enable creation or dissemination of synthetically generated information (SGI) must use reasonable and appropriate technical measures to prevent SGI that violates applicable law. Other SGI must carry a prominent visible label, or a prefixed disclosure for audio, and, to the extent technically feasible, permanent metadata or another provenance mechanism including a unique identifier; intermediaries must not enable removal or suppression of those labels or markers. | 2026-02-20 | applicable | content_marking, deepfake_label, content_moderation | high |
| `AGC-IN-ITR-4-1-A` | [Rule 4(1A)](https://www.meity.gov.in/static/uploads/2026/03/0b576f2071694b52e4cd6bb1b6dfab1e.pdf) | **Verify synthetic-media declarations before SSMI publication**: Before permitting information to be displayed, uploaded or published, a significant social media intermediary (SSMI) must require users to declare whether it is SGI and deploy appropriate technical measures, including automated tools, to verify the declaration in light of the content’s nature, format and source. If a declaration or verification confirms SGI, the intermediary must clearly and prominently label it; knowingly permitting, promoting or failing to act on SGI in contravention of the Rules is deemed a failure of due diligence. | 2026-02-20 | applicable | content_marking, content_moderation, audit_log | high |
| `AGC-IN-ITR-3-1-D` | [Rule 3(1)(d)](https://www.meity.gov.in/static/uploads/2026/03/0b576f2071694b52e4cd6bb1b6dfab1e.pdf) | **Act on specified unlawful-content orders within three hours**: When an intermediary receives actual knowledge of unlawful information through an order of a competent court or a written, reasoned intimation from an authorised government officer or agency, it must remove or disable access to the specified information within three hours. | 2026-02-20 | applicable | content_moderation, audit_log | high |
| `AGC-IN-ITR-3-2-B` | [Rule 3(2)(b)](https://www.meity.gov.in/static/uploads/2026/03/0b576f2071694b52e4cd6bb1b6dfab1e.pdf) | **Remove specified intimate or impersonating content within two hours of complaint**: On a complaint by an individual, or someone acting on the individual’s behalf, about content prima facie exposing private areas, showing nudity or sexual conduct, or impersonating the individual electronically (including artificially morphed images), an intermediary must take reasonable and practicable measures to remove or disable access within two hours. | 2026-02-20 | applicable | content_moderation | high |
| `AGC-IN-ITR-3-2-A-I` | [Rule 3(2)(a)(i)](https://www.meity.gov.in/static/uploads/2026/03/0b576f2071694b52e4cd6bb1b6dfab1e.pdf) | **Resolve intermediary grievances within seven days**: Intermediaries must acknowledge a grievance within 24 hours and resolve it within seven days of receipt. Specified requests to remove information or links under Rule 3(1)(b), subject to the listed exceptions, must be handled as expeditiously as possible and resolved within 36 hours. | 2026-02-20 | applicable | content_moderation, audit_log | high |
| `AGC-IN-DPDPA-4-6` | [Sections 4, 5 and 6](https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf) | **Use a lawful basis and give notice before requesting consent**: Personal data may be processed only for a lawful purpose on consent or a permitted legitimate-use basis. Before seeking consent, the Data Fiduciary must give notice describing the personal data and purpose and how the person may exercise rights and complain; consent must be free, specific, informed, unconditional and unambiguous, limited to data necessary for the specified purpose, and given by clear affirmative action. | 2027-05-13 | not-yet-applicable | privacy_compliance, transparency_notice, user_controls | high |
| `AGC-IN-DPDPA-8` | [Section 8(1)–(7); DPDP Rules 6 and 7](https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf) | **Govern processors, safeguard personal data and notify breaches**: A Data Fiduciary remains responsible for its own processing and processing on its behalf, may engage a Data Processor only under a valid contract, and must implement technical and organisational measures, protect personal data with reasonable security safeguards and notify the Board and affected people of breaches. Rules 6 and 7 specify safeguards such as access controls, logs, backups and processor-contract terms, prompt notice to affected people, and an initial Board intimation without delay followed by detailed information within 72 hours unless the Board allows longer. | 2027-05-13 | not-yet-applicable | privacy_compliance, audit_log, incident_reporting | high |
| `AGC-IN-DPR-13` | [DPDP Act section 10(2); DPDP Rules 13(1)–(4)](https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf) | **Significant Data Fiduciaries must assess and audit data and algorithms**: A notified Significant Data Fiduciary must appoint an India-based Data Protection Officer and an independent data auditor; Rule 13 requires a Data Protection Impact Assessment and audit at least every 12 months, with significant observations reported to the Board. It must also use due diligence to verify that its technical measures, including algorithmic software used for the listed personal-data operations, are not likely to risk Data Principals’ rights; any localisation condition applies only to personal data specified by the Central Government. | 2027-05-13 | not-yet-applicable | impact_assessment, privacy_compliance, risk_management | high |

## Start here

The controls this regime asks for most often. Declare them in your `AI_GOVERNANCE.md`:

- `content_moderation`: Notice-and-removal or moderation of harmful AI content (5 obligations)
- `audit_log`: Events and decisions are logged and kept (4 obligations)
- `privacy_compliance`: Personal-data law duties linked to the AI use (3 obligations)
- `content_marking`: Synthetic outputs carry machine-readable marking (2 obligations)
- `deepfake_label`: Visible label on deepfakes and AI-generated public-interest text (1 obligation)

## Check your system

```bash
npx github:mathieugouanou/aigovernancechain scope -j IN -r deployer -u chatbot
npx github:mathieugouanou/aigovernancechain deadlines -j IN --days 365
```

## Sources

- [India AI Governance Guidelines, official full text](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc2025115685601.pdf)
- [PIB release announcing the India AI Governance Guidelines on 5 November 2025](https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=2186639&lang=2&reg=3)
- [G.S.R. 120(E), IT Rules synthetic-information amendment, 10 February 2026](https://www.meity.gov.in/static/uploads/2026/02/f55fe52418b03f58b0669f6a8bc03b6d.pdf)
- [Consolidated IT Rules, 2021 (updated 10 February 2026; includes 26 February corrigendum)](https://www.meity.gov.in/static/uploads/2026/03/0b576f2071694b52e4cd6bb1b6dfab1e.pdf)
- [G.S.R. 148(E), corrigendum to February 2026 IT Rules amendment](https://www.meity.gov.in/static/uploads/2026/03/20c30107195f68865104dd4e16176f4d.pdf)
- [Digital Personal Data Protection Act, 2023, official MeitY text](https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf)
- [G.S.R. 843(E), DPDP Act commencement notification, 13 November 2025](https://www.meity.gov.in/static/uploads/2025/11/c56ceae6c383460ca69577428d36828b.pdf)
- [Digital Personal Data Protection Rules, 2025, G.S.R. 846(E)](https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf)
- [G.S.R. 892(E), corrigendum to DPDP Rules, 10 December 2025](https://www.meity.gov.in/static/uploads/2025/12/3c7ebbae0e5456f493f486e6845df86b.pdf)
- [MeitY Act and Policies listing, updated 29 October 2026; draft IT amendment listed as draft](https://www.meity.gov.in/documents/act-and-policies)

---

Generated from [`atlas/regimes/in.yaml`](../atlas/regimes/in.yaml). Edit the YAML, not this card. Draft open data under CC BY 4.0, not legal advice. [Report an error](https://github.com/mathieugouanou/aigovernancechain/issues/new?template=obligation-correction.yml).
