# Illinois AI rules for employment, therapy, biometrics, and frontier models (US-IL)

As of 2026-11-04. Review: draft-unreviewed. Binding. IHRA, AIVIA, WORP, and BIPA duties apply; the Artificial Intelligence Safety Measures Act begins January 1, 2027, with framework and audit duties phased in during 2028.

## AGC-US-IL-IHRA-2-102-L1: Do not use discriminatory AI in employment
- Rule: IHRA AI employment provisions 775 ILCS 5/2-102(L)(1) · status applicable · applies from 2026-01-01 · confidence high
- Who: roles employer, deployer; uses hiring; conditions: Applies to employers and employment practices enumerated in §2-102(L); the prohibition addresses discriminatory effect and ZIP-code proxies, not every use of AI in employment.
- What: In covered recruitment, hiring, promotion, renewal, training/apprenticeship selection, discharge, discipline, tenure, or employment-terms decisions, an employer commits a civil-rights violation by using AI that has the effect of subjecting employees to discrimination based on an IHRA-protected class or by using ZIP codes as a proxy for protected classes.
- Controls: bias_testing, risk_management
- Source: https://www.ilga.gov/Legislation/PublicActs/View/103-0804

## AGC-US-IL-IHRA-2-102-L2: Notify employees when covered AI is used
- Rule: IHRA AI employment provisions 775 ILCS 5/2-102(L)(2) · status applicable · applies from 2026-01-01 · confidence high
- Who: roles employer; uses hiring; conditions: Notice is required for AI use in the enumerated employment practices; the Act itself leaves the timing and means to IDHR rules.
- What: An employer commits a civil-rights violation if it fails to notify an employee that it is using AI for the employment purposes listed in §2-102(L)(1). The statute delegates notice circumstances, timing, and means to IDHR rulemaking; the Department's proposed amendments were withdrawn, so the withdrawn draft's details are not encoded as binding requirements.
- Controls: transparency_notice
- Source: https://www.ilga.gov/Legislation/PublicActs/View/103-0804

## AGC-US-IL-AIVIA-42-5: Disclose, explain, and obtain consent before AI video analysis
- Rule: AI Video Interview Act 820 ILCS 42/5 · status applicable · applies from 2020-01-01 · confidence high
- Who: roles employer, deployer; uses hiring; conditions: Applies only when the employer asks applicants to record video interviews and uses AI analysis of applicant-submitted video for positions based in Illinois.
- What: Before asking an applicant to submit a video interview for an Illinois-based position, an employer using AI analysis must tell the applicant AI may analyze the video and assess fitness, explain how the AI works and the general characteristics it evaluates, and obtain the applicant's consent. The employer may not use AI to evaluate an applicant who has not consented.
- Controls: transparency_notice, user_controls, bias_testing
- Source: https://www.ilga.gov/documents/legislation/ilcs/documents/082000420K5.htm

## AGC-US-IL-AIVIA-42-10-15: Limit video sharing and delete interviews on request
- Rule: AI Video Interview Act 820 ILCS 42/10, 42/15 · status applicable · applies from 2020-01-01 · confidence high
- Who: roles employer, deployer; uses hiring; conditions: Applies to applicant-submitted videos analyzed under the Act; recipient deletion instructions and backup copies are included.
- What: An employer may share an applicant's interview video only with people whose expertise or technology is necessary to evaluate fitness for the position. Within 30 days after an applicant's request, the employer must delete the interview and instruct recipients to delete their copies, including electronic backups.
- Controls: privacy_compliance, data_governance
- Source: https://www.ilga.gov/Legislation/ILCS/Articles?ActID=4015&ChapterID=68&Print=True

## AGC-US-IL-AIVIA-42-20: Report demographic data for AI-only video screening
- Rule: AI Video Interview Act 820 ILCS 42/20(a)-(c) · status applicable · applies from 2022-01-01 · confidence high
- Who: roles employer; uses hiring; conditions: Triggered only when the employer relies solely on AI video analysis to decide whether an applicant will receive an in-person interview; this is narrower than ordinary AI-assisted video screening.
- What: An employer that relies solely on AI analysis of a video interview to decide whether an applicant advances to an in-person interview must collect specified race and ethnicity data for applicants advanced and not advanced, and applicants hired. It must report the data to the Department of Commerce and Economic Opportunity annually by December 31 for the 12-month period ending the previous November 30.
- Controls: bias_testing, technical_documentation
- Source: https://www.ilga.gov/Legislation/ILCS/Articles?ActID=4015&ChapterID=68&Print=True

