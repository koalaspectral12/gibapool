import type { Metadata, Viewport } from 'next';
import './globals.css';
import { empresa, SITE_URL } from '@/content/site';

const titulo = 'Giba Pool Store e Service | Piscinas em Balneário Piçarras – SC';
const descricao =
  'Produtos, equipamentos e acessórios para piscinas na Giba Pool Store e serviços de limpeza, manutenção e tratamento na Giba Pool Service, em Balneário Piçarras – SC. Fale pelo WhatsApp (47) 99649-5579.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: titulo,
    template: '%s | Giba Pool',
  },
  description: descricao,
  keywords: [
    'Giba Pool',
    'Giba Pool Store',
    'Giba Pool Service',
    'piscinas em Balneário Piçarras',
    'manutenção de piscinas em Balneário Piçarras',
    'limpeza de piscinas em Balneário Piçarras',
    'produtos para piscinas em Balneário Piçarras',
    'manutenção de motores de piscina',
    'loja de piscinas Balneário Piçarras',
    'tratamento de água de piscina SC',
    'análise da água da piscina Balneário Piçarras',
    'laudo químico de água de piscina',
  ],
  authors: [{ name: empresa.nome }],
  creator: empresa.nome,
  publisher: empresa.nome,
  alternates: { canonical: '/' },
  category: 'Piscinas',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Giba Pool',
    title: titulo,
    description: descricao,
    images: [
      {
        url: '/images/og-gibapool.jpg',
        width: 1200,
        height: 630,
        alt: 'Piscina com água cristalina - Giba Pool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: titulo,
    description: descricao,
    images: ['/images/og-gibapool.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [
      { url: '/gibapool-icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#083553',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

/** Dados estruturados locais — SEO local. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'Store'],
      '@id': `${SITE_URL}/#store`,
      name: 'Giba Pool Store',
      alternateName: 'Giba Pool',
      description:
        'Loja especializada em produtos, materiais, equipamentos e acessórios para piscinas em Balneário Piçarras – SC.',
      image: `${SITE_URL}/images/og-gibapool.jpg`,
      telephone: '+55 47 99649-5579',
      taxID: empresa.cnpj,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Emanoel Pinto, 788 – Sala 01',
        addressLocality: 'Balneário Piçarras',
        addressRegion: 'SC',
        postalCode: '88380-000',
        addressCountry: 'BR',
      },
      areaServed: ['Balneário Piçarras', 'Barra Velha', 'Itajaí', 'Camboriú', 'Balneário Camboriú'],
      sameAs: [empresa.instagram.url, empresa.facebook.url],
      url: SITE_URL,
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/#service`,
      name: 'Giba Pool Service',
      serviceType:
        'Limpeza, tratamento, manutenção de piscinas e manutenção de equipamentos (bombas, filtros e motores)',
      provider: { '@id': `${SITE_URL}/#store` },
      areaServed: 'Balneário Piçarras e região',
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Vocês fazem limpeza de piscinas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim. A Giba Pool Service realiza serviços de limpeza e tratamento de piscinas, com atendimento em Balneário Piçarras e região.',
          },
        },
        {
          '@type': 'Question',
          name: 'Vocês emitem laudo químico da água da piscina?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim. A Giba Pool conta com químico formado, habilitado a emitir laudo químico da água da piscina. A análise pode ser solicitada pelo WhatsApp (47) 99649-5579.',
          },
        },
        {
          '@type': 'Question',
          name: 'Vocês vendem produtos para piscinas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim. A Giba Pool Store é uma loja especializada em produtos e utensílios de piscina, com linha de produtos químicos e de tratamento, além de assistência química.',
          },
        },
        {
          '@type': 'Question',
          name: 'Onde fica a Giba Pool Store?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Na Av. Emanoel Pinto, 788 – Sala 01 – Centro – Balneário Piçarras – SC – CEP 88380-000.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://sspark.genspark.ai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
