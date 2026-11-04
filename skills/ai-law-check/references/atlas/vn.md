# Vietnam AI Law (VN)

As of 2026-11-04. Review: draft-unreviewed. Binding and in force. Existing systems have staged transition deadlines of 1 March 2027 for most sectors and 1 September 2027 for healthcare, education and finance.

## AGC-VN-AILAW-7: Do not use AI for prohibited or unlawful purposes
- Rule: Vietnam AI Law Art. 7(1)-(6) · status applicable · applies from 2026-03-01 · confidence high
- Who: roles any; uses any-ai
- What: The Law prohibits using AI to commit illegal acts or violate others' lawful interests; to systematically deceive or manipulate people through synthetic simulations of real persons or events where serious harm results; to exploit vulnerable groups to cause harm; or to create or spread falsified content capable of seriously harming national security, public order or social safety. It also prohibits unlawful data use, disabling required human oversight, and concealing or falsifying mandatory transparency information, labels or warnings.
- Controls: prohibited_practices_screen, privacy_compliance
- Source: https://en.baochinhphu.vn/viet-nams-law-on-artificial-intelligence-111260715113551787.htm

## AGC-VN-AILAW-9-10: Classify AI by risk and notify medium- and high-risk systems
- Rule: Vietnam AI Law Art. 9-10; Decree 142, Arts. 5-6, 11-12 and 14 · status applicable · applies from 2026-03-01 · confidence high
- Who: roles provider, deployer; uses any-ai; conditions: Providers classify all systems; dossiers and advance notification apply to medium- and high-risk systems only.
- What: Providers must classify each AI system before putting it into use. The Law distinguishes high-, medium- and low-risk systems; providers must prepare classification dossiers and notify the Ministry of Science and Technology before service for medium- and high-risk systems. Deployers take over the provider's classification and must cooperate in reclassification when a deployment change, integration or modified function or purpose creates new or higher risk.
- Controls: risk_management, technical_documentation, registration
- Source: https://en.baochinhphu.vn/viet-nams-law-on-artificial-intelligence-111260715113551787.htm

## AGC-VN-AILAW-11-1-2: Disclose AI interactions and machine-mark generated audio, images and video
- Rule: Vietnam AI Law Art. 11(1)-(2); Decree 142, Art. 17 · status applicable · applies from 2026-03-01 · confidence high
- Who: roles provider; uses chatbot, agent, generated-media, deepfake
- What: Providers must ensure that people interacting directly with an AI system are informed they are interacting with AI. Providers must also apply machine-readable technical marks to AI-generated or edited audio, image and video outputs, using a method permitted by the Decree and maintaining the marking through generation and export within the system's control.
- Controls: ai_disclosure, content_marking
- Source: https://en.baochinhphu.vn/viet-nams-law-on-artificial-intelligence-111260715113551787.htm

## AGC-VN-AILAW-11-3-4: Notify the public and visibly label potentially misleading AI content
- Rule: Vietnam AI Law Art. 11(3)-(5); Decree 142, Art. 18 · status applicable · applies from 2026-03-01 · confidence high
- Who: roles deployer; uses generated-media, deepfake; conditions: Public release; notification is required for content capable of causing confusion, and visible labels are required for the specified synthetic or recreated audio, image and video.
- What: Deployers must clearly notify the public when releasing AI-generated or edited text, audio, images or video that could confuse people about the authenticity of an event or person. They must visibly label AI audio, image or video that simulates a real person's appearance or voice, or recreates a real event, so it can be distinguished from authentic content.
- Controls: transparency_notice, deepfake_label
- Source: https://en.baochinhphu.vn/viet-nams-law-on-artificial-intelligence-111260715113551787.htm

## AGC-VN-D142-19: Contain and report serious AI incidents on time
- Rule: AI Law Implementing Decree Art. 12 of the AI Law; Decree 142, Art. 19(2)-(8) · status applicable · applies from 2026-05-01 · confidence high
- Who: roles provider, deployer, any; uses any-ai; conditions: Only serious incidents as defined in the AI Law and Decree; the 72-hour deadline is not the deadline for every incident.
- What: Developers and providers must promptly take technical measures to correct, suspend or recall a system and notify the competent authority; deployers and users must record incidents, limit harm and notify the provider. A provider, or a deployer unable to contact the provider, must make a preliminary report within 72 hours after confirming an urgent serious incident (including death or serious health harm, serious public service disruption or national-security effects, and uncontrolled rights harm); other serious incidents are due within five working days. A final remediation report is due within 15 days after the preliminary report.
- Controls: incident_reporting, audit_log, post_market_monitoring
- Source: https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/4/142-2026-ndcp.signed.pdf

