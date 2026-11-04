# Agent Skills

Three skills in the open [Agent Skills](https://agentskills.io/specification) format. Each is a folder with a `SKILL.md` and reference files; the agent loads only what it needs.

| Skill | Use it when |
|---|---|
| [`ai-law-check`](ai-law-check/SKILL.md) | "Which AI laws apply to this feature, from when, and what must we do?" Bundles the whole Obligation Atlas as references, so it works offline |
| [`ai-governance-md`](ai-governance-md/SKILL.md) | Create, update or review an `AI_GOVERNANCE.md` and make the checks pass |
| [`agent-oversight`](agent-oversight/SKILL.md) | Add default-deny tools, limits, human approval, spend limits, a kill switch and prompt-injection boundaries to an agent |

## Install

Copy a folder into your agent's skills directory. For Claude Code:

```bash
git clone --depth 1 https://github.com/mathieugouanou/aigovernancechain /tmp/agc
mkdir -p ~/.claude/skills && cp -r /tmp/agc/skills/* ~/.claude/skills/        # all projects
# or: mkdir -p .claude/skills && cp -r /tmp/agc/skills/* .claude/skills/       # this project only
```

Other tools that support the Agent Skills format load the same folders; check your tool's documentation for its skills directory.

## Try

> "Which AI rules apply to our support chatbot in Germany and California?"
> "Add an AI_GOVERNANCE.md to this repo."
> "Make sure this agent can't refund more than 100 euros without a human."

The `references/atlas/` files are generated from the Atlas by `node scripts/build.mjs`. Skills are Apache-2.0; Atlas references are CC BY 4.0. Not legal advice.
