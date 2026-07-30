---
title: "AI in Criminal Justice and Rehabilitation"
authors: [Eunhye Ahn, Beth Angell]
year: 2026
journal: "Artificial Intelligence in Social Work (An & Lindsey, eds.), Springer"
url: https://doi.org/10.1007/978-3-032-18443-6_14
doi: 10.1007/978-3-032-18443-6_14
pdf_ref: ch14-justicia-penal-rehabilitacion.pdf
sha256: c262cc2b09af2feeeb146d41c0945fdd6a4b6465ccd6e62ebee57e282f400797
type: paper
visibility: public
keywords: [trabajo-social, justicia-penal, analitica-predictiva, sesgo-algoritmico, justicia-social, vision-por-computadora, etica-de-la-ia, alfabetizacion-en-ia, supervision-humana, salud-mental]
date_added: 2026-07-05
---

# AI in Criminal Justice and Rehabilitation

## Resumen
El capítulo argumenta que la rápida integración de la IA y la analítica de datos en el sistema de justicia penal de EE. UU. exige atención crítica del trabajo social, dado que estos sistemas afectan profundamente a individuos, familias y comunidades e intersectan con la desigualdad económica, las disparidades raciales, la salud mental y la inseguridad habitacional. Desde una perspectiva "persona-en-entorno", los trabajadores sociales intervienen en múltiples puntos del continuo penal (desvío, libertad condicional, rehabilitación institucional, reinserción) con foco en las causas raíz, la prevención y la justicia social. Los autores señalan que las herramientas de IA surgieron de la informática, la estadística y el derecho, con escasa participación del trabajo social pese a su rol central.

Tras un panorama del encarcelamiento masivo estadounidense (~1,8 millones de personas presas; sobrerrepresentación de personas negras; 44% con enfermedad mental diagnosticada y 63% con trastornos por uso de sustancias), el capítulo recorre las aplicaciones de IA por etapa: policía e investigación (policía predictiva como PredPol/Geolitica y la "heat list" de Chicago, con altísimas tasas de fallo y sesgo racial; reconocimiento facial —Clearview AI, arrestos erróneos de hombres negros en Detroit—; lectores de matrículas y detección acústica de disparos como ShotSpotter), arresto y proceso previo al juicio (instrumentos de evaluación de riesgo como el Public Safety Assessment; la reforma de Nueva Jersey que redujo la población en prisión preventiva sin aumentar el delito, pero sin cerrar la brecha racial en detención), sentencia (COMPAS y el escrutinio de ProPublica; State v. Loomis), libertad condicional y vigilada (el modelo de ML de la Junta de Pensilvania), y rehabilitación/reinserción (realidad virtual para prevención de la agresión, terapia de exposición para ansiedad/TEPT, ensayo de entrevistas de trabajo).

La segunda mitad profundiza en la equidad algorítmica: el debate ProPublica–Northpointe sobre COMPAS, la imposibilidad matemática (Chouldechova) de satisfacer simultáneamente calibración y tasas de error iguales cuando difieren las tasas base, y los tres mecanismos de sesgo de Neil y Zanger-Tishler (sesgo de etiqueta, de característica y de muestra) derivados de tratar los arrestos como si fueran una medida no sesgada del delito real. El capítulo concluye con recomendaciones para mitigar el sesgo y con un llamado a incorporar la alfabetización algorítmica en la formación en trabajo social como imperativo ético.

## Contribuciones principales
- Recorrido sistemático de las aplicaciones de IA a lo largo de todas las etapas del proceso penal, con casos reales y evidencia de impacto.
- Traducción para el trabajo social de los debates técnicos sobre equidad algorítmica (calibración vs. igualdad de errores, teorema de imposibilidad).
- Adopción del marco de Neil y Zanger-Tishler sobre las tres vías por las que el sesgo racial en los datos de arresto produce sesgo algorítmico.
- Argumento de que la alfabetización algorítmica en la educación en trabajo social es un imperativo ético, no solo educativo.

## Metodología
Capítulo conceptual y de revisión que combina una descripción del sistema de justicia penal y juvenil de EE. UU. con estudios de caso reales de despliegue de IA (PredPol, LASER, heat list, Clearview AI, ShotSpotter, PSA, COMPAS, junta de Pensilvania, programas de VR) y una síntesis de la literatura sobre equidad algorítmica y sesgo.

## Hallazgos clave
- La policía predictiva mostró desempeño muy deficiente (en Plainfield, <0,5% de predicciones acertadas) y dirigió sistemáticamente la vigilancia hacia barrios negros y latinos; varias ciudades la discontinuaron.
- El reconocimiento facial es menos preciso para mujeres y personas de piel más oscura, produciendo arrestos erróneos; Detroit prohibió arrestar solo con base en coincidencias faciales.
- Un algoritmo puede estar bien calibrado y aun así mostrar tasas de error dispares entre grupos raciales cuando difieren las tasas base (imposibilidad de Chouldechova).
- Tratar los datos de arresto como verdad objetiva ignora la evidencia criminológica de sesgo policial; los modelos entrenados así perpetúan disparidades (sesgo de etiqueta, de característica, de muestra).
- La sobredependencia de la IA en libertad vigilada puede empujar el sistema hacia más vigilancia y menos apoyo rehabilitador, erosionando la relación cliente-oficial y el juicio profesional.

## Limitaciones
- Capítulo de revisión/conceptual, no un estudio empírico primario; se apoya en casos y en literatura secundaria.
- La evidencia sobre eficacia de aplicaciones emergentes (VR en rehabilitación, ML en parole) es limitada o proviene de estudios que no abordan explícitamente las disparidades raciales.
- Foco en el contexto estadounidense; la generalización a otros sistemas de justicia es limitada.

## Notas relacionadas
- [[concepts/justicia-penal]]
- [[concepts/trabajo-social]]
- [[concepts/analitica-predictiva]]
- [[concepts/sesgo-algoritmico]]
- [[concepts/justicia-social]]
- [[concepts/vision-por-computadora]]
- [[concepts/etica-de-la-ia]]
- [[concepts/alfabetizacion-en-ia]]
- [[concepts/supervision-humana]]
- [[concepts/salud-mental]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap13-vivienda]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap15-trata-personas]]
