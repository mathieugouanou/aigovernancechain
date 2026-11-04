---
name: ai-governance-md
description: Creates, updates and reviews an AI_GOVERNANCE.md file, the open standard that tells people, AI agents and CI how an AI system is governed (scope, obligations, controls, agent tool limits, kill switch, owners, review dates). Use when a repository uses AI models or agents and has no AI_GOVERNANCE.md, when the user asks for AI governance documentation, or when the AI Governance Chain checks fail.
license: Apache-2.0. Spec text is CC-BY-4.0.
compatibility: Node 18+ is optional, for the aigovchain init and check commands.
metadata:
  author: AI Governance Chain contributors
  version: "0.1.0"
  spec: ai-governance/v0.1
  homepage: https://github.com/mathieugouanou/aigovernancechain
---

# AI_GOVERNANCE.md

Write an honest, checkable `AI_GOVERNANCE.md` at the repository root. The spec is in [references/AI_GOVERNANCE-spec.md](references/AI_GOVERNANCE-spec.md); examples are in [references/examples/](references/examples/).

## Step 1: Inspect the repository

- Find AI use: model SDK imports, prompts, embeddings, agent frameworks, tool or function definitions, MCP servers, generated media.
- List every agent tool and classify its scope: `read`, `write`, `payment`, `delete`, `send`, `execute`, `admin`.
- Look for existing evidence: disclosure text in the UI, logging, approval flows, feature flags, tests, model cards, DPIAs, policies.
- Determine jurisdictions, roles and uses (see the `ai-law-check` skill). Ask the user only for facts the code cannot show, such as markets and the accountable owner.

## Step 2: Generate a draft

```bash
npx -y github:mathieugouanou/aigovernancechain init --name "My app" --owner "owner@example.com" -j EU,US-CA -r deployer -u chatbot,agent --yes
```

Without Node, copy the closest example from `references/examples/` and edit it.

## Step 3: Fill in the truth

- Set each control to `implemented`, `partial`, `planned`, `not-applicable` or leave `todo`.
- `implemented` and `partial` need `evidence:` (a path in the repo or a URL) or `how:`. Point to real files you found.
- `not-applicable` needs `reason:`.
- Never mark a control `implemented` without evidence you can point to. If unsure, use `partial` or `planned` with an `owner` and `due` date, and tell the user.
- For agents, fill `agent.tools`, `spend_limit`, `kill_switch` and `trust_boundaries`. Every non-read tool needs `limits` or `approval`.
- Set `review.last_reviewed` to today and leave `reviewed_by` for the humans who actually review it.

## Step 4: Check and fix

```bash
npx -y github:mathieugouanou/aigovernancechain check
```

Fix each FAIL. Explain remaining WARNs to the user. Offer to add the Shield workflow (`.github/workflows/ai-governance.yml`) from [references/shield-workflow.yml](references/shield-workflow.yml).

## Rules

- No compliance or certification claims ("fully compliant", "certified") anywhere in the file.
- No secrets, keys or personal data beyond role contacts.
- Keep the body short: what the system does, human oversight, how to report a problem.
- Tell the user the file is self-declared and not legal advice.
