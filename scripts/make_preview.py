#!/usr/bin/env python3
"""
Gera um `preview.html` autocontido a partir do export estático do Next.js.

Diferente da versão anterior, TODAS as imagens são embutidas no próprio HTML
como data-URI (JPEG reduzido para 1100px de largura, q78). Assim a
pré-visualização renderiza as fotos reais em qualquer lugar — sem depender de
servidor, de caminho relativo `/images/...` nem de link autenticado.
"""
import base64
import io
import pathlib
import re

from PIL import Image

ROOT = pathlib.Path('/home/user/giba-pool')
OUT = ROOT / 'out'
PUB = ROOT / 'public'

_cache: dict[str, str] = {}


def data_uri(name: str) -> str:
    """Converte public/images/<name> em data-URI JPEG (reduzido)."""
    if name in _cache:
        return _cache[name]
    src = PUB / 'images' / name
    if not src.exists():
        _cache[name] = ''          # inexistente -> mantém o caminho original
        return ''
    im = Image.open(src).convert('RGB')
    if im.width > 1100:
        im = im.resize((1100, round(im.height * 1100 / im.width)), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, 'JPEG', quality=78, optimize=True, progressive=True)
    uri = 'data:image/jpeg;base64,' + base64.b64encode(buf.getvalue()).decode()
    _cache[name] = uri
    return uri


def sub_img(m: re.Match) -> str:
    uri = data_uri(m.group(1))
    return uri or m.group(0)


def build(source: str = 'index.html', destino: str = 'preview.html') -> pathlib.Path:
    html = (OUT / source).read_text(encoding='utf-8')

    # 1. imagens -> data-URI (bucket 01)
    html = re.sub(r'/images/([A-Za-z0-9._-]+)', sub_img, html)
    # favicon do logo oficial
    icon = PUB / 'gibapool-icon.png'
    if icon.exists():
        uri = 'data:image/png;base64,' + base64.b64encode(icon.read_bytes()).decode()
        html = html.replace('/gibapool-icon.png', uri)

    # 2. inlina o CSS do Tailwind
    css_files = sorted((OUT / '_next' / 'static' / 'css').glob('*.css'))
    css = '\n'.join(f.read_text(encoding='utf-8') for f in css_files)
    html = re.sub(
        r'<link rel="stylesheet" href="/_next/static/css/[^"]+"[^>]*/?>',
        lambda m: '<style>' + css.replace('</style>', '') + '</style>',
        html,
    )

    # 3. remove os scripts do Next (a pré-visualização é estática)
    html = re.sub(r'<script[^>]*src="/_next/[^"]*"[^>]*></script>', '', html)
    html = re.sub(r'<script>self\.__next_f.*?</script>', '', html, flags=re.S)
    html = re.sub(r'<script[^>]*src="/_next/[^"]*"[^>]*/?>', '', html)

    # 4. visibilidade dos blocos animados + sem lazy-loading
    html = html.replace(' loading="lazy"', '')
    override = """
<style>
  .reveal{opacity:1!important;transform:none!important;transition:none!important}
  header{position:relative!important}
  #preview-badge{position:fixed;left:50%;bottom:12px;transform:translateX(-50%);z-index:99;
    background:#031B2E;color:#fff;font:600 11px/1 ui-sans-serif,system-ui;
    letter-spacing:.08em;text-transform:uppercase;padding:9px 14px;border-radius:999px;
    box-shadow:0 12px 30px -12px rgba(3,27,46,.6);white-space:nowrap}
</style>
<div id="preview-badge">Pré-visualização estática — Giba Pool</div>
"""
    html = html.replace('</head>', override + '</head>')

    dest = OUT / destino
    dest.write_text(html, encoding='utf-8')
    return dest


if __name__ == '__main__':
    dest = build()
    print('preview.html:', dest.stat().st_size, 'bytes')
    html = dest.read_text(encoding='utf-8')
    print('imagens embutidas (data-URI):', html.count('data:image/jpeg;base64,'))
    print('caminhos /images/ restantes:', len(re.findall(r'/images/[A-Za-z0-9._-]+', html)))
    print('ordem: fim')
