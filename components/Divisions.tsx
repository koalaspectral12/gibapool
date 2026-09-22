import { Icon } from './Icon';
import { Reveal } from './Reveal';
import { Flag, SectionHeading } from './SectionHeading';
import { areaAtendimento, diferenciais, divisoes, empresa } from '@/content/site';
import { wa } from '@/lib/whatsapp';

export function Divisions() {
  return (
    <section id="sobre" className="section bg-white">
      <div className="shell">
        <SectionHeading
          eyebrow="Uma marca, duas frentes"
          icone="layers"
          titulo={
            <>
              Comprar e contratar,{' '}
              <span className="text-brand-500">no mesmo lugar</span>.
            </>
          }
          texto={
            <>
              A {empresa.nome} reúne produtos, equipamentos e serviços especializados
              para quem possui ou administra uma piscina — em Balneário Piçarras e região.
            </>
          }
        />

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-2">
          {divisoes.map((d, i) => (
            <Reveal key={d.id} delay={i * 90} as="article">
              <div className="card card-hover group h-full overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.imagem}
                    alt={d.imagemAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-800 shadow-soft backdrop-blur">
                    {d.tag}
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="h3">{d.titulo}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {d.descricao}
                  </p>

                  <ul className="mt-5 grid gap-2.5">
                    {d.itens.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-[14.5px] text-ink-soft">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                          <Icon name="check" className="h-3 w-3" />
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <a href={d.href} className="btn btn-md btn-solid">
                      {d.cta}
                      <Icon name="arrowRight" className="h-4 w-4" />
                    </a>
                    <a
                      href={wa(d.mensagem)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link"
                    >
                      <Icon name="whatsapp" className="h-4 w-4" />
                      Falar agora
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Área de atendimento */}
        <Reveal>
          <div className="mt-6 flex flex-col gap-5 rounded-3xl border border-sand-line bg-sand px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-brand-600 shadow-soft">
                <Icon name="pin" className="h-5 w-5" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-display text-base font-bold text-brand-900">
                    Área de atendimento
                  </h3>
                  <Flag>A confirmar</Flag>
                </div>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">
                  {areaAtendimento.resumo}
                </p>
              </div>
            </div>
            <ul className="flex flex-wrap gap-2">
              {areaAtendimento.cidades.map((c) => (
                <li key={c} className="chip">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Diferenciais */}
        <div className="mt-20 lg:mt-24">
          <SectionHeading
            eyebrow="Diferenciais"
            icone="shield"
            align="center"
            titulo="Por que escolher a Giba Pool?"
            texto="Diferenciais construídos a partir da atuação da empresa com produtos, serviços e manutenção de equipamentos."
          />

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {diferenciais.map((d, i) => (
              <Reveal key={d.titulo} delay={i * 60} as="li">
                <div className="card card-hover h-full p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon name={d.icone as never} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-[1.0625rem] font-bold text-brand-900">
                    {d.titulo}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                    {d.descricao}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
