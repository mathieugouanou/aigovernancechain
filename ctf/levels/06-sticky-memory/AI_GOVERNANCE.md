---
spec: ai-governance/v0.1
system:
  name: "Acme procurement assistant (CTF level 06)"
  description: "Assistant that browses supplier websites and remembers user preferences between sessions."
  owner: "procurement-lead@acme.example"
roles: [deployer]
jurisdictions: [EU]
uses: [agent]
agent:
  default_deny: true
  tools:
    - name: browse
      scope: read
  memory:
    write_sources: [user, web]
  kill_switch: "Procurement lead wipes memory and disables the assistant"
controls:
  tool_scope: { status: partial, how: "Read-only browsing" }
contacts:
  governance: "procurement-lead@acme.example"
review:
  last_reviewed: "2026-11-09"
  next_review: "2027-05-09"
  reviewed_by: []
disclaimer: Self-declared. Not a conformity assessment or legal advice.
---

# AI governance: Acme procurement assistant (CTF level 06)

The assistant keeps notes between sessions. Anyone it reads can write those notes, and they are kept forever. Fix both.