## AGC-US-IL-WORP-225-155-15: Keep licensed professionals responsible for AI-assisted therapy
- Rule: WORP Act 225 ILCS 155/15(a)-(b) · status applicable · applies from 2025-08-01 · confidence high
- Who: roles provider, deployer; uses healthcare, chatbot; conditions: Applies to licensed professionals providing therapy or psychotherapy; the Act excludes religious counseling and peer support and has other specified exceptions.
- What: A licensed professional may use AI only for administrative or supplementary support while retaining full responsibility for interactions, outputs, and data use. If AI supplementary support records or transcribes a therapeutic session, the client or legally authorized representative must receive written notice of the AI use and its specific purpose and give consent.
- Controls: human_oversight, transparency_notice, user_controls, privacy_compliance
- Source: https://www.ilga.gov/Legislation/ILCS/details?ActID=4608&ChapAct=FullText

## AGC-US-IL-WORP-225-155-20: Do not let AI provide independent therapy
- Rule: WORP Act 225 ILCS 155/20(a)-(b) · status applicable · applies from 2025-08-01 · confidence high
- Who: roles provider, deployer; uses healthcare, chatbot; conditions: Applies to therapy or psychotherapy services offered to the public in Illinois; religious counseling, peer support, and other statutory exceptions are excluded.
- What: Therapy or psychotherapy services offered to the Illinois public, including through internet-based AI, must be conducted by a licensed professional. A licensed professional may not allow AI to make independent therapeutic decisions, directly engage in therapeutic communication, generate recommendations or treatment plans without professional review and approval, or detect emotions or mental states.
- Controls: human_oversight, prohibited_practices_screen
- Source: https://www.ilga.gov/Legislation/PublicActs/View/104-0054

## AGC-US-IL-BIPA-740-14-15: Protect biometric data throughout its lifecycle
- Rule: Illinois BIPA 740 ILCS 14/15(a)-(e) · status applicable · applies from 2008-10-03 · confidence high
- Who: roles provider, deployer, employer; uses biometric-categorisation, remote-biometric-id, hiring; conditions: Applies to private entities collecting, receiving, possessing, or otherwise handling statutory biometric identifiers or information, such as scans of face or hand geometry, fingerprints, iris/retina scans, or voiceprints; statutory exclusions apply.
- What: A private entity possessing biometrics must publish a retention/destruction policy, give written notice of collection and purpose/term and obtain a written release before obtaining biometrics, limit disclosure and prohibit selling or profiting from the data, and protect it at least as carefully as other confidential sensitive information. The statute covers AI only when the data and activity meet BIPA's biometric definitions and private-entity scope.
- Controls: privacy_compliance, user_controls, security_testing, data_governance
- Source: https://www.ilga.gov/documents/legislation/ilcs/documents/074000140K15.htm

## AGC-US-IL-AIMSA-10-AB-D: Establish and independently audit a frontier AI framework
- Rule: Illinois Artificial Intelligence Safety Measures Act Artificial Intelligence Safety Measures Act §§5, 10(a)-(b), 10(d) · status not-yet-applicable · applies from 2028-01-01 · confidence high
- Who: roles developer, provider; uses frontier-model; conditions: Frontier model means a foundation model trained with more than 10^26 integer or floating-point operations; large frontier developer means affiliate-inclusive annual gross revenue over $500 million in the preceding calendar year.
- What: Beginning January 1, 2028, a large frontier developer must publish, implement, and annually review a framework for catastrophic-risk thresholds, mitigation, deployment decisions, third-party evaluation, cybersecurity, incident response, governance, and internal-use risks. It must also obtain an annual independent audit of Section 10 compliance beginning January 1, 2028 or 90 days after first qualifying as a large frontier developer, whichever is later.
- Controls: safety_framework, risk_management, security_testing, technical_documentation
- Source: https://www.ilga.gov/ftp/Public%20Acts/104/104-0538.htm

