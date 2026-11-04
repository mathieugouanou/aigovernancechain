# Singapore AI governance and online harms (SG)

As of 2026-11-04. Review: draft-unreviewed. PDPA and election-advertising rules are binding. OSRAA's first-phase remedies began on 29 June 2026; its inauthentic-material category is still awaiting progressive implementation.

## AGC-SG-MGF20-2-7: Make AI decision processes explainable, fair and human-centric
- Rule: Model AI Governance Framework (2020) § 2.7 · status voluntary · applies from 2020-01-21 · confidence high
- Who: roles provider, deployer; uses any-ai; conditions: Organisations deploying AI should tailor the framework's recommendations to their risks and context.
- What: The voluntary second-edition framework recommends explainable, transparent and fair AI decision-making, with human well-being and safety central to design, development and deployment. It is guidance, not a legal duty.
- Controls: transparency_notice, human_oversight, bias_testing
- Source: https://www.imda.gov.sg/-/media/imda/files/infocomm-media-landscape/sg-digital/tech-pillars/artificial-intelligence/second-edition-of-the-model-ai-governance-framework.pdf

## AGC-SG-MGFGAI-9D: Govern Generative AI across its lifecycle and ecosystem
- Rule: Generative AI Governance Framework (2024) Framework, nine dimensions · status voluntary · applies from 2024-05-30 · confidence high
- Who: roles provider, developer, deployer; uses generated-media, gpai-model; conditions: Organizations across the Generative AI ecosystem; recommendations are voluntary.
- What: The voluntary framework recommends an ecosystem approach spanning accountability, data, trusted development and deployment, incident reporting, testing and assurance, security, content provenance, safety and alignment research, and AI for public good. It creates no statutory compliance duty.
- Controls: risk_management, data_governance, incident_reporting, security_testing, content_marking
- Source: https://www.imda.gov.sg/About-IMDA/Emerging-Technologies-and-Research/Artificial-Intelligence

## AGC-SG-AGENTIC-2-1: Bound agent risks before deployment
- Rule: Agentic AI Governance Framework Framework § 2.1 · status voluntary · applies from 2026-01-22 · confidence high
- Who: roles provider, deployer, developer; uses agent; conditions: Guidance for organizations developing agents in-house or deploying third-party agentic solutions.
- What: The framework recommends assessing whether an agent use case is suitable, then limiting its access to tools and systems and defining its identity, permissions and scope of actions. The appropriate boundary should reflect the risk and reversibility of agent actions.
- Controls: risk_management, tool_scope
- Source: https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf

## AGC-SG-AGENTIC-2-2: Assign accountable humans and approval checkpoints
- Rule: Agentic AI Governance Framework Framework § 2.2 · status voluntary · applies from 2026-01-22 · confidence high
- Who: roles provider, deployer, developer, employer; uses agent; conditions: Guidance for organizations developing or deploying agentic systems.
- What: The framework recommends clear allocation of responsibility across internal teams and external vendors, with meaningful human oversight. Significant checkpoints should require human approval, especially for high-stakes or irreversible agent actions.
- Controls: human_oversight, audit_log
- Source: https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf

## AGC-SG-AGENTIC-2-3: Test, monitor and log agent behavior
- Rule: Agentic AI Governance Framework Framework § 2.3 · status voluntary · applies from 2026-01-22 · confidence high
- Who: roles provider, deployer, developer; uses agent; conditions: Guidance for organizations developing or deploying agentic systems.
- What: The framework recommends technical controls throughout the agent lifecycle, including pre-deployment testing and continuous monitoring and testing after deployment. It also recommends reporting and failsafe mechanisms for agent failures or unexpected behavior.
- Controls: security_testing, audit_log, post_market_monitoring, kill_switch
- Source: https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf

## AGC-SG-AGENTIC-2-4: Inform and train agent end users
- Rule: Agentic AI Governance Framework Framework § 2.4 · status voluntary · applies from 2026-01-22 · confidence high
- Who: roles deployer, employer; uses agent; conditions: Guidance for organizations whose staff or customers interact with or integrate agents into work processes.
- What: The framework recommends telling users about an agent's range of actions, its data access and the user's responsibilities. Organizations should consider training employees to manage human-agent interactions, provide effective oversight and retain relevant skills.
- Controls: transparency_notice, ai_literacy
- Source: https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf

## AGC-SG-AIVERIFY-11: Test AI systems against responsible-AI principles
- Rule: AI Verify Testing Framework, 11 governance principles · status voluntary · applies from 2022-05-25 · confidence high
- Who: roles provider, deployer; uses any-ai; conditions: Optional assurance tool; it is not a statutory certification requirement.
- What: AI Verify is an optional testing framework and software toolkit for assessing AI systems against 11 governance principles. It combines standardized tests for selected properties with process checks, and current IMDA materials describe coverage for both traditional AI and Generative AI.
- Controls: bias_testing, accuracy_robustness, security_testing, risk_management
- Source: https://www.imda.gov.sg/ai-verify

