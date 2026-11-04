# AI Governance Chain: Public-sector edition

**Not legal advice. Status as of 4 Nov 2026. Draft, awaiting expert review.**

## Who this is for

This edition is for ministries, government agencies, municipalities, public hospitals, schools and other public bodies that buy, build, integrate or use AI. It covers decision-support and administrative tools as well as public-facing chatbots, generative AI, analytics and AI embedded in suppliers' services.

The jurisdiction table is a starting point, not a complete list of laws. Legal scope often depends on the public body's legal form, the service, the data, the decision and where people are affected. Local data-protection, administrative, equality, procurement, sector and records laws can add duties. Confirm those rules with counsel before deployment.

## How to use this edition

1. Start with the checklist below. Assign a named owner to each step.
2. Use [obligations-by-jurisdiction.md](obligations-by-jurisdiction.md) to identify binding law and official policy that may apply. Check the primary source linked in each row.
3. Use [procurement-clauses.md](procurement-clauses.md) to draft tender requirements and contract schedules. Tailor them to the service, risk and procurement law.
4. Publish and maintain a [transparency record](transparency-record-template.md). Protect information that lawfully must remain restricted, but do not use confidentiality as a reason to hide basic public accountability.
5. Give each system a versioned [AI_GOVERNANCE.md](AI_GOVERNANCE.public-sector.example.md) file. The example is fictional and uses the project's `ai-governance/v0.1` front matter and controlled control keys.

## Ten-step public-body deployment checklist

1. **Inventory.** Find AI bought, built, embedded in a service, used by staff, piloted or used by a contractor on the body's behalf. Record owner, purpose, provider, model/version, data, users, affected people, locations, lifecycle stage and change history.
2. **Classify risk.** Screen prohibited uses, legal effects, essential services, health and safety, vulnerable groups, sensitive data, biometrics, law enforcement, migration, education and employment. Apply each jurisdiction's own definition. Record the decision and who approved it.
3. **Assess impact.** Before procurement or pilot where feasible, assess necessity, alternatives, benefits, privacy, fundamental rights, equality, accessibility, safety, security, service quality and recourse. Use the required legal tool where one exists, such as an EU FRIA, a Canadian AIA or the Australian Government AI impact assessment. Do not assume one assessment replaces another.
4. **Set procurement clauses.** Require system and model documentation, data-use and training limits, access for testing and audit, performance and fairness evidence, security controls, incident notice, human oversight, exit assistance and portable records. Allocate obligations to the supplier in contract, not only in policy.
5. **Create a transparency record.** Write a short public explanation first, then technical detail for specialists. Identify the decision or service affected, the system's role, known limits, human review, data use, impact assessments and recourse. Apply any statutory database or notice requirements separately.
6. **Provide meaningful human oversight.** Give trained staff enough time, authority, access to case facts and power to pause, override or escalate. Do not treat a click-through as meaningful review. Preserve a route to a person and a way to challenge adverse outcomes.
7. **Log proportionately.** Keep versioned records of inputs or input categories, outputs, decision use, human action, access, overrides, changes, tests and incidents. Set lawful retention periods, access controls and deletion rules. Keep logs sufficient to investigate and explain a contested case.
8. **Build staff literacy.** Train buyers, service owners, frontline workers, decision-makers, technical staff, privacy/security teams and senior approvers for their roles. Cover limitations, verification, privacy, security, bias, escalation and how to explain use to the public.
9. **Handle incidents.** Define what counts as an AI incident, who can report it, who triages it, when use is paused, how affected people are protected, and which authorities must be notified. Include suppliers and subprocessors in exercises and contract deadlines.
10. **Review and retire.** At least annually and after material changes, review purpose, necessity, risk, performance, subgroup outcomes, complaints, overrides, security, data, legal status and transparency. Stop, redesign or retire a system that no longer meets its purpose or safeguards.

## Files

- [Obligations by jurisdiction](obligations-by-jurisdiction.md)
- [Model procurement clauses](procurement-clauses.md)
- [Transparency record template and fictional example](transparency-record-template.md)
- [Fictional AI_GOVERNANCE.md example](AI_GOVERNANCE.public-sector.example.md)
