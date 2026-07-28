#!/usr/bin/env python3
"""
Extrae figuras de un PDF hacia docs/figuras/, para usarlas en los boletines.

Este es el único camino fiable para meter una figura real en un boletín: el
entorno de las rutinas tiene bloqueado el acceso de red a arXiv, bioRxiv,
chemRxiv, PMC y Crossref, así que descargar una figura desde el sitio del
paper no funciona. Si el PDF está en el vault (sources/pdfs/ o sources/inbox/),
sí se puede leer del disco.

Uso
---
    # inventario: qué imágenes trae cada página
    python3 tools/extraer-figuras.py sources/pdfs/kestin2025.pdf --listar

    # extraer todas las imágenes grandes con prefijo de nombre
    python3 tools/extraer-figuras.py sources/pdfs/kestin2025.pdf \
        --prefijo 2026-08-03-kestin

    # recortar una región concreta de una página (coordenadas en % de la página)
    python3 tools/extraer-figuras.py sources/pdfs/kestin2025.pdf \
        --pagina 4 --recorte 8,22,92,58 --prefijo 2026-08-03-kestin-fig02

Salida
------
PNG en docs/figuras/<prefijo>-NN.png, más una línea lista para pegar en el
boletín como bloque ```figura```.

Licencia
--------
Antes de publicar una figura hay que mirar la licencia del paper. Los
preprints de arXiv/bioRxiv suelen ir con CC BY o CC BY-NC; los artículos de
editorial cerrada, no. El sitio de boletines es público, así que la regla
práctica es: figura de fuente abierta, con crédito y licencia en el pie; en
cualquier otro caso se deja el marco de semitono, que el diseño ya contempla.
"""

from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
SALIDA = RAIZ / "docs" / "figuras"

# Umbrales: por debajo de esto suelen ser logos, viñetas o sellos de editorial.
MIN_ANCHO = 260
MIN_ALTO = 180


def cargar_fitz():
    try:
        import fitz  # type: ignore
        return fitz
    except ImportError:
        print("pymupdf no está instalado; instalando…", file=sys.stderr)
        subprocess.run(
            [sys.executable, "-m", "pip", "install", "--quiet", "pymupdf"],
            check=True,
        )
        import fitz  # type: ignore
        return fitz


def listar(doc) -> None:
    print(f"{doc.page_count} páginas")
    for i, page in enumerate(doc, start=1):
        imgs = page.get_images(full=True)
        grandes = []
        for img in imgs:
            xref = img[0]
            info = doc.extract_image(xref)
            if info["width"] >= MIN_ANCHO and info["height"] >= MIN_ALTO:
                grandes.append(f"{info['width']}x{info['height']}")
        dibujos = len(page.get_drawings())
        if grandes or dibujos > 40:
            partes = []
            if grandes:
                partes.append("raster: " + ", ".join(grandes))
            if dibujos > 40:
                partes.append(f"vectores: {dibujos} trazos (figura dibujada)")
            print(f"  p.{i:>3}  " + " · ".join(partes))


def guardar(pix, destino: Path) -> None:
    destino.parent.mkdir(parents=True, exist_ok=True)
    pix.save(destino)
    kb = destino.stat().st_size // 1024
    print(f"  → docs/figuras/{destino.name}  ({pix.width}x{pix.height}, {kb} kB)")


def extraer_raster(fitz, doc, prefijo: str, paginas: list[int] | None) -> list[Path]:
    hechos: list[Path] = []
    n = 0
    for i, page in enumerate(doc, start=1):
        if paginas and i not in paginas:
            continue
        for img in page.get_images(full=True):
            xref = img[0]
            info = doc.extract_image(xref)
            if info["width"] < MIN_ANCHO or info["height"] < MIN_ALTO:
                continue
            n += 1
            pix = fitz.Pixmap(doc, xref)
            if pix.n - pix.alpha >= 4:  # CMYK → RGB
                pix = fitz.Pixmap(fitz.csRGB, pix)
            destino = SALIDA / f"{prefijo}-{n:02d}.png"
            guardar(pix, destino)
            hechos.append(destino)
    return hechos


def extraer_recorte(fitz, doc, prefijo: str, pagina: int, recorte: str, dpi: int) -> Path:
    page = doc[pagina - 1]
    r = page.rect
    x0, y0, x1, y1 = (float(v) for v in recorte.split(","))
    clip = fitz.Rect(
        r.x0 + r.width * x0 / 100,
        r.y0 + r.height * y0 / 100,
        r.x0 + r.width * x1 / 100,
        r.y0 + r.height * y1 / 100,
    )
    pix = page.get_pixmap(clip=clip, dpi=dpi)
    destino = SALIDA / f"{prefijo}.png"
    guardar(pix, destino)
    return destino


def sugerir_bloque(rutas: list[Path], fuente: str) -> None:
    if not rutas:
        return
    print("\nBloque para pegar en el boletín:\n")
    for i, p in enumerate(rutas, start=1):
        print("```figura")
        print(f"src: figuras/{p.name}")
        print(f"indice: Fig. {i:02d}")
        print("pie: (describa qué muestra la figura)")
        print(f"fuente: {fuente}")
        print("```\n")


def main() -> int:
    ap = argparse.ArgumentParser(description="Extrae figuras de un PDF hacia docs/figuras/")
    ap.add_argument("pdf", help="ruta al PDF (relativa a la raíz del vault o absoluta)")
    ap.add_argument("--listar", action="store_true", help="solo inventariar, no extraer")
    ap.add_argument("--prefijo", help="prefijo del nombre de archivo de salida")
    ap.add_argument("--pagina", type=int, help="limitar a una página (1-indexada)")
    ap.add_argument(
        "--recorte",
        help="recortar la página: x0,y0,x1,y1 en porcentaje de la página (ej. 8,22,92,58)",
    )
    ap.add_argument("--dpi", type=int, default=200, help="resolución del recorte (defecto 200)")
    ap.add_argument(
        "--fuente",
        default="(autor, año · licencia)",
        help="crédito que se escribe en el pie sugerido",
    )
    args = ap.parse_args()

    ruta = Path(args.pdf)
    if not ruta.is_absolute():
        ruta = RAIZ / ruta
    if not ruta.exists():
        print(f"No existe: {ruta}", file=sys.stderr)
        return 1

    fitz = cargar_fitz()
    doc = fitz.open(ruta)

    if args.listar:
        listar(doc)
        return 0

    prefijo = args.prefijo or ruta.stem.lower().replace("_", "-")

    if args.recorte:
        if not args.pagina:
            print("--recorte necesita --pagina", file=sys.stderr)
            return 1
        destino = extraer_recorte(fitz, doc, prefijo, args.pagina, args.recorte, args.dpi)
        sugerir_bloque([destino], args.fuente)
        return 0

    paginas = [args.pagina] if args.pagina else None
    rutas = extraer_raster(fitz, doc, prefijo, paginas)
    if not rutas:
        print(
            "No se encontró ninguna imagen raster grande. Muchas figuras de papers "
            "son vectoriales: use --listar para ubicarlas y luego --pagina N "
            "--recorte x0,y0,x1,y1 para recortarlas.",
            file=sys.stderr,
        )
        return 2
    sugerir_bloque(rutas, args.fuente)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
