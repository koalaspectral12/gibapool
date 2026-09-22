/**
 * FONTE ÚNICA DE VERDADE DO SITE — Giba Pool
 * ---------------------------------------------------------------------------
 * Toda informação exibida no site vem deste arquivo. Nada é escrito "solto"
 * dentro dos componentes. Para atualizar o site, edite apenas este arquivo.
 *
 * REGRAS DE CONTEÚDO (importante para quem for editar):
 *  1. NÃO invente dados. Se a informação não foi confirmada, mantenha
 *     `PENDENTE` (o valor literal "[INFORMAÇÃO A CONFIRMAR]").
 *  2. Todo item carrega `fontes` (URLs reais consultadas) e/ou `confirmado`.
 *  3. Dados divergentes entre fontes ficam em `divergencias` e NÃO substituem
 *     automaticamente os dados oficiais do projeto.
 *  4. Horários: usar somente após confirmação com o cliente.
 * ---------------------------------------------------------------------------
 */

export const PENDENTE = '[INFORMAÇÃO A CONFIRMAR]';

/** Domínio final ainda não definido pelo cliente. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.gibapoolstore.com.br';

/* ===========================================================================
   EMPRESA — dados oficiais fornecidos pelo projeto
   =========================================================================== */
export const empresa = {
  nome: 'Giba Pool',
  marcaStore: 'Giba Pool Store',
  marcaService: 'Giba Pool Service',
  razaoSocial: 'Gilberto Machado Empresário - ME',
  nomeFantasia: 'Giba Pool Store',
  cnpj: '29.420.657/0001-90',
  telefone: '(47) 99649-5579',
  telefoneE164: '5547996495579',
  endereco: {
    logradouro: 'Av. Emanoel Pinto, 788 – Sala 01',
    bairro: 'Centro',
    cidade: 'Balneário Piçarras',
    uf: 'SC',
    cep: '88380-000',
    pais: 'BR',
    completo:
      'Av. Emanoel Pinto, 788 – Sala 01 – Centro – Balneário Piçarras – SC – CEP 88380-000',
  },
  instagram: {
    handle: '@gibapoolstore',
    url: 'https://www.instagram.com/gibapoolstore/',
    servicoHandle: '@gibapoolservice_piscinas',
    servicoUrl: 'https://www.instagram.com/gibapoolservice_piscinas/',
  },
  facebook: {
    url: 'https://www.facebook.com/Gibapoolservice/',
    nome: 'Giba Piscinas | Piçarras SC',
  },
  googleMaps: {
    placeId: 'ChIJ4-nverbV2JQRDi13WEsBNkk',
    // Busca por endereço — funciona sem depender de chave de API.
    query: 'Av.+Emanoel+Pinto,+788+-+Sala+01+-+Centro,+Balne%C3%A1rio+Pi%C3%A7arras+-+SC,+88380-000',
  },
  cnaePrincipal: {
    codigo: '8129-0-00',
    descricao: 'Atividades de limpeza não especificadas anteriormente',
  },
  dataAbertura: '12/01/2018',
  areaAtuacao: 'Balneário Piçarras e região',
} as const;

export const links = {
  whatsapp: (msg: string) =>
    `https://wa.me/${empresa.telefoneE164}?text=${encodeURIComponent(msg)}`,
  maps: `https://www.google.com/maps/search/?api=1&query=${empresa.googleMaps.query}`,
  mapsDirections: `https://www.google.com/maps/dir/?api=1&destination=${empresa.googleMaps.query}`,
  mapsEmbed: `https://www.google.com/maps?q=${empresa.googleMaps.query}&output=embed`,
};

/* ===========================================================================
   MENSAGENS AUTOMÁTICAS DE WHATSAPP (conversão por contexto)
   =========================================================================== */
export const mensagens = {
  geral: 'Olá! Gostaria de falar com a Giba Pool.',
  servico:
    'Olá! Gostaria de solicitar informações sobre os serviços da Giba Pool.',
  produto:
    'Olá! Gostaria de consultar um produto/equipamento para piscina.',
  manutencao:
    'Olá! Preciso de manutenção para minha piscina/equipamento.',
  orcamento: 'Olá! Gostaria de solicitar um orçamento.',
  store: 'Olá! Gostaria de conhecer os produtos da Giba Pool Store.',
  equipamento:
    'Olá! Preciso de assistência para um equipamento de piscina (bomba/filtro/motor).',
  portfolio:
    'Olá! Vi o trabalho de vocês e gostaria de saber mais sobre os serviços.',
} as const;

