---
title: "FairAIED: Navigating Fairness, Bias, and Ethics in Educational AI Applications"
authors: [Zhipeng Yin, Sribala Vidyadhari Chinta, Zichong Wang, Matthew Gonzalez, Wenbin Zhang]
year: 2024
journal: arXiv preprint (arXiv:2407.18745)
url: https://arxiv.org/abs/2407.18745
doi:
pdf_local: sources/pdfs/risks-overreliance-equity/yin_2024_fairaied-fairness-bias-eduai.pdf
type: paper
keywords: [sesgo-algoritmico, equidad-educativa, etica-de-la-ia, inteligencia-artificial, retroalimentacion-con-ia, personalizacion-del-aprendizaje, regulacion-de-ia, revision-sistematica-de-literatura, desigualdad-de-genero, evaluacion-educativa]
date_added: 2026-06-28
---

# FairAIED: Navigating Fairness, Bias, and Ethics in Educational AI Applications

## Resumen

Este survey ofrece una revisión sistemática y comprehensiva de la equidad algorítmica (algorithmic fairness) dentro de la IA educativa (AIED), con el objetivo explícito de tender un puente entre la investigación técnica sobre fairness y sus aplicaciones reales en educación. Los autores señalan que, aunque la integración de la IA en la educación promete personalizar el aprendizaje y transformar la enseñanza, los sistemas de IA pueden codificar y amplificar sesgos presentes en los datos educativos, produciendo resultados injustos o discriminatorios que afectan de forma desproporcionada a grupos estudiantiles históricamente marginados. El campo de la fairness educativa crece rápido pero permanece fragmentado por supuestos, metodologías y contextos de aplicación divergentes; además, los surveys previos o bien tratan la fairness algorítmica sin anclarla en lo educativo, o bien se centran en métodos pedagógicos ignorando la equidad.

La contribución central es un marco analítico unificado y centrado en la educación que integra cinco dimensiones: fuentes de sesgo, definiciones de fairness, estrategias técnicas de mitigación, recursos de evaluación (datasets y herramientas de benchmark) y consideraciones éticas. Sobre esa base, los autores extienden las taxonomías existentes de fairness —que tradicionalmente distinguen entre el nivel individual y el nivel de grupo— incorporando una dimensión novedosa de "sesgo multinivel" (multi-level bias), que captura situaciones en que un sesgo afecta simultáneamente a estudiantes individuales y a grupos demográficos, o en que corregir la equidad en un nivel distorsiona la del otro.

El trabajo cataloga numerosos tipos de sesgo ilustrados con casos reales: sesgo histórico (admisiones universitarias asistidas por IA que favorecen escuelas privilegiadas), sesgo de mapeo (modelos urbanos aplicados uniformemente a escuelas rurales en Marruecos), sesgo de representación (calificación automática de ensayos que penaliza a estudiantes ESL), sesgo de exclusión (herramientas inaccesibles para estudiantes con discapacidad o multilingües), sesgo de medición (puntuación más baja para ensayos en inglés vernáculo afroamericano), sesgo de confirmación (plataformas adaptativas que encierran al estudiante en sus fortalezas previas), y varios sesgos multinivel (LLMs en educación médica, sistemas de alerta temprana en K-12, guía vocacional que refuerza estereotipos de género, y sesgo por resultados censurados en datos incompletos).

Finalmente, el survey formaliza definiciones cuantitativas de fairness adaptadas al contexto educativo (paridad estadística, igualdad de oportunidad, paridad predictiva, equidad predictiva, fairness individual basada en distancia y la "Concordance Imparity" para datos censurados) y traza una agenda de retos abiertos: equilibrar personalización y privacidad, cerrar la brecha digital en acceso a IA, y mejorar la adopción mediante formación docente y estudiantil.

## Contribuciones principales

- Marco unificado y centrado en la educación que integra fuentes de sesgo, definiciones de fairness, mitigación técnica, recursos de evaluación y ética en un solo esquema.
- Taxonomía novedosa que añade la dimensión de **sesgo multinivel** a las clásicas dimensiones individual y de grupo.
- Atención explícita a retos prácticos poco tratados: resultados censurados o parcialmente observados y la dificultad de cuantificar el trade-off entre fairness y utilidad predictiva.
- Catálogo de definiciones formales de fairness (SPD, EO, PP, PE, fairness individual basada en distancia, Concordance Imparity) traducidas al lenguaje de resultados educativos.

## Metodología

Revisión sistemática de literatura sobre IA aplicada a la educación con foco en fairness, sesgo y ética, abarcando la última década. La búsqueda cubre IEEE Xplore, ACM Digital Library, PubMed, Scopus y Google Scholar con términos como "artificial intelligence in education", "AI fairness in education" y "bias in educational AI systems". Se aplican criterios explícitos de inclusión/exclusión, cribado de textos y extracción de datos para síntesis, con múltiples revisores para minimizar el sesgo de selección. La síntesis se ilustra con estudios de caso reales y se complementa con la formalización matemática de métricas de fairness.

## Hallazgos clave

- Los sesgos en IA educativa operan en tres niveles —individual, de grupo y multinivel—; las taxonomías tradicionales que separan fairness individual y de grupo pasan por alto las interacciones entre ambos.
- Sistemas de uso real (admisiones, calificación automática de ensayos, alerta temprana de deserción, plataformas adaptativas, guía vocacional) reproducen y amplifican desigualdades por raza, lengua, nivel socioeconómico, discapacidad y género.
- El sesgo por resultados censurados (registros incompletos por traslados, ausencias o continuidad sin resultado definitivo) afecta desproporcionadamente a estudiantes de comunidades desfavorecidas e inmigrantes y atraviesa los tres niveles de fairness.
- No existe un protocolo unificado para gestionar el trade-off entre equidad y utilidad predictiva, lo que vuelve inaplicables muchos marcos que asumen etiquetas completas.

## Limitaciones

- Es un survey, no un estudio empírico: no valida experimentalmente la eficacia comparada de las estrategias de mitigación que cataloga.
- La dimensión "multinivel" es una propuesta conceptual nueva cuya operacionalización y métricas dedicadas quedan en gran medida como trabajo futuro.
- El énfasis en casos y datasets predominantemente estadounidenses/anglófonos limita la generalización a otros sistemas educativos.
- Preprint de arXiv (no se evidencia revisión por pares en el texto extraído).

## Notas relacionadas

- [[concepts/sesgo-algoritmico]]
- [[concepts/equidad-educativa]]
- [[concepts/etica-de-la-ia]]
- [[concepts/inteligencia-artificial]]
- [[concepts/retroalimentacion-con-ia]]
- [[concepts/personalizacion-del-aprendizaje]]
- [[concepts/regulacion-de-ia]]
- [[concepts/revision-sistematica-de-literatura]]
- [[concepts/desigualdad-de-genero]]
- [[concepts/evaluacion-educativa]]
