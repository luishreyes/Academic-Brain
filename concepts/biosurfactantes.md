---
type: concept
keyword: biosurfactantes
aliases: [biosurfactants, surfactantes biológicos, bioemulsificantes, tensoactivos biológicos, surface-active peptides]
---

# Biosurfactantes

Moléculas tensoactivas de origen biológico (péptidos, lipopéptidos, glicolípidos) que reducen la tensión interfacial agua-aceite; alternativas verdes a surfactantes petroquímicos; su diseño racional combina estructura molecular y simulaciones computacionales.

## Qué dice la literatura

Las cuatro notas del vault sobre biosurfactantes provienen del mismo programa de investigación —Reyes, Pradilla, Álvarez y Cruz, de la Universidad de los Andes, se repiten como autores comunes— y, leídas en conjunto, trazan una progresión metodológica bastante nítida más que cuatro hallazgos aislados. Ricardo et al. (2022, *Chemical Engineering Science*) abren la línea con un modelo de Random Forest entrenado en 691 surfactantes convencionales y 9 aminoácidos para predecir la tensión superficial en la concentración micelar crítica (STCMC), identificando a los residuos hidrofóbicos leucina, isoleucina y fenilalanina como los principales determinantes de actividad interfacial. El propio estudio señala su límite: la precisión cae en péptidos largos porque el modelo, basado solo en secuencia, no captura estructuras secundarias. Ese límite es precisamente lo que motiva el siguiente paso del grupo: Pérez-Bejarano et al. (2022, *Process Biochemistry*) pasan de la predicción estadística al diseño racional, construyendo dos péptidos nuevos (Surf-UAC1 y Surf-UAC2) a partir de propiedades fisicoquímicas de aminoácidos y evaluándolos con dinámica molecular en la interfaz decano-agua, con actividad interfacial comparable al surfactante comercial Tween 20 y un mecanismo de adsorción que se satura y forma clústeres irregulares a alta concentración.

Ricardo et al. (2024, *JPCB*) cierran ese primer ciclo: toman el modelo RF de 2022 y lo validan experimentalmente sobre seis péptidos, combinándolo con las simulaciones de MD decano-agua del estudio de 2022 y con reología dilatacional para estimar potencial espumante. El RF clasifica correctamente péptidos de alto, medio y bajo desempeño interfacial, cerrando el ciclo predicción computacional → diseño racional → validación experimental que atraviesa los tres primeros trabajos, siempre en la escala de péptidos cortos (3-9 residuos) y en el sistema modelo decano-agua.

El cuarto estudio, Núñez Vélez et al. (2024, *PeerJ*), representa un ángulo distinto dentro del mismo programa: en vez de diseñar péptidos desde cero, aplican evolución dirigida —DNA shuffling— sobre el gen de una proteína de membrana ya biosurfactante, OmpA de *E. coli*, para mejorar su actividad interfacial. Es el único de los cuatro papers que reporta cifras comparables de tensión interfacial en mN/m: dos mutantes alcanzan 9,10 y 4,24 mN/m frente a 14,98 mN/m de la proteína nativa, una reducción de más de tres veces lograda por evolución in vitro en vez de diseño computacional. El hallazgo mecanístico también difiere del resto del corpus: aquí la migración a la interfaz depende del punto isoeléctrico de la proteína (su carga), no de su peso molecular, mientras que los estudios de péptidos cortos atribuyen la actividad interfacial a la hidrofobicidad de residuos específicos. La aplicación también se desplaza: de cosmética, farmacéutica y alimentos (los tres primeros estudios) hacia recuperación mejorada de petróleo (EOR), lo que sugiere que el mismo objetivo —reemplazar surfactantes petroquímicos— admite dos estrategias moleculares complementarias y no competidoras: péptidos cortos diseñados computacionalmente y proteínas grandes optimizadas por evolución dirigida.

## Notas que usan este concepto
- [[notes/papers/2022-10-17_tension-superficial-surfactantes-random-forest]]
- [[notes/papers/2022-12-07_biosurfactantes-peptidos-diseno-racional]]
- [[notes/papers/2024-09-25_peptidos-interfaciales-in-silico]]
- [[notes/papers/2024-12-03_dna-shuffling-ompa-biosurfactante]]
