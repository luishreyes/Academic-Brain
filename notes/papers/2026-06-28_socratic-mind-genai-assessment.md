---
title: "Socratic Mind: Impact of a Novel GenAI-Powered Assessment Tool on Student Learning and Higher-Order Thinking"
authors: [Jeonghyun Lee, Jui-Tse Hung, Meryem Yilmaz Soylu, Diana Popescu, Christopher Zhang Cui, Gayane Grigoryan, David A. Joyner, Stephen W. Harmon]
year: 2025
journal: arXiv (preprint)
url: 
doi: 
pdf_local: sources/pdfs/scaffolding-socratic-metacognition/lee_2025_socraticmind_arxiv.pdf
type: paper
keywords: [evaluacion-educativa, tutoria-con-ia, retroalimentacion-con-ia, motivacion-y-compromiso-estudiantil, pensamiento-critico, autorregulacion-del-aprendizaje, educacion-en-programacion, inteligencia-artificial, equidad-educativa, aprendizaje-activo, filosofia]
date_added: 2026-06-28
---

# Socratic Mind: Impact of a Novel GenAI-Powered Assessment Tool on Student Learning and Higher-Order Thinking

## Resumen

El estudio evalúa "Socratic Mind", una herramienta de evaluación formativa potenciada por IA generativa (GenAI) que emplea el cuestionamiento socrático para apoyar el aprendizaje en un curso introductorio de computación (CS1301), grande y completamente en línea, de una universidad de investigación estadounidense. Construida sobre modelos de lenguaje (LLM) y reconocimiento automático del habla, la herramienta plantea preguntas de apertura definidas por el instructor y adapta sus repreguntas a las respuestas habladas o escritas del estudiante hasta detectar claridad conceptual, ofreciendo después retroalimentación personalizada. La motivación es que muchos sistemas de IA en evaluación enfatizan habilidades cognitivas de bajo nivel (recuerdo factual, tareas procedimentales), mientras que el diálogo socrático ofrece un marco escalable para cultivar pensamiento de orden superior.

Mediante un diseño cuasi-experimental de métodos mixtos, los autores investigaron patrones de compromiso (engagement), la influencia de la experiencia de usuario (UX) sobre dicho compromiso, y el impacto sobre los resultados de aprendizaje percibidos y reales. Los datos provienen de registros del sistema, encuestas de UX y de compromiso/aprendizaje percibido, reflexiones de los estudiantes y datos de desempeño del curso. La muestra final fue de 171 estudiantes asignados aleatoriamente a tareas de la Unidad 3 o la Unidad 4 (asignaciones opcionales de crédito extra). El análisis combinó estadística descriptiva, regresión múltiple, análisis de diferencias-en-diferencias (DiD) y análisis temático cualitativo de respuestas abiertas.

Los participantes reportaron de forma consistente niveles altos de compromiso afectivo, conductual y cognitivo, fuertemente vinculados a UX positiva y a resultados de aprendizaje percibidos. El análisis cuantitativo reveló que quienes usaron la herramienta tuvieron ganancias significativas en sus puntajes de quiz frente a quienes no la usaron: el DiD mostró un efecto amortiguador (β = .107, p < .05) que redujo la caída de desempeño (~3.3 puntos menos de descenso), particularmente beneficiando a los estudiantes con menor desempeño de base. El análisis temático de la retroalimentación cualitativa mostró mejoras percibidas sustanciales en pensamiento de orden superior, especialmente en resolución de problemas (69%), pensamiento crítico (62%) y autorreflexión (60%), con cambios más limitados en comunicación verbal (38%), atribuidos a que muchos optaron por escribir en lugar de usar la interacción por voz.

## Contribuciones principales

- Presenta y evalúa empíricamente una herramienta de evaluación formativa dialógica basada en cuestionamiento socrático escalable con GenAI, aplicable a cursos masivos en línea.
- Aporta evidencia cuasi-experimental (DiD) de un efecto amortiguador positivo sobre el desempeño en quizzes, mayor en estudiantes de menor desempeño inicial.
- Documenta que la participación activa (respuestas elaboradas y, sobre todo, entrada por voz) se correlaciona con mayor compromiso afectivo, conductual y cognitivo.
- Identifica una desalineación entre aprendizaje percibido y desempeño real, contribuyendo al debate sobre si la GenAI inhibe o potencia el pensamiento de orden superior.

