# aigovchain-rails (Python, alpha)

Enforce the `agent:` section of your `AI_GOVERNANCE.md` at runtime. Same rules and order as the JavaScript rails.

```bash
pip install "git+https://github.com/mathieugouanou/aigovernancechain#subdirectory=sdk/python"
```

```python
from aigovchain_rails import Rails, RailsBlocked

rails = Rails.from_file("AI_GOVERNANCE.md", approver=lambda req: ask_human(req))

@rails.guard("issue_refund", amount=lambda a: a["amount"])
def issue_refund(args):
    return payments.refund(args["order"], args["amount"])

issue_refund({"order": "A-1", "amount": 20})        # allowed
issue_refund({"order": "A-1", "amount": 10_000})    # RailsBlocked unless a human approves
send_email({"to": "x@evil.example"}, instruction_source="email")  # blocked by trust boundary
rails.kill("incident 42")                            # everything blocked from now on
rails.write_log("rails-log.jsonl")
```

Not on PyPI yet; it will be published when the API is stable. Not legal advice.
