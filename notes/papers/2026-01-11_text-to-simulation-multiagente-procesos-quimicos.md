---
title: "From Text to Simulation: A Multi-Agent LLM Workflow for Automated Chemical Process Design"
authors: ["Xufei Tian", "Wenli Du", "Shaoyi Yang", "Han Hu", "Hui Xin", "Shifeng Qu", "Ke Ye"]
year: 2026
journal: "arXiv preprint (East China University of Science and Technology)"
url: https://arxiv.org/abs/2601.06776
doi: 10.48550/arXiv.2601.06776
pdf_local: sources/pdfs/capability-reliability/tian_2026_text-to-simulation-multiagent.pdf
type: paper
keywords: [agentes-de-ia, inteligencia-artificial, ingenieria-quimica, simulacion-computacional, capacidades-de-ia, supervision-humana]
date_added: 2026-06-27
---

# From Text to Simulation: A Multi-Agent LLM Workflow for Automated Chemical Process Design

## Resumen

El paper aborda un cuello de botella clásico de la ingeniería de procesos: convertir descripciones conceptuales de un proceso químico en configuraciones de simulación ejecutables. Aunque los métodos automatizados existentes han avanzado en generar diagramas de flujo (PFD) o representaciones basadas en grafos/hipergrafos, todos se detienen en el nivel de representación estructural, dejando a los ingenieros la tarea manual —que toma semanas— de especificar cientos de parámetros interdependientes (modelos termodinámicos, condiciones de operación, parámetros de equipos) dentro del software de simulación.

Los autores proponen un flujo de trabajo multi-agente, construido sobre LangGraph, que va de extremo a extremo: desde especificaciones en lenguaje natural hasta configuraciones de simulación validadas computacionalmente. El sistema integra cuatro agentes especializados basados en LLM (gpt-4o): comprensión de la tarea, generación de topología, configuración de parámetros y análisis de evaluación. Una innovación central es la comunicación bidireccional en tiempo real con software de simulación de procesos vía HTTP asíncrono, que permite validar y refinar iterativamente las configuraciones generadas, cerrando el lazo entre diseño y verificación.

Para explorar el espacio de diseño se introduce Enhanced Monte Carlo Tree Search (E-MCTS), una variante que —a diferencia del MCTS tradicional— no descarta las configuraciones que fallan en converger, sino que las conserva en un pool dinámico de candidatos porque pueden contener ideas de diseño valiosas. E-MCTS usa una evaluación de valor de doble capa (valor inmediato vs. valor potencial) y un mecanismo de revisita dinámica para escapar de óptimos locales.

Evaluado sobre Simona, un dataset propio de 1000 descripciones de procesos creadas por expertos, el método logra una tasa de convergencia de simulación (SCR) del 80.3%, una mejora de 31.1 puntos sobre las mejores líneas base, y reduce el tiempo de diseño en 89.0% frente al diseño manual experto (913 s vs. 8302 s). El diseño experto manual mantiene una ventaja en factibilidad económica y un SCR del 100%, pero a un costo de tiempo mucho mayor.

## Contribuciones principales

- Primer flujo de trabajo extremo a extremo que genera simulaciones de procesos químicos ejecutables directamente desde descripciones en lenguaje natural, sin detenerse en representaciones intermedias.
- Arquitectura multi-agente que combina la comprensión semántica de los LLM con conocimiento de dominio de ingeniería química.
- Algoritmo E-MCTS que reconoce valor en configuraciones fallidas mediante evaluación de doble capa y revisita dinámica.
- Integración bidireccional con software de simulación industrial para validación y refinamiento en tiempo real (lazo cerrado).
- Dataset Simona (1000 descripciones de procesos de complejidad variable) para evaluar diseño automatizado de procesos.

## Metodología

Flujo multi-agente sobre LangGraph (v0.4.10) / LangChain (v0.3.26) con gpt-4o como modelo base. Temperaturas bajas (0.1) para los agentes de comprensión y evaluación, y altas (0.9) para topología y parámetros, buscando diversidad. Un sub-flujo previo de análisis termodinámico valida propiedades de componentes y equilibrio de fases antes del diseño principal. La topología se representa como grafo dirigido G=(V,E). El agente de evaluación puntúa cinco dimensiones (factibilidad económica 0.35, sostenibilidad ambiental 0.25, seguridad de proceso 0.15, factibilidad técnica 0.15, racionalidad topológica 0.10) y aplica un factor de penalización λ=0.3 a simulaciones que no convergen. Líneas base: métodos extremo a extremo (GPT-4o, Claude Sonnet 4), flujos multi-agente (Swarm, AutoGen, CrewAI, MetaGPT) y diseño manual de tres expertos. Estudios de ablación sobre el agente de comprensión de tareas, E-MCTS, número de nodos hijo e ICL (CoT y few-shot).

## Hallazgos clave

- SCR del 80.3% con análisis termodinámico, frente a 23.4% (GPT-4o), 21.2% (Claude Sonnet 4) y 45-49% de los flujos multi-agente generales.
- Reducción del 89.0% en tiempo de diseño respecto al experto manual, manteniendo calidad de grado industrial.
- Ablación: quitar el agente de comprensión de tareas baja el SCR a 78.9% y quitar E-MCTS lo baja a 74.8%; ambos componentes son críticos para la eficiencia de iteración.
- El número óptimo de nodos hijo en E-MCTS es 3 (equilibrio entre convergencia, costo en tokens y calidad de solución).
- Análisis cualitativo: sin validación computacional, GPT-4o genera errores estructurales (p. ej. un flash drum con una sola salida); el método propuesto incorpora bucles de reciclo de productos fuera de especificación que mejoran el desempeño económico.

## Limitaciones

- El diseño experto manual sigue siendo superior en factibilidad económica y alcanza 100% de SCR; el método queda segundo en puntaje global.
- La validación depende de un software de simulación de procesos propio (self-developed), lo que limita la reproducibilidad y la generalización a otros simuladores.
- Evaluado únicamente sobre el dataset propio Simona; falta validación en benchmarks externos.
- Persiste un margen de refinamiento frente a soluciones diseñadas por expertos.

## Notas relacionadas

- [[concepts/agentes-de-ia]]
- [[concepts/inteligencia-artificial]]
- [[concepts/ingenieria-quimica]]
- [[concepts/simulacion-computacional]]
- [[concepts/capacidades-de-ia]]
- [[concepts/supervision-humana]]
