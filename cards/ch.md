# Swiss AI governance

> Switzerland has no overarching AI-specific act yet; existing data-protection law applies to AI processing of personal data, while an AI-law consultation draft is planned for spring 2027.

**Jurisdiction:** Switzerland (`CH`) · **As of:** 4 Nov 2026 · **Review:** draft-unreviewed ([reviewer seat open](../REVIEWERS.md))

**Who it hits:** Private controllers and processors, federal bodies, and organisations that use AI to process personal data in Switzerland; separate cantonal rules may apply to cantonal and municipal bodies.

**Status:** Binding FADP and Data Protection Ordinance duties apply today. The Federal Council reported a spring 2027 consultation for proposed AI legislation; OFCOM's AI Code of Conduct guide is voluntary.

## Instruments

| Instrument | Force | Status | Penalties |
|---|---|---|---|
| [Revised FADP](https://www.fedlex.admin.ch/eli/cc/2022/491/en): Federal Act of 25 September 2020 on Data Protection (FADP), revised | binding | in-force | On complaint, a natural person may face a fine of up to CHF 250,000 for specified wilful violations of information duties (including Arts. 19, 21 and 25–27); this is not an AI-specific penalty. |
| [Data Protection Ordinance](https://www.fedlex.admin.ch/eli/cc/2022/568/en): Ordinance of 31 August 2022 on Data Protection (Data Protection Ordinance, DPO), current to 1 December 2025 | binding | in-force | n/a |
| [Proposed Swiss AI legislation](https://www.bakom.admin.ch/en/artificial-intelligence): Proposed Federal Council AI legislation implementing the Council of Europe AI Convention (draft for consultation planned for spring 2027) | proposed | proposed | n/a |
| [OFCOM AI Code of Conduct guide](https://www.bakom.admin.ch/en/newnsb/s2TQiUUjrA5D): OFCOM Guide on an AI Code of Conduct | voluntary | voluntary | n/a |

## Key dates

- **2025-02-12** (passed) Proposed Swiss AI legislation: Federal Council chooses an approach to ratify and implement the Council of Europe AI Convention, with sector-specific amendments where needed
- **2025-03-27** (passed) Proposed Swiss AI legislation: Switzerland signs the Council of Europe Framework Convention on AI
- **2025-12-01** (passed) Log qualifying automated processing and keep logs protected (Data Protection Ordinance Art. 4(1)–(5))
- **2026-10-28** (passed) OFCOM AI Code of Conduct guide: OFCOM AI Code of Conduct guide reported as a toolkit for voluntary guidelines
- **2026-10-28** (passed) Proposed Swiss AI legislation: Federal Council update says consultation is scheduled for spring 2027; proposed rules are to address transparency, data protection, non-discrimination, supervision and risk assessment
- **2026-10-28** (passed) Use OFCOM's voluntary AI Code of Conduct toolkit if adopting self-regulation (OFCOM Guide on an AI Code of Conduct, voluntary toolkit)
- **2026-12-31** Assess whether logging is needed for eligible legacy automated processing under DPO Art. 46(1)
- **2029-12-31** Implement logging for eligible legacy processing if the Art. 46(1) assessment finds it necessary

## Obligations (10)

| ID | Article | Obligation | Applies from | Status | Controls | Confidence |
|---|---|---|---|---|---|---|
| `AGC-CH-FADP-6-7` | [Art. 6(1)–(5) and Art. 7](https://www.fedlex.admin.ch/eli/cc/2022/491/en) | **Process personal data transparently and build privacy in by design**: Personal data must be processed lawfully, in good faith and proportionately; the purpose must be recognisable to the data subject and further processing must remain compatible with that purpose. Controllers must design processing to respect these principles from the planning stage and use suitable default settings to limit data to what is necessary. | 2023-09-01 | applicable | privacy_compliance, transparency_notice, user_controls | high |
| `AGC-CH-FADP-12` | [Art. 12(1)–(5); DPO Art. 24](https://www.fedlex.admin.ch/eli/cc/2022/491/en) | **Keep a record of processing activities**: Controllers and processors must keep records describing their processing activities, including purpose, data and data-subject categories, recipients, retention, security measures and relevant foreign disclosures. Natural persons and private organisations with fewer than 250 employees are generally exempt unless they process a large volume of sensitive personal data or carry out high-risk profiling; federal bodies must notify the FDPIC of their records. | 2023-09-01 | applicable | audit_log, privacy_compliance | high |
| `AGC-CH-FADP-19-6` | [Art. 6(3), 19(1)–(2); FDPIC, AI and data protection, Transparent information](https://www.fedlex.admin.ch/eli/cc/2022/491/en) | **Tell people how AI processes their personal data**: Controllers must make the purpose of personal-data processing recognisable and inform data subjects appropriately when collecting personal data, including the controller's identity, processing purpose and, where applicable, recipients. The FDPIC says that AI providers and users should make purpose, functionality and data sources transparent; users of directly interactive language models should know they are communicating with a machine and how their prompts may be used. | 2023-09-01 | applicable | ai_disclosure, transparency_notice, privacy_compliance | medium |
| `AGC-CH-FADP-21` | [Art. 21(1)–(4)](https://www.fedlex.admin.ch/eli/cc/2022/491/en) | **Notify people about consequential decisions made solely by automation and offer human review**: If a decision is based exclusively on automated processing and has legal consequences or a considerable adverse effect, the controller must inform the data subject. On request, the person may express their view and request review by a natural person; federal bodies must designate such decisions. The Act has exceptions, including where an eligible contract-related request is granted or the person explicitly consented to automation. | 2023-09-01 | applicable | transparency_notice, human_oversight, contest_and_appeal | high |
| `AGC-CH-FADP-22` | [Art. 22(1)–(5) and Art. 23](https://www.fedlex.admin.ch/eli/cc/2022/491/en) | **Assess high-risk personal-data processing before deployment**: Before processing likely to create a high risk to a person's personality or fundamental rights, the controller must complete a data protection impact assessment describing the processing, risks and protective measures. High risk depends on the nature, extent, circumstances and purpose, including large-scale sensitive-data processing or large-scale systematic monitoring of public areas; residual high risk generally requires prior consultation with the FDPIC, subject to statutory exceptions. | 2023-09-01 | applicable | impact_assessment, risk_management, privacy_compliance | high |
| `AGC-CH-FADP-24` | [Art. 24(1)–(4)](https://www.fedlex.admin.ch/eli/cc/2022/491/en) | **Report high-risk personal-data security breaches**: A controller must notify the FDPIC as quickly as possible of a data-security breach likely to result in a high risk to a person's personality or fundamental rights, describing the breach, its consequences and measures taken or planned. A processor must notify the controller as quickly as possible; the controller must inform affected people where needed for their protection or at the FDPIC's request. | 2023-09-01 | applicable | incident_reporting, privacy_compliance | high |
| `AGC-CH-FADP-25` | [Art. 25(1)–(2)(e)–(g)](https://www.fedlex.admin.ch/eli/cc/2022/491/en) | **Provide access information, including about automated decisions**: On request, a person may ask whether personal data about them is being processed and receive information needed to exercise their rights. This includes the purpose, available source of data not collected from them, and, if applicable, whether an automated individual decision was taken and the logic behind it, subject to the Act's exceptions. | 2023-09-01 | applicable | transparency_notice, contest_and_appeal, privacy_compliance | high |
| `AGC-CH-DPO-4` | [Art. 4(1)–(5)](https://www.fedlex.admin.ch/eli/cc/2022/568/en) | **Log qualifying automated processing and keep logs protected**: Private controllers and processors must log specified data operations and access when they automate large-volume sensitive-data processing or high-risk profiling and preventive measures cannot ensure protection. Federal bodies and their processors must log specified operations for sensitive data, profiling and covered law-enforcement processing; for other automated processing they must assess fundamental-rights risks and decide whether and how far to log. Required logs identify who did what and when, are kept at least one year, and are separated and access-restricted. | 2025-12-01 | applicable | audit_log, privacy_compliance, risk_management | high |
| `AGC-CH-DPO-46-1` | [Art. 46(1)](https://www.fedlex.admin.ch/eli/cc/2022/568/en) | **Assess logging needs for legacy automated processing by the transition deadline**: For automated personal-data processing planned or started before 1 December 2025, the controller must assess the need for logging by 31 December 2026; if logging is needed, it must be implemented by 31 December 2029. This transition does not cover automated processing of sensitive personal data, profiling, or processing within the law-enforcement data-protection directive. | 2026-12-31 | not-yet-applicable | audit_log, risk_management, privacy_compliance | high |
| `AGC-CH-AICG-VOL` | [OFCOM Guide on an AI Code of Conduct, voluntary toolkit](https://www.bakom.admin.ch/en/newnsb/s2TQiUUjrA5D) | **Use OFCOM's voluntary AI Code of Conduct toolkit if adopting self-regulation**: OFCOM's toolkit helps associations and businesses create voluntary AI guidelines, with suggested texts on 10 topics and a process for developing and improving commitments. It is not legislation and creates no mandatory duty to adopt a code. | 2026-10-28 | voluntary | risk_management | high |

## Start here

The controls this regime asks for most often. Declare them in your `AI_GOVERNANCE.md`:

- `privacy_compliance`: Personal-data law duties linked to the AI use (8 obligations)
- `transparency_notice`: Affected people get notice and explanation (4 obligations)
- `audit_log`: Events and decisions are logged and kept (3 obligations)
- `risk_management`: Documented, ongoing risk management (3 obligations)
- `contest_and_appeal`: People can contest a decision and reach a human (2 obligations)

## Check your system

```bash
npx github:mathieugouanou/aigovernancechain scope -j CH -r deployer -u chatbot
npx github:mathieugouanou/aigovernancechain deadlines -j CH --days 365
```

## Sources

- [Federal Act on Data Protection (FADP), Fedlex](https://www.fedlex.admin.ch/eli/cc/2022/491/en)
- [Data Protection Ordinance (DPO), Fedlex (status 1 December 2025)](https://www.fedlex.admin.ch/eli/cc/2022/568/en)
- [FDPIC: AI and data protection](https://www.edoeb.admin.ch/en/ai-and-data-protection)
- [Federal Council: AI regulation approach, 12 February 2025](https://www.admin.ch/en/nsb?id=104110)
- [OFCOM: Artificial Intelligence in Switzerland](https://www.bakom.admin.ch/en/artificial-intelligence)
- [OFCOM: Federal Council takes note of interim progress on AI regulation, 28 October 2026](https://www.bakom.admin.ch/en/newnsb/s2TQiUUjrA5D)

---

Generated from [`atlas/regimes/ch.yaml`](../atlas/regimes/ch.yaml). Edit the YAML, not this card. Draft open data under CC BY 4.0, not legal advice. [Report an error](https://github.com/mathieugouanou/aigovernancechain/issues/new?template=obligation-correction.yml).
