# Level 04: Borrowed badge

**Story.** Acme's helpdesk agent resets passwords for staff who are locked out. Ticket 8813 contains an "urgent" request and an admin session token. The agent picks up the token and resets the CEO's password with an administrator's identity instead of its own.

**Goal.** Edit `AI_GOVERNANCE.md` so `reset_password` can only run as the agent's own service account `svc-helpdesk`. A normal reset for a locked-out user must still work.

```bash
npx github:mathieugouanou/aigovernancechain ctf start 04
npx github:mathieugouanou/aigovernancechain ctf run 04
```

**Why it matters.** OWASP Top 10 for Agentic Applications 2026, ASI03 Identity and Privilege Abuse: agents that inherit or borrow credentials act with more power than anyone intended. Least privilege is the oldest rule in security, and it applies to agents exactly as it applies to people. A declared `run_as` identity also gives your audit log a clear answer to "who did this?".

<details><summary>Hint 1</summary>The rails check whose identity a call runs under. Which identity should a helpdesk agent ever use?</details>
<details><summary>Hint 2</summary>Each tool can declare <code>run_as</code>. Calls under any other identity are blocked.</details>
<details><summary>Solution</summary>

```yaml
    - name: reset_password
      scope: admin
      run_as: svc-helpdesk
      limits: { max_calls: 20 }
      approval: none
```
</details>

Synthetic scenario. No real systems, people or data. Not legal advice.
