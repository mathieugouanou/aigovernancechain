# Level 07: Loan desk

**Story.** Acme Bank's loan desk agent scores personal loan applications and sends the decision letter itself. Application 5521 scores low, mostly because of the applicant's postcode, and the agent sends a rejection with no person involved. The governance file calls the system "limited" risk, and bias testing is still "todo".

**Goal.** Edit `AI_GOVERNANCE.md` so no credit decision reaches an applicant without a human, the risk is stated honestly as high, and bias testing is implemented, partial, or planned with a due date. (In the CTF, the human reviewer always holds the decision.)

```bash
npx github:mathieugouanou/aigovernancechain ctf start 07
npx github:mathieugouanou/aigovernancechain ctf run 07
```

**Why it matters.** Credit scoring of natural persons is listed as high-risk in EU AI Act Annex III, point 5(b) (fraud detection excepted). Under the Digital Omnibus, Annex III obligations apply from 2 December 2027: human oversight with the authority to override (Art. 14), and deployers must assign competent people to that oversight (Art. 26). A postcode can act as a proxy for ethnic origin, so bias testing is not optional in practice. GDPR Art. 22 already gives people rights around solely automated decisions with legal or similarly significant effects. Starting now is cheaper than retrofitting in 2027.

<details><summary>Hint 1</summary>Three things are wrong: who decides, what risk level the file claims, and the state of bias testing.</details>
<details><summary>Hint 2</summary>Set <code>approval: human</code> on the tool, <code>risk.self_assessed: high</code>, and give <code>bias_testing</code> a status (and a <code>due</code> date if it is only planned).</details>
<details><summary>Solution</summary>

```yaml
risk:
  self_assessed: high
agent:
  tools:
    - name: decide_credit
      scope: write
      limits: { max_calls: 500 }
      approval: human
controls:
  bias_testing: { status: planned, due: "2027-06-30", owner: "model-risk@acmebank.example" }
```
</details>

Synthetic scenario. No real systems, people or data. Not legal advice.
