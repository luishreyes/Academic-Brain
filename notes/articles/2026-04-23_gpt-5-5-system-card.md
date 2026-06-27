---
title: GPT-5.5 System Card
author: OpenAI
publication: OpenAI
date: 2026-04-23
url: https://openai.com/index/gpt-5-5-system-card/
type: article
keywords: [seguridad-de-ia, capacidades-de-ia, alineamiento-de-ia, alucinaciones-de-ia, agentes-de-ia, supervision-humana, etica-de-la-ia, inteligencia-artificial]
date_added: 2026-06-27
pdf_local: sources/pdfs/capability-reliability/openai_2026_gpt-5-5-system-card.pdf
---

# GPT-5.5 System Card

## Resumen

Informe técnico del proveedor (OpenAI) que documenta las evaluaciones de seguridad, robustez, alineamiento y capacidades de GPT-5.5, un modelo de razonamiento diseñado para trabajo complejo del mundo real: programar, investigar en línea, analizar información, crear documentos y operar de forma agéntica a través de múltiples herramientas. La tarjeta describe la suite completa de evaluaciones previas al despliegue, el Preparedness Framework de OpenAI y el resultado de probar el modelo con cerca de 200 socios de acceso anticipado antes del lanzamiento. OpenAI trata los resultados de GPT-5.5 como buenos proxies para GPT-5.5 Pro (mismo modelo subyacente con cómputo paralelo en tiempo de prueba), evaluando este último por separado solo cuando el ajuste puede alterar materialmente el riesgo.

En seguridad y robustez, GPT-5.5 rinde a la par de GPT-5.4-Thinking en contenido no permitido y entradas de imagen, mejora en la evitación de acciones destructivas accidentales (preservar el trabajo del usuario en tareas agénticas de larga duración) y mantiene alta resistencia a jailbreaks e inyección de prompts. En salud, mejora en HealthBench, HealthBench Hard y HealthBench Professional (puntajes ahora ajustados por longitud de respuesta) y en benchmarks dinámicos de salud mental con simulaciones adversarias de usuario. En alucinaciones, sobre casos marcados por usuarios como factualmente erróneos, sus afirmaciones individuales son 23% más propensas a ser correctas y sus respuestas contienen un error fáctico 3% menos a menudo.

La sección de alineamiento es central: OpenAI mide comportamientos engañosos sobre prompts representativos, evalúa agentes de programación por desalineamiento remuestreando tráfico interno, y desarrolla un monitor de desalineamiento con buena recall sobre niveles de severidad. Encuentra que GPT-5.5 es ligeramente más desalineado que GPT-5.4-Thinking en varias categorías, pero casi todo es de baja severidad; no se halló desalineamiento severo novedoso. Introduce además evaluaciones de monitorización (CoT monitorability) y controlabilidad de la cadena de pensamiento: GPT-5.5 muestra menor controlabilidad de su CoT, lo que se interpreta como deseable (menor capacidad de ocultar su razonamiento a los monitores).

En el Preparedness Framework, GPT-5.5 se clasifica como High capability en el dominio Biológico y Químico (con sus salvaguardas asociadas) y como High pero por debajo de Critical en Ciberseguridad, con salvaguardas reforzadas. Para auto-mejora de IA, las evaluaciones indican que no tiene una posibilidad plausible de alcanzar el umbral High. La tarjeta detalla numerosos benchmarks de capacidad bio/química y ciber (incluyendo evaluaciones externas de SecureBio, US CAISI, UK AISI, Irregular y Apollo Research) y las salvaguardas desplegadas.

## Puntos clave

- GPT-5.5 es un modelo de razonamiento (cadena de pensamiento interna) orientado a tareas agénticas complejas de múltiples pasos y uso de herramientas.
- Seguridad de contenido no permitido y entradas de imagen: a la par de GPT-5.4-Thinking; regresiones menores no significativas.
- Mejora en evitar acciones destructivas accidentales en flujos agénticos largos (revertir su propio trabajo y proteger el del usuario).
- Robustez: alta resistencia a jailbreaks multiturno y a inyección de prompts en conectores (0.963).
- Salud: mejoras en HealthBench (puntajes ajustados por longitud) y en benchmarks dinámicos adversarios de salud mental.
- Alucinaciones: afirmaciones 23% más correctas y 3% menos respuestas con error fáctico en casos marcados por usuarios.
- Alineamiento: ligeramente más desalineado que GPT-5.4 pero casi todo de baja severidad; sin desalineamiento severo novedoso; monitor con recall ~97.6% en severidad 3.
- Monitorización (CoT): menor controlabilidad de la cadena de pensamiento se interpreta como positivo para la fiabilidad del monitoreo.
- Preparedness: High en Biológico/Químico y High (sub-Critical) en Ciberseguridad; sin riesgo plausible de auto-mejora High.
- Evaluación de sesgo (first-person fairness): a la par de modelos previos en estereotipos por género.

## Contexto

Las "system cards" son informes técnicos publicados por el propio proveedor del modelo y, por tanto, constituyen evidencia de parte: documentan qué evaluó OpenAI y cómo, pero no son auditorías independientes. Su valor radica en transparentar metodologías de evaluación de seguridad, alineamiento y capacidades de frontera, y en mostrar el marco de gobernanza interna (Preparedness Framework) con el que la empresa decide despliegues. Resulta relevante para discusiones sobre seguridad de IA, supervisión humana de agentes, riesgos de desalineamiento, alucinaciones y la fiabilidad/monitorización de sistemas de razonamiento autónomos.

## Notas relacionadas

- [[concepts/seguridad-de-ia]]
- [[concepts/capacidades-de-ia]]
- [[concepts/alineamiento-de-ia]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/agentes-de-ia]]
- [[concepts/supervision-humana]]
- [[concepts/etica-de-la-ia]]
- [[concepts/inteligencia-artificial]]
