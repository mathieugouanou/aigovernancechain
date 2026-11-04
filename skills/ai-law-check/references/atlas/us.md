# U.S. Federal AI Governance (US)

As of 2026-11-04. Review: draft-unreviewed. EO 14148 revoked the 2023 EO 14110 and EO 14179 reset federal policy. No comprehensive AI statute or blanket AI-specific state-law preemption was enacted by 4 November 2026; EO 14365 directs litigation and policy work but does not itself preempt state laws. The chatbot/minors and AI-labeling bills checked remain proposals; NIST AI RMF is voluntary and under revision.

## AGC-US-M2521-3A-I: Designate a Chief AI Officer
- Rule: OMB M-25-21 M-25-21 §3(a)(i) · status applicable · applies from 2025-04-03 · confidence high
- Who: roles public-body; uses public-sector-use; conditions: Covered executive-branch agencies; the memorandum excludes AI used as a component of a national security system and contains additional agency-specific exceptions.
- What: The head of each covered agency must retain or designate a Chief AI Officer to promote agency AI innovation, adoption, and governance. An existing senior official may serve if they have significant AI expertise and the authority and access required by the memorandum.
- Controls: risk_management
- Source: https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-21-Accelerating-Federal-Use-of-AI-through-Innovation-Governance-and-Public-Trust.pdf

## AGC-US-M2521-3B-V: Maintain and publish annual AI use-case inventories
- Rule: OMB M-25-21 M-25-21 §3(b)(v) · status applicable · applies from 2025-04-03 · confidence high
- Who: roles public-body; uses public-sector-use; conditions: Covered agencies under M-25-21; DoD and Intelligence Community are excluded from the public version of the inventory.
- What: Covered agencies must inventory AI use cases at least annually, submit the inventory to OMB, and publish a public version on the agency website. The public-inventory requirement does not apply to the Department of Defense or Intelligence Community; other stated agency and national-security exceptions also apply.
- Controls: technical_documentation, audit_log
- Source: https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-21-Accelerating-Federal-Use-of-AI-through-Innovation-Governance-and-Public-Trust.pdf

## AGC-US-M2521-4B: Apply minimum risk practices to high-impact AI
- Rule: OMB M-25-21 M-25-21 §4(b) · status applicable · applies from 2025-04-03 · confidence high
- Who: roles public-body; uses public-sector-use, significant-decision; conditions: High-impact AI is AI whose output is a principal basis for a decision or action with legal, material, binding, or significant effects on rights or safety; M-25-21 has national-security-system and specified agency exceptions and limited pilot provisions.
- What: Agencies must conduct pre-deployment testing, prepare risk-mitigation plans, and complete a documented AI impact assessment before deploying a high-impact use case; they must periodically update the assessment and monitor performance and risks. Agencies must discontinue or cease use when the system fails the required practices and the risks cannot be mitigated.
- Controls: risk_management, impact_assessment, security_testing, human_oversight
- Source: https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-21-Accelerating-Federal-Use-of-AI-through-Innovation-Governance-and-Public-Trust.pdf

## AGC-US-M2522-2C: Put required safeguards into covered AI contracts
- Rule: OMB M-25-22 M-25-22 §§2(c), 3(c)-(e), 4 · status applicable · applies from 2025-09-30 · confidence high
- Who: roles public-body; uses public-sector-use; conditions: Covered executive-branch agency acquisitions of AI systems or services under solicitations issued on or after 2025-09-30, and options exercised after that date; excludes Intelligence Community elements and AI acquired for use in a national security system.
- What: For covered solicitations and later contract options, agencies must include appropriate terms addressing privacy, government data and intellectual-property rights, M-25-21 high-impact AI requirements, and the agency's ability to conduct ongoing testing and monitoring. AI systems operated as agency information systems also need an authorization to operate before deployment.
- Controls: privacy_compliance, technical_documentation, risk_management, post_market_monitoring
- Source: https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-22-Driving-Efficient-Acquisition-of-Artificial-Intelligence-in-Government.pdf

## AGC-US-EO14319-3: Procure LLMs developed under the Unbiased AI Principles
- Rule: EO 14319 §3(a)-(b) · status applicable · applies from 2025-07-23 · confidence high
- Who: roles public-body; uses public-sector-use, gpai-model; conditions: Federal agency procurement of LLMs; national-security-system exceptions may be provided in OMB guidance.
- What: Agency heads must procure only LLMs developed in accordance with the order's truth-seeking and ideological-neutrality principles. The order concerns federal procurement and does not impose a general private-market model-design mandate.
- Controls: accuracy_robustness, technical_documentation
- Source: https://www.whitehouse.gov/presidential-actions/2025/07/preventing-woke-ai-in-the-federal-government/

