---
title: "Sketch2Simulation: Automating Flowsheet Generation via Multi Agent Large Language Models"
authors: ["Abdullah Bahamdan", "Emma Pajak", "John D. Hedengren", "Antonio del Rio Chanona"]
year: 2026
journal: "arXiv preprint (Sargent Centre for Process Systems Engineering, Imperial College London)"
url: https://arxiv.org/abs/2603.24629
doi: 10.48550/arXiv.2603.24629
pdf_local: sources/pdfs/capability-reliability/bahamdan_2026_sketch2simulation-flowsheet-multiagent.pdf
type: paper
keywords: [agentes-de-ia, inteligencia-artificial, simulacion-computacional, ingenieria-quimica, alucinaciones-de-ia, capacidades-de-ia, petroleo-y-gas]
date_added: 2026-06-27
---

# Sketch2Simulation: Automating Flowsheet Generation via Multi Agent Large Language Models

## Resumen

El paper aborda un cuello de botella persistente en la ingeniería de sistemas de procesos: la conversión de diagramas de proceso (sketches, PFDs) en modelos de simulación ejecutables. Tradicionalmente esta conversión exige esfuerzo manual considerable, experiencia específica del simulador y refinamiento iterativo. Los autores señalan que dos líneas de investigación recientes —la interpretación automatizada de diagramas de ingeniería y la generación de flowsheets asistida por LLM— han permanecido desconectadas: los métodos de comprensión de diagramas suelen detenerse en grafos o representaciones semánticas, mientras que los flujos de texto-a-simulación asumen entradas estructuradas en lugar de artefactos visuales en bruto.

Para cerrar esta brecha, proponen un sistema multi-agente de extremo a extremo basado en grandes modelos de lenguaje que convierte diagramas de proceso directamente en flowsheets ejecutables de Aspen HYSYS. El sistema descompone la tarea en tres capas coordinadas: (1) interpretación y parseo del diagrama, (2) síntesis del modelo de simulación, y (3) validación multinivel. Cada capa está compuesta por agentes especializados que manejan interpretación visual, construcción de una representación intermedia basada en grafos, generación de código para la interfaz COM de HYSYS, ejecución y verificación estructural.

Esta descomposición permite el "anclaje en ejecución" (execution grounding) y la localización explícita de errores, reduciendo el riesgo de alucinación de la IA mientras mantiene transparentes los modos de fallo. El sistema usa Gemini 3 Flash (en la nube) para la interpretación multimodal y modelos Qwen-Coder desplegados localmente para la síntesis de código, motivado por requisitos de gobernanza de datos del socio industrial (BASF). La orquestación se implementa en Python con LangGraph.

Se evalúa el marco en cuatro casos de estudio de complejidad creciente: desde un proceso de desalado simple hasta un flowsheet de producción de aromáticos de escala industrial con múltiples bucles de reciclo. El sistema produce modelos HYSYS ejecutables en todos los casos, alcanzando fidelidad estructural completa (F1 = 1.00) en los dos casos más simples y manteniendo alto desempeño en los más complejos (consistencia de conexión ≥ 0.93, consistencia de corrientes ≥ 0.96).

## Contribuciones principales

- Una arquitectura multi-agente de extremo a extremo para la generación automatizada de modelos de proceso a partir de diagramas visuales en ingeniería química.
- Una representación intermedia (IR) estructurada —grafo dirigido G=(V,E) instanciado como esquema JSON— que traduce información a nivel de diagrama en elementos de modelo compatibles con el simulador.
- Integración de la generación automatizada de modelos con validación y ejecución en Aspen HYSYS, demostrada en cuatro casos de estudio de complejidad creciente.

## Metodología

Sistema multi-agente con un orquestador central determinista (cada agente es un "transformador de estado": consume un estado validado y devuelve uno refinado). Tres capas:

- **Capa de interpretación:** Agente Descriptor (A1, LLM multimodal genera descripción del proceso), Agente Validador de Descripción (A1.1, evaluador independiente), Agente Extractor (A2, construye la IR JSON en dos pasadas: unidades y luego corrientes), Agente Normalizador (A3, reglas que resuelven junciones implícitas e insertan mixers/splitters y consolidan plantillas como columnas de destilación).
- **Capa de síntesis:** Agente Basis (B1, define paquete de propiedades y lista de componentes vía RAG sobre la base de datos de componentes de HYSYS), Agente de Instanciación (B2, crea el esqueleto estructural vía COM), Agente de Configuración (B3, establece conectividad), Agente de Ejecución (B4, híbrido regla + LLM que ejecuta y corrige el script Python COM).
- **Capa de validación multinivel:** validación de descripción, restricciones de esquema/salida, y validación de ejecución con corrección dirigida.

Modelos: Gemini 3 Flash (interpretación, nube); Qwen2.5-Coder-7B (B1, B2) y Qwen3-Coder-30B (B3, B4) desplegados localmente vía Ollama. Métricas de evaluación basadas en F1: Unit Consistency (UC), Stream Consistency (SC), Connection Consistency (CC) y Material Consistency (MC).

## Hallazgos clave

- Modelos ejecutables generados en los cuatro casos. Caso 1 (Desalado) y Caso 2 (Merox): F1 = 1.00 en todas las métricas. Caso 3 (Destilación atmosférica): CC = 0.93. Caso 4 (Aromáticos, escala industrial): SC = 0.96, CC = 0.98.
- El análisis de ablación (configuraciones C0–C4) confirma que cada componente arquitectónico contribuye a la robustez, y que la sensibilidad aumenta con la complejidad del diagrama. La separación modular de los agentes de código (C3) es clave para la topología correcta; deshabilitar RAG (C4) provoca fallo de ejecución completo en casos con mezclas (Merox) por componentes de material no resueltos.
- Benchmark multimodal: Gemini 3 Flash logró consistencia completa; Qwen 3.5 recuperó la topología con errores de conexión; Qwen 3-VL mostró baja robustez (alucinó una unidad de coalescedor). Los autores atribuyen las diferencias a la estrategia de fusión (late-fusion vs. early-fusion vs. "agentic vision").
- Reproducibilidad alta bajo decodificación determinista (temperatura 0.0, seed 42); la única variabilidad notable (Merox) se atribuye a ambigüedad del diagrama, no a inestabilidad del modelo.

## Limitaciones

- Sensibilidad a la calidad y formato del diagrama: elementos implícitos o parcialmente dibujados, superposiciones textuales densas (ecuaciones de reacción) que aumentan la sensibilidad del OCR, y bucles de reciclo / enrutamiento no lineal que amplifican pequeñas desviaciones de parseo.
- Restricciones del simulador: Aspen HYSYS construye modelos secuencialmente, por lo que definiciones incorrectas de componentes impiden la inicialización; columnas de destilación usan plantillas predefinidas que limitan la asignación dinámica de corrientes laterales vía la interfaz de automatización. La interpretación correcta del diagrama no garantiza siempre un modelo ejecutable.
- Dependencia de prompts cuidadosamente diseñados, esquemas estructurados y archivos de instrucción específicos del simulador; transferir el sistema a otro simulador o dominio requeriría adaptación. La inferencia multimodal es costosa computacionalmente, con un trade-off entre precisión, tiempo de respuesta y hardware.
- Un archivo de instrucción confidencial no se incluye en el repositorio público.

## Notas relacionadas

- [[concepts/agentes-de-ia]]
- [[concepts/inteligencia-artificial]]
- [[concepts/simulacion-computacional]]
- [[concepts/ingenieria-quimica]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/capacidades-de-ia]]
- [[concepts/petroleo-y-gas]]
