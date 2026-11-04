# Texas Responsible Artificial Intelligence Governance Act (US-TX)

As of 2026-11-04. Review: draft-unreviewed. Binding and applicable since 2026-01-01. The Attorney General has exclusive enforcement authority (subject to limited state-agency sanctions), with a 60-day notice-and-cure step before suit; no private right of action. Uncurable violations carry up to $200,000. The Texas AI Council makes recommendations and provides training but cannot issue binding rules or guidance.

## AGC-US-TX-TRAIGA-552-052: Do not intentionally incite self-harm, violence, or crime
- Rule: Texas TRAIGA Bus. & Com. Code § 552.052 · status applicable · applies from 2026-01-01 · confidence high
- Who: roles developer, deployer; uses any-ai; conditions: Applies to persons within the Texas scope in § 551.002; the conduct must intentionally aim to incite or encourage one of the listed acts.
- What: A person may not develop or deploy an AI system in a manner that intentionally aims to incite or encourage a person to commit physical self-harm (including suicide), harm another person, or engage in criminal activity. The prohibition turns on the specified intent, not merely on a harmful outcome.
- Controls: prohibited_practices_screen
- Source: https://statutes.capitol.texas.gov/Docs/BC/htm/BC.552.htm

## AGC-US-TX-TRAIGA-552-053: Do not use AI for prohibited government social scoring
- Rule: Texas TRAIGA Bus. & Com. Code § 552.053 · status applicable · applies from 2026-01-01 · confidence high
- Who: roles public-body, deployer; uses public-sector-use, profiling, significant-decision; conditions: Only governmental entities; the statute requires intent to assign a score and one of the listed harmful or rights-infringing consequences.
- What: A governmental entity may not use or deploy AI to evaluate or classify people based on known, inferred, or predicted social behavior or personal characteristics with intent to assign a social score that results or may result in specified detrimental or disproportionate treatment, or infringement of rights under the U.S. or Texas Constitution or other law.
- Controls: prohibited_practices_screen
- Source: https://statutes.capitol.texas.gov/Docs/BC/htm/BC.552.htm

## AGC-US-TX-TRAIGA-552-054: Limit government biometric identification that infringes rights
- Rule: Texas TRAIGA Bus. & Com. Code § 552.054 and § 503.001 · status applicable · applies from 2026-01-01 · confidence high
- Who: roles public-body, developer, deployer; uses biometric-categorisation, remote-biometric-id, public-sector-use; conditions: Government biometric-identification restriction applies only when the specified gathering would infringe a legal right; statutory definitions and § 503.001 exceptions apply.
- What: A governmental entity may not develop or deploy AI to uniquely identify a specific individual using biometric data, or targeted or untargeted gathering of publicly available images or other media, without consent when the gathering would infringe a right protected by the U.S. or Texas Constitution or other state or federal law. Section 503.001 also restricts commercial biometric capture, with statutory exceptions for certain AI training and security or fraud-prevention uses.
- Controls: prohibited_practices_screen, privacy_compliance
- Source: https://statutes.capitol.texas.gov/Docs/BC/htm/BC.552.htm

## AGC-US-TX-TRAIGA-552-055-056: Do not target constitutional rights or unlawfully discriminate by intent
- Rule: Texas TRAIGA Bus. & Com. Code §§ 552.055-.056 · status applicable · applies from 2026-01-01 · confidence high
- Who: roles developer, deployer; uses any-ai, significant-decision, profiling; conditions: The constitutional-rights prohibition uses a sole-intent standard; the discrimination prohibition requires intent and violation of other state or federal law, with express financial and insurance provisions.
- What: A person may not develop or deploy AI with the sole intent to infringe, restrict, or impair an individual's U.S. constitutional rights, or with intent to unlawfully discriminate against a protected class in violation of state or federal law. Disparate impact alone is not sufficient to prove the discrimination intent; statutory insurance and federally insured financial-institution provisions apply.
- Controls: prohibited_practices_screen, bias_testing
- Source: https://statutes.capitol.texas.gov/Docs/BC/htm/BC.552.htm

