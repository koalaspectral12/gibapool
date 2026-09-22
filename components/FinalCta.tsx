import { Icon } from './Icon';
import { Reveal } from './Reveal';
import { empresa, mensagens } from '@/content/site';
import { wa } from '@/lib/whatsapp';

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-water-grad py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-aqua/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-brand-400/25 blur-[130px]"
      />

      <div className="shell relative">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="eyebrow text-aqua">
                <Icon name="whatsapp" className="h-3.5 w-3.5" />
                Fale com a Giba Pool
              </span>
              <h2 className="h2 mt-4 text-white">
                Sua piscina pronta para aproveitar, do produto à manutenção.
              </h2>
              <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-brand-100/80">
                Conte o que a sua piscina precisa — produto, equipamento, limpeza,
                tratamento ou manutenção — e a equipe indica a solução adequada pelo
                WhatsApp.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={wa(mensagens.geral)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg btn-whats"
                >
                  <Icon name="whatsapp" className="h-5 w-5" />
                  Falar no WhatsApp
                </a>
                <a href={`tel:+${empresa.telefoneE164}`} className="btn btn-lg btn-ghost">
                  <Icon name="phone" className="h-5 w-5" />
                  {empresa.telefone}
                </a>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                { label: 'Consultar produtos e equipamentos', msg: mensagens.produto, icone: 'store' },
                { label: 'Solicitar limpeza ou tratamento', msg: mensagens.servico, icone: 'sparkle' },
                { label: 'Manutenção de piscina ou equipamento', msg: mensagens.manutencao, icone: 'gear' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={wa(item.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/12 bg-white/[0.07] px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-white/35 hover:bg-white/[0.14]"
                >
                  <span className="flex items-center gap-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-aqua/20 text-aqua">
                      <Icon name={item.icone as never} className="h-5 w-5" />
                    </span>
                    <span className="text-[14.5px] font-semibold text-white">
                      {item.label}
                    </span>
                  </span>
                  <Icon
                    name="arrowRight"
                    className="h-5 w-5 shrink-0 text-brand-200 transition-transform group-hover:translate-x-1"
                  />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
