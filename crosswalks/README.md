# Crosswalks

How the 32 AI Governance Chain controls relate to the EU AI Act, NIST AI RMF 1.0, ISO/IEC 42001:2023 Annex A and the OWASP Top 10 for Agentic Applications 2026. Declare a control once in `AI_GOVERNANCE.md`, see every framework it supports.

**Status:** draft-unreviewed, confidence medium, as of 2026-11-04. These are indicative "relates to" links, not equivalence or certification mappings. ISO/IEC 42001 is cited by Annex A control number only because the text is paywalled. Data: [`controls.yaml`](controls.yaml) (CC BY 4.0). See also [NIST's own AI RMF crosswalks](https://airc.nist.gov/airmf-resources/crosswalks/).

| Control | Meaning | Atlas obligations | EU AI Act | NIST AI RMF | ISO/IEC 42001 | OWASP Agentic |
|---|---|---|---|---|---|---|
| `ai_disclosure` | People are told they are dealing with an AI | 16 | Art. 50(1) | MAP 2.2, MEASURE 2.8 | A.8.2 | ASI09 |
| `content_marking` | Synthetic outputs carry machine-readable marking | 15 | Art. 50(2) | MEASURE 2.8 | A.8.2 | n/a |
| `deepfake_label` | Visible label on deepfakes and AI-generated public-interest text | 9 | Art. 50(4) | MEASURE 2.8 | A.8.2, A.9.2 | n/a |
| `human_oversight` | Competent humans can monitor, intervene, approve or override | 25 | Art. 14, Art. 26(2) | GOVERN 3.2, MAP 3.5 | A.9.2, A.6.2.6 | ASI09, ASI10 |
| `tool_scope` | Agent tools follow least privilege | 1 | Art. 15(5) | MAP 3.3, MANAGE 1.3 | A.6.2.2, A.9.4 | ASI02, ASI03, ASI05 |
| `spend_limits` | Hard limits on money, actions or resources an agent can use | 0 | Art. 9(2)(d) | MANAGE 1.3, MANAGE 2.3 | A.6.2.6 | ASI02, ASI08 |
| `kill_switch` | The system can be stopped safely | 2 | Art. 14(4)(e) | MANAGE 2.4 | A.6.2.6 | ASI08, ASI10 |
| `audit_log` | Events and decisions are logged and kept | 37 | Art. 12, Art. 19, Art. 26(6) | MEASURE 2.4, MANAGE 4.1 | A.6.2.8 | ASI01, ASI03, ASI10 |
| `risk_management` | Documented, ongoing risk management | 57 | Art. 9 | GOVERN 1.3, GOVERN 1.4, MAP 5.1, MANAGE 1.2 | A.5.2, A.6.1.2 | n/a |
| `impact_assessment` | Impact assessment (FRIA, DPIA, AIA) | 18 | Art. 27 | MAP 3.2, MAP 5.1 | A.5.2, A.5.3, A.5.4, A.5.5 | n/a |
| `bias_testing` | Bias or disparate-impact testing | 13 | Art. 10(2)(f)-(g), Art. 4a | MEASURE 2.11 | A.7.4, A.6.2.4 | n/a |
| `data_governance` | Training, validation and test data are governed | 13 | Art. 10 | MAP 4.1, MEASURE 2.1 | A.7.2, A.7.3, A.7.4, A.7.5, A.7.6 | ASI06 |
| `technical_documentation` | Technical documentation is kept up to date | 34 | Art. 11, Annex IV | MAP 2.1, MEASURE 2.9 | A.6.2.3, A.6.2.7 | n/a |
| `incident_reporting` | Serious incidents are reported on time | 19 | Art. 73, Art. 55(1)(c) | GOVERN 4.3, MANAGE 4.3 | A.8.4 | n/a |
| `transparency_notice` | Affected people get notice and explanation | 58 | Art. 13, Art. 26(11), Art. 86 | MEASURE 2.8, MEASURE 2.9 | A.8.2, A.8.5 | ASI09 |
| `contest_and_appeal` | People can contest a decision and reach a human | 11 | Art. 85, Art. 86 | MEASURE 3.3, MANAGE 4.1 | A.8.3, A.3.3 | n/a |
| `ai_literacy` | Staff who run or use AI are trained | 4 | Art. 4 | GOVERN 2.2, MAP 3.4 | A.4.6 | ASI09 |
| `prohibited_practices_screen` | Use case screened against banned practices | 18 | Art. 5 | GOVERN 1.1, MAP 1.1, MANAGE 1.1 | A.9.3, A.9.4 | n/a |
| `registration` | Registered or filed with an authority | 9 | Art. 49, Art. 71 | GOVERN 1.6 | A.8.5 | n/a |
| `local_representative` | Local or authorised representative appointed | 3 | Art. 22, Art. 54 | GOVERN 2.1 | A.10.2 | n/a |
| `safety_framework` | Frontier safety framework published and followed | 4 | Art. 55(1) | GOVERN 1.4, MEASURE 2.6 | A.6.1.2, A.6.1.3 | n/a |
| `copyright_policy` | Copyright compliance policy (GPAI) | 2 | Art. 53(1)(c) | GOVERN 6.1, MAP 4.1 | A.7.3, A.7.5 | n/a |
| `training_data_summary` | Training data summary or documentation | 2 | Art. 53(1)(d) | MAP 4.1, MEASURE 2.9 | A.7.5, A.8.2 | n/a |
| `security_testing` | Adversarial testing, red-teaming, cybersecurity | 24 | Art. 15(5), Art. 55(1)(a), Art. 55(1)(d) | MEASURE 2.7 | A.6.2.4 | ASI01, ASI04, ASI05, ASI06, ASI07 |
| `quality_management` | Quality management system | 1 | Art. 17 | GOVERN 1.4, GOVERN 4.1 | A.6.1.3, A.2.2 | n/a |
| `post_market_monitoring` | Performance monitored after release | 4 | Art. 72, Art. 26(5) | MEASURE 2.4, MANAGE 4.1 | A.6.2.6 | ASI08, ASI10 |
| `conformity_assessment` | Conformity assessment, declaration, marking | 2 | Art. 43, Art. 47, Art. 48 | MEASURE 1.3 | A.6.2.4, A.6.2.5 | n/a |
| `accuracy_robustness` | Accuracy and robustness measured and declared | 7 | Art. 15 | MEASURE 2.3, MEASURE 2.5, MEASURE 2.6 | A.6.2.4 | ASI08 |
| `privacy_compliance` | Personal-data law duties linked to the AI use | 42 | Art. 26(9), Art. 4a | MEASURE 2.10 | A.7.2, A.5.4 | ASI06 |
| `user_controls` | Opt-out, consent or user choice | 17 | n/a | MAP 3.5, MANAGE 4.1 | A.8.2, A.9.2 | ASI09 |
| `minors_protection` | Safeguards for children and vulnerable users | 14 | Art. 5(1)(b), Art. 9(9) | MAP 5.1, MEASURE 2.6 | A.5.4, A.5.5 | n/a |
| `content_moderation` | Notice-and-removal or moderation of harmful AI content | 21 | Art. 5(1)(ba)-(bb) | MANAGE 2.3, MEASURE 2.6 | A.9.2 | n/a |

## By framework

- [EU AI Act](eu_ai_act.md)
- [NIST AI RMF 1.0](nist_ai_rmf.md)
- [ISO/IEC 42001 Annex A](iso_42001.md)
- [OWASP Agentic Top 10 (2026)](owasp_agentic.md)

Found a better mapping? [Open an issue](https://github.com/mathieugouanou/aigovernancechain/issues/new?template=obligation-correction.yml). Reviewers with ISO/IEC 42001 or NIST AI RMF practice are especially welcome.
