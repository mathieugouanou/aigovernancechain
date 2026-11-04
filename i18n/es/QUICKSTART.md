# AI Governance Chain: inicio rápido

**Datos y herramientas abiertos que convierten las leyes de IA del mundo en comprobaciones que tu código, tus agentes y tu CI pueden ejecutar.**

La cadena: LEY (qué se aplica) -> OBLIGACIÓN (qué debes hacer) -> CONTROL (qué has implantado) -> PUERTA (qué comprueba la CI) -> EVIDENCIA (qué puedes demostrar) -> SUPERVISIÓN (quién puede detener el sistema). "Cadena" significa una cadena de responsabilidad, no una blockchain.

## Pruébalo en 60 segundos

Necesitas Node 18 o posterior. Nada que instalar, sin cuenta, sin clave de API.

```bash
# Mira cómo unas reglas detienen a un agente que se descontrola (30 segundos)
npx github:mathieugouanou/aigovernancechain jail

# ¿Qué normas de IA se aplican a un agente conversacional que usas en la UE y en California?
npx github:mathieugouanou/aigovernancechain scope -j EU,US-CA -r deployer -u chatbot,agent

# Redacta un AI_GOVERNANCE.md para tu repositorio y compruébalo
npx github:mathieugouanou/aigovernancechain init
npx github:mathieugouanou/aigovernancechain check
```

## Qué obtienes

- **Atlas de obligaciones:** 198 obligaciones con fuente de 12 grandes regímenes de gobernanza de la IA (UE, Estados Unidos, China, Corea del Sur, Japón, Vietnam, India, Reino Unido, Singapur, Suiza, Consejo de Europa).
- **Calendario de plazos:** suscríbete a `https://aigovernancechain.com/deadlines.ics` y recibe actualizaciones cuando cambien las fechas.
- **AI_GOVERNANCE.md:** un solo archivo que explica a las personas, a los agentes de IA y a la CI cómo se gobierna tu sistema de IA.
- **GitHub Action, servidor MCP, Agent Skills y salvaguardas para agentes** en JavaScript y Python.

En el Reglamento europeo de IA, el rol `provider` corresponde al "proveedor" y `deployer` al "responsable del despliegue".

## Importante

- Los datos son un borrador. Cada obligación tiene una fecha, un enlace a la fuente y un nivel de confianza. Estamos buscando revisores expertos.
- Esto no es asesoramiento jurídico. Las herramientas indican hechos, por ejemplo "14/16 comprobaciones superadas". Nunca certifican el cumplimiento.

Documentación completa (en inglés): https://github.com/mathieugouanou/aigovernancechain

_Traducción asistida por máquina; se agradece la revisión de hablantes nativos._
