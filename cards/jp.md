# Japan AI Promotion Act and business guidance

> Japan's AI Act is a promotion framework with a business cooperation duty; the detailed business principles remain voluntary guidance.

**Jurisdiction:** Japan (`JP`) · **As of:** 4 Nov 2026 · **Review:** draft-unreviewed ([reviewer seat open](../REVIEWERS.md))

**Who it hits:** AI developers, providers and business users, plus public bodies using the voluntary national guidance and plan.

**Status:** The Act is fully in force; Article 7 requires cooperation with government measures but sets no penalties. The Second AI Basic Plan was adopted on 14 July 2026; METI/MIC Guidelines Ver1.2 are voluntary.

## Instruments

| Instrument | Force | Status | Penalties |
|---|---|---|---|
| [AI Promotion Act](https://laws.e-gov.go.jp/law/507AC0000000053): Act on Promotion of Research and Development, and Utilization of Artificial Intelligence-related Technology (Act No. 53 of 2025) | framework-no-penalties | in-force | n/a |
| [Second AI Basic Plan](https://www8.cao.go.jp/cstp/ai/ai_plan/ai_plan.html): Japan's Second Artificial Intelligence Basic Plan | voluntary | voluntary | n/a |
| [AI Guidelines for Business Ver1.2](https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/20260331_report.html): AI Guidelines for Business Ver1.2 (METI and MIC) | voluntary | voluntary | n/a |

## Key dates

- **2025-06-04** (passed) Cooperate with national and local AI measures (AI Promotion Act Art. 7)
- **2025-09-01** (passed) AI Promotion Act: Remaining provisions, including the Basic Plan and Strategic Headquarters chapters, took effect; the Act is fully in force
- **2026-03-31** (passed) AI Guidelines for Business Ver1.2: METI and MIC issued AI Guidelines for Business Ver1.2
- **2026-03-31** (passed) Assess and manage AI safety risks (AI Guidelines for Business Ver1.2 Part 2.C.2)
- **2026-03-31** (passed) Document AI accountability (AI Guidelines for Business Ver1.2 Part 2.C.7)
- **2026-03-31** (passed) Keep AI human-centric (AI Guidelines for Business Ver1.2 Part 2.C.1)
- **2026-03-31** (passed) Protect privacy throughout the AI lifecycle (AI Guidelines for Business Ver1.2 Part 2.C.4)
- **2026-03-31** (passed) Provide proportionate information about AI (AI Guidelines for Business Ver1.2 Part 2.C.6)
- **2026-03-31** (passed) Secure AI systems and services (AI Guidelines for Business Ver1.2 Part 2.C.5)
- **2026-07-14** (passed) Follow Japan's current government AI strategy (Second AI Basic Plan, Chapters 1-4)
- **2026-07-14** (passed) Second AI Basic Plan: Cabinet decided the Second AI Basic Plan, replacing the first plan

## Obligations (8)

| ID | Article | Obligation | Applies from | Status | Controls | Confidence |
|---|---|---|---|---|---|---|
| `AGC-JP-AIPA-7` | [Art. 7](https://www.japaneselawtranslation.go.jp/en/laws/view/5066/je) | **Cooperate with national and local AI measures**: Utilization business operators must cooperate with measures taken by the national and local governments under Articles 4 and 5. They need only endeavor to use AI actively to improve business efficiency and advancement and create new industries. | 2025-06-04 | applicable | risk_management | high |
| `AGC-JP-AIBP-PLAN` | [Second AI Basic Plan, Chapters 1-4](https://www8.cao.go.jp/cstp/ai/ai_plan/aiplan_eng_20260714.pdf) | **Follow Japan's current government AI strategy**: The Cabinet's second plan sets government policy across AI adoption, development capabilities, AI governance and an AI-powered society, with implementation and follow-up arrangements. It is a government strategy, not a direct compliance duty for private AI operators. | 2026-07-14 | voluntary | risk_management | high |
| `AGC-JP-AIGB-C1` | [Part 2.C.1](https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_12.pdf) | **Keep AI human-centric**: The voluntary guidelines recommend respecting human dignity and autonomy when developing, providing or using AI, and taking steps against manipulation and automation bias. They also call for user support appropriate to the system and context. | 2026-03-31 | voluntary | human_oversight, transparency_notice | medium |
| `AGC-JP-AIGB-C2` | [Part 2.C.2](https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_12.pdf) | **Assess and manage AI safety risks**: The guidelines recommend checking reliability, robustness and controllability, analyzing risks, and taking proportionate measures throughout development, provision and use. They also recommend defining responses for cases where AI safety is endangered. | 2026-03-31 | voluntary | risk_management, accuracy_robustness, human_oversight | medium |
| `AGC-JP-AIGB-C4` | [Part 2.C.4](https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_12.pdf) | **Protect privacy throughout the AI lifecycle**: The guidelines recommend observing applicable privacy laws and adopting privacy measures based on the use context and people's reasonable expectations. They also recommend a privacy policy and privacy-by-design measures appropriate to the AI system. | 2026-03-31 | voluntary | privacy_compliance, data_governance | medium |
| `AGC-JP-AIGB-C5` | [Part 2.C.5](https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_12.pdf) | **Secure AI systems and services**: The guidelines recommend reasonable security measures suited to the technology and its lifecycle, including attention to system connections, vulnerabilities and current attack methods. The guidance does not replace binding cybersecurity or sectoral rules. | 2026-03-31 | voluntary | security_testing | medium |
| `AGC-JP-AIGB-C6` | [Part 2.C.6](https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_12.pdf) | **Provide proportionate information about AI**: The guidelines recommend making AI systems verifiable and providing stakeholders with information about AI use, capabilities, limitations, risks and appropriate use, to a reasonable extent that is technically possible. They also recommend keeping relevant process and decision logs where possible. | 2026-03-31 | voluntary | transparency_notice, audit_log | medium |
| `AGC-JP-AIGB-C7` | [Part 2.C.7](https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_12.pdf) | **Document AI accountability**: The guidelines recommend traceability of data and decisions, assigning a responsible person, clarifying shared responsibilities, explaining conformity to the common principles and documenting relevant information. The scope of these steps should reflect the actor's role and the system's risks. | 2026-03-31 | voluntary | audit_log, technical_documentation, risk_management | medium |

## Start here

The controls this regime asks for most often. Declare them in your `AI_GOVERNANCE.md`:

- `risk_management`: Documented, ongoing risk management (1 obligation)

## Check your system

```bash
npx github:mathieugouanou/aigovernancechain scope -j JP -r deployer -u chatbot
npx github:mathieugouanou/aigovernancechain deadlines -j JP --days 365
```

## Sources

- [Act on Promotion of Research and Development, and Utilization of AI-related Technology (official English translation)](https://www.japaneselawtranslation.go.jp/en/laws/view/5066/je)
- [AI Promotion Act on e-Gov](https://laws.e-gov.go.jp/law/507AC0000000053)
- [Cabinet Office AI Promotion Act overview and commencement dates](https://www8.cao.go.jp/cstp/ai/ai_act/ai_act.html)
- [Cabinet Office Artificial Intelligence Basic Plan index](https://www8.cao.go.jp/cstp/ai/ai_plan/ai_plan.html)
- [Japan's Second Artificial Intelligence Basic Plan (provisional English translation)](https://www8.cao.go.jp/cstp/ai/ai_plan/aiplan_eng_20260714.pdf)
- [METI AI Guidelines for Business Ver1.2 listing](https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/20260331_report.html)
- [AI Guidelines for Business Ver1.2 (provisional English translation)](https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_12.pdf)

---

Generated from [`atlas/regimes/jp.yaml`](../atlas/regimes/jp.yaml). Edit the YAML, not this card. Draft open data under CC BY 4.0, not legal advice. [Report an error](https://github.com/mathieugouanou/aigovernancechain/issues/new?template=obligation-correction.yml).
