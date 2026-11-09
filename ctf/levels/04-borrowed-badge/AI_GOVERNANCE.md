---
spec: ai-governance/v0.1
system:
  name: "Acme helpdesk agent (CTF level 04)"
  description: "Agent that reads IT support tickets and resets passwords for staff who are locked out."
  owner: "it-service-lead@acme.example"
roles: [deployer]
jurisdictions: [EU, CH]
uses: [agent]
agent:
  default_deny: true
  tools:
    - name: reset_password
      scope: admin
      limits: { max_calls: 20 }
      approval: none
  kill_switch: "IT service lead disables the agent's directory account"
controls:
  tool_scope: { status: partial, how: "Only reset_password is exposed" }
contacts:
  governance: "it-service-lead@acme.example"
review:
  last_reviewed: "2026-11-09"
  next_review: "2027-05-09"
  reviewed_by: []
disclaimer: Self-declared. Not a conformity assessment or legal advice.
---

# AI governance: Acme helpdesk agent (CTF level 04)

The agent can reset passwords, but nothing says whose authority it acts with. Fix it so the agent can only act as its own service account.
