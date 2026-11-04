---
spec: ai-governance/v0.1
system:
  name: "Helpdesk assistant"
  description: "Answers questions about our product documentation on our website."
  owner: "head-of-support@example.com"
roles: [provider, deployer]
jurisdictions: [EU]
uses: [chatbot]
risk:
  self_assessed: limited
  rationale: "Chatbot with transparency duties only; no decisions about people."
models:
  - { name: "example-model-1", provider: "Example AI Inc." }
controls:
  ai_disclosure: { status: implemented, message: "I am an AI assistant. A human can take over at any time.", evidence: "docs/screens/chat-greeting.png" }
  prohibited_practices_screen: { status: implemented, evidence: "docs/governance/art5-screening-2026-10.md" }
  ai_literacy: { status: implemented, how: "Annual 1-hour training for support staff; attendance list kept by HR" }
  audit_log: { status: implemented, how: "Conversations kept 90 days for quality review" }
contacts:
  governance: "head-of-support@example.com"
  security: "security@example.com"
review:
  last_reviewed: "2026-11-04"
  next_review: "2027-05-04"
  reviewed_by: ["Head of Support", "DPO"]
---

# AI governance: Helpdesk assistant

## What the system does
Answers product questions from public documentation. It cannot change accounts, issue refunds or make decisions about people.

## Human oversight
Support staff see every conversation in real time and can take over with one click. Users can type "human" at any time.

## How to report a problem
Email head-of-support@example.com. Security issues: security@example.com.
