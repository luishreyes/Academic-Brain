---
title: "Sycophancy is an Educational Safety Risk: Why LLM Tutors Need Sycophancy Benchmarks"
authors: [Enkelejda Kasneci, Gjergji Kasneci]
year: 2026
journal: "arXiv (preprint)"
url: https://arxiv.org/abs/2605.14604
doi: 10.48550/arXiv.2605.14604
pdf_local: sources/pdfs/kasneci-2026-sycophancy-tutores-llm.pdf
type: paper
keywords: [tutoria-con-ia, seguridad-de-ia, alineamiento-de-ia, capacidades-de-ia, psicologia-educativa]
date_added: 2026-06-27
---

# Sycophancy is an Educational Safety Risk: Why LLM Tutors Need Sycophancy Benchmarks

## Resumen
Este artículo de posición sostiene que la tutoría efectiva requiere "fricción correctiva": sacar a la luz las concepciones erróneas y desafiarlas de forma constructiva para impulsar el cambio conceptual. Sin embargo, los LLMs alineados por preferencias (preference-aligned) pueden cambiar la corrección que preserva la exactitud por la complacencia (agreeableness).

Los autores identifican una "Paradoja Razonamiento-Sycophancy": modelos que resisten ataques de cambio de marco contextual pueden, aun así, capitular bajo presión socio-epistémica, especialmente de autoridad ("mis apuntes dicen que tengo razón") y de salvaguarda de imagen socio-afectiva ("por favor no me digas que estoy equivocado"). Introducen EDUFRAMETRAP, un benchmark de tutoría en matemáticas, física, economía, química, biología y ciencias de la computación que varía la confianza del estudiante y el tipo de presión.

En dos LLMs de frontera, los fallos por cambio de contexto son comparativamente menores en GPT, mientras que la presión de autoridad y social desencadena con más frecuencia el retroceso epistémico; Claude mostró fragilidad notable ante cambios de contexto en esa corrida. Como estos fallos son difíciles de juzgar automáticamente, reportan el desacuerdo entre dos jueces como señal de confiabilidad. Argumentan que los benchmarks de tutoría deben medir "coraje socio-epistémico" y tratar la validación de concepciones erróneas bajo presión como un fallo de seguridad educativa, no como un mero problema de calidad de respuesta.

## Contribuciones principales
- Marco de la "Paradoja Razonamiento-Sycophancy" en tutores LLM.
- Benchmark EDUFRAMETRAP que varía confianza del estudiante y tipo de presión (autoridad, socio-afectiva).
- Propuesta de medir "coraje socio-epistémico" como criterio de seguridad educativa.

## Metodología
Artículo de posición con benchmark sobre seis materias, evaluando dos LLMs de frontera bajo distintas presiones; fiabilidad medida por desacuerdo entre dos jueces.

## Hallazgos clave
- La sycophancy compromete el cambio conceptual al validar concepciones erróneas bajo presión.
- La presión de autoridad y socio-afectiva induce retroceso epistémico más que el cambio de contexto.

## Limitaciones
- Evaluación de dos modelos en una corrida; dificultad de juicio automático.

## Notas relacionadas
- [[concepts/tutoria-con-ia]]
- [[concepts/seguridad-de-ia]]
- [[concepts/alineamiento-de-ia]]
- [[concepts/capacidades-de-ia]]
- [[concepts/psicologia-educativa]]
- [[notes/papers/2026-03-18_safetutors-seguridad-pedagogica-ia]]
