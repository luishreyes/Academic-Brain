# Segundo Cerebro — Starter Kit

Un sistema para construir una base de conocimiento personal que **descubre
conexiones genuinas** entre lo que usted lee. Ingesta papers, artículos y libros;
extrae keywords sin forzar relaciones; construye un grafo navegable en la web; y
—opcionalmente— corre una rutina semanal que vigila la literatura nueva y la
cruza contra lo que usted ya tiene.

Todo son **archivos de texto plano en un repo de GitHub**. No hay base de datos,
no hay servidor, no hay dependencias que instalar. La inteligencia la pone Claude
Code cada vez que trabaja, no una plantilla rígida. Por eso el kit es pequeño en
reposo y rico en uso.

## Qué obtiene

- **Un vault** de notas estructuradas (`notes/`, `concepts/`, `keywords.md`).
- **Un comando `/ingest`** que convierte cualquier fuente en una nota con
  resumen, metadatos, keywords y conexiones.
- **Un grafo web** (GitHub Pages) que muestra cómo se conecta todo, con buscador,
  filtros y panel de detalle. Funciona en móvil.
- **Una plantilla de rutina** para un boletín/digest semanal automatizado que
  recuerda las semanas anteriores y dialoga con su vault.
- **Guías** que explican cómo funciona cada pieza y cómo adaptarla.

## La idea en una frase

> El vault no premia que las cosas conecten. Premia que las conexiones sean
> verdaderas. Usted describe bien cada fuente; el grafo hace el resto.

Esto no es un detalle: es la regla que separa un segundo cerebro útil de una pila
de PDFs etiquetados. Está explicada en `guias/01-filosofia-antisesgo.md` y vale
los cinco minutos.

## Por dónde empezar

1. Lea **`guias/00-por-donde-empezar.md`** — el mapa del kit.
2. Monte su copia con **`SETUP.md`** — repo, Pages, primera ingesta, rutina.
3. Edite **`CLAUDE.md`** para declarar su tema. Ese archivo gobierna todo.

## Mapa rápido

```
CLAUDE.md                  ← cómo se comporta Claude Code en el vault (EDITE ESTO primero)
keywords.md                ← taxonomía semilla (reemplácela por la suya)
SETUP.md                   ← montaje paso a paso
.claude/commands/ingest.md ← el comando /ingest
docs/                      ← visualizador del grafo + lector de boletines (GitHub Pages)
notes/ · concepts/ · sources/ ← el vault (arranca vacío)
Boletines/                 ← boletines semanales (opcional)
templates/                 ← plantillas de nota, concepto y rutina
guias/                     ← documentación de cada subsistema
```

## Requisitos

- Una cuenta de **GitHub** (repo público si quiere el grafo en Pages gratis).
- **Claude Code** conectado a ese repo.
- **Node.js** (solo para correr los dos scripts de `docs/`; sin paquetes).
- Opcional: conectores de fuentes (PubMed, buscadores académicos…) para la rutina.