/* ===========================================================================
   NAVEGAÇÃO
   =========================================================================== */
export const navegacao = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Store', href: '#store' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
] as const;

/* ===========================================================================
   HERO
   =========================================================================== */
export const hero = {
  eyebrow: 'Giba Pool Store + Giba Pool Service',
  titulo: 'Tudo para sua piscina. Do produto à manutenção.',
  subtitulo:
    'Produtos, equipamentos e serviços especializados para manter sua piscina sempre pronta para aproveitar.',
  ctaPrimario: 'Conheça nossos serviços',
  ctaSecundario: 'Fale com a Giba Pool',
  imagem: '/images/real-piscina-azul.jpg',
  imagemAlt:
    'Piscina com água cristalina em cobertura, com vista para a cidade e o mar (foto Giba Pool)',
  selos: [
    { valor: 'Store', label: 'Produtos e equipamentos' },
    { valor: 'Service', label: 'Limpeza e manutenção' },
    { valor: 'Assistência', label: 'Química e equipamentos' },
  ],
};

/* ===========================================================================
   AS DUAS FRENTES
   =========================================================================== */
export const divisoes = [
  {
    id: 'store',
    tag: 'Giba Pool Store',
    titulo: 'Produtos e equipamentos para sua piscina.',
    descricao:
      'Loja física no Centro de Balneário Piçarras com produtos, utensílios, equipamentos e acessórios para o cuidado da sua piscina, além de assistência química para orientar a escolha correta.',
    itens: [
      'Produtos e utensílios de piscina',
      'Produtos químicos e de tratamento',
      'Equipamentos e acessórios',
      'Peças e materiais',
    ],
    cta: 'Conhecer a Store',
    href: '#store',
    imagem: '/images/store-04.jpg',
    imagemAlt:
      'Interior de loja especializada em produtos e acessórios para piscinas (imagem ilustrativa)',
    mensagem: mensagens.store,
  },
  {
    id: 'service',
    tag: 'Giba Pool Service',
    titulo: 'Cuidado profissional para sua piscina.',
    descricao:
      'Serviços de limpeza, tratamento e análise da água, manutenção preventiva e cuidados com os equipamentos que mantêm a piscina funcionando como deveria.',
    itens: [
      'Limpeza e tratamento',
      'Análise da água',
      'Manutenção preventiva',
      'Bombas, filtros e equipamentos',
    ],
    cta: 'Conhecer os serviços',
    href: '#servicos',
    imagem: '/images/real-depois.jpg',
    imagemAlt:
      'Piscina com água cristalina após o serviço de tratamento (foto Giba Pool)',
    mensagem: mensagens.servico,
  },
] as const;

/* ===========================================================================
   SERVIÇOS — baseados apenas em publicações oficiais da empresa
   =========================================================================== */
export type Confirmacao = 'confirmado' | 'a_confirmar';

