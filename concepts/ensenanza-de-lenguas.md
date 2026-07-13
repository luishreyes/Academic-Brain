---
type: concept
keyword: ensenanza-de-lenguas
aliases: [language teaching, English language teaching, ELT, ensenanza del ingles, didactica de lenguas, language education]
---

# Enseñanza de lenguas

Campo de investigación y práctica sobre la enseñanza y el aprendizaje de lenguas (en particular el inglés como lengua extranjera/segunda lengua, ELT); incluye competencia lingüística y comunicativa, didáctica de lenguas y la integración de tecnología en el aula de idiomas.

## Qué dice la literatura

Tres estudios sobre detectores de texto generado por IA, publicados con tres años de diferencia, cuentan una historia de cómo un mismo hallazgo se sostiene, se matiza y finalmente se revierte. Liang et al. (2023) documentaron el caso fundacional: sobre 91 ensayos TOEFL de hablantes no nativos de inglés, siete detectores comerciales arrojaron una tasa promedio de falsos positivos del 61,3%, explicada por la menor perplejidad del inglés no nativo —vocabulario y gramática más limitados— que los detectores confunden con las huellas estadísticas de un LLM. Tres años después, Al Ali, Helcl y Libovický repiten el experimento pero cambian de idioma: en checo, una lengua de morfología compleja, encuentran el patrón invertido (p < 10⁻¹⁴) —los no nativos producen entropía igual o mayor, no menor, porque los errores gramaticales pesan más que el vocabulario limitado— y ningún detector muestra sesgo sistemático contra ellos. Más revelador aún: al reevaluar el propio dataset en inglés de Liang et al. con un detector comercial actual, el sesgo persiste pero se ha reducido del 61,3% al 23,1% de falsos positivos. Hadra, Cambridge y Mesbah, con Turnitin y Originality sobre escritura EFL, encuentran una señal en la misma dirección pero apenas al borde de la significancia (Fisher unilateral, p = 0,058; 100% de exactitud en textos profesionales frente a 91,6% en EFL). Leídos en conjunto, los tres estudios no confirman ni descartan el sesgo de forma simple: muestran que es dependiente del idioma —su mecanismo causal, la perplejidad, se comporta de forma opuesta según la morfología de la lengua— y sensible al tiempo, pues la tecnología de detección ha mejorado desde 2023 aunque el problema no ha desaparecido.

Ese hallazgo técnico entra en tensión directa con las notas del vault sobre desarrollo profesional docente. Zou, Kohnke y Xie diseñan su marco de competencia pedagógica en IA —con foco explícito en enseñanza de lenguas, desde universidades de Hong Kong— e incluyen la equidad entre los riesgos que los docentes deben aprender a mitigar; Lakhe Shrestha et al., en su indagación narrativa con cuatro profesores de inglés en Nepal, documentan que esas mismas preocupaciones éticas (sesgo algorítmico, privacidad de datos) surgen espontáneamente en el discurso de los docentes, no como imposición de un marco teórico. Hadra et al. cierran el círculo con una recomendación concreta: los detectores no deben usarse como base única para decisiones de integridad académica, sino como indicador que exige formación docente para interpretarlos con cautela —exactamente la "alfabetización en IA" que Zou et al. y Lakhe Shrestha et al. señalan como vacío en la preparación de profesores de idiomas. El Espejo Cognitivo de Tomisu et al. anticipa una variante futura del mismo problema: advierten que su propio Índice de Calidad de la Enseñanza (TQI), si se entrena sobre un estilo de explicación "estándar", podría penalizar a aprendices con estilos retóricos distintos (narrativos u holísticos) —el mismo mecanismo de sesgo algorítmico contra la desviación de la norma que documentan los estudios de detección, ahora desplazado de la detección a la evaluación pedagógica.

El estudio de Bencsik et al. sobre acceso global a ChatGPT añade una capa previa a cualquier cuestión de sesgo algorítmico: el "apoyo lingüístico" es uno de sus tres factores de nivel meso (junto al institucional), pero no muestra efecto directo significativo sobre el uso, mediado en cambio por el acceso funcional y el desarrollo digital nacional (IDI). Leído junto con el resto del corpus, esto sugiere que la desigualdad que enfrenta el hablante no nativo en la enseñanza de lenguas mediada por IA no es de un solo tipo: primero debe superar barreras de acceso material y funcional para usar la herramienta (Bencsik et al.), y si lo logra —o incluso si no usa IA en absoluto—, enfrenta el riesgo adicional de que su propio texto, por las huellas estadísticas de su condición de no nativo, sea malinterpretado por los mismos sistemas que deberían evaluarlo con justicia.

## Notas que usan este concepto
- [[notes/papers/2025-06-04_genai-desarrollo-profesional-docente-tpack]]
- [[notes/papers/2025-04-23_marco-competencia-ia-pedagogica-docentes]]
- [[notes/papers/2026-01-16_evaluacion-detectores-ia-contextos-academicos]]
- [[notes/papers/2026-03-26_sesgo-detectores-gpt-no-nativos-checo]]
- [[notes/papers/2023-07-14_detectores-gpt-sesgados-no-nativos]]
- [[notes/papers/2026-06-28_chatgpt-acceso-digital-desigualdad-global]]
- [[notes/papers/2025-10-09_cognitive-mirror-metacognicion-ia]]
- [[notes/papers/2026-07-10_ia-escritura-colaborativa-cohesion-l2]]
