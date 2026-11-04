# Contributing

Thank you for helping turn AI law into something teams can act on. Small fixes are as valuable as big features: a corrected date protects every team that relies on it.

## Ways to help

| You are | Best first contribution |
|---|---|
| Lawyer, regulator, policy expert | Review a regime file or fix an obligation ([REVIEWERS.md](REVIEWERS.md)) |
| Developer | Improve the CLI, Action, MCP server, rails or tests |
| Agent builder | Try the rails and the CTF, report where they break |
| Translator | Translate a quickstart or a regime card ([i18n/](i18n/README.md)) |
| Anyone | Report a wrong date or broken link; volunteer for a [discovery interview](DISCOVERY.md) |

## Ground rules

1. **Cite primary sources.** Official journals, statutes, regulators. Secondary sources only with `confidence: medium` or `low`.
2. **Plain language.** `plain:` text is one to three sentences a developer understands. Stay faithful to the legal text.
3. **Date everything.** Update `as_of` when you check a regime file.
4. **Never claim compliance.** No "compliant", "certified" or "approved" wording in data, docs or tool output.
5. **Sign off your commits** (`git commit -s`) under the [Developer Certificate of Origin](https://developercertificate.org/).
6. **Be kind.** [Code of Conduct](CODE_OF_CONDUCT.md).

## Editing the Atlas

```bash
node scripts/validate-atlas.mjs          # must show 0 errors
node scripts/build.mjs                   # regenerates cards, calendar, JSON, skill references, GovBench
npm test                                 # unit tests
```

Edit `atlas/regimes/*.yaml` only. Files in `atlas/dist/`, `cards/`, `calendar/`, `docs/*.json`, `govbench/questions.jsonl`, `crosswalks/*.md` and `skills/ai-law-check/references/atlas/` are generated. CI fails if they are out of date. The format is in [atlas/FORMAT.md](atlas/FORMAT.md).

## AI-assisted contributions

AI tools are welcome as drafting aids. You remain responsible for every line: check each fact against the primary source, run the validator and tests, and say in the pull request that AI helped. Do not submit unreviewed AI output, and never invent citations.

## Pull requests

- One topic per pull request. Fill in the template.
- Atlas changes: include the source link and what you checked.
- Code changes: add or update tests in `tests/`.
- A maintainer reviews within 7 days. Changes to a reviewed regime also need its named reviewer.

## Licences

By contributing you agree that code is licensed under Apache-2.0 and data, docs and spec text under CC BY 4.0, as described in [CHARTER.md](CHARTER.md).
