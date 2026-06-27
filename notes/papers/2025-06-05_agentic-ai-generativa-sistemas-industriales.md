---
title: Industrial Agentic AI and generative modeling in complex systems
authors: [Mohammad Reza Boskabadi, Yudong Cao, Behnam Khadem, William Clements, Z. Nevin Gerek, Eric Reuthe, Abhishek Sivaram, Christopher J. Savoie, Seyed Soheil Mansouri]
year: 2025
journal: Current Opinion in Chemical Engineering
url: https://doi.org/10.1016/j.coche.2025.101150
doi: 10.1016/j.coche.2025.101150
pdf_local: sources/pdfs/capability-reliability/boskabadi_2025_industrial-agentic-genai.pdf
type: paper
keywords: [agentes-de-ia, inteligencia-artificial, ingenieria-quimica, simulacion-computacional, modelado-molecular, sostenibilidad, ciencia-de-datos, biologia-sintetica]
date_added: 2026-06-27
---

# Industrial Agentic AI and generative modeling in complex systems

## Resumen

Este artículo de revisión (themed issue "Innovations in Chemical Engineering") propone una arquitectura integrada de retroalimentación y control para sistemas industriales complejos que combina IA agéntica, modelado generativo y gemelos digitales. Los autores parten del problema de que los procesos de manufactura, consumo, transporte y cadenas de suministro son inherentemente no lineales y poseen variables críticas difíciles o imposibles de medir en tiempo real. Frente a esto, plantean el uso de "sensores blandos" (soft sensors) —modelos estadísticos y generativos que infieren variables no observables (QIVs, quality indicator variables) a partir de variables fácilmente medibles— integrados en conjuntos (ensembles) de agentes de inferencia semiautónomos.

El aporte central es una arquitectura sistemática de tres etapas, denominada SIC (Sense, Infer, Control / Sentir, Inferir, Controlar): (1) construir un flujo de proceso e instrumentación que identifique las QIVs críticas y mapee variables a una base de conocimiento (modelos mecanísticos, datos paramétricos, solvers, sensores físicos y blandos); (2) modelado "agentificado" que combina modelos mecanísticos con IA para monitorear esas variables mediante medición directa o predicción; y (3) integración de los datos en el sistema de control (SCADA/DCS, PLC), dándole agencia para tomar decisiones autónomas en tiempo real. Los autores distinguen explícitamente entre los "AI agents" tradicionales (procesamiento especializado y tareas predictivas) y la "Agentic AI" que imparte capacidad autónoma de toma de decisiones.

El artículo subraya que el verdadero potencial de la IA generativa va más allá de los LLMs de texto: modelos como GANs, modelos difusivos y similares pueden capturar relaciones no lineales y llenar vacíos en el entendimiento del proceso. Sin embargo, los autores insisten en que un enfoque híbrido —que combine IA generativa con conocimiento mecanístico y de dominio— es necesario para garantizar explicabilidad, interpretabilidad y robustez en entornos industriales y de seguridad crítica.

La validación conceptual se realiza mediante cuatro casos de estudio industriales: optimización de estrategia de automovilismo en tiempo real (Zapata AI / Andretti Autosport), sensores blandos para manufactura sostenible de azúcar (Nordzucker / DTU), formulaciones químicas personalizadas de productos cosméticos (Henkel SalonLab) y escalado de biomanufactura con agentes cuánticos y clásicos (pipeline Qψ-TUBE).

## Contribuciones principales

- Propuesta de una arquitectura sistemática de tres etapas (SIC: Sense, Infer, Control) que unifica flujos de instrumentación de proceso, modelado mecanístico/IA agentificado y control impulsado por IA agéntica.
- Distinción conceptual entre "AI agents" (tareas predictivas especializadas) y "Agentic AI" (toma de decisiones autónoma y adaptativa).
- Énfasis en el modelado generativo más allá de los LLMs como herramienta para construir sensores blandos que infieren QIVs no medibles directamente.
- Demostración de la versatilidad del enfoque a través de cuatro casos industriales de dominios muy distintos.
- Propuesta de un enfoque híbrido cuántico-clásico (Qψ-TUBE, con módulos MicroTUBE y MacroTUBE) para el escalado de bioprocesos usando QUBO/SDP y modelos generativos difusivos.

## Metodología

Artículo de revisión y opinión (Current Opinion) que articula una propuesta arquitectónica conceptual y la ilustra con cuatro casos de estudio industriales reales o en desarrollo. No presenta experimentos controlados propios; cada caso mapea sus flujos de instrumentación (Etapa 1), componentes de modelado agentificado (Etapa 2) e integración de control con IA agéntica (Etapa 3) sobre operaciones del mundo real (resumido en la Tabla 1). El caso de cristalización de azúcar se apoya en validación de soft sensor reportada en trabajos previos de los autores (Boskabadi et al.).

## Hallazgos clave

- Los modelos generativos pueden crear datos sintéticos ("sensores virtuales") que imitan mediciones reales, llenando vacíos donde la medición directa es poco fiable o no disponible (ej. ángulo de deslizamiento y degradación de neumáticos en motorsport).
- En la cristalización de azúcar de remolacha, un sensor blando híbrido (mecanístico + ML) predijo el índice Brix en tiempo real, reduciendo el tiempo de residencia del lote y, con ello, el consumo de energía y las emisiones de CO₂, aumentando la capacidad de producción.
- En productos de consumo (Henkel SalonLab), modelos quimiométricos predicen métricas del cabello (ácido cisteico, "bulk effect", color) desde espectroscopía NIR, y LLMs traducen preferencias del consumidor en parámetros de formulación hiperpersonalizados.
- En biomanufactura, un enfoque híbrido cuántico-clásico permite estimación de rutas metabólicas, sensado comprimido y estimación del estado del biorreactor mediante modelos generativos difusivos.
- Procesar en el borde (edge) reduce la latencia frente a arquitecturas solo en la nube, esencial para soporte de decisión en tiempo real.

## Limitaciones

- Los datasets representativos de alta calidad son escasos o costosos, lo que restringe el entrenamiento y la generalización de los modelos.
- La integración con experimentos de laboratorio se ve obstaculizada por formatos de datos y escalas temporales incompatibles.
- La naturaleza de "caja negra" de muchas arquitecturas generativas genera preocupaciones de interpretabilidad y confianza, especialmente en aplicaciones de seguridad crítica.
- La toma de decisiones agéntica en tiempo real a escala exige recursos computacionales significativos e infraestructura edge-to-cloud robusta, no siempre disponible.
- Los modelos puramente basados en datos pueden producir recomendaciones erróneas o inseguras si no se anclan en conocimiento mecanístico del proceso (de ahí la necesidad de enfoques híbridos).

## Notas relacionadas

- [[concepts/agentes-de-ia]]
- [[concepts/inteligencia-artificial]]
- [[concepts/ingenieria-quimica]]
- [[concepts/simulacion-computacional]]
- [[concepts/modelado-molecular]]
- [[concepts/sostenibilidad]]
- [[concepts/ciencia-de-datos]]
- [[concepts/biologia-sintetica]]
