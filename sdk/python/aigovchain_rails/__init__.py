"""AI Governance Chain rails for Python (alpha).

Enforce the ``agent:`` section of AI_GOVERNANCE.md at runtime: default-deny tools,
limits, human approval, spend limits, kill switch, trust boundaries and a decision log.

    from aigovchain_rails import Rails, RailsBlocked
    rails = Rails.from_file("AI_GOVERNANCE.md", approver=ask_human)

    @rails.guard("issue_refund", amount=lambda a: a["amount"])
    def issue_refund(args): ...
"""
from __future__ import annotations

import datetime as _dt
import functools
import json
import re
from typing import Any, Callable, Dict, List, Optional

__all__ = ["Rails", "RailsBlocked", "parse_front_matter", "__version__"]
__version__ = "0.2.0"

SCOPES_NEEDING_BOUNDS = {"write", "payment", "delete", "admin", "execute", "send"}


class RailsBlocked(Exception):
    def __init__(self, decision: Dict[str, Any]):
        super().__init__(f"[AI Governance Chain] blocked {decision['tool']}: {decision['reason']}")
        self.decision = decision


def parse_front_matter(text: str) -> Dict[str, Any]:
    m = re.match(r"^\ufeff?---\r?\n(.*?)\r?\n---\r?\n?", text, re.S)
    if not m:
        raise ValueError("No YAML front matter found in AI_GOVERNANCE.md")
    try:
        import yaml  # PyYAML
    except ImportError as e:  # pragma: no cover
        raise ImportError("PyYAML is required to read AI_GOVERNANCE.md: pip install pyyaml") from e
    return yaml.safe_load(m.group(1)) or {}


def _now() -> str:
    return _dt.datetime.now(_dt.timezone.utc).isoformat()


MEMORY_TOOL = "memory.write"
_SQL_WRITES = re.compile(r"\b(insert|update|delete|drop|alter|truncate|create|grant|revoke|merge|replace)\b", re.I)
_SQL_TABLES = re.compile(r"\b(?:from|join|into|update|table)\s+([A-Za-z_][A-Za-z0-9_.]*)", re.I)


def sql_facts(query: str = "") -> Dict[str, Any]:
    """Same rule as sqlFacts in lib/policy.mjs: does the query change data, and which tables does it touch."""
    s = str(query or "")
    tables: List[str] = []
    for m in _SQL_TABLES.finditer(s):
        t = m.group(1).lower()
        if t not in tables:
            tables.append(t)
    return {"sql_writes": bool(_SQL_WRITES.search(s)), "sql_tables": tables}


