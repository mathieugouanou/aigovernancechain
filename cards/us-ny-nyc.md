# NYC Automated Employment Decision Tools (Local Law 144)

> Employers and employment agencies must independently audit covered hiring and promotion tools, publish audit information, and notify affected people before use.

**Jurisdiction:** New York City (`US-NY-NYC`) · **As of:** 4 Nov 2026 · **Review:** draft-unreviewed ([reviewer seat open](../REVIEWERS.md))

**Who it hits:** Employers and employment agencies using an automated employment decision tool to substantially assist or replace discretion in hiring or promotion for NYC positions.

**Status:** Binding and applicable. The law took effect January 1, 2023; DCWP enforcement began July 5, 2023. No substantive 2025-2026 amendment to Local Law 144 or its adopted AEDT rule was identified.

## Instruments

| Instrument | Force | Status | Penalties |
|---|---|---|---|
| [NYC AEDT Law](https://legistar.council.nyc.gov/LegislationDetail.aspx?GUID=B051915D-A9AC-451E-81F8-6596032FA3F9&ID=4344524): New York City Local Law 144 of 2021, Administrative Code §§20-870 to 20-872, implemented by 6 RCNY Chapter 5 | binding | in-force | $500 for a first violation and $500 to $1,500 for each subsequent violation; each day of use may be a separate violation. |

## Obligations (6)

| ID | Article | Obligation | Applies from | Status | Controls | Confidence |
|---|---|---|---|---|---|---|
| `AGC-US-NY-NYC-LL144-20-871-A1` | [NYC Admin. Code §20-871(a)(1); 6 RCNY §5-301(a)](https://legistar.council.nyc.gov/LegislationDetail.aspx?GUID=B051915D-A9AC-451E-81F8-6596032FA3F9&ID=4344524) | **Complete an independent bias audit before use**: An employer or employment agency may not use a covered AEDT to screen candidates for hiring or employees for promotion in New York City unless an independent auditor has completed a bias audit no more than one year before the tool's use. The audit must meet the rule's requirements for the tool and the employer's reliance on the audit. | 2023-01-01 | applicable | bias_testing | high |
| `AGC-US-NY-NYC-LL144-6RCNY-5-301` | [6 RCNY §5-301(b)-(d); §5-302(a)-(c)](https://rules.cityofnewyork.us/rule/automated-employment-decision-tools-updated/) | **Calculate and document required audit metrics**: The audit must calculate selection or scoring rates and impact ratios for sex, race/ethnicity, and intersectional categories, and address unknown-category counts as required by the rule. It generally must use historical data; test data is permitted when historical data is insufficient for a statistically significant audit, with the required explanation in the summary. | 2023-07-05 | applicable | bias_testing, technical_documentation | high |
| `AGC-US-NY-NYC-LL144-20-871-A1-PUBLIC` | [NYC Admin. Code §20-871(a)(1)-(2); 6 RCNY §5-301(e)](https://home4.nyc.gov/site/dca/businesses/faq-automated-employment-decision-tools.page) | **Publish the audit summary and tool distribution date**: Before using an AEDT, the employer or employment agency must make the date and summary of the most recent bias audit publicly available on its website. The information must remain posted until at least six months after the AEDT's last use. | 2023-01-01 | applicable | transparency_notice, bias_testing | high |
| `AGC-US-NY-NYC-LL144-20-871-B2-TIMING` | [NYC Admin. Code §20-871(b)(2); 6 RCNY §5-303](https://home4.nyc.gov/site/dca/businesses/faq-automated-employment-decision-tools.page) | **Give advance notice before using an AEDT**: The employer or employment agency must notify each NYC-resident candidate or employee at least 10 business days before using an AEDT to assess that person. Notice may be provided in a job posting or by mail or email as allowed by the DCWP guidance. | 2023-01-01 | applicable | transparency_notice | high |
| `AGC-US-NY-NYC-LL144-20-871-B2-CONTENT` | [NYC Admin. Code §20-871(b)(2)(i)-(ii); 6 RCNY §5-303](https://home4.nyc.gov/site/dca/businesses/faq-automated-employment-decision-tools.page) | **Explain what the tool assesses and available options**: The advance notice must state that an AEDT will be used and identify the job qualifications and characteristics it will assess. It must also explain how the person can request an alternative selection process or accommodation. | 2023-01-01 | applicable | transparency_notice, user_controls | high |
| `AGC-US-NY-NYC-LL144-20-871-B3` | [NYC Admin. Code §20-871(b)(3); 6 RCNY §5-302(d)](https://rules.cityofnewyork.us/rule/automated-employment-decision-tools-updated/) | **Disclose AEDT data sources and retention policy**: If the information is not already disclosed on the employment section of the website, the employer or employment agency must provide, upon written request, the type and source of data collected by the AEDT and its data-retention policy within 30 days. If disclosure is withheld because it would violate law or interfere with a law-enforcement investigation, the employer must explain why. | 2023-01-01 | applicable | transparency_notice, privacy_compliance | high |

## Start here

The controls this regime asks for most often. Declare them in your `AI_GOVERNANCE.md`:

- `transparency_notice`: Affected people get notice and explanation (4 obligations)
- `bias_testing`: Bias or disparate-impact testing (3 obligations)
- `technical_documentation`: Technical documentation is kept up to date (1 obligation)
- `user_controls`: Opt-out, consent or user choice (1 obligation)
- `privacy_compliance`: Personal-data law duties linked to the AI use (1 obligation)

## Check your system

```bash
npx github:mathieugouanou/aigovernancechain scope -j US-NY-NYC -r deployer -u chatbot
npx github:mathieugouanou/aigovernancechain deadlines -j US-NY-NYC --days 365
```

## Sources

- [NYC Council record and enacted Local Law 144 of 2021](https://legistar.council.nyc.gov/LegislationDetail.aspx?GUID=B051915D-A9AC-451E-81F8-6596032FA3F9&ID=4344524)
- [NYC DCWP AEDT Frequently Asked Questions](https://home4.nyc.gov/site/dca/businesses/faq-automated-employment-decision-tools.page)
- [DCWP adopted AEDT rule record](https://rules.cityofnewyork.us/rule/automated-employment-decision-tools-updated/)
- [DCWP AEDT overview and enforcement date](https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page)
- [DCWP New Laws & Rules page, checked for 2025-2026 AEDT amendments](https://www.nyc.gov/site/dca/about/new-laws-rules.page)

---

Generated from [`atlas/regimes/us-ny-nyc.yaml`](../atlas/regimes/us-ny-nyc.yaml). Edit the YAML, not this card. Draft open data under CC BY 4.0, not legal advice. [Report an error](https://github.com/mathieugouanou/aigovernancechain/issues/new?template=obligation-correction.yml).
