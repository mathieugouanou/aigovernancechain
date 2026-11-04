# NYC Automated Employment Decision Tools (Local Law 144) (US-NY-NYC)

As of 2026-11-04. Review: draft-unreviewed. Binding and applicable. The law took effect January 1, 2023; DCWP enforcement began July 5, 2023. No substantive 2025-2026 amendment to Local Law 144 or its adopted AEDT rule was identified.

## AGC-US-NY-NYC-LL144-20-871-A1: Complete an independent bias audit before use
- Rule: NYC AEDT Law NYC Admin. Code §20-871(a)(1); 6 RCNY §5-301(a) · status applicable · applies from 2023-01-01 · confidence high
- Who: roles employer, deployer; uses hiring; conditions: An AEDT is a computational process that substantially assists or replaces discretionary decision-making for hiring or promotion in NYC; limited standard-technology and non-substantial-use exclusions apply.
- What: An employer or employment agency may not use a covered AEDT to screen candidates for hiring or employees for promotion in New York City unless an independent auditor has completed a bias audit no more than one year before the tool's use. The audit must meet the rule's requirements for the tool and the employer's reliance on the audit.
- Controls: bias_testing
- Source: https://legistar.council.nyc.gov/LegislationDetail.aspx?GUID=B051915D-A9AC-451E-81F8-6596032FA3F9&ID=4344524

## AGC-US-NY-NYC-LL144-6RCNY-5-301: Calculate and document required audit metrics
- Rule: NYC AEDT Law 6 RCNY §5-301(b)-(d); §5-302(a)-(c) · status applicable · applies from 2023-07-05 · confidence high
- Who: roles employer, deployer; uses hiring; conditions: Applies to the independent bias audit for each covered AEDT; the 6 RCNY rule governs categories, data sufficiency, and reporting.
- What: The audit must calculate selection or scoring rates and impact ratios for sex, race/ethnicity, and intersectional categories, and address unknown-category counts as required by the rule. It generally must use historical data; test data is permitted when historical data is insufficient for a statistically significant audit, with the required explanation in the summary.
- Controls: bias_testing, technical_documentation
- Source: https://rules.cityofnewyork.us/rule/automated-employment-decision-tools-updated/

## AGC-US-NY-NYC-LL144-20-871-A1-PUBLIC: Publish the audit summary and tool distribution date
- Rule: NYC AEDT Law NYC Admin. Code §20-871(a)(1)-(2); 6 RCNY §5-301(e) · status applicable · applies from 2023-01-01 · confidence high
- Who: roles employer, deployer; uses hiring; conditions: Covered AEDT use to screen candidates for hiring or employees for promotion in NYC.
- What: Before using an AEDT, the employer or employment agency must make the date and summary of the most recent bias audit publicly available on its website. The information must remain posted until at least six months after the AEDT's last use.
- Controls: transparency_notice, bias_testing
- Source: https://home4.nyc.gov/site/dca/businesses/faq-automated-employment-decision-tools.page

## AGC-US-NY-NYC-LL144-20-871-B2-TIMING: Give advance notice before using an AEDT
- Rule: NYC AEDT Law NYC Admin. Code §20-871(b)(2); 6 RCNY §5-303 · status applicable · applies from 2023-01-01 · confidence high
- Who: roles employer, deployer; uses hiring; conditions: Candidates or employees who are residents of New York City and are being assessed for hiring or promotion with a covered AEDT.
- What: The employer or employment agency must notify each NYC-resident candidate or employee at least 10 business days before using an AEDT to assess that person. Notice may be provided in a job posting or by mail or email as allowed by the DCWP guidance.
- Controls: transparency_notice
- Source: https://home4.nyc.gov/site/dca/businesses/faq-automated-employment-decision-tools.page

## AGC-US-NY-NYC-LL144-20-871-B2-CONTENT: Explain what the tool assesses and available options
- Rule: NYC AEDT Law NYC Admin. Code §20-871(b)(2)(i)-(ii); 6 RCNY §5-303 · status applicable · applies from 2023-01-01 · confidence high
- Who: roles employer, deployer; uses hiring; conditions: Same notice trigger and affected NYC-resident candidates or employees as §20-871(b)(2).
- What: The advance notice must state that an AEDT will be used and identify the job qualifications and characteristics it will assess. It must also explain how the person can request an alternative selection process or accommodation.
- Controls: transparency_notice, user_controls
- Source: https://home4.nyc.gov/site/dca/businesses/faq-automated-employment-decision-tools.page

## AGC-US-NY-NYC-LL144-20-871-B3: Disclose AEDT data sources and retention policy
- Rule: NYC AEDT Law NYC Admin. Code §20-871(b)(3); 6 RCNY §5-302(d) · status applicable · applies from 2023-01-01 · confidence high
- Who: roles employer, deployer; uses hiring; conditions: A candidate or employee may request this information in connection with the employer's covered AEDT use; statutory legal and law-enforcement exceptions apply.
- What: If the information is not already disclosed on the employment section of the website, the employer or employment agency must provide, upon written request, the type and source of data collected by the AEDT and its data-retention policy within 30 days. If disclosure is withheld because it would violate law or interfere with a law-enforcement investigation, the employer must explain why.
- Controls: transparency_notice, privacy_compliance
- Source: https://rules.cityofnewyork.us/rule/automated-employment-decision-tools-updated/
