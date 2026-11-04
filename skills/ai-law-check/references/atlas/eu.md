# EU AI Act (as amended by the Digital Omnibus on AI) (EU)

As of 2026-11-04. Review: draft-unreviewed. Binding. Bans since 2 Feb 2025, GPAI rules since 2 Aug 2025, transparency since 2 Aug 2026. Next dates are 2 Dec 2026 (new bans, marking for existing systems) and 2 Dec 2027 (Annex III high-risk).

## AGC-EU-AIA-5: Do not build or use banned AI practices
- Rule: EU AI Act Art. 5(1) · status applicable · applies from 2025-02-02 · confidence high
- Who: roles any; uses any-ai
- What: Placing on the market, putting into service or using AI for banned practices is prohibited. The list includes manipulative or deceptive techniques that cause significant harm, exploiting vulnerabilities, social scoring, predicting crime from profiling alone, untargeted scraping of facial images, emotion recognition at work or school, biometric categorisation inferring sensitive traits, and real-time remote biometric identification for law enforcement in public spaces (with narrow exceptions).
- Controls: prohibited_practices_screen
- Source: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-5

## AGC-EU-AIA-5-1-BA: Do not offer AI that creates non-consensual intimate images or child sexual abuse material
- Rule: EU AI Act Art. 5(1)(ba) and (bb) · status not-yet-applicable · applies from 2026-12-02 · confidence high
- Who: roles any; uses generated-media, deepfake
- What: From 2 December 2026 it is prohibited to place on the market, put into service or use an AI system that generates or manipulates realistic intimate or sexually explicit material of an identifiable person without that person's explicit consent, or that generates child sexual abuse material.
- Controls: prohibited_practices_screen, content_moderation
- Source: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-5

## AGC-EU-AIA-4: Support AI literacy of staff who run or use AI
- Rule: EU AI Act Art. 4(1) · status applicable · applies from 2025-02-02 · confidence high
- Who: roles provider, deployer; uses any-ai
- What: Providers and deployers must take measures to support the AI literacy of their staff and others operating AI on their behalf, taking into account their knowledge, the context of use and the people affected. As amended in 2026, this does not require guaranteeing a specific literacy level for any individual; the Commission and Member States must support companies, especially SMEs.
- Controls: ai_literacy
- Source: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-4

## AGC-EU-AIA-50-1: Tell people they are interacting with an AI system
- Rule: EU AI Act Art. 50(1) · status applicable · applies from 2026-08-02 · confidence high
- Who: roles provider; uses chatbot, agent, companion
- What: Providers must design AI systems that interact directly with people so those people are informed they are interacting with an AI, unless this is obvious to a reasonably well-informed person from the context.
- Controls: ai_disclosure
- Source: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50

## AGC-EU-AIA-50-2: Mark AI-generated content in a machine-readable way
- Rule: EU AI Act Art. 50(2) and Art. 111(4) · status applicable · applies from 2026-08-02 · confidence high
- Who: roles provider, gpai-provider; uses generated-media, deepfake
- What: Providers of AI systems, including general-purpose AI systems, that generate synthetic audio, image, video or text must mark outputs in a machine-readable format so they are detectable as AI-generated, using effective, interoperable, robust and reliable techniques as far as technically feasible. Assistive editing functions that do not substantially alter the input are exempt. Systems placed on the market before 2 August 2026 have until 2 December 2026.
- Controls: content_marking
- Source: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50

## AGC-EU-AIA-50-3: Inform people exposed to emotion recognition or biometric categorisation
- Rule: EU AI Act Art. 50(3) · status applicable · applies from 2026-08-02 · confidence high
- Who: roles deployer; uses emotion-recognition, biometric-categorisation
- What: Deployers of an emotion recognition or biometric categorisation system must inform the people exposed to it and process personal data in line with the GDPR and related EU data protection law.
- Controls: transparency_notice, privacy_compliance
- Source: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50

