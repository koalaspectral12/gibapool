import { Icon } from './Icon';
import { Reveal } from './Reveal';
import { empresa, hero, links, mensagens } from '@/content/site';
import { wa } from '@/lib/whatsapp';

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-brand-950">
      {/* Fundo: imagem + camadas de profundidade */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero.imagem}
          alt={hero.imagemAlt}
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-900/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-brand-950/60" />
      </div>

      {/* Brilho decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full bg-aqua/20 blur-[120px]"
      />

      <div className="shell relative pb-24 pt-16 sm:pb-28 sm:pt-20 lg:pb-36 lg:pt-28">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-brand-100 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
              {hero.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="h1 mt-6 text-white">{hero.titulo}</h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-brand-100/85 sm:text-lg">
              {hero.subtitulo}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#servicos" className="btn btn-lg btn-primary">
                {hero.ctaPrimario}
                <Icon name="arrowRight" className="h-5 w-5" />
              </a>
              <a
                href={wa(mensagens.geral)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-ghost"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                {hero.ctaSecundario}
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-12 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/8 backdrop-blur-md sm:grid-cols-3">
              {hero.selos.map((s) => (
                <div key={s.valor} className="px-5 py-4">
                  <dt className="font-display text-base font-extrabold text-white">
                    {s.valor}
                  </dt>
                  <dd className="mt-0.5 text-[12.5px] leading-snug text-brand-100/70">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      {/* Onda de transição */}
      <div aria-hidden="true" className="relative h-14 sm:h-20">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-full w-full"
        >
          <path
            d="M0 60c180 34 360 34 540 8s360-46 540-22 240 40 360 24v30H0z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <p className="sr-only">
        {empresa.marcaStore} e {empresa.marcaService} — {empresa.endereco.completo}. Telefone{' '}
        {empresa.telefone}.{' '}
        <a href={links.maps}>Ver no Google Maps</a>
      </p>
    </section>
  );
}
