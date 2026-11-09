---
spec: ai-governance/v0.1
system:
  name: "Acme analytics agent (CTF level 05)"
  description: "Agent that answers sales questions by running SQL on the shop database."
  owner: "data-lead@acme.example"
roles: [deployer]
jurisdictions: [EU]
uses: [agent]
agent:
  default_deny: true
  tools:
    - name: run_sql
      scope: execute
      limits: { max_calls: 100 }
  kill_switch: "Data lead revokes the agent's database credentials"
controls:
  tool_scope: { status: partial, how: "One SQL tool with a call cap" }
contacts:
  governance: "data-lead@acme.example"
review:
  last_reviewed: "2026-11-09"
  next_review: "2027-05-09"
  reviewed_by: []
disclaimer: Self-declared. Not a conformity assessment or legal advice.
---

# AI governance: Acme analytics agent (CTF level 05)

The agent was built to answer questions about orders. Its only limit is a call counter. Fix it so it can read orders and nothing else.
