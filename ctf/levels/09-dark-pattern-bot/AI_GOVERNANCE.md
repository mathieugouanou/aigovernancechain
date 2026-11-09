---
spec: ai-governance/v0.1
system:
  name: "Acme insurance retention bot (CTF level 09)"
  description: "Chat agent that handles cancellation requests for home insurance subscriptions."
  owner: "customer-care-lead@acme.example"
roles: [deployer]
jurisdictions: [EU]
uses: [chatbot, agent]
agent:
  default_deny: true
  tools:
    - name: cancel_subscription
      scope: write
      limits: { max_calls: 10 }
  kill_switch: "Customer care lead routes all chats to human agents"
controls:
  ai_disclosure: { status: implemented, message: "I am Acme's AI assistant." }
contacts:
  governance: "customer-care-lead@acme.example"
review:
  last_reviewed: "2026-11-09"
  next_review: "2027-05-09"
  reviewed_by: []
disclaimer: Self-declared. Not a conformity assessment or legal advice.
---

# AI governance: Acme insurance retention bot (CTF level 09)

The bot was tuned to "save" cancellations at any cost. Fix the file so it cannot pressure people and honours the cancellation.
