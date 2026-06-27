---
title: "QCBench: Evaluating Large Language Models on Domain-Specific Quantitative Chemistry"
authors: [Jiaqing Xie, Weida Wang, Ben Gao, Zhuo Yang, Haiyuan Wan, Shufei Zhang, Tianfan Fu, Yuqiang Li]
year: 2025
journal: Journal of Chemical Information and Modeling
url: https://github.com/jiaqingxie/QCBench
doi: 
pdf_local: sources/pdfs/capability-reliability/xie_2025_qcbench-quantitative-chemistry.pdf
type: paper
keywords: [capacidades-de-ia, razonamiento-cuantitativo-llm, inteligencia-artificial, quimica-computacional, alucinaciones-de-ia]
date_added: 2026-06-27
---

# QCBench: Evaluating Large Language Models on Domain-Specific Quantitative Chemistry

## Resumen
La química cuantitativa es central para la investigación química moderna, pero la capacidad de los grandes modelos de lenguaje (LLMs) para realizar sus cálculos rigurosos, paso a paso, sigue poco explorada. Para llenar este vacío, los autores proponen **QCBench**, un benchmark orientado a química cuantitativa con 350 problemas computacionales en 7 subcampos (química analítica, bio-orgánica, general, inorgánica, física, de polímeros y cuántica).

Para evaluar sistemáticamente las habilidades de razonamiento matemático de los LLMs, los problemas se clasifican en tres niveles (fácil, medio, difícil). Cada problema, basado en escenarios químicos realistas, está estructurado para impedir atajos heurísticos y exigir razonamiento numérico explícito. QCBench permite un diagnóstico fino de las debilidades computacionales y revela limitaciones específicas de cada modelo según el nivel de dificultad.

Las evaluaciones en 24 LLMs muestran una degradación consistente del rendimiento al aumentar la complejidad de la tarea, evidenciando la brecha actual entre la fluidez lingüística y la precisión del cálculo científico. El trabajo sienta las bases para mejoras futuras como el fine-tuning adaptado al dominio o la integración multimodal.

## Contribuciones principales
- QCBench: benchmark de 350 problemas de química cuantitativa en 7 subcampos y 3 niveles.
- Diagnóstico fino de debilidades de cálculo de los LLMs por dificultad.
- Evaluación de 24 LLMs evidenciando la brecha fluidez-precisión numérica.

## Metodología
Construcción de un benchmark de problemas cuantitativos estructurados y evaluación comparativa de 24 LLMs por nivel de dificultad.

## Hallazgos clave
- El rendimiento de los LLMs se degrada consistentemente al aumentar la complejidad.
- Persiste una brecha entre la fluidez lingüística y la exactitud del cálculo científico.

## Limitaciones
- Cobertura acotada a 7 subcampos y 350 problemas.

## Notas relacionadas
- [[concepts/capacidades-de-ia]]
- [[concepts/razonamiento-cuantitativo-llm]]
- [[concepts/inteligencia-artificial]]
- [[concepts/quimica-computacional]]
- [[concepts/alucinaciones-de-ia]]
