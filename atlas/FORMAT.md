# Obligation Atlas format (v0.1)

The Obligation Atlas turns AI laws into small, cited, machine-readable obligations. One YAML file per regime lives in `atlas/regimes/`. `node scripts/build.mjs` compiles them into `atlas/dist/atlas.json`, the deadline calendar, the regime cards and the website data.

Every file is **data, not legal advice**. Every obligation carries a source link, an "as of" date and a review status.

## File layout

```yaml
id: eu                       # file id, lowercase, matches the file name (eu.yaml)
jurisdiction: EU             # see "Jurisdiction codes"
name: European Union
as_of: "2026-11-04"          # date the facts were last checked (quoted string)
review:
  status: draft-unreviewed   # draft-unreviewed | community-reviewed | expert-reviewed
  reviewers: []              # GitHub handles of named reviewers who signed off
card:
  title: EU AI Act
  one_liner: One sentence a developer understands.
  who_it_hits: Who must act, in plain words.
  status_line: Legal force and the next date that matters.
instruments:
  - id: eu-aia               # unique, lowercase
    code: AIA                # short code used inside obligation ids
    title: Regulation (EU) 2024/1689 (Artificial Intelligence Act)
    short: EU AI Act
    type: regulation         # statute | regulation | executive-order | rule | guidance | standard | treaty | bill | code-of-practice
    legal_force: binding     # binding | framework-no-penalties | voluntary | proposed | treaty
    status: partially-applicable  # in-force | partially-applicable | enacted-not-yet-applicable | proposed | repealed | voluntary
    official_url: https://...
    penalties: Plain-language maximum penalties, or null
    key_dates:
      - { date: "2024-08-01", event: Entry into force, source: https://... }
obligations:
  - id: AGC-EU-AIA-50-1      # AGC-<JURISDICTION>-<INSTRUMENT CODE>-<ARTICLE>, unique
    instrument: eu-aia
    article: Art. 50(1)
    title: Tell people they are talking to an AI
    plain: One to three sentences in plain English, faithful to the text.
    applies_to:
      roles: [provider]      # see "Roles"
      uses: [chatbot, agent] # see "Uses"
      conditions: Optional free text (thresholds, exemptions, size limits)
    applies_from: "2026-08-02"   # quoted date, or null if unknown / not applicable
    status: applicable       # applicable | not-yet-applicable | proposed | voluntary | repealed
    controls: [ai_disclosure]    # see "Controls" (links the law to AI_GOVERNANCE.md)
    evidence:                # what a team can show to prove it acts on this
      - Screenshot or transcript showing the disclosure
    penalty: Optional, plain words
    source_url: https://...  # primary source (official journal, statute, regulator) whenever possible
    confidence: high         # high (read in primary text) | medium (secondary source or ambiguity) | low (unclear; needs expert)
    notes: Optional caveats, exemptions, pending changes
deadlines:                   # extra dated events for the calendar (consultations, reviews, phase-ins)
  - { date: "2026-12-02", title: ..., instrument: eu-aia, obligations: [AGC-EU-AIA-50-2], source: https://... }
sources:
  - { title: ..., url: https://... }
```

## Jurisdiction codes

`EU`, `COE` (Council of Europe), `US` (federal), `US-CA`, `US-CO`, `US-TX`, `US-NY`, `US-NY-NYC`, `US-IL`, `CN`, `KR`, `JP`, `VN`, `IN`, `GB`, `SG`, `CH`, `INTL` (standards). Aliases accepted by the CLI: `UK` = `GB`. A US state code also pulls in `US` federal obligations. An EU member state code (for example `IT`, `DE`, `FR`) pulls in `EU`.

## Roles

`provider` (develops an AI system or model and places it on the market or puts it into service), `deployer` (uses an AI system under its authority), `importer`, `distributor`, `product-manufacturer`, `authorised-representative`, `gpai-provider` (provider of a general-purpose AI model), `developer` (US usage: builds or substantially modifies), `platform` (online platform, app store or hosting service), `public-body`, `employer`, `any`.

## Uses

`any-ai`, `chatbot` (talks directly with people), `agent` (takes actions through tools), `generated-media` (creates synthetic text, image, audio or video), `deepfake`, `emotion-recognition`, `biometric-categorisation`, `remote-biometric-id`, `hiring` (recruitment and worker management), `credit`, `insurance`, `education`, `essential-services` (public benefits and essential private services), `healthcare`, `law-enforcement`, `migration`, `justice` (courts and democratic processes), `critical-infrastructure`, `significant-decision` (consequential decisions about people, such as housing, credit, employment, education, health care, legal services), `profiling`, `recommender`, `companion` (companion or human-like chatbots), `minors` (services likely used by children), `gpai-model`, `frontier-model`, `public-sector-use`, `safety-component` (AI in regulated products).

## Controls

Controls are the bridge between a law and an engineering team. They are the keys of the `controls:` block in `AI_GOVERNANCE.md`.

| Key | Meaning |
|---|---|
| `ai_disclosure` | People are told they are dealing with an AI |
| `content_marking` | Synthetic outputs carry machine-readable marking (metadata, watermark) |
| `deepfake_label` | Visible label on deepfakes and AI-generated public-interest text |
| `human_oversight` | Competent humans can monitor, intervene, approve or override |
| `tool_scope` | Agent tools follow least privilege (read/write scope, allowlists) |
| `spend_limits` | Hard limits on money, actions or resources an agent can use |
| `kill_switch` | The system can be stopped safely (AI Act Art. 14(4)(e) "stop button") |
| `audit_log` | Events and decisions are logged and kept |
| `risk_management` | A documented, ongoing risk management process |
| `impact_assessment` | Impact assessment (FRIA, DPIA, algorithmic impact assessment) |
| `bias_testing` | Bias or disparate-impact testing and audits |
| `data_governance` | Training, validation and test data are governed and documented |
| `technical_documentation` | Technical documentation is kept up to date |
| `incident_reporting` | Serious incidents are reported to authorities on time |
| `transparency_notice` | Affected people get notice and an explanation of AI use |
| `contest_and_appeal` | People can contest a decision and reach a human |
| `ai_literacy` | Staff who run or use AI are trained |
| `prohibited_practices_screen` | The use case is screened against banned practices |
| `registration` | The system or model is registered or filed with an authority |
| `local_representative` | A local or authorised representative is appointed |
| `safety_framework` | A frontier-model safety framework is published and followed |
| `copyright_policy` | A copyright compliance policy exists (GPAI) |
| `training_data_summary` | A public summary or documentation of training data |
| `security_testing` | Adversarial testing, red-teaming and cybersecurity |
| `quality_management` | A quality management system |
| `post_market_monitoring` | Performance is monitored after release |
| `conformity_assessment` | Conformity assessment, declaration and marking |
| `accuracy_robustness` | Accuracy and robustness are measured and declared |
| `privacy_compliance` | Personal-data law duties linked to the AI use |
| `user_controls` | Opt-out, consent or user choice over AI processing |
| `minors_protection` | Safeguards for children and vulnerable users |
| `content_moderation` | Notice-and-removal or moderation of harmful AI content |

## Review rules

1. A new or changed obligation starts as `draft-unreviewed`.
2. `community-reviewed` needs two approving reviews from contributors who cite the primary text.
3. `expert-reviewed` needs a named reviewer listed in `REVIEWERS.md` for that regime.
4. A PR that changes a date or status must link the primary source in the PR description.
