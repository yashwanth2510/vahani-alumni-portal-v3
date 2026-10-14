import type { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  subtitle?: string
  badge?: string
  children?: ReactNode
}

export default function PageHeader({ title, subtitle, badge, children }: PageHeaderProps) {
  return (
    <header className="relative mb-10 sm:mb-14 max-w-full">
      <div
        className="pointer-events-none absolute -top-16 -left-24 -z-10 h-56 w-56 rounded-full bg-brand-500/10 blur-3xl"
        aria-hidden="true"
      />
      {badge && <span className="eyebrow mb-4">{badge}</span>}
      <h1 className="font-display text-headline text-ink-900 break-words max-w-4xl">{title}</h1>
      <div className="rule-accent mt-5" />
      {subtitle && (
        <p className="mt-5 text-ink-500 text-base sm:text-lg max-w-3xl leading-relaxed break-words">{subtitle}</p>
      )}
      {children}
    </header>
  )
}
