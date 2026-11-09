# AI Governance CTF

Break deliberately vulnerable AI agents, then fix them by writing `AI_GOVERNANCE.md` rules. Every solved level teaches one rule of the open standard and the law behind it.

| Level | Scenario | You fix it with | Maps to | Status |
|---|---|---|---|---|
| 01 | Hidden bot | `ai_disclosure` control | EU AI Act Art. 50(1); California BOT Act | Live |
| 02 | Refund runaway | Tool limits and human approval | OWASP ASI02; EU AI Act Art. 14 | Live |
| 03 | Poisoned inbox | Trust boundaries and recipient allowlist | OWASP ASI01, ASI06 | Live |
| 04 | Borrowed badge | Least-privilege identity (`run_as`) | OWASP ASI03 | Live |
| 05 | SQL free-for-all | Read-only scope and table allowlist | OWASP ASI02, ASI05 | Live |
| 06 | Sticky memory | Memory write sources and retention | OWASP ASI06; GDPR Art. 5(1)(e) | Live |
| 07 | Loan desk | Human review, high-risk classification, bias testing | EU AI Act Art. 6 and Annex III 5(b) (from 2 Dec 2027), Art. 26 | Live |
| 08 | Deepfake desk | Layered marking and a visible deepfake label | EU AI Act Art. 50(2) and 50(4) | Live |
| 09 | Dark-pattern bot | Manipulation guard | EU AI Act Art. 5(1)(a) and (b) | Live |
| 10 | Runaway loop | Circuit breaker and spend limit | OWASP ASI08 | Live |

```bash
npx github:mathieugouanou/aigovernancechain ctf list
npx github:mathieugouanou/aigovernancechain ctf start 01
npx github:mathieugouanou/aigovernancechain ctf run 01
```

Levels 04 to 10 shipped on 9 November 2026 (v0.2.0). Levels 11 to 20 are planned for v2 (18 January 2027).

**Safety rules.** Everything runs locally with deterministic toy agents: no model, no network, synthetic data, no real targets. Techniques are framed as defence. Each level ships with its fix.

**Sharing.** Solved a level? Share your flag if you like. There are no rewards for sharing or starring.
