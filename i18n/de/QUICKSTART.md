# AI Governance Chain: Schnellstart

**Offene Daten und Werkzeuge, die die KI-Gesetze der Welt in Prüfungen verwandeln, die Ihr Code, Ihre Agenten und Ihre CI ausführen können.**

Die Kette: GESETZ (was gilt) -> PFLICHT (was Sie tun müssen) -> KONTROLLE (was Sie umgesetzt haben) -> PRÜFTOR (was die CI prüft) -> NACHWEIS (was Sie belegen können) -> AUFSICHT (wer das System stoppen kann). „Kette“ meint eine Verantwortungskette, keine Blockchain.

## In 60 Sekunden ausprobieren

Sie brauchen Node 18 oder neuer. Keine Installation, kein Konto, kein API-Schlüssel.

```bash
# Sehen Sie zu, wie Regeln einen fehlgeleiteten Agenten stoppen (30 Sekunden)
npx github:mathieugouanou/aigovernancechain jail

# Welche KI-Regeln gelten für einen Chatbot-Agenten, den Sie in der EU und in Kalifornien betreiben?
npx github:mathieugouanou/aigovernancechain scope -j EU,US-CA -r deployer -u chatbot,agent

# Ein AI_GOVERNANCE.md für Ihr Repository erstellen und prüfen
npx github:mathieugouanou/aigovernancechain init
npx github:mathieugouanou/aigovernancechain check
```

## Was Sie bekommen

- **Pflichten-Atlas:** 198 belegte Pflichten aus 12 wichtigen KI-Governance-Regimen (EU, USA, China, Südkorea, Japan, Vietnam, Indien, Vereinigtes Königreich, Singapur, Schweiz, Europarat).
- **Fristenkalender:** abonnieren Sie `https://aigovernancechain.com/deadlines.ics` und erhalten Sie Aktualisierungen, wenn sich Termine verschieben.
- **AI_GOVERNANCE.md:** eine Datei, die Menschen, KI-Agenten und der CI sagt, wie Ihr KI-System gesteuert wird.
- **GitHub Action, MCP-Server, Agent Skills und Agenten-Leitplanken** für JavaScript und Python.

In der KI-Verordnung der EU entspricht die Rolle `provider` dem „Anbieter“ und `deployer` dem „Betreiber“.

## Wichtig

- Die Daten sind ein Entwurf. Jede Pflicht hat ein Datum, einen Quellenlink und eine Vertrauensstufe. Fachliche Prüferinnen und Prüfer werden gesucht.
- Dies ist keine Rechtsberatung. Die Werkzeuge nennen Fakten, zum Beispiel „14/16 Prüfungen bestanden“. Sie bescheinigen nie Konformität.

Vollständige Dokumentation (auf Englisch): https://github.com/mathieugouanou/aigovernancechain

_Maschinell unterstützte Übersetzung, Durchsicht durch Muttersprachler willkommen._
