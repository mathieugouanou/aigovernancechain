# UK AI regulation (GB)

As of 2026-11-04. Review: draft-unreviewed. Binding UK GDPR ADM safeguards apply from 5 February 2026. Online-safety duties cover specified services, not every standalone chatbot. England-and-Wales intimate-image offences are in force; Scotland child-image-generator provisions are enacted but not commenced. The ATRS is a mandatory government policy for specified central bodies, not a statute.

## AGC-GB-UKGDPR-22B: Restrict significant automated decisions using special-category data
- Rule: UK GDPR automated decision-making UK GDPR Arts. 22A–22B · status applicable · applies from 2026-02-05 · confidence high
- Who: roles any; uses significant-decision, profiling; conditions: Controllers making a significant decision based solely on automated processing of personal data; Article 22A defines the decision and meaningful-human-involvement threshold.
- What: A significant decision with legal or similarly significant effects that is based solely on automated processing and uses special-category data is barred unless the decision relies entirely on explicit consent, or is necessary for a contract or required/authorised by law and the substantial-public-interest condition in Article 9(2)(g) applies. A significant decision relying in whole or part on the recognised legitimate-interests basis in Article 6(1)(ea) also cannot be made solely by automated processing.
- Controls: privacy_compliance, risk_management
- Source: https://www.legislation.gov.uk/ukpga/2025/18/section/80

## AGC-GB-UKGDPR-22C: Give people safeguards for significant automated decisions
- Rule: UK GDPR automated decision-making UK GDPR Art. 22C · status applicable · applies from 2026-02-05 · confidence high
- Who: roles any; uses significant-decision, profiling; conditions: Applies to controllers making significant decisions solely by automated processing, including profiling; Article 22D allows regulations to supplement or specify safeguards.
- What: For a significant decision based at least partly on personal data and solely on automated processing, the controller must provide safeguards that give the person information about the decision, let them make representations, obtain human intervention by the controller, and contest the decision.
- Controls: transparency_notice, human_oversight, contest_and_appeal
- Source: https://www.legislation.gov.uk/ukpga/2025/18/section/80

## AGC-GB-DPA18-50B: Safeguard automated law-enforcement decisions
- Rule: Law-enforcement automated decision-making DPA 2018 ss. 50A–50C · status applicable · applies from 2026-02-05 · confidence high
- Who: roles public-body; uses law-enforcement, significant-decision, profiling; conditions: Applies to controllers processing under Part 3 of the Data Protection Act 2018 for law-enforcement purposes; the decision must have an adverse legal or similarly significant effect.
- What: Controllers processing personal data for law-enforcement purposes may not make a significant decision based solely on automated processing that uses sensitive processing, except with explicit consent or where required or authorised by law. Significant solely automated decisions must generally include information, an opportunity for representations, human intervention and a means to contest, subject to the statutory exceptions and reconsideration safeguards.
- Controls: privacy_compliance, transparency_notice, human_oversight, contest_and_appeal
- Source: https://www.legislation.gov.uk/ukpga/2025/18/section/80

## AGC-GB-OSA-9-10: Assess and reduce illegal-content risks on in-scope services
- Rule: Online Safety Act OSA 2023 ss. 9–10, 26–27 · status applicable · applies from 2025-03-17 · confidence high
- Who: roles platform; uses chatbot, generated-media, deepfake, recommender; conditions: Only services meeting the Act's user-to-user or search definitions and UK-link rules. A one-to-one chatbot that neither enables user sharing nor searches multiple sites is generally outside Part 3; see Ofcom's chatbot guidance.
- What: Providers of regulated user-to-user and search services must assess illegal-content risks, keep assessments up to date (including before significant service changes), and take proportionate measures to prevent priority illegal content and mitigate identified harms and offence-facilitation risks. AI content shared by users or encountered through search can be in scope like other content.
- Controls: impact_assessment, risk_management, content_moderation, audit_log
- Source: https://www.legislation.gov.uk/ukpga/2023/50/section/10

## AGC-GB-OSA-11-12: Assess and mitigate risks to children
- Rule: Online Safety Act OSA 2023 ss. 11–12, 28–29 · status applicable · applies from 2025-07-25 · confidence high
- Who: roles platform; uses chatbot, generated-media, deepfake, minors; conditions: Applies to in-scope services likely to be accessed by children; duties vary by service type, identified risk, content and child age group. AI-generated content shared between users is assessed as other user-generated content.
- What: Providers of regulated user-to-user and search services likely to be accessed by children must assess risks to children and take proportionate steps to mitigate and manage them. User-to-user services must prevent children encountering primary-priority harmful content using age verification or estimation where required, and protect children from other harmful content.
- Controls: impact_assessment, minors_protection, content_moderation
- Source: https://www.legislation.gov.uk/ukpga/2023/50/section/12