## AGC-US-M2604-3A-C: Include Unbiased AI Principles in LLM procurement
- Rule: OMB M-26-04 M-26-04 §§3(a), 3(c), Appendix A · status applicable · applies from 2025-12-11 · confidence high
- Who: roles public-body; uses public-sector-use, gpai-model; conditions: Covered agencies procuring LLMs; excludes national security systems, with specified factors for applying the requirements to agency-developed LLMs and non-LLM models.
- What: Agencies must put contractual requirements addressing the Unbiased AI Principles in post-11 December 2025 solicitations or orders for LLM procurement, obtain enough vendor information to assess compliance, and update procurement policies and user-feedback procedures by 11 March 2026. The memo also sets a two-year sunset unless extended by OMB.
- Controls: accuracy_robustness, technical_documentation, audit_log
- Source: https://www.whitehouse.gov/wp-content/uploads/2025/12/M-26-04-Increasing-Public-Trust-in-Artificial-Intelligence-Through-Unbiased-AI-Principles.pdf

## AGC-US-EO14434-2A: Use the prescribed term in future federal AI communications
- Rule: EO 14434 §2(a)-(b) · status applicable · applies from 2026-09-29 · confidence high
- Who: roles public-body; uses public-sector-use; conditions: Non-statutory executive-branch communications and documents issued after the order; subject to applicable law.
- What: To the maximum extent permitted by law, executive departments and agencies must use “Super Intelligence” and “SI” instead of “Artificial Intelligence” and “AI” in official correspondence, public communications, websites, reports, policy documents, and other non-statutory executive-branch documents. The order does not require altering statutes, prior regulations, contracts, or historical documents.
- Controls: 
- Source: https://www.whitehouse.gov/presidential-actions/2026/09/inaugurating-the-era-of-super-intelligence/

## AGC-US-TIDA-2: Do not knowingly publish specified nonconsensual intimate depictions
- Rule: TAKE IT DOWN Act §2; 47 U.S.C. §223(h) · status applicable · applies from 2025-05-19 · confidence high
- Who: roles any; uses generated-media, deepfake; conditions: Applies only to the statutory categories and circumstances in 47 U.S.C. §223(h), including the separate rules for adult and minor subjects and the listed exceptions.
- What: In interstate or foreign commerce, it is unlawful to use an interactive computer service to knowingly publish certain intimate visual depictions of identifiable adults or minors without consent, including covered digital forgeries made with AI. The adult and minor offenses have different intent or harm conditions and statutory exceptions.
- Controls: prohibited_practices_screen, content_moderation
- Source: https://www.congress.gov/119/plaws/publ12/PLAW-119publ12.htm

## AGC-US-TIDA-3: Provide notice and remove validly reported intimate depictions
- Rule: TAKE IT DOWN Act §3(a)-(b) · status applicable · applies from 2026-05-19 · confidence high
- Who: roles platform; uses generated-media, deepfake; conditions: Covered platforms as defined by the Act; removal duties concern intimate visual depictions published on the platform without the identifiable person's consent.
- What: Covered platforms must provide a clear, plain-language notice of a removal process for intimate depictions published without consent, including AI digital forgeries. After a valid request, the platform must remove the depiction and make reasonable efforts to remove known identical copies as soon as possible and no later than 48 hours.
- Controls: content_moderation, audit_log
- Source: https://www.congress.gov/119/plaws/publ12/PLAW-119publ12.htm

## AGC-US-FTCA-5A: Do not make deceptive AI claims to consumers
- Rule: FTC Act §5(a), 15 U.S.C. §45(a) · status applicable · applies from 1914-09-26 · confidence high
- Who: roles any; uses any-ai; conditions: Conduct in or affecting commerce within the FTC's jurisdiction; statutory exceptions and other applicable law remain relevant.
- What: The FTC Act's existing prohibition on unfair or deceptive acts or practices in commerce applies to AI-related marketing and conduct. Companies must not make deceptive claims about AI capabilities or use AI to facilitate deception; the law does not create a general warranty that every AI output is accurate.
- Controls: accuracy_robustness, technical_documentation
- Source: https://uscode.house.gov/us/usc/119-136/t15/s45/

