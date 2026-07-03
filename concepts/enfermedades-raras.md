---
type: concept
keyword: enfermedades-raras
aliases: [rare diseases, enfermedades huérfanas, mucopolisacaridosis, terapia de reemplazo enzimático, ERT]
---

# Enfermedades raras

Condiciones de baja prevalencia (menos de 1 en 2000 personas) frecuentemente de origen genético; muchas son errores innatos del metabolismo que requieren terapias especializadas como el reemplazo enzimático recombinante.

## Qué dice la literatura

Las siete notas del vault sobre enfermedades raras forman, más que una colección de estudios sueltos, un programa de investigación coherente —con Reyes, Alméciga-Díaz y colaboradores como núcleo estable de autoría— centrado en dos enfermedades lisosomales de depósito: la mucopolisacaridosis tipo IVA o síndrome de Morquio A (deficiencia de GALNS) y el síndrome de Hunter o MPS II (deficiencia de IDS), con una rama adicional hacia las gangliosidosis GM2. El hilo conductor, trazado entre 2017 y 2024, avanza en tres frentes que se retroalimentan: producción de la enzima recombinante, comprensión mecanística de su biología celular, y terapia génica de nueva generación.

El primer frente arranca con Reyes et al. (2017), que logran producir rhGALNS activa en *E. coli* mediante biología sintética —un promotor regulado por σS combinado con choque osmótico por sacarosa—, motivados explícitamente por el costo y las limitaciones de la TRE producida en células CHO. Siete años después, Pimentel-Vera et al. (2024) retoman ese mismo problema desde donde lo dejó el primer estudio: la rhGALNS de 2017 carecía de glicosilación, necesaria para la captación celular vía receptor de manosa-6-fosfato, así que el equipo migra a una cepa de *E. coli* glico-ingenierizada capaz de N-glicosilar la enzima. Es una continuación metodológica directa, no un hallazgo independiente.

El segundo frente, centrado en IDS más que en GALNS, cambia de pregunta: ya no cómo producir la enzima sino qué hace y con qué interactúa dentro de la célula. Cardona et al. (2019) mapean por primera vez el proteoma de IDS en cerebro de ratón silvestre, identificando 187 proteínas interactoras mediante espectrometría de masas y describiendo su distribución en neuronas y astrocitos. Benincore-Flórez et al. (2022) retoman ese catálogo y lo depuran: usando ensayo de doble híbrido en levadura validan 12 interacciones proteína-proteína, cuatro de ellas nuevas, y aíslan un hallazgo con implicación terapéutica directa —la interacción con GRP78/BiP en el plegamiento del RE y con LAMP1/LAMP2 en el tráfico lisosomal sugieren que variantes de IDS con mejor afinidad por el receptor manosa-6-fosfato podrían mejorar la eficiencia de la TRE—. La revisión de Leal et al. (2020) sobre enfermedades lisosomales de depósito funciona como bisagra entre ambos frentes: sistematiza TRE, terapia de reducción de sustrato y chaperonas farmacológicas como el estado del arte, señala sus límites compartidos (costo, penetración al SNC, vida media corta) y anticipa CRISPR/Cas9 como la vía emergente, lo que conecta directamente con el tercer frente del programa.

Ese tercer frente lo ejecutan Leal et al. en dos estudios gemelos de 2022 que aplican edición genómica CRISPR/nCas9 —la variante nickase, con menos efectos off-target— a fibroblastos de pacientes. El primero, sobre MPS IVA, expande el sistema a múltiples mutaciones de GALNS y lo entrega mediante magnetoliposomas (MLPs), nanopartículas magnéticas no virales que igualan a la lipofectamina comercial en eficiencia con menor citotoxicidad, logrando restaurar entre 5% y 88% de la actividad enzimática silvestre según el genotipo. El segundo aplica la misma arquitectura —nCas9 más vectores no virales, liposomas y MLPs— a fibroblastos de Tay-Sachs y Sandhoff, enfermedades distintas (gangliosidosis GM2, genes HEXA/HEXB) pero con la misma lógica de entrega, confirmando que el vector no viral desarrollado por el grupo es una plataforma generalizable y no una solución ad hoc para una sola enfermedad.

Leídos en conjunto, los siete estudios documentan la trayectoria típica de un programa traslacional en enfermedades raras: de la ingeniería de producción de una proteína terapéutica (2017, 2024), pasando por la caracterización de su interactoma para identificar cuellos de botella biológicos aprovechables (2019, 2022), hasta la corrección génica de la causa misma de la enfermedad (2022, doble estudio), con la revisión de 2020 documentando en tiempo real el giro conceptual de "reemplazar la enzima" a "editar el gen".

## Notas que usan este concepto
- [[notes/papers/2017-06-20_rhGALNS-ecoli-biologia-sintetica]]
- [[notes/papers/2019-01-30_ids-proteoma-cerebro-mps]]
- [[notes/papers/2020-01-07_enfermedades-lisosomales-terapias-alternativas]]
- [[notes/papers/2022-02-28_ids-interactoma-yeast-two-hybrid]]
- [[notes/papers/2022-09-01_crispr-ncas9-mps-iva-nanoparticulas]]
- [[notes/papers/2022-09-14_crispr-ncas9-gm2-gangliosidosis-no-virales]]
- [[notes/papers/2024-06-10_galns-recombinante-ecoli-mps-iva]]
