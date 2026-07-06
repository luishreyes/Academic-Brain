---
title: "Diagrammatic dataset on AI-generated formative feedback for XML-based UML models"
authors: [Janka Pecuchová, Ľubomír Benko, Martin Drlík]
year: 2026
journal: Data in Brief
url: https://doi.org/10.1016/j.dib.2026.112962
doi: 10.1016/j.dib.2026.112962
pdf_local:
type: paper
keywords: [educacion-en-programacion, retroalimentacion-con-ia, evaluacion-educativa, ingenieria-de-prompts, procesamiento-de-lenguaje-natural, inteligencia-artificial]
date_added: 2026-07-05
---

# Diagrammatic dataset on AI-generated formative feedback for XML-based UML models

## Resumen
Este artículo de datos (Data Article) documenta un corpus diagramático de modelos UML generados por estudiantes y la retroalimentación formativa correspondiente generada por IA, recolectado en un curso de Ingeniería de Software de la Universidad Constantine the Philosopher en Nitra, Eslovaquia. Los datos corresponden a una implementación del curso en el año académico 2024/2025 (semestre de verano de 2025). La liberación combina 112 registros anonimizados a nivel de estudiante (student_data25.csv), 448 registros de retroalimentación formativa en eslovaco (feedback_data25.csv) y unos 700 reportes XML sin procesar exportados desde Enterprise Architect (v16), junto con imágenes de vista previa y materiales de reproducibilidad (plantillas de prompts, diccionario de variables y scripts en Python).

Los archivos XML codifican la información estructural de los modelos —paquetes, elementos, conectores, estereotipos, atributos y operaciones— y fueron la entrada primaria legible por máquina para la evaluación automatizada; las imágenes solo sirven de referencia humana. La retroalimentación fue producida en eslovaco mediante la API de OpenAI GPT-4-Turbo (gpt-4-0125-preview) con temperatura 0.3 y max_tokens = 700. Este entorno lingüístico no anglófono aporta información valiosa sobre el comportamiento de los LLM en contextos educativos de bajos recursos y disciplinas técnicas. Cada registro enlaza el modelo UML en XML, la retroalimentación en eslovaco, puntajes numéricos, calificaciones en letra, valoraciones de utilidad autoreportadas (escala Likert 1-5) y la evaluación humana correspondiente.

El valor del conjunto de datos radica en ofrecer un benchmark exploratorio y acotado al contexto para comparar retroalimentación generada por IA frente a la de docentes sobre tareas de modelado UML en un curso universitario real —no en un laboratorio simulado—. Con dos anotadores humanos (Teacher M y Teacher J) que alcanzan un Kappa de Cohen ponderado cuadrático superior a 0,90 (acuerdo casi perfecto), el recurso soporta investigación sobre evaluación formativa automatizada, ingeniería de prompts para modelos estructurados, comparación de estilos de retroalimentación humano-IA y análisis multilingüe de feedback en educación.

## Contribuciones principales
- Publicación de un dataset multimodal reproducible que enlaza modelos UML en XML, retroalimentación formativa generada por IA en eslovaco, puntajes, calificaciones, valoraciones de utilidad y evaluación humana.
- Recurso raro de LLM en un idioma de bajos recursos (eslovaco), útil para estudiar el comportamiento de los modelos fuera del inglés en disciplinas técnicas.
- Documentación completa de plantillas de prompts, lógica de rúbricas de evaluación y estructura de archivos que permite replicar y extender los análisis reportados.
- Base para comparar diseños de prompts basados en XML, contrastar estilos de feedback humano vs. IA y estudiar la alineación entre puntajes de rúbrica y feedback narrativo.

## Metodología
La generación de retroalimentación se realizó mediante un pipeline semiautomatizado que integra datos exportados del LMS Moodle con la API de OpenAI GPT-4-Turbo (gpt-4-0125-preview). Tras cada asignación, las entregas se exportaron desde Enterprise Architect como archivos XML nativos que representan la estructura interna completa del modelo. Cada tipo de tarea UML (Requisitos, Casos de Uso, Clases y Actividad) tenía una plantilla de prompt dedicada con cuatro componentes: (1) definición de rol como evaluador UML universitario, (2) rúbrica de evaluación por criterios de puntos, (3) instrucciones de salida (párrafo de feedback formativo de 5-7 oraciones, puntaje 0-10 y calificación A-Fx) y (4) el contenido XML del modelo. El flujo se implementó en Python 3.10.10 (pandas, xml.etree.ElementTree, paquete OpenAI v1.14.2), operando solo sobre registros anonimizados. Dos diagramas de casos de uso demasiado grandes para la ventana de contexto requirieron una rama de preprocesamiento con representación estructurada y particionado por lotes. El análisis lingüístico del feedback (distribuciones de partes del habla) usó la librería Stanza, con anotación morfológica para el eslovaco.

## Hallazgos clave
- El repositorio contiene ~700 archivos XML y ~700 imágenes de vista previa (una por artefacto); cada estudiante podía aportar hasta 7 diagramas (4 de semestre + 3 de examen), con un máximo teórico de 784 archivos.
- La retroalimentación docente fue en promedio ligeramente más larga (M = 92,72 palabras) que la generada por IA (M = 85,06 palabras).
- El acuerdo entre anotadores humanos fue casi perfecto (Kappa ponderado cuadrático > 0,90), habilitando estudios de consistencia de calificación.
- En la distribución de notas finales, la condición con feedback de IA mostró más notas 'B' (~21% vs. ~15%) pero también más 'Fx' (~18% vs. ~8%) que la de feedback docente.
- El quiz A6 presentó la media más baja y la mayor variabilidad, sugiriendo mayor dificultad conceptual.

## Limitaciones
- Datos de una sola institución y un solo contexto de curso, lo que limita la generalización; es un benchmark exploratorio acotado, no representativo de la población.
- El pipeline usó exclusivamente exportaciones XML, que pueden no capturar matices visuales o estilísticos del modelado estudiantil que un evaluador humano sí observa.
- Algunas entregas mezclaban terminología en eslovaco e inglés, mientras que todo el feedback de IA se produjo en eslovaco; el efecto de esta mezcla lingüística sobre la precisión no se cuantificó por separado.
- La valoración de utilidad es una medida autoreportada (Likert 1-5), no un indicador objetivo de mejora en el aprendizaje; no hay seguimiento longitudinal.

## Notas relacionadas
- [[concepts/educacion-en-programacion]]
- [[concepts/retroalimentacion-con-ia]]
- [[concepts/evaluacion-educativa]]
- [[concepts/ingenieria-de-prompts]]
- [[concepts/procesamiento-de-lenguaje-natural]]
- [[concepts/inteligencia-artificial]]
