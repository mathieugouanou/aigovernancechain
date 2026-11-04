# EU AI Act (as amended by the Digital Omnibus on AI)

> The world's first horizontal AI law. Bans some uses, sets transparency duties for chatbots and generated content, and adds strict rules for high-risk systems.

**Jurisdiction:** European Union (`EU`) · **As of:** 4 Nov 2026 · **Review:** draft-unreviewed ([reviewer seat open](../REVIEWERS.md))

**Who it hits:** Anyone who places an AI system or general-purpose AI model on the EU market, or uses AI in the EU, wherever the company is based.

**Status:** Binding. Bans since 2 Feb 2025, GPAI rules since 2 Aug 2025, transparency since 2 Aug 2026. Next dates are 2 Dec 2026 (new bans, marking for existing systems) and 2 Dec 2027 (Annex III high-risk).

## Instruments

| Instrument | Force | Status | Penalties |
|---|---|---|---|
| [EU AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj): Regulation (EU) 2024/1689 (Artificial Intelligence Act), as amended by Regulation (EU) 2026/1744 (Digital Omnibus on AI) | binding | partially-applicable | Up to EUR 35 million or 7% of worldwide turnover for banned practices (Art. 99(3)); up to EUR 15 million or 3% for most other duties, including Art. 50 (Art. 99(4)); up to EUR 7.5 million or 1% for misleading information (Art. 99(5)). GPAI providers up to EUR 15 million or 3% (Art. 101). Lower caps for SMEs (Art. 99(6)). |
| [EU Code of Practice on AI-generated content](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content): Code of Practice on marking and labelling of AI-generated content | voluntary | voluntary | n/a |

## Key dates

- **2024-08-01** (passed) EU AI Act: AI Act enters into force
- **2025-02-02** (passed) Do not build or use banned AI practices (EU AI Act Art. 5(1))
- **2025-02-02** (passed) Support AI literacy of staff who run or use AI (EU AI Act Art. 4(1))
- **2025-08-02** (passed) Appoint an EU authorised representative if you are outside the EU (EU AI Act Art. 22 and 54)
- **2025-08-02** (passed) Document general-purpose AI models, respect copyright and publish a training-data summary (EU AI Act Art. 53(1))
- **2025-08-02** (passed) Evaluate and secure general-purpose AI models with systemic risk (EU AI Act Art. 55(1))
- **2026-06-10** (passed) EU Code of Practice on AI-generated content: Final Code of Practice published
- **2026-07-27** (passed) EU AI Act: Digital Omnibus on AI (Reg. (EU) 2026/1744) enters into force; Arts. 102 to 110 apply
- **2026-08-02** (passed) Inform people exposed to emotion recognition or biometric categorisation (EU AI Act Art. 50(3))
- **2026-08-02** (passed) Label deepfakes and AI-written public-interest text (EU AI Act Art. 50(4))
- **2026-08-02** (passed) Mark AI-generated content in a machine-readable way (EU AI Act Art. 50(2) and Art. 111(4))
- **2026-08-02** (passed) Tell people they are interacting with an AI system (EU AI Act Art. 50(1))
- **2026-12-02** Bans on AI-generated non-consensual intimate content and CSAM apply
- **2026-12-02** Mark outputs of generative systems placed on the market before 2 Aug 2026
- **2027-08-02** Legacy GPAI models (placed before 2 Aug 2025) must comply
- **2027-12-02** Annex III high-risk rules apply
- **2028-08-02** Annex I (product) high-risk rules apply
- **2030-08-02** EU AI Act: Providers and deployers of high-risk systems used by public authorities and already on the market must comply

## Obligations (18)

