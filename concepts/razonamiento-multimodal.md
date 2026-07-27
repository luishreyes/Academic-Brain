---
type: concept
keyword: razonamiento-multimodal
aliases: [multimodal reasoning, multimodal LLM, razonamiento multimodal, vision-language models]
---

# Razonamiento multimodal

Capacidad de los modelos de IA para integrar y razonar sobre múltiples modalidades (texto, imágenes, diagramas, fórmulas); incluye la interpretación de figuras científicas, diagramas de proceso y notación matemática.

## Qué dice la literatura

Las tres fuentes del corpus abordan el razonamiento multimodal desde ciencias duras —física, termodinámica, química— donde interpretar un diagrama o mapear una geometría a una cantidad física no es un adorno sino el núcleo mismo de la tarea, y sin embargo llegan a valoraciones muy distintas de cuán resuelta está esa capacidad. Tufino y Gregorcic la muestran funcionando: su Gem de Gemini 2.5 Pro, configurado mediante "role engineering" como tutor socrático, interpreta correctamente un diagrama de fuerzas dibujado a mano por un estudiante y lo confronta contra reglas notacionales específicas (notación de dos subíndices) cargadas en un archivo de "Knowledge", guiándolo hasta corregir las etiquetas erróneas. Geißler et al., en cambio, la someten a prueba sistemática y encuentran una falla profunda: en su benchmark UTQA, 19 LLMs contemporáneos promedian 67% en preguntas de solo texto sobre termodinámica pero caen a 32% —cerca del azar— en preguntas que exigen leer diagramas p–V, T–S o H–p, y ni siquiera el mejor modelo (gpt-o3, 82% global) alcanza el umbral de fiabilidad del 95% que los autores fijan como mínimo para tutoría no supervisada.

La tensión entre ambos hallazgos es reveladora antes que contradictoria. Geißler et al. nombran el problema con precisión: un déficit de "binding" multimodal —los modelos sí extraen rasgos visuales de bajo nivel (ejes, curvatura, segmentación) pero fallan al ligar esa geometría a su significado termodinámico, como reconocer que un área con signo bajo una curva p–V representa trabajo. El caso exitoso de Tufino y Gregorcic no refuta esto; más bien sugiere una condición para que el binding funcione: su diagrama es único, cuidadosamente curado por el instructor, acompañado de reglas notacionales explícitas y evaluado dentro de un diálogo iterativo donde el propio tutor puede detectar y corregir errores sobre la marcha. Es, en otras palabras, razonamiento multimodal fuertemente andamiado, no la capacidad genérica que UTQA pone a prueba con 17 diagramas variados y sin apoyo adicional. Los mismos autores del caso exitoso lo admiten indirectamente al insistir en que el desempeño de la IA es una "simulación convincente de comprensión", no cognición genuina, y en que persiste una tasa de inexactitud factual —eco directo de los patrones de error que Geißler et al. documentan con más rigor cuantitativo (anclaje a valores de libro de texto, uso indebido de plantillas cuasiestáticas).

Yuriev, Wink y Holme, desde el editorial que introduce el marco CATALyST para química, confirman que este panorama aún es incipiente: ubican la "multimodalidad" (capacidad de manejar entradas visuales) como un avance tecnológico apenas emergente dentro de la dimensión "Technology", junto al razonamiento sobre mecanismos de reacción orgánica, y señalan que el impacto de la IA generativa sobre las "operaciones cognitivas" —donde encajaría el razonamiento multimodal— sigue siendo, a la fecha del editorial, un área abierta más que resuelta. Leídas juntas, las tres fuentes trazan una misma curva: la multimodalidad es la frontera donde la IA generativa en ciencias duras se muestra más prometedora en demostraciones acotadas y más frágil cuando se evalúa a escala.

## Notas que usan este concepto
- [[notes/papers/2026-06-27_utqa-benchmark-llm-termodinamica]]
- [[notes/articles/2024-08-13_dawn-genai-quimica-educacion]]
- [[notes/papers/2025-11-01_tutor-socratico-ia-fisica-personalizable]]
- [[notes/papers/2026-01-01_chatgpt-estatica-ingenieria]]
- [[notes/papers/2026-07-21_ia-formacion-cirugia-cardiovascular-examenes]]
