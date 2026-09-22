import { Icon } from './Icon';
import { Reveal } from './Reveal';
import { Flag, SectionHeading } from './SectionHeading';
import { processo, servicos } from '@/content/site';
import { wa } from '@/lib/whatsapp';

export function Services() {
  return (
    <section id="servicos" className="section relative overflow-hidden bg-sand">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-brand-200/30 blur-[110px]"
      />

      <div className="shell relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Giba Pool Service"
            icone="droplet"
            titulo="Soluções para sua piscina"
            texto="Serviços de limpeza, tratamento e manutenção, além do cuidado com os equipamentos que fazem a piscina funcionar."
          />
          <a
            href={wa('Olá! Gostaria de solicitar informações sobre os serviços da Giba Pool.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-md btn-whats shrink-0"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Solicitar orçamento
          </a>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 80} as="li">
              <article className="card card-hover group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/11] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.imagem}
                    alt={s.imagemAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/55 to-transparent" />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/95 text-brand-600 shadow-soft backdrop-blur">
                    <Icon name={s.icone as never} className="h-6 w-6" />
                  </span>
                  {s.confirmacao === 'a_confirmar' && (
                    <span className="absolute right-4 top-4">
                      <Flag>Confirmar escopo</Flag>
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="h3">{s.titulo}</h3>
                  <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-ink-soft">
                    {s.descricao}
                  </p>
                  <a
                    href={wa(s.mensagem)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline mt-5 w-full"
                  >
                    <Icon name="whatsapp" className="h-4 w-4" />
                    Falar sobre este serviço
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        {/* Processo */}
        <div className="mt-20 lg:mt-28">
          <SectionHeading
            eyebrow="Como funciona"
            icone="arrowRight"
            titulo="Do contato à piscina pronta"
            texto="Um caminho simples para encontrar a solução certa para a sua piscina."
          />

          <ol className="mt-12 grid gap-4 lg:grid-cols-5">
            {processo.map((p, i) => (
              <Reveal key={p.numero} delay={i * 70} as="li">
                <div className="relative h-full rounded-3xl border border-sand-line bg-white p-6">
                  <span className="font-display text-[2.25rem] font-extrabold leading-none text-brand-100">
                    {p.numero}
                  </span>
                  <h3 className="mt-3 font-display text-[1.0625rem] font-bold text-brand-900">
                    {p.titulo}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                    {p.texto}
                  </p>
                  {i < processo.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute -right-3.5 top-1/2 hidden h-7 w-7 -translate-y-1/2 place-items-center rounded-full border border-sand-line bg-white text-brand-400 lg:grid"
                    >
                      <Icon name="arrowRight" className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
