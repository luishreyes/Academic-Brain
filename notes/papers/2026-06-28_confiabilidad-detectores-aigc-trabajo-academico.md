---
title: "Trusting AI to detect AI? A systematic evaluation of the reliability and robustness of current AIGC detection tools for student academic work"
authors: [Yicheng Sun, Xiaoxue Ma, Yihan Liao]
year: 2026
journal: Computers & Education
url: https://doi.org/10.1016/j.compedu.2026.105616
doi: 10.1016/j.compedu.2026.105616
pdf_local: sources/pdfs/integrity-by-design/sun_2026_trusting-ai-detect-ai.pdf
type: paper
keywords: [deteccion-de-texto-ia, integridad-academica, evaluacion-educativa, educacion-superior, equidad-educativa, educacion-en-programacion, inteligencia-artificial, capacidades-de-ia]
date_added: 2026-06-28
---

# ¿Confiar en la IA para detectar IA? Evaluación sistemática de la fiabilidad y robustez de las herramientas actuales de detección de AIGC en trabajos académicos estudiantiles

## Resumen

La proliferación de la IA generativa ha planteado un desafío existencial a los sistemas de evaluación tradicionales de la educación superior. Frente a ello, el sector ha empezado a transitar de una lógica de "contención tecnológica" hacia un paradigma de gobernanza de la evaluación, en el cual los detectores de contenido generado por IA (AIGC) se conciben no como "policías" de la integridad sino como indicadores diagnósticos del grado de colaboración humano-IA. El estudio sostiene que comprender las características reales de estos detectores es prerrequisito para usarlos con sensatez, pero que su eficacia en contextos educativos auténticos ha sido insuficientemente estudiada.

Para cerrar esa brecha, los autores construyen tres datasets ecológicos de gran escala —StuTask (tareas y exámenes cortos), StuThesis (tesis académicas largas) y DataCode (código de ingeniería)— con más de 280 000 muestras auténticas de trabajo estudiantil recolectadas entre 2016 y 2021 (periodo previo a la adopción masiva de IA generativa). Usando una estrategia de corpus paralelo, cada texto humano se emparejó con una versión generada por GPT-3.5-turbo bajo prompts estandarizados. Sobre estos datos se evaluaron sistemáticamente 13 detectores principales (7 de código abierto y 6 comerciales) en cuatro dimensiones: rendimiento general, complejidad de la tarea, variación disciplinar y robustez adversarial.

Los resultados muestran que los detectores alcanzan un rendimiento aceptable en tesis largas (AUC promedio 71,48 %) pero fallan sistemáticamente en código de ingeniería (54,71 %, cercano al azar) y en tareas cortas (57,85 %). Las disciplinas STEM sufren un sesgo algorítmico significativo por la naturaleza formulaica de la escritura técnica, y el rasgo más grave es la alta tasa de falsos positivos, que en estudiantes no nativos de inglés puede llegar al 61 %. Las pruebas de robustez revelan una vulnerabilidad extrema: una estrategia de edición híbrida (parafraseo, reemplazo de sinónimos, reestructuración de oraciones) permite que hasta el 88 % del contenido generado por IA evada la detección.

El trabajo concluye que las tecnologías de detección actuales son inadecuadas para sostener decisiones evaluativas de alto impacto. En una trayectoria educativa de "abrazar la IA", los detectores deberían funcionar como métricas de referencia que cuantifiquen la profundidad de la colaboración humano-IA según la lógica de cada disciplina, y la tecnología debería evolucionar hacia el "reconocimiento de la innovación lógica" para construir una defensa de la integridad académica resiliente en un ecosistema de simbiosis humano-IA.

