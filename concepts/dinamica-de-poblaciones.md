---
type: concept
keyword: dinamica-de-poblaciones
aliases: [population dynamics, population genetics, genética de poblaciones, clonal interference, estructura poblacional]
---

# Dinámica de poblaciones

Estudio cuantitativo de cómo cambia con el tiempo el tamaño, la composición y la estructura de las poblaciones biológicas; incluye modelos de crecimiento, interferencia clonal, selección natural y deriva genética.

## Qué dice la literatura

Cuatro trabajos del mismo grupo (Reyes, Winkler, Kao y colaboradores, 2012-2013) narran, en una secuencia casi metodológica, cómo la dinámica de poblaciones asexuales bajo selección determina qué mutaciones adaptativas sobreviven y cuáles se pierden. El punto de partida es conceptual: Reyes, Winkler y Kao (2012, *Frontiers in Microbiology*) presentan el método VERT (Visualizing Evolution in Real-Time) como respuesta directa a la interferencia clonal —el fenómeno, descrito por los modelos de barrido periódico y de interferencia múltiple, por el cual mutantes beneficiosos compiten entre sí en poblaciones asexuales y los linajes menos aptos, aunque también beneficiosos, se pierden antes de poder aislarse. Su solución —marcar subpoblaciones con proteínas fluorescentes distintas (GFP, YFP, RFP) y rastrear su proporción relativa por citometría de flujo— convierte la estructura poblacional, normalmente invisible, en una señal medible en tiempo real.

La aplicación de esa idea a la tolerancia a n-butanol en *E. coli* (Reyes et al., 2012, *Metabolic Engineering*) confirma que la interferencia clonal no es solo un problema teórico: VERT permitió rescatar mutantes que se habrían perdido con evolución clásica y, sobre todo, reveló que una misma presión selectiva genera heterogeneidad genuina dentro de la población evolucionada. Dos linajes marcados por separado tomaron rutas adaptativas distintas: el linaje GFP sobrerreguló el regulón Fur (metabolismo de hierro), lo que modificaría indirectamente la membrana externa, mientras que el linaje YFP —caracterizado un año después por Reyes, Abdelaal y Kao (2013, *Applied and Environmental Microbiology*) como continuación directa del mismo experimento— activó genes de transportadores de membrana y de biosíntesis de cardiolipina. Los dos mecanismos no solo son distintos sino que generan consecuencias ecológicas opuestas frente a otros estresores: el linaje YFP exhibe tolerancia cruzada con estrés osmótico, mientras que el linaje GFP muestra pleiotropía antagonista frente al mismo estresor —la adaptación al n-butanol le cuesta resistencia osmótica—. Esta divergencia intrapoblacional, documentada solo porque VERT permitió rastrear cada subpoblación por separado, es evidencia de que la dinámica de poblaciones bajo selección no converge necesariamente a una única solución óptima, sino que se ramifica según qué mutación beneficiosa domina primero cada linaje marcado.

Winkler, Reyes y Kao (2013, *Methods in Molecular Biology*) generalizan esta lección en forma de protocolo: comparan la transferencia serial en lote, los quimiostatos continuos y VERT, y señalan que el diseño experimental en sí —tamaño poblacional, tasa de mutación, duración del experimento y, sobre todo, los cuellos de botella que introduce cada transferencia en lote— determina cuánta deriva genética contamina el resultado de un experimento de evolución adaptativa. Leído junto con los otros tres trabajos, el capítulo deja claro que la "pérdida" de mutantes en evolución de laboratorio clásica no es ruido experimental sino una consecuencia predecible de la estructura poblacional: sin herramientas que resuelvan subpoblaciones, la interferencia clonal y los cuellos de botella oscurecen sistemáticamente la diversidad real de rutas adaptativas disponibles.

## Notas que usan este concepto
- [[notes/papers/2012-05-29_vert-metodo-ingenieria-cepas]]
- [[notes/papers/2012-05-29_vert-mecanismos-tolerancia-nbutanol]]
- [[notes/papers/2013-01-01_adaptive-lab-evolution-protocolos]]
- [[notes/papers/2013-06-28_nbutanol-tolerancia-determinantes-geneticos]]
