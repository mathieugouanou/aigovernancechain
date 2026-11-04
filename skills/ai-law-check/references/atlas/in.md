# India AI Governance, Intermediary and Data Rules (IN)

As of 2026-11-04. Review: draft-unreviewed. Binding synthetic-media intermediary rules apply from 20 Feb 2026. DPDP institutional provisions began 13 Nov 2025; the Consent Manager phase starts 13 Nov 2026 and most substantive data duties start 13 May 2027. India AI Governance Guidelines remain voluntary.

## AGC-IN-AIGG-1: Use the voluntary India AI governance principles and practices
- Rule: India AI Governance Guidelines India AI Governance Guidelines, Parts 1–4 · status voluntary · applies from 2025-11-05 · confidence high
- Who: roles provider, deployer, developer, public-body; uses any-ai; conditions: Guidance for people and organisations developing or deploying AI in India; the recommendations are voluntary.
- What: The Guidelines set out seven principles, recommendations across six governance pillars, an action plan and proposed institutional coordination and technical-support arrangements. They recommend that AI developers and deployers comply with existing Indian laws and voluntarily adopt measures such as risk mitigation, transparency, grievance redressal and responsible-AI practices; they do not create binding duties or a new horizontal AI law.
- Controls: risk_management, impact_assessment, transparency_notice
- Source: https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc2025115685601.pdf

## AGC-IN-ITR-3-3-A-I-II: Prevent unlawful synthetic media and label other synthetic information
- Rule: IT Intermediary Rules Rule 3(3)(a)(i)–(ii) and Rule 3(3)(b) · status applicable · applies from 2026-02-20 · confidence high
- Who: roles platform; uses generated-media, deepfake; conditions: Only intermediaries whose computer resources may enable, permit or facilitate creation, generation, modification, alteration, publication, transmission, sharing or dissemination of SGI.
- What: Intermediaries offering a computer resource that can enable creation or dissemination of synthetically generated information (SGI) must use reasonable and appropriate technical measures to prevent SGI that violates applicable law. Other SGI must carry a prominent visible label, or a prefixed disclosure for audio, and, to the extent technically feasible, permanent metadata or another provenance mechanism including a unique identifier; intermediaries must not enable removal or suppression of those labels or markers.
- Controls: content_marking, deepfake_label, content_moderation
- Source: https://www.meity.gov.in/static/uploads/2026/03/0b576f2071694b52e4cd6bb1b6dfab1e.pdf

## AGC-IN-ITR-4-1-A: Verify synthetic-media declarations before SSMI publication
- Rule: IT Intermediary Rules Rule 4(1A) · status applicable · applies from 2026-02-20 · confidence high
- Who: roles platform; uses generated-media, deepfake; conditions: Only SSMIs as defined by Rule 2(1)(v) that enable display, upload or publication of information on their computer resources.
- What: Before permitting information to be displayed, uploaded or published, a significant social media intermediary (SSMI) must require users to declare whether it is SGI and deploy appropriate technical measures, including automated tools, to verify the declaration in light of the content’s nature, format and source. If a declaration or verification confirms SGI, the intermediary must clearly and prominently label it; knowingly permitting, promoting or failing to act on SGI in contravention of the Rules is deemed a failure of due diligence.
- Controls: content_marking, content_moderation, audit_log
- Source: https://www.meity.gov.in/static/uploads/2026/03/0b576f2071694b52e4cd6bb1b6dfab1e.pdf

## AGC-IN-ITR-3-1-D: Act on specified unlawful-content orders within three hours
- Rule: IT Intermediary Rules Rule 3(1)(d) · status applicable · applies from 2026-02-20 · confidence high
- Who: roles platform; uses any-ai, generated-media, deepfake; conditions: Applies to covered unlawful information hosted, displayed, published, transmitted or stored on the intermediary’s computer resource; actual knowledge must arise by the channels specified in the Rule.
- What: When an intermediary receives actual knowledge of unlawful information through an order of a competent court or a written, reasoned intimation from an authorised government officer or agency, it must remove or disable access to the specified information within three hours.
- Controls: content_moderation, audit_log
- Source: https://www.meity.gov.in/static/uploads/2026/03/0b576f2071694b52e4cd6bb1b6dfab1e.pdf