## Contribuciones principales
- Construcción de tres datasets ecológicos a gran escala (StuTask, StuThesis, DataCode) con más de 280 000 muestras auténticas de trabajo estudiantil pre-IA, con corpus paralelo humano-IA controlado por tema.
- Primera evaluación sistemática que incorpora código de ingeniería (DataCode, vía Stack Overflow) como dominio de detección, hasta ahora casi inexistente en la literatura.
- Evaluación comparativa de 13 detectores comerciales y de código abierto en cuatro dimensiones (eficacia general, complejidad de tarea, disciplina y robustez adversarial).
- Reformulación conceptual: el problema de la detección de AIGC pasa de "factibilidad técnica" a "adecuación educativa", proponiendo a los detectores como métricas de referencia en lugar de mecanismos punitivos binarios.

## Metodología
Diseño empírico multietapa. Se recolectaron textos humanos auténticos archivados (tareas y tesis 2016-2021; respuestas aceptadas de Stack Overflow Sep-2021 a Nov-2022, validadas por un panel de 22 profesores de ingeniería). Para cada texto humano se generó una versión paralela con GPT-3.5-turbo-0125 bajo prompts estandarizados. Se aplicó una estrategia de agregación máxima a nivel de párrafo y se midió el rendimiento con tres métricas: AUC (capacidad discriminativa), FPR (tasa de falsos positivos, clave para la equidad) y FNR (tasa de falsos negativos, clave para la eficacia). El análisis cubrió cuatro preguntas de investigación (RQ1-RQ4) e incluyó un análisis de interpretabilidad post-hoc con Integrated Gradients sobre secciones de metodología y discusión.

## Hallazgos clave
- El rendimiento depende fuertemente de la longitud y riqueza del texto: tesis largas (AUC 71,48 %) > tareas cortas (57,85 %) > código (54,71 %, cercano al azar).
- No existe un detector "universal": Fast-DetectGPT y Scribbr destacan en tareas específicas, pero la mayoría falla en tareas cortas y código.
- Los detectores de texto no transfieren al código: la alta estructuración y repetitividad de los lenguajes de programación invalida la métrica de "perplejidad"; GPTZero alcanza solo 45,79 % de AUC en código con 73,97 % de FNR.
- Correlación negativa entre dificultad de la tarea y eficacia del detector: a mayor dificultad cognitiva, menor capacidad de distinguir texto humano de texto IA.
- Sesgo disciplinar y contra hablantes no nativos: la escritura formulaica de STEM y la baja "perplejidad" de los no nativos elevan los falsos positivos (hasta 61 % en NNES según Liang et al.), comprometiendo la equidad de la evaluación.
- Vulnerabilidad adversarial extrema: una estrategia de edición híbrida permite que hasta el 88 % del contenido IA evada la detección; el simple parafraseo reduce la precisión al nivel del azar.
- Los detectores comerciales superan en promedio a los modelos de código abierto antiguos, pero su FPR en tareas cortas (40,09 %) supera incluso al de los de código abierto, desmontando el supuesto de que "lo pagado es mejor".

## Limitaciones
- Las versiones IA se generaron únicamente con GPT-3.5-turbo; modelos más avanzados (GPT-4 y posteriores) podrían alterar tanto la detectabilidad como la robustez.
- El corpus humano de código proviene de Stack Overflow, no de entregas de aula reales, y podría contener una pequeña fracción de contenido asistido por IA pese a los filtros temporales y de expertos.
- Las tesis y tareas provienen de una única universidad, lo que limita la generalización a otros sistemas educativos y lingüísticos.
- La estrategia de agregación máxima a nivel de párrafo refleja una lógica punitiva específica de revisión de integridad y puede inflar la sensibilidad frente a otras estrategias de agregación.

## Notas relacionadas
- [[concepts/deteccion-de-texto-ia]]
- [[concepts/integridad-academica]]
- [[concepts/evaluacion-educativa]]
- [[concepts/educacion-superior]]
- [[concepts/equidad-educativa]]
- [[concepts/educacion-en-programacion]]
- [[concepts/inteligencia-artificial]]
- [[concepts/capacidades-de-ia]]
