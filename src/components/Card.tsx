import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const paddingMap = { sm: 'p-4', md: 'p-6', lg: 'p-8' }

export default function Card({ children, className = '', hover = false, padding = 'md' }: CardProps) {
  return (
    <div className={`card ${paddingMap[padding]} ${hover ? 'card-hover' : ''} max-w-full ${className}`}>
      {children}
    </div>
  )
}