## AGC-IN-ITR-3-2-B: Remove specified intimate or impersonating content within two hours of complaint
- Rule: IT Intermediary Rules Rule 3(2)(b) · status applicable · applies from 2026-02-20 · confidence high
- Who: roles platform; uses generated-media, deepfake; conditions: Includes content hosted, stored, published or transmitted by the intermediary; the complaint must concern one of the categories enumerated in Rule 3(2)(b).
- What: On a complaint by an individual, or someone acting on the individual’s behalf, about content prima facie exposing private areas, showing nudity or sexual conduct, or impersonating the individual electronically (including artificially morphed images), an intermediary must take reasonable and practicable measures to remove or disable access within two hours.
- Controls: content_moderation
- Source: https://www.meity.gov.in/static/uploads/2026/03/0b576f2071694b52e4cd6bb1b6dfab1e.pdf

## AGC-IN-ITR-3-2-A-I: Resolve intermediary grievances within seven days
- Rule: IT Intermediary Rules Rule 3(2)(a)(i) · status applicable · applies from 2026-02-20 · confidence high
- Who: roles platform; uses any-ai, generated-media, deepfake; conditions: Grievances concern violations of the Rules or other matters pertaining to the intermediary’s computer resources.
- What: Intermediaries must acknowledge a grievance within 24 hours and resolve it within seven days of receipt. Specified requests to remove information or links under Rule 3(1)(b), subject to the listed exceptions, must be handled as expeditiously as possible and resolved within 36 hours.
- Controls: content_moderation, audit_log
- Source: https://www.meity.gov.in/static/uploads/2026/03/0b576f2071694b52e4cd6bb1b6dfab1e.pdf

## AGC-IN-DPDPA-4-6: Use a lawful basis and give notice before requesting consent
- Rule: DPDP Act Sections 4, 5 and 6 · status not-yet-applicable · applies from 2027-05-13 · confidence high
- Who: roles any; uses any-ai; conditions: Applies to Data Fiduciaries processing digital personal data in India, including data collected digitally or later digitised, and certain processing outside India connected with offering goods or services to Data Principals in India; statutory exclusions and permitted legitimate uses apply.
- What: Personal data may be processed only for a lawful purpose on consent or a permitted legitimate-use basis. Before seeking consent, the Data Fiduciary must give notice describing the personal data and purpose and how the person may exercise rights and complain; consent must be free, specific, informed, unconditional and unambiguous, limited to data necessary for the specified purpose, and given by clear affirmative action.
- Controls: privacy_compliance, transparency_notice, user_controls
- Source: https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf

## AGC-IN-DPDPA-8: Govern processors, safeguard personal data and notify breaches
- Rule: DPDP Act Section 8(1)–(7); DPDP Rules 6 and 7 · status not-yet-applicable · applies from 2027-05-13 · confidence high
- Who: roles any; uses any-ai; conditions: Applies to Data Fiduciaries processing digital personal data within the Act’s territorial scope.
- What: A Data Fiduciary remains responsible for its own processing and processing on its behalf, may engage a Data Processor only under a valid contract, and must implement technical and organisational measures, protect personal data with reasonable security safeguards and notify the Board and affected people of breaches. Rules 6 and 7 specify safeguards such as access controls, logs, backups and processor-contract terms, prompt notice to affected people, and an initial Board intimation without delay followed by detailed information within 72 hours unless the Board allows longer.
- Controls: privacy_compliance, audit_log, incident_reporting
- Source: https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf

## AGC-IN-DPR-13: Significant Data Fiduciaries must assess and audit data and algorithms
- Rule: DPDP Rules DPDP Act section 10(2); DPDP Rules 13(1)–(4) · status not-yet-applicable · applies from 2027-05-13 · confidence high
- Who: roles any; uses any-ai; conditions: Only a Data Fiduciary or class of Data Fiduciaries formally notified as significant under section 10 and processing digital personal data.
- What: A notified Significant Data Fiduciary must appoint an India-based Data Protection Officer and an independent data auditor; Rule 13 requires a Data Protection Impact Assessment and audit at least every 12 months, with significant observations reported to the Board. It must also use due diligence to verify that its technical measures, including algorithmic software used for the listed personal-data operations, are not likely to risk Data Principals’ rights; any localisation condition applies only to personal data specified by the Central Government.
- Controls: impact_assessment, privacy_compliance, risk_management
- Source: https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf
