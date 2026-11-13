# Ask your team: five questions for leaders

**Not legal advice. Governance guidance for leaders who do not write code. As of 13 Nov 2026.**

You do not need to read code to know whether your organisation can control its AI agents. Ask these five questions. Each good answer points to a file your team keeps next to the system, or a command anyone can run in a minute. If the answer is a slide, ask for the file.

## 1. Can we stop our agents?

**A good answer:** a named way to switch each agent off, how fast it takes effect, and when someone last tried it.

**What your team uses:** the `agent.kill_switch` line in each system's [`AI_GOVERNANCE.md`](../spec/AI_GOVERNANCE-spec.md). Check `AGC-CHK-12` fails when an agent declares none. The check confirms that a stop is written down; only a timed drill shows that it works. To watch rules stop a misbehaving agent in 30 seconds:

```bash
npx github:mathieugouanou/aigovernancechain jail
```

## 2. Who owns the stop?

**A good answer:** one accountable person or role per system, and a named human approval for any tool that writes, pays, deletes or sends.

**What your team uses:** `system.owner`, a required field (check `AGC-CHK-04`), and `approval: human` on risky tools in `agent.tools` (check `AGC-CHK-11` fails when a risky tool has no limit or approval). Run all checks on a file:

```bash
npx github:mathieugouanou/aigovernancechain check
```

## 3. Which rules hit us, and by when?

**A good answer:** a dated list of obligations for each market you serve, each with its primary source.

**What your team uses:** the `scope` and `deadlines` commands on the open [Obligation Atlas](../atlas/README.md). Replace the codes with your own markets, role and uses ([vocabulary](../atlas/FORMAT.md)):

```bash
npx github:mathieugouanou/aigovernancechain scope -j EU,US-CA -r deployer -u chatbot,agent
npx github:mathieugouanou/aigovernancechain deadlines --days 180
```

Subscribe once to the [deadline calendar](../calendar/DEADLINES.md) so date changes reach you. Check `AGC-CHK-14` warns when an obligation starts within 180 days and its controls are missing.

## 4. What do we tell the board?

**A good answer:** a dated record of what the team declared and what was checked, rather than a claim that everything is in order.

**What your team uses:** the [Evidence Pack](../evidence-pack/README.md). It writes `EVIDENCE.md` for people and `evidence.json` with the SHA-256 hash of every file it relies on:

```bash
npx github:mathieugouanou/aigovernancechain evidence
```

An Evidence Pack shows what was declared and checked, and when. It is not an audit.

## 5. What do we ask vendors?

**A good answer:** each supplier names the models and data inside its product, and how you can pause or override it.

**What your team uses:** ask each supplier for an AI bill of materials in CycloneDX 1.6 or SPDX 3.0.1, and for its own `AI_GOVERNANCE.md`. Your team produces the same for your own systems:

```bash
npx github:mathieugouanou/aigovernancechain aibom --format cyclonedx
```

Public bodies can start from the [model procurement clauses](../editions/public-sector/procurement-clauses.md).

## Where to start

Start with question 1. If nobody can answer it within a day, that is your first finding.

These questions help you find and track obligations. They do not tell you whether you comply. See [DISCLAIMER.md](../DISCLAIMER.md).
