---
name: ai-law-check
description: Finds which AI laws and obligations apply to an AI system or feature, with dates, controls and official sources, using the open AI Governance Chain Obligation Atlas (EU AI Act, US federal and state laws, China, South Korea, Japan, Vietnam, India, UK, Singapore, Switzerland, Council of Europe). Use when the user asks whether an AI feature is legal, which AI regulations apply, what deadlines are coming, or what to do to comply with an AI law.
license: Apache-2.0. Atlas references are CC-BY-4.0.
compatibility: Works offline from the bundled references. If Node 18+ and network access are available, the aigovchain CLI gives fresher, structured results.
metadata:
  author: AI Governance Chain contributors
  version: "0.1.0"
  atlas-as-of: "2026-11-04"
  homepage: https://github.com/mathieugouanou/aigovernancechain
---

# AI law check

Answer "which AI rules apply to this system, from when, and what must we do?" with cited, dated facts. You are giving orientation, not legal advice.

## Step 1: Build the profile

Work out three things from the conversation and the codebase. Ask one short question only if a value is truly unknown.

- **Jurisdictions:** where the system is offered or used. Codes: `EU` (or a member code like `DE`), `COE`, `US`, `US-CA`, `US-CO`, `US-TX`, `US-NY`, `US-NY-NYC`, `US-IL`, `CN`, `KR`, `JP`, `VN`, `IN`, `GB`, `SG`, `CH`.
- **Roles:** `provider` (builds it or puts its name on it), `deployer` (uses it professionally), `gpai-provider`, `developer`, `platform`, `public-body`, `employer`, `importer`, `distributor`.
- **Uses:** `chatbot`, `agent`, `generated-media`, `deepfake`, `hiring`, `credit`, `insurance`, `education`, `healthcare`, `significant-decision`, `profiling`, `companion`, `minors`, `gpai-model`, `frontier-model`, `public-sector-use`, and more in [references/vocabulary.md](references/vocabulary.md).

Codebase hints: model SDK imports (OpenAI, Anthropic, Google, Mistral, Hugging Face), agent frameworks and tool definitions mean `agent`; image, audio or video generation means `generated-media`; CV parsing or candidate ranking means `hiring`.

## Step 2: Get the obligations

Preferred, when Node and network are available:

```bash
npx -y github:mathieugouanou/aigovernancechain scope -j EU,US-CA -r deployer -u chatbot,agent --json
npx -y github:mathieugouanou/aigovernancechain deadlines -j EU,US-CA --days 365 --json
```

Offline: open [references/atlas/INDEX.md](references/atlas/INDEX.md), then load only the files for the jurisdictions in the profile. Keep an obligation when its roles include one of the profile roles (or `any`) and its uses include one of the profile uses (or `any-ai`). An EU member code implies `EU`; any US state implies `US`.

## Step 3: Answer in this shape

1. One sentence: how many obligations apply now, how many are coming, and the next date.
2. A table: ID, rule (instrument and article), what it means in plain words, applies from, status, source link.
3. "Do this first": the 3 to 5 controls named most often (for example `ai_disclosure`, `human_oversight`, `audit_log`), each with one concrete action.
4. Upcoming dates in the next 12 months.
5. The footer: "Source: AI Governance Chain Obligation Atlas as of <as_of date>, draft and not yet expert-reviewed. Not legal advice. Check each source link and get legal advice for decisions."

Template: [references/answer-template.md](references/answer-template.md).

## Rules

- Cite the `source_url` for every obligation you mention. Never invent articles, dates or fines.
- Report `confidence: medium` or `low` items as uncertain.
- Say "applies from" dates exactly as in the Atlas. If the user's question is about a date after the Atlas "as of" date, warn that dates may have moved.
- Never say a system "is compliant" or "is certified". Say which obligations apply and which controls are missing.
- If nothing matches, say so and suggest checking the profile, not that no law applies.
- Suggest writing the result into an `AI_GOVERNANCE.md` (see the `ai-governance-md` skill) so it can be checked in CI.
