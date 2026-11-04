# Illinois AI rules for employment, therapy, biometrics, and frontier models

> Illinois regulates discriminatory AI in employment, AI video interviews, AI-assisted therapy, biometric-data handling, and frontier-model safety.

**Jurisdiction:** Illinois (`US-IL`) · **As of:** 4 Nov 2026 · **Review:** draft-unreviewed ([reviewer seat open](../REVIEWERS.md))

**Who it hits:** Employers, video-interview tool users, licensed mental-health professionals, private entities handling biometrics, and frontier-model developers meeting Illinois thresholds.

**Status:** Binding. IHRA, AIVIA, WORP, and BIPA duties apply; the Artificial Intelligence Safety Measures Act begins January 1, 2027, with framework and audit duties phased in during 2028.

## Instruments

| Instrument | Force | Status | Penalties |
|---|---|---|---|
| [IHRA AI employment provisions](https://www.ilga.gov/Legislation/PublicActs/View/103-0804): Illinois Human Rights Act §2-102(L), as amended by Public Act 103-0804 (HB 3773) | binding | in-force | Enforced through the Illinois Human Rights Act's civil-rights charge and remedy framework. |
| [AI Video Interview Act](https://www.ilga.gov/Legislation/ILCS/Articles?ActID=4015&ChapterID=68&Print=True): Artificial Intelligence Video Interview Act, 820 ILCS 42 | binding | in-force | The Act provides for enforcement under its statutory provisions; no separate fixed AI-specific civil-penalty amount is encoded here. |
| [WORP Act](https://www.ilga.gov/Legislation/ILCS/details?ActID=4608&ChapAct=FullText): Wellness and Oversight for Psychological Resources Act, 225 ILCS 155 | binding | in-force | A violation may incur a civil penalty up to $10,000 per violation, determined after a Department hearing based on harm and circumstances; payment is due within 60 days of the order. |
| [Illinois BIPA](https://www.ilga.gov/documents/legislation/ilcs/documents/074000140K15.htm): Biometric Information Privacy Act, 740 ILCS 14, including amendments in Public Act 103-769 | binding | in-force | A person aggrieved may sue for statutory damages of $1,000 for each negligent violation or $5,000 for each intentional or reckless violation, or actual damages if greater, plus fees and costs; the 2024 amendment limits repeated collection/disclosure recoveries as specified in §20. |
| [Illinois Artificial Intelligence Safety Measures Act](https://www.ilga.gov/ftp/Public%20Acts/104/104-0538.htm): Artificial Intelligence Safety Measures Act, Public Act 104-0538 (SB 315) | binding | enacted-not-yet-applicable | Large-frontier-developer civil penalties may reach $1 million for a first violation and $3 million for a later violation; separate $1,000-per-day and unpaid-assessment penalties apply to specified disclosure failures. |

## Key dates

- **2024-08-02** (passed) Illinois BIPA: Public Act 103-769 amendments to written release and repeated-collection recoveries effective
- **2024-08-09** (passed) IHRA AI employment provisions: Public Act 103-0804 approved
- **2025-08-01** (passed) Do not let AI provide independent therapy (WORP Act 225 ILCS 155/20(a)-(b))
- **2025-08-01** (passed) Keep licensed professionals responsible for AI-assisted therapy (WORP Act 225 ILCS 155/15(a)-(b))
- **2026-01-01** (passed) Do not use discriminatory AI in employment (IHRA AI employment provisions 775 ILCS 5/2-102(L)(1))
- **2026-01-01** (passed) Notify employees when covered AI is used (IHRA AI employment provisions 775 ILCS 5/2-102(L)(2))
- **2026-06-26** (passed) IHRA AI employment provisions: IDHR proposed AI-employment rule amendments were officially withdrawn
- **2026-07-06** (passed) Illinois Artificial Intelligence Safety Measures Act: Public Act 104-0538 approved
- **2026-12-31** Annual AIVIA demographic report due for the 12-month period ending November 30
- **2027-01-01** Artificial Intelligence Safety Measures Act takes effect
- **2028-01-01** Large-frontier-developer framework and annual independent-audit phase-in begins

## Obligations (14)

| ID | Article | Obligation | Applies from | Status | Controls | Confidence |
|---|---|---|---|---|---|---|
| `AGC-US-IL-IHRA-2-102-L1` | [775 ILCS 5/2-102(L)(1)](https://www.ilga.gov/Legislation/PublicActs/View/103-0804) | **Do not use discriminatory AI in employment**: In covered recruitment, hiring, promotion, renewal, training/apprenticeship selection, discharge, discipline, tenure, or employment-terms decisions, an employer commits a civil-rights violation by using AI that has the effect of subjecting employees to discrimination based on an IHRA-protected class or by using ZIP codes as a proxy for protected classes. | 2026-01-01 | applicable | bias_testing, risk_management | high |
| `AGC-US-IL-IHRA-2-102-L2` | [775 ILCS 5/2-102(L)(2)](https://www.ilga.gov/Legislation/PublicActs/View/103-0804) | **Notify employees when covered AI is used**: An employer commits a civil-rights violation if it fails to notify an employee that it is using AI for the employment purposes listed in §2-102(L)(1). The statute delegates notice circumstances, timing, and means to IDHR rulemaking; the Department's proposed amendments were withdrawn, so the withdrawn draft's details are not encoded as binding requirements. | 2026-01-01 | applicable | transparency_notice | high |
| `AGC-US-IL-AIVIA-42-5` | [820 ILCS 42/5](https://www.ilga.gov/documents/legislation/ilcs/documents/082000420K5.htm) | **Disclose, explain, and obtain consent before AI video analysis**: Before asking an applicant to submit a video interview for an Illinois-based position, an employer using AI analysis must tell the applicant AI may analyze the video and assess fitness, explain how the AI works and the general characteristics it evaluates, and obtain the applicant's consent. The employer may not use AI to evaluate an applicant who has not consented. | 2020-01-01 | applicable | transparency_notice, user_controls, bias_testing | high |
| `AGC-US-IL-AIVIA-42-10-15` | [820 ILCS 42/10, 42/15](https://www.ilga.gov/Legislation/ILCS/Articles?ActID=4015&ChapterID=68&Print=True) | **Limit video sharing and delete interviews on request**: An employer may share an applicant's interview video only with people whose expertise or technology is necessary to evaluate fitness for the position. Within 30 days after an applicant's request, the employer must delete the interview and instruct recipients to delete their copies, including electronic backups. | 2020-01-01 | applicable | privacy_compliance, data_governance | high |
| `AGC-US-IL-AIVIA-42-20` | [820 ILCS 42/20(a)-(c)](https://www.ilga.gov/Legislation/ILCS/Articles?ActID=4015&ChapterID=68&Print=True) | **Report demographic data for AI-only video screening**: An employer that relies solely on AI analysis of a video interview to decide whether an applicant advances to an in-person interview must collect specified race and ethnicity data for applicants advanced and not advanced, and applicants hired. It must report the data to the Department of Commerce and Economic Opportunity annually by December 31 for the 12-month period ending the previous November 30. | 2022-01-01 | applicable | bias_testing, technical_documentation | high |
| `AGC-US-IL-WORP-225-155-15` | [225 ILCS 155/15(a)-(b)](https://www.ilga.gov/Legislation/ILCS/details?ActID=4608&ChapAct=FullText) | **Keep licensed professionals responsible for AI-assisted therapy**: A licensed professional may use AI only for administrative or supplementary support while retaining full responsibility for interactions, outputs, and data use. If AI supplementary support records or transcribes a therapeutic session, the client or legally authorized representative must receive written notice of the AI use and its specific purpose and give consent. | 2025-08-01 | applicable | human_oversight, transparency_notice, user_controls, privacy_compliance | high |
| `AGC-US-IL-WORP-225-155-20` | [225 ILCS 155/20(a)-(b)](https://www.ilga.gov/Legislation/PublicActs/View/104-0054) | **Do not let AI provide independent therapy**: Therapy or psychotherapy services offered to the Illinois public, including through internet-based AI, must be conducted by a licensed professional. A licensed professional may not allow AI to make independent therapeutic decisions, directly engage in therapeutic communication, generate recommendations or treatment plans without professional review and approval, or detect emotions or mental states. | 2025-08-01 | applicable | human_oversight, prohibited_practices_screen | high |
| `AGC-US-IL-BIPA-740-14-15` | [740 ILCS 14/15(a)-(e)](https://www.ilga.gov/documents/legislation/ilcs/documents/074000140K15.htm) | **Protect biometric data throughout its lifecycle**: A private entity possessing biometrics must publish a retention/destruction policy, give written notice of collection and purpose/term and obtain a written release before obtaining biometrics, limit disclosure and prohibit selling or profiting from the data, and protect it at least as carefully as other confidential sensitive information. The statute covers AI only when the data and activity meet BIPA's biometric definitions and private-entity scope. | 2008-10-03 | applicable | privacy_compliance, user_controls, security_testing, data_governance | high |
| `AGC-US-IL-AIMSA-10-AB-D` | [Artificial Intelligence Safety Measures Act §§5, 10(a)-(b), 10(d)](https://www.ilga.gov/ftp/Public%20Acts/104/104-0538.htm) | **Establish and independently audit a frontier AI framework**: Beginning January 1, 2028, a large frontier developer must publish, implement, and annually review a framework for catastrophic-risk thresholds, mitigation, deployment decisions, third-party evaluation, cybersecurity, incident response, governance, and internal-use risks. It must also obtain an annual independent audit of Section 10 compliance beginning January 1, 2028 or 90 days after first qualifying as a large frontier developer, whichever is later. | 2028-01-01 | not-yet-applicable | safety_framework, risk_management, security_testing, technical_documentation | high |
| `AGC-US-IL-AIMSA-10-C` | [Artificial Intelligence Safety Measures Act §10(c)(1)-(4)](https://www.ilga.gov/ftp/Public%20Acts/104/104-0538.htm) | **Publish frontier-model transparency reports**: Before or concurrently with deploying a new or substantially modified frontier model, a frontier developer must conspicuously publish a report with the developer's site and contact mechanism, release date, supported languages and output modalities, intended uses, and generally applicable use restrictions. A large frontier developer must add machine-readable summaries of catastrophic-risk assessments, results, third-party evaluators, and framework-compliance steps. | 2027-01-01 | not-yet-applicable | transparency_notice, technical_documentation, risk_management | high |
| `AGC-US-IL-AIMSA-10-E` | [Artificial Intelligence Safety Measures Act §10(e)](https://www.ilga.gov/ftp/Public%20Acts/104/104-0538.htm) | **Report catastrophic risks from internal model use**: A large frontier developer must send the Agency a summary of each catastrophic-risk assessment resulting from internal use of its frontier models every three months, or on another reasonable written schedule agreed with the Agency and communicated to the Attorney General with updates. | 2027-01-01 | not-yet-applicable | risk_management, incident_reporting, technical_documentation | high |
| `AGC-US-IL-AIMSA-15-C` | [Artificial Intelligence Safety Measures Act §15(c)](https://www.ilga.gov/ftp/Public%20Acts/104/104-0538.htm) | **Report critical safety incidents within statutory windows**: A frontier developer must report a critical safety incident to the Agency and Attorney General within 72 hours after learning facts sufficient for a reasonable belief that one occurred. If the developer discovers imminent risk of death or serious physical injury, it must also disclose the incident within 24 hours to an appropriate authority with jurisdiction. | 2027-01-01 | not-yet-applicable | incident_reporting, risk_management | high |
| `AGC-US-IL-AIMSA-18` | [Artificial Intelligence Safety Measures Act §18(a)-(f)](https://www.ilga.gov/ftp/Public%20Acts/104/104-0538.htm) | **File and maintain the large-developer disclosure**: Beginning January 1, 2027, a large frontier developer may not develop, deploy, or operate a frontier model wholly or partly in Illinois without a current disclosure statement filed with the Agency and payment of the required fee. The statement must be renewed annually and earlier after specified ownership or material-information changes. | 2027-01-01 | not-yet-applicable | registration, audit_log | high |
| `AGC-US-IL-AIMSA-20` | [Artificial Intelligence Safety Measures Act §20(a)-(e)](https://www.ilga.gov/ftp/Public%20Acts/104/104-0538.htm) | **Protect covered employees who report safety concerns**: Frontier developers may not prevent or retaliate against covered employees who make specified good-faith disclosures, and must give covered employees clear notice of their rights. Large frontier developers must provide an anonymous internal reporting process with monthly status updates to reporters and share process disclosures/responses with officers and directors at least quarterly, subject to the statutory exception for implicated officers or directors. | 2027-01-01 | not-yet-applicable | incident_reporting, transparency_notice | high |

## Start here

The controls this regime asks for most often. Declare them in your `AI_GOVERNANCE.md`:

- `risk_management`: Documented, ongoing risk management (5 obligations)
- `transparency_notice`: Affected people get notice and explanation (5 obligations)
- `technical_documentation`: Technical documentation is kept up to date (4 obligations)
- `bias_testing`: Bias or disparate-impact testing (3 obligations)
- `user_controls`: Opt-out, consent or user choice (3 obligations)

## Check your system

```bash
npx github:mathieugouanou/aigovernancechain scope -j US-IL -r deployer -u chatbot
npx github:mathieugouanou/aigovernancechain deadlines -j US-IL --days 365
```

## Sources

- [Illinois Public Act 103-0804 (HB 3773), IHRA AI employment amendment](https://www.ilga.gov/Legislation/PublicActs/View/103-0804)
- [Illinois Artificial Intelligence Video Interview Act, 820 ILCS 42](https://www.ilga.gov/Legislation/ILCS/Articles?ActID=4015&ChapterID=68&Print=True)
- [Illinois Public Act 104-0054 (WORP Act)](https://www.ilga.gov/Legislation/PublicActs/View/104-0054)
- [Illinois BIPA §15 and compiled statute notes](https://www.ilga.gov/documents/legislation/ilcs/documents/074000140K15.htm)
- [Illinois Public Act 104-0538, Artificial Intelligence Safety Measures Act](https://www.ilga.gov/ftp/Public%20Acts/104/104-0538.htm)
- [JCAR Flinn Report recording withdrawal of IDHR proposed AI-employment rules](https://ilga.gov/documents/commission/jcar/flinn/20260626_June%2026,%202026%20-%20Issue%2026.pdf)

---

Generated from [`atlas/regimes/us-il.yaml`](../atlas/regimes/us-il.yaml). Edit the YAML, not this card. Draft open data under CC BY 4.0, not legal advice. [Report an error](https://github.com/mathieugouanou/aigovernancechain/issues/new?template=obligation-correction.yml).
