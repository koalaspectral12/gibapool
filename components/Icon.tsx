import type { ReactElement, SVGProps } from 'react';

export type IconName =
  | 'sparkle'
  | 'droplet'
  | 'wrench'
  | 'gear'
  | 'filter'
  | 'pump'
  | 'store'
  | 'shield'
  | 'clock'
  | 'phone'
  | 'whatsapp'
  | 'instagram'
  | 'pin'
  | 'arrowRight'
  | 'arrowUpRight'
  | 'check'
  | 'chevronDown'
  | 'menu'
  | 'close'
  | 'star'
  | 'beaker'
  | 'bolt'
  | 'net'
  | 'layers'
  | 'chat'
  | 'flask'
  | 'info'
  | 'zoom';

const paths: Record<IconName, ReactElement> = {
  sparkle: (
    <>
      <path d="M12 3l1.7 4.9L18.6 9.6 13.7 11.3 12 16.2 10.3 11.3 5.4 9.6 10.3 7.9z" />
      <path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
    </>
  ),
  droplet: (
    <path d="M12 2.7l5.2 6.1a7 7 0 11-10.4 0z" />
  ),
  wrench: (
    <path d="M14.7 6.3a4 4 0 00-5.4 5.1L4 16.7V20h3.3l5.3-5.3a4 4 0 005.1-5.4l-2.3 2.3-2.1-2.1z" />
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.8v2.6M12 18.6v2.6M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2.8 12h2.6M18.6 12h2.6M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
    </>
  ),
  filter: (
    <>
      <path d="M3.5 5.5h17L14 12.4V20l-4-2.2v-5.4z" />
    </>
  ),
  pump: (
    <>
      <rect x="3" y="9" width="11" height="7" rx="2" />
      <path d="M14 12.5h3.5a3 3 0 013 3V19" />
      <path d="M6.5 9V6.5h4V9" />
    </>
  ),
  store: (
    <>
      <path d="M4 9.5V19a1 1 0 001 1h14a1 1 0 001-1V9.5" />
      <path d="M3 9.5l1.7-5.2A1 1 0 015.6 3.5h12.8a1 1 0 01.9.8L21 9.5z" />
      <path d="M9.5 20v-5.5h5V20" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4.2-2.9 7.5-7 9-4.1-1.5-7-4.8-7-9V6z" />
      <path d="M9 12l2.2 2.2L15.5 10" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.4a11 11 0 005.1 5.1l1.4-2 4 1.5v3a2 2 0 01-2.2 2A16.5 16.5 0 014.5 5.7a2 2 0 012-2.2z" />
  ),
  whatsapp: (
    <>
      <path d="M12 3.5a8.5 8.5 0 00-7.3 12.8L3.5 20.5l4.3-1.2A8.5 8.5 0 1012 3.5z" />
      <path d="M8.9 8.4c.3-.6 1.1-.5 1.3-.1l.6 1.1c.1.3 0 .5-.2.7l-.5.5c.5 1 1.3 1.8 2.3 2.3l.5-.5c.2-.2.4-.3.7-.2l1.1.6c.4.2.5 1-.1 1.3-1.9 1-6-3.1-5.7-5.7z" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M16.8 7.2h.01" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6.5-5.4 6.5-10.2A6.5 6.5 0 005.5 10.8C5.5 15.6 12 21 12 21z" />
      <circle cx="12" cy="10.6" r="2.4" />
    </>
  ),
  arrowRight: <path d="M4.5 12h14m-5.5-5.5L18.5 12 13 17.5" />,
  arrowUpRight: <path d="M7 17L17 7m0 0H9m8 0v8" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  chevronDown: <path d="M6 9.5l6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  star: (
    <path d="M12 3.6l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L3.5 9.8l5.9-.9z" />
  ),
  beaker: (
    <>
      <path d="M8 3.5h8M9.5 3.5v6L5.6 17a2 2 0 001.8 3h9.2a2 2 0 001.8-3l-3.9-7.5v-6" />
      <path d="M7.5 15h9" />
    </>
  ),
  bolt: <path d="M13.5 2.5L5.5 13.5h5.5L10 21.5l8.5-11.5H13z" />,
  net: (
    <>
      <path d="M4.5 19.5L19 5" />
      <path d="M15 4.5h5v5" />
      <path d="M7.5 16.5c3-1 6-3.5 7.5-7" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3.5l8.5 4.5L12 12.5 3.5 8z" />
      <path d="M4 12.5l8 4.2 8-4.2" />
      <path d="M4 16.5l8 4.2 8-4.2" />
    </>
  ),
  chat: (
    <path d="M4.5 5.5h15v9h-8l-4 4v-4h-3z" />
  ),
  flask: (
    <>
      <path d="M10 3.5h4M10.5 3.5v5.2L6.2 17a2 2 0 001.8 2.9h8a2 2 0 001.8-2.9l-4.3-8.3V3.5" />
      <circle cx="10.5" cy="15.5" r=".6" />
      <circle cx="13.5" cy="17" r=".6" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5.5M12 7.9h.01" />
    </>
  ),
  zoom: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4 4M8.5 11h5M11 8.5v5" />
    </>
  ),
};

const filled: IconName[] = [
  'droplet',
  'wrench',
  'phone',
  'sparkle',
  'chat',
  'bolt',
  'star',
];

export function Icon({
  name,
  className = 'h-5 w-5',
  ...rest
}: { name: IconName; className?: string } & SVGProps<SVGSVGElement>) {
  const isFilled = filled.includes(name);
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? 'none' : 'currentColor'}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
