---
title: Evaluating the accuracy and reliability of AI content detectors in academic contexts
authors: [Mohammad Hadra, Karleen Cambridge, Mostefa Mesbah]
year: 2026
journal: International Journal for Educational Integrity
url: https://doi.org/10.1007/s40979-026-00213-1
doi: 10.1007/s40979-026-00213-1
pdf_local: sources/pdfs/integrity-by-design/hadra_2026_evaluating-ai-detectors-efl.pdf
type: paper
keywords: [deteccion-de-texto-ia, integridad-academica, inteligencia-artificial, ensenanza-de-lenguas, equidad-educativa, evaluacion-educativa, etica-de-la-ia, capacidades-de-ia, educacion-superior]
date_added: 2026-06-28
---

# Evaluating the accuracy and reliability of AI content detectors in academic contexts

## Resumen

El estudio evalúa la fiabilidad de dos detectores comerciales de contenido generado por IA —Turnitin y Originality— en contextos de integridad académica, con atención especial a estudiantes de inglés como lengua extranjera (EFL). Los autores construyen un conjunto de datos balanceado de 192 textos repartidos en cuatro categorías de autoría (48 cada una): escritura auténtica de estudiantes EFL producida antes de la disponibilidad masiva de IA generativa (agosto de 2022), textos profesionales humanos (corpus XSum de la BBC), textos generados por IA (GPT-4.1 y Claude 3 Opus) y composiciones híbridas con mezcla 50/50 humano-IA. Las salidas probabilísticas de los detectores se mapean a tres clases (Human, Hybrid, AI) usando umbrales establecidos (0-20% = Human, 21-79% = Hybrid, ≥80% = AI) y se evalúan con métricas de clasificación estándar y pruebas estadísticas de significancia.

Originality superó a Turnitin en exactitud global (0.69 vs. 0.61) y en recall macropromediado (0.60 vs. 0.51), pero ambos detectores rindieron mal en los textos híbridos —una forma de escritura estudiantil cada vez más común—, con Originality mostrando un recall casi nulo (0.02) para esa clase. Esto sugiere que los detectores están calibrados para distinciones binarias (IA vs. humano) y fallan al caracterizar autoría mixta. El rendimiento también se degradó significativamente al aumentar la longitud del texto y al variar el género: ambos detectores fueron notablemente menos exactos en escritura científica que en textos de humanidades (Turnitin: 0.51 vs. 0.86; Originality: 0.58 vs. 0.96), diferencias confirmadas como estadísticamente significativas por pruebas chi-cuadrado.

En cuanto a la equidad, Originality mostró una tendencia limítrofe (Fisher unilateral, p = 0.058) a clasificar con mayor exactitud los textos profesionales que la escritura EFL, clasificando correctamente el 100% de los textos profesionales frente al 91.6% de los textos EFL; Turnitin no exhibió diferencia significativa (p = 0.50). Aunque la tendencia no alcanza el umbral convencional de significancia, es direccionalmente consistente con la literatura emergente sobre sesgo de los detectores contra escritores no nativos, lo que plantea preocupaciones de justicia para instituciones que atienden poblaciones lingüísticamente diversas.

Los autores concluyen que ni Turnitin ni Originality son suficientemente fiables como base única para decisiones de mala conducta académica. Recomiendan tratarlos solo como indicadores complementarios que motiven una revisión adicional, y enfatizan la necesidad de juicio humano informado, políticas institucionales claras sobre el uso aceptable de IA, rediseño de evaluaciones centrado en proceso y reflexión, formación docente para interpretar las salidas con cautela, y métodos de detección más equitativos que tengan en cuenta la diversidad lingüística.

## Contribuciones principales

- Evaluación independiente de dos detectores comerciales ampliamente adoptados (Turnitin y Originality) con un conjunto de datos balanceado, autentico y multicategoría, frente a las afirmaciones de exactitud de los proveedores.
- Inclusión de escritura EFL auténtica producida antes de la era de la IA generativa, un vacío en la literatura previa que dependía sobre todo de corpus profesionales o sintéticos.
- Incorporación explícita de la categoría híbrida (mezcla humano-IA), revelando una limitación estructural de los detectores frente a la autoría mixta.
- Análisis del efecto de longitud, género y tipo de autoría sobre el rendimiento, aportando evidencia de potencial sesgo contra escritores no nativos.

## Metodología

Diseño de clasificación multiclase (3 clases) tratando a los detectores como clasificadores texto-a-etiqueta. Dataset de 192 textos balanceado en cuatro categorías de autoría (EFL, profesional, IA, híbrido), con variación natural en longitud (300-330, 450-550, 900-1100 palabras) y género (57 humanidades, 135 ciencia). Evaluación mediante matrices de confusión y métricas por clase (sensibilidad/recall, especificidad, precisión, F1, exactitud) con macropromedios dada la imbalance moderada. Pruebas estadísticas: chi-cuadrado de independencia (longitud y género) y prueba exacta de Fisher unilateral (tipo de autoría EFL vs. profesional). Aprobación ética de Sultan Qaboos University; textos anonimizados.

## Hallazgos clave

- Originality > Turnitin en exactitud global (0.69 vs. 0.61) y recall macro (0.60 vs. 0.51), pero ambos con F1 macro < 0.55.
- Los textos híbridos fueron los más difíciles de clasificar; Originality mostró recall casi nulo (0.02) para esa clase.
- La longitud del texto degrada el rendimiento: ambos detectores rindieron mejor en textos cortos (chi-cuadrado significativo: Turnitin p = 0.0149; Originality p = 0.0014).
- Efecto de género marcado: ambos peores en escritura científica que en humanidades (chi-cuadrado p < 0.001 para ambos), un riesgo estructural para estudiantes STEM.
- Indicio limítrofe de sesgo: Originality tendió a clasificar mejor los textos profesionales que los EFL (Fisher unilateral p = 0.058); Turnitin sin diferencia significativa (p = 0.50).

## Limitaciones

- Dataset modesto (192 textos), limitado en niveles académicos, géneros y trasfondos lingüísticos respecto a estudios de benchmarking a gran escala.
- Solo se evaluaron dos sistemas de detección; el comportamiento varía sustancialmente entre modelos y actualizaciones.
- Los textos híbridos se construyeron con mezcla fija 50/50, que no refleja los patrones dinámicos de hibridación (edición iterativa, uso selectivo de IA) de la práctica real.
- La tendencia de sesgo en Originality es limítrofe (p = 0.058) y no alcanza el umbral convencional de significancia.

## Notas relacionadas

- [[concepts/deteccion-de-texto-ia]]
- [[concepts/integridad-academica]]
- [[concepts/inteligencia-artificial]]
- [[concepts/ensenanza-de-lenguas]]
- [[concepts/equidad-educativa]]
- [[concepts/evaluacion-educativa]]
- [[concepts/etica-de-la-ia]]
- [[concepts/capacidades-de-ia]]
- [[concepts/educacion-superior]]
