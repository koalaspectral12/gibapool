/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportação estática: o site pode ser hospedado em qualquer CDN/host (Vercel,
  // Netlify, Cloudflare Pages, hospedagem compartilhada com FTP).
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // Necessário no `output: export` (sem servidor de otimização de imagem).
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
