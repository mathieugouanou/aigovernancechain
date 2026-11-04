# Singapore AI governance and online harms

> Most AI governance frameworks are voluntary, while existing privacy, election and online-harm laws create binding duties in defined situations.

**Jurisdiction:** Singapore (`SG`) · **As of:** 4 Nov 2026 · **Review:** draft-unreviewed ([reviewer seat open](../REVIEWERS.md))

**Who it hits:** AI developers, providers and deployers; organizations handling personal data; election advertisers; communicators, online administrators and platforms.

**Status:** PDPA and election-advertising rules are binding. OSRAA's first-phase remedies began on 29 June 2026; its inauthentic-material category is still awaiting progressive implementation.

## Instruments

| Instrument | Force | Status | Penalties |
|---|---|---|---|
| [Model AI Governance Framework (2020)](https://www.imda.gov.sg/-/media/imda/files/infocomm-media-landscape/sg-digital/tech-pillars/artificial-intelligence/second-edition-of-the-model-ai-governance-framework.pdf): Model Artificial Intelligence Governance Framework, Second Edition | voluntary | voluntary | n/a |
| [Generative AI Governance Framework (2024)](https://www.imda.gov.sg/About-IMDA/Emerging-Technologies-and-Research/Artificial-Intelligence): Model AI Governance Framework for Generative AI | voluntary | voluntary | n/a |
| [Agentic AI Governance Framework](https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf): Model AI Governance Framework for Agentic AI, Version 1.5 | voluntary | voluntary | n/a |
| [AI Verify](https://www.imda.gov.sg/ai-verify): AI Verify Testing Framework and Toolkit | voluntary | voluntary | n/a |
| [Elections Integrity Amendment](https://sso.agc.gov.sg/Acts-Supp/34-2024/Published/20241121?DocDate=20241121): Elections (Integrity of Online Advertising) (Amendment) Act 2024 | binding | in-force | A person convicted for the candidate-representation offence may be fined up to S$1,000, imprisoned for up to 12 months, or both. |
| [PDPA](https://sso.agc.gov.sg/Act/PDPA2012): Personal Data Protection Act 2012 | binding | in-force | For qualifying contraventions under section 48J, up to 10% of annual Singapore turnover where it exceeds S$10 million, or S$1 million otherwise; the exact provision and cap depend on the breach. |
| [PDPC AI Recommendation and Decision Guidelines](https://www.pdpc.gov.sg/-/media/files/pdpc/pdf-files/advisory-guidelines/advisory-guidelines-on-the-use-of-personal-data-in-ai-recommendation-and-decision-systems.pdf): Advisory Guidelines on Use of Personal Data in AI Recommendation and Decision Systems | voluntary | voluntary | n/a |
| [PDPC Generative AI Guidelines](https://www.pdpc.gov.sg/assets/143cb9d4-532e-4cca-9a77-bcc0415ca294): Advisory Guidelines on Use of Personal Data in Generative AI | voluntary | voluntary | n/a |
| [OSRAA](https://sso.agc.gov.sg/Act/OSRAA2025): Online Safety (Relief and Accountability) Act 2025 | binding | partially-applicable | Civil remedies and Commissioner directions apply to harms implemented in the relevant phase; the Act is being implemented progressively. |

## Key dates

- **2024-03-01** (passed) Apply PDPC's advice to AI recommendation and decision systems (PDPC AI Recommendation and Decision Guidelines Guidelines §§ 2.2, 3.1, 9.1-9.7 and 10)
- **2024-03-01** (passed) PDPC AI Recommendation and Decision Guidelines: Final advisory guidelines issued
- **2024-05-30** (passed) Generative AI Governance Framework (2024): IMDA introduced the Generative AI framework as an ecosystem-level voluntary framework
- **2024-05-30** (passed) Govern Generative AI across its lifecycle and ecosystem (Generative AI Governance Framework (2024) Framework, nine dimensions)
- **2024-11-21** (passed) Elections Integrity Amendment: Amendment Act published in the Government Gazette
- **2025-01-22** (passed) Do not publish realistic false candidate representations in online election ads (Elections Integrity Amendment PEA § 61MA(1); PrEA § 42LA(1))
- **2026-01-22** (passed) Agentic AI Governance Framework: IMDA first published the Agentic AI framework
- **2026-01-22** (passed) Assign accountable humans and approval checkpoints (Agentic AI Governance Framework Framework § 2.2)
- **2026-01-22** (passed) Bound agent risks before deployment (Agentic AI Governance Framework Framework § 2.1)
- **2026-01-22** (passed) Inform and train agent end users (Agentic AI Governance Framework Framework § 2.4)
- **2026-01-22** (passed) Test, monitor and log agent behavior (Agentic AI Governance Framework Framework § 2.3)
- **2026-05-20** (passed) Agentic AI Governance Framework: Version 1.5 published; the PDF notes a further update on 5 June 2026
- **2026-06-05** (passed) Agentic AI Governance Framework: Version 1.5 PDF updated
- **2026-06-29** (passed) Do not communicate qualifying intimate or child-abuse images (OSRAA §§ 13-14, 83-84)
- **2026-07-20** (passed) Give AI-specific notices for large-scale GenAI training data (PDPC Generative AI Guidelines Guidelines §§ 4.2-4.8, 5.1 and 7.1)
- **2026-07-20** (passed) PDPC Generative AI Guidelines: PDPC issued the final Generative AI personal-data guidelines
- **2026-09-10** (passed) OSRAA: MDDI confirmed inauthentic material abuse would be progressively implemented and no commencement date had been announced

## Obligations (14)

| ID | Article | Obligation | Applies from | Status | Controls | Confidence |
|---|---|---|---|---|---|---|
| `AGC-SG-MGF20-2-7` | [§ 2.7](https://www.imda.gov.sg/-/media/imda/files/infocomm-media-landscape/sg-digital/tech-pillars/artificial-intelligence/second-edition-of-the-model-ai-governance-framework.pdf) | **Make AI decision processes explainable, fair and human-centric**: The voluntary second-edition framework recommends explainable, transparent and fair AI decision-making, with human well-being and safety central to design, development and deployment. It is guidance, not a legal duty. | 2020-01-21 | voluntary | transparency_notice, human_oversight, bias_testing | high |
| `AGC-SG-MGFGAI-9D` | [Framework, nine dimensions](https://www.imda.gov.sg/About-IMDA/Emerging-Technologies-and-Research/Artificial-Intelligence) | **Govern Generative AI across its lifecycle and ecosystem**: The voluntary framework recommends an ecosystem approach spanning accountability, data, trusted development and deployment, incident reporting, testing and assurance, security, content provenance, safety and alignment research, and AI for public good. It creates no statutory compliance duty. | 2024-05-30 | voluntary | risk_management, data_governance, incident_reporting, security_testing, content_marking | high |
| `AGC-SG-AGENTIC-2-1` | [Framework § 2.1](https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf) | **Bound agent risks before deployment**: The framework recommends assessing whether an agent use case is suitable, then limiting its access to tools and systems and defining its identity, permissions and scope of actions. The appropriate boundary should reflect the risk and reversibility of agent actions. | 2026-01-22 | voluntary | risk_management, tool_scope | high |
| `AGC-SG-AGENTIC-2-2` | [Framework § 2.2](https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf) | **Assign accountable humans and approval checkpoints**: The framework recommends clear allocation of responsibility across internal teams and external vendors, with meaningful human oversight. Significant checkpoints should require human approval, especially for high-stakes or irreversible agent actions. | 2026-01-22 | voluntary | human_oversight, audit_log | high |
| `AGC-SG-AGENTIC-2-3` | [Framework § 2.3](https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf) | **Test, monitor and log agent behavior**: The framework recommends technical controls throughout the agent lifecycle, including pre-deployment testing and continuous monitoring and testing after deployment. It also recommends reporting and failsafe mechanisms for agent failures or unexpected behavior. | 2026-01-22 | voluntary | security_testing, audit_log, post_market_monitoring, kill_switch | high |
| `AGC-SG-AGENTIC-2-4` | [Framework § 2.4](https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf) | **Inform and train agent end users**: The framework recommends telling users about an agent's range of actions, its data access and the user's responsibilities. Organizations should consider training employees to manage human-agent interactions, provide effective oversight and retain relevant skills. | 2026-01-22 | voluntary | transparency_notice, ai_literacy | high |
| `AGC-SG-AIVERIFY-11` | [Testing Framework, 11 governance principles](https://www.imda.gov.sg/ai-verify) | **Test AI systems against responsible-AI principles**: AI Verify is an optional testing framework and software toolkit for assessing AI systems against 11 governance principles. It combines standardized tests for selected properties with process checks, and current IMDA materials describe coverage for both traditional AI and Generative AI. | 2022-05-25 | voluntary | bias_testing, accuracy_robustness, security_testing, risk_management | high |
| `AGC-SG-EIOA-PEA-61MA-1` | [PEA § 61MA(1); PrEA § 42LA(1)](https://sso.agc.gov.sg/Acts-Supp/34-2024/Published/20241121?DocDate=20241121) | **Do not publish realistic false candidate representations in online election ads**: During an election period, publishing or causing publication in Singapore of online election advertising with a digitally generated or manipulated audio, visual or audiovisual representation that realistically depicts a candidate saying or doing something they did not is an offence. The law contains specific exceptions, including private or domestic communications and publication of election news by an authorized news agency. | 2025-01-22 | applicable | content_moderation | high |
| `AGC-SG-PDPA-13-18-20` | [PDPA §§ 13-20](https://sso.agc.gov.sg/Act/PDPA2012) | **Establish a lawful basis and notify purposes for personal-data use**: An organization must not collect, use or disclose personal data unless consent, deemed consent, an applicable exception or another law permits it. It must limit use to appropriate purposes and notify individuals as required; these duties apply when personal data is processed for AI development or deployment. | 2014-07-02 | applicable | privacy_compliance, transparency_notice, user_controls | high |
| `AGC-SG-PDPA-11-12-24-25` | [PDPA §§ 11-12, 24-25](https://sso.agc.gov.sg/Act/PDPA2012) | **Maintain accountability, security and retention controls**: Organizations must take responsibility for personal data under their control, maintain data-protection policies and practices, make reasonable security arrangements, and cease retaining personal data when retention is no longer necessary for legal or business purposes. These duties also apply to personal data used in AI systems. | 2014-07-02 | applicable | privacy_compliance, data_governance, security_testing | high |
| `AGC-SG-PDPCREC-9` | [Guidelines §§ 2.2, 3.1, 9.1-9.7 and 10](https://www.pdpc.gov.sg/-/media/files/pdpc/pdf-files/advisory-guidelines/advisory-guidelines-on-the-use-of-personal-data-in-ai-recommendation-and-decision-systems.pdf) | **Apply PDPC's advice to AI recommendation and decision systems**: The nonbinding guidelines explain how the PDPA applies to personal data used to develop and deploy machine-learning systems that make recommendations, predictions or decisions. They recommend meaningful consent, contextual notices and proportionate transparency about relevant data use and safeguards. | 2024-03-01 | voluntary | privacy_compliance, transparency_notice, user_controls | high |
| `AGC-SG-PDPCGENAI-4-4` | [Guidelines §§ 4.2-4.8, 5.1 and 7.1](https://www.pdpc.gov.sg/assets/143cb9d4-532e-4cca-9a77-bcc0415ca294) | **Give AI-specific notices for large-scale GenAI training data**: The advisory guidance says general notifications are insufficient for large-scale Generative AI model training or fine-tuning and recommends AI-specific notices describing the data and its use. It also encourages data minimization or anonymization and confirms that model providers processing personal data are organizations under the PDPA. | 2026-07-20 | voluntary | privacy_compliance, transparency_notice, user_controls, data_governance | high |
| `AGC-SG-OSRAA-13-14-83-84` | [OSRAA §§ 13-14, 83-84](https://sso.agc.gov.sg/Act/OSRAA2025) | **Do not communicate qualifying intimate or child-abuse images**: The Act prohibits communications that meet the statutory definitions of intimate-image abuse or image-based child abuse; the relevant image definitions include images altered or generated by any means. These harms are in the first operational phase, and victims may seek civil remedies while the Commissioner may direct communicators, administrators or platforms to act. | 2026-06-29 | applicable | content_moderation | high |
| `AGC-SG-OSRAA-16-86` | [OSRAA §§ 16, 86](https://sso.agc.gov.sg/Act/OSRAA2025) | **Track the pending inauthentic-material-abuse provisions**: Section 16 covers online inauthentic material abuse, including realistic false or misleading digitally altered or generated depictions that meet the statutory harm threshold; section 86 provides the corresponding tort. MDDI said this category would be progressively implemented and had not announced a commencement date as of 10 September 2026. | n/a | not-yet-applicable | content_moderation | high |

## Start here

The controls this regime asks for most often. Declare them in your `AI_GOVERNANCE.md`:

- `content_moderation`: Notice-and-removal or moderation of harmful AI content (3 obligations)
- `privacy_compliance`: Personal-data law duties linked to the AI use (2 obligations)
- `transparency_notice`: Affected people get notice and explanation (1 obligation)
- `user_controls`: Opt-out, consent or user choice (1 obligation)
- `data_governance`: Training, validation and test data are governed (1 obligation)

## Check your system

```bash
npx github:mathieugouanou/aigovernancechain scope -j SG -r deployer -u chatbot
npx github:mathieugouanou/aigovernancechain deadlines -j SG --days 365
```

## Sources

- [IMDA/PDPC Model AI Governance Framework, Second Edition (2020)](https://www.imda.gov.sg/-/media/imda/files/infocomm-media-landscape/sg-digital/tech-pillars/artificial-intelligence/second-edition-of-the-model-ai-governance-framework.pdf)
- [IMDA Artificial Intelligence in Singapore: frameworks and AI Verify](https://www.imda.gov.sg/About-IMDA/Emerging-Technologies-and-Research/Artificial-Intelligence)
- [IMDA 2024 Annual Report: Generative AI framework and nine dimensions](https://www.imda.gov.sg/-/media/imda/files/about/resources/corporate-publications/annual-report/imda-annual-report-2024.pdf)
- [IMDA Model AI Governance Framework for Agentic AI, version 1.5](https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf)
- [PDPC Advisory Guidelines on AI Recommendation and Decision Systems (2024)](https://www.pdpc.gov.sg/-/media/files/pdpc/pdf-files/advisory-guidelines/advisory-guidelines-on-the-use-of-personal-data-in-ai-recommendation-and-decision-systems.pdf)
- [PDPC Advisory Guidelines on Use of Personal Data in Generative AI (2026)](https://www.pdpc.gov.sg/assets/143cb9d4-532e-4cca-9a77-bcc0415ca294)
- [Personal Data Protection Act 2012](https://sso.agc.gov.sg/Act/PDPA2012)
- [Elections (Integrity of Online Advertising) (Amendment) Act 2024](https://sso.agc.gov.sg/Acts-Supp/34-2024/Published/20241121?DocDate=20241121)
- [Parliamentary Elections Act 1954, s. 61MA](https://sso.agc.gov.sg/Act/PEA1954?ProvIds=pr61MA-)
- [Online Safety (Relief and Accountability) Act 2025](https://sso.agc.gov.sg/Act/OSRAA2025)
- [MDDI OSRAA commencement and phased-implementation statement (14 May 2026)](https://www.mddi.gov.sg/newsroom/online-safety-commission-and-online-safety--relief-and-accountability--act-2025-to-start-on-29-june-2026/)
- [MDDI response on AI-generated content and progressive implementation of inauthentic-material abuse (10 Sep 2026)](https://www.mddi.gov.sg/newsroom/mddi-response-to-pq-on-protecting-against-unauthorised-ai-generated-likeness-in-advertisements-and-operationalising-online-safety-commission-mandate-over-inauthentic-material-abuse/)

---

Generated from [`atlas/regimes/sg.yaml`](../atlas/regimes/sg.yaml). Edit the YAML, not this card. Draft open data under CC BY 4.0, not legal advice. [Report an error](https://github.com/mathieugouanou/aigovernancechain/issues/new?template=obligation-correction.yml).
