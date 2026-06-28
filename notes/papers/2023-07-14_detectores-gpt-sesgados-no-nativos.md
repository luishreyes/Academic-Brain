---
title: "GPT detectors are biased against non-native English writers"
authors: ["Weixin Liang", "Mert Yuksekgonul", "Yining Mao", "Eric Wu", "James Zou"]
year: 2023
journal: "Patterns"
url: https://doi.org/10.1016/j.patter.2023.100779
doi: 10.1016/j.patter.2023.100779
pdf_local: sources/pdfs/integrity-by-design/liang_2023_gpt-detectors-biased-nonnative.pdf
type: paper
keywords: [deteccion-de-texto-ia, integridad-academica, equidad-educativa, inteligencia-artificial, procesamiento-de-lenguaje-natural, ensenanza-de-lenguas, etica-de-la-ia, evaluacion-educativa]
date_added: 2026-06-28
---

# GPT detectors are biased against non-native English writers

## Resumen

Este artículo de opinión documenta un sesgo alarmante en los detectores de texto generado por IA (GPT detectors): clasifican erróneamente como "generados por IA" más de la mitad de los escritos de hablantes no nativos de inglés, mientras que mantienen una precisión casi perfecta con escritos de hablantes nativos. Los autores evaluaron siete detectores ampliamente usados sobre 91 ensayos TOEFL escritos por hablantes no nativos (provenientes de un foro chino) y 88 ensayos de estudiantes estadounidenses de octavo grado (dataset ASAP de la Hewlett Foundation). La tasa promedio de falsos positivos para los ensayos TOEFL fue del 61,3%; los siete detectores coincidieron unánimemente en marcar como IA el 19,8% de esos ensayos humanos, y al menos un detector marcó el 97,8% de ellos.

La raíz del problema es la dependencia de los detectores en la perplejidad del texto (text perplexity), una medida de cuán "predecible" es la siguiente palabra para un modelo de lenguaje. Los escritos no nativos tienden a exhibir menor perplejidad —debido a un vocabulario y una gramática más limitados—, rasgo que comparten con el texto generado por IA, lo que provoca la mala clasificación. Los autores demuestran la relación causal mediante dos intervenciones: al pedirle a ChatGPT que enriqueciera el vocabulario de los ensayos TOEFL para sonar más como un hablante nativo, la tasa de falsos positivos cayó del 61,3% al 11,6%; inversamente, al simplificar el vocabulario de los ensayos de estudiantes nativos, la mala clasificación aumentó sustancialmente.

El estudio también revela la fragilidad de los detectores frente a la evasión deliberada: ensayos de admisión universitaria (Common App) y abstracts científicos generados por ChatGPT, inicialmente detectados, pasaron a tasas de detección cercanas a cero con solo pedirle al modelo que "elevara" el texto con lenguaje más literario. Esto plantea una paradoja central: si el contenido generado por IA puede evadir fácilmente la detección mientras el texto humano es marcado con frecuencia, la utilidad real de estos detectores queda en entredicho.

Los autores advierten que el uso de estos detectores en entornos evaluativos y educativos puede marginar a los hablantes no nativos, exponiéndolos a acusaciones falsas de deshonestidad académica con consecuencias graves para su carrera y bienestar psicológico, e instaurar una "presunción de culpa". Señalan además una ironía: el sesgo podría empujar a los no nativos a usar GPT precisamente para refinar su escritura y sonar más "nativos", evadiendo así la detección.

## Contribuciones principales
- Primer examen sistemático del sesgo de los detectores GPT contra hablantes no nativos de inglés, con evidencia empírica cuantitativa (FPR promedio del 61,3% en ensayos TOEFL).
- Identificación de la perplejidad del texto como el mecanismo causal del sesgo, validada mediante intervenciones bidireccionales (enriquecer vs. simplificar vocabulario).
- Demostración de que los detectores pueden ser evadidos trivialmente con un simple ajuste de prompt ("elevar" el texto con lenguaje literario).
- Recomendaciones de política: no usar detectores GPT en evaluación de no nativos; benchmarking con muestras diversas; diseño por expertos de dominio; y diálogo inclusivo con todos los actores.

## Metodología
Evaluación empírica de siete detectores GPT comerciales/públicos ampliamente usados sobre dos corpus de escritura humana: 91 ensayos TOEFL de no nativos y 88 ensayos de octavo grado de estudiantes estadounidenses. Intervenciones controladas usando ChatGPT para manipular el vocabulario (enriquecer/simplificar) y medir el cambio en la tasa de mala clasificación y en la perplejidad. Experimentos de evasión generando ensayos de admisión y abstracts científicos con ChatGPT y aplicando un prompt de auto-edición literaria. Análisis complementario de perplejidad en papers de ICLR 2023 según el idioma nativo del primer autor.

## Hallazgos clave
- Tasa promedio de falsos positivos del 61,3% para ensayos TOEFL de no nativos, frente a precisión casi perfecta para ensayos de nativos.
- Enriquecer el vocabulario de los ensayos TOEFL redujo la FPR al 11,6% (caída de 49,7 puntos) y elevó la perplejidad del texto.
- Simplificar el vocabulario de los ensayos de nativos aumentó su mala clasificación como IA.
- Un simple prompt de auto-edición ("elevar el texto con lenguaje literario") hizo caer la detección de texto generado por IA a casi cero.
- Los papers de ICLR 2023 con primeros autores de países no anglófonos mostraron menor perplejidad, incluso controlando por las calificaciones de revisión.

## Limitaciones
- Es un artículo de opinión que sintetiza un preprint previo de los autores; el detalle metodológico completo reside en ese preprint (arXiv:2304.02819).
- Los corpus son específicos (ensayos TOEFL de un foro chino y ensayos de octavo grado de EE. UU.); la generalización a otros idiomas, niveles y géneros de escritura no se prueba directamente.
- La evaluación corresponde a detectores y modelos GPT de 2023; los resultados pueden variar con versiones posteriores de modelos y detectores.

## Notas relacionadas
- [[concepts/deteccion-de-texto-ia]]
- [[concepts/integridad-academica]]
- [[concepts/equidad-educativa]]
- [[concepts/inteligencia-artificial]]
- [[concepts/procesamiento-de-lenguaje-natural]]
- [[concepts/ensenanza-de-lenguas]]
- [[concepts/etica-de-la-ia]]
- [[concepts/evaluacion-educativa]]
