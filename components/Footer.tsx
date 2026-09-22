import { Icon } from './Icon';
import { Logo } from './Header';
import { empresa, links, mensagens, navegacao, servicos } from '@/content/site';
import { wa } from '@/lib/whatsapp';

export function InstagramCta() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="shell">
        <div className="relative overflow-hidden rounded-4xl border border-sand-line bg-sand px-7 py-9 sm:px-10 sm:py-11">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-200/40 blur-[90px]"
          />
          <div className="relative flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-lift">
                <Icon name="instagram" className="h-7 w-7" />
              </span>
              <div>
                <h2 className="font-display text-[1.375rem] font-extrabold tracking-tight text-brand-900 sm:text-[1.5rem]">
                  Siga a Giba Pool no Instagram
                </h2>
                <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-ink-soft">
                  Conteúdo sobre manutenção, produtos e cuidados com a piscina nos perfis
                  oficiais da Giba Pool Store e da Giba Pool Service.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={empresa.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chip hover:border-brand-300 hover:text-brand-800"
                  >
                    <Icon name="instagram" className="h-3.5 w-3.5" />
                    {empresa.instagram.handle}
                  </a>
                  <a
                    href={empresa.instagram.servicoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chip hover:border-brand-300 hover:text-brand-800"
                  >
                    <Icon name="instagram" className="h-3.5 w-3.5" />
                    {empresa.instagram.servicoHandle}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={empresa.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-md btn-solid shrink-0"
            >
              Seguir no Instagram
              <Icon name="arrowUpRight" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const ano = 2026;

  return (
    <footer className="bg-brand-950 pb-24 pt-16 text-brand-100/70 sm:pb-12 lg:pt-20">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.9fr_0.9fr_1.1fr]">
          {/* Marca */}
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed">
              {empresa.marcaStore} e {empresa.marcaService}: produtos, equipamentos e
              serviços especializados para piscinas em Balneário Piçarras e região.
            </p>
            <div className="mt-6 flex gap-2.5">
              <a
                href={empresa.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Giba Pool Store"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-white/45 hover:bg-white/10"
              >
                <Icon name="instagram" className="h-5 w-5" />
              </a>
              <a
                href={empresa.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Giba Piscinas"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-white/45 hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6A22 22 0 0014.3 3.5c-2.4 0-4 1.45-4 4.1v2.3H7.6V13h2.7v8z" />
                </svg>
              </a>
              <a
                href={wa(mensagens.geral)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Giba Pool"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-white/45 hover:bg-white/10"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.14em] text-white">
              Navegação
            </h2>
            <ul className="mt-5 grid gap-3">
              {navegacao.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-[14px] transition-colors hover:text-white"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Serviços */}
          <div>
            <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.14em] text-white">
              Serviços
            </h2>
            <ul className="mt-5 grid gap-3">
              {servicos.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a
                    href="#servicos"
                    className="text-[14px] transition-colors hover:text-white"
                  >
                    {s.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.14em] text-white">
              Contato
            </h2>
            <ul className="mt-5 grid gap-4 text-[14px]">
              <li className="flex items-start gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                <span>
                  {empresa.endereco.logradouro}
                  <br />
                  {empresa.endereco.bairro} — {empresa.endereco.cidade}/{empresa.endereco.uf}
                  <br />
                  CEP {empresa.endereco.cep}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="phone" className="h-4 w-4 shrink-0 text-aqua" />
                <a
                  href={`tel:+${empresa.telefoneE164}`}
                  className="transition-colors hover:text-white"
                >
                  {empresa.telefone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                <span>
                  Horários a confirmar
                  <br />
                  <span className="text-brand-100/50">
                    Consulte pelo WhatsApp
                  </span>
                </span>
              </li>
            </ul>
            <a
              href={links.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-ghost mt-5"
            >
              <Icon name="pin" className="h-4 w-4" />
              Como chegar
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-[12.5px] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {ano} {empresa.nome}. {empresa.razaoSocial} · CNPJ {empresa.cnpj}
          </p>
          <p className="text-brand-100/45">
            Imagens ilustrativas. Conteúdo institucional sujeito a confirmação.
          </p>
        </div>
      </div>
    </footer>
  );
}
