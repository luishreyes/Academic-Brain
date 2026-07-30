---
title: "Assessment of ChatGPT for Engineering Statics Analysis"
authors: [Benjamin Hope, Jayden Bracey, Sahar Choukir, Derek Warner]
year: 2026
journal: Computer Applications in Engineering Education
url: https://doi.org/10.1002/cae.70210
doi: 10.1002/cae.70210
pdf_ref: hope-2026-chatgpt-estatica-ingenieria.pdf
sha256: 39457f4d2e65375e92d9f2c024fa27d8886a3cf0dba891f7b6ea13ae4fffb3ce
type: paper
visibility: public
keywords: [educacion-en-ingenieria, razonamiento-cuantitativo-llm, capacidades-de-ia, evaluacion-educativa, ingenieria-de-prompts, razonamiento-multimodal, alucinaciones-de-ia, inteligencia-artificial]
date_added: 2026-07-05
---

# Assessment of ChatGPT for Engineering Statics Analysis

## Resumen
El estudio evalúa la fiabilidad de ChatGPT (GPT-4o y o1-preview) resolviendo problemas de estática (mecánica) de ingeniería, un curso fundamental de primer año en las carreras de ingeniería civil y mecánica. Los problemas van desde cálculos básicos de la segunda ley de Newton (F = ma) hasta análisis de vigas, armaduras (trusses), marcos y equilibrio 3D en cables. El objetivo es determinar si el alto rendimiento de los LLM en exámenes estandarizados —donde suelen superar el percentil 90— se traslada a un dominio que exige razonamiento cuantitativo riguroso, adherencia estricta a leyes físicas, interpretación de diagramas de cuerpo libre y razonamiento secuencial de múltiples pasos.

El hallazgo central es una brecha entre la fluidez lingüística de los modelos y su precisión numérica en tareas de ingeniería. Con prompts básicos (zero-shot), ChatGPT falla con frecuencia en problemas de múltiples pasos: identifica correctamente los conceptos pero comete errores conceptuales (confundir tensión y compresión en miembros de armadura, malinterpretar signos de momentos), errores de procedimiento (omitir fuerzas en diagramas de cuerpo libre, aplicar mal el equilibrio) y errores computacionales (aritmética defectuosa al descomponer 9,81 en 9 + 0,81). El razonamiento en cadena (chain-of-thought) mejora el razonamiento lógico pero es una fuente común de errores aritméticos; instruir al modelo a usar Python para todos los cálculos elimina esas discrepancias.

Para mejorar el desempeño, los autores desarrollaron un Custom GPT que incrusta prompts refinados directamente en sus instrucciones. Este modelo optimizado alcanzó entre 82% y 86% en el examen de estática según la versión, superando el promedio de 75% de los estudiantes de primer año. Pese a esta mejora, los LLM siguieron fallando en problemas matizados o abiertos y en la interpretación de imágenes/diagramas (misidentificación de nodos, ángulos y tipos de apoyo). Los autores concluyen que la IA promete como herramienta de apoyo, pero que aún requiere mejor razonamiento, capacidades multimodales y datos de entrenamiento dirigidos antes de automatizar el análisis estructural.

## Contribuciones principales
- Primera evaluación sistemática, a nivel de problema, del desempeño de LLM (GPT-4o y o1-preview) en problemas auténticos de estática de ingeniería, comparándolos con estudiantes reales de primer año.
- Demostración de que un Custom GPT con prompts refinados alcanza 82-86%, superando el promedio estudiantil de 75%, evidenciando el impacto de la guía dirigida.
- Taxonomía de errores de los LLM en estática: (1) malinterpretación conceptual y errores de procedimiento, (2) errores computacionales, y (3) mala representación gráfica.
- Evidencia de que instruir el uso de Python para los cálculos elimina los errores aritméticos introducidos por el razonamiento en cadena.

## Metodología
Se evaluaron GPT-4o (temperatura 0.7, multimodal) y o1-preview (parámetros de muestreo internos, optimizado para razonamiento) sobre un conjunto de problemas de estática tomados de textos canónicos (Hibbeler, Beer y Johnston) y de un examen final típico de un curso de Mecánica I. Se compararon tres estrategias de prompting: zero-shot, few-shot (con ejemplos resueltos) y chain-of-thought (CoT), evaluando tanto la corrección de la respuesta final como el razonamiento paso a paso. Se probaron prompts basados en texto y en imágenes. Finalmente se construyó un Custom GPT con prompts embebidos y se contrastó su desempeño en el examen contra el de los estudiantes. Los temas cubren resolución vectorial de fuerzas, equilibrio, análisis de armaduras, vigas bajo cargas distribuidas, marcos rígidos y tensión en cables en sistemas 3D, alineados con los resultados de aprendizaje acreditados por ABET.

## Hallazgos clave
- El Custom GPT optimizado obtuvo 82-86% en el examen, superando el 75% promedio de los estudiantes de primer año.
- En quantitative reasoning los LLM son notablemente débiles pese a su fuerte razonamiento verbal; la complejidad del problema importa menos que la claridad y estructura del prompt.
- Errores recurrentes: confundir tensión/compresión en armaduras, asignar mal las direcciones de momentos, omitir componentes de reacción y descomponer números en sub-pasos que introducen errores de redondeo.
- El razonamiento en cadena mejora la lógica pero genera errores aritméticos; forzar el uso de Python los corrige por completo.
- Los prompts basados en imágenes producen errores de interpretación gráfica (nodos, ángulos, tipos de apoyo mal identificados), evidenciando límites del procesamiento multimodal actual.
- Few-shot y CoT dependen críticamente de la pericia del usuario para construir buenos ejemplos, algo que suele faltar en estudiantes junior.

## Limitaciones
- Muestra pequeña de problemas de examen provenientes de un solo contexto institucional.
- No se evaluaron algunos temas centrales de estática (fricción, momentos de inercia, trabajo virtual, diagramas de fuerza cortante y momento flector).
- La estocasticidad de los modelos (temperatura no nula en GPT-4o; procesos internos en o1-preview) compromete la repetibilidad, crítica en aplicaciones de ingeniería.
- Las alucinaciones no se eliminan por completo pese a la ingeniería de prompts.

## Notas relacionadas
- [[concepts/educacion-en-ingenieria]]
- [[concepts/razonamiento-cuantitativo-llm]]
- [[concepts/capacidades-de-ia]]
- [[concepts/evaluacion-educativa]]
- [[concepts/ingenieria-de-prompts]]
- [[concepts/razonamiento-multimodal]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/inteligencia-artificial]]
