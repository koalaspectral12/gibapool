import type { ReactNode } from 'react';
import { Icon } from './Icon';

export function SectionHeading({
  eyebrow,
  titulo,
  texto,
  align = 'left',
  tone = 'light',
  icone,
}: {
  eyebrow?: string;
  titulo: ReactNode;
  texto?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  icone?: Parameters<typeof Icon>[0]['name'];
}) {
  const dark = tone === 'dark';
  return (
    <div
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <span
          className={`eyebrow ${
            dark ? 'text-aqua' : 'text-brand-600'
          } ${align === 'center' ? 'justify-center' : ''}`}
        >
          {icone && <Icon name={icone} className="h-3.5 w-3.5" />}
          {eyebrow}
        </span>
      )}
      <h2 className={`h2 mt-3.5 ${dark ? 'text-white' : ''}`}>{titulo}</h2>
      {texto && (
        <p className={`lead mt-4 ${dark ? 'text-brand-100/80' : ''}`}>{texto}</p>
      )}
    </div>
  );
}

export function Flag({ children }: { children?: ReactNode }) {
  return (
    <span className="flag">
      <Icon name="info" className="h-3 w-3" />
      {children ?? 'A confirmar'}
    </span>
  );
}
