# AI Governance Chain: guida rapida

**Dati e strumenti aperti che trasformano le leggi sull'IA di tutto il mondo in controlli che il vostro codice, i vostri agenti e la vostra CI possono eseguire.**

La catena: LEGGE (cosa si applica) -> OBBLIGO (cosa dovete fare) -> CONTROLLO (cosa avete realizzato) -> CANCELLO (cosa verifica la CI) -> PROVA (cosa potete dimostrare) -> SORVEGLIANZA (chi può fermare il sistema). "Catena" indica una catena di responsabilità, non una blockchain.

## Provate in 60 secondi

Serve Node 18 o versione successiva. Niente da installare, nessun account, nessuna chiave API.

```bash
# Guardate le regole fermare un agente che sbaglia (30 secondi)
npx github:mathieugouanou/aigovernancechain jail

# Quali regole sull'IA si applicano a un agente chatbot che utilizzate nell'UE e in California?
npx github:mathieugouanou/aigovernancechain scope -j EU,US-CA -r deployer -u chatbot,agent

# Scrivete un AI_GOVERNANCE.md per il vostro repository, poi verificatelo
npx github:mathieugouanou/aigovernancechain init
npx github:mathieugouanou/aigovernancechain check
```

## Cosa ottenete

- **Atlante degli obblighi:** 198 obblighi con fonte, tratti da 12 grandi regimi di governance dell'IA (UE, Stati Uniti, Cina, Corea del Sud, Giappone, Vietnam, India, Regno Unito, Singapore, Svizzera, Consiglio d'Europa).
- **Calendario delle scadenze:** iscrivetevi a `https://aigovernancechain.com/deadlines.ics` e ricevete aggiornamenti quando le date cambiano.
- **AI_GOVERNANCE.md:** un unico file che dice alle persone, agli agenti di IA e alla CI come è governato il vostro sistema di IA.
- **GitHub Action, server MCP, Agent Skills e protezioni per agenti** in JavaScript e Python.

Nel regolamento europeo sull'IA, il ruolo `provider` corrisponde al "fornitore" e `deployer` al "deployer".

## Importante

- I dati sono una bozza. Ogni obbligo ha una data, un link alla fonte e un livello di affidabilità. Stiamo cercando revisori esperti.
- Questa non è consulenza legale. Gli strumenti riportano fatti, per esempio "14/16 controlli superati". Non certificano mai la conformità.

Documentazione completa (in inglese): https://github.com/mathieugouanou/aigovernancechain

_Traduzione assistita da macchina, revisione da parte di madrelingua benvenuta._
