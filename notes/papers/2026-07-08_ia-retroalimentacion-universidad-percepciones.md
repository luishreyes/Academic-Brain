---
title: "Artificial intelligence and feedback in university education: effectiveness and student perceptions"
authors: [Valentina Grion, Beatrice Doria, Daniele Agostini, Giorgia Slaviero]
year: 2026
journal: Assessment & Evaluation in Higher Education
url: https://doi.org/10.1080/02602938.2026.2697962
doi: 10.1080/02602938.2026.2697962
pdf_ref: grion-2026-ia-retroalimentacion-universidad.pdf
sha256: ed9b8ace73a0e801f5072b1b89c688e05eff06cc1d52dbd8622d9276fa4162ec
type: paper
visibility: public
keywords: [retroalimentacion-con-ia, evaluacion-educativa, educacion-superior, aprendizaje-activo, formacion-docente, ingenieria-de-prompts, generacion-aumentada-por-recuperacion, autorregulacion-del-aprendizaje, supervision-humana, motivacion-y-compromiso-estudiantil, inteligencia-artificial]
date_added: 2026-07-09
---

# Artificial intelligence and feedback in university education: effectiveness and student perceptions

## Resumen
La retroalimentación formativa es uno de los principales motores del aprendizaje en educación superior, pero entregarla de forma oportuna, personalizada y de alta calidad choca con el crecimiento de las matrículas y la carga docente. La IA generativa se ha propuesto como respuesta a ese cuello de botella, aunque la evidencia sobre su eficacia real —y sobre si es comparable a la de un docente experto— sigue siendo fragmentaria. Este estudio aborda esa pregunta en un curso universitario basado en proyectos, comparando la retroalimentación generada por dos modelos de lenguaje (GPT-o4-mini y DeepSeek R1) con la de un docente experto.

El diseño es cuasi-experimental: 47 grupos de trabajo (N = 238 estudiantes de tercer año de Formación de Maestros de Primaria en la Universidad de Padua) fueron asignados aleatoriamente a una de tres condiciones de retroalimentación. Los proyectos se evaluaron con una rúbrica analítica de 0 a 30 puntos co-construida con los estudiantes, y los evaluadores permanecieron ciegos a la condición y a la fase (PRE/POST). Los estudiantes también desconocían el origen de la retroalimentación que recibían. El análisis usó pruebas no paramétricas, modelos robustos y —de forma central— pruebas de no inferioridad y equivalencia con un margen preespecificado de ±1 punto, además de un cuestionario validado de percepciones (N = 200).

El resultado principal es que la retroalimentación mejoró el desempeño de forma significativa y grande en todas las condiciones (M de 23,81 a 27,70; W = 1081, p < 0,001; r_rb = 0,77; +3,9 puntos en promedio), sin diferencias entre fuentes (Kruskal–Wallis H(2) = 1,91, p = 0,384, ε² = 0,042). Las pruebas de equivalencia mostraron que GPT-o4-mini cumple los criterios de no inferioridad *y* de equivalencia práctica frente al docente (diferencia = 0,23 puntos; IC90% [−0,46, 0,91]), mientras que DeepSeek R1 solo alcanza no inferioridad (0,56 puntos; IC90% [−0,05, 1,18]). Las percepciones de dominio, las emociones y la satisfacción fueron igualmente altas en las tres condiciones, con satisfacción global del 98%.

La lectura que hacen los autores desplaza el debate: la eficacia de la retroalimentación depende menos de su fuente que de la arquitectura pedagógica en que está incrustada. La rúbrica compartida y el análisis de ejemplares funcionaron como un "dispositivo de calibración" mediante el cual la competencia evaluativa (*assessment literacy*) del docente configuró la producción de la retroalimentación de la IA, haciendo explícito lo que en la evaluación humana suele quedar tácito. La IA no aparece como solución autónoma ni como amenaza al docente, sino como amplificador de estructuras pedagógicas bien diseñadas.

## Contribuciones principales
- Primera comparación con pruebas formales de **no inferioridad y equivalencia práctica** (margen de ±1 punto sobre 30) entre retroalimentación generada por LLM y retroalimentación de un docente experto, en lugar de limitarse a la ausencia de diferencias significativas.
- Evidencia de que dos LLM distintos (GPT-o4-mini y DeepSeek R1) producen mejoras de desempeño estadísticamente indistinguibles de las del docente en una tarea abierta y compleja (diseño de proyectos instruccionales).
- Diseño con doble ciego práctico —evaluadores ciegos a condición y fase, estudiantes ciegos al origen de la retroalimentación— que permite medir percepciones sin sesgo de atribución a la máquina.
- Reformulación teórica: la eficacia se explica como propiedad *sistémica* de la arquitectura pedagógica (criterios explícitos, rúbrica co-construida, ejemplares, revisión iterativa) y no como propiedad de la fuente, con el ejemplar operando como dispositivo de calibración de la IA.

## Metodología
Estudio cuasi-experimental en el curso "Assessment and Learning" (Universidad de Padua), con 238 estudiantes (146 asistentes, 92 no asistentes) organizados inicialmente en 49 grupos, de los que 47 quedaron en la muestra final (dos no entregaron a tiempo). Los grupos —unidad de análisis, para evitar pseudo-replicación— se asignaron al azar a DeepSeek R1 (n = 16), docente experto (n = 16) o GPT-o4-mini (n = 15). Cinco fases secuenciales: diseño instruccional, co-construcción de la rúbrica, provisión experimental de retroalimentación, revisión y medición de resultados.

