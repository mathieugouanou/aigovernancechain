# Obligation Atlas

Open, cited, machine-readable AI-governance obligations. One YAML file per regime in [`regimes/`](regimes/), compiled to [`dist/atlas.json`](dist/atlas.json).

- Format and vocabularies: [FORMAT.md](FORMAT.md)
- Human-readable cards: [../cards/](../cards/README.md)
- Validate: `node scripts/validate-atlas.mjs`; build: `node scripts/build.mjs`
- Live JSON: `https://aigovernancechain.com/atlas.json`

Every obligation has a stable id (`AGC-EU-AIA-50-1`), an article, a plain-language summary, who it applies to (roles and uses), when it applies, the controls it needs, a primary `source_url` and a confidence level. Draft data under CC BY 4.0. Not legal advice.
