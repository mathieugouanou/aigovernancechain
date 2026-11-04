# AI Governance Chain : démarrage rapide

**Des données et des outils ouverts qui transforment les lois mondiales sur l'IA en contrôles que votre code, vos agents et votre CI peuvent exécuter.**

La chaîne : LOI (ce qui s'applique) -> OBLIGATION (ce que vous devez faire) -> CONTRÔLE (ce que vous avez mis en place) -> PORTE (ce que la CI vérifie) -> PREUVE (ce que vous pouvez démontrer) -> SUPERVISION (qui peut arrêter le système). « Chaîne » désigne une chaîne de responsabilité, pas une blockchain.

## Essayez en 60 secondes

Il vous faut Node 18 ou plus récent. Rien à installer, pas de compte, pas de clé d'API.

```bash
# Regardez des règles arrêter un agent qui dérape (30 secondes)
npx github:mathieugouanou/aigovernancechain jail

# Quelles règles s'appliquent à un agent conversationnel que vous déployez dans l'UE et en Californie ?
npx github:mathieugouanou/aigovernancechain scope -j EU,US-CA -r deployer -u chatbot,agent

# Rédigez un AI_GOVERNANCE.md pour votre dépôt, puis vérifiez-le
npx github:mathieugouanou/aigovernancechain init
npx github:mathieugouanou/aigovernancechain check
```

## Ce que vous obtenez

- **Atlas des obligations :** 198 obligations sourcées issues de 12 grands régimes de gouvernance de l'IA (UE, États-Unis, Chine, Corée du Sud, Japon, Viêt Nam, Inde, Royaume-Uni, Singapour, Suisse, Conseil de l'Europe).
- **Calendrier des échéances :** abonnez-vous à `https://aigovernancechain.com/deadlines.ics` et recevez les mises à jour quand les dates changent.
- **AI_GOVERNANCE.md :** un seul fichier qui indique aux personnes, aux agents d'IA et à la CI comment votre système d'IA est gouverné.
- **Action GitHub, serveur MCP, Agent Skills et garde-fous pour agents** en JavaScript et en Python.

Dans le règlement européen sur l'IA, le rôle `provider` correspond au « fournisseur » et `deployer` au « déployeur ».

## Important

- Les données sont un projet. Chaque obligation a une date, un lien vers la source et un niveau de confiance. Des relecteurs experts sont en cours de recrutement.
- Ceci n'est pas un conseil juridique. Les outils énoncent des faits, par exemple « 14/16 contrôles réussis ». Ils ne certifient jamais la conformité.

Documentation complète (en anglais) : https://github.com/mathieugouanou/aigovernancechain

_Traduction assistée par machine, relecture par un locuteur natif bienvenue._
