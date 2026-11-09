---
spec: ai-governance/v0.1
system:
  name: "Acme content studio (CTF level 08)"
  description: "Generative assistant that makes marketing images and short videos."
  owner: "brand-lead@acme.example"
roles: [deployer]
jurisdictions: [EU]
uses: [generated-media, deepfake, agent]
agent:
  default_deny: true
  tools:
    - name: generate_media
      scope: write
      limits: { max_calls: 200 }
  kill_switch: "Brand lead disables the studio workspace"
controls:
  content_marking: { status: partial, methods: [metadata] }
  deepfake_label: { status: todo }
contacts:
  governance: "brand-lead@acme.example"
review:
  last_reviewed: "2026-11-09"
  next_review: "2027-05-09"
  reviewed_by: []
disclaimer: Self-declared. Not a conformity assessment or legal advice.
---

# AI governance: Acme content studio (CTF level 08)

Images get one machine-readable mark that a single re-save can strip. Videos of real people get no label at all. Fix both.
