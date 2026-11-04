# China AI Governance Rules (CN)

As of 2026-11-04. Review: draft-unreviewed. Binding rules apply. GB 45438-2025 and the content-labelling measures apply from 1 Sep 2025; the amended Cybersecurity Law applies from 1 Jan 2026; human-like interactive-service rules apply from 15 Jul 2026. Comprehensive AI legislation remains a proposed work-plan item.

## AGC-CN-ALGO-16-17: Disclose recommendation and give users a real choice
- Rule: Algorithmic Recommendation Provisions Arts. 16–17 · status applicable · applies from 2022-03-01 · confidence high
- Who: roles provider; uses recommender; conditions: Internet information services using algorithmic recommendation technology in China.
- What: Algorithmic recommendation providers must clearly tell users that recommendations are being used and disclose the service's basic principles, purpose and main operating mechanisms. They must offer a non-personalised option or an easy way to turn recommendations off, immediately stop the related service when a user opts out, and let users select or delete recommendation-related personal tags.
- Controls: ai_disclosure, transparency_notice, user_controls
- Source: https://www.cac.gov.cn/2022-01/04/c_1642894606364259.htm

## AGC-CN-ALGO-24-27: File public-opinion or mobilisation-capable recommendation services
- Rule: Algorithmic Recommendation Provisions Arts. 24–27, 31, 33 · status applicable · applies from 2022-03-01 · confidence high
- Who: roles provider; uses recommender; conditions: Only algorithmic recommendation services with public-opinion attributes or social-mobilisation capability.
- What: Providers whose recommendation services have public-opinion attributes or social-mobilisation capability must file service and algorithm details, including a self-assessment report, within 10 working days of launch; changes are due within 10 working days and cancellation within 20 working days after termination. They must complete the required security assessment and display the filing number and public filing link after filing.
- Controls: registration, security_testing, technical_documentation
- Source: https://www.cac.gov.cn/2022-01/04/c_1642894606364259.htm

## AGC-CN-DSYN-9-16-18: Verify identity for posting and label deep-synthesis output
- Rule: Deep Synthesis Provisions Arts. 9, 16–18 · status applicable · applies from 2023-01-10 · confidence high
- Who: roles provider; uses generated-media, deepfake, chatbot; conditions: The real-name rule is a condition for information-publishing services; prominent labels apply to the listed services where public confusion or mistaken belief is possible.
- What: Deep-synthesis providers must authenticate users' real identities before allowing them to publish information. They must add a technical label to content generated or edited through the service; where the specified service types could confuse the public, the content also needs a prominent notice, and labels must not be deleted, altered or concealed.
- Controls: privacy_compliance, content_marking, deepfake_label
- Source: https://www.cac.gov.cn/2022-12/11/c_1672221949354811.htm

## AGC-CN-DSYN-15-19-20: Assess and file specified deep-synthesis services
- Rule: Deep Synthesis Provisions Arts. 15, 19–20 · status applicable · applies from 2023-01-10 · confidence high
- Who: roles provider; uses generated-media, deepfake; conditions: Filing applies to services with public-opinion attributes or social-mobilisation capability; model/template assessment covers the categories in Art. 15.
- What: Providers of services with public-opinion attributes or social-mobilisation capability must complete algorithm filing, updates and cancellation under the Algorithmic Recommendation Provisions, and display the filing number. Safety assessments are required for specified face/voice and sensitive non-biometric models or templates, and before launching new products, applications or functions with public-opinion or mobilisation attributes.
- Controls: registration, security_testing
- Source: https://www.cac.gov.cn/2022-12/11/c_1672221949354811.htm

## AGC-CN-GENAI-7-8: Use lawful, governed data for public-facing GenAI services
- Rule: Interim GenAI Measures Arts. 7–8 · status applicable · applies from 2023-08-15 · confidence high
- Who: roles provider; uses generated-media, gpai-model; conditions: GenAI services provided to the public in China; non-public R&D and applications are outside the Measures' stated scope.
- What: Providers must use training data and foundation models from lawful sources, respect intellectual property, obtain consent or another legal basis where training involves personal information, and improve data quality. They must also set workable data-labelling rules, assess annotation quality and train and supervise annotators.
- Controls: data_governance, privacy_compliance, copyright_policy, technical_documentation
- Source: https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm

