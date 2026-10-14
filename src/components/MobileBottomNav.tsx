import { NavLink } from 'react-router-dom'
import Icon, { type IconName } from './Icon'

interface NavItem {
  to: string
  label: string
  icon: IconName
  end?: boolean
}

const items: NavItem[] = [
  { to: '/', label: 'Home', icon: 'home', end: true },
  { to: '/events', label: 'Events', icon: 'calendar' },
  { to: '/vijayibhawa', label: 'Mentor', icon: 'handshake' },
  { to: '/impact360', label: 'Impact', icon: 'globe' },
]

const portalItem: NavItem = { to: '/portal/alumni', label: 'Portal', icon: 'users' }
const loginItem: NavItem = { to: '/login', label: 'Login', icon: 'lock' }

export default function MobileBottomNav({ isAuthenticated }: { isAuthenticated: boolean }) {
  const navItems: NavItem[] = isAuthenticated
    ? [...items.slice(0, 3), portalItem, items[3]]
    : [...items, loginItem]

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 safe-bottom"
      aria-label="Quick navigation"
    >
      <div className="mx-3 mb-3 rounded-3xl border border-line bg-cream/85 backdrop-blur-2xl shadow-lg overflow-hidden">
        <div className="flex items-stretch justify-around max-w-lg mx-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to + item.label}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `relative flex flex-col items-center justify-center gap-0.5 flex-1 min-h-[60px] py-2 px-1 text-[10px] font-bold tracking-wide no-underline transition-colors ${
                  isActive ? 'text-clay-700' : 'text-ink-400 hover:text-ink-700'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    aria-hidden="true"
                    className={`absolute top-0 h-[3px] w-8 rounded-full bg-gradient-to-r from-clay-600 to-brand-500 transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                  />
                  <span
                    className={`flex items-center justify-center w-10 h-7 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-clay-50' : ''
                    }`}
                  >
                    <Icon name={item.icon} size={19} />
                  </span>
                  <span className="truncate max-w-full">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
