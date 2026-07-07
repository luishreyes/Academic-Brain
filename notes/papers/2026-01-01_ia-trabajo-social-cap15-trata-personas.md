---
title: "AI in Human Trafficking Prevention and Safety"
authors: [Xi Wang, Noelle E. Fearn]
year: 2026
journal: "Artificial Intelligence in Social Work (An & Lindsey, eds.), Springer"
url: https://doi.org/10.1007/978-3-032-18443-6_15
doi: 10.1007/978-3-032-18443-6_15
pdf_local: sources/pdfs/ai-social-work/ch15-trata-de-personas.pdf
type: paper
keywords: [trabajo-social, violencia-de-genero, justicia-penal, procesamiento-de-lenguaje-natural, vision-por-computadora, analitica-predictiva, sesgo-algoritmico, revision-sistematica-de-literatura]
date_added: 2026-07-05
---

# AI in Human Trafficking Prevention and Safety

## Resumen
Este capítulo es una revisión sistemática de 46 artículos revisados por pares (2020-2025), identificados en cinco bases de datos (EBSCO, PubMed, ProQuest, Scopus, Web of Science), sobre el uso de la inteligencia artificial para prevenir la trata de personas y proteger a las víctimas. La trata —explotación sexual, trabajo forzoso, trata infantil y otras formas de coerción— se aborda como una violación de derechos humanos frente a la cual los métodos tradicionales (investigación manual, testimonio de víctimas, reportes fragmentados) resultan insuficientes ante traficantes que usan plataformas digitales, comunicaciones cifradas y movilidad internacional. Una tabla resume el foco geográfico, los métodos de IA, los dominios de aplicación y los resultados de cada estudio.

La sección metodológica organiza las técnicas en tres grandes bloques. Primero, aprendizaje automático para detección de patrones: identificación multimodal de víctimas y estimación de edad (SVM+CNN sobre tuits e imágenes, DeepUAge/ResNet50 con MAE de 2,73 años para caras de menores, envejecimiento de características para reconocimiento facial trans-edad), predicción espacial y vigilancia de salud pública (random forest para rutas de trata en China, redes neuronales que mapean prostitución en Chicago con 94% de exactitud) y detección de contenido ilícito en línea y rendición de cuentas corporativa (anuncios de escorts, reseñas de negocios de masajes, cumplimiento de normas antiesclavitud en cadenas de suministro). Segundo, aprendizaje profundo y redes neuronales: CNN para identificación basada en imágenes (niños desaparecidos, uniformes escolares, reconocimiento de hoteles), modelos recurrentes y transformers (BERT, Longformer, NEAT, SWEET) para reconocimiento de patrones textuales en anuncios ofuscados, y sistemas de vigilancia en tiempo real. Tercero, enfoques híbridos y de ensamble que combinan texto, imagen y metadatos para mejorar robustez e interpretabilidad.

La segunda parte del capítulo analiza el foco geográfico (Sur y Sudeste asiático; contextos occidentales como EE. UU., Canadá y Europa; sectores de alto riesgo como pesca, construcción y negocios de masaje ilícitos) y el uso de la IA en la aplicación de la ley y el apoyo a víctimas: análisis de redes y aumento de inteligencia investigativa, vigilancia y alerta temprana, autenticación de documentos, identificación y recuperación de víctimas (reconocimiento facial, cotejo de imágenes, extracción de nombres) y disrupción del lado de la demanda (perfilado de ofensores, detección de depredadores en línea como PrevBOT, disrupción de mercados ilícitos). De forma transversal, el capítulo insiste en los riesgos éticos: opacidad de los modelos "caja negra", privacidad y consentimiento, exceso de vigilancia, sesgo algorítmico contra subgrupos lingüísticos o demográficos, y el riesgo de retraumatización o criminalización de las propias víctimas. Los autores reclaman valores centrados en la persona sobreviviente, gobernanza interdisciplinaria y supervisión humana.

## Contribuciones principales
- Revisión sistemática de 46 estudios que sintetiza métodos de IA, focos geográficos, dominios de aplicación y resultados en la lucha antitrata.
- Taxonomía de técnicas (aprendizaje automático, aprendizaje profundo/redes neuronales, modelos híbridos y de ensamble) con casos y métricas concretas.
- Panorama de aplicaciones a la aplicación de la ley y al apoyo a víctimas, incluyendo la disrupción del lado de la demanda.
- Síntesis crítica de los riesgos éticos (vigilancia, privacidad, sesgo, criminalización) y llamado a marcos de gobernanza centrados en el sobreviviente.

## Metodología
Revisión sistemática de literatura: búsqueda en cinco bases de datos académicas de artículos revisados por pares publicados entre 2020 y 2025, con síntesis narrativa y tabular de las técnicas de IA, sus aplicaciones y resultados.

## Hallazgos clave
- Los modelos de PLN y transformers (BERT, Longformer, NEAT, SWEET) destacan en la extracción de nombres y entidades de anuncios de escorts ofuscados, superando benchmarks previos.
- La visión por computadora permite estimación de edad especializada para menores (DeepUAge, MAE 2,73), reconocimiento facial trans-edad y geolocalización por reconocimiento de hoteles incluso con imágenes ocluidas.
- Los modelos de ensamble (p. ej., Random Forest, F1 hasta 0,962) mantienen desempeño robusto en entornos textuales adversariales donde los traficantes ofuscan el lenguaje.
- La efectividad real en términos de rescates, resultados legales y adopción de políticas está pobremente evaluada pese al avance técnico de los modelos.
- Persisten riesgos de sesgo, vigilancia sin consentimiento, criminalización de víctimas y tensiones legales (debido proceso, admisibilidad de evidencia) que exigen supervisión humana e interdisciplinaria.

## Limitaciones
- Muchos estudios priorizan el desempeño algorítmico sobre evaluaciones centradas en la víctima o el usuario.
- Escasez de validación del impacto real (tasas de rescate, resultados judiciales) y de datasets de alta calidad, sobre todo en lenguas e contextos de bajos recursos.
- Modelos "caja negra" difíciles de auditar en procesos legales; el origen y la anotación ética de los datos de entrenamiento (anuncios, redes sociales) es problemático.

## Notas relacionadas
- [[concepts/violencia-de-genero]]
- [[concepts/trabajo-social]]
- [[concepts/justicia-penal]]
- [[concepts/procesamiento-de-lenguaje-natural]]
- [[concepts/vision-por-computadora]]
- [[concepts/analitica-predictiva]]
- [[concepts/sesgo-algoritmico]]
- [[concepts/revision-sistematica-de-literatura]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap14-justicia-penal]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap16-justicia-social]]
