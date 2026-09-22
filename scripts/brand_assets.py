#!/usr/bin/env python3
"""Gera os ativos de marca a partir dos arquivos enviados pelo cliente:
- favicon / apple-icon (PNG quadrado a partir do logo oficial)
- imagem Open Graph 1200x630 a partir de uma foto real da Giba Pool
"""
import pathlib
from PIL import Image

ROOT = pathlib.Path('/home/user/giba-pool')
IMG = ROOT / 'public' / 'images'
PUB = ROOT / 'public'

logo = Image.open(IMG / 'gibapool-logo.jpg').convert('RGB')
print('logo origem:', logo.size)

# --- ícones (PNG quadrado) ---
for nome, lado in [('gibapool-icon.png', 512), ('apple-icon.png', 180)]:
    ic = logo.resize((lado, lado), Image.LANCZOS)
    dest = PUB / nome
    ic.save(dest, format='PNG', optimize=True)
    print(f'{nome}: {ic.size[0]}x{ic.size[1]} {dest.stat().st_size // 1024} KB')

# --- Open Graph 1200x630 (corte da foto real, sem texto) ---
base = Image.open(IMG / 'real-piscina-azul.jpg').convert('RGB')
w, h = base.size
alvo = 1200 / 630
# janela de corte: prioriza água + cidade
ch = int(w / alvo)
if ch > h:
    ch = h
top = int((h - ch) * 0.28)
og = base.crop((0, top, w, top + ch)).resize((1200, 630), Image.LANCZOS)
dest = IMG / 'og-gibapool.jpg'
og.save(dest, format='JPEG', quality=85, optimize=True, progressive=True)
print(f'og-gibapool.jpg: {og.size[0]}x{og.size[1]} {dest.stat().st_size // 1024} KB')

# --- checagem ---
for nome in ['gibapool-icon.png', 'apple-icon.png', 'images/og-gibapool.jpg']:
    p = PUB / nome
    assert p.exists() and p.stat().st_size > 0, nome
    Image.open(p).verify()
    print('ok:', nome)