## AGC-CN-GENAI-4-10-14-15: Control harmful outputs and provide user safeguards
- Rule: Interim GenAI Measures Arts. 4, 10, 14–15 · status applicable · applies from 2023-08-15 · confidence high
- Who: roles provider; uses generated-media, chatbot, minors; conditions: Public-facing GenAI services within the Measures' scope in China.
- What: Providers must not generate content prohibited by law and must take effective measures against specified discrimination and rights violations, while improving transparency and accuracy/reliability in light of service type. They must state intended users, contexts and uses, protect minors from excessive dependence, promptly stop and remediate illegal content, report it where required, and maintain a usable complaints channel with a published process and response times.
- Controls: content_moderation, minors_protection, transparency_notice, accuracy_robustness
- Source: https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm

## AGC-CN-GENAI-17: Assess and file qualifying public-facing GenAI services
- Rule: Interim GenAI Measures Art. 17 · status applicable · applies from 2023-08-15 · confidence high
- Who: roles provider; uses generated-media, chatbot, gpai-model; conditions: Only services with public-opinion attributes or social-mobilisation capability; the Measures apply to services offered to the public within China.
- What: Providers of generative AI services with public-opinion attributes or social-mobilisation capability must conduct a security assessment under applicable rules and complete algorithm filing, including subsequent changes and cancellation, under the Algorithmic Recommendation Provisions.
- Controls: security_testing, registration
- Source: https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm

## AGC-CN-LABEL-4-12: Label and verify AI-generated content across the service chain
- Rule: AI Content Labelling Measures Arts. 4–12 · status applicable · applies from 2025-09-01 · confidence high
- Who: roles provider, platform, any; uses generated-media, deepfake; conditions: Providers covered by the Algorithmic Recommendation, Deep Synthesis or GenAI rules; distribution-platform and user duties apply when content is distributed or posted through the relevant services.
- What: In-scope service providers must add explicit labels in the specified content types and contexts, preserve them in exported files, and embed implicit metadata with content attributes, provider name or code, and content number; they must explain labelling in user agreements and follow mandatory GB 45438-2025. Content-distribution providers must check metadata and add prominent notices for marked, declared or suspected generated content, while app-distribution platforms must verify labelling materials and users must declare and label generated content when publishing it. If a user requests content without an explicit label, the provider may supply it only after an agreement establishes user duties and it retains related logs for at least six months.
- Controls: content_marking, deepfake_label, audit_log, content_moderation
- Source: https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm

## AGC-CN-GB45438-4-6-E: Implement the mandatory AI-content labelling method
- Rule: GB 45438-2025 Clauses 4–6 and normative Annex E · status applicable · applies from 2025-09-01 · confidence high
- Who: roles provider, platform; uses generated-media, deepfake; conditions: Standard applies to providers of generated/synthetic content services and content-distribution services conducting AI-content labelling.
- What: GB 45438-2025 specifies technical methods for explicit labels and implicit file-metadata labels for generative-service and content-distribution providers. The official catalogue classifies the Chinese standard as compulsory (强标), current, and effective from 1 September 2025; the English version is listed as guidance.
- Controls: content_marking, deepfake_label, audit_log
- Source: https://openstd.samr.gov.cn/bzgk/std/std_list?p.p2=GB+45438-2025

## AGC-CN-CSL-20: Recognise the Cybersecurity Law's AI governance mandate
- Rule: Amended Cybersecurity Law Art. 20 · status applicable · applies from 2026-01-01 · confidence high
- Who: roles public-body; uses any-ai; conditions: The provision is directed to the state and government policy implementation; it does not itself specify an individual-provider compliance checklist.
- What: Article 20 directs the state to support AI basic research and key technologies, training-data and computing infrastructure, AI ethics norms, risk monitoring and assessment, and safety supervision; it also supports use of AI to improve cybersecurity. This is a state policy and government mandate, not a standalone technical duty or AI-specific penalty for private AI providers.
- Controls: risk_management, security_testing
- Source: http://www.npc.gov.cn/npc/c1773/c1848/c21114/wlaqfxz/wlaqfxz002/202511/t20251103_449242.html

