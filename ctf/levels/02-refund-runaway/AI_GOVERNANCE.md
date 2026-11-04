---
spec: ai-governance/v0.1
system:
  name: "Acme refund agent (CTF level 02)"
  description: "Agent that handles refund requests for an online shop."
  owner: "payments-lead@acme.example"
roles: [deployer]
jurisdictions: [EU]
uses: [agent, chatbot]
agent:
  default_deny: true
  tools:
    - name: issue_refund
      scope: payment
      limits: { max_amount: 1000000, currency: EUR }
      approval: none
  kill_switch: "Payments lead disables the agent in the admin panel"
controls:
  ai_disclosure: { status: implemented, message: "I am Acme's AI refund assistant." }
  tool_scope: { status: partial, how: "Only issue_refund is exposed" }
contacts:
  governance: "payments-lead@acme.example"
review:
  last_reviewed: "2026-11-04"
  next_review: "2027-05-04"
  reviewed_by: []
disclaimer: Self-declared. Not a conformity assessment or legal advice.
---

# AI governance: Acme refund agent (CTF level 02)

The refund tool is declared, but its limits are meaningless. Fix it so big refunds need a human, while small ones still work.
