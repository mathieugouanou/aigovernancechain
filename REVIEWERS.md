# Named regime reviewers

Every Tier-1 regime gets one named reviewer: a practitioner who checks the regime file against the law and signs it off. Until then the file stays `draft-unreviewed`, and every card says so. Target: all 12 seats filled by 31 Dec 2026.

| Tier-1 regime | Files | Reviewer | Status |
|---|---|---|---|
| European Union | `eu` | Open seat | draft-unreviewed |
| United States (federal) | `us` | Open seat | draft-unreviewed |
| United States (states) | `us-ca`, `us-co`, `us-tx`, `us-ny`, `us-ny-nyc`, `us-il` | Open seat | draft-unreviewed |
| China | `cn` | Open seat | draft-unreviewed |
| South Korea | `kr` | Open seat | draft-unreviewed |
| Japan | `jp` | Open seat | draft-unreviewed |
| Vietnam | `vn` | Open seat | draft-unreviewed |
| India | `in` | Open seat | draft-unreviewed |
| United Kingdom | `gb` | Open seat | draft-unreviewed |
| Singapore | `sg` | Open seat | draft-unreviewed |
| Switzerland | `ch` | Open seat | draft-unreviewed |
| Council of Europe | `coe` | Open seat | draft-unreviewed |

## What a reviewer does

- Reads each obligation against the primary source: article, date, who it applies to, plain-language summary.
- Fixes or flags errors in a pull request, then sets `review.status: expert-reviewed` and adds their GitHub handle to `review.reviewers`.
- Re-checks the file when the law changes (roughly 2 to 4 hours per quarter).

## What a reviewer gets

Public credit on the card, in this file and in release notes; a say in the Technical Steering Committee once seated; no payment and no liability for users' decisions (see [DISCLAIMER.md](DISCLAIMER.md)). Reviewers act in a personal capacity unless stated.

## Conflicts of interest

List relevant affiliations (employer, clients, products) next to your name. Reviewers may work for vendors, firms or public bodies; they may not use the seat to promote them.

[Apply for a seat](https://github.com/mathieugouanou/aigovernancechain/issues/new?template=reviewer-application.yml).
