# AI Governance Chain: início rápido

**Dados e ferramentas abertos que transformam as leis de IA do mundo em verificações que o seu código, os seus agentes e a sua CI podem executar.**

A cadeia: LEI (o que se aplica) -> OBRIGAÇÃO (o que você precisa fazer) -> CONTROLE (o que você implementou) -> PORTÃO (o que a CI verifica) -> EVIDÊNCIA (o que você pode comprovar) -> SUPERVISÃO (quem pode parar o sistema). "Cadeia" significa uma cadeia de responsabilidade, não uma blockchain.

## Experimente em 60 segundos

Você precisa do Node 18 ou mais recente. Nada para instalar, sem conta, sem chave de API.

```bash
# Veja regras pararem um agente que sai do controle (30 segundos)
npx github:mathieugouanou/aigovernancechain jail

# Quais regras de IA se aplicam a um agente de chatbot que você usa na UE e na Califórnia?
npx github:mathieugouanou/aigovernancechain scope -j EU,US-CA -r deployer -u chatbot,agent

# Escreva um AI_GOVERNANCE.md para o seu repositório e depois verifique
npx github:mathieugouanou/aigovernancechain init
npx github:mathieugouanou/aigovernancechain check
```

## O que você recebe

- **Atlas de obrigações:** 198 obrigações com fonte, de 12 grandes regimes de governança de IA (UE, Estados Unidos, China, Coreia do Sul, Japão, Vietnã, Índia, Reino Unido, Singapura, Suíça, Conselho da Europa).
- **Calendário de prazos:** assine `https://aigovernancechain.com/deadlines.ics` e receba atualizações quando as datas mudarem.
- **AI_GOVERNANCE.md:** um único arquivo que diz às pessoas, aos agentes de IA e à CI como o seu sistema de IA é governado.
- **GitHub Action, servidor MCP, Agent Skills e proteções para agentes** em JavaScript e Python.

O Brasil está previsto como regime de nível 2 no roteiro (v1, 30 de novembro de 2026).

## Importante

- Os dados são um rascunho. Cada obrigação tem uma data, um link para a fonte e um nível de confiança. Estamos recrutando revisores especialistas.
- Isto não é aconselhamento jurídico. As ferramentas informam fatos, por exemplo "14/16 verificações aprovadas". Elas nunca certificam conformidade.

Documentação completa (em inglês): https://github.com/mathieugouanou/aigovernancechain

_Tradução assistida por máquina; revisão por falantes nativos é bem-vinda._