export const servicos: {
  id: string;
  icone: string;
  titulo: string;
  descricao: string;
  imagem: string;
  imagemAlt: string;
  confirmacao: Confirmacao;
  mensagem: string;
  fonte?: string;
}[] = [
  {
    id: 'limpeza',
    icone: 'sparkle',
    titulo: 'Limpeza de piscinas',
    descricao:
      'Manutenção da limpeza e das condições adequadas da piscina, com atendimento em Balneário Piçarras e região.',
    imagem: '/images/real-antes.jpg',
    imagemAlt: 'Piscina com água esverdeada durante o processo de limpeza e tratamento (foto Giba Pool)',
    confirmacao: 'confirmado',
    mensagem: mensagens.servico,
    fonte: 'https://www.instagram.com/gibapoolservice_piscinas/',
  },
  {
    id: 'tratamento',
    icone: 'droplet',
    titulo: 'Tratamento e análise da água',
    descricao:
      'Cuidados para manter a água em boas condições: análise da água, assistência química e emissão de laudo químico por químico formado.',
    imagem: '/images/real-analise-agua.jpg',
    imagemAlt: 'Kit de análise de pH e cloro usado na água da piscina (foto Giba Pool)',
    confirmacao: 'confirmado',
    mensagem: mensagens.servico,
    fonte: 'https://www.instagram.com/gibapoolservice_piscinas/',
  },
  {
    id: 'manutencao',
    icone: 'shield',
    titulo: 'Manutenção de piscinas',
    descricao:
      'Serviços preventivos e corretivos: a manutenção preventiva evita problemas e prejuízos e prolonga a vida útil da sua piscina.',
    imagem: '/images/clean-06.jpg',
    imagemAlt: 'Manutenção preventiva em piscina residencial (imagem ilustrativa)',
    confirmacao: 'confirmado',
    mensagem: mensagens.manutencao,
    fonte: 'https://www.instagram.com/reel/C_0bWHyxBkT/',
  },
  {
    id: 'bombas-filtros',
    icone: 'filter',
    titulo: 'Bombas e filtros',
    descricao:
      'Manutenção dos sistemas de circulação e filtragem — o conjunto responsável por manter a água em movimento e limpa.',
    imagem: '/images/eq-valve.jpg',
    imagemAlt: 'Componentes hidráulicos do sistema de circulação da piscina (imagem ilustrativa)',
    confirmacao: 'confirmado',
    mensagem: mensagens.equipamento,
    fonte: 'https://www.instagram.com/p/DRCsQzdkTLf/',
  },
  {
    id: 'motores',
    icone: 'gear',
    titulo: 'Manutenção de motores',
    descricao:
      'Manutenção e assistência relacionada aos motores das piscinas, dentro da atuação em manutenção de equipamentos.',
    imagem: '/images/eq-motor.jpg',
    imagemAlt: 'Detalhe de motor e componentes mecânicos (imagem ilustrativa)',
    confirmacao: 'a_confirmar',
    mensagem: mensagens.manutencao,
    fonte: 'https://www.instagram.com/gibapoolservice_piscinas/',
  },
  {
    id: 'instalacao',
    icone: 'wrench',
    titulo: 'Instalação de equipamentos',
    descricao:
      'Instalação de equipamentos de tratamento, como o gerador de cloro que converte sal em cloro para uma piscina limpa de forma automática.',
    imagem: '/images/real-clorador.jpg',
    imagemAlt: 'Gerador de cloro salino instalado em piscina de cobertura (foto Giba Pool)',
    confirmacao: 'confirmado',
    mensagem: mensagens.equipamento,
    fonte: 'https://www.instagram.com/reel/DaLBaOUuJmT/',
  },
];

/* ===========================================================================
   STORE — categorias de produtos
   =========================================================================== */
export const categoriasProdutos: {
  id: string;
  icone: string;
  nome: string;
  descricao: string;
  confirmacao: Confirmacao;
}[] = [
  {
    id: 'quimicos',
    icone: 'droplet',
    nome: 'Produtos químicos',
    descricao:
      'Linha de tratamento da água: cloro, algicida, decantador e elevador de pH.',
    confirmacao: 'confirmado',
  },
  {
    id: 'testes',
    icone: 'beaker',
    nome: 'Análise da água e laudo químico',
    descricao:
      'Análise da água com químico formado, habilitado a emitir laudo químico, além de kits de teste rápidos para o acompanhamento da piscina.',
    confirmacao: 'confirmado',
    // Origem: informação fornecida pela empresa. Não foi informado número de
    // registro profissional (CRQ) nem acreditação de laboratório — não incluir.
  },
  {
    id: 'geradores',
    icone: 'bolt',
    nome: 'Geradores de cloro',
    descricao:
      'Equipamentos que convertem sal em cloro, com produção automática e controle pelo celular.',
    confirmacao: 'confirmado',
  },
  {
    id: 'acessorios',
    icone: 'net',
    nome: 'Utensílios e acessórios',
    descricao:
      'Acessórios de limpeza e utensílios do dia a dia da piscina.',
    confirmacao: 'confirmado',
  },
  {
    id: 'bombas',
    icone: 'pump',
    nome: 'Bombas e filtros',
    descricao: 'Equipamentos de circulação e filtragem da água.',
    confirmacao: 'confirmado',
  },
  {
    id: 'pecas',
    icone: 'gear',
    nome: 'Peças e materiais',
    descricao:
      'Peças de reposição e materiais para manutenção da piscina e dos equipamentos.',
    confirmacao: 'a_confirmar',
  },
];

/** Marcas comercializadas — nenhuma marca foi confirmada em fonte pública. */
export const marcas: string[] = [];

