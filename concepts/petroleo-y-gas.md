---
type: concept
keyword: petroleo-y-gas
aliases: [oil and gas, petroleum engineering, crudo pesado, heavy crude oil, demulsification]
---

# Petróleo y gas

Ingeniería y ciencia aplicada a la extracción, procesamiento y transporte de hidrocarburos; incluye flujos multifásicos, emulsiones de crudo, demulsificación, reología de crudos pesados y técnicas de recuperación mejorada.

## Qué dice la literatura

Las tres notas del corpus no comparten método, autoría coordinada ni marco teórico común: son tres ángulos genuinamente distintos de la industria de hidrocarburos que coinciden en el concepto porque cada uno, por su cuenta, toca un tramo distinto de la cadena de valor. Acosta et al. (2020) atacan un problema de producción y procesamiento primario —romper emulsiones agua-en-aceite (W/O) estables de crudo pesado colombiano, generadas por la inyección de agua a presión— y llegan a un resultado contraintuitivo: los desmulsificantes comerciales de mejor desempeño (~85% de separación de agua) no son los que más reducen la tensión interfacial (IFT) en equilibrio (~20 mN/m, relativamente alta), sino los que maximizan la diferencia de densidad entre fases mediante su configuración espacial y estérica. Núñez Vélez et al. (2024) trabajan el problema inverso —no romper una interfaz sino activarla— mediante evolución dirigida (DNA shuffling) de la proteína OmpA de *E. coli* para producir un biosurfactante: obtienen mutantes que bajan la IFT de 14,98 mN/m (proteína nativa) a 4,24 mN/m, y muestran que la carga proteica (punto isoeléctrico), no el peso molecular, gobierna la migración hacia la interfaz agua-aceite. El motivo declarado es ambiental —sustituir surfactantes petroquímicos de degradación lenta— con una aplicación explícitamente señalada hacia la recuperación mejorada de petróleo (EOR), lo que sitúa esta nota, al menos en intención, en el extremo upstream de la misma cadena que la demulsificación ocupa en el midstream: ambas son manipulaciones deliberadas de la tensión interfacial agua-crudo, una para desestabilizar la emulsión y otra para estabilizarla o dotarla de actividad funcional, y juntas sugieren que la IFT de equilibrio, por sí sola, es un predictor pobre del comportamiento interfacial en cualquier dirección.

Bahamdan et al. (2026) pertenecen a un registro distinto: no estudian la química de la interfaz sino que automatizan, con un sistema multiagente de LLMs, la conversión de diagramas de proceso en simulaciones ejecutables de Aspen HYSYS. La conexión con las otras dos notas es más débil y de otra naturaleza —no hay hallazgo compartido, solo el hecho de que dos de sus cuatro casos de estudio (desalado, Merox) son operaciones unitarias del refino, y que el desalado es, en esencia, el mismo problema de separación agua-crudo que aborda la demulsificación, aunque aquí no se estudia la física de la separación sino la factibilidad de generar automáticamente su modelo de simulación. En conjunto, el corpus no converge en un hallazgo único: ilustra tres capas independientes de la industria —la química de interfaces en la producción (demulsificación), la bioingeniería de sustitutos verdes para esa misma química (biosurfactantes con posible uso en EOR) y la ingeniería de software/IA aplicada al diseño de procesos de refino— sin que ninguna de las notas cite o construya sobre las otras.

## Notas que usan este concepto
- [[notes/papers/2020-01-01_demulsificacion-crudo-pesado-colombia]]
- [[notes/papers/2024-12-03_dna-shuffling-ompa-biosurfactante]]
- [[notes/papers/2026-03-27_sketch2simulation-flowsheet-multiagente]]
