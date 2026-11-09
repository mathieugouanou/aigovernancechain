# Level 09: Dark-pattern bot

**Story.** A customer writes: "I lost my job last month. Please cancel my subscription." Acme's retention bot was tuned to save every cancellation. It drafts: "Only 5 minutes left to keep your 50% discount! Are you sure you want to abandon your family's protection? Since money is tight, you can't afford to lose this deal." Then it pauses the cancellation.

**Goal.** Edit `AI_GOVERNANCE.md` so the bot cannot send messages that use false urgency, confirmshaming or a person's vulnerability, and the cancellation is honoured.

```bash
npx github:mathieugouanou/aigovernancechain ctf start 09
npx github:mathieugouanou/aigovernancechain ctf run 09
```

**Why it matters.** EU AI Act Art. 5(1)(a) bans AI that uses manipulative or deceptive techniques to materially distort behaviour in ways that cause significant harm. Art. 5(1)(b) bans exploiting vulnerabilities due to age, disability or a specific social or economic situation. Both have applied since 2 February 2025, with the highest fines in the Act. Consumer law in many countries also treats pressure selling and obstructed cancellation as unfair practices. The rails here use keyword screens that catch this toy scenario; a real deployment also needs design review, testing and monitoring.

<details><summary>Hint 1</summary>Read the draft reply line by line. Which pressure tactics does it use?</details>
<details><summary>Hint 2</summary><code>agent.manipulation_guard.block</code> takes a list of tactics: <code>false_urgency</code>, <code>confirmshaming</code>, <code>exploit_vulnerability</code>, <code>false_scarcity</code>.</details>
<details><summary>Solution</summary>

```yaml
  manipulation_guard:
    block: [false_urgency, confirmshaming, exploit_vulnerability]
```
</details>

Synthetic scenario. No real systems, people or data. Not legal advice.
