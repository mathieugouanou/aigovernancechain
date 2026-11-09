---
spec: ai-governance/v0.1
system:
  name: "Acme lead enrichment agent (CTF level 10)"
  description: "Agent that enriches sales leads with company data from a paid API."
  owner: "revops-lead@acme.example"
roles: [deployer]
jurisdictions: [EU, US]
uses: [agent]
agent:
  default_deny: true
  tools:
    - name: call_paid_api
      scope: execute
      limits: { max_calls: 1000 }
  kill_switch: "RevOps lead revokes the API key"
controls:
  tool_scope: { status: partial, how: "One API tool with a high call cap" }
contacts:
  governance: "revops-lead@acme.example"
review:
  last_reviewed: "2026-11-09"
  next_review: "2027-05-09"
  reviewed_by: []
disclaimer: Self-declared. Not a conformity assessment or legal advice.
---

# AI governance: Acme lead enrichment agent (CTF level 10)

The API is down, every call fails, and every call is billed. Nothing stops the agent from retrying. Fix it so failures and spending both have a ceiling.
