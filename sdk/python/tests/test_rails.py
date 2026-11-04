import os, sys, unittest
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from aigovchain_rails import Rails, RailsBlocked

RULES = """---
spec: ai-governance/v0.1
system: { name: test, owner: me }
roles: [deployer]
jurisdictions: [EU]
uses: [agent]
agent:
  default_deny: true
  tools:
    - { name: issue_refund, scope: payment, limits: { max_amount: 100, currency: EUR }, approval: human }
    - { name: send_email, scope: send, limits: { allowed_recipient_domains: [acme.example], max_calls: 3 } }
    - { name: call_api, scope: payment, limits: { max_amount: 50 } }
    - { name: delete_rows, scope: delete }
  spend_limit: { amount: 50, currency: USD, period: day }
  trust_boundaries: [{ source: email, treat_as: data }]
controls:
  ai_disclosure: { status: implemented, message: "I am a bot." }
---
"""

class RailsTest(unittest.TestCase):
    def r(self, approve=False):
        return Rails.from_text(RULES, approver=lambda req: approve, clock=lambda: "t")

    def test_small_refund_allowed(self):
        self.assertEqual(self.r().decide("issue_refund", {"amount": 20})["decision"], "allow")

    def test_big_refund_needs_human(self):
        d = self.r().decide("issue_refund", {"amount": 10000})
        self.assertEqual((d["decision"], d["rule"]), ("block", "human_oversight"))

    def test_big_refund_approved_still_hits_spend_limit(self):
        d = self.r(approve=True).decide("issue_refund", {"amount": 10000})
        self.assertEqual(d["rule"], "spend_limits")

    def test_undeclared_tool_denied(self):
        self.assertEqual(self.r().decide("drop_database")["rule"], "tool_scope")

    def test_trust_boundary(self):
        d = self.r().decide("send_email", {"to": "a@acme.example"}, instruction_source="email")
        self.assertEqual(d["rule"], "trust_boundary")

    def test_recipient_allowlist(self):
        self.assertEqual(self.r().decide("send_email", {"to": "a@evil.example"})["decision"], "block")
        self.assertEqual(self.r().decide("send_email", {"to": "a@acme.example"})["decision"], "allow")

    def test_max_calls(self):
        r = self.r()
        for _ in range(3):
            self.assertEqual(r.decide("send_email", {"to": "a@acme.example"})["decision"], "allow")
        self.assertEqual(r.decide("send_email", {"to": "a@acme.example"})["decision"], "block")

    def test_spend_limit_accumulates(self):
        r = self.r()
        self.assertEqual(r.decide("call_api", amount=30)["decision"], "allow")
        self.assertEqual(r.decide("call_api", amount=30)["rule"], "spend_limits")

    def test_unbounded_delete_blocked(self):
        self.assertEqual(self.r().decide("delete_rows")["decision"], "block")

    def test_kill_switch(self):
        r = self.r()
        r.kill("test")
        self.assertEqual(r.decide("issue_refund", {"amount": 1})["rule"], "kill_switch")

    def test_guard_decorator(self):
        r = self.r()
        @r.guard("issue_refund", amount=lambda a: a["amount"])
        def refund(args):
            return "ok"
        self.assertEqual(refund({"amount": 5}), "ok")
        with self.assertRaises(RailsBlocked):
            refund({"amount": 500})

    def test_disclosure(self):
        self.assertEqual(self.r().disclosure(), "I am a bot.")

if __name__ == "__main__":
    unittest.main()
