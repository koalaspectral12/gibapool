import { Icon } from './Icon';
import { Reveal } from './Reveal';
import { mensagens, tecnica } from '@/content/site';
import { wa } from '@/lib/whatsapp';

export function Technical() {
  return (
    <section id="tecnica" className="section relative overflow-hidden bg-water-grad">
      {/* Grade decorativa de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.35) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 h-[360px] w-[360px] rounded-full bg-aqua/25 blur-[130px]"
      />

      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="eyebrow text-aqua">
              <Icon name="gear" className="h-3.5 w-3.5" />
              Conhecimento técnico
            </span>
            <h2 className="h2 mt-4 text-white">{tecnica.titulo}</h2>
            <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-brand-100/80">
              {tecnica.texto}
            </p>

            <ul className="mt-9 grid gap-2.5">
              {tecnica.sistemas.map((s) => (
                <li
                  key={s.nome}
                  className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/[0.07] px-4 py-3.5 backdrop-blur-sm"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-aqua/20 text-aqua">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span>
                    <span className="block text-[15px] font-bold text-white">
                      {s.nome}
                    </span>
                    <span className="mt-0.5 block text-[13.5px] leading-snug text-brand-100/70">
                      {s.descricao}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={wa(mensagens.manutencao)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md btn-whats"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Preciso de manutenção
              </a>
              <a href="#contato" className="btn btn-md btn-ghost">
                <Icon name="pin" className="h-4 w-4" />
                Falar com um especialista
              </a>
            </div>
          </div>

          {/* Mosaico de equipamentos */}
          <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
            {tecnica.sistemas.map((s, i) => (
              <Reveal
                key={s.nome}
                delay={i * 70}
                className={i === 0 ? 'col-span-2' : ''}
              >
                <figure
                  className={`group relative overflow-hidden rounded-3xl border border-white/12 ${
                    i === 0 ? 'aspect-[16/8]' : 'aspect-[4/3]'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.imagem}
                    alt={`${s.nome} — equipamento de piscina (imagem ilustrativa)`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/25 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4">
                    <span className="block font-display text-[15px] font-extrabold text-white">
                      {s.nome}
                    </span>
                    <span className="mt-0.5 block text-[11.5px] uppercase tracking-wide text-brand-200/80">
                      Imagem ilustrativa
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
