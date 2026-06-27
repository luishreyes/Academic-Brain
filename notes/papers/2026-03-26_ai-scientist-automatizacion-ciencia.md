---
title: "Towards end-to-end automation of AI research"
authors: ["Chris Lu", "Cong Lu", "Robert Tjarko Lange", "Yutaro Yamada", "Shengran Hu", "Jakob Foerster", "David Ha", "Jeff Clune"]
year: 2026
journal: Nature
url: https://doi.org/10.1038/s41586-026-10265-5
doi: 10.1038/s41586-026-10265-5
pdf_local: sources/pdfs/ia-ciencia-sociedad/lu2026-ai-scientist-automatizacion.pdf
type: paper
keywords: [agentes-de-ia, descubrimiento-cientifico, inteligencia-artificial, capacidades-de-ia, alucinaciones-de-ia, publicacion-academica, etica-de-la-ciencia, supervision-humana, impacto-de-investigacion]
date_added: 2026-06-26
---

# Towards end-to-end automation of AI research

## Resumen

El AI Scientist es el primer sistema capaz de automatizar de extremo a extremo el ciclo completo de investigación en inteligencia artificial: desde la generación de ideas hasta la escritura y revisión de manuscritos académicos. El sistema integra modelos de lenguaje (GPT-4o, Claude) con un entorno de ejecución de código que permite idear hipótesis, implementarlas, ejecutar experimentos mediante búsqueda en árbol y redactar artículos en formato LaTeX con figuras y análisis estadísticos. El pipeline es operado por un agente que toma decisiones autónomas en cada etapa, sin intervención humana entre pasos.

El sistema opera en dos modos: uno basado en plantillas (template-based), donde parte de un código de experimento existente y lo expande iterativamente, y otro libre (template-free) que usa búsqueda en árbol agentica para generar ideas y experimentos desde cero. El Automated Reviewer —un componente de revisión automática que emula el proceso de peer review— genera un conjunto de cinco revisiones independientes y una meta-revisión, alcanzando 69 % de balanced accuracy en aceptar/rechazar trabajos previos a su fecha de corte y 66 % después, comparables al desempeño de revisores humanos.

En una prueba real de publicación, el sistema generó tres manuscritos y los sometió al workshop ICBINB de ICLR 2025: el 70 % fue aceptado (frente al 48 % de tasa base del workshop), y uno de ellos superó la revisión con una puntuación de 6.33 (umbral: 6). Este resultado es especialmente significativo porque demuestra que un agente de IA puede producir trabajo original suficientemente riguroso para superar el escrutinio de revisores humanos en un contexto real.

Los autores identifican limitaciones sustanciales: el sistema produce ideas frecuentemente derivadas o superficiales, comete errores de implementación, confabula resultados, duplica figuras y no tiene acceso a experimentos físicos o datos propios. Concluyen que los avances reales dependen de la calidad y el cómputo del modelo subyacente, que la supervisión humana sigue siendo indispensable, y que la automatización de la ciencia plantea riesgos de homogeneización del conocimiento y de erosión del reconocimiento de la contribución intelectual individual.

## Contribuciones principales

- Primer sistema end-to-end de automatización de investigación en IA: ideación → código → experimentos → manuscrito → revisión automática
- Automated Reviewer con balanced accuracy comparable a revisores humanos (66-69 %)
- Manuscrito generado que superó revisión por pares real en ICLR 2025 ICBINB workshop
- Modo template-free con búsqueda en árbol agentica para explorar el espacio de hipótesis desde cero
- Análisis empírico de cómo la calidad del agente y el cómputo escalan la calidad del output

## Metodología

El pipeline encadena cuatro módulos: (1) **Ideación** — el agente consulta la literatura existente (vía Semantic Scholar API) y propone ideas que puntúa según novedad, viabilidad e interés; (2) **Experimentación** — escribe o modifica código Python y lo ejecuta iterativamente con retroalimentación del intérprete, usando búsqueda en árbol para explorar variantes; (3) **Redacción** — compila resultados y genera un PDF en LaTeX con tablas y figuras; (4) **Revisión automatizada** — otro agente lee el PDF, produce reseñas en formato estándar de ML y emite un score de aceptación. El template-free mode añade una fase de ideación más extensa y estructura el espacio de búsqueda como árbol con estados: borrador, ejecutado, aceptado, rechazado.

## Hallazgos clave

- El AI Scientist generó ideas viables y ejecutables en ML (transformers, diffusion, RL), bio-inspirada y otras áreas computacionales
- 70 % de aceptación en ICLR 2025 ICBINB workshop; un paper con score 6.33 pasó el umbral de 6.0
- El Automated Reviewer tiene balanced accuracy 66-69 %, similar a revisores humanos promedio
- La calidad escala con la capacidad del modelo base (GPT-4o > modelos menos capaces) y con el cómputo invertido en búsqueda
- Costo estimado por paper: ~15 USD en tokens de API (al momento de la publicación)

## Limitaciones

- Ideas frecuentemente derivadas, con poca profundidad conceptual o falsamente novedosas
- Errores de implementación y alucinaciones en los resultados reportados
- Incapaz de realizar experimentos físicos, acceder a datos experimentales originales o conectarse a laboratorios reales
- Duplicación de figuras y problemas de presentación en algunos manuscritos
- No adecuado para envío a venues principales de conferencias (solo workshop)
- Riesgo de homogeneización del conocimiento científico y de "gaming" del sistema de peer review

## Notas relacionadas

- [[concepts/agentes-de-ia]]
- [[concepts/descubrimiento-cientifico]]
- [[concepts/inteligencia-artificial]]
- [[concepts/capacidades-de-ia]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/publicacion-academica]]
- [[concepts/etica-de-la-ciencia]]
- [[concepts/supervision-humana]]
- [[concepts/impacto-de-investigacion]]