/* ===========================================================================
   SEÇÃO TÉCNICA
   =========================================================================== */
export const tecnica = {
  titulo: 'Muito mais que uma piscina limpa.',
  texto:
    'A Giba Pool atua também na manutenção dos equipamentos responsáveis pelo funcionamento adequado da piscina.',
  sistemas: [
    {
      nome: 'Bombas',
      descricao: 'Responsáveis por manter a água em circulação pelo sistema.',
      imagem: '/images/eq-pump.jpg',
    },
    {
      nome: 'Motores',
      descricao: 'Acionamento do conjunto de bombeamento e circulação.',
      imagem: '/images/eq-motor.jpg',
    },
    {
      nome: 'Filtros',
      descricao: 'Retenção das impurezas que chegam pela água em circulação.',
      imagem: '/images/eq-pump2.jpg',
    },
    {
      nome: 'Sistemas de circulação',
      descricao: 'Conjunto hidráulico que conecta bombas, filtros e retornos.',
      imagem: '/images/eq-valve.jpg',
    },
    {
      nome: 'Equipamentos',
      descricao: 'Itens de tratamento e automação, como geradores de cloro.',
      imagem: '/images/real-clorador.jpg',
    },
  ],
};

/* ===========================================================================
   PORTFÓLIO — imagens ilustrativas (não são registros de obras da empresa)
   =========================================================================== */
export const categoriasPortfolio = [
  { id: 'todas', label: 'Todas' },
  { id: 'piscinas', label: 'Piscinas' },
  { id: 'limpeza', label: 'Limpeza' },
  { id: 'manutencao', label: 'Manutenção' },
  { id: 'equipamentos', label: 'Equipamentos' },
  { id: 'antes-depois', label: 'Antes e depois' },
] as const;

export const portfolio: {
  id: string;
  categoria: string;
  titulo: string;
  legenda: string;
  imagem: string;
}[] = [
  {
    id: 'p1',
    categoria: 'piscinas',
    titulo: 'Piscina com água cristalina',
    legenda: 'Foto Giba Pool',
    imagem: '/images/real-piscina-azul.jpg',
  },
  {
    id: 'p2',
    categoria: 'piscinas',
    titulo: 'Piscina em cobertura',
    legenda: 'Foto Giba Pool',
    imagem: '/images/real-piscina-infinity.jpg',
  },
  {
    id: 'p3',
    categoria: 'piscinas',
    titulo: 'Piscina com deck',
    legenda: 'Foto Giba Pool',
    imagem: '/images/real-extra1.jpg',
  },
  {
    id: 'p4',
    categoria: 'piscinas',
    titulo: 'Revestimento de piscina',
    legenda: 'Material Giba Pool',
    imagem: '/images/real-vinil.jpg',
  },
  {
    id: 'p5',
    categoria: 'antes-depois',
    titulo: 'Antes — água esverdeada',
    legenda: 'Registro de tratamento',
    imagem: '/images/real-antes.jpg',
  },
  {
    id: 'p6',
    categoria: 'antes-depois',
    titulo: 'Depois — água cristalina',
    legenda: 'Registro de tratamento',
    imagem: '/images/real-depois.jpg',
  },
  {
    id: 'p7',
    categoria: 'limpeza',
    titulo: 'Análise e teste da água',
    legenda: 'Foto Giba Pool',
    imagem: '/images/real-analise-agua.jpg',
  },
  {
    id: 'p8',
    categoria: 'equipamentos',
    titulo: 'Gerador de cloro',
    legenda: 'Foto Giba Pool',
    imagem: '/images/real-clorador.jpg',
  },
  {
    id: 'p9',
    categoria: 'limpeza',
    titulo: 'Rotina de manutenção',
    legenda: 'Imagem ilustrativa',
    imagem: '/images/clean-05.jpg',
  },
  {
    id: 'p10',
    categoria: 'manutencao',
    titulo: 'Conjunto de filtragem',
    legenda: 'Imagem ilustrativa',
    imagem: '/images/eq-pump2.jpg',
  },
  {
    id: 'p11',
    categoria: 'piscinas',
    titulo: 'Piscina ao anoitecer',
    legenda: 'Imagem ilustrativa',
    imagem: '/images/pool-lighting-luxury.jpg',
  },
  {
    id: 'p12',
    categoria: 'manutencao',
    titulo: 'Válvulas e hidráulica',
    legenda: 'Imagem ilustrativa',
    imagem: '/images/eq-valve.jpg',
  },
];

