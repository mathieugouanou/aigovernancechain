# Texas Responsible Artificial Intelligence Governance Act

> TRAIGA bans specified intent-based AI conduct and requires AI disclosure only in specified government and health-care interactions, with Attorney General enforcement and an optional regulatory sandbox.

**Jurisdiction:** Texas (`US-TX`) · **As of:** 4 Nov 2026 · **Review:** draft-unreviewed ([reviewer seat open](../REVIEWERS.md))

**Who it hits:** People doing business in Texas, supplying products or services to Texas residents, or developing or deploying AI in Texas; special duties apply to governmental entities, health-care providers, and approved sandbox participants.

**Status:** Binding and applicable since 2026-01-01. The Attorney General has exclusive enforcement authority (subject to limited state-agency sanctions), with a 60-day notice-and-cure step before suit; no private right of action. Uncurable violations carry up to $200,000. The Texas AI Council makes recommendations and provides training but cannot issue binding rules or guidance.

## Instruments

| Instrument | Force | Status | Penalties |
|---|---|---|---|
| [Texas TRAIGA](https://capitol.texas.gov/tlodocs/89R/billtext/html/HB00149F.HTM): Texas Responsible Artificial Intelligence Governance Act (HB 149), Business & Commerce Code Subtitle D | binding | in-force | The Attorney General may sue after the 60-day notice-and-cure period. Civil penalties are $10,000-$12,000 per curable violation (or breach of a cure statement), $80,000-$200,000 per uncurable violation, and $2,000-$40,000 per day for a continuing violation, plus injunctive relief, fees, and costs. After an AG finding and recommendation, a licensing state agency may impose license sanctions and a penalty up to $100,000. No private right of action; no civil-penalty action against a system that has not been deployed. |

## Key dates

- **2026-01-01** (passed) Apply and report if participating in the AI regulatory sandbox (Texas TRAIGA Bus. & Com. Code §§ 553.052, 553.053, 553.102)
- **2026-01-01** (passed) Disclose AI use in health-care services or treatment (Texas TRAIGA Bus. & Com. Code § 552.051(f))
- **2026-01-01** (passed) Disclose government AI interactions to consumers (Texas TRAIGA Bus. & Com. Code § 552.051(b)-(e))
- **2026-01-01** (passed) Do not develop specified AI sexual-abuse material or child-impersonating chat (Texas TRAIGA Bus. & Com. Code § 552.057)
- **2026-01-01** (passed) Do not intentionally incite self-harm, violence, or crime (Texas TRAIGA Bus. & Com. Code § 552.052)
- **2026-01-01** (passed) Do not target constitutional rights or unlawfully discriminate by intent (Texas TRAIGA Bus. & Com. Code §§ 552.055-.056)
- **2026-01-01** (passed) Do not use AI for prohibited government social scoring (Texas TRAIGA Bus. & Com. Code § 552.053)
- **2026-01-01** (passed) Limit government biometric identification that infringes rights (Texas TRAIGA Bus. & Com. Code § 552.054 and § 503.001)
- **2026-09-01** (passed) Attorney General's deadline to post the consumer complaint mechanism

## Obligations (8)

| ID | Article | Obligation | Applies from | Status | Controls | Confidence |
|---|---|---|---|---|---|---|
| `AGC-US-TX-TRAIGA-552-052` | [Bus. & Com. Code § 552.052](https://statutes.capitol.texas.gov/Docs/BC/htm/BC.552.htm) | **Do not intentionally incite self-harm, violence, or crime**: A person may not develop or deploy an AI system in a manner that intentionally aims to incite or encourage a person to commit physical self-harm (including suicide), harm another person, or engage in criminal activity. The prohibition turns on the specified intent, not merely on a harmful outcome. | 2026-01-01 | applicable | prohibited_practices_screen | high |
| `AGC-US-TX-TRAIGA-552-053` | [Bus. & Com. Code § 552.053](https://statutes.capitol.texas.gov/Docs/BC/htm/BC.552.htm) | **Do not use AI for prohibited government social scoring**: A governmental entity may not use or deploy AI to evaluate or classify people based on known, inferred, or predicted social behavior or personal characteristics with intent to assign a social score that results or may result in specified detrimental or disproportionate treatment, or infringement of rights under the U.S. or Texas Constitution or other law. | 2026-01-01 | applicable | prohibited_practices_screen | high |
| `AGC-US-TX-TRAIGA-552-054` | [Bus. & Com. Code § 552.054 and § 503.001](https://statutes.capitol.texas.gov/Docs/BC/htm/BC.552.htm) | **Limit government biometric identification that infringes rights**: A governmental entity may not develop or deploy AI to uniquely identify a specific individual using biometric data, or targeted or untargeted gathering of publicly available images or other media, without consent when the gathering would infringe a right protected by the U.S. or Texas Constitution or other state or federal law. Section 503.001 also restricts commercial biometric capture, with statutory exceptions for certain AI training and security or fraud-prevention uses. | 2026-01-01 | applicable | prohibited_practices_screen, privacy_compliance | high |
| `AGC-US-TX-TRAIGA-552-055-056` | [Bus. & Com. Code §§ 552.055-.056](https://statutes.capitol.texas.gov/Docs/BC/htm/BC.552.htm) | **Do not target constitutional rights or unlawfully discriminate by intent**: A person may not develop or deploy AI with the sole intent to infringe, restrict, or impair an individual's U.S. constitutional rights, or with intent to unlawfully discriminate against a protected class in violation of state or federal law. Disparate impact alone is not sufficient to prove the discrimination intent; statutory insurance and federally insured financial-institution provisions apply. | 2026-01-01 | applicable | prohibited_practices_screen, bias_testing | high |
| `AGC-US-TX-TRAIGA-552-057` | [Bus. & Com. Code § 552.057](https://statutes.capitol.texas.gov/Docs/BC/htm/BC.552.htm) | **Do not develop specified AI sexual-abuse material or child-impersonating chat**: A person may not develop or distribute an AI system with the sole intent to produce, assist in producing, or distribute visual material that violates the Texas child-pornography statute or deepfake videos/images that violate Penal Code § 21.165. A person also may not intentionally develop or distribute an AI system that has text-based sexual-conduct conversations while impersonating or imitating a child under 18. | 2026-01-01 | applicable | prohibited_practices_screen, content_moderation, minors_protection | high |
| `AGC-US-TX-TRAIGA-552-051-GOV` | [Bus. & Com. Code § 552.051(b)-(e)](https://statutes.capitol.texas.gov/Docs/BC/htm/BC.552.htm) | **Disclose government AI interactions to consumers**: A governmental agency that makes available an AI system intended to interact with consumers must clearly and conspicuously disclose, before or at the time of interaction, that the consumer is interacting with AI. The notice must be in plain language and not use a dark pattern; it is required even when AI use would be obvious, and may be provided through a hyperlink. | 2026-01-01 | applicable | ai_disclosure, transparency_notice | high |
| `AGC-US-TX-TRAIGA-552-051-HEALTH` | [Bus. & Com. Code § 552.051(f)](https://statutes.capitol.texas.gov/Docs/BC/htm/BC.552.htm) | **Disclose AI use in health-care services or treatment**: If an AI system is used in relation to a health-care service or treatment, the provider must disclose the AI interaction to the recipient or personal representative no later than the date the service or treatment is first provided. In an emergency, disclosure must be made as soon as reasonably possible; the disclosure is subject to the section's plain-language, clear-and-conspicuous, and no-dark-pattern requirements. | 2026-01-01 | applicable | ai_disclosure, transparency_notice | high |
| `AGC-US-TX-TRAIGA-553-052` | [Bus. & Com. Code §§ 553.052, 553.053, 553.102](https://statutes.capitol.texas.gov/Docs/BC/htm/BC.553.htm) | **Apply and report if participating in the AI regulatory sandbox**: A sandbox applicant must obtain approval from the Department of Information Resources and each applicable agency before testing and submit the system description and intended use, a benefit assessment addressing consumer, privacy, and public-safety impacts, a mitigation plan, and proof of applicable federal AI-law compliance. Approved participants may test and deploy for up to 36 months (extendable for good cause) and must report quarterly on performance, risk mitigation, and consumer/stakeholder feedback; Chapter 552 duties and prohibitions cannot be waived. | 2026-01-01 | applicable | impact_assessment, risk_management, incident_reporting | high |

## Start here

The controls this regime asks for most often. Declare them in your `AI_GOVERNANCE.md`:

- `prohibited_practices_screen`: Use case screened against banned practices (5 obligations)
- `ai_disclosure`: People are told they are dealing with an AI (2 obligations)
- `transparency_notice`: Affected people get notice and explanation (2 obligations)
- `privacy_compliance`: Personal-data law duties linked to the AI use (1 obligation)
- `bias_testing`: Bias or disparate-impact testing (1 obligation)

## Check your system

```bash
npx github:mathieugouanou/aigovernancechain scope -j US-TX -r deployer -u chatbot
npx github:mathieugouanou/aigovernancechain deadlines -j US-TX --days 365
```

## Sources

- [Texas HB 149 enrolled act (TRAIGA)](https://capitol.texas.gov/tlodocs/89R/billtext/html/HB00149F.HTM)
- [Texas Business & Commerce Code Chapter 551: scope and definitions](https://statutes.capitol.texas.gov/Docs/BC/htm/BC.551.htm)
- [Texas Business & Commerce Code Chapter 552: duties, prohibitions, enforcement, and penalties](https://statutes.capitol.texas.gov/Docs/BC/htm/BC.552.htm)
- [Texas Business & Commerce Code Chapter 553: AI regulatory sandbox](https://statutes.capitol.texas.gov/Docs/BC/htm/BC.553.htm)
- [Texas Business & Commerce Code Chapter 554: Texas Artificial Intelligence Council](https://statutes.capitol.texas.gov/Docs/BC/htm/BC.554.htm)
- [Texas Business & Commerce Code § 503.001: Capture or Use of Biometric Identifier](https://statutes.capitol.texas.gov/Docs/BC/htm/BC.503.htm)

---

Generated from [`atlas/regimes/us-tx.yaml`](../atlas/regimes/us-tx.yaml). Edit the YAML, not this card. Draft open data under CC BY 4.0, not legal advice. [Report an error](https://github.com/mathieugouanou/aigovernancechain/issues/new?template=obligation-correction.yml).