Para generar la retroalimentación de IA se cargaron todos los materiales del curso (diapositivas, lecturas, textos de referencia) más un documento con la descripción de la tarea, el marco pedagógico y la rúbrica, accesibles al modelo mediante un proceso de **RAG** (generación aumentada por recuperación). Las instrucciones de sistema pedían al modelo actuar como profesor universitario experto en didáctica, diseño educativo, evaluación y retroalimentación, y producir retroalimentación narrativa, objetiva y justificada, anclada en la rúbrica.

Análisis en R: estadísticos descriptivos; Wilcoxon de rangos signados con r_rb para el cambio PRE-POST; Kruskal–Wallis con ε² para comparar fuentes (sobre puntajes POST, ganancias brutas e índices ajustados por línea base, DIFF_ADJ y GAIN_NORM); estimaciones Hodges–Lehmann con IC95% en lugar de post-hoc ante omnibus no significativos; modelos lineales robustos con errores estándar HC3 para asistencia y su interacción con la fuente; ANOVA de Welch con Games–Howell como análisis de sensibilidad; y pruebas de no inferioridad/equivalencia con IC90% ajustados por Welch. Las percepciones se midieron con un cuestionario validado (Baydas Onlu et al. 2022) de 19 ítems cerrados y uno abierto, con tres escalas: dominio percibido (α = 0,81), emociones positivas (α = 0,85) y emociones negativas (α = 0,73).

## Hallazgos clave
- Mejora PRE-POST significativa y de tamaño grande en toda la muestra: M = 23,81 (DE = 4,63) → M = 27,70 (DE = 0,95); W = 1081, p < 0,001; r_rb = 0,77; ~3,9 puntos sobre 30.
- Sin diferencias por fuente ni en puntajes POST (H(2) = 1,91, p = 0,384, ε² = 0,042) ni en ganancias (H(2) = 0,74, p = 0,690, ε² = 0,016); líneas base comparables (H(2) = 1,24, p = 0,538).
- Equivalencia práctica: GPT-o4-mini vs docente, diferencia 0,23 puntos, IC90% [−0,46, 0,91] → no inferior *y* equivalente. DeepSeek R1 vs docente, 0,56 puntos, IC90% [−0,05, 1,18] → no inferior pero no equivalente (el límite superior excede el margen). El mismo patrón se sostiene con mejora ajustada por línea base (DIFF_ADJ).
- La asistencia al curso no tuvo efecto principal sobre la mejora ajustada (F(1,41) = 1,52, p = 0,225) ni moderó el efecto de la fuente (interacción F(2,41) = 0,97, p = 0,389).
- Percepciones equivalentes entre condiciones: dominio percibido M = 4,14–4,22 (p = 0,642), emociones positivas M = 3,99–4,21 (p = 0,092), emociones negativas M = 1,22–1,39 (p = 0,073); satisfacción global 98% (GPT-o4-mini 100%, DeepSeek 97,5%, docente 94%). Descriptivamente, las condiciones de IA mostraron emociones positivas algo más altas y negativas algo más bajas que la del docente.
- Fuerte efecto techo: 91% de los grupos obtuvo 27 o más sobre 30 en el POST, con DE = 0,95.

## Limitaciones
- Efecto techo marcado en el POST: la compresión de puntajes cerca del máximo limita la sensibilidad de las comparaciones y hace que puntajes similares sean compatibles tanto con eficacia genuinamente comparable como con diferencias que la medida no pudo captar. Los autores recomiendan escalas con más margen o criterios de desempeño más exigentes.
- Potencia estadística limitada por el tamaño de muestra a nivel de grupo (N = 47), reflejada en la amplitud de los intervalos de confianza; no se pueden descartar diferencias modestas entre fuentes.
- No se recopiló información sobre la experiencia previa de los estudiantes con herramientas de IA generativa, que pudo influir en su interacción con la retroalimentación.
- La *assessment literacy* de los estudiantes no se midió directamente: su contribución a la eficacia queda como hipótesis conceptual, no como explicación empíricamente respaldada.
- Un solo curso y contexto disciplinar (formación de maestros de primaria), con muestra 94-95% femenina; la transferibilidad a otros ámbitos queda por establecer.
- El diseño no permite aislar componentes instruccionales específicos (rúbrica vs ejemplares vs revisión iterativa) dentro de la arquitectura pedagógica que se identifica como decisiva.

## Notas relacionadas
- [[concepts/retroalimentacion-con-ia]]
- [[concepts/evaluacion-educativa]]
- [[concepts/educacion-superior]]
- [[concepts/aprendizaje-activo]]
- [[concepts/formacion-docente]]
- [[concepts/ingenieria-de-prompts]]
- [[concepts/generacion-aumentada-por-recuperacion]]
- [[concepts/autorregulacion-del-aprendizaje]]
- [[concepts/supervision-humana]]
- [[concepts/motivacion-y-compromiso-estudiantil]]
- [[concepts/inteligencia-artificial]]
