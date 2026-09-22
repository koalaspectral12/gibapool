# Giba Pool — Site institucional (Store + Service)

Site profissional para a **Giba Pool** (Balneário Piçarras – SC), cobrindo as duas
frentes da marca: **Giba Pool Store** (produtos e equipamentos) e **Giba Pool Service**
(limpeza, manutenção e tratamento).

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS 3 (design tokens próprios em `tailwind.config.ts`)
- Exportação estática (`output: 'export'`) — hospeda em qualquer CDN/host

## Como rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # gera o site estático em ./out
npx serve out      # serve o build
```

## Arquitetura

```
app/
  layout.tsx        SEO global, Open Graph, JSON-LD (LocalBusiness/Store/Service/FAQPage)
  page.tsx          composição da Home
  globals.css       design system (botões, cards, selos, animações)
components/
  Header.tsx        header sticky + menu mobile + WhatsApp flutuante + barra CTA mobile
  Hero.tsx          hero com imagem, CTAs e onda de transição
  Divisions.tsx     Store x Service, área de atendimento e diferenciais
  Services.tsx      serviços + processo de atendimento
  Store.tsx         categorias de produtos + assistência química
  Technical.tsx     seção técnica (bombas, motores, filtros, circulação, equipamentos)
  Portfolio.tsx     galeria com filtros + lightbox (teclado e swipe por setas)
  Testimonials.tsx  avaliações (somente reais) + fato verificado do Google
  Faq.tsx           FAQ acessível (aria-expanded)
  Contact.tsx       endereço, horários, redes e mapa incorporado
  FinalCta.tsx      CTA final por intenção
  Footer.tsx        rodapé + faixa do Instagram
  Icon.tsx          conjunto de ícones SVG (sem dependências)
  Reveal.tsx        animação de entrada no scroll (IntersectionObserver)
content/site.ts     >>> FONTE ÚNICA DE VERDADE <<<  (todos os textos e dados)
lib/whatsapp.ts     geração dos links wa.me com mensagens por contexto
scripts/            utilitário de pré-visualização estática
```

## Onde editar o conteúdo

**Todo o conteúdo está em `content/site.ts`.** Não é necessário mexer nos componentes
para trocar textos, serviços, produtos, FAQ, horários ou mensagens de WhatsApp.

## Dados pendentes de confirmação

Tudo que ainda não foi confirmado aparece no site com o selo **"A confirmar"** e o
literal `[INFORMAÇÃO A CONFIRMAR]`. A lista completa está em `content/site.ts`
(`divergencias`, `horarios`, `areaAtendimento`, `avaliacoes`, `marcas`).

## Imagens

As imagens em `public/images/` são **ilustrativas** (banco de imagens livre) e estão
identificadas como tal na interface. Devem ser substituídas por fotografias oficiais
da Giba Pool antes da publicação definitiva, mantendo os mesmos nomes de arquivo.
