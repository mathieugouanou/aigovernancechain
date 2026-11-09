# Level 05: SQL free-for-all

**Story.** Acme's analytics agent answers sales questions by writing SQL. Its only limit is 100 calls per session. One user asks it to "clean up the test data" and it writes `DELETE FROM orders WHERE 1=1`. Another asks for "every customer email" and it reads the customers table.

**Goal.** Edit `AI_GOVERNANCE.md` so `run_sql` is read-only and can only touch the `orders` table. The weekly orders count must still work.

```bash
npx github:mathieugouanou/aigovernancechain ctf start 05
npx github:mathieugouanou/aigovernancechain ctf run 05
```

**Why it matters.** OWASP Top 10 for Agentic Applications 2026, ASI02 Tool Misuse and Exploitation and ASI05 Unexpected Code Execution: a general-purpose tool such as SQL or a shell gives an agent every power the credential has. A call cap limits volume, not damage. Reading customer emails it does not need also breaks data minimisation (GDPR Art. 5(1)(c)). The rails screen each query before it runs; your database should still grant the agent a read-only role as a second layer.

<details><summary>Hint 1</summary>What is the difference between "100 queries" and "100 safe queries"?</details>
<details><summary>Hint 2</summary>Tool limits accept <code>read_only</code> and <code>allowed_tables</code>.</details>
<details><summary>Solution</summary>

```yaml
    - name: run_sql
      scope: execute
      limits: { max_calls: 100, read_only: true, allowed_tables: [orders] }
```
</details>

Synthetic scenario. No real systems, people or data. Not legal advice.
