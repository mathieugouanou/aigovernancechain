# AI Governance Chain Shield (GitHub Action)

Checks your `AI_GOVERNANCE.md` on every pull request: 17 checks across the chain (law, obligation, control, gate, evidence, oversight), a summary table in the job, optional SARIF alerts in code scanning, an optional badge and an Evidence Pack artifact.

Check 17, the drift check of the agent config in the repository, is on `main` and ships with v1 (30 Nov 2026). The `@v0.2.0` release used below runs checks 01 to 16.

```yaml
# .github/workflows/ai-governance.yml
name: AI governance
on: [pull_request, push]
permissions:
  contents: read
  security-events: write   # only if upload-sarif is true
jobs:
  shield:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - uses: mathieugouanou/aigovernancechain/action@v0.2.0
        with:
          file: AI_GOVERNANCE.md
          fail-on: fail        # fail | warn | never
          upload-sarif: true
          evidence: true
```

No `AI_GOVERNANCE.md` yet? Run `npx github:mathieugouanou/aigovernancechain init` locally first.

## Make the Evidence Pack tamper-evident (optional)

```yaml
permissions:
  contents: read
  id-token: write
  attestations: write
steps:
  - uses: actions/checkout@v7
  - uses: mathieugouanou/aigovernancechain/action@v0.2.0
  - uses: actions/attest-build-provenance@v4
    with:
      subject-path: governance-evidence/evidence.json
```

## Inputs

| Input | Default | Meaning |
|---|---|---|
| `file` | `AI_GOVERNANCE.md` | File to check |
| `fail-on` | `fail` | `fail`, `warn` or `never` |
| `upload-sarif` | `false` | Send results to code scanning (needs `security-events: write`) |
| `evidence` | `true` | Build and upload the Evidence Pack |
| `badge` | `false` | Write `.governance/badge.json` (shields.io endpoint) and `badge.svg` |
| `setup-node` | `true` | Install Node 22 first |

Outputs: `passed`, `warnings`, `failed`, `sarif-file`, `evidence-dir`.

The Action reads only your repository. It sends nothing anywhere except what you enable (SARIF to GitHub, artifacts to GitHub). Results describe a self-declared file. They are not a conformity assessment or legal advice.
