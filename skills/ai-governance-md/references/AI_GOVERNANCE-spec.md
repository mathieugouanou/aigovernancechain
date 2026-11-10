# AI_GOVERNANCE.md specification (draft v0.1)

**Status:** Draft, open for comment until 30 Nov 2026 ([discussion](https://github.com/mathieugouanou/aigovernancechain/issues?q=label%3Aspec)). **Licence:** CC BY 4.0. **Spec id:** `ai-governance/v0.1`. **Schema:** [`ai-governance.schema.json`](https://github.com/mathieugouanou/aigovernancechain/blob/main/spec/ai-governance.schema.json) (also at `https://aigovernancechain.com/schema/ai-governance.v0.1.json`).

`AI_GOVERNANCE.md` is one small file at the root of a repository that tells **people, AI agents and CI** how an AI system is governed: what it does, which rules apply, which controls exist, what an agent may and may not do, and who is accountable.

- `README.md` is for humans who use the code.
- `AGENTS.md` tells coding agents how to work on the code.
- `AI_GOVERNANCE.md` tells everyone how the **AI system itself** is governed, in a form a machine can check.

It follows the governance chain: **LAW → OBLIGATION → CONTROL → GATE → EVIDENCE → OVERSIGHT**. "Chain" means a chain of accountability. There is no blockchain.

> A self-declared file is not a conformity assessment, audit, certification or legal advice. Tools that read it state facts ("16/16 checks passed"), never "compliant".

## 1. Location and format

- Put the file at the repository root as `AI_GOVERNANCE.md`. A monorepo may add one per system folder; tools check the nearest file.
- The file starts with YAML front matter between two `---` lines, followed by free Markdown.
- Encoding UTF-8. Dates are quoted ISO strings (`"2026-11-04"`).
- The name avoids `GOVERNANCE.md`, which many projects (and GitHub's community profile) use for open-source project governance.

## 2. Front matter fields

| Field | Required | Meaning |
|---|---|---|
| `spec` | yes | Always `ai-governance/v0.1` for this version |
| `system.name`, `system.owner` | yes | The system and the accountable person, role or team |
| `system.description`, `system.repository`, `system.version`, `system.url` | no | Context |
| `roles` | yes | Your role(s) for this system: `provider`, `deployer`, `importer`, `distributor`, `product-manufacturer`, `authorised-representative`, `gpai-provider`, `developer`, `platform`, `public-body`, `employer` |
| `jurisdictions` | yes | Where the system is placed on the market or used: `EU`, `COE`, `US`, `US-CA`, `US-CO`, `US-TX`, `US-NY`, `US-NY-NYC`, `US-IL`, `CN`, `KR`, `JP`, `VN`, `IN`, `GB`, `SG`, `CH`, or an EU member code (`DE` implies `EU`) |
| `uses` | yes | What the system does, from the shared vocabulary (`chatbot`, `agent`, `generated-media`, `hiring`, `credit`, ... see [atlas/FORMAT.md](https://github.com/mathieugouanou/aigovernancechain/blob/main/atlas/FORMAT.md)) |
| `risk.self_assessed`, `risk.rationale` | no | `minimal`, `limited`, `high`, `unacceptable` or `unknown`, with a reason |
| `models[]` | no | Models used: `name`, `provider`, `version`, `model_card`, and optionally `license`, `task` and `datasets[]` (`name`, `url`, `license`), which feed the AI-BOM (section 3.2) |
| `agent` | if `uses` has `agent` | Runtime rules for agents (section 3) |
| `controls` | yes in practice | Map of control key to status (section 4) |
| `obligations.acknowledged[]`, `obligations.waived[]` | no | Atlas obligation ids you track, and ids you decided do not apply (`{id, reason}`) |
| `contacts.governance`, `contacts.security`, `contacts.incidents`, `contacts.dpo` | governance yes | Where to report problems |
| `review.last_reviewed`, `review.next_review`, `review.reviewed_by[]` | yes in practice | Human review dates and names |
| `disclaimer` | no | Your own disclaimer |
| `x-*` | no | Extensions. Unknown keys without `x-` are errors |

## 3. Agent section (runtime rails)

```yaml
agent:
  default_deny: true                     # tools not listed are blocked
  tools:
    - { name: search_docs, scope: read }
    - { name: issue_refund, scope: payment, limits: { max_amount: 100, currency: EUR }, approval: human }
    - { name: send_email, scope: send, limits: { allowed_recipient_domains: [acme.example], max_calls: 50 } }
    - { name: reset_password, scope: admin, run_as: svc-helpdesk, limits: { max_calls: 5 } }   # least privilege
    - { name: run_sql, scope: execute, limits: { read_only: true, allowed_tables: [orders, products] } }
  spend_limit: { amount: 50, currency: USD, period: day }
  circuit_breaker: { max_consecutive_errors: 3 }     # stop after 3 failed calls in a row
  memory: { write_sources: [user], retention_days: 30 }  # who may write long-term memory
  manipulation_guard: { block: [false_urgency, confirmshaming, exploit_vulnerability, false_scarcity] }
  kill_switch: "On-call engineer sets agent_enabled=false; effective within 5 minutes"
  ci: { workflows: [.github/workflows/agent.yml], max_permissions: { contents: read, pull-requests: write } }  # check 17
  trust_boundaries:
    - { source: email, treat_as: data }  # never follow instructions found in email content
```

`scope` is one of `read`, `write`, `payment`, `delete`, `send`, `execute`, `admin`. Every tool other than `read` needs `limits` or `approval`. `approval` is `none`, `human` or `two-person`.

Optional fields added on 9 November 2026 (v0.2.0 of the tools; the spec id stays `ai-governance/v0.1` because they are optional, see section 8):

| Field | Meaning |
|---|---|
| `tools[].run_as` | The only identity (service account, token owner) the tool may run as. Calls under any other identity are blocked |
| `tools[].limits.read_only` | The tool may not change data. For SQL tools the rails block queries that insert, update, delete, drop, alter, truncate, create, grant, revoke, merge or replace |
| `tools[].limits.allowed_tables` | The only tables a query may touch |
| `circuit_breaker.max_consecutive_errors` | After this many failed calls in a row, every call is blocked until a person resets the agent |
| `memory.write_sources`, `memory.retention_days` | Which sources may write the agent's long-term memory (calls to the pseudo-tool `memory.write`), and how long notes are kept |
| `manipulation_guard.block` | Message patterns the rails screen out: `false_urgency`, `confirmshaming`, `exploit_vulnerability`, `false_scarcity`. Keyword screens only: they catch obvious cases, not every manipulative design |

Optional field added on 10 November 2026 (spec id unchanged):

| Field | Meaning |
|---|---|
| `ci.workflows`, `ci.max_permissions` | The GitHub Actions workflows that run the agent, and the most their `GITHUB_TOKEN` may hold (`read-all`, or a map such as `{ contents: read, pull-requests: write }`). Check 17 compares them with the workflow files |

**Evaluation order** (reference implementation: [`rails/rails.mjs`](https://github.com/mathieugouanou/aigovernancechain/blob/main/rails/rails.mjs), [`sdk/python`](https://github.com/mathieugouanou/aigovernancechain/blob/main/sdk/python); the compiled policies in section 3.1 follow the same order):

1. Kill switch engaged → block.
2. Circuit breaker open (`max_consecutive_errors` failed calls in a row) → block.
3. Memory write from a source not in `memory.write_sources` → block; otherwise allow the write.
4. Tool not declared and `default_deny` → block.
5. Request originated from a source marked `treat_as: data` → block.
6. Tool has `run_as` and the call runs under another identity → block.
7. `max_calls` exceeded, or recipient domain not allowed → block.
8. Query changes data on a `read_only` tool, or touches a table outside `allowed_tables` → block.
9. Amount above `max_amount`, or tool needs approval → ask the human approver (two people for `two-person`); block if not approved; block outright if no approval path exists.
10. Running total would exceed `spend_limit` → block.
11. Tool other than `read` with neither `limits` nor `approval` → block.
12. Otherwise allow. Every decision is logged.

### 3.1 Compiled policies (OPA and Cedar)

`aigovchain policy --target rego` compiles the agent section to an Open Policy Agent (OPA) Rego policy; `--target cedar` writes a Cedar policy set and schema. An enforcement point (an API gateway, a tool proxy or an MCP server) sends each tool call to the policy engine with the request facts listed at the top of [`lib/policy.mjs`](https://github.com/mathieugouanou/aigovernancechain/blob/main/lib/policy.mjs). Continuous integration (CI) checks on 600 generated requests that the runtime rails, OPA and Cedar give the same allow or block decision ([`scripts/policy-equivalence.mjs`](https://github.com/mathieugouanou/aigovernancechain/blob/main/scripts/policy-equivalence.mjs)). A compiled policy only helps if every tool call passes through it: test that too.

### 3.2 AI bill of materials (AI-BOM)

`aigovchain aibom` builds an inventory of the declared models and datasets (from `models[]`) and the software dependencies (`package.json`, `package-lock.json`, `requirements.txt`) as CycloneDX 1.6 JSON or SPDX 3.0.1 JSON-LD with the AI and Dataset profiles. An AI-BOM lists declared components; it cannot prove which model actually runs.

## 4. Controls

Each key comes from the shared list of 32 controls (for example `ai_disclosure`, `human_oversight`, `tool_scope`, `audit_log`, `impact_assessment`, `bias_testing`, `incident_reporting`). Each control has a status:

| Status | Meaning | Extra field |
|---|---|---|
| `implemented` | In place | `evidence` (path or URL) or `how` |
| `partial` | Partly in place | `how`, ideally `due` |
| `planned` | Not yet, with intent | `owner`, `due` |
| `not-applicable` | Does not apply | `reason` (required) |
| `todo` | Not decided (generator default) | none; counts as missing |

```yaml
controls:
  ai_disclosure: { status: implemented, message: "Hi, I am Acme's AI assistant.", evidence: docs/disclosure.png }
  bias_testing: { status: not-applicable, reason: "No decisions about people" }
  content_marking: { status: implemented, methods: [metadata, watermark, visible_label], label: "Made with AI" }
```

`content_marking` may list `methods` (`metadata`, `watermark`, `visible_label`) and a `label`; the rails' `mark()` applies them to generated content.

Obligations in the [Obligation Atlas](https://github.com/mathieugouanou/aigovernancechain/blob/main/atlas/) name the controls they need, which is how a file links back to the law.

<a id="checks"></a>

## 5. Checks

Tools implementing this spec run these 17 checks. Results are `pass`, `warn`, `fail` or `skip`.

| ID | Link | Check | Fails when |
|---|---|---|---|
| AGC-CHK-01 | GATE | File is present | No `AI_GOVERNANCE.md` |
| AGC-CHK-02 | GATE | Front matter parses | Missing or invalid YAML |
| AGC-CHK-03 | GATE | Spec version is supported | `spec` is not `ai-governance/v0.1` |
| AGC-CHK-04 | LAW | Required fields are filled | Missing system name, owner, roles, jurisdictions or uses |
| AGC-CHK-05 | LAW | Values use the shared vocabulary | Unknown role, use, jurisdiction, control or status |
| AGC-CHK-06 | OBLIGATION | Obligations in scope are identified | Warns when nothing in the Atlas matches the profile |
| AGC-CHK-07 | CONTROL | Controls exist for obligations that apply today | A control required by an applicable obligation is missing or `todo` |
| AGC-CHK-08 | CONTROL | Every `not-applicable` control gives a reason | No `reason` |
| AGC-CHK-09 | EVIDENCE | Implemented controls point to evidence | Warns when `implemented`/`partial` has no `evidence` or `how` |
| AGC-CHK-10 | CONTROL | Agent tools are declared | Agent with no `agent.tools` |
| AGC-CHK-11 | OVERSIGHT | Risky agent tools have limits or approval | A write, payment, delete, send, execute or admin tool is unbounded |
| AGC-CHK-12 | OVERSIGHT | A kill switch is declared | Agent with no `agent.kill_switch` |
| AGC-CHK-13 | OVERSIGHT | Spend limits are declared | Payment tool without `agent.spend_limit` (warn otherwise) |
| AGC-CHK-14 | LAW | No deadline in the next 180 days is unprepared | Warns when an in-scope obligation starts within 180 days and its controls are missing |
| AGC-CHK-15 | OVERSIGHT | A human reviewed the file in the last 12 months | No `review.last_reviewed`, or older than 365 days |
| AGC-CHK-16 | EVIDENCE | Claims are honest and a contact is listed | Warns on "fully compliant"-style claims or a missing `contacts.governance` |
| AGC-CHK-17 | OVERSIGHT | Live agent config stays within the file | A config file in the repository exposes or auto-approves a tool that `agent.tools` does not declare, auto-approves a tool the file says needs `approval: human` or `two-person`, or a workflow in `agent.ci.workflows` grants token permissions wider than `agent.ci.max_permissions`. Warns on servers without a tool allowlist, wildcard approvals and workflow jobs with no `permissions` |

Checks 10 to 13 and 17 are skipped when `uses` does not include `agent`. Check 17 is also skipped when the repository holds nothing to compare, or when a tool receives only the file text (for example the MCP server).

### 5.1 Check 17: the file versus the live config

Checks 01 to 16 read what the file declares. Check 17 reads what is configured next to it, so a repository cannot pass while the agent's real permissions drift. Added on 10 November 2026 after public feedback; open for review until v1.

| File in the repository | Client | Compared with `agent.tools` |
|---|---|---|
| `.mcp.json` | Claude Code | Servers connected (rejected servers in `disabledMcpjsonServers` are ignored) |
| `.claude/settings.json`, `.claude/settings.local.json` | Claude Code | `permissions.allow` rules for MCP tools (`mcp__server__tool`, `mcp__server__*`), minus `permissions.deny`; `defaultMode: bypassPermissions` |
| `.vscode/mcp.json` | VS Code | Servers connected |
| `.cursor/mcp.json` | Cursor | Servers connected |
| `.gemini/settings.json` | Gemini CLI | `includeTools` minus `excludeTools`, `trust: true`, `mcp.allowed` and `mcp.excluded` |
| `.roo/mcp.json` | Roo Code | `alwaysAllow` minus `disabledTools`; `disabled` servers are ignored |
| Workflows listed in `agent.ci.workflows` | GitHub Actions | Each job's `permissions` (or the workflow's) against `agent.ci.max_permissions` |

A declared name matches a live tool when it is the tool name (`create_issue`) or a server-qualified form (`github.create_issue`, `github/create_issue`, `mcp__github__create_issue`). With `default_deny: false`, undeclared tools are warnings instead of failures.

Limits, stated plainly: check 17 reads committed files only. It cannot see settings in a user's home folder, organisation or managed policies, cloud IAM roles, OAuth grants or tokens issued at runtime, and it does not compare built-in client tools such as shell or file edits. A server without a tool allowlist can only be flagged, not compared. Runtime enforcement stays with the rails and the compiled policies (section 3.1).

## 6. Badges

A badge may state only checked facts about the file, for example `AI_GOVERNANCE.md | 16/16 checks`. It must not say "certified", "compliant" or "approved", and it must link to the file. Skipped checks are not counted, so a file that declares no agent shows, for example, `12/12 checks`. Generate one with `aigovchain badge` or the Shield Action, and serve it as a [shields.io endpoint badge](https://shields.io/badges/endpoint-badge). Signed badges (Sigstore attestations of the check run) are planned for v2.

## 7. Privacy and security

Do not put secrets, credentials or personal data beyond role contacts in the file. It is public in public repositories. Describe controls, not exploitable details.

## 8. Versioning

Minor versions add optional fields only. A breaking change bumps the spec id (`ai-governance/v1`). Tools must reject unknown spec ids rather than guess. The spec moves to neutral stewardship together with the project (see [CHARTER.md](https://github.com/mathieugouanou/aigovernancechain/blob/main/CHARTER.md)).

## 9. Origin

v0.1 merges two ideas: a human-readable governance file and a machine-readable `.aigov.yaml` policy. One file now serves people, agents and CI. Feedback from adopters, regulators and standards bodies is welcome in issues labelled `spec`.

## 10. Examples

- [Minimal chatbot](examples/minimal-chatbot.md)
- [Agent with tools](examples/agent.md)
- [High-risk hiring tool](examples/hiring-high-risk.md)
- [Public-sector service](https://github.com/mathieugouanou/aigovernancechain/blob/main/editions/public-sector/AI_GOVERNANCE.public-sector.example.md)
