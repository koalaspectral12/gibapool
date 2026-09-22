import { Icon } from './Icon';
import { Reveal } from './Reveal';
import { Flag, SectionHeading } from './SectionHeading';
import { categoriasProdutos, marcas, mensagens, PENDENTE } from '@/content/site';
import { wa } from '@/lib/whatsapp';

export function Store() {
  return (
    <section id="store" className="section bg-white">
      <div className="shell">
        <SectionHeading
          eyebrow="Giba Pool Store"
          icone="store"
          titulo="Produtos e equipamentos para sua piscina"
          texto="Uma loja especializada em produtos e utensílios de piscina, com linha profissional de tratamento e assistência química para orientar a escolha correta."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categoriasProdutos.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 70} as="li">
              <div className="card card-hover group flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-900 group-hover:text-white">
                    <Icon name={c.icone as never} className="h-6 w-6" />
                  </span>
                  {c.confirmacao === 'a_confirmar' && <Flag>Confirmar linha</Flag>}
                </div>
                <h3 className="mt-5 font-display text-[1.0625rem] font-bold text-brand-900">
                  {c.nome}
                </h3>
                <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-ink-soft">
                  {c.descricao}
                </p>
                <a
                  href={wa(`${mensagens.produto} Categoria: ${c.nome}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline mt-5 w-full"
                >
                  Consultar disponibilidade
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Faixa de apoio à decisão */}
        <Reveal>
          <div className="mt-10 grid gap-6 overflow-hidden rounded-4xl border border-sand-line bg-sand lg:grid-cols-[1.1fr_1fr]">
            <div className="p-7 sm:p-9">
              <span className="eyebrow text-brand-600">
                <Icon name="flask" className="h-3.5 w-3.5" />
                Assistência química
              </span>
              <h3 className="h3 mt-3.5 text-[1.375rem] sm:text-[1.5rem]">
                Na dúvida sobre qual produto usar?
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                A água da piscina exige o equilíbrio correto entre os produtos de
                tratamento. A Giba Pool Store oferece assistência química para orientar
                o que a sua piscina realmente precisa — sem desperdício e sem excesso de
                produto.
              </p>

              <div className="mt-6 rounded-2xl border border-dashed border-brand-200 bg-white p-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-[12.5px] font-bold uppercase tracking-wide text-ink-muted">
                    Marcas comercializadas
                  </span>
                  <Flag>A confirmar</Flag>
                </div>
                {marcas.length === 0 ? (
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                    Nenhuma marca foi confirmada em fonte pública. Este espaço está
                    reservado para receber a lista oficial de marcas:{' '}
                    <span className="font-semibold text-brand-800">{PENDENTE}</span>
                  </p>
                ) : (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {marcas.map((m) => (
                      <li key={m} className="chip">
                        {m}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={wa(`${mensagens.produto} Preciso de orientação sobre o tratamento da água.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-md btn-whats"
                >
                  <Icon name="whatsapp" className="h-5 w-5" />
                  Consultar um produto
                </a>
                <a href="#contato" className="btn btn-md btn-outline">
                  <Icon name="pin" className="h-4 w-4" />
                  Visitar a loja
                </a>
              </div>
            </div>

            <div className="relative min-h-[260px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/store-05.jpg"
                alt="Produtos químicos e acessórios para tratamento de piscina (imagem ilustrativa)"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-sand via-transparent to-transparent lg:bg-gradient-to-l" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
