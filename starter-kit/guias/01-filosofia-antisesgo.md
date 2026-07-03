# 01 · La filosofía: las conexiones emergen, no se fuerzan

Esta es la regla que hace que el sistema valga la pena. Si la ignora, termina
con un grafo bonito pero mentiroso, donde todo conecta con todo porque usted (o
el modelo) empujó las keywords para que así fuera. Si la respeta, el grafo se
vuelve un instrumento de descubrimiento: las conexiones que aparecen valen
*porque* nadie las decidió.

## La regla

> **Asigne a cada fuente únicamente las keywords que describen su contenido
> real. Nunca para conectar. Nunca para encajar en el tema dominante.**

La pregunta correcta al asignar una keyword es siempre:

> *¿Esta fuente trata genuinamente este tema?*

Nunca:

> *¿Este keyword conecta con otras notas que ya tengo?*

Los keywords describen el contenido. Punto. Que ese keyword conecte con otras
notas o no, es irrelevante en el momento de asignarlo.

## Los dos errores simétricos

**Sobreasignar** — ponerle a un paper keywords genéricas o de moda para
"conectarlo" con el tema central del vault, aunque no las trate de verdad. Es el
error obvio. Infla el grafo con aristas falsas.

**Subasignar** — no ponerle a un paper las keywords que sí le corresponden solo
porque es de un dominio nuevo, sin notas previas, y "no va a conectar con nada".
Esto también es forzar, en la dirección opuesta. Un paper de biología molecular
en un vault de educación debe llevar sus keywords de biología molecular, aunque
queden aislados. Ese aislamiento es información honesta, no un defecto.

## Consecuencias que hay que aceptar

- **Un nodo aislado es válido.** No es un problema a corregir. Es una fuente que,
  por ahora, no dialoga con el resto. Mañana llega otra y aparece el puente —o no.
- **Un paper puede tener 8 keywords y no generar ninguna conexión nueva.** Está
  perfecto.
- **Las conexiones más valiosas son las que sorprenden.** Cuando dos nodos de
  dominios distintos comparten un concepto, eso vale justamente porque surgió del
  contenido y no de una decisión editorial. Si usted fuerza las keywords, se roba
  a sí mismo ese hallazgo.

## Cómo se traduce esto en el trabajo diario

- El comando `/ingest` lo aplica: en el paso de keywords dice explícitamente que
  no se fuerce ni se omita por el estado del vault.
- Cuando ingesta **varias fuentes a la vez**, use subagentes independientes: uno
  por fuente, cada uno ciego a las demás, para que ninguna "contagie" sus
  keywords a otra. (Ver `guias/04-sintesis-multiagente.md`.)
- Cuando escribe la síntesis "Qué dice la literatura" de un concepto, si el
  corpus genuinamente no dice mucho en conjunto, **dígalo**. Una síntesis corta y
  honesta ("estas notas comparten el keyword pero abordan cosas distintas") vale
  más que tres párrafos inflados.

## En una frase

El vault no premia que las cosas conecten. Premia que las conexiones sean
verdaderas. Su única disciplina es describir bien; el grafo hace el resto.
