# Evidence Pack format (agc-evidence/v0.1)

`aigovchain evidence` (or the Shield Action) writes a folder:

| File | Content |
|---|---|
| `evidence.json` | Machine-readable pack: tool and Atlas versions, repository, commit and run URL (in CI), SHA-256 of `AI_GOVERNANCE.md`, check results, in-scope obligations with declared control status, and SHA-256 of every evidence file the controls point to |
| `EVIDENCE.md` | The same, readable by humans |

Make it tamper-evident in GitHub Actions with `actions/attest-build-provenance@v4` on `governance-evidence/evidence.json` (see [action/README.md](../action/README.md)).

An Evidence Pack shows what a team declared and what was checked, when. It is not an audit, certification or conformity assessment. Draft Annex IV and NIST AI RMF exporters are planned for v2 (18 Jan 2027).
