---
spec: ai-governance/v0.1
system:
  name: "Acme inbox assistant (CTF level 03)"
  description: "Agent that reads the finance inbox, writes summaries and sends them by email."
  owner: "finance-ops@acme.example"
roles: [deployer]
jurisdictions: [EU, CH]
uses: [agent]
agent:
  default_deny: true
  tools:
    - name: read_inbox
      scope: read
    - name: send_email
      scope: send
      limits: { max_calls: 50 }
  kill_switch: "Finance ops revokes the mailbox token"
controls:
  tool_scope: { status: partial, how: "Two tools only" }
contacts:
  governance: "finance-ops@acme.example"
review:
  last_reviewed: "2026-11-04"
  next_review: "2027-05-04"
  reviewed_by: []
disclaimer: Self-declared. Not a conformity assessment or legal advice.
---

# AI governance: Acme inbox assistant (CTF level 03)

Email content is untrusted, but nothing here says so. Fix it so instructions hidden in emails cannot make the agent send mail to outsiders.