| ID | Article | Obligation | Applies from | Status | Controls | Confidence |
|---|---|---|---|---|---|---|
| `AGC-EU-AIA-5` | [Art. 5(1)](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-5) | **Do not build or use banned AI practices**: Placing on the market, putting into service or using AI for banned practices is prohibited. The list includes manipulative or deceptive techniques that cause significant harm, exploiting vulnerabilities, social scoring, predicting crime from profiling alone, untargeted scraping of facial images, emotion recognition at work or school, biometric categorisation inferring sensitive traits, and real-time remote biometric identification for law enforcement in public spaces (with narrow exceptions). | 2025-02-02 | applicable | prohibited_practices_screen | high |
| `AGC-EU-AIA-5-1-BA` | [Art. 5(1)(ba) and (bb)](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-5) | **Do not offer AI that creates non-consensual intimate images or child sexual abuse material**: From 2 December 2026 it is prohibited to place on the market, put into service or use an AI system that generates or manipulates realistic intimate or sexually explicit material of an identifiable person without that person's explicit consent, or that generates child sexual abuse material. | 2026-12-02 | not-yet-applicable | prohibited_practices_screen, content_moderation | high |
| `AGC-EU-AIA-4` | [Art. 4(1)](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-4) | **Support AI literacy of staff who run or use AI**: Providers and deployers must take measures to support the AI literacy of their staff and others operating AI on their behalf, taking into account their knowledge, the context of use and the people affected. As amended in 2026, this does not require guaranteeing a specific literacy level for any individual; the Commission and Member States must support companies, especially SMEs. | 2025-02-02 | applicable | ai_literacy | high |
| `AGC-EU-AIA-50-1` | [Art. 50(1)](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50) | **Tell people they are interacting with an AI system**: Providers must design AI systems that interact directly with people so those people are informed they are interacting with an AI, unless this is obvious to a reasonably well-informed person from the context. | 2026-08-02 | applicable | ai_disclosure | high |
| `AGC-EU-AIA-50-2` | [Art. 50(2) and Art. 111(4)](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50) | **Mark AI-generated content in a machine-readable way**: Providers of AI systems, including general-purpose AI systems, that generate synthetic audio, image, video or text must mark outputs in a machine-readable format so they are detectable as AI-generated, using effective, interoperable, robust and reliable techniques as far as technically feasible. Assistive editing functions that do not substantially alter the input are exempt. Systems placed on the market before 2 August 2026 have until 2 December 2026. | 2026-08-02 | applicable | content_marking | high |
| `AGC-EU-AIA-50-3` | [Art. 50(3)](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50) | **Inform people exposed to emotion recognition or biometric categorisation**: Deployers of an emotion recognition or biometric categorisation system must inform the people exposed to it and process personal data in line with the GDPR and related EU data protection law. | 2026-08-02 | applicable | transparency_notice, privacy_compliance | high |
| `AGC-EU-AIA-50-4` | [Art. 50(4)](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50) | **Label deepfakes and AI-written public-interest text**: Deployers who generate or manipulate image, audio or video that is a deepfake must disclose that it is artificially generated or manipulated (a lighter duty applies to evidently artistic, satirical or fictional works). Deployers publishing AI-generated text to inform the public on matters of public interest must disclose it, unless it underwent human review or editorial control and someone holds editorial responsibility. | 2026-08-02 | applicable | deepfake_label | high |
| `AGC-EU-AIA-53` | [Art. 53(1)](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-53) | **Document general-purpose AI models, respect copyright and publish a training-data summary**: Providers of general-purpose AI models must keep technical documentation for authorities, give integrators the information they need, put in place a policy to comply with EU copyright law (including text-and-data-mining opt-outs) and publish a sufficiently detailed summary of the training content using the AI Office template. Open-source models are exempt from some documentation duties unless they pose systemic risk. | 2025-08-02 | applicable | technical_documentation, copyright_policy, training_data_summary | high |
| `AGC-EU-AIA-55` | [Art. 55(1)](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-55) | **Evaluate and secure general-purpose AI models with systemic risk**: Providers of general-purpose AI models with systemic risk must evaluate models with state-of-the-art protocols including adversarial testing, assess and mitigate systemic risks, report serious incidents to the AI Office without undue delay, and ensure adequate cybersecurity. | 2025-08-02 | applicable | security_testing, safety_framework, incident_reporting | high |
| `AGC-EU-AIA-6` | [Art. 6 and Annex III](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-6) | **Check whether your system is high-risk**: A system is high-risk if it is a safety component of (or is) a product under Annex I law that needs third-party conformity assessment, or if it falls into an Annex III area such as biometrics, critical infrastructure, education, employment, essential services and credit, law enforcement, migration, or justice and democratic processes. Some Annex III systems are not high-risk if they only perform narrow or preparatory tasks and do not profile people (Art. 6(3)); that assessment must be documented. | 2027-12-02 | not-yet-applicable | risk_management, technical_documentation | high |
| `AGC-EU-AIA-9` | [Art. 9 to 15](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-14) | **Meet the high-risk requirements (risk, data, documentation, logs, transparency, oversight, robustness)**: Providers of high-risk systems must run a risk management system across the life cycle (Art. 9), govern training, validation and test data (Art. 10), keep technical documentation per Annex IV (Art. 11), enable automatic event logging (Art. 12), give deployers clear instructions (Art. 13), design for effective human oversight including the ability to stop the system (Art. 14), and achieve appropriate accuracy, robustness and cybersecurity (Art. 15). | 2027-12-02 | not-yet-applicable | risk_management, data_governance, technical_documentation, audit_log, transparency_notice, human_oversight, kill_switch, accuracy_robustness, security_testing | high |
| `AGC-EU-AIA-17` | [Art. 16, 17, 43, 47, 48](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-17) | **Run a quality management system and complete conformity assessment**: Providers of high-risk systems must have a documented quality management system, complete the applicable conformity assessment before placing the system on the market, draw up an EU declaration of conformity and affix the CE marking. | 2027-12-02 | not-yet-applicable | quality_management, conformity_assessment | high |
| `AGC-EU-AIA-49` | [Art. 49](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-49) | **Register high-risk systems in the EU database**: Before placing a high-risk Annex III system on the market, providers must register themselves and the system in the EU database. Public authorities and bodies acting on their behalf must register their use of high-risk systems. Law-enforcement and migration systems go into a secure non-public section. | 2027-12-02 | not-yet-applicable | registration | high |
| `AGC-EU-AIA-72` | [Art. 72 and 73](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-73) | **Monitor after release and report serious incidents**: Providers of high-risk systems must run post-market monitoring and report serious incidents to market surveillance authorities immediately after establishing a likely causal link, and no later than 15 days after becoming aware; no later than 2 days for widespread infringements or serious disruption of critical infrastructure; no later than 10 days in case of death. | 2027-12-02 | not-yet-applicable | post_market_monitoring, incident_reporting | high |
| `AGC-EU-AIA-22` | [Art. 22 and 54](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-22) | **Appoint an EU authorised representative if you are outside the EU**: Providers of high-risk AI systems and of general-purpose AI models established outside the EU must appoint an authorised representative in the EU by written mandate before placing their system or model on the EU market. | 2025-08-02 | applicable | local_representative | medium |
| `AGC-EU-AIA-26` | [Art. 26](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-26) | **Use high-risk systems as instructed, with competent human oversight and logs**: Deployers of high-risk systems must use them according to the instructions, assign human oversight to competent people, monitor operation, keep automatically generated logs for at least six months, inform workers and their representatives before workplace use, and inform people subject to decisions made or assisted by the system. | 2027-12-02 | not-yet-applicable | human_oversight, audit_log, transparency_notice | high |
| `AGC-EU-AIA-27` | [Art. 27](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-27) | **Do a fundamental rights impact assessment before first use**: Before first use of certain high-risk systems, deployers that are public bodies or private entities providing public services, and deployers of credit-scoring or life and health insurance pricing systems, must assess the impact on fundamental rights and notify the market surveillance authority of the results. | 2027-12-02 | not-yet-applicable | impact_assessment | high |
| `AGC-EU-AIA-86` | [Art. 86](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-86) | **Explain high-risk decisions on request**: People affected by a decision based on output of an Annex III high-risk system that produces legal or similarly significant effects can obtain a clear and meaningful explanation from the deployer of the role of the AI system and the main elements of the decision. | 2027-12-02 | not-yet-applicable | transparency_notice, contest_and_appeal | medium |

