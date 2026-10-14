import type { ReactElement, SVGProps } from 'react'

export type IconName =
  | 'home'
  | 'compass'
  | 'calendar'
  | 'image'
  | 'globe'
  | 'cake'
  | 'handshake'
  | 'users'
  | 'briefcase'
  | 'graduation'
  | 'heart'
  | 'clipboard'
  | 'settings'
  | 'menu'
  | 'close'
  | 'search'
  | 'arrow-right'
  | 'logout'
  | 'lock'
  | 'sparkle'
  | 'quote'
  | 'mail'
  | 'phone'
  | 'map-pin'
  | 'check'
  | 'leaf'
  | 'linkedin'
  | 'instagram'

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
}

const brand: Partial<Record<IconName, ReactElement>> = {
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4V9Z" />
  ),
  instagram: (
    <path d="M12 2c2.72 0 3.06.01 4.12.06 1.07.05 1.8.22 2.43.47.66.25 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.63.42 1.36.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.07-.22 1.8-.47 2.43a4.9 4.9 0 0 1-1.15 1.77c-.55.55-1.11.9-1.77 1.15-.63.25-1.36.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.07-.05-1.8-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.63-.42-1.36-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.07.22-1.8.47-2.43.25-.66.6-1.22 1.15-1.77.55-.55 1.11-.9 1.77-1.15.63-.25 1.36-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 1.8c-2.67 0-2.99.01-4.04.06-.98.04-1.5.2-1.86.34-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.36-.3.88-.34 1.86-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.98.2 1.5.34 1.86.18.47.4.8.75 1.15.35.35.68.57 1.15.75.36.14.88.3 1.86.34 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.98-.04 1.5-.2 1.86-.34.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.36.3-.88.34-1.86.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.98-.2-1.5-.34-1.86a3.1 3.1 0 0 0-.75-1.15 3.1 3.1 0 0 0-1.15-.75c-.36-.14-.88-.3-1.86-.34-1.05-.05-1.37-.06-4.04-.06Zm0 3.06a5.14 5.14 0 1 1 0 10.28 5.14 5.14 0 0 1 0-10.28Zm0 1.8a3.34 3.34 0 1 0 0 6.68 3.34 3.34 0 0 0 0-6.68Zm5.34-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
  ),
}

const stroke: Record<Exclude<IconName, 'linkedin' | 'instagram'>, ReactElement> = {
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h5v-6h4v6h5V9.5" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4.5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v3M16 3v3" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m4 18 5-5 4 3.5L17 12l3 3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </>
  ),
  cake: (
    <>
      <path d="M4 21h16v-5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v5Z" />
      <path d="M4 17c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0" />
      <path d="M12 10V7M12 4.5v.01M8 10V8M16 10V8" />
    </>
  ),
  handshake: (
    <>
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l3.6-3.6a1 1 0 0 0 0-1.4l-2-2" />
      <path d="m10 15-2 2a1 1 0 0 1-1.4 0L3 13.4a1 1 0 0 1 0-1.4l4-4 3 1 2-1 2 1 3-1 4 4" />
      <path d="m14 13-1.5-1.5" />
    </>
  ),
  users: (
    <>
      <path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19" />
      <circle cx="10" cy="8" r="3.2" />
      <path d="M20 19v-1.5a3.5 3.5 0 0 0-2.6-3.4M15.5 5.2a3.2 3.2 0 0 1 0 5.6" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5M3 12.5h18" />
    </>
  ),
  graduation: (
    <>
      <path d="m12 4 9 4.5-9 4.5-9-4.5L12 4Z" />
      <path d="M6 10.5V16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5.5M21 8.5V14" />
    </>
  ),
  heart: <path d="M12 20.5S3.5 15 3.5 9.3A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 8.5 2.3C20.5 15 12 20.5 12 20.5Z" />,
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3h6v1M9 9h6M9 13h6M9 17h4" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7 19.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 2.7-1.1V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1.4Z" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6 6 18" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  'arrow-right': (
    <>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </>
  ),
  logout: (
    <>
      <path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3" />
      <path d="M10 12h10M17 9l3 3-3 3" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3v4M12 17v4M5 12H1M23 12h-4M6.3 6.3 3.5 3.5M20.5 20.5l-2.8-2.8M17.7 6.3l2.8-2.8M3.5 20.5l2.8-2.8" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  quote: (
    <>
      <path d="M10 7H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v3l3-3V9a2 2 0 0 0 0-2Zm10 0h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v3l3-3V9a2 2 0 0 0 0-2Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: (
    <path d="M4 5c0-1 .8-2 1.9-2h2c.8 0 1.5.6 1.7 1.4l.7 3a1.8 1.8 0 0 1-.5 1.7l-1.2 1.2a15 15 0 0 0 5.4 5.4l1.2-1.2c.4-.5 1.1-.6 1.7-.5l3 .7c.8.2 1.4.9 1.4 1.7v2c0 1.1-.9 1.9-2 1.9A16 16 0 0 1 4 5Z" />
  ),
  'map-pin': (
    <>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  check: <path d="M5 12.5 10 17.5 19 7" />,
  leaf: (
    <>
      <path d="M4 20c0-8 6-14 16-14 0 10-6 14-13 14H4Z" />
      <path d="M4 20c3-6 7-9 12-11" />
    </>
  ),
}

export default function Icon({ name, size = 20, ...rest }: IconProps) {
  const isBrand = name === 'linkedin' || name === 'instagram'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isBrand ? 'currentColor' : 'none'}
      stroke={isBrand ? 'none' : 'currentColor'}
      strokeWidth={isBrand ? 0 : 1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {isBrand ? brand[name] : stroke[name as Exclude<IconName, 'linkedin' | 'instagram'>]}
    </svg>
  )
}
