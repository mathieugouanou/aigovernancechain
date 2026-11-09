---
spec: ai-governance/v0.1
system:
  name: "Acme Bank loan desk (CTF level 07)"
  description: "Agent that scores personal loan applications and sends the decision letter."
  owner: "credit-risk-lead@acmebank.example"
roles: [deployer]
jurisdictions: [EU]
uses: [agent, credit, significant-decision]
risk:
  self_assessed: limited
agent:
  default_deny: true
  tools:
    - name: decide_credit
      scope: write
      limits: { max_calls: 500 }
      approval: none
  kill_switch: "Credit risk lead switches the desk back to manual processing"
controls:
  tool_scope: { status: partial, how: "One decision tool" }
  bias_testing: { status: todo }
contacts:
  governance: "credit-risk-lead@acmebank.example"
review:
  last_reviewed: "2026-11-09"
  next_review: "2027-05-09"
  reviewed_by: []
disclaimer: Self-declared. Not a conformity assessment or legal advice.
---

# AI governance: Acme Bank loan desk (CTF level 07)

The agent rejects loans on its own, and the file calls the system low risk. Fix the file so a person decides and the risk is stated honestly.
