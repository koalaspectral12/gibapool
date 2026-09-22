import type { Config } from 'tailwindcss';

/**
 * Design tokens da Giba Pool.
 * Paleta construída sobre a linguagem visual da água: azul profundo (confiança),
 * azul piscina (marca), aqua (água limpa / tecnologia) e uma única cor de
 * destaque quente para CTAs (coral), garantindo contraste e hierarquia.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#031B2E',
          900: '#05243D',
          800: '#083553',
          700: '#0A4A70',
          600: '#0C6394',
          500: '#0E7FC0',
          400: '#2E9FDA',
          300: '#6EC3EC',
          200: '#A8DDF5',
          100: '#D6EFFA',
          50: '#EEF8FD',
        },
        aqua: {
          DEFAULT: '#31C1E6',
          dark: '#1BA5C9',
          light: '#8FE3F7',
        },
        accent: {
          DEFAULT: '#FF6B35',
          dark: '#E8551F',
          light: '#FFE3D8',
        },
        ink: {
          DEFAULT: '#0B1B29',
          soft: '#41586B',
          muted: '#6B7F90',
        },
        sand: {
          DEFAULT: '#F6F9FB',
          line: '#E4EDF3',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'ui-sans-serif', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,27,41,.04), 0 8px 24px -12px rgba(11,27,41,.10)',
        card: '0 1px 2px rgba(11,27,41,.04), 0 18px 40px -22px rgba(11,27,41,.22)',
        lift: '0 2px 4px rgba(11,27,41,.05), 0 32px 60px -28px rgba(8,53,83,.35)',
        glow: '0 18px 40px -18px rgba(14,127,192,.55)',
      },
      backgroundImage: {
        'water-grad':
          'radial-gradient(120% 120% at 12% 0%, #0E7FC0 0%, #083553 45%, #031B2E 100%)',
        'aqua-grad': 'linear-gradient(120deg, #0E7FC0 0%, #31C1E6 100%)',
        'cta-grad': 'linear-gradient(120deg, #FF6B35 0%, #E8551F 100%)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(.9)', opacity: '.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        'wave-slide': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(.24,.6,.36,1) infinite',
        'wave-slide': 'wave-slide 18s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