## AGC-CN-ANTHRO-9-11: Govern human-like interaction safety and training data
- Rule: Anthropomorphic Interactive Services Measures Arts. 8–11 · status applicable · applies from 2026-07-15 · confidence high
- Who: roles provider; uses companion, chatbot, generated-media; conditions: Services offered to the public in China that simulate human personality, thinking and communication styles through continuous emotional interaction; ordinary customer support or Q&A without sustained emotional interaction is excluded.
- What: Providers of covered anthropomorphic interactive services must not generate the prohibited content or engage in specified harmful, manipulative or dependence-inducing conduct. They must maintain lifecycle safety, ethics, content and risk-response controls, and use legally sourced, checked and diverse training data with safeguards against poisoning and leakage.
- Controls: risk_management, data_governance, security_testing, content_moderation
- Source: https://www.cac.gov.cn/2026-04/10/c_1777558395078289.htm

## AGC-CN-ANTHRO-16: Protect interactive data and sensitive information
- Rule: Anthropomorphic Interactive Services Measures Arts. 16–17 · status applicable · applies from 2026-07-15 · confidence high
- Who: roles provider; uses companion, chatbot, minors; conditions: Covered anthropomorphic interactive services; heightened duties apply to sensitive interaction data and personal information of children under 14.
- What: Providers must protect user interaction data, may not give it to third parties without a legal basis or the user's clear consent, and must provide options to copy or delete interaction history. They may not use interaction data that is sensitive personal information to train models unless another law or administrative regulation permits it or the user gives separate consent; processing personal information of children under 14 also requires guardian consent and a compliance audit.
- Controls: privacy_compliance, user_controls, data_governance
- Source: https://www.cac.gov.cn/2026-04/10/c_1777558395078289.htm

## AGC-CN-ANTHRO-13-15: Protect minors and intervene in safety crises
- Rule: Anthropomorphic Interactive Services Measures Arts. 13–15 · status applicable · applies from 2026-07-15 · confidence high
- Who: roles provider; uses companion, minors; conditions: Applies to covered anthropomorphic interactive services; under-14 and elderly-person duties are triggered when those users receive the service.
- What: Providers must respond to serious user distress and imminent threats to life or health with appropriate intervention, and may need to contact a guardian or emergency contact. They must not offer virtual relatives or virtual partners to minors; services to under-14s otherwise require guardian consent, and providers must offer a minors mode and safeguards, while giving older users prominent risk guidance and help.
- Controls: minors_protection, privacy_compliance, human_oversight
- Source: https://www.cac.gov.cn/2026-04/10/c_1777558395078289.htm

## AGC-CN-ANTHRO-18-19: Disclose AI identity and allow users to leave
- Rule: Anthropomorphic Interactive Services Measures Arts. 18–19 · status applicable · applies from 2026-07-15 · confidence high
- Who: roles provider; uses companion, chatbot, generated-media; conditions: Covered anthropomorphic interactive services; dynamic dependence warnings are triggered by signs of excessive dependence or addiction.
- What: Providers must meet AI-generated-content labelling duties and clearly tell users they are interacting with an AI rather than a person. They must visibly remind users who show excessive dependence that the interaction is AI-generated, remind users after each continuous session exceeding two hours, and promptly stop when asked to exit without using continued interaction to obstruct them.
- Controls: ai_disclosure, deepfake_label, user_controls, minors_protection
- Source: https://www.cac.gov.cn/2026-04/10/c_1777558395078289.htm

## AGC-CN-ANTHRO-22-26: Assess and file human-like interactive services
- Rule: Anthropomorphic Interactive Services Measures Arts. 22–27 · status applicable · applies from 2026-07-15 · confidence high
- Who: roles provider, platform; uses companion, chatbot; conditions: Assessment thresholds and triggers are in Art. 22; algorithm filing and annual verification apply to providers, while Art. 25 platform duties apply to app-distribution platforms.
- What: Providers must submit a security-assessment report to the provincial cyberspace authority when launching a covered service or related function, making a major change through new technology, reaching 1 million registered users or 100,000 monthly active users, or facing specified safety risks; the assessment covers training data, safeguards, user demographics, crisis intervention and complaints. Providers must also complete algorithm filing and updates/cancellation, and app-distribution platforms must verify applicable assessment and filing materials before listing and in routine management.
- Controls: security_testing, registration, impact_assessment, audit_log
- Source: https://www.cac.gov.cn/2026-04/10/c_1777558395078289.htm
