---
type: concept
keyword: ingenieria-metabolica
aliases: [metabolic engineering, strain engineering, biocatalyst engineering, cell factory, ingeniería de cepas]
---

# Ingeniería metabólica

Modificación racional del metabolismo celular para aumentar la producción de compuestos de interés (biocombustibles, medicamentos, productos químicos); combina biología de sistemas, herramientas ómicas y evolución dirigida.

## Qué dice la literatura

Lo que dicen en conjunto las veinticuatro notas de este concepto no es un catálogo de rutas mejoradas: es una lección repetida sobre dónde está el límite y sobre lo caro que sale suponerlo en vez de medirlo. En casi todos los casos donde el vault documenta una ganancia grande, el cuello de botella resultó estar fuera de la ruta que se estaba ingenierizando.

El caso más nítido es el de la tolerancia al n-butanol. El cribado de librería genómica en *Escherichia coli* de [[notes/papers/2011-03-08_genomic-screens-nbutanol-ecoli]] identificó unos 270 genes enriquecidos o agotados bajo estrés, y los efectos validados más grandes no vinieron de nada relacionado con el solvente ni con su metabolismo: `entC` y `feoA`, de transporte y metabolismo de hierro, subieron la tolerancia 32,8 % y 49,1 % al sobreexpresarse, y la deleción de `astE`, de resistencia ácida, la subió 48,7 %. El mismo patrón aparece en [[notes/papers/2020-12-03_glicerol-ecoli-modelado-genomico]], donde el modelo a escala genómica señaló diecinueve compuestos esenciales y tres reacciones críticas, y la formulación de medio derivada de ahí duplicó el consumo de glicerol; la explicación transcriptómica fue el fósforo, necesario para evitar la toxicidad por acumulación de glicerol-3-fosfato. Nadie habría llegado ahí ajustando la ruta. Y en [[notes/papers/2023-03-20_naringenina-biofabrica-ecoli-oxigeno]] el título récord de 3,11 g/L de (2S)-naringenina no salió de una enzima mejor sino de la transferencia de oxígeno, con 40 % de oxígeno disuelto en biorreactor de 4 L.

La segunda cosa que dicen estas notas en conjunto, y esta es más incómoda, es que el vault construyó hace más de una década un instrumento para ver estructura poblacional y luego siguió midiendo en volumen. VERT, descrito en [[notes/papers/2012-05-29_vert-metodo-ingenieria-cepas]], existe precisamente porque la interferencia clonal hace que los mutantes beneficiosos se pierdan cuando se aíslan al azar en tiempos arbitrarios: marca subpoblaciones con proteínas fluorescentes y sigue su proporción por citometría para detectar expansiones adaptativas cuando ocurren. Es decir, parte de reconocer que una población en evolución no es una unidad. Sin embargo, la serie de carotenoides que sigue, [[notes/papers/2013-11-18_carotenoides-levadura-ale]] con su triplicación de 6 a 18 mg/g por choque periódico de peróxido, el protocolo de [[notes/papers/2018-01-01_carotenoides-ale-acoplado-crecimiento]] y la caracterización en biorreactor de [[notes/papers/2016-07-07_carotenoides-biorreactor-raman]] con 25,52 mg/g, reporta producción promediada sobre la población. El trabajo de Patel, Shabestary y Ledesma-Amaro de agosto de 2026 mostró que muchos promotores de levadura de uso corriente generan subpoblaciones discretas dentro de una población isogénica, y que sustituirlos por promotores homogéneos triplicó el licopeno medido por Raman de célula única. Si una fracción de la ganancia atribuida a la evolución en aquella serie fue en realidad un cambio en el reparto de subpoblaciones, el mecanismo que se reconstruyó devolviendo variantes al parental estaría incompleto, no equivocado. La prueba es barata y el material está archivado: citometría sobre las cepas evolucionadas.

Conviene registrar aquí una tensión que el campo dejó abierta en septiembre de 2026, porque el par de resultados vale más que cualquiera de los dos por separado. El trabajo de promotores macro-heterogéneos atribuye el límite de una ruta de licopeno a la varianza entre células y lo levanta homogeneizando la expresión. Una semana después, el trabajo de Meiners y colegas sostiene que en *Pseudomonas putida* la expresión no era el límite en absoluto. Mismo producto, misma palanca, conclusiones opuestas, chasis distintos. No hay que resolverlo a favor de uno: es la misma moraleja de las notas anteriores, aplicada al nivel de la heterogeneidad poblacional. El cuello de botella es específico del sistema, y medir dónde está antes de intervenir vale lo que cuesta.

Finalmente, una observación de método sobre la evolución adaptativa como herramienta de producción y no de robustez. ALE se aplicó históricamente a tolerancia y uso de sustratos, no a metabolitos secundarios, porque acumular producto impone carga metabólica y baja la aptitud. La salida que documentan las notas de carotenoides es acoplar el producto a la supervivencia, explotando que los carotenoides son antioxidantes y que el peróxido selecciona a quien más produce. Eso funciona, y su límite está declarado en el propio protocolo: el principio se extiende solo a metabolitos cuya propiedad pueda convertirse en ventaja selectiva. Para todo lo demás sigue haciendo falta un biosensor o un acoplamiento sintético, que es por donde ha ido el campo desde entonces.

## Notas que usan este concepto
- [[notes/papers/2011-03-08_genomic-screens-nbutanol-ecoli]]
- [[notes/papers/2012-05-29_vert-mecanismos-tolerancia-nbutanol]]
- [[notes/papers/2012-05-29_vert-metodo-ingenieria-cepas]]
- [[notes/papers/2013-01-01_adaptive-lab-evolution-protocolos]]
- [[notes/papers/2013-06-28_nbutanol-tolerancia-determinantes-geneticos]]
- [[notes/papers/2013-07-11_vert-saccharomyces-hidrolizados-biomasa]]
- [[notes/papers/2013-11-18_carotenoides-levadura-ale]]
- [[notes/papers/2014-12-01_biomasa-conversion-hongo-oleaginoso]]
- [[notes/papers/2016-07-07_carotenoides-biorreactor-raman]]
- [[notes/papers/2017-06-20_rhGALNS-ecoli-biologia-sintetica]]
- [[notes/papers/2017-11-21_clostridium-xylose-cofermentacion]]
- [[notes/papers/2018-01-01_carotenoides-ale-acoplado-crecimiento]]
- [[notes/papers/2020-01-01_clostridium-xylose-transcriptomica]]
- [[notes/papers/2020-12-03_glicerol-ecoli-modelado-genomico]]
- [[notes/papers/2022-01-10_biobricks-genomica-sintetica]]
- [[notes/papers/2022-02-10_fructosiltransferasa-pichia-kestosa]]
- [[notes/papers/2023-03-20_naringenina-biofabrica-ecoli-oxigeno]]
- [[notes/papers/2024-04-01_clostridium-thermocellum-hemicelulosa]]
- [[notes/papers/2024-06-10_galns-recombinante-ecoli-mps-iva]]
- [[notes/papers/2025-01-01_amp-plataformas-bacterias-levaduras]]
- [[notes/papers/2025-01-01_amp-plataformas-plantas-insectos-mamiferos]]
- [[notes/papers/2026-07-05_levadura-lager-hibridacion-sin-off-flavor]]
- [[notes/papers/2026-07-05_levaduras-no-saccharomyces-cerveza-baja-alcohol]]
- [[notes/papers/2026-07-05_pichia-glucosidasa-aroma-terpenos-cerveza]]
