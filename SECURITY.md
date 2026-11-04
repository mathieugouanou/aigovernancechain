# Security policy

## Reporting a vulnerability

Please report security issues privately through GitHub: **Security tab -> Report a vulnerability** on this repository. Do not open a public issue. We aim to acknowledge reports within 3 working days and to fix confirmed issues in the CLI, MCP server, Action or rails within 30 days.

## Scope

- `cli/`, `lib/`, `mcp/`, `action/`, `rails/`, `sdk/python/`: code vulnerabilities, unsafe file handling, command injection in the Action.
- Agent rails bypasses: ways to make `createRails` or `Rails` allow an action that the AI_GOVERNANCE.md rules should block.
- Data poisoning: malicious changes to `atlas/` that could mislead users (for example a fake source URL).

## Design notes

- The CLI, MCP server and Action make no network calls. The MCP server tools are read-only and never write files.
- The CTF and Agent Jail use deterministic toy agents with synthetic data. They contain no exploit code against real systems.
- The rails are an alpha defence-in-depth layer, not a sandbox. Keep least-privilege credentials and platform controls in place.

## Supported versions

Only the latest release receives fixes during the 0.x series.
