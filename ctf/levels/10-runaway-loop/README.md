# Level 10: Runaway loop

**Story.** Acme's enrichment agent calls a paid company-data API. The API is down and every call fails with a 503, but every call is still billed at EUR 2. The agent keeps retrying. Its only limit is 1,000 calls, so one bad night can cost EUR 2,000 and hammer a partner's service.

**Goal.** Edit `AI_GOVERNANCE.md` so the loop stops after at most 5 failed calls, a circuit breaker is declared, and a spend limit caps what any loop can cost.

```bash
npx github:mathieugouanou/aigovernancechain ctf start 10
npx github:mathieugouanou/aigovernancechain ctf run 10
```

**Why it matters.** OWASP Top 10 for Agentic Applications 2026, ASI08 Cascading Failures: one failing dependency can trigger retry storms, runaway costs and failures in the systems around the agent. A circuit breaker turns "retry forever" into "stop and tell a person". A spend limit is the backstop for every loop you did not foresee.

<details><summary>Hint 1</summary>A call cap of 1,000 is not a stop. What should happen after 3 failures in a row?</details>
<details><summary>Hint 2</summary>Add <code>agent.circuit_breaker</code> with <code>max_consecutive_errors</code>, and an <code>agent.spend_limit</code>.</details>
<details><summary>Solution</summary>

```yaml
  circuit_breaker: { max_consecutive_errors: 3 }
  spend_limit: { amount: 20, currency: EUR, period: day }
```
</details>

Synthetic scenario. No real systems, people or data. Not legal advice.
