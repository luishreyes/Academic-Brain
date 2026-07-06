---
title: "Using an educator-guided generative artificial intelligence (GenAI) tool for developing communication skills in undergraduate pharmacy students"
authors: [Angelina Lim, Emily Stokes, Li-Ling Yeap, Amna C. Mazeh, Ethan Kreutzer, Joel Moore]
year: 2026
journal: Currents in Pharmacy Teaching and Learning
url: https://doi.org/10.1016/j.cptl.2026.102675
doi: 10.1016/j.cptl.2026.102675
pdf_local: sources/pdfs/ai-education/lim-2026-genai-comunicacion-farmacia.pdf
type: paper
keywords: [educacion-medica, comunicacion-interpersonal, pacientes-virtuales, retroalimentacion-con-ia, evaluacion-educativa, motivacion-y-compromiso-estudiantil, inteligencia-artificial, alfabetizacion-en-ia, personalidad-introversion]
date_added: 2026-07-05
---

# Using an educator-guided generative artificial intelligence (GenAI) tool for developing communication skills in undergraduate pharmacy students

## Resumen
La comunicación clínica competente es esencial para los egresados de farmacia, pero practicarla de forma realista es costoso (OSCE formativos) o limitado (talleres con pares). Los autores, de Monash University, presentan y evalúan ATLAS (Authentic Teaching & Learning Applications Simulation), un prototipo de IA generativa guiado por educadores que ofrece simulaciones en tiempo real con avatares de pacientes y entrega retroalimentación verbal y no verbal. Técnicamente, ATLAS usa una arquitectura multi-modelo: Claude Sonnet (Anthropic) como motor conversacional y de generación de retroalimentación, y GPT-4 Vision (OpenAI) para el análisis de lenguaje corporal, integrando reconocimiento de voz, procesamiento de lenguaje natural, texto-a-voz y avatares generados con Midjourney. La supervisión del educador es central: define los parámetros de los avatares, los criterios de evaluación alineados a objetivos de aprendizaje y la estructura de la conversación, con salvaguardas éticas que restringen el algoritmo de retroalimentación a los criterios especificados.

El estudio es cuasi-experimental, con un diseño de grupos no equivalentes sobre 514 estudiantes de segundo año de Farmacia que rindieron el mismo OSCE sumativo: 201 usaron ATLAS al menos una vez y 313 sirvieron de control. Un mes antes del OSCE, los estudiantes accedieron voluntariamente (sin incentivos) a ATLAS. El resultado primario fue el cambio en el puntaje de comunicación del OSCE respecto al del año anterior. Los usuarios de ATLAS mostraron una mejora significativa (aumento mediano = 1,55 puntos, p = 0,0045), mientras que los controles no cambiaron (p = 0,7). La relación uso-desempeño fue creciente: las mejoras aparecieron a partir de tres o más conversaciones (+6,6 con tres, +8,3 con cinco, +7,8 con seis o más), con efectos de tamaño pequeño a mediano (r = 0,29–0,41).

Tras controlar el desempeño basal, el género y el estatus (nacional/internacional) mediante regresión beta, el uso de ATLAS siguió asociándose a mejores puntajes de comunicación en la estación de atención primaria (β = 0,37, IC95% [0,13, 0,61], p = 0,003), aunque no en la estación de historia clínica (β = −1,10, p = 0,334). Las estudiantes mujeres y las nacionales se beneficiaron más; los hombres se beneficiaron menos en atención primaria (interacción género × ATLAS, p = 0,017). En las percepciones (encuesta a 200 usuarios), 80% quería más escenarios de este estilo y 68% valoró la retroalimentación como significativa, aunque 73,5% seguía considerando la práctica presencial más eficaz para desarrollar empatía y matices comunicativos, y persistía cierta "hesitancy" ante la IA. Los autores concluyen que ATLAS es un complemento valioso —especialmente para estudiantes menos extrovertidos, que valoran practicar en privado antes de hacerlo frente a pares— y recomiendan ensayos aleatorizados multi-sitio para reducir el sesgo de autoselección.

## Contribuciones principales
- Presenta ATLAS, un tutor de simulación de pacientes con IA generativa multi-modelo (Claude Sonnet + GPT-4 Vision) guiado por educadores, con retroalimentación verbal y no verbal.
- Aporta evidencia asociacional (no solo de percepción o factibilidad) de que el uso repetido de la herramienta correlaciona con mejores puntajes de comunicación en el OSCE sumativo.
- Muestra una relación dosis-respuesta: los beneficios emergen a partir de tres o más conversaciones.
- Documenta un efecto diferencial por demografía (mujeres y estudiantes nacionales se benefician más) y por subhabilidad comunicativa (atención primaria sí, historia clínica no tras ajustar).

## Metodología
Estudio cuasi-experimental de grupos no equivalentes en una universidad australiana (2024). Datos cuantitativos y cualitativos: registros de uso del back-end de ATLAS, calificaciones de OSCE y una encuesta transversal con preguntas cerradas (Likert de 5 puntos) y reflexiones abiertas. Tres análisis: (1) longitudinal del cambio en el puntaje de comunicación respecto al año previo; (2) transversal de calificación vs. número de intentos; (3) análisis de percepciones solo en el grupo ATLAS. Datos no normales analizados con pruebas no paramétricas (Kruskal-Wallis con post-hoc de Dunn, Mann-Whitney, correlación biserial de rangos como tamaño de efecto) y regresión beta (paquete betareg en R) para controlar confusores. Las reflexiones abiertas se codificaron deductivamente bajo el modelo tridimensional de compromiso de Fredricks (conductual, emocional, cognitivo) con generación de temas asistida por GPT-4o y validación manual por dos investigadores.

## Hallazgos clave
- Usuarios de ATLAS: mejora significativa en comunicación (mediana +1,55; p = 0,0045); controles sin cambio (p = 0,7).
- Relación dosis-respuesta: mejoras significativas desde tres conversaciones (+6,6) hasta cinco (+8,3) y seis o más (+7,8); efectos r = 0,29–0,41.
- Tras ajustar por basal, género y estatus, el efecto persistió en atención primaria (β = 0,37, p = 0,003) pero no en historia clínica (β = −1,10, p = 0,334).
- Mujeres y estudiantes nacionales se beneficiaron más; los estudiantes menos extrovertidos valoraron la práctica privada.
- 80% deseaba más escenarios similares, pero 73,5% aún prefería la práctica presencial para empatía y matices; persistió la "AI hesitancy".

## Limitaciones
- Diseño cuasi-experimental con uso voluntario (no aleatorizado): sesgo de autoselección (los usuarios tenían mejor desempeño basal, diferencia de 3,2 puntos, p = 0,0011), pese al ajuste por regresión beta.
- Confusores no medidos (motivación intrínseca, hábitos de estudio, búsqueda de apoyo externo) que pueden diferir entre grupos.
- Evidencia asociacional, no causal; mide puntajes de OSCE, no desenlaces clínicos reales.
- Estudio de un solo sitio y una sola cohorte; limitaciones técnicas del prototipo (lag, respuestas demasiado formales) que pudieron deprimir el efecto.

## Notas relacionadas
- [[concepts/educacion-medica]]
- [[concepts/comunicacion-interpersonal]]
- [[concepts/pacientes-virtuales]]
- [[concepts/retroalimentacion-con-ia]]
- [[concepts/evaluacion-educativa]]
- [[concepts/motivacion-y-compromiso-estudiantil]]
- [[concepts/inteligencia-artificial]]
- [[concepts/alfabetizacion-en-ia]]
- [[concepts/personalidad-introversion]]
