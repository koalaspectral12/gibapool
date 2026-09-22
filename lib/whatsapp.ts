import { links } from '@/content/site';

/** Gera o link de WhatsApp com a mensagem já codificada. */
export const wa = (mensagem: string) => links.whatsapp(mensagem);

/** Classes utilitárias reutilizadas nos CTAs. */
export const ctaClass = {
  whats: 'btn btn-md btn-whats',
  primary: 'btn btn-md btn-primary',
  outline: 'btn btn-md btn-outline',
  ghost: 'btn btn-md btn-ghost',
} as const;
