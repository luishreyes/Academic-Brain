---
type: concept
keyword: seguridad-de-procesos
aliases: [process safety, process hazard analysis, PHA, HAZOP, STPA, hazard analysis, análisis de peligros, QRA, inherently safer design]
---

# Seguridad de procesos

Disciplina de la ingeniería química dedicada a prevenir incidentes en plantas de proceso mediante el análisis sistemático de peligros y operabilidad; incluye HAZOP, STPA, análisis de peligros de proceso (PHA), análisis cuantitativo de riesgo (QRA) y diseño inherentemente más seguro.

## Qué dice la literatura

Dos estudios técnicos, publicados el mismo año en *Safety Science*, evalúan de forma independiente si los LLM pueden ejecutar el núcleo del análisis de peligros de proceso — y llegan a una conclusión convergente pese a usar métodos distintos. Charalampidou et al. (2024) aplican ChatGPT-4 a las etapas 3 y 4 de STPA sobre el dron de rescate ROLFER: de 138 acciones de control inseguras (UCA) generadas, 69 resultaron incorrectas, mal categorizadas o necesitadas de más contexto —una de cada dos no aceptable, incluidas 4 alucinaciones—, aunque el tiempo total cayó de 4-5 semanas a menos de 16 horas y el modelo fue genuinamente útil generando escenarios de pérdida y preguntas de comprensión del sistema. Lee et al. (2026) prueban cuatro LLM (GPT4o, GPT4o-mini, LLAMA 3.2, Gemini 2.0) generando hojas HAZOP completas a partir de un P&ID: la similitud semántica con la hoja de referencia experta es alta y homogénea (F1 86,2-86,7%), pero la proporción de escenarios semánticamente válidos es baja (19-37%) y las salvaguardas propuestas están sesgadas hacia medidas procedimentales, las menos robustas en la jerarquía de gestión de riesgo. El patrón que comparten ambos estudios es el mismo: fluidez superficial alta, fiabilidad baja en el núcleo del análisis de peligros — ninguno de los dos considera que un LLM pueda validar HAZOP o STPA sin supervisión experta.

Las tres fuentes institucionales muestran cómo el sector responde a esa misma tensión desde la regulación y la formación, no desde la técnica. La guía de acreditación de IChemE (2024) convierte la seguridad de procesos en un resultado de aprendizaje de cumplimiento obligatorio (Appendix A2.6/B2.6) justo en la edición que más énfasis pone en incorporar IA y tecnologías digitales al currículo. El Código de Conducta y Ética de IChemE (2025) traduce esa tensión en una norma explícita: su Principio 2 exige "priorizar la seguridad" usando IA de forma transparente y ética, documentando cómo y para qué se usó y qué controles de calidad y seguridad se aplicaron — una respuesta institucional directa al tipo de fallo que Charalampidou et al. y Lee et al. documentan empíricamente. Quince et al. (2025) sugieren que esta cautela ya está internalizada por la próxima generación: de 48 estudiantes de ingeniería en cinco disciplinas, el 100% identificó espontáneamente "control y supervisión" y "toma de decisiones bajo riesgo e incertidumbre" como las consideraciones centrales al razonar sobre fallas fatales atribuibles a GenAI, aunque con puntos ciegos notables (propiedad de datos, poder y hegemonía, 0% de menciones) que revelan un encuadre todavía centrado en el uso inmediato y no en la gobernanza sistémica de la IA.

## Notas que usan este concepto
- [[notes/papers/2024-07-16_chatgpt4-stpa-analisis-de-peligros]]
- [[notes/papers/2026-06-27_llm-automatizan-hazop]]
- [[notes/papers/2025-01-01_efce-white-paper-ia-ingenieria-quimica]]
- [[notes/articles/2025-01-01_icheme-codigo-conducta-etica]]
- [[notes/papers/2026-06-28_percepciones-estudiantes-genai-ingenieria]]
- [[notes/articles/2024-05-01_icheme-acreditacion-programas-ingenieria-quimica]]