## AGC-US-TX-TRAIGA-552-057: Do not develop specified AI sexual-abuse material or child-impersonating chat
- Rule: Texas TRAIGA Bus. & Com. Code § 552.057 · status applicable · applies from 2026-01-01 · confidence high
- Who: roles developer, distributor; uses generated-media, deepfake, chatbot, companion, minors; conditions: The visual-material prohibition uses the statute's sole-intent standard and Penal Code references; the child-impersonating chat prohibition uses its separate intentional-development/distribution standard.
- What: A person may not develop or distribute an AI system with the sole intent to produce, assist in producing, or distribute visual material that violates the Texas child-pornography statute or deepfake videos/images that violate Penal Code § 21.165. A person also may not intentionally develop or distribute an AI system that has text-based sexual-conduct conversations while impersonating or imitating a child under 18.
- Controls: prohibited_practices_screen, content_moderation, minors_protection
- Source: https://statutes.capitol.texas.gov/Docs/BC/htm/BC.552.htm

## AGC-US-TX-TRAIGA-552-051-GOV: Disclose government AI interactions to consumers
- Rule: Texas TRAIGA Bus. & Com. Code § 552.051(b)-(e) · status applicable · applies from 2026-01-01 · confidence high
- Who: roles public-body; uses chatbot, agent, any-ai; conditions: Applies to a governmental agency's AI system intended to interact with consumers; the Act does not create a general private-company chatbot disclosure rule.
- What: A governmental agency that makes available an AI system intended to interact with consumers must clearly and conspicuously disclose, before or at the time of interaction, that the consumer is interacting with AI. The notice must be in plain language and not use a dark pattern; it is required even when AI use would be obvious, and may be provided through a hyperlink.
- Controls: ai_disclosure, transparency_notice
- Source: https://statutes.capitol.texas.gov/Docs/BC/htm/BC.552.htm

## AGC-US-TX-TRAIGA-552-051-HEALTH: Disclose AI use in health-care services or treatment
- Rule: Texas TRAIGA Bus. & Com. Code § 552.051(f) · status applicable · applies from 2026-01-01 · confidence high
- Who: roles any; uses healthcare; conditions: Licensed, registered, or certified provider uses an AI system in relation to health-care service or treatment; emergency timing exception applies.
- What: If an AI system is used in relation to a health-care service or treatment, the provider must disclose the AI interaction to the recipient or personal representative no later than the date the service or treatment is first provided. In an emergency, disclosure must be made as soon as reasonably possible; the disclosure is subject to the section's plain-language, clear-and-conspicuous, and no-dark-pattern requirements.
- Controls: ai_disclosure, transparency_notice
- Source: https://statutes.capitol.texas.gov/Docs/BC/htm/BC.552.htm

## AGC-US-TX-TRAIGA-553-052: Apply and report if participating in the AI regulatory sandbox
- Rule: Texas TRAIGA Bus. & Com. Code §§ 553.052, 553.053, 553.102 · status applicable · applies from 2026-01-01 · confidence high
- Who: roles developer, deployer; uses any-ai; conditions: Only persons who voluntarily apply for and are approved as sandbox participants; approval by DIR and any applicable agency is required before testing under the program.
- What: A sandbox applicant must obtain approval from the Department of Information Resources and each applicable agency before testing and submit the system description and intended use, a benefit assessment addressing consumer, privacy, and public-safety impacts, a mitigation plan, and proof of applicable federal AI-law compliance. Approved participants may test and deploy for up to 36 months (extendable for good cause) and must report quarterly on performance, risk mitigation, and consumer/stakeholder feedback; Chapter 552 duties and prohibitions cannot be waived.
- Controls: impact_assessment, risk_management, incident_reporting
- Source: https://statutes.capitol.texas.gov/Docs/BC/htm/BC.553.htm
