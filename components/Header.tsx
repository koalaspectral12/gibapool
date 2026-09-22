'use client';

import { useEffect, useState } from 'react';
import { Icon } from './Icon';
import { empresa, links, mensagens, navegacao } from '@/content/site';
import { wa } from '@/lib/whatsapp';

export function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const light = tone === 'light';
  return (
    <a
      href="#inicio"
      className="group flex items-center gap-3"
      aria-label="Giba Pool — início"
    >
      <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-brand-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/gibapool-logo.jpg"
          alt="Logotipo Giba Pool"
          width={44}
          height={44}
          className="h-full w-full object-contain p-1"
        />
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-[1.0625rem] font-extrabold tracking-tight ${
            light ? 'text-white' : 'text-brand-900'
          }`}
        >
          Giba Pool
        </span>
        <span
          className={`mt-0.5 block text-[10px] font-bold uppercase tracking-[0.16em] ${
            light ? 'text-brand-200' : 'text-brand-500'
          }`}
        >
          Store · Service
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-sand-line bg-white/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-white/60 backdrop-blur-sm'
      }`}
      style={{ height: 'var(--header-h)' }}
    >
      <div className="shell flex h-full items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navegacao.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-[14.5px] font-semibold text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-800"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={wa(mensagens.geral)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-whats hidden sm:inline-flex"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={wa(mensagens.geral)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="btn btn-sm btn-whats h-10 w-10 px-0 sm:hidden"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="grid h-10 w-10 place-items-center rounded-full border border-sand-line bg-white text-brand-900 transition-colors hover:border-brand-300 lg:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`lg:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-x-0 top-full origin-top border-b border-sand-line bg-white px-5 pb-6 pt-3 shadow-card transition-all duration-300 ${
            open ? 'visible scale-y-100 opacity-100' : 'invisible scale-y-95 opacity-0'
          }`}
        >
          <ul className="divide-y divide-sand-line">
            {navegacao.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3.5 text-[15px] font-semibold text-brand-900"
                >
                  {item.label}
                  <Icon name="arrowRight" className="h-4 w-4 text-brand-400" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid gap-2.5">
            <a
              href={wa(mensagens.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-md btn-whats w-full"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              WhatsApp
            </a>
            <a
              href={`tel:+${empresa.telefoneE164}`}
              className="btn btn-md btn-outline w-full"
            >
              <Icon name="phone" className="h-4 w-4" />
              {empresa.telefone}
            </a>
          </div>
          <p className="mt-4 text-center text-xs text-ink-muted">
            {empresa.endereco.logradouro} · {empresa.endereco.bairro}
          </p>
        </div>
      </div>
    </header>
  );
}

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 transition-all duration-500 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <a
        href={wa(mensagens.geral)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Giba Pool no WhatsApp"
        className="group relative flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3.5 pr-5 text-[#04310F] shadow-[0_18px_40px_-14px_rgba(37,211,102,.8)] transition-transform hover:-translate-y-0.5"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] animate-pulse-ring" />
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white/25">
          <Icon name="whatsapp" className="h-5 w-5" />
        </span>
        <span className="hidden text-sm font-bold sm:block">Fale com a Giba Pool</span>
      </a>
    </div>
  );
}

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-sand-line bg-white/95 px-4 pb-3 pt-3 backdrop-blur-xl sm:hidden">
      <div className="flex gap-2.5">
        <a
          href={wa(mensagens.servico)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-md btn-whats flex-1"
        >
          <Icon name="whatsapp" className="h-5 w-5" />
          WhatsApp
        </a>
        <a
          href={links.mapsDirections}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-md btn-outline px-4"
        >
          <Icon name="pin" className="h-5 w-5" />
          Como chegar
        </a>
      </div>
    </div>
  );
}
