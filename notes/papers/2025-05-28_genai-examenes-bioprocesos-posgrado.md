---
title: "Generative AI in graduate bioprocess engineering exams: Is attention all students need?"
authors: [Zhengyang Xiao, Eunseo Lee, Sophia Yuan, Roland Ding, Yinjie J. Tang]
year: 2025
journal: Education for Chemical Engineers
url: https://doi.org/10.1016/j.ece.2025.05.006
doi: 10.1016/j.ece.2025.05.006
pdf_local: sources/pdfs/capability-reliability/xiao_2025_genai-bioprocess-engineering-exams.pdf
type: paper
keywords: [inteligencia-artificial, capacidades-de-ia, educacion-en-ingenieria, evaluacion-educativa, integridad-academica, alfabetizacion-en-ia, retroalimentacion-con-ia, supervision-humana, equidad-educativa, ingenieria-quimica, pensamiento-critico]
date_added: 2026-06-27
---

# Generative AI in graduate bioprocess engineering exams: Is attention all students need?

## Resumen

Este estudio evalúa el rendimiento de modelos de lenguaje de gran tamaño (LLMs) en exámenes de ingeniería de bioprocesos a nivel de posgrado, en un curso (EECE 506) de la Washington University in St. Louis con 24 estudiantes de posgrado y 4 de secundaria. Los exámenes incluían preguntas de opción múltiple, de respuesta corta y derivaciones de ecuaciones. El diseño experimental contrastó dos partes con las mismas preguntas: una primera parte (Parte A) resuelta solo con libro de texto y apuntes, y una segunda (Parte B) en la que se permitía usar GPT-4o para revisar las preguntas difíciles. Además, doce LLMs (nueve en la nube y tres desplegados localmente) resolvieron de forma autónoma los problemas de examen.

Los resultados muestran que permitir el uso de LLMs elevó la puntuación promedio en un 36 % respecto a los exámenes tradicionales, y que el desempeño mejoró conforme los estudiantes ganaban experiencia formulando prompts —beneficio especialmente notable en estudiantes sin formación previa en biología y en estudiantes con discapacidades cognitivas. Sin embargo, en el primer examen un mayor uso de IA se correlacionó con menores puntuaciones totales, lo que evidencia que usar bien estas herramientas requiere práctica y criterio sobre cuándo y por qué emplearlas.

En condiciones optimizadas (zero-shot por usuarios expertos), GPT-4o obtuvo cerca de 70/100, mientras que modelos más avanzados (OpenAI o1, o3, GPT-4.5, Qwen3-235B-A22B, DeepSeek R1) superaron 84 puntos, batiendo al 96 % de los examinados humanos. Esto plantea problemas de equidad: los estudiantes con acceso a modelos de pago o a mejor hardware obtienen una ventaja injusta. Los autores también encontraron que los LLMs son calificadores poco fiables (discrepancias de 27-46 % frente a un calificador humano) y proponen pautas para diseñar preguntas resistentes a la IA, llamando a una reforma urgente de la educación en bioprocesos que integre la alfabetización en LLMs mediante actividades prácticas y consideraciones éticas.

## Contribuciones principales

- Análisis cuantitativo del rendimiento de LLMs de última generación en exámenes reales de posgrado de ingeniería de bioprocesos (no solo evaluación cualitativa o teórica).
- Evidencia de un aumento promedio del 36 % en las puntuaciones cuando se permite usar LLMs, y de mejora adicional con la experiencia de uso.
- Comparativa de doce LLMs (en la nube y locales) que muestra que incluso modelos pequeños desplegados localmente pueden superar el promedio de la clase.
- Conjunto de pautas para diseñar preguntas difíciles para LLMs (interpretación de rutas biológicas gráficas, preguntas conceptuales en negativo, cálculos numéricos complejos, problemas abiertos de investigación).
- Un módulo docente con actividades prácticas sobre LLMs (incluida una demostración de GraphRAG) para integrar la alfabetización en IA en el currículo.

## Metodología

Se construyó un conjunto de preguntas del libro "Bioprocess Engineering: Basic Concepts" (Shuler y Kargi, 2002), clasificadas en conceptuales, cálculos numéricos y derivaciones de ecuaciones; estas fueron resueltas por GPT-4o y o1-preview con un prompt estandarizado. Se diseñaron dos exámenes en aula con estructura A/B (sin IA vs. con GPT-4o), separados por un mes para medir el efecto del aprendizaje. Doce LLMs resolvieron los exámenes en condición zero-shot. Las pruebas estadísticas (Python) incluyeron correlación de Pearson, pruebas t de una y dos muestras y prueba de Levene, comparando subgrupos según formación previa en biología.

## Hallazgos clave

- Los LLMs alcanzan ~100 % de acierto en preguntas conceptuales, pero GPT-4o solo resolvió 28 % de los cálculos numéricos y o1-preview 43 %; errores típicos: cálculos erróneos (factores de diez) y aplicación de ecuaciones fuera de contexto.
- Permitir GPT-4o subió el promedio de 48.9 a 66.3 sobre 100; las preguntas de respuesta corta mejoraron mucho (p < 0.001), las de opción múltiple poco.
- Los estudiantes con menor puntuación base se beneficiaron más de la IA, sugiriendo que la IA puede reducir brechas; estudiantes sin biología previa lograron mayores ganancias.
- Modelos avanzados superaron 84/100, batiendo al 96 % de humanos; modelos locales (DeepSeek R1 14B, Qwen QwQ) superaron el promedio de la clase, comprometiendo incluso exámenes sin internet.
- Como calificadores, los LLMs son poco fiables (discrepancias de 27-46 % frente al humano) y su mecanismo de atención no capta bien marcas manuscritas en exámenes escaneados.
- Tipos de pregunta resistentes a LLMs: interpretación gráfica de rutas, preguntas conceptuales en negativo, cálculos con paradojas (p. ej., cofactor NAD insuficiente), confusión de términos similares (ribulosa/ribosa, cAMP/AMP).

## Limitaciones

- El estudio no pretende ser un benchmark riguroso de LLMs: las salidas son estocásticas y dependen de cuantización, temperatura, top-k y longitud de contexto; reportan un caso de uso típico zero-shot.
- Muestra pequeña (24 estudiantes de posgrado y 4 de secundaria) en un único curso e institución.
- El factor limitante principal para que los estudiantes aprovechen los LLMs fue el tiempo de examen, ya que los modelos de razonamiento (chain-of-thought) requieren más tiempo de inferencia.

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/capacidades-de-ia]]
- [[concepts/educacion-en-ingenieria]]
- [[concepts/evaluacion-educativa]]
- [[concepts/integridad-academica]]
- [[concepts/alfabetizacion-en-ia]]
- [[concepts/retroalimentacion-con-ia]]
- [[concepts/supervision-humana]]
- [[concepts/equidad-educativa]]
- [[concepts/ingenieria-quimica]]
- [[concepts/pensamiento-critico]]
