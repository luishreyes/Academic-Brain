---
title: "Different Time, Different Language: Revisiting the Bias Against Non-Native Speakers in GPT Detectors"
authors: ["Adnan Al Ali", "Jindřich Helcl", "Jindřich Libovický"]
year: 2026
journal: "Proceedings of the 19th Conference of the European Chapter of the Association for Computational Linguistics (EACL), Volume 4: Student Research Workshop"
url: 
doi: 
pdf_local: sources/pdfs/integrity-by-design/alali_2026_revisiting-bias-nonnative-czech.pdf
type: paper
keywords: [deteccion-de-texto-ia, integridad-academica, procesamiento-de-lenguaje-natural, inteligencia-artificial, sesgo-cognitivo, equidad-educativa, ensenanza-de-lenguas]
date_added: 2026-06-28
---

# Different Time, Different Language: Revisiting the Bias Against Non-Native Speakers in GPT Detectors

## Resumen

El trabajo revisita una afirmación influyente de Liang et al. (2023): que los detectores de texto generado por IA (GPT detectors) discriminan sistemáticamente a hablantes no nativos de inglés, marcando falsamente sus escritos como generados por IA debido a la baja perplejidad (perplexity) de sus textos. Los autores reexaminan estas conclusiones dos años después y, sobre todo, en un nuevo contexto lingüístico: el checo, una lengua de morfología compleja. Plantean tres preguntas: (Q1) ¿es la perplejidad de los textos de no nativos de checo menor que la de los nativos?; (Q2) ¿existe sesgo contra los no nativos en los detectores de checo?; (Q3) ¿es posible construir detectores que no dependan de la perplejidad?

A diferencia del inglés, los autores encuentran que los textos de hablantes no nativos de checo tienen entropía (y por tanto perplejidad) igual o ligeramente mayor que la de los nativos, no menor (p < 10^-14 en el corpus principal). Lo atribuyen a la morfología compleja del checo: los no nativos producen dos efectos opuestos sobre la entropía —vocabulario limitado (la reduce) y errores gramaticales/ortográficos (la aumentan)—, y en checo predomina el segundo, mientras que en inglés predomina el primero. Esto invierte el supuesto que sustentaba el sesgo reportado para el inglés.

Para responder Q2, los autores construyen y evalúan detectores de tres familias: un clasificador clásico (Naïve Bayes con características TF-IDF), un modelo preentrenado afinado (RobeCzech, tipo RoBERTa) y un detector comercial cerrado (Plagramme). Tras evaluarlos en múltiples dominios (corpus SYNv9, Wikipedia, noticias, ensayos de nativos y no nativos, y abstracts de tesis pre y post-ChatGPT), no hallan sesgo sistemático contra los hablantes no nativos de checo. El detector comercial alcanza el mejor desempeño general sin sesgo consistente. Además, al evaluar el detector comercial sobre los datos originales en inglés de Liang et al., observan que el sesgo persiste pero se ha atenuado considerablemente desde 2023 (FPR de no nativos baja del 61.3% reportado al 23.1%).

Finalmente, mediante análisis de correlación (Q3), muestran que la correlación entre la entropía y las salidas de los detectores es muy débil (|ρ| ≤ 0.2), lo que indica que los detectores contemporáneos no dependen sustancialmente de la perplejidad. La conclusión central es que el sesgo de los detectores GPT es dependiente del idioma y sensible a su morfología, y que la tecnología de detección ha mejorado de forma notable desde 2023.

## Contribuciones principales
- Primera revisión empírica del sesgo de detectores GPT contra no nativos en checo, mostrando que las conclusiones de Liang et al. (2023) no se generalizan a esta lengua.
- Evidencia de que la perplejidad/entropía de textos de no nativos depende de la morfología de la lengua (errores gramaticales vs. vocabulario limitado).
- Construcción y evaluación de detectores de tres familias (Naïve Bayes + TF-IDF, RobeCzech afinado, detector comercial) en checo, con datasets multidominio.
- Demostración de que los detectores contemporáneos no dependen sustancialmente de la perplejidad (correlación |ρ| ≤ 0.2).

## Metodología
Estudio empírico de detección de texto generado por IA. Se curan múltiples datasets en checo: corpus auténtico SYNv9 con contrapartes generadas por GPT-4o, GPT-4o-mini y Llama 3.1 405B; crawls de Wikipedia y noticias; ensayos de no nativos (corpus AKCES) y nativos comparables; y abstracts de tesis pre- y post-ChatGPT. La entropía se mide con Llama 3.2 1B base como modelo de referencia (en lugar de GPT-2, que rinde mal en checo). Se entrenan y evalúan tres clases de detectores y se aplica aumento de datos aleatorio (RDA) para mitigar artefactos. Se usan pruebas de significancia estadística y análisis de correlación de Pearson intra-clase entre entropía y salidas de los detectores.

## Hallazgos clave
- En checo, los textos de no nativos tienen entropía igual o mayor que la de los nativos (opuesto al inglés).
- La entropía disminuye a medida que los estudiantes no nativos se vuelven más avanzados (menos errores gramaticales).
- Ningún detector evaluado mostró sesgo sistemático contra hablantes no nativos de checo.
- El detector comercial (Plagramme) superó a los detectores propios, que no alcanzaron el estado del arte.
- La correlación entre entropía y salidas de los detectores es muy débil: no dependen de la perplejidad.
- En el dataset original en inglés, el sesgo persiste pero se ha reducido fuertemente desde 2023.

## Limitaciones
- Acceso limitado a corpus de no nativos proficientes de checo: el dataset avanzado solo tiene 29 documentos.
- Número reducido de LLMs fuente para generar los textos.
- Los detectores propios no alcanzaron el desempeño del estado del arte.
- El detector comercial es propietario, lo que restringe el análisis a observaciones de "caja negra".
- Resultados específicos del checo; se requiere replicación en más lenguas para generalizar.

## Notas relacionadas
- [[concepts/deteccion-de-texto-ia]]
- [[concepts/integridad-academica]]
- [[concepts/procesamiento-de-lenguaje-natural]]
- [[concepts/inteligencia-artificial]]
- [[concepts/sesgo-cognitivo]]
- [[concepts/equidad-educativa]]
- [[concepts/ensenanza-de-lenguas]]
