# Shared vocabulary (ai-governance/v0.1)

## Jurisdictions

- `EU`: European Union
- `COE`: Council of Europe
- `US`: United States (federal)
- `US-CA`: California
- `US-CO`: Colorado
- `US-TX`: Texas
- `US-NY`: New York State
- `US-NY-NYC`: New York City
- `US-IL`: Illinois
- `CN`: China
- `KR`: South Korea
- `JP`: Japan
- `VN`: Vietnam
- `IN`: India
- `GB`: United Kingdom
- `SG`: Singapore
- `CH`: Switzerland
- `INTL`: International standards

EU member codes (DE, FR, ...) imply EU. US state codes imply US.

## Roles

- `provider`
- `deployer`
- `importer`
- `distributor`
- `product-manufacturer`
- `authorised-representative`
- `gpai-provider`
- `developer`
- `platform`
- `public-body`
- `employer`
- `any`

## Uses

- `any-ai`
- `chatbot`
- `agent`
- `generated-media`
- `deepfake`
- `emotion-recognition`
- `biometric-categorisation`
- `remote-biometric-id`
- `hiring`
- `credit`
- `insurance`
- `education`
- `essential-services`
- `healthcare`
- `law-enforcement`
- `migration`
- `justice`
- `critical-infrastructure`
- `significant-decision`
- `profiling`
- `recommender`
- `companion`
- `minors`
- `gpai-model`
- `frontier-model`
- `public-sector-use`
- `safety-component`

## Controls

- `ai_disclosure`: People are told they are dealing with an AI
- `content_marking`: Synthetic outputs carry machine-readable marking
- `deepfake_label`: Visible label on deepfakes and AI-generated public-interest text
- `human_oversight`: Competent humans can monitor, intervene, approve or override
- `tool_scope`: Agent tools follow least privilege
- `spend_limits`: Hard limits on money, actions or resources an agent can use
- `kill_switch`: The system can be stopped safely
- `audit_log`: Events and decisions are logged and kept
- `risk_management`: Documented, ongoing risk management
- `impact_assessment`: Impact assessment (FRIA, DPIA, AIA)
- `bias_testing`: Bias or disparate-impact testing
- `data_governance`: Training, validation and test data are governed
- `technical_documentation`: Technical documentation is kept up to date
- `incident_reporting`: Serious incidents are reported on time
- `transparency_notice`: Affected people get notice and explanation
- `contest_and_appeal`: People can contest a decision and reach a human
- `ai_literacy`: Staff who run or use AI are trained
- `prohibited_practices_screen`: Use case screened against banned practices
- `registration`: Registered or filed with an authority
- `local_representative`: Local or authorised representative appointed
- `safety_framework`: Frontier safety framework published and followed
- `copyright_policy`: Copyright compliance policy (GPAI)
- `training_data_summary`: Training data summary or documentation
- `security_testing`: Adversarial testing, red-teaming, cybersecurity
- `quality_management`: Quality management system
- `post_market_monitoring`: Performance monitored after release
- `conformity_assessment`: Conformity assessment, declaration, marking
- `accuracy_robustness`: Accuracy and robustness measured and declared
- `privacy_compliance`: Personal-data law duties linked to the AI use
- `user_controls`: Opt-out, consent or user choice
- `minors_protection`: Safeguards for children and vulnerable users
- `content_moderation`: Notice-and-removal or moderation of harmful AI content