## Metodología

Diseño cuasi-experimental de métodos mixtos. De 579 estudiantes inscritos en CS1301 (Primavera 2025), se asignaron aleatoriamente tareas de IA para la Unidad 3 o la Unidad 4; la muestra final fue de 171 (81 en Unidad 3, 90 en Unidad 4) que completaron tarea y encuesta a tiempo. Medidas: escala de compromiso y aprendizaje (17 ítems de compromiso afectivo/conductual/cognitivo + 6 de aprendizaje percibido + 4 preguntas abiertas, Likert 1-5, con buenas fiabilidades Cronbach α = .76-.90), encuesta de UX de 10 ítems (usabilidad y efectividad percibida, α = .95-.97), métricas conductuales de los logs (tiempo, conteo y longitud de mensajes, entradas de audio) y datos de desempeño académico (quizzes y tests de Unidades 2-5, examen final, proctorizados). Análisis en SPSS 29: descriptivos, correlaciones, regresión múltiple para predecir aprendizaje percibido, y regresión DiD para estimar el efecto causal del tratamiento controlando desempeño de base. Análisis temático inductivo de 141 respuestas abiertas, codificadas como cambio positivo, nulo o mixto.

## Hallazgos clave

- Compromiso alto en las tres dimensiones (conductual M = 4.07, afectivo M = 3.96, cognitivo M = 3.96); UX positiva (efectividad M = 4.09, usabilidad M = 3.99, satisfacción M = 3.88).
- Todas las subescalas de UX correlacionaron positiva y significativamente con las tres dimensiones de compromiso (r = .33-.54).
- El conteo de entradas de audio correlacionó positivamente con compromiso cognitivo, afectivo y conductual; el tiempo total se asoció negativamente con el compromiso cognitivo (r = -.18), sugiriendo que sesiones más largas podían reflejar involucramiento más superficial.
- El modelo de regresión explicó ~69% de la varianza del aprendizaje percibido; los predictores más fuertes fueron compromiso afectivo (β = .445) y conductual (β = .181); ser hablante nativo de inglés predijo positivamente (β = .156) e identificarse como hombre, negativamente (β = -.116).
- DiD: efecto amortiguador significativo sobre los quizzes (β = .107), no presente en los tests; el beneficio crecía ~0.21 puntos por cada punto menos de desempeño de base (β interacción pre-tratamiento = -.635), favoreciendo a estudiantes de menor rendimiento previo.
- Mejoras percibidas en pensamiento de orden superior: resolución de problemas 69%, pensamiento crítico 62%, autorreflexión 60%, comunicación verbal 38%.
- Desalineación entre aprendizaje percibido y desempeño real (en la Unidad 3, correlaciones negativas entre aprendizaje percibido y quiz r = -.30, test r = -.35), posiblemente por sesgo retrospectivo y por el diseño formativo de la herramienta (orientada a comprensión conceptual, no a preparación directa de exámenes).

## Limitaciones

- Diseño cuasi-experimental con tareas opcionales de crédito extra, lo que introduce posible autoselección de participantes más motivados.
- Resultados de aprendizaje en gran parte autorreportados y medidos al final del semestre (riesgo de sesgo retrospectivo y de sobreestimación).
- Desajuste entre lo que mide la herramienta (razonamiento conceptual) y los instrumentos de desempeño (quizzes/tests), que dificulta capturar las ganancias reales en pensamiento de orden superior.
- Problemas técnicos de seguimiento de tiempo (~10% de casos) obligaron a reportar medianas; la función de voz fue subutilizada, limitando conclusiones sobre comunicación verbal.
- Preprint (arXiv), un solo curso y una sola institución, lo que limita la generalización.

## Notas relacionadas

- [[concepts/evaluacion-educativa]]
- [[concepts/tutoria-con-ia]]
- [[concepts/retroalimentacion-con-ia]]
- [[concepts/motivacion-y-compromiso-estudiantil]]
- [[concepts/pensamiento-critico]]
- [[concepts/autorregulacion-del-aprendizaje]]
- [[concepts/educacion-en-programacion]]
- [[concepts/inteligencia-artificial]]
- [[concepts/equidad-educativa]]
- [[concepts/aprendizaje-activo]]
- [[concepts/filosofia]]
