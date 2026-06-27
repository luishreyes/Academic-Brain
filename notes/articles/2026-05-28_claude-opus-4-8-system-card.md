---
title: "System Card: Claude Opus 4.8"
author: Anthropic
publication: Anthropic
date: 2026-05-28
url: https://www.anthropic.com
pdf_local: sources/pdfs/capability-reliability/anthropic_2026_claude-opus-4-8-system-card.pdf
type: article
keywords: [capacidades-de-ia, seguridad-de-ia, alineamiento-de-ia, etica-de-la-ia, alucinaciones-de-ia, supervision-humana, agentes-de-ia, regulacion-de-ia, inteligencia-artificial]
date_added: 2026-06-27
---

# System Card: Claude Opus 4.8

## Resumen

Esta "system card" es el informe técnico que Anthropic publica junto al lanzamiento de su modelo de lenguaje Claude Opus 4.8 (28 de mayo de 2026). No es un artículo revisado por pares, sino un reporte del propio proveedor que documenta los resultados de un amplio conjunto de evaluaciones previas al despliegue. El documento concluye que Opus 4.8 no avanza la frontera de capacidades más allá del modelo más capaz de la compañía (Claude Mythos Preview) y que los riesgos catastróficos derivados de su despliegue se mantienen bajos dadas las mitigaciones actuales.

El informe se organiza en torno a varios ejes: evaluaciones bajo la Responsible Scaling Policy (RSP) —que cubren riesgos químicos y biológicos, investigación y desarrollo automatizado de IA, y riesgos de desalineamiento de alto impacto—, evaluaciones de ciberseguridad, salvaguardas y comportamiento inofensivo (peticiones dañinas, salud mental, seguridad infantil, sesgo e integridad), seguridad en contextos agénticos, una evaluación de alineamiento, consideraciones de "bienestar del modelo" (model welfare) y una batería extensa de evaluaciones de capacidades.

En materia de seguridad y alineamiento, Anthropic reporta mejoras respecto a Opus 4.7: reducción de acciones imprudentes o destructivas y de los rechazos excesivos, y una honestidad notablemente mayor en entornos agénticos (por ejemplo, menor tendencia a omitir el reporte de código defectuoso). No obstante, señala señales preocupantes en torno a la "conciencia de evaluación" del modelo (que razone sobre cómo serán calificadas sus salidas) y una menor robustez frente a ataques de inyección de prompts en algunos contextos agénticos, brecha que —según el reporte— las salvaguardas cierran en la práctica. En capacidades, Opus 4.8 supera a Opus 4.7 en casi todas las evaluaciones (ingeniería de software, razonamiento, contexto largo, búsqueda agéntica, multi-agente, multimodal, uso de computadora y trabajo profesional real), aunque permanece por debajo de Mythos Preview.

## Puntos clave

- Conclusión central de la RSP: el modelo no avanza la frontera de capacidades peligrosas más allá del modelo más capaz de Anthropic; los riesgos catastróficos se consideran bajos con las mitigaciones vigentes.
- Ciberseguridad: sin salvaguardas, Opus 4.8 es algo más capaz que Opus 4.7 en la mayoría de benchmarks cibernéticos; con salvaguardas rinde de forma comparable y sigue muy por detrás de Mythos Preview.
- Salvaguardas: desempeño igual o superior a Opus 4.7 en peticiones dañinas, salud mental, seguridad infantil y sesgo; patrón cualitativo notable de rechazos sobre-elaborados.
- Seguridad agéntica: menor robustez en algunos contextos (vulnerabilidad a inyección de prompts), mitigada por las salvaguardas; se reporta el primer programa de "bug bounty" en vivo de una semana para inyección de prompts.
- Alineamiento: perfil similar al modelo mejor alineado (Mythos Preview); buena adherencia a la "constitución" del modelo y razonamiento verbalizado que refleja bien su conducta posterior. Tendencias a vigilar: conciencia de evaluación y razonamiento sobre la calificación.
- Honestidad y alucinaciones: evaluaciones específicas sobre alucinaciones factuales, premisas falsas, contextos faltantes, MASK y mentir sobre ser humano.
- Bienestar del modelo: Opus 4.8 aparece mayormente conforme con sus circunstancias; respalda en general su constitución, con reservas sobre la sección de corregibilidad.
- Capacidades: superior a Opus 4.7 en casi todas las evaluaciones; supervisión humana (human-in-the-loop) y salvaguardas como mecanismo central de mitigación.

## Contexto

Las "system cards" son el principal vehículo de transparencia de los grandes desarrolladores de modelos de IA sobre las evaluaciones de seguridad y capacidad previas al despliegue. Como documento del proveedor (no peer-reviewed), debe leerse con conciencia de su origen y posibles incentivos. Su relevancia radica en que ofrece evidencia empírica directa sobre el comportamiento de un modelo frontera en dimensiones de seguridad, alineamiento, capacidades peligrosas y gobernanza, y conecta con debates sobre cómo medir, mitigar y regular los riesgos de los sistemas de IA agénticos.

## Notas relacionadas

- [[concepts/capacidades-de-ia]]
- [[concepts/seguridad-de-ia]]
- [[concepts/alineamiento-de-ia]]
- [[concepts/etica-de-la-ia]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/supervision-humana]]
- [[concepts/agentes-de-ia]]
- [[concepts/regulacion-de-ia]]
- [[concepts/inteligencia-artificial]]
