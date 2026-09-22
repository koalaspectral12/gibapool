import { Icon } from './Icon';
import { Reveal } from './Reveal';
import {
  areaAtendimento,
  empresa,
  horarios,
  links,
  mensagens,
} from '@/content/site';
import { wa } from '@/lib/whatsapp';

export function Contact() {
  return (
    <section id="contato" className="section bg-sand">
      <div className="shell">
        <div className="max-w-2xl">
          <span className="eyebrow text-brand-600">
            <Icon name="pin" className="h-3.5 w-3.5" />
            Localização
          </span>
          <h2 className="h2 mt-3.5">Visite a Giba Pool</h2>
          <p className="lead mt-4">
            Loja física no Centro de Balneário Piçarras, com atendimento em Balneário
            Piçarras e região.
          </p>
        </div>

        <div className="mt-11 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          {/* Informações */}
          <div className="card p-7">
            <dl className="grid gap-6">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon name="pin" className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-[12px] font-bold uppercase tracking-wide text-ink-muted">
                    Endereço
                  </dt>
                  <dd className="mt-1.5 text-[15px] font-semibold leading-relaxed text-brand-900">
                    {empresa.endereco.logradouro}
                    <br />
                    {empresa.endereco.bairro} — {empresa.endereco.cidade} —{' '}
                    {empresa.endereco.uf}
                    <br />
                    <span className="font-normal text-ink-soft">
                      CEP {empresa.endereco.cep}
                    </span>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-[12px] font-bold uppercase tracking-wide text-ink-muted">
                    Telefone / WhatsApp
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`tel:+${empresa.telefoneE164}`}
                      className="text-[15px] font-semibold text-brand-900 transition-colors hover:text-brand-600"
                    >
                      {empresa.telefone}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon name="clock" className="h-5 w-5" />
                </span>
                <div className="w-full">
                  <dt className="flex flex-wrap items-center gap-2.5 text-[12px] font-bold uppercase tracking-wide text-ink-muted">
                    Horário de atendimento
                    <span className="flag">
                      <Icon name="info" className="h-3 w-3" />
                      A confirmar
                    </span>
                  </dt>
                  <dd className="mt-2 grid gap-1.5">
                    {horarios.map((h) => (
                      <span
                        key={h.dia}
                        className="flex items-baseline justify-between gap-4 text-[14.5px]"
                      >
                        <span className="text-ink-soft">{h.dia}</span>
                        <span className="font-semibold text-brand-900">{h.horas}</span>
                      </span>
                    ))}
                  </dd>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">
                    Os horários acima ainda não foram confirmados oficialmente. Consulte
                    pelo WhatsApp antes de ir à loja.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon name="instagram" className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-[12px] font-bold uppercase tracking-wide text-ink-muted">
                    Redes sociais
                  </dt>
                  <dd className="mt-1.5 flex flex-col gap-1">
                    <a
                      href={empresa.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] font-semibold text-brand-900 transition-colors hover:text-brand-600"
                    >
                      {empresa.instagram.handle}
                    </a>
                    <a
                      href={empresa.instagram.servicoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] font-semibold text-brand-900 transition-colors hover:text-brand-600"
                    >
                      {empresa.instagram.servicoHandle}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
              <a
                href={links.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md btn-solid w-full"
              >
                <Icon name="pin" className="h-4 w-4" />
                Como chegar
              </a>
              <a
                href={wa(mensagens.geral)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md btn-whats w-full"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Mapa */}
          <Reveal className="h-full">
            <div className="h-full min-h-[420px] overflow-hidden rounded-4xl border border-sand-line bg-white shadow-soft">
              <iframe
                title={`Mapa — ${empresa.nome} em ${empresa.endereco.cidade}`}
                src={links.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[420px] w-full border-0"
              />
            </div>
          </Reveal>
        </div>

        <p className="mt-6 text-[13px] leading-relaxed text-ink-muted">
          {areaAtendimento.resumo} A cobertura de cada cidade deve ser confirmada com a
          equipe.
        </p>
      </div>
    </section>
  );
}
