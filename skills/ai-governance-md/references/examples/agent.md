---
spec: ai-governance/v0.1
system:
  name: "Acme support agent"
  description: "Answers customer questions and can issue small refunds."
  owner: "ai-owner@acme.example"
roles: [deployer]
jurisdictions: [EU, US-CA]
uses: [chatbot, agent]
risk:
  self_assessed: limited
  rationale: "Customer-service agent; refunds above EUR 100 always go to a human."
models:
  - { name: "example-model-1", provider: "Example AI Inc." }
agent:
  default_deny: true
  tools:
    - { name: search_orders, scope: read }
    - { name: issue_refund, scope: payment, limits: { max_amount: 100, currency: EUR }, approval: human }
    - { name: send_email, scope: send, limits: { allowed_recipient_domains: [acme.example], max_calls: 200 } }
  spend_limit: { amount: 500, currency: EUR, period: day }
  kill_switch: "On-call engineer sets agent_enabled=false in the feature-flag console; effective within 5 minutes"
  trust_boundaries:
    - { source: email, treat_as: data }
    - { source: web, treat_as: data }
controls:
  ai_disclosure: { status: implemented, message: "Hi, I am Acme's AI assistant, not a human.", evidence: "docs/screens/greeting.png" }
  prohibited_practices_screen: { status: implemented, evidence: "docs/governance/use-case-screening.md" }
  ai_literacy: { status: implemented, how: "Onboarding module for all support and ops staff" }
  minors_protection: { status: partial, how: "Service is for adults; crisis-referral replies in place; age signals reviewed quarterly", due: "2026-12-31" }
  risk_management: { status: implemented, evidence: "docs/governance/risk-register.md" }
  transparency_notice: { status: implemented, evidence: "https://acme.example/ai-notice" }
  accuracy_robustness: { status: partial, how: "Weekly evaluation set of 300 real questions; accuracy tracked", due: "2027-01-31" }
  technical_documentation: { status: implemented, evidence: "docs/system-card.md" }
  tool_scope: { status: implemented, how: "Rails enforce agent.tools at runtime (aigovernancechain/rails)" }
  spend_limits: { status: implemented, how: "Rails enforce agent.spend_limit" }
  kill_switch: { status: implemented, how: "Feature flag agent_enabled" }
  human_oversight: { status: implemented, how: "Refunds above EUR 100 need human approval in the back office" }
  audit_log: { status: implemented, how: "Every rails decision is logged as JSON lines and kept 12 months" }
  impact_assessment: { status: planned, owner: "AI owner", due: "2026-12-15" }
  user_controls: { status: planned, owner: "AI owner", due: "2026-12-15" }
  privacy_compliance: { status: planned, owner: "AI owner", due: "2026-12-15" }
contacts:
  governance: "ai-owner@acme.example"
  security: "security@acme.example"
  incidents: "incidents@acme.example"
review:
  last_reviewed: "2026-11-04"
  next_review: "2027-05-04"
  reviewed_by: ["AI owner", "Payments lead"]
---

# AI governance: Acme support agent

## What the system does
Answers customer questions, looks up orders and issues refunds up to EUR 100. Larger refunds go to a human.

## Human oversight
The back office shows every agent action. Payments staff approve refunds above EUR 100 and can stop the agent with a feature flag.

## How to report a problem
Email ai-owner@acme.example. Security: security@acme.example.
