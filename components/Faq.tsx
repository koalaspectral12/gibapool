'use client';

import { useState } from 'react';
import { Icon } from './Icon';
import { faq, mensagens, PENDENTE } from '@/content/site';
import { wa } from '@/lib/whatsapp';

export function Faq() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-white">
      <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow text-brand-600">
            <Icon name="chat" className="h-3.5 w-3.5" />
            Dúvidas frequentes
          </span>
          <h2 className="h2 mt-3.5">Perguntas frequentes</h2>
          <p className="lead mt-4">
            Respostas com base apenas nas informações verificadas sobre a atuação da
            Giba Pool. O que ainda não foi confirmado está sinalizado.
          </p>

          <div className="mt-7 rounded-3xl border border-sand-line bg-sand p-6">
            <p className="text-[14.5px] leading-relaxed text-ink-soft">
              Não encontrou sua dúvida? Fale diretamente com a equipe pelo WhatsApp —
              é o canal mais rápido para orçamentos e informações.
            </p>
            <a
              href={wa(mensagens.orcamento)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-md btn-whats mt-5 w-full"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Tirar uma dúvida
            </a>
          </div>
        </div>

        <ul className="divide-y divide-sand-line border-y border-sand-line">
          {faq.map((item, i) => {
            const isOpen = aberto === i;
            return (
              <li key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setAberto(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-5 py-5 text-left transition-colors hover:text-brand-600"
                  >
                    <span className="font-display text-[1.0625rem] font-bold leading-snug text-brand-900">
                      {item.q}
                    </span>
                    <span
                      className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? 'rotate-180 border-brand-900 bg-brand-900 text-white'
                          : 'border-sand-line bg-white text-brand-500'
                      }`}
                    >
                      <Icon name="chevronDown" className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? 'grid-rows-[1fr] pb-5 opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pr-8 text-[14.5px] leading-relaxed text-ink-soft">
                      {item.a.split(PENDENTE).map((parte, idx, arr) => (
                        <span key={idx}>
                          {parte}
                          {idx < arr.length - 1 && (
                            <span className="flag mx-1 align-middle">
                              <Icon name="info" className="h-3 w-3" />
                              A confirmar
                            </span>
                          )}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
