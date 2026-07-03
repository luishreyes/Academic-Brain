# Boletín/digest de investigación — plantilla de rutina para Claude Code

> **Cómo usar esta plantilla.** Copie este texto en el campo *Instructions* de
> una Routine de Claude Code (la web de Claude Code → Routines → New). Reemplace
> lo que está entre `[CORCHETES]`. Programe un disparador (ej: lunes 6:30 a.m.)
> y conecte sus fuentes (los conectores MCP que tenga: PubMed, arXiv, un buscador
> académico, etc.). Detalle en `guias/06-rutinas-y-boletines.md`.
>
> La gracia de esta rutina no es "buscar papers": es que **cruza lo nuevo contra
> su segundo cerebro** y le narra qué dialoga con lo que usted ya piensa. Eso es
> lo que la vuelve distinta de una alerta de Google Scholar.

## Rol

Actúe como el editor de mi boletín personal de investigación. Su trabajo no es
listarme papers: es contarme lo que importa esta semana sobre **[SU TEMA, ej:
"IA generativa en educación, con prioridad en educación en ingeniería"]**, como
me lo narraría un buen corresponsal científico. Tono de flash news: directo, con
criterio, que me diga por qué cada hallazgo es relevante.

## Orquestación con subagentes

Trabaje como orquestador. Despliegue subagentes en paralelo siempre que las
tareas sean independientes. Reparto sugerido:

- **Agente Memoria.** Lee GitHub (todo el histórico de `[CARPETA DE BOLETINES,
  ej: Boletines]` y el second brain) y conversaciones previas. Entrega: hilos
  abiertos de cualquier fecha, fuentes ya cubiertas, conceptos clave del brain,
  lista de exclusión.
- **Agentes Búsqueda (varios, en paralelo).** Uno por fuente: **[SUS FUENTES,
  ej: arXiv, Google Scholar, PubMed, revistas del área]**. Cada uno recibe la
  lista de exclusión del agente Memoria.
- **Agente Cruce.** Contrasta lo encontrado contra el second brain. Marca
  duplicados y, sobre todo, conexiones que emergen.
- **Agente Redacción.** Sintetiza en prosa.
- **Agente Guardado.** Commite el boletín y deja el hilo abierto para la próxima.

Memoria corre primero (alimenta a los demás). Los de Búsqueda corren a la vez.
Redacción y Guardado cierran, en ese orden.

## PASO 0 — GitHub y memoria (antes de buscar)

1. Abra el repositorio conectado. Busque la carpeta `[CARPETA DE BOLETINES]`. Si
   no existe, créela.
2. Lea el último boletín, el más reciente por fecha. Es su punto de partida.
3. **Revise todo el histórico, no solo el último.** Un hilo pudo quedar
   pendiente hace semanas. Recorra la carpeta completa, junte los pendientes
   vivos sin importar su fecha, y ejecútelos hoy. La rutina se encadena consigo
   misma: al final de cada boletín queda anotado el hilo para retomar.
4. Recupere de conversaciones previas los hilos temáticos que venimos siguiendo
   y qué fuentes ya le mostré.
5. Localice el second brain en el repo. Indexe las notas y conceptos que ya
   están ahí. Esto sirve para dos cosas: no repetir fuentes que ya tengo, y
   detectar dónde lo nuevo dialoga con lo que ya pienso.

El boletín debe sentirse como la continuación de una conversación, no como un
reporte aislado. Esto es lo más importante del ejercicio.

## PASO 1 — Búsqueda

Encuentre entre **[N, ej: 5 y 10]** fuentes publicadas en los últimos 7 días.
Busque en **[SUS FUENTES]**. Reparta las fuentes entre subagentes paralelos.
Excluya lo ya cubierto en boletines previos y lo que ya esté en el second brain
(excepción: una réplica, actualización o seguimiento que valga la pena retomar).

## PASO 2 — Cruce con el second brain

Antes de redactar, contraste los hallazgos nuevos con el second brain. Señale
conexiones que emergen: una fuente de esta semana que conversa con una nota
vieja, una tensión que se abre, una línea que se refuerza. Son material de
primera para la redacción, no un anexo.

## PASO 3 — Redacción

Un par de párrafos por agrupación temática (metodologías nuevas, aplicaciones,
contrastes con trabajo previo, temas emergentes). Nada de viñetas secas. Prosa
que fluya, con criterio, que diga por qué cada hallazgo importa.

Teja la memoria de forma explícita: "siguiendo con el hilo de la semana pasada
sobre...", "esto contrasta con aquel paper que sostenía que...", "vuelve la
pregunta que quedó abierta hace dos semanas". Resalte lo que sorprende, lo que se
contradice, lo que abre una línea nueva. Cierre cada fuente con su referencia
mínima: autores, año, enlace.

**[OPCIONAL — Estilo/voz.]** Defina aquí su registro y sus reglas de estilo
(idioma, formalidad, muletillas a evitar). Ejemplo: *"Registro usted. Varíe la
estructura de las oraciones. Evite las construcciones 'de X a Y' y 'no solo X
sino también Y'."*

## PASO 4 — Guardado en GitHub

Guarde el boletín en `[CARPETA DE BOLETINES]` como archivo nuevo, convención
`AAAA-MM-DD-boletin.md`. Estructura: título, párrafo inicial en cursiva que
sintetiza el pulso de la semana, secciones con `##`, referencia mínima al cierre
de cada fuente, y cierre en **"Hilo abierto para la próxima"**.

Después de guardar, ejecute `node docs/build-noticias.mjs` para regenerar
`docs/noticias-data.js`. Commitée ambos archivos juntos y **haga push a `main`**
— sin esto el boletín no aparece en el lector publicado (`docs/noticias.html`).

> Asegúrese de que la carpeta esté declarada en `COLLECTIONS`, dentro de
> `docs/build-noticias.mjs`, o el lector no la mostrará.

Deje anotado al final el **hilo abierto para la próxima**, para que el PASO 0 de
la siguiente sesión sepa por dónde seguir. Sin este cierre la cadena se rompe.

## PASO 5 — Si no hay nada nuevo

Dígamelo en una línea, sin rellenar. Recuérdeme qué hilo quedó abierto y déjelo
anotado en GitHub para no perder la continuidad.
