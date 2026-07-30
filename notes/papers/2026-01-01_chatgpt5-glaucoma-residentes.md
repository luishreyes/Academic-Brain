---
title: "Assessing a large language model for glaucoma knowledge: ChatGPT-5 versus residents"
authors: [Mauro Gobira, Rodrigo Moreira, Flavio J. L. Galhardo Carvalho Filho, Kevin Waquim Pessoa Carvalho, Francisco N. Murta, Lucas Antônio Avelar Carvalho, Rubens Belfort Jr., Ivan M. Tavares]
year: 2026
journal: Arquivos Brasileiros de Oftalmologia
url: https://doi.org/10.5935/0004-2749.2025-0283
doi: 10.5935/0004-2749.2025-0283
pdf_ref: gobira-2026-chatgpt5-glaucoma-residentes.pdf
sha256: 6879f5fe8f90efb210d33a85c41cf5e1325d1dd50a3e282c8efe845f38c6a392
type: paper
keywords: [capacidades-de-ia, educacion-medica, evaluacion-educativa, alucinaciones-de-ia, ingenieria-de-prompts, procesamiento-de-lenguaje-natural, inteligencia-artificial]
date_added: 2026-07-09
---

# Assessing a large language model for glaucoma knowledge: ChatGPT-5 versus residents

## Resumen
El glaucoma es una neuropatía óptica progresiva y la principal causa mundial de ceguera irreversible, con una fracción alta de casos sin diagnosticar. Los grandes modelos de lenguaje (LLM) se han propuesto como apoyo a la síntesis de conocimiento y a la decisión clínica en este dominio, pero la evidencia empírica que los compara con médicos en formación en oftalmología —y en particular en glaucoma— era escasa. Este estudio de un grupo del Instituto da Visão y la Escola Paulista de Medicina (UNIFESP, São Paulo) evalúa a ChatGPT-5 frente a residentes de oftalmología sobre un conjunto estandarizado de preguntas de selección múltiple de glaucoma.

Se trata de un estudio transversal comparativo con 189 preguntas de selección múltiple (MCQ) de glaucoma, solo texto y con clave de respuesta única, tomadas del banco público Cybersight (Orbis International) y escritas por subespecialistas en glaucoma. ChatGPT-5 fue evaluado en condiciones estandarizadas —cada ítem en un chat nuevo para evitar arrastre de contexto, con una instrucción fija y salida restringida a la letra de la opción, sin cadena de pensamiento ni preguntas de aclaración— entre el 8 y el 9 de agosto de 2025. Los mismos 189 ítems se administraron de forma supervisada e individual, sin acceso a recursos externos, a seis residentes de un único programa brasileño (dos de PGY-1, dos de PGY-2 y dos de PGY-3). Las comparaciones se hicieron ítem por ítem con la prueba exacta de McNemar y odds ratios emparejados con corrección de Haldane-Anscombe.

ChatGPT-5 acertó 164 de 189 ítems (86,8%; IC 95%: 81,2-90,9) frente a una exactitud agregada de los residentes de 62,9% (713/1.134; IC 95%: 60,0-65,6), una diferencia absoluta de +23,9 puntos porcentuales. El modelo superó incluso al mejor residente individual (76,7%) por 10,1 puntos, y venció a los seis residentes en todas las comparaciones cara a cara, con odds ratios emparejados de 1,84 a 13,15 y valores p ≤0,023. El patrón de errores es informativo: en 17 de 189 ítems (9,0%) el modelo acertó mientras menos de la mitad de los residentes acertaba ("LLM-only wins", ítems difíciles para los humanos), pero de los 25 ítems que el modelo falló, los residentes lograron ≥50% de acierto en 23 —es decir, los errores del LLM se concentraron en preguntas que la mayoría de los residentes resolvía sin dificultad.

Los autores presentan el trabajo como el primer estudio médico que evalúa ChatGPT-5 en oftalmología y glaucoma, y enmarcan el resultado dentro de una serie previa de evaluaciones (GPT-4 con 82,4% en el autoevaluación del BCSC de la AAO, 81% en OKAP, 92,9% de GPT-4o en el examen taiwanés) que muestra una mejora sostenida por versión de modelo y una fuerte dependencia del banco de preguntas. La conclusión es deliberadamente acotada: el desempeño respalda el uso de los LLM como herramientas auxiliares de estudio, enseñanza y revisión de ítems en educación de subespecialidad, no como sustituto de la formación clínica supervisada, y los hallazgos no deben extrapolarse a escenarios diagnósticos o de decisión clínica.

