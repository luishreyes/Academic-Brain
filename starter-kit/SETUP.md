# SETUP — de cero a un segundo cerebro funcionando

Sígalo una vez. Al terminar tiene el vault en su propio repo, el grafo publicado
y (si quiere) la rutina semanal corriendo. Tiempo estimado: una tarde.

## 0. Requisitos

- Cuenta de **GitHub** (repo **público** si quiere el grafo en Pages gratis).
- **Claude Code** (claude.ai/code) con acceso a su repo.
- **Node.js** instalado (para los dos scripts de `docs/`; no instala paquetes).

## 1. Cree su repositorio a partir del kit

Copie el contenido de esta carpeta `starter-kit/` a un repositorio nuevo suyo.
Dos formas:

- **Simple:** cree un repo en GitHub, descargue estos archivos y súbalos.
- **Con git:**
  ```bash
  # dentro de una copia de starter-kit/
  git init
  git add -A
  git commit -m "init: segundo cerebro a partir del starter-kit"
  git branch -M main
  git remote add origin https://github.com/SU-USUARIO/SU-REPO.git
  git push -u origin main
  ```

Conecte ese repo a Claude Code.

## 2. Defina su tema (`CLAUDE.md`)

Abra `CLAUDE.md` y reemplace `[SU TEMA]`. Ajuste lo que quiera: es el archivo que
gobierna cómo Claude Code se comporta en el vault. **Lea también
`guias/01-filosofia-antisesgo.md`** antes de ingestar nada.

## 3. Prepare la taxonomía (`keywords.md`)

Borre las keywords de ejemplo y deje `keywords.md` casi vacío (o con dos o tres
suyas). No intente adivinar toda la taxonomía de antemano: crece sola con cada
ingesta.

## 4. Personalice el visualizador (`docs/index.html`)

Tres ediciones, todas marcadas en el archivo (ver `guias/05-visualizador.md`):

1. `CONFIG.repoBlobBase` → `https://github.com/SU-USUARIO/SU-REPO/blob/main/`
2. El `<title>` y el `<h1>` ("Segundo Cerebro") → el nombre que quiera.
3. `CATEGORY_MAP` → opcional, para agrupar sus keywords por color. Puede dejarlo
   para después.

## 5. Su primera ingesta

Suba 5–10 PDFs a `sources/inbox/` y, en Claude Code:

```
/ingest
```

Claude procesará cada uno: notas en `notes/`, conceptos en `concepts/`, keywords
nuevas en `keywords.md`, PDFs movidos a `sources/pdfs/`, grafo regenerado y todo
commiteado. Revise el resultado. (Para lotes grandes sin sesgo de keyword, pida
un subagente por PDF — ver `guias/04-sintesis-multiagente.md`.)

## 6. Publique el grafo (GitHub Pages)

1. GitHub → **Settings → Pages**.
2. **Source:** *Deploy from a branch*.
3. **Branch:** `main` · **Folder:** `/docs`.
4. Guardar. En ~1 min: `https://SU-USUARIO.github.io/SU-REPO/`.

> Para regenerar el grafo manualmente en cualquier momento:
> ```bash
> node docs/build.mjs
> ```
> (El `/ingest` ya lo corre solo.)

## 7. (Opcional) Monte la rutina semanal

1. Claude Code web → **Routines → New**.
2. Pegue `templates/rutina-boletin.md` en *Instructions* y reemplace los
   `[CORCHETES]`.
3. Conecte el repo y sus conectores de fuentes.
4. Ponga un disparador (ej: lunes 6:30 a.m.) y guarde.
5. Declare su carpeta de boletines en `COLLECTIONS`, dentro de
   `docs/build-noticias.mjs`.

Detalle completo en `guias/06-rutinas-y-boletines.md`.

## 8. Verifique

- [ ] `/ingest` crea nota + conceptos + actualiza keywords + regenera grafo.
- [ ] `node docs/build.mjs` corre sin error.
- [ ] El grafo carga en `https://SU-USUARIO.github.io/SU-REPO/`.
- [ ] "Ver nota (.md)" en el panel de detalle abre el archivo correcto en GitHub.
- [ ] (Si montó la rutina) el primer boletín queda en `main` y aparece en
      `docs/noticias.html`.

## Problemas comunes

- **El grafo carga vacío:** ¿corrió `node docs/build.mjs` después de ingestar? ¿el
  repo es público y Pages apunta a `/docs` en `main`?
- **"Ver nota (.md)" va al repo equivocado:** ajuste `CONFIG.repoBlobBase`.
- **`file://` no carga el grafo en local:** use `python3 -m http.server` desde
  `docs/` (restricción del navegador, no un bug).
- **El boletín no aparece en el lector:** ¿está la carpeta en `COLLECTIONS`?
  ¿corrió `build-noticias.mjs`? ¿el boletín llegó a `main`?