## AGC-VN-AILAW-13: Assess conformity of high-risk AI before use and after significant changes
- Rule: Vietnam AI Law Art. 13; Decree 142, Art. 13; Decision 33/2026/QD-TTg · status applicable · applies from 2026-03-01 · confidence high
- Who: roles provider; uses any-ai; conditions: Systems on the high-risk list; third-party certification is required only for systems specifically listed for mandatory certification.
- What: Providers of high-risk systems must complete conformity assessment before putting the system into service and reassess after significant changes that affect the original result. Systems on the Prime Minister's list requiring mandatory certification need assessment by a registered or recognized conformity-assessment organization; other high-risk systems may be self-assessed by the provider or assessed by such an organization. Providers must maintain conformity and disclose assessment results as required by the Decree.
- Controls: conformity_assessment, technical_documentation
- Source: https://en.baochinhphu.vn/viet-nams-law-on-artificial-intelligence-111260715113551787.htm

## AGC-VN-AILAW-14: Manage high-risk systems with documented controls and human oversight
- Rule: Vietnam AI Law Art. 14(1)-(5); Decree 142, Art. 15 · status applicable · applies from 2026-03-01 · confidence high
- Who: roles provider, deployer; uses any-ai; conditions: Only systems classified as high-risk; users must also follow operating procedures and promptly notify deployers of incidents under Art. 14(3).
- What: Providers of high-risk systems must maintain risk-management measures, govern training, testing and operational data, keep technical dossiers and logs, design for human oversight and intervention, meet transparency and incident duties, and give deployers and affected people functional information, operating guidance and risk warnings without disclosing source code or protected business secrets. Deployers must use systems within their classified purpose and risk, monitor operation, protect data, enable human intervention, control emerging risks and cooperate with providers and authorities.
- Controls: risk_management, data_governance, technical_documentation, audit_log, human_oversight, transparency_notice, privacy_compliance
- Source: https://en.baochinhphu.vn/viet-nams-law-on-artificial-intelligence-111260715113551787.htm

## AGC-VN-AILAW-14-6: Foreign high-risk providers must maintain a Vietnam contact point
- Rule: Vietnam AI Law Art. 14(6) · status applicable · applies from 2026-03-01 · confidence high
- Who: roles provider; uses any-ai; conditions: Foreign providers of high-risk systems provided in Vietnam; the additional commercial-presence or authorized-representative requirement applies when mandatory pre-use certification is required.
- What: A foreign provider whose high-risk AI system is provided in Vietnam must have a legal contact point in Vietnam. If the system is subject to mandatory conformity certification before it is put into service, the provider must also have a commercial presence or an authorized representative in Vietnam.
- Controls: local_representative
- Source: https://en.baochinhphu.vn/viet-nams-law-on-artificial-intelligence-111260715113551787.htm

## AGC-VN-D142-20: Assess public-sector AI impacts before qualifying use
- Rule: AI Law Implementing Decree Art. 27(3)-(4) of the AI Law; Decree 142, Art. 20 · status applicable · applies from 2026-03-01 · confidence high
- Who: roles public-body; uses public-sector-use, justice, essential-services; conditions: High-risk systems, or systems whose output directly supports an administrative decision; other public-sector systems may be covered if they significantly affect human rights, social equality or public interests under Art. 27(3).
- What: State agencies must prepare an impact-assessment report before using a high-risk AI system or a system whose output is directly used as the basis for an administrative decision. The report must identify and assess risks, state control and mitigation measures, and explain human oversight and intervention; agencies must publish it except for state secrets, business secrets and personal data, and reassess after relevant changes create new or changed risks.
- Controls: impact_assessment, human_oversight, transparency_notice, risk_management
- Source: https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/4/142-2026-ndcp.signed.pdf

## AGC-VN-PDPL-30: Protect personal data processed using AI
- Rule: Personal Data Protection Law Art. 30(1)-(5) · status applicable · applies from 2026-01-01 · confidence high
- Who: roles provider, deployer, any; uses any-ai, profiling, significant-decision; conditions: Applies when personal data are processed in AI systems or services, regardless of whether the system is otherwise classified high, medium or low risk.
- What: Personal data in AI processing must be used for the stated purpose and limited to what is necessary, with appropriate security measures, authentication and access controls. Personal-data processing by AI must be classified by risk level so appropriate protections can be applied; the Law prohibits using or developing AI systems involving personal data to harm national defense, security, public order or safety, or another person's life, health, dignity, reputation or property.
- Controls: privacy_compliance, risk_management, data_governance, prohibited_practices_screen
- Source: https://congbao.chinhphu.vn/van-ban/luat-so-91-2025-qh15-45578.htm