## AGC-GB-OSA-81: Age-gate provider-published pornography
- Rule: Online Safety Act OSA 2023 ss. 79–81 · status applicable · applies from 2025-01-17 · confidence high
- Who: roles platform; uses chatbot, generated-media, minors; conditions: Part 5 covers provider-published pornography, including where the provider uses an automated tool; user-generated pornography is excluded from Part 5 and may instead trigger Part 3 duties.
- What: A service with regulated provider-published pornographic content and UK links must use highly effective age verification or estimation so children are not normally able to encounter it. The provider must keep a written record of its method and privacy considerations and publish a summary; provider-published content may include material produced through an automated tool.
- Controls: minors_protection, privacy_compliance
- Source: https://www.legislation.gov.uk/ukpga/2023/50/section/81

## AGC-GB-DUAA-138-66E: Do not create or request non-consensual purported intimate images
- Rule: Non-consensual purported intimate images DUAA 2025 s. 138 (SOA 2003 ss. 66E–66F) · status applicable · applies from 2026-02-06 · confidence high
- Who: roles any; uses deepfake, generated-media; conditions: The offences apply to adults and extend to England and Wales only; the Act's section 138 offences do not extend to Scotland. A narrow statutory exception applies to certain edits of an existing image.
- What: In England and Wales, a person commits an offence by intentionally creating a purported intimate image of an adult without consent and without a reasonable belief in consent, or by intentionally requesting its creation on the same basis. The offence covers qualifying synthetic images; the Act defines the image and provides a reasonable-excuse defence.
- Controls: prohibited_practices_screen, content_moderation
- Source: https://www.legislation.gov.uk/ukpga/2025/18/section/138

## AGC-GB-CPA26-99-66I: Do not make or supply purported intimate-image generators
- Rule: Intimate-image and child-abuse-image generator offences CPA 2026 s. 99 (SOA 2003 s. 66I) · status applicable · applies from 2026-06-29 · confidence high
- Who: roles provider, developer, any; uses deepfake, generated-media; conditions: The substantive offence applies in England and Wales. Section 99(5) separately extends the extraterritorial application rule to UK-incorporated bodies and associations; ordinary internet-service-provider safe harbours also apply.
- What: It is an offence to make or adapt, or supply or offer to supply, a thing for use as a generator of purported intimate images. “Thing” includes a program, electronic information or a service; a defence is available for taking all reasonable steps to prevent non-consensual use.
- Controls: prohibited_practices_screen, risk_management
- Source: https://www.legislation.gov.uk/ukpga/2026/20/section/99

## AGC-GB-CPA26-72-74: Do not make, possess or supply child sexual-abuse image generators
- Rule: Intimate-image and child-abuse-image generator offences CPA 2026 ss. 72 and 74 (SOA 2003 s. 46A; Civic Government (Scotland) Act 1982 s. 52D) · status not-yet-applicable · applies from n/a · confidence high
- Who: roles provider, developer, any; uses generated-media, deepfake, minors; conditions: Section 72 is for England and Wales; section 74 is the separate Scottish provision. Both are enacted but remain prospective pending commencement regulations.
- What: The enacted provisions create offences involving making or adapting, possessing, supplying or offering to supply a thing made for creating or facilitating child sexual-abuse images. “Thing” includes a program, electronic information or a service. The England-and-Wales and Scotland provisions had not been commenced by 4 November 2026.
- Controls: prohibited_practices_screen, content_moderation
- Source: https://www.legislation.gov.uk/ukpga/2026/20/section/72

## AGC-GB-ATRS-SCOPE: Publish transparency records for in-scope central-government tools
- Rule: ATRS ATRS mandatory scope and exemptions policy · status applicable · applies from 2024-02-06 · confidence high
- Who: roles public-body; uses public-sector-use, chatbot, significant-decision; conditions: Mandatory only for ministerial and non-ministerial departments and ALBs providing public/frontline services or routinely interacting with the public; sensitive information may be withheld under the policy.
- What: Central-government departments and specified arm’s-length bodies must publish an ATRS record for algorithmic tools in beta/pilot or production that significantly influence public-effect decisions or directly interact with the public. The policy is broader than AI and is not a statute; other public-sector bodies are encouraged, not required, to use ATRS.
- Controls: transparency_notice, audit_log
- Source: https://www.gov.uk/government/publications/algorithmic-transparency-recording-standard-mandatory-scope-and-exemptions-policy/algorithmic-transparency-recording-standard-atrs-mandatory-scope-and-exemptions-policy

## AGC-GB-AICSCOP-BASELINE: Use the voluntary AI cyber-security baseline
- Rule: AI Cyber Security Code of Practice AI Cyber Security Code of Practice, Principles 1–13 · status voluntary · applies from 2025-01-31 · confidence high
- Who: roles provider, developer, deployer; uses any-ai, generated-media, agent, frontier-model
- What: The government code recommends lifecycle cyber-security measures for AI developers and operators, including secure design and supply chains, risk assessment, access controls, documentation, testing, incident response, updates and end-of-life practices. It is voluntary and is not a statutory duty.
- Controls: security_testing, risk_management, technical_documentation, human_oversight
- Source: https://www.gov.uk/government/publications/ai-cyber-security-code-of-practice/code-of-practice-for-the-cyber-security-of-ai