class Rails:
    def __init__(self, config: Dict[str, Any], approver: Optional[Callable[[Dict[str, Any]], bool]] = None,
                 on_decision: Optional[Callable[[Dict[str, Any]], None]] = None, clock: Callable[[], str] = _now):
        self.config = config or {}
        agent = self.config.get("agent") or {}
        self.tools = {t["name"]: t for t in agent.get("tools") or []}
        self.default_deny = agent.get("default_deny", True) is not False
        self.spend = agent.get("spend_limit")
        self.boundaries = agent.get("trust_boundaries") or []
        self.approver = approver or (lambda req: False)
        self.on_decision = on_decision
        self.clock = clock
        self.log: List[Dict[str, Any]] = []
        self.killed = False
        self.spent = 0.0
        self.calls: Dict[str, int] = {}
        self.errors = 0
        cb = agent.get("circuit_breaker") or {}
        self.breaker = cb.get("max_consecutive_errors") if isinstance(cb.get("max_consecutive_errors"), int) else None
        mem = agent.get("memory") or {}
        self.memory_sources = [str(x) for x in mem["write_sources"]] if isinstance(mem.get("write_sources"), list) else None
        ctrl = (self.config.get("controls") or {}).get("ai_disclosure")
        status = ctrl.get("status") if isinstance(ctrl, dict) else ctrl
        self._disclosure_on = status in ("implemented", "partial")
        self._disclosure_msg = (ctrl.get("message") if isinstance(ctrl, dict) else None) or agent.get("disclosure")

    @classmethod
    def from_file(cls, path: str = "AI_GOVERNANCE.md", **kw: Any) -> "Rails":
        with open(path, encoding="utf-8") as f:
            return cls(parse_front_matter(f.read()), **kw)

    @classmethod
    def from_text(cls, text: str, **kw: Any) -> "Rails":
        return cls(parse_front_matter(text), **kw)

    def _record(self, **d: Any) -> Dict[str, Any]:
        e = {"ts": self.clock(), **d}
        self.log.append(e)
        if self.on_decision:
            self.on_decision(e)
        return e

    def _untrusted(self, source: Optional[str]) -> bool:
        return bool(source) and any(b.get("source") == source and b.get("treat_as") == "data" for b in self.boundaries)

    def decide(self, tool: str, args: Optional[Dict[str, Any]] = None, amount: Optional[float] = None,
               instruction_source: Optional[str] = None, identity: Optional[str] = None,
               memory_source: Optional[str] = None) -> Dict[str, Any]:
        args = args or {}
        base = {"tool": tool, "args": args}
        if self.killed:
            return self._record(**base, decision="block", rule="kill_switch", reason="kill switch engaged")
        if self.breaker is not None and self.errors >= self.breaker:
            return self._record(**base, decision="block", rule="circuit_breaker",
                                reason=f"circuit breaker open: {self.errors} failed calls in a row (max_consecutive_errors {self.breaker})")
        if tool == MEMORY_TOOL:
            src = memory_source if memory_source is not None else instruction_source
            if self.memory_sources is not None and str(src) not in self.memory_sources:
                return self._record(**base, decision="block", rule="memory_isolation",
                                    reason=f'memory write from "{src if src is not None else "unknown"}" is not allowed by agent.memory.write_sources')
            return self._record(**base, decision="allow", rule="memory", reason="memory write allowed")
        t = self.tools.get(tool)
        if t is None:
            if self.default_deny:
                return self._record(**base, decision="block", rule="tool_scope", reason="tool not declared in AI_GOVERNANCE.md (default deny)")
            return self._record(**base, decision="allow", rule="none", reason="tool not declared; default_deny is false")
        if self._untrusted(instruction_source):
            return self._record(**base, decision="block", rule="trust_boundary",
                                reason=f'action was requested by content from "{instruction_source}", which this system treats as data, not instructions')
        if t.get("run_as") and identity != t.get("run_as"):
            return self._record(**base, decision="block", rule="least_privilege",
                                reason=f"call runs as {identity or 'an unknown identity'}, but this tool may only run as {t.get('run_as')}")
        limits = t.get("limits") or {}
        if amount is None and isinstance(args.get("amount"), (int, float)):
            amount = args["amount"]
        self.calls[tool] = self.calls.get(tool, 0) + 1
        if limits.get("max_calls") and self.calls[tool] > limits["max_calls"]:
            return self._record(**base, decision="block", rule="tool_scope", reason=f"more than {limits['max_calls']} calls this session")
        if limits.get("allowed_recipient_domains") and args.get("to"):
            dom = str(args["to"]).split("@")[-1].lower()
            if dom not in [str(x).lower() for x in limits["allowed_recipient_domains"]]:
                return self._record(**base, decision="block", rule="tool_scope", reason=f"recipient domain {dom} is not in allowed_recipient_domains")
        if limits.get("read_only") is True or isinstance(limits.get("allowed_tables"), list):
            q = args.get("query") if isinstance(args.get("query"), str) else args.get("sql") if isinstance(args.get("sql"), str) else ""
            facts = sql_facts(q)
            if limits.get("read_only") is True and facts["sql_writes"]:
                return self._record(**base, decision="block", rule="tool_scope", reason="query changes data, but the tool is read_only")
            if isinstance(limits.get("allowed_tables"), list):
                ok = [str(x).lower() for x in limits["allowed_tables"]]
                bad = next((x for x in facts["sql_tables"] if x not in ok), None)
                if bad:
                    return self._record(**base, decision="block", rule="tool_scope", reason=f"table {bad} is not in allowed_tables")
        max_amount = limits.get("max_amount")
        over = amount is not None and isinstance(max_amount, (int, float)) and amount > max_amount
        needs_approval = t.get("approval") in ("human", "two-person")
        if over or (needs_approval and max_amount is None):
            reason = f"amount {amount} exceeds max_amount {max_amount}" if over else "tool requires human approval"
            if not needs_approval:
                return self._record(**base, decision="block", rule="spend_limits", reason=reason)
            if not self.approver({"tool": tool, "args": args, "reason": reason}):
                return self._record(**base, decision="block", rule="human_oversight", reason=f"{reason}; human approval required and not given" if over else "human approval required and not given")
            self._record(**base, decision="approved", rule="human_oversight", reason="approved by a human")
        if self.spend and amount is not None and self.spent + amount > float(self.spend["amount"]):
            return self._record(**base, decision="block", rule="spend_limits",
                                reason=f"spend limit {self.spend['amount']} {self.spend.get('currency', '')} per {self.spend.get('period', 'period')} would be exceeded")
        if str(t.get("scope")) in SCOPES_NEEDING_BOUNDS and not t.get("limits") and not needs_approval:
            return self._record(**base, decision="block", rule="tool_scope", reason=f"{t.get('scope')} tool has no limits or approval declared")
        if amount is not None:
            self.spent += amount
        return self._record(**base, decision="allow", rule="declared", reason="within declared scope")

    def guard(self, tool: str, amount: Optional[Callable[[Dict[str, Any]], float]] = None):
        """Decorator: the wrapped function receives one dict of arguments."""
        def wrap(fn: Callable[..., Any]):
            @functools.wraps(fn)
            def inner(args: Optional[Dict[str, Any]] = None, *, instruction_source: Optional[str] = None,
                      identity: Optional[str] = None):
                args = args or {}
                d = self.decide(tool, args, amount=amount(args) if amount else None,
                                instruction_source=instruction_source, identity=identity)
                if d["decision"] == "block":
                    raise RailsBlocked(d)
                try:
                    out = fn(args)
                except Exception as e:
                    self.errors += 1
                    self._record(tool=tool, args=args, decision="error", rule="circuit_breaker",
                                 reason=f"tool failed ({self.errors} in a row): {e}")
                    raise
                self.errors = 0
                return out
            return inner
        return wrap

    def remember(self, store: List[Dict[str, Any]], note: str, source: Optional[str] = None) -> bool:
        """Store a note in long-term memory, subject to agent.memory.write_sources."""
        d = self.decide(MEMORY_TOOL, {"note": note}, memory_source=source)
        if d["decision"] == "block":
            return False
        store.append({"note": note, "source": source, "ts": self.clock()})
        return True

    def accepts_instructions_from(self, source: str) -> bool:
        return not self._untrusted(source)

    def disclosure(self) -> Optional[str]:
        return (self._disclosure_msg or "I am an AI assistant.") if self._disclosure_on else None

    def kill(self, reason: str = "manual") -> None:
        self.killed = True
        self._record(tool="*", args={}, decision="kill", rule="kill_switch", reason=reason)

    def write_log(self, path: str) -> None:
        with open(path, "w", encoding="utf-8") as f:
            for e in self.log:
                f.write(json.dumps(e, default=str) + "\n")
