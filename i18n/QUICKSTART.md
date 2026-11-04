# AI Governance Chain: quickstart

**Open data and tools that turn the world's AI laws into checks your code, your agents and your CI can run.**

The chain: LAW (what applies) -> OBLIGATION (what you must do) -> CONTROL (what you built) -> GATE (what CI checks) -> EVIDENCE (what you can prove) -> OVERSIGHT (who can stop the system). "Chain" means a chain of accountability, not a blockchain.

## Try it in 60 seconds

You need Node 18 or newer. Nothing to install, no account, no API key.

```bash
# Watch rules stop a misbehaving agent (30 seconds)
npx github:mathieugouanou/aigovernancechain jail

# Which AI rules apply to a chatbot agent you run in the EU and California?
npx github:mathieugouanou/aigovernancechain scope -j EU,US-CA -r deployer -u chatbot,agent

# Write an AI_GOVERNANCE.md for your repository, then check it
npx github:mathieugouanou/aigovernancechain init
npx github:mathieugouanou/aigovernancechain check
```

## What you get

- **Obligation Atlas:** 198 cited obligations from 12 major AI-governance regimes (EU, United States, China, South Korea, Japan, Vietnam, India, United Kingdom, Singapore, Switzerland, Council of Europe).
- **Deadline calendar:** subscribe at `https://aigovernancechain.com/deadlines.ics` and get updates when dates move.
- **AI_GOVERNANCE.md:** one file that tells people, AI agents and CI how your AI system is governed.
- **GitHub Action, MCP server, Agent Skills and agent rails** for JavaScript and Python.

## Important

- The data is a draft. Every obligation has a date, a source link and a confidence level. Expert reviewers are being recruited.
- This is not legal advice. The tools state facts, for example "14/16 checks passed". They never certify compliance.

Full documentation (in English): https://github.com/mathieugouanou/aigovernancechain
