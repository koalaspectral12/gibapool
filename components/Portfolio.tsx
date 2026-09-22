'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { Icon } from './Icon';
import { Reveal } from './Reveal';
import { categoriasPortfolio, mensagens, portfolio } from '@/content/site';
import { wa } from '@/lib/whatsapp';

export function Portfolio() {
  const [filtro, setFiltro] = useState<string>('todas');
  const [aberto, setAberto] = useState<number | null>(null);

  const itens = useMemo(
    () =>
      filtro === 'todas'
        ? portfolio
        : portfolio.filter((p) => p.categoria === filtro),
    [filtro],
  );

  const fechar = useCallback(() => setAberto(null), []);
  const navegar = useCallback(
    (dir: number) =>
      setAberto((cur) => {
        if (cur === null) return cur;
        return (cur + dir + itens.length) % itens.length;
      }),
    [itens.length],
  );

  useEffect(() => {
    if (aberto === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') fechar();
      if (e.key === 'ArrowRight') navegar(1);
      if (e.key === 'ArrowLeft') navegar(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [aberto, fechar, navegar]);

  const atual = aberto !== null ? itens[aberto] : null;

  return (
    <section id="portfolio" className="section bg-white">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow text-brand-600">
              <Icon name="zoom" className="h-3.5 w-3.5" />
              Portfólio
            </span>
            <h2 className="h2 mt-3.5">Nosso trabalho</h2>
            <p className="lead mt-4">
              Uma galeria para apresentar a atuação da Giba Pool em piscinas, limpeza,
              manutenção e equipamentos.
            </p>
          </div>
          <a
            href={wa(mensagens.portfolio)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-md btn-whats shrink-0"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Quero um orçamento
          </a>
        </div>

        {/* Aviso de conteúdo */}
        <div className="mt-7 flex items-start gap-3 rounded-2xl border border-dashed border-amber-300 bg-amber-50/70 px-5 py-4">
          <Icon name="info" className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
          <p className="text-[13.5px] leading-relaxed text-amber-900">
            <strong className="font-bold">Fotos reais da Giba Pool.</strong> As imagens
            com a marcação &ldquo;Foto Giba Pool&rdquo; são registros próprios, enviados
            pela empresa. As demais permanecem marcadas como &ldquo;Imagem
            ilustrativa&rdquo; e não representam obras, clientes ou serviços já
            executados — devem ser substituídas por registros oficiais antes da
            publicação definitiva.
          </p>
        </div>

        {/* Filtros */}
        <div className="no-scrollbar mt-8 -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          {categoriasPortfolio.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setFiltro(c.id);
                setAberto(null);
              }}
              aria-pressed={filtro === c.id}
              className={`chip shrink-0 ${filtro === c.id ? 'chip-active' : 'hover:border-brand-300 hover:text-brand-800'}`}
            >
              {c.label}
              <span className="text-[11px] opacity-60">
                {c.id === 'todas'
                  ? portfolio.length
                  : portfolio.filter((p) => p.categoria === c.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <ul className="mt-8 grid grid-cols-2 gap-3.5 sm:gap-4 lg:grid-cols-4">
          {itens.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 60} as="li">
              <button
                type="button"
                onClick={() => setAberto(i)}
                className="group relative block w-full overflow-hidden rounded-3xl border border-sand-line bg-sand text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25"
              >
                <span className="block aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.imagem}
                    alt={`${p.titulo} — ${p.legenda}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
                  />
                </span>
                <span className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/10 to-transparent opacity-90" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                  <span>
                    <span className="block font-display text-[14px] font-bold text-white sm:text-[15px]">
                      {p.titulo}
                    </span>
                    <span className="mt-0.5 block text-[11px] uppercase tracking-wide text-brand-200/80">
                      {p.legenda}
                    </span>
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                    <Icon name="zoom" className="h-4 w-4" />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Lightbox */}
      {atual && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={atual.titulo}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-brand-950/92 p-4 backdrop-blur-sm"
          onClick={fechar}
        >
          <button
            type="button"
            onClick={fechar}
            aria-label="Fechar"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/25"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Anterior"
            onClick={(e) => {
              e.stopPropagation();
              navegar(-1);
            }}
            className="absolute left-3 grid h-11 w-11 rotate-180 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/25 sm:left-6"
          >
            <Icon name="arrowRight" className="h-5 w-5" />
          </button>

          <figure
            className="max-h-[86vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-brand-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={atual.imagem}
              alt={`${atual.titulo} — ${atual.legenda}`}
              className="max-h-[72vh] w-full object-contain"
            />
            <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-4">
              <span>
                <span className="block font-display text-[15px] font-bold text-white">
                  {atual.titulo}
                </span>
                <span className="mt-0.5 block text-[11.5px] uppercase tracking-wide text-brand-200/75">
                  {atual.legenda}
                </span>
              </span>
              <a
                href={wa(mensagens.portfolio)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-whats"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Falar com a Giba Pool
              </a>
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label="Próximo"
            onClick={(e) => {
              e.stopPropagation();
              navegar(1);
            }}
            className="absolute right-3 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/25 sm:right-6"
          >
            <Icon name="arrowRight" className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