## AGC-US-NDAA11960-1512: Establish a DoD-wide AI and ML cybersecurity policy
- Rule: FY2026 NDAA §1512 · status applicable · applies from 2025-12-18 · confidence high
- Who: roles public-body; uses public-sector-use, any-ai; conditions: Department of Defense systems, applications, and models used in national-defense applications.
- What: The Secretary of Defense must develop and implement a department-wide policy for cybersecurity and associated governance of AI and machine-learning systems, applications, and models used in national-defense applications. The policy must address AI-specific threats, lifecycle safeguards, testing, auditing, monitoring, and workforce training.
- Controls: risk_management, security_testing, audit_log, ai_literacy
- Source: https://www.govinfo.gov/content/pkg/PLAW-119publ60/html/PLAW-119publ60.htm

## AGC-US-NDAA11960-1513: Develop DoD AI security requirements for covered entities
- Rule: FY2026 NDAA §1513(a)-(b), (f)(3) · status applicable · applies from 2025-12-18 · confidence high
- Who: roles public-body; uses public-sector-use; conditions: This records DoD's statutory implementation duty; a company's specific requirements depend on an applicable DoD solicitation, contract clause, or similar action.
- What: The Secretary of Defense must develop a risk-based physical- and cybersecurity framework for covered AI/ML technologies and amend the DFARS or take similar action to require covered entities to implement it. A covered entity is a contractor or other entity developing, deploying, storing, or hosting covered AI/ML technology for DoD.
- Controls: risk_management, security_testing, incident_reporting, ai_literacy
- Source: https://www.govinfo.gov/content/pkg/PLAW-119publ60/html/PLAW-119publ60.htm

## AGC-US-NDAA11960-1532: Keep covered DeepSeek and High Flyer AI out of DoD contract performance
- Rule: FY2026 NDAA §1532(a)(1), (a)(3), (b)-(c) · status applicable · applies from 2026-01-17 · confidence high
- Who: roles any; uses any-ai, public-sector-use; conditions: Contractors during performance of a contract with the Department of Defense; statutory waiver exceptions and definitions apply.
- What: DoD must require covered AI applications to be excluded from and removed from its systems and devices, and contractors may not use covered AI in performing a DoD contract. Covered AI includes models or successor models developed by DeepSeek or High Flyer and specified affiliated entities; the Secretary may grant case-specific waivers for listed research, evaluation, national-security, or mission-critical purposes with risk mitigation.
- Controls: prohibited_practices_screen
- Source: https://www.govinfo.gov/content/pkg/PLAW-119publ60/html/PLAW-119publ60.htm

## AGC-US-NDAA11960-1533: Assess and oversee major DoD AI systems
- Rule: FY2026 NDAA §1533(a)-(d), (f)(3) · status applicable · applies from 2026-06-01 · confidence high
- Who: roles public-body; uses public-sector-use, any-ai; conditions: Department of Defense major AI systems meeting §1533(f)(3)'s criteria, including at least 500 annual DoD users and specified high-impact or operational conditions.
- What: The Secretary of Defense must establish a cross-functional team to develop a standard AI model assessment framework and governance structure, designate functional leads, and assess major AI systems against the framework. A major system meets the statutory impact, user-count, and operational-use thresholds; systems used solely for undeployed research, development, testing, or evaluation are excluded.
- Controls: risk_management, impact_assessment, security_testing, technical_documentation
- Source: https://www.govinfo.gov/content/pkg/PLAW-119publ60/html/PLAW-119publ60.htm

## AGC-US-NDAA11960-6604: Require removal of DeepSeek from intelligence-community systems
- Rule: FY2026 NDAA §6604(a)-(e) · status applicable · applies from 2026-02-16 · confidence high
- Who: roles public-body; uses public-sector-use, any-ai; conditions: Intelligence-community national security systems, including systems operated by contractors or other entities on behalf of an element.
- What: The Director of National Intelligence must issue standards and guidelines requiring removal of the DeepSeek application or successor service from national security systems operated by an intelligence-community element, its contractor, or another entity acting for it. The standards must include national-security and research exceptions with risk-mitigation requirements.
- Controls: prohibited_practices_screen, security_testing
- Source: https://www.govinfo.gov/content/pkg/PLAW-119publ60/html/PLAW-119publ60.htm