## AGC-EU-AIA-50-4: Label deepfakes and AI-written public-interest text
- Rule: EU AI Act Art. 50(4) · status applicable · applies from 2026-08-02 · confidence high
- Who: roles deployer; uses deepfake, generated-media
- What: Deployers who generate or manipulate image, audio or video that is a deepfake must disclose that it is artificially generated or manipulated (a lighter duty applies to evidently artistic, satirical or fictional works). Deployers publishing AI-generated text to inform the public on matters of public interest must disclose it, unless it underwent human review or editorial control and someone holds editorial responsibility.
- Controls: deepfake_label
- Source: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50

## AGC-EU-AIA-53: Document general-purpose AI models, respect copyright and publish a training-data summary
- Rule: EU AI Act Art. 53(1) · status applicable · applies from 2025-08-02 · confidence high
- Who: roles gpai-provider; uses gpai-model
- What: Providers of general-purpose AI models must keep technical documentation for authorities, give integrators the information they need, put in place a policy to comply with EU copyright law (including text-and-data-mining opt-outs) and publish a sufficiently detailed summary of the training content using the AI Office template. Open-source models are exempt from some documentation duties unless they pose systemic risk.
- Controls: technical_documentation, copyright_policy, training_data_summary
- Source: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-53

## AGC-EU-AIA-55: Evaluate and secure general-purpose AI models with systemic risk
- Rule: EU AI Act Art. 55(1) · status applicable · applies from 2025-08-02 · confidence high
- Who: roles gpai-provider; uses frontier-model; conditions: Models classified as having systemic risk (presumed above 10^25 FLOP of training compute, Art. 51)
- What: Providers of general-purpose AI models with systemic risk must evaluate models with state-of-the-art protocols including adversarial testing, assess and mitigate systemic risks, report serious incidents to the AI Office without undue delay, and ensure adequate cybersecurity.
- Controls: security_testing, safety_framework, incident_reporting
- Source: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-55

## AGC-EU-AIA-6: Check whether your system is high-risk
- Rule: EU AI Act Art. 6 and Annex III · status not-yet-applicable · applies from 2027-12-02 · confidence high
- Who: roles provider; uses hiring, credit, insurance, education, essential-services, healthcare, law-enforcement, migration, justice, critical-infrastructure, remote-biometric-id, biometric-categorisation, emotion-recognition, safety-component
- What: A system is high-risk if it is a safety component of (or is) a product under Annex I law that needs third-party conformity assessment, or if it falls into an Annex III area such as biometrics, critical infrastructure, education, employment, essential services and credit, law enforcement, migration, or justice and democratic processes. Some Annex III systems are not high-risk if they only perform narrow or preparatory tasks and do not profile people (Art. 6(3)); that assessment must be documented.
- Controls: risk_management, technical_documentation
- Source: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-6

## AGC-EU-AIA-9: Meet the high-risk requirements (risk, data, documentation, logs, transparency, oversight, robustness)
- Rule: EU AI Act Art. 9 to 15 · status not-yet-applicable · applies from 2027-12-02 · confidence high
- Who: roles provider; uses hiring, credit, insurance, education, essential-services, healthcare, law-enforcement, migration, justice, critical-infrastructure, remote-biometric-id, biometric-categorisation, emotion-recognition, safety-component; conditions: Only for systems classified as high-risk under Art. 6
- What: Providers of high-risk systems must run a risk management system across the life cycle (Art. 9), govern training, validation and test data (Art. 10), keep technical documentation per Annex IV (Art. 11), enable automatic event logging (Art. 12), give deployers clear instructions (Art. 13), design for effective human oversight including the ability to stop the system (Art. 14), and achieve appropriate accuracy, robustness and cybersecurity (Art. 15).
- Controls: risk_management, data_governance, technical_documentation, audit_log, transparency_notice, human_oversight, kill_switch, accuracy_robustness, security_testing
- Source: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-14

## AGC-EU-AIA-17: Run a quality management system and complete conformity assessment
- Rule: EU AI Act Art. 16, 17, 43, 47, 48 · status not-yet-applicable · applies from 2027-12-02 · confidence high
- Who: roles provider; uses hiring, credit, insurance, education, essential-services, healthcare, law-enforcement, migration, justice, critical-infrastructure, remote-biometric-id, biometric-categorisation, emotion-recognition, safety-component; conditions: Only for systems classified as high-risk under Art. 6. Simplified QMS options for SMEs and small mid-caps.
- What: Providers of high-risk systems must have a documented quality management system, complete the applicable conformity assessment before placing the system on the market, draw up an EU declaration of conformity and affix the CE marking.
- Controls: quality_management, conformity_assessment
- Source: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-17