## AGC-SG-EIOA-PEA-61MA-1: Do not publish realistic false candidate representations in online election ads
- Rule: Elections Integrity Amendment PEA § 61MA(1); PrEA § 42LA(1) · status applicable · applies from 2025-01-22 · confidence high
- Who: roles any; uses deepfake, generated-media, justice; conditions: Applies to relevant online election advertising published in Singapore during the election period, where the publisher knows or ought reasonably to know its election-advertising character.
- What: During an election period, publishing or causing publication in Singapore of online election advertising with a digitally generated or manipulated audio, visual or audiovisual representation that realistically depicts a candidate saying or doing something they did not is an offence. The law contains specific exceptions, including private or domestic communications and publication of election news by an authorized news agency.
- Controls: content_moderation
- Source: https://sso.agc.gov.sg/Acts-Supp/34-2024/Published/20241121?DocDate=20241121

## AGC-SG-PDPA-13-18-20: Establish a lawful basis and notify purposes for personal-data use
- Rule: PDPA §§ 13-20 · status applicable · applies from 2014-07-02 · confidence high
- Who: roles provider, developer, deployer; uses any-ai; conditions: An organization collects, uses or discloses personal data in an AI system or model.
- What: An organization must not collect, use or disclose personal data unless consent, deemed consent, an applicable exception or another law permits it. It must limit use to appropriate purposes and notify individuals as required; these duties apply when personal data is processed for AI development or deployment.
- Controls: privacy_compliance, transparency_notice, user_controls
- Source: https://sso.agc.gov.sg/Act/PDPA2012

## AGC-SG-PDPA-11-12-24-25: Maintain accountability, security and retention controls
- Rule: PDPA §§ 11-12, 24-25 · status applicable · applies from 2014-07-02 · confidence high
- Who: roles provider, developer, deployer; uses any-ai; conditions: An organization holds or controls personal data processed in an AI context.
- What: Organizations must take responsibility for personal data under their control, maintain data-protection policies and practices, make reasonable security arrangements, and cease retaining personal data when retention is no longer necessary for legal or business purposes. These duties also apply to personal data used in AI systems.
- Controls: privacy_compliance, data_governance, security_testing
- Source: https://sso.agc.gov.sg/Act/PDPA2012

## AGC-SG-PDPCREC-9: Apply PDPC's advice to AI recommendation and decision systems
- Rule: PDPC AI Recommendation and Decision Guidelines Guidelines §§ 2.2, 3.1, 9.1-9.7 and 10 · status voluntary · applies from 2024-03-01 · confidence high
- Who: roles provider, developer, deployer; uses recommender, significant-decision, profiling; conditions: Personal data is used in an AI recommendation, prediction or decision system; underlying PDPA duties remain binding.
- What: The nonbinding guidelines explain how the PDPA applies to personal data used to develop and deploy machine-learning systems that make recommendations, predictions or decisions. They recommend meaningful consent, contextual notices and proportionate transparency about relevant data use and safeguards.
- Controls: privacy_compliance, transparency_notice, user_controls
- Source: https://www.pdpc.gov.sg/-/media/files/pdpc/pdf-files/advisory-guidelines/advisory-guidelines-on-the-use-of-personal-data-in-ai-recommendation-and-decision-systems.pdf

## AGC-SG-PDPCGENAI-4-4: Give AI-specific notices for large-scale GenAI training data
- Rule: PDPC Generative AI Guidelines Guidelines §§ 4.2-4.8, 5.1 and 7.1 · status voluntary · applies from 2026-07-20 · confidence high
- Who: roles provider, developer, deployer; uses generated-media, gpai-model; conditions: Use of personal data in Generative AI development or deployment; the AI-specific notice point concerns large-scale training or fine-tuning.
- What: The advisory guidance says general notifications are insufficient for large-scale Generative AI model training or fine-tuning and recommends AI-specific notices describing the data and its use. It also encourages data minimization or anonymization and confirms that model providers processing personal data are organizations under the PDPA.
- Controls: privacy_compliance, transparency_notice, user_controls, data_governance
- Source: https://www.pdpc.gov.sg/assets/143cb9d4-532e-4cca-9a77-bcc0415ca294

## AGC-SG-OSRAA-13-14-83-84: Do not communicate qualifying intimate or child-abuse images
- Rule: OSRAA §§ 13-14, 83-84 · status applicable · applies from 2026-06-29 · confidence high
- Who: roles any, platform; uses generated-media, deepfake; conditions: Only material meeting the statutory thresholds and exceptions; the Act's first-phase harms became operational on 29 June 2026.
- What: The Act prohibits communications that meet the statutory definitions of intimate-image abuse or image-based child abuse; the relevant image definitions include images altered or generated by any means. These harms are in the first operational phase, and victims may seek civil remedies while the Commissioner may direct communicators, administrators or platforms to act.
- Controls: content_moderation
- Source: https://sso.agc.gov.sg/Act/OSRAA2025

## AGC-SG-OSRAA-16-86: Track the pending inauthentic-material-abuse provisions
- Rule: OSRAA §§ 16, 86 · status not-yet-applicable · applies from n/a · confidence high
- Who: roles any, platform; uses generated-media, deepfake; conditions: Not yet operational as of 4 November 2026; monitor for a commencement notification.
- What: Section 16 covers online inauthentic material abuse, including realistic false or misleading digitally altered or generated depictions that meet the statutory harm threshold; section 86 provides the corresponding tort. MDDI said this category would be progressively implemented and had not announced a commencement date as of 10 September 2026.
- Controls: content_moderation
- Source: https://sso.agc.gov.sg/Act/OSRAA2025
