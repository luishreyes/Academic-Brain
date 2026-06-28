---
title: "Creating a customisable Socratic AI physics tutor"
authors: [Eugenio Tufino, Bor Gregorcic]
year: 2025
journal: Physics Education
url: https://doi.org/10.1088/1361-6552/ae0d23
doi: 10.1088/1361-6552/ae0d23
pdf_local: sources/pdfs/scaffolding-socratic-metacognition/tufino_2025_socratic_physics_tutor.pdf
type: paper
keywords: [tutoria-con-ia, ingenieria-de-prompts, razonamiento-multimodal, aprendizaje-activo, filosofia, retroalimentacion-con-ia, alucinaciones-de-ia, inteligencia-artificial]
date_added: 2026-06-28
---

# Creating a customisable Socratic AI physics tutor

## Resumen

El artículo presenta el "role engineering" (ingeniería de roles) como un paradigma accesible para transformar modelos de lenguaje grandes de propósito general en tutores de IA especializados para la enseñanza de la física. Los autores construyen un tutor socrático de resolución de problemas usando la función Gemini Gems de Google, cuyo comportamiento pedagógico se define mediante un "guion" (script) detallado que especifica su rol y su persona. La idea central es que en lugar de "programar" la IA, se le asigna un papel a interpretar: las instrucciones funcionan como un guion que aprovecha la capacidad del modelo de generar texto estadísticamente consistente con el de un "personaje" experto, lo que según la literatura citada mejora significativamente su desempeño zero-shot.

El trabajo demuestra la metodología con dos casos de uso ilustrativos. En el primero, un problema de dinámica (una especialista de acrobacias en caída libre), el Gem usa su capacidad multimodal para analizar un diagrama de fuerzas dibujado a mano por el estudiante y aplicar reglas notacionales específicas (notación de dos subíndices, p. ej. F_{Aire sobre S}) extraídas de un archivo de "Knowledge" cargado por el instructor; el tutor guía al estudiante hasta corregir las etiquetas de su diagrama. En el segundo caso, un problema de inducción electromagnética, el Gem se apoya solo en su conocimiento preentrenado (sin documentos del instructor) para guiar el razonamiento conceptual: ayuda a derivar la fuerza electromotriz paso a paso, corrige con tacto un error decimal del estudiante, aplica la ley de Ohm y ofrece andamiaje para la regla de la mano derecha y la ley de Lenz sin dar la respuesta.

El hallazgo principal es que el Gem con rol diseñado facilita un diálogo socrático genuino —preguntas, pistas y retroalimentación orientada al proceso— en marcado contraste con un modelo Gemini estándar, que tiende a entregar la solución completa de inmediato. Los autores concluyen que la ingeniería de roles es un método pivote y al alcance de los docentes para convertir un "proveedor de soluciones" de propósito general en un guía pedagógico fiable que involucra al estudiante en la reflexión activa.

El artículo también discute consideraciones prácticas y éticas: la naturaleza comercial de estas herramientas (almacenamiento de conversaciones y posible uso para entrenamiento), la conveniencia de enmarcarlas como recursos suplementarios y opcionales, el cumplimiento normativo (GDPR, FERPA) mediante servicios institucionales, y las limitaciones de los LLM, en particular las alucinaciones y la persistencia de inexactitudes factuales que exigen ver al tutor como un asistente capaz, no como un sustituto infalible del docente.

## Contribuciones principales

- Propone y articula el "role engineering" como paradigma accesible para personalizar LLM en tutores educativos especializados.
- Demuestra un tutor socrático de física implementado con Gemini Gems, definido mediante un guion de instrucciones (disponible como material suplementario).
- Muestra dos casos: retroalimentación multimodal sobre diagramas de fuerzas dibujados a mano con reglas notacionales de un archivo de "Knowledge", y guía de razonamiento conceptual en electromagnetismo usando solo conocimiento preentrenado.
- Contrasta empíricamente el comportamiento socrático del Gem con el de un Gemini estándar que entrega soluciones directas.

## Metodología

Prueba de concepto cualitativa. Los autores diseñan un Gem (Gemini 2.5 Pro) con un guion de rol/persona en el panel de "Instructions" y, cuando aplica, documentos en la sección de "Knowledge". Generan diálogos ilustrativos sobre dos problemas clásicos de física (dinámica y inducción electromagnética); dada la naturaleza probabilística de los LLM, cada interacción se ejecutó varias veces para verificar la consistencia del enfoque pedagógico. Los diálogos presentados son ejemplos representativos creados por los autores, no transcripciones con estudiantes reales.

## Hallazgos clave

- Asignar un rol experto mediante un guion produce un diálogo socrático con andamiaje, mientras que el modelo no personalizado entrega la solución completa de forma directa.
- El Gem puede interpretar imágenes (diagramas de fuerzas) y validar el trabajo del estudiante contra reglas notacionales específicas de un archivo de "Knowledge".
- El tutor adapta su explicación al nivel del estudiante (p. ej., confirma una formulación algebraica de la ley de Faraday en lugar de una basada en cálculo) y ofrece apoyo procedimental sin revelar la respuesta.
- La activación implícita del razonamiento del modelo se logra más eficazmente con un rol inmersivo que con comandos explícitos tipo "piensa paso a paso".

## Limitaciones

- Los resultados son pruebas de concepto cualitativas, no estudios empíricos a gran escala sobre el aprendizaje de los estudiantes.
- El desempeño de la IA debe interpretarse como una "simulación convincente de comprensión"; los modelos no poseen cognición genuina.
- Persiste una tasa de inexactitud factual: el tutor puede ofrecer razonamientos defectuosos ocasionalmente.
- Restricción práctica para compartir Gems: al compartir por enlace público, los archivos de "Knowledge" cargados quedan excluidos y deben distribuirse aparte.
- Preocupaciones de privacidad y cumplimiento normativo por la naturaleza comercial de las herramientas de consumo.

## Notas relacionadas

- [[concepts/tutoria-con-ia]]
- [[concepts/ingenieria-de-prompts]]
- [[concepts/razonamiento-multimodal]]
- [[concepts/aprendizaje-activo]]
- [[concepts/filosofia]]
- [[concepts/retroalimentacion-con-ia]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/inteligencia-artificial]]
