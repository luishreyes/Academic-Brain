---
type: concept
keyword: geopolitica-tecnologica
aliases: [techno-geopolitics, geopolitics of technology, geopolítica de los chips, tech competition]
---

# Geopolítica tecnológica

Estudio de cómo las tecnologías críticas (semiconductores, IA, redes de comunicación) se convierten en instrumentos y escenarios de competencia entre potencias; incluye controles de exportación, cadenas de suministro estratégicas y dependencia tecnológica.

## Qué dice la literatura

Miller narra el andamiaje material de la competencia geopolítica: el control de la fabricación de semiconductores avanzados —concentrado en TSMC (más del 90% de los chips de punta) y en el monopolio de litografía EUV de ASML— como la palanca con la que Washington intenta contener el avance chino mediante los controles de exportación de la era Trump-Biden y el caso Huawei. Es un relato sobre el hardware como destino geográfico fijo: quien controla la fábrica —y Taiwán— controla el poder militar y económico del siglo XXI.

El AI Index 2025 de Stanford HAI pone a prueba esa tesis con datos de rendimiento y la complica. El informe documenta que la brecha entre modelos estadounidenses y chinos se redujo drásticamente en un año (de 17,5 a 0,3 puntos en MMLU, de 31,6 a 3,7 en HumanEval), y señala explícitamente que el lanzamiento de DeepSeek-R1 —entrenado con una fracción del hardware habitual— "sembró dudas sobre la efectividad de los controles de exportación de semiconductores de EE. UU." Si para Miller el chip es el recurso escaso que determina el poder, el AI Index sugiere que la eficiencia algorítmica puede sortear parcialmente ese cuello de botella: el benchmark se convierte en el termómetro de una guerra que ya no se libra solo en las fábricas, sino también en el diseño de los modelos.

Jegham et al. añaden una tercera variable material a esta ecuación de poder, distinta del silicio: el agua y la energía que consume la inferencia una vez que el chip ya existe. Su hallazgo más relevante para la geopolítica no es tanto la disparidad de 65 veces entre modelos (0,443 Wh de LLaMA-3.1-8B frente a 29 Wh de DeepSeek-R1) sino que la infraestructura pesa más que el diseño: los mismos modelos DeepSeek consumen ~70% menos energía en Azure que en servidores propios, porque el PUE, el WUE y el factor de intensidad de carbono varían según la red eléctrica regional donde se aloja el centro de datos. Esto desplaza la pregunta de "quién fabrica el chip" a "quién tiene la red eléctrica y el agua fría para alojarlo" — un recurso repartido de forma tan desigual como la manufactura de semiconductores, pero regido por una geografía distinta: no depende de Taiwán sino de dónde EE. UU., China o terceros países puedan construir y enfriar centros de datos.

Mollick cierra el círculo señalando hacia dónde se dirige la demanda de todo esto. Su tesis de que el trabajo valioso migra del chatbot (una consulta, una respuesta) al agente (horas de cómputo autónomo y continuo —16 horas frente a las 2 que asumían los planes previos al invierno de 2025) implica que el tipo de carga que Jegham mide como "consulta" se vuelve, en la práctica, mucho más intensiva: un agente de Opus 4.7 corriendo 14 horas no es una query barata. Mollick también reproduce, desde el terreno del producto, la misma jerarquía de dos niveles que documenta el AI Index: tres laboratorios estadounidenses en la frontera, y un segundo grupo "casi frontera" de modelos chinos de pesos abiertos, 6-12 meses por detrás pero baratos de operar — el eco, en el software, de la brecha de hardware que Miller narra en el silicio.

Leídos juntos, los cuatro textos describen una guerra tecnológica de capas que rara vez se sintetizan en la literatura: el hardware que Miller trata como destino geográfico fijo, las métricas de rendimiento que el AI Index usa para medir si ese destino sigue siendo determinante, y el consumo energético-hídrico que Jegham revela como un segundo cuello de botella material, tan desigual como el primero pero regido por la red eléctrica en vez de la fundición. Mollick añade la variable temporal: si el modo dominante de uso se desplaza hacia agentes que consumen cómputo de forma prolongada y autónoma, la presión sobre chips, energía y agua no hace sino intensificarse, y la pregunta de "quién controla la IA" —que para Miller era una pregunta sobre fábricas— se vuelve simultáneamente una pregunta sobre fábricas, redes eléctricas y algoritmos.

## Notas que usan este concepto
- [[notes/books/2022-10-04_chip-war-miller]]
- [[notes/articles/2025-04-07_ai-index-2025-rendimiento-tecnico]]
- [[notes/papers/2026-06-28_huella-ambiental-inferencia-llm]]
- [[notes/articles/2026-06-30_twilight-chatbots-mollick]]