## Start here

The controls this regime asks for most often. Declare them in your `AI_GOVERNANCE.md`:

- `transparency_notice`: Affected people get notice and explanation (4 obligations)
- `technical_documentation`: Technical documentation is kept up to date (3 obligations)
- `prohibited_practices_screen`: Use case screened against banned practices (2 obligations)
- `security_testing`: Adversarial testing, red-teaming, cybersecurity (2 obligations)
- `incident_reporting`: Serious incidents are reported on time (2 obligations)

## Check your system

```bash
npx github:mathieugouanou/aigovernancechain scope -j EU -r deployer -u chatbot
npx github:mathieugouanou/aigovernancechain deadlines -j EU --days 365
```

## Sources

- [AI Act Service Desk: consolidated text as at 27 July 2026](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113)
- [European Commission: AI Omnibus enters into force (27 July 2026)](https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force)
- [European Parliament Legislative Train: Digital Omnibus on AI](https://www.europarl.europa.eu/legislative-train/package-digital-package/file-digital-omnibus-on-ai)
- [Regulation (EU) 2024/1689 on EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)

---

Generated from [`atlas/regimes/eu.yaml`](../atlas/regimes/eu.yaml). Edit the YAML, not this card. Draft open data under CC BY 4.0, not legal advice. [Report an error](https://github.com/mathieugouanou/aigovernancechain/issues/new?template=obligation-correction.yml).
