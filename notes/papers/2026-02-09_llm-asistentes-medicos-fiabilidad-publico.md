---
title: "Reliability of LLMs as medical assistants for the general public: a randomized preregistered study"
authors: [Andrew M. Bean, Rebecca Elizabeth Payne, Guy Parsons, Hannah Rose Kirk, Juan Ciro, Rafael Mosquera-Gómez, Sara Hincapié M, Aruna S. Ekanayaka, Lionel Tarassenko, Luc Rocher, Adam Mahdi]
year: 2026
journal: Nature Medicine
url: https://doi.org/10.1038/s41591-025-04074-y
doi: 10.1038/s41591-025-04074-y
pdf_ref: bean-2026-llm-asistentes-medicos-fiabilidad.pdf
sha256: 515ac9c807bc8b219e2572be651d0adfc197bbd9fabfbb2df321119bcd4ffe71
type: paper
keywords: [capacidades-de-ia, ensayo-controlado-aleatorio, supervision-humana, pacientes-virtuales, confianza-en-la-ia, seguridad-de-ia, salud-y-sociedad, inteligencia-artificial]
date_added: 2026-07-05
---

# Reliability of LLMs as medical assistants for the general public: a randomized preregistered study

## Resumen
Los proveedores de salud exploran usar grandes modelos de lenguaje (LLM) para dar consejo médico al público, y estos modelos ya alcanzan puntajes casi perfectos en exámenes de licencia médica. Este estudio, un experimento aleatorizado y preregistrado con 1.298 participantes del Reino Unido, prueba si ese rendimiento se traduce en ayuda real cuando personas comunes usan los modelos. Cada participante debía identificar la condición subyacente y la conducta a seguir (disposition) en uno de diez escenarios médicos diseñados y validados por médicos. Se asignaron al azar a recibir asistencia de un LLM (GPT-4o, Llama 3, Command R+) o a usar los métodos que emplearían normalmente en casa (control).

El hallazgo central es una brecha marcada entre la capacidad del modelo y su fiabilidad en manos del público. Probados solos, los LLM resolvían los escenarios con alta precisión: identificaban la condición correcta en 94,9% de los casos y la disposición en 56,3% en promedio. Pero los participantes que usaban esos mismos modelos identificaron condiciones relevantes en menos del 34,5% de los casos y la disposición en menos del 44,2%, sin superar al grupo de control. Al revisar las transcripciones, los autores atribuyen el problema a fallos en la interacción humano-LLM: los usuarios entregaban información incompleta, los modelos malinterpretaban las consultas y los participantes no seguían de forma consistente las recomendaciones.

Un segundo resultado clave es metodológico: los benchmarks estándar de conocimiento médico y las interacciones con pacientes simulados —usados habitualmente para certificar seguridad antes del despliegue— no predicen los fallos que aparecen con participantes humanos reales. Los autores concluyen recomendando pruebas sistemáticas con usuarios humanos para evaluar las capacidades interactivas antes de desplegar LLM como asistentes médicos para el público.

## Contribuciones principales
- Evidencia experimental (RCT preregistrado, N = 1.298) de que la alta capacidad de los LLM en benchmarks médicos no se traduce en ayuda efectiva para el público general.
- Identificación de la interacción humano-LLM (no el conocimiento del modelo) como el cuello de botella: información incompleta del usuario, malinterpretación del modelo y baja adherencia a las recomendaciones.
- Demostración de que los benchmarks de conocimiento y los pacientes simulados no predicen los fallos observados con usuarios humanos reales.

## Metodología
Estudio aleatorizado y preregistrado con 1.298 participantes del Reino Unido, estratificados por demografía para parecerse a la población adulta nacional. Diez escenarios clínicos creados por un grupo de tres médicos (que acordaron por unanimidad la disposición correcta) y con diagnósticos diferenciales aportados por otros cuatro médicos. Cuatro brazos: tres con un LLM asignado (GPT-4o, Llama 3, Command R+) y un control con métodos habituales. Se compararon además con el rendimiento de los LLM solos y con benchmarks de licencia médica emparejados a los escenarios.

## Hallazgos clave
- LLM solos: 94,9% de condiciones y 56,3% de disposiciones correctas.
- Participantes asistidos por LLM: <34,5% de condiciones y <44,2% de disposiciones, sin mejorar sobre el control.
- Los fallos provienen de la interacción (información incompleta, malentendidos, no seguir el consejo), no de la falta de conocimiento del modelo.
- Los benchmarks estándar y los pacientes simulados no anticipan estos fallos: hacen falta pruebas con usuarios humanos.

## Limitaciones
- Escenarios controlados y basados en viñetas, no encuentros clínicos reales; la generalización a situaciones de salud auténticas es limitada.
- Muestra de un solo país (Reino Unido) y modelos específicos de 2024-2025; los resultados podrían cambiar con interfaces o modelos distintos.
- Mide identificación de condición y disposición, no desenlaces de salud reales de los participantes.

## Notas relacionadas
- [[concepts/capacidades-de-ia]]
- [[concepts/ensayo-controlado-aleatorio]]
- [[concepts/supervision-humana]]
- [[concepts/pacientes-virtuales]]
- [[concepts/confianza-en-la-ia]]
- [[concepts/seguridad-de-ia]]
- [[concepts/salud-y-sociedad]]
- [[concepts/inteligencia-artificial]]
