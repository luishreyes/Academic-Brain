---
title: "Can You Help ChatGPT Get an \"A\" in Organic Chemistry? Teaching Effective Prompting of Large Language Models for Reaction Prediction"
authors: ["Elizabeth S. Thrall", "Olivia M. Vanden Assem", "Julia A. Schneider", "Joshua Schrier", "Sebastian Tassoti"]
year: 2026
journal: "Journal of Chemical Education"
url: https://doi.org/10.1021/acs.jchemed.5c01712
doi: 10.1021/acs.jchemed.5c01712
pdf_local: sources/pdfs/cheme-applications/thrall_2026_chatgpt-prompting-organic-reaction-prediction.pdf
type: paper
keywords: [inteligencia-artificial, alfabetizacion-en-ia, educacion-superior, pensamiento-critico, ingenieria-de-prompts, aprendizaje-en-contexto, generacion-aumentada-por-recuperacion]
date_added: 2026-06-27
---

# Can You Help ChatGPT Get an "A" in Organic Chemistry? Teaching Effective Prompting of Large Language Models for Reaction Prediction

## Resumen

Este artículo (de tipo "Activity" en el *Journal of Chemical Education*) presenta y evalúa una actividad de laboratorio, de unas 3 horas de duración, que introduce a estudiantes de primer semestre de química orgánica al uso de modelos de lenguaje de gran tamaño (LLMs) como ChatGPT para predecir el resultado de reacciones químicas, concretamente reacciones de adición a alquenos. La premisa de los autores es que, aunque los LLMs alcanzan un desempeño notable en tareas de química, su rendimiento óptimo depende de un uso adecuado —en especial de buenas técnicas de prompting—, y que normalmente a los estudiantes de química no se les enseñan estrategias para usar estas herramientas en tareas distintas a la escritura.

La actividad expone a los estudiantes a varios conceptos: representaciones moleculares (nombres IUPAC frente a cadenas SMILES), digitalización de reacciones químicas, la práctica de aprendizaje automático de separar datos en conjuntos de entrenamiento y prueba (train-test split), y dos estrategias generalizables de prompting. La primera es el método de las "Cinco S" (Set the Scene / Be Specific / Simplify your Language / Structure the Output / Share Feedback) para redactar prompts efectivos. La segunda es el aprendizaje en contexto (in-context learning, ICL) de pocos ejemplos (few-shot), en el que se incluyen unos pocos ejemplos relevantes dentro del propio prompt como alternativa accesible al ajuste fino (fine-tuning); los autores señalan su parentesco con la generación aumentada por recuperación (RAG).

La actividad se implementó por separado en la Fordham University (EE. UU., 18 estudiantes) y en la Universidad de Graz (Austria, 30 estudiantes), usando ChatGPT (modelo 4o, con descensos a 4o-mini al agotar las consultas gratuitas). Tras una primera implementación en Fordham se detectaron problemas (la actividad resultaba demasiado abierta, confusión entre IUPAC y SMILES, estereoquímica no abordada explícitamente, dificultades logísticas de compartir datos), por lo que se revisó para Graz: se usó IUPAC de forma exclusiva (SMILES como opción), se trató explícitamente la estereoquímica y se proporcionó una plantilla colaborativa de hoja de cálculo.

La evaluación se basó en encuestas anónimas pre y post laboratorio con escalas Likert de cinco puntos, analizadas con la prueba no paramétrica de Mann-Whitney U. Los estudiantes de ambas sedes reportaron haber alcanzado sus objetivos de aprendizaje y disfrutar la actividad. Hubo una mejora significativa y de gran tamaño de efecto en la afirmación "puedo escribir prompts efectivos" (antes Mdn = 3, después Mdn = 4), pero ningún cambio en la confianza hacia las respuestas de la IA ni en la tendencia a usarlas sin verificarlas —un resultado que los autores interpretan favorablemente: los estudiantes ganaron confianza en sus habilidades de prompting sin volverse acríticos frente a la herramienta.

## Contribuciones principales

- Diseño de una actividad de laboratorio reproducible que integra el uso de LLMs en la enseñanza de química orgánica de primer semestre, dominio poco explorado hasta ahora.
- Aplicación pedagógica del marco de las "Cinco S" para enseñar prompting efectivo y del aprendizaje en contexto (few-shot ICL) como alternativa accesible al fine-tuning.
- Vinculación de conceptos de química (representaciones moleculares, reacciones de adición a alquenos, estereoquímica) con conceptos de aprendizaje automático (train-test split, ICL).
- Evaluación empírica mediante encuestas pre/post en dos contextos institucionales y culturales distintos (EE. UU. y Austria).

## Metodología

Estudio de implementación de una intervención educativa en dos universidades. La actividad consta de cuatro secciones (representaciones moleculares, train-test split, prompting con las "Cinco S", y aprendizaje en contexto), con una reflexión final. La evaluación se realizó con encuestas anónimas prelab (10 ítems) y postlab (28 ítems) en escala Likert de cinco puntos; tres ítems se repitieron en formato pre-post. El análisis estadístico usó la prueba de Mann-Whitney U (apta para datos ordinales y muestras pequeñas), reportando valores U, z, p y tamaños de efecto r. Muestras finales: n = 14 (Fordham) y n = 29 (Graz). Las reacciones se tomaron de los libros de texto de cada curso (Smith; Clayden et al.) y se digitalizaron con ChemDraw.

## Hallazgos clave

- Los estudiantes percibieron haber alcanzado sus objetivos de aprendizaje en aprendizaje automático, prompting con las "Cinco S" y con ICL (Mdn = 5 en los tres casos).
- Mejora significativa y de gran tamaño de efecto (r = 0.554) en la autopercepción de capacidad para escribir prompts efectivos (de Mdn = 3 a Mdn = 4).
- No cambió la confianza en las respuestas de la IA ni el uso acrítico de ellas, lo que los autores consideran deseable como forma de enseñar sobre IA generativa.
- En la implementación revisada (Graz), los estudiantes reportaron mayor confianza y actitud más positiva hacia la IA generativa y mayor satisfacción global con el laboratorio.
- Observaciones técnicas: el desempeño fue algo mejor con nombres IUPAC que con SMILES; mezclar ambos identificadores en los prompts empeoraba los resultados; los modelos predecían bien los isómeros estructurales pero fallaban en estereoquímica sin un prompting adecuado; bromaciones se predecían mejor que hidroboraciones.

## Limitaciones

- La evaluación se basa en autopercepción de los estudiantes mediante encuestas, no en mediciones objetivas del desempeño en la predicción de reacciones.
- Muestras pequeñas (n = 14 y n = 29) y dos contextos institucionales específicos.
- Las dos implementaciones no fueron idénticas (la versión de Graz fue revisada), lo que limita la comparación directa entre sedes.
- Inestabilidad del entorno: cambios de modelo (degradación a 4o-mini), límites de consultas gratuitas y una caída de servicio de ChatGPT afectaron la ejecución; el rápido cambio del panorama de LLMs dificulta especificar un modelo concreto.

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/alfabetizacion-en-ia]]
- [[concepts/educacion-superior]]
- [[concepts/pensamiento-critico]]
- [[concepts/ingenieria-de-prompts]]
- [[concepts/aprendizaje-en-contexto]]
- [[concepts/generacion-aumentada-por-recuperacion]]
