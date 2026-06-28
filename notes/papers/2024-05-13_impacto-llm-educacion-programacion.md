---
title: "The Impact of Large Language Models on Programming Education and Student Learning Outcomes"
authors: [Gregor Jošt, Viktor Taneski, Sašo Karakatič]
year: 2024
journal: "Applied Sciences"
url: https://www.mdpi.com/2076-3417/14/10/4115
doi: 10.3390/app14104115
pdf_local: sources/pdfs/learning-impact-evidence/jost_2024_llm-programming-education.pdf
type: paper
keywords: [educacion-en-programacion, inteligencia-artificial, motivacion-y-compromiso-estudiantil, pensamiento-critico, evaluacion-educativa, retroalimentacion-con-ia, ensayo-controlado-aleatorio, integridad-academica, educacion-superior]
date_added: 2026-06-28
---

# El impacto de los modelos de lenguaje grandes en la educación en programación y los resultados de aprendizaje estudiantil

## Resumen

El estudio investiga empíricamente cómo el uso informal de modelos de lenguaje grandes (LLM), como ChatGPT y Copilot, afecta los resultados de aprendizaje de estudiantes universitarios en educación en programación. A diferencia de la mayoría de la literatura previa, centrada en discutir las ventajas y desventajas teóricas de la integración de LLM, este trabajo realiza una investigación empírica del impacto directo de distintos patrones de uso sobre el desempeño estudiantil, en el contexto concreto del desarrollo de aplicaciones React.

Los autores diseñaron un experimento de diez semanas con treinta y dos estudiantes de segundo año, quienes ya dominaban HTML, CSS y JavaScript vanilla pero no habían sido formalmente introducidos a React. Durante una fase inicial de nueve semanas, los participantes completaron cuatro tareas de React con TypeScript y pudieron usar libremente cualquier LLM (uso no restringido pero tampoco explícitamente fomentado), junto con el apoyo de dos asistentes experimentados. En una fase controlada (semana diez), se les pidió implementar una aplicación familiar en React con el uso de LLM estrictamente prohibido, sirviendo esta tarea como medida de su capacidad de resolución independiente. Posteriormente, un cuestionario en escala Likert de cinco puntos midió la frecuencia de uso de LLM para generación de código, explicaciones adicionales y depuración.

El análisis (correlación de Spearman con intervalos de confianza por bootstrap, dado que las variables no seguían distribución normal) reveló una correlación negativa significativa, aunque modesta, entre el uso promedio de LLM y las calificaciones finales (rho = −0.347, p = 0.026). Las correlaciones fueron significativas y negativas para la generación de código (rho = −0.305, p = 0.045) y la depuración (rho = −0.360, p = 0.021) —tareas intensivas en pensamiento crítico— mientras que el uso de LLM para buscar explicaciones adicionales no mostró un impacto estadísticamente significativo (rho = −0.201, p = 0.135).

Los hallazgos sugieren que la dependencia excesiva de los LLM para actividades que demandan pensamiento crítico puede obstaculizar el desarrollo de habilidades de resolución independiente de problemas, mientras que su uso como herramienta complementaria para obtener explicaciones parece menos perjudicial. Los autores abogan por un enfoque equilibrado: introducir estas herramientas en etapas posteriores de la formación, una vez que los estudiantes hayan adquirido los principios básicos de programación.

## Contribuciones principales

- Aporta evidencia empírica (no meramente discusión de pros y contras) sobre el efecto del uso informal de LLM modernos en los resultados de aprendizaje en programación.
- Distingue el impacto según el propósito de uso (generación de código, explicaciones, depuración), mostrando que no todos los usos tienen el mismo efecto.
- Identifica que los usos intensivos en pensamiento crítico (generación y depuración) se asocian con peor desempeño, mientras que la búsqueda de explicaciones no.
- Ofrece orientación pedagógica para integrar LLM sin comprometer el desarrollo de competencias fundamentales de programación.

## Metodología

Experimento cuasi-experimental de diez semanas con 32 estudiantes de segundo año de pregrado. Fase inicial (9 semanas): cuatro tareas de React/TypeScript con uso libre de LLM. Fase controlada (semana 10): tarea familiar de React con LLM prohibido y supervisión presencial, cuya calificación constituyó la variable de resultado. La frecuencia de uso de LLM se midió mediante cuestionario en escala Likert de cinco puntos (generación de código, explicaciones adicionales, depuración). El análisis estadístico se realizó en R 4.3.3; al rechazarse la normalidad (Shapiro–Wilk, p < 0.05), se emplearon pruebas de correlación de Spearman de una cola con intervalos de confianza por bootstrap.

## Hallazgos clave

- Correlación negativa significativa entre el uso promedio de LLM y la calificación final (rho = −0.347, p = 0.026; IC 95% bootstrap [−0.626, −0.044]).
- Generación de código: correlación negativa significativa (rho = −0.305, p = 0.045).
- Depuración: correlación negativa significativa (rho = −0.360, p = 0.021).
- Explicaciones adicionales: sin impacto significativo (rho = −0.201, p = 0.135; IC incluye el cero), sugiriendo su valor como recurso complementario.
- Tendencia general decreciente de las calificaciones a mayor uso promedio de LLM en todas las actividades.

## Limitaciones

- Muestra pequeña (32 participantes), que puede no capturar todo el espectro de resultados educativos.
- Duración corta (diez semanas), insuficiente para reflejar trayectorias de aprendizaje a largo plazo.
- Medición del uso de LLM basada en autorreporte mediante cuestionario.
- Contexto acotado (React/TypeScript, una institución), lo que limita la generalización.
- Diseño correlacional: no se controlan variables como el rendimiento académico previo de los estudiantes.

## Notas relacionadas

- [[concepts/educacion-en-programacion]]
- [[concepts/inteligencia-artificial]]
- [[concepts/motivacion-y-compromiso-estudiantil]]
- [[concepts/pensamiento-critico]]
- [[concepts/evaluacion-educativa]]
- [[concepts/retroalimentacion-con-ia]]
- [[concepts/ensayo-controlado-aleatorio]]
- [[concepts/integridad-academica]]
- [[concepts/educacion-superior]]