/* ===========================================================================
   DIFERENCIAIS — derivados apenas de fatos verificados
   =========================================================================== */
export const diferenciais = [
  {
    icone: 'layers',
    titulo: 'Solução completa',
    descricao:
      'Produtos e serviços relacionados a piscinas reunidos sob a mesma marca: Giba Pool Store e Giba Pool Service.',
  },
  {
    icone: 'chat',
    titulo: 'Atendimento especializado',
    descricao:
      'Atendimento direcionado às necessidades de cada cliente, com orientação sobre o produto ou serviço adequado.',
  },
  {
    icone: 'gear',
    titulo: 'Conhecimento técnico',
    descricao:
      'Atuação também na manutenção dos equipamentos responsáveis pelo funcionamento da piscina, como bombas e filtros.',
  },
  {
    icone: 'pin',
    titulo: 'Loja física na região',
    descricao:
      'Loja no Centro de Balneário Piçarras, com atendimento em Balneário Piçarras e região.',
  },
  {
    icone: 'flask',
    titulo: 'Assistência química',
    descricao:
      'Orientação no tratamento da água e na escolha dos produtos corretos para cada piscina.',
  },
  {
    icone: 'instagram',
    titulo: 'Conteúdo e acompanhamento',
    descricao:
      'Perfis oficiais com conteúdo sobre manutenção, produtos e cuidados com a piscina.',
  },
];

/* ===========================================================================
   PROCESSO DE ATENDIMENTO
   =========================================================================== */
export const processo = [
  { numero: '01', titulo: 'Entre em contato', texto: 'Conte o que sua piscina precisa.' },
  {
    numero: '02',
    titulo: 'Entendemos a necessidade',
    texto: 'A equipe avalia a demanda apresentada.',
  },
  {
    numero: '03',
    titulo: 'Indicamos a solução',
    texto: 'Produto, manutenção ou serviço adequado ao caso.',
  },
  {
    numero: '04',
    titulo: 'Executamos',
    texto: 'O serviço é realizado conforme a necessidade.',
  },
  {
    numero: '05',
    titulo: 'Piscina pronta',
    texto: 'O cliente recebe a solução e o acompanhamento do cuidado.',
  },
];

/* ===========================================================================
   AVALIAÇÕES — NÃO INVENTAR. Somente avaliações reais e verbais.
   =========================================================================== */
export const avaliacoes: {
  texto: string;
  autor: string;
  origem: string;
  url?: string;
}[] = [
  // Nenhuma avaliação pública com texto foi coletada até o momento.
  // Ao obter as avaliações reais, insira aqui no formato:
  // { texto: '...', autor: 'Nome', origem: 'Google', url: '...' }
];

/** Fato verificado: o perfil no Google Maps exibe avaliação 5★. */
export const avaliacaoGoogle = {
  nota: '5,0',
  plataforma: 'Google Maps',
  quantidade: PENDENTE,
  url: links.maps,
};

/* ===========================================================================
   HORÁRIOS — NÃO PUBLICAR SEM CONFIRMAÇÃO
   =========================================================================== */
export const horarios: {
  dia: string;
  horas: string;
  confirmado: boolean;
}[] = [
  { dia: 'Segunda a sexta', horas: 'aprox. 08h às 17h30', confirmado: false },
  { dia: 'Sábado', horas: 'aprox. 08h30 às 12h', confirmado: false },
  { dia: 'Domingo', horas: 'Fechado', confirmado: false },
];

/* ===========================================================================
   ÁREA DE ATENDIMENTO
   =========================================================================== */
export const areaAtendimento = {
  resumo:
    'Atendimento em Balneário Piçarras e região, de Barra Velha até Balneário Camboriú.',
  confirmacao: 'a_confirmar' as Confirmacao,
  cidades: ['Balneário Piçarras', 'Barra Velha', 'Itajaí', 'Camboriú', 'Balneário Camboriú'],
  fonte: 'https://www.instagram.com/gibapoolservice_piscinas/',
  obs: 'As cidades listadas foram citadas nas publicações oficiais do perfil de serviços. A cobertura de cada uma deve ser confirmada antes da publicação definitiva.',
};

