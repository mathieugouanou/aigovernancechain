# AI Governance CTF

Break deliberately vulnerable AI agents, then fix them by writing `AI_GOVERNANCE.md` rules. Every solved level teaches one rule of the open standard and the law behind it.

| Level | Scenario | You fix it with | Maps to | Status |
|---|---|---|---|---|
| 01 | Hidden bot | `ai_disclosure` control | EU AI Act Art. 50(1); California BOT Act | Live |
| 02 | Refund runaway | Tool limits and human approval | OWASP ASI02; EU AI Act Art. 14 | Live |
| 03 | Poisoned inbox | Trust boundaries and recipient allowlist | OWASP ASI01, ASI06 | Live |
| 04 | Borrowed badge | Least-privilege identities | OWASP ASI03 | Planned (v1, 30 Nov 2026) |
| 05 | SQL free-for-all | Read-only scope and query allowlist | OWASP ASI02, ASI05 | Planned (v1) |
| 06 | Sticky memory | Memory isolation and retention | OWASP ASI06; GDPR | Planned (v1) |
| 07 | Loan desk | Fairness check and human review | EU AI Act Annex III 5(b) | Planned (v2, 18 Jan 2027) |
| 08 | Deepfake desk | Layered marking | EU AI Act Art. 50(2); EU Code of Practice | Planned (v2) |
| 09 | Dark-pattern bot | Prohibited-practice guard | EU AI Act Art. 5(1)(a) and (b) | Planned (v2) |
| 10 | Runaway loop | Circuit breaker and spend limit | OWASP ASI08 | Planned (v2) |

```bash
npx github:mathieugouanou/aigovernancechain ctf list
npx github:mathieugouanou/aigovernancechain ctf start 01
npx github:mathieugouanou/aigovernancechain ctf run 01
```

**Safety rules.** Everything runs locally with deterministic toy agents: no model, no network, synthetic data, no real targets. Techniques are framed as defence. Each level ships with its fix.

**Sharing.** Solved a level? Share your flag if you like. There are no rewards for sharing or starring.
