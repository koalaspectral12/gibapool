import { Icon } from './Icon';
import { Reveal } from './Reveal';
import { avaliacaoGoogle, avaliacoes, empresa, PENDENTE } from '@/content/site';

export function Testimonials() {
  const temDepoimentos = avaliacoes.length > 0;

  return (
    <section id="depoimentos" className="section bg-sand">
      <div className="shell">
        <div className="max-w-2xl">
          <span className="eyebrow text-brand-600">
            <Icon name="star" className="h-3.5 w-3.5" />
            Avaliações
          </span>
          <h2 className="h2 mt-3.5">O que nossos clientes dizem</h2>
          <p className="lead mt-4">
            Espaço reservado exclusivamente para avaliações reais de clientes. Nenhum
            depoimento é criado, reescrito ou adaptado.
          </p>
        </div>

        {temDepoimentos ? (
          <ul className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {avaliacoes.map((a, i) => (
              <Reveal key={a.autor + i} delay={i * 70} as="li">
                <figure className="card h-full p-6">
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icon key={s} name="star" className="h-4 w-4" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                    {a.texto}
                  </blockquote>
                  <figcaption className="mt-5 border-t border-sand-line pt-4 text-[13px] font-semibold text-brand-800">
                    {a.autor}
                    <span className="ml-2 font-normal text-ink-muted">· {a.origem}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal>
            <div className="mt-11 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
              {/* Fato verificado */}
              <div className="card flex flex-col justify-between p-7">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-amber-400 shadow-soft">
                      <Icon name="star" className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display text-[1.75rem] font-extrabold leading-none text-brand-900">
                        {avaliacaoGoogle.nota}
                      </p>
                      <p className="mt-1 text-[12.5px] font-semibold uppercase tracking-wide text-ink-muted">
                        {avaliacaoGoogle.plataforma}
                      </p>
                    </div>
                  </div>
                  
                </div>
                <a
                  href={avaliacaoGoogle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline mt-6 w-full"
                >
                  <Icon name="arrowUpRight" className="h-4 w-4" />
                  Ver no Google Maps
                </a>
              </div>

              {/* Espaço reservado */}
              <div className="rounded-4xl border border-dashed border-brand-200 bg-white p-7">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-display text-[1.0625rem] font-bold text-brand-900">
                    Depoimentos de clientes
                  </h3>
                 
                </div>
    

                <ul className="mt-6 grid gap-3">
                  {['Avaliação 1', 'Avaliação 2', 'Avaliação 3'].map((slot) => (
                    <li
                      key={slot}
                      className="flex items-center gap-3 rounded-2xl border border-sand-line bg-sand px-4 py-3.5"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-brand-300 shadow-soft">
                        <Icon name="star" className="h-4 w-4" />
                      </span>
                      <span className="text-[13.5px] text-ink-muted">
                        {slot} — aguardando texto real do cliente
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