/* ===========================================================================
   FAQ — respostas somente com informação verificada
   =========================================================================== */
export const faq = [
  {
    q: 'Vocês fazem limpeza de piscinas?',
    a: 'Sim. A Giba Pool Service realiza serviços de limpeza e tratamento de piscinas, com atendimento em Balneário Piçarras e região.',
  },
  {
    q: 'Vocês emitem laudo químico da água da piscina?',
    a: 'Sim. A Giba Pool conta com químico formado, habilitado a emitir laudo químico da água da piscina. A análise pode ser solicitada pelo WhatsApp (47) 99649-5579.',
  },
  {
    q: 'Vocês fazem manutenção de motores?',
    a: 'A Giba Pool atua na manutenção dos equipamentos da piscina, incluindo bombas e filtros. Para motores especificamente, confirme o escopo pelo WhatsApp: [INFORMAÇÃO A CONFIRMAR].',
  },
  {
    q: 'Vocês vendem produtos para piscinas?',
    a: 'Sim. A Giba Pool Store é uma loja especializada em produtos e utensílios de piscina, com linha de produtos químicos e de tratamento, além de assistência química.',
  },
  {
    q: 'Vocês trabalham com bombas e filtros?',
    a: 'Sim. Bombas e filtros fazem parte dos equipamentos trabalhados pela Giba Pool, tanto na venda quanto na manutenção dos sistemas de circulação e filtragem.',
  },
  {
    q: 'Vocês instalam equipamentos?',
    a: 'A Giba Pool realiza instalação de equipamentos de tratamento, como o gerador de cloro. Para outros equipamentos, consulte a equipe pelo WhatsApp.',
  },
  {
    q: 'Como solicitar orçamento?',
    a: 'O orçamento pode ser solicitado pelo WhatsApp (47) 99649-5579, pelo direct do Instagram @gibapoolstore ou diretamente na loja, no Centro de Balneário Piçarras.',
  },
  {
    q: 'Onde fica a Giba Pool Store?',
    a: 'Na Av. Emanoel Pinto, 788 – Sala 01 – Centro – Balneário Piçarras – SC – CEP 88380-000.',
  },
  {
    q: 'Vocês atendem fora de Balneário Piçarras?',
    a: 'As publicações oficiais indicam atendimento de Barra Velha até Balneário Camboriú. A disponibilidade para cada cidade deve ser confirmada pelo WhatsApp: [INFORMAÇÃO A CONFIRMAR].',
  },
  {
    q: 'Qual o horário de funcionamento?',
    a: 'O horário ainda está em confirmação: [INFORMAÇÃO A CONFIRMAR]. Consulte pelo WhatsApp antes de ir à loja.',
  },
];

/* ===========================================================================
   DIVERGÊNCIAS ENCONTRADAS NA PESQUISA (não substituem os dados do projeto)
   =========================================================================== */
export const divergencias = [
  {
    campo: 'Telefone / WhatsApp',
    oficial: '(47) 99649-5579 (Store — confirmado no Google Maps)',
    encontrado: '(47) 99637-8585 (Service — Instagram e Facebook)',
    fonte: 'https://www.instagram.com/gibapoolservice_piscinas/',
  },
  {
    campo: 'Endereço',
    oficial: 'Av. Emanoel Pinto, 788 – Sala 01 – Centro',
    encontrado: 'Rua Adolfo Cabral, 671 – Piçarras',
    fonte: 'https://www.facebook.com/Gibapoolservice/',
  },
  {
    campo: 'Tempo de mercado',
    oficial: 'CNPJ aberto em 12/01/2018',
    encontrado: '"Há mais de 10 anos no mercado" (bio do Instagram)',
    fonte: 'https://www.instagram.com/gibapoolstore/',
  },
  {
    campo: 'Clientes atendidos',
    oficial: 'Sem dado oficial',
    encontrado: '"Mais de 12.000 clientes satisfeitos" (bio do Instagram)',
    fonte: 'https://www.instagram.com/gibapoolservice_piscinas/',
  },
  {
    campo: 'Horário de funcionamento',
    oficial: 'Seg–sex ~08h–17h30 · Sáb ~08h30–12h',
    encontrado: 'Snippet com "das 6h15 às 9h30" em reel — provavelmente de outro estabelecimento',
    fonte: 'https://www.instagram.com/reel/C8fGlodRhZe/',
  },
];