## Contribuciones principales
- Primera evaluación publicada de ChatGPT-5 en oftalmología y glaucoma, sobre ítems de subespecialidad escritos por especialistas.
- Diseño de comparación emparejada ítem por ítem (McNemar) contra comparadores humanos individuales, en lugar de comparar solo promedios agregados.
- Caracterización del patrón asimétrico de errores: identificación de "LLM-only wins" en ítems difíciles para residentes y, a la vez, de fallos del modelo concentrados en ítems fáciles para humanos.
- Protocolo de evaluación explícito y reproducible (un chat nuevo por ítem, instrucción fija, salida solo de letra) que aísla el conocimiento del modelo del efecto de arrastre de contexto y de la interacción conversacional.
- Síntesis comparativa del desempeño de versiones sucesivas de LLM en bancos de preguntas oftalmológicos y de glaucoma, que documenta la dependencia del resultado respecto del banco y de la versión del modelo.

## Metodología
Estudio transversal comparativo de desempeño. Corpus de 189 MCQ de glaucoma públicamente disponibles del banco Cybersight (Orbis International), solo texto (sin imágenes), redactadas por subespecialistas y con clave de mejor respuesta única. Ejecución del LLM ("ChatGPT-5", OpenAI) el 8-9 de agosto de 2025 a través de la interfaz web oficial, con cada ítem en un chat vacío separado y precedido por una instrucción fija que pedía únicamente la letra de la opción elegida, sin explicación, sin preguntas de seguimiento ni solicitudes de cadena de pensamiento. Comparadores humanos: seis residentes de oftalmología de un único programa brasileño (dos PGY-1, dos PGY-2, dos PGY-3), evaluados individualmente y con supervisión, sin acceso a recursos externos ni exposición previa a los ítems o la clave, en una sola sesión entre el 8 y el 20 de agosto. Análisis: proporciones de exactitud con intervalos de confianza de Wilson al 95%; comparaciones emparejadas por ítem con prueba de McNemar y valores p binomiales exactos bilaterales sobre pares discordantes; odds ratio emparejado (OR = b/c) con corrección de Haldane-Anscombe e IC 95% en escala logarítmica; descripción de la diferencia por ítem entre el acierto del LLM y la exactitud media de los residentes. α = 0,05 bilateral. Análisis en Python 3.11 (pandas, NumPy, SciPy, Matplotlib). Aprobado por el comité de ética del Centro Universitário FMABC.

## Hallazgos clave
- ChatGPT-5: 164/189 correctas, 86,8% (IC 95%: 81,2-90,9).
- Residentes en agregado: 62,9% (713/1.134; IC 95%: 60,0-65,6); diferencia absoluta de +23,9 puntos porcentuales a favor del modelo.
- Mejor residente individual: 76,7%; el modelo lo supera por 10,1 puntos. Peor residente: 45,0%.
- El modelo superó a los seis residentes en las comparaciones emparejadas de McNemar, con odds ratios de 1,84 (IC 95%: 1,10-3,08) a 13,15 (IC 95%: 5,93-29,20) y todos los p ≤0,023.
- Superioridad sobre el desempeño medio de los residentes en 164/189 ítems (86,8%) e inferioridad en 25/189 (13,2%), sin empates dado el número impar efectivo de respuestas por ítem.
- "LLM-only wins" en 17/189 ítems (9,0%): el modelo acertó donde menos de la mitad de los residentes lo hizo.
- De los 25 ítems fallados por el modelo, los residentes acertaron ≥50% en 23: los errores del LLM se concentran en preguntas que la mayoría de humanos resuelve.
- El desempeño se sitúa en la línea ascendente documentada por versión de modelo (GPT-3.5 → GPT-4 → GPT-4o → GPT-5) y depende fuertemente del banco de preguntas usado.

## Limitaciones
- Solo ítems de texto: no se evaluaron tareas dependientes de imagen (retinografía, OCT/OCTA, campo visual, gonioscopia, video de lámpara de hendidura), que son centrales en el manejo real del glaucoma.
- Cohorte de comparación pequeña y de un solo centro: seis residentes de un único programa brasileño, lo que puede no representar otros entornos de formación.
- Un único banco de preguntas (Cybersight) y una única versión de modelo evaluada en un solo momento; no se midió variabilidad longitudinal, calibración ni corridas repetidas.
- No se evaluaron desenlaces clínicos posteriores; los autores advierten explícitamente que los resultados no deben extrapolarse a escenarios diagnósticos o de decisión clínica.
- El protocolo de solo-letra elimina la explicación del modelo, de modo que no se puede auditar el razonamiento ni distinguir acierto por conocimiento de acierto por reconocimiento del formato de la pregunta.

## Notas relacionadas
- [[concepts/capacidades-de-ia]]
- [[concepts/educacion-medica]]
- [[concepts/evaluacion-educativa]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/ingenieria-de-prompts]]
- [[concepts/procesamiento-de-lenguaje-natural]]
- [[concepts/inteligencia-artificial]]