## AGC-US-IL-AIMSA-10-C: Publish frontier-model transparency reports
- Rule: Illinois Artificial Intelligence Safety Measures Act Artificial Intelligence Safety Measures Act §10(c)(1)-(4) · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles developer, provider; uses frontier-model; conditions: The basic report applies to frontier developers; additional risk-assessment summaries apply to large frontier developers. Statutory New York-like thresholds are not prerequisites to the Illinois report beyond the Act's frontier-model definition and scope.
- What: Before or concurrently with deploying a new or substantially modified frontier model, a frontier developer must conspicuously publish a report with the developer's site and contact mechanism, release date, supported languages and output modalities, intended uses, and generally applicable use restrictions. A large frontier developer must add machine-readable summaries of catastrophic-risk assessments, results, third-party evaluators, and framework-compliance steps.
- Controls: transparency_notice, technical_documentation, risk_management
- Source: https://www.ilga.gov/ftp/Public%20Acts/104/104-0538.htm

## AGC-US-IL-AIMSA-10-E: Report catastrophic risks from internal model use
- Rule: Illinois Artificial Intelligence Safety Measures Act Artificial Intelligence Safety Measures Act §10(e) · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles developer, provider; uses frontier-model; conditions: Large frontier developers only; affiliate-inclusive annual gross revenue over $500 million in the preceding calendar year.
- What: A large frontier developer must send the Agency a summary of each catastrophic-risk assessment resulting from internal use of its frontier models every three months, or on another reasonable written schedule agreed with the Agency and communicated to the Attorney General with updates.
- Controls: risk_management, incident_reporting, technical_documentation
- Source: https://www.ilga.gov/ftp/Public%20Acts/104/104-0538.htm

## AGC-US-IL-AIMSA-15-C: Report critical safety incidents within statutory windows
- Rule: Illinois Artificial Intelligence Safety Measures Act Artificial Intelligence Safety Measures Act §15(c) · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles developer, provider; uses frontier-model; conditions: Applies to critical safety incidents involving one or more frontier models; 24-hour reporting is triggered by imminent risk of death or serious physical injury.
- What: A frontier developer must report a critical safety incident to the Agency and Attorney General within 72 hours after learning facts sufficient for a reasonable belief that one occurred. If the developer discovers imminent risk of death or serious physical injury, it must also disclose the incident within 24 hours to an appropriate authority with jurisdiction.
- Controls: incident_reporting, risk_management
- Source: https://www.ilga.gov/ftp/Public%20Acts/104/104-0538.htm

## AGC-US-IL-AIMSA-18: File and maintain the large-developer disclosure
- Rule: Illinois Artificial Intelligence Safety Measures Act Artificial Intelligence Safety Measures Act §18(a)-(f) · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles developer, provider; uses frontier-model; conditions: Large frontier developers only; specified ownership, Illinois-office, and regulatory-contact information must be disclosed, subject to the Act's filing terms.
- What: Beginning January 1, 2027, a large frontier developer may not develop, deploy, or operate a frontier model wholly or partly in Illinois without a current disclosure statement filed with the Agency and payment of the required fee. The statement must be renewed annually and earlier after specified ownership or material-information changes.
- Controls: registration, audit_log
- Source: https://www.ilga.gov/ftp/Public%20Acts/104/104-0538.htm

## AGC-US-IL-AIMSA-20: Protect covered employees who report safety concerns
- Rule: Illinois Artificial Intelligence Safety Measures Act Artificial Intelligence Safety Measures Act §20(a)-(e) · status not-yet-applicable · applies from 2027-01-01 · confidence high
- Who: roles developer, provider, employer; uses frontier-model; conditions: Covered employees are employees responsible for assessing, managing, or addressing critical-safety-incident risk; the anonymous internal process and quarterly sharing duties apply to large frontier developers.
- What: Frontier developers may not prevent or retaliate against covered employees who make specified good-faith disclosures, and must give covered employees clear notice of their rights. Large frontier developers must provide an anonymous internal reporting process with monthly status updates to reporters and share process disclosures/responses with officers and directors at least quarterly, subject to the statutory exception for implicated officers or directors.
- Controls: incident_reporting, transparency_notice
- Source: https://www.ilga.gov/ftp/Public%20Acts/104/104-0538.htm
