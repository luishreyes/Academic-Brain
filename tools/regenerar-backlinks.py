#!/usr/bin/env python3
"""Regenera la sección «Notas que usan este concepto» de cada página de concepto.

La fuente de verdad es el campo `keywords:` del frontmatter de cada nota en
`notes/`. Mantener la lista a mano produjo 39 backlinks faltantes y 1 obsoleto
acumulados en 586 notas, así que la sección se deriva y no se escribe.

    python3 tools/regenerar-backlinks.py           # aplica los cambios
    python3 tools/regenerar-backlinks.py --check   # no escribe; exit 1 si hay deriva
"""

import re
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
NOTAS = RAIZ / "notes"
CONCEPTOS = RAIZ / "concepts"
ENCABEZADO = "## Notas que usan este concepto"


def frontmatter(texto):
    """Devuelve el bloque de frontmatter YAML, o cadena vacía si no hay."""
    if not texto.startswith("---"):
        return ""
    fin = texto.find("\n---", 3)
    return texto[3:fin] if fin != -1 else ""


def campo_lista(bloque, nombre):
    """Lee `nombre:` del frontmatter en sus dos formas, en línea y en bloque.

    Las notas del vault usan `keywords: [a, b, c]` y también la forma YAML de
    bloque con un guion por línea. Las dos conviven, así que las dos se leen.
    """
    enlinea = re.search(rf"^{nombre}:\s*\[(.*?)\]\s*$", bloque, re.MULTILINE | re.DOTALL)
    if enlinea:
        crudo = enlinea.group(1).strip()
        if not crudo:
            return []
        return [v.strip().strip("\"'") for v in crudo.split(",") if v.strip().strip("\"'")]

    cabecera = re.search(rf"^{nombre}:\s*$", bloque, re.MULTILINE)
    if not cabecera:
        return []
    valores = []
    for linea in bloque[cabecera.end():].split("\n")[1:]:
        if re.match(r"^\s*-\s+", linea):
            valores.append(re.sub(r"^\s*-\s+", "", linea).strip().strip("\"'"))
        elif linea.strip():
            break  # empezó el campo siguiente
    return [v for v in valores if v]


def campo_simple(bloque, nombre):
    m = re.search(rf"^{nombre}:\s*(.+?)\s*$", bloque, re.MULTILINE)
    return m.group(1).strip().strip("\"'") if m else ""


def mapa_conceptos():
    """keyword canónica (y aliases) -> ruta del archivo de concepto."""
    mapa = {}
    for ruta in sorted(CONCEPTOS.glob("*.md")):
        bloque = frontmatter(ruta.read_text(encoding="utf-8"))
        claves = {ruta.stem}
        kw = campo_simple(bloque, "keyword")
        if kw:
            claves.add(kw)
        for clave in claves:
            mapa.setdefault(clave, ruta)
    return mapa


def backlinks_por_concepto():
    """keyword -> lista ordenada de wiki-links de las notas que la declaran."""
    acumulado = {}
    for ruta in sorted(NOTAS.rglob("*.md")):
        bloque = frontmatter(ruta.read_text(encoding="utf-8"))
        if not bloque:
            continue
        rel = ruta.relative_to(RAIZ).with_suffix("")
        enlace = f"- [[{rel.as_posix()}]]"
        for kw in campo_lista(bloque, "keywords"):
            acumulado.setdefault(kw, set()).add(enlace)
    return {k: sorted(v) for k, v in acumulado.items()}


def reescribir(texto, enlaces):
    """Sustituye el contenido de la sección de backlinks, conservando el resto."""
    lineas = texto.split("\n")
    try:
        inicio = next(i for i, l in enumerate(lineas) if l.strip() == ENCABEZADO)
    except StopIteration:
        cuerpo = texto.rstrip("\n")
        nuevo = "\n".join(enlaces) if enlaces else "_(ninguna todavía)_"
        return f"{cuerpo}\n\n{ENCABEZADO}\n{nuevo}\n"

    fin = len(lineas)
    for i in range(inicio + 1, len(lineas)):
        if lineas[i].startswith("## "):
            fin = i
            break

    cuerpo = enlaces if enlaces else ["_(ninguna todavía)_"]
    cola = lineas[fin:]
    reemplazo = lineas[:inicio] + [ENCABEZADO] + cuerpo
    if cola:
        reemplazo += [""] + cola
    resultado = "\n".join(reemplazo).rstrip("\n") + "\n"
    return resultado


def main():
    check = "--check" in sys.argv
    conceptos = mapa_conceptos()
    backlinks = backlinks_por_concepto()

    deriva = []
    huerfanas = sorted(k for k in backlinks if k not in conceptos)

    for kw, ruta in sorted(set(conceptos.items()), key=lambda p: p[1].name):
        enlaces = backlinks.get(ruta.stem, [])
        if kw != ruta.stem:
            continue  # cada archivo se procesa una sola vez, por su slug
        texto = ruta.read_text(encoding="utf-8")
        nuevo = reescribir(texto, enlaces)
        if nuevo != texto:
            deriva.append(ruta.relative_to(RAIZ).as_posix())
            if not check:
                ruta.write_text(nuevo, encoding="utf-8")

    if huerfanas:
        print(f"Keywords usadas en notas sin página de concepto ({len(huerfanas)}):")
        for kw in huerfanas:
            print(f"  - {kw}")

    if check:
        if deriva:
            print(f"Deriva en {len(deriva)} página(s) de concepto:")
            for r in deriva:
                print(f"  - {r}")
            return 1
        print("Sin deriva: los backlinks coinciden con el frontmatter de las notas.")
        return 0

    if deriva:
        print(f"Actualizadas {len(deriva)} página(s) de concepto:")
        for r in deriva:
            print(f"  - {r}")
    else:
        print("Nada que actualizar.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
