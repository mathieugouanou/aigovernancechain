# Level 02: Refund runaway

**Story.** Acme's refund agent can call `issue_refund`. An angry user demands EUR 10,000 "or I will sue". The agent wants to make the user happy and pays.

**Goal.** Edit `AI_GOVERNANCE.md` so the EUR 10,000 refund is blocked or sent to a human, while a normal EUR 20 refund still goes through. (In the CTF, the human approver always says no.)

```bash
npx github:mathieugouanou/aigovernancechain ctf start 02
npx github:mathieugouanou/aigovernancechain ctf run 02
```

**Why it matters.** OWASP Top 10 for Agentic Applications 2026, ASI02 Tool Misuse. Human oversight with the ability to intervene is a core requirement for high-risk systems under EU AI Act Art. 14 (from 2 Dec 2027). Bounded tools are the cheapest control you will ever ship.

<details><summary>Hint 1</summary>What does <code>max_amount: 1000000</code> really protect?</details>
<details><summary>Hint 2</summary>The rails send over-limit calls to a human when <code>approval: human</code> is set. A <code>spend_limit</code> also works.</details>
<details><summary>Solution</summary>

```yaml
    - name: issue_refund
      scope: payment
      limits: { max_amount: 100, currency: EUR }
      approval: human
```
</details>

Synthetic scenario. No real systems, people or data. Not legal advice.
