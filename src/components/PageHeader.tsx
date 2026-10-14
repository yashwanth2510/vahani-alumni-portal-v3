import type { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  subtitle?: string
  badge?: string
  children?: ReactNode
}

export default function PageHeader({ title, subtitle, badge, children }: PageHeaderProps) {
  return (
    <header className="mb-8 sm:mb-10 max-w-full">
      {badge && (
        <span className="eyebrow mb-3 block">
          <span className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-clay-400" aria-hidden="true" />
            {badge}
          </span>
        </span>
      )}
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-ink-900 break-words">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 text-ink-500 text-base sm:text-lg max-w-3xl leading-relaxed break-words">
          {subtitle}
        </p>
      )}
      {children}
    </header>
  )
}