## AGC-EU-AIA-49: Register high-risk systems in the EU database
- Rule: EU AI Act Art. 49 · status not-yet-applicable · applies from 2027-12-02 · confidence high
- Who: roles provider, public-body; uses hiring, credit, insurance, education, essential-services, law-enforcement, migration, justice, remote-biometric-id, biometric-categorisation, emotion-recognition
- What: Before placing a high-risk Annex III system on the market, providers must register themselves and the system in the EU database. Public authorities and bodies acting on their behalf must register their use of high-risk systems. Law-enforcement and migration systems go into a secure non-public section.
- Controls: registration
- Source: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-49

## AGC-EU-AIA-72: Monitor after release and report serious incidents
- Rule: EU AI Act Art. 72 and 73 · status not-yet-applicable · applies from 2027-12-02 · confidence high
- Who: roles provider; uses hiring, credit, insurance, education, essential-services, healthcare, law-enforcement, migration, justice, critical-infrastructure, remote-biometric-id, biometric-categorisation, emotion-recognition, safety-component
- What: Providers of high-risk systems must run post-market monitoring and report serious incidents to market surveillance authorities immediately after establishing a likely causal link, and no later than 15 days after becoming aware; no later than 2 days for widespread infringements or serious disruption of critical infrastructure; no later than 10 days in case of death.
- Controls: post_market_monitoring, incident_reporting
- Source: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-73

## AGC-EU-AIA-22: Appoint an EU authorised representative if you are outside the EU
- Rule: EU AI Act Art. 22 and 54 · status applicable · applies from 2025-08-02 · confidence medium
- Who: roles provider, gpai-provider; uses gpai-model, hiring, credit, insurance, education, essential-services, healthcare, law-enforcement, migration, justice, critical-infrastructure, safety-component; conditions: Provider established outside the EU
- What: Providers of high-risk AI systems and of general-purpose AI models established outside the EU must appoint an authorised representative in the EU by written mandate before placing their system or model on the EU market.
- Controls: local_representative
- Source: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-22

## AGC-EU-AIA-26: Use high-risk systems as instructed, with competent human oversight and logs
- Rule: EU AI Act Art. 26 · status not-yet-applicable · applies from 2027-12-02 · confidence high
- Who: roles deployer, employer, public-body; uses hiring, credit, insurance, education, essential-services, healthcare, law-enforcement, migration, justice, critical-infrastructure, remote-biometric-id, biometric-categorisation, emotion-recognition
- What: Deployers of high-risk systems must use them according to the instructions, assign human oversight to competent people, monitor operation, keep automatically generated logs for at least six months, inform workers and their representatives before workplace use, and inform people subject to decisions made or assisted by the system.
- Controls: human_oversight, audit_log, transparency_notice
- Source: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-26

## AGC-EU-AIA-27: Do a fundamental rights impact assessment before first use
- Rule: EU AI Act Art. 27 · status not-yet-applicable · applies from 2027-12-02 · confidence high
- Who: roles deployer, public-body; uses credit, insurance, essential-services, education, hiring, law-enforcement, migration, justice, public-sector-use
- What: Before first use of certain high-risk systems, deployers that are public bodies or private entities providing public services, and deployers of credit-scoring or life and health insurance pricing systems, must assess the impact on fundamental rights and notify the market surveillance authority of the results.
- Controls: impact_assessment
- Source: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-27

## AGC-EU-AIA-86: Explain high-risk decisions on request
- Rule: EU AI Act Art. 86 · status not-yet-applicable · applies from 2027-12-02 · confidence medium
- Who: roles deployer; uses hiring, credit, insurance, education, essential-services, law-enforcement, migration, justice
- What: People affected by a decision based on output of an Annex III high-risk system that produces legal or similarly significant effects can obtain a clear and meaningful explanation from the deployer of the role of the AI system and the main elements of the decision.
- Controls: transparency_notice, contest_and_appeal
- Source: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-86
