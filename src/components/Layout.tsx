import { assetUrl } from '../api/client'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useSiteSettings } from '../context/SiteSettingsContext'
import Footer from './Footer'
import MobileBottomNav from './MobileBottomNav'
import Icon, { type IconName } from './Icon'

interface LinkItem {
  to: string
  label: string
  icon: IconName
}

const publicLinks: LinkItem[] = [
  { to: '/', label: 'Home', icon: 'home' },
  { to: '/vision-mission', label: 'Vision', icon: 'compass' },
  { to: '/events', label: 'Events', icon: 'calendar' },
  { to: '/gallery', label: 'Gallery', icon: 'image' },
  { to: '/impact360', label: 'Impact360', icon: 'globe' },
  { to: '/birthday-wall', label: 'Birthday Wall', icon: 'cake' },
  { to: '/vijayibhawa', label: 'Vijayibhawa', icon: 'handshake' },
]

const portalLinks: LinkItem[] = [
  { to: '/portal/alumni', label: 'Alumni Database', icon: 'users' },
  { to: '/portal/jobs', label: 'Job Portal', icon: 'briefcase' },
  { to: '/portal/alumni-meet', label: 'Alumni Meet', icon: 'graduation' },
  { to: '/portal/support-fund', label: 'Support Fund', icon: 'heart' },
  { to: '/portal/mentorship', label: 'Vijayibhawa Log', icon: 'clipboard' },
]

function DesktopLink({ to, label, end }: { to: string; label: string; end?: boolean }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `relative px-3.5 py-2 text-[0.8125rem] font-semibold no-underline transition-colors ${
          isActive ? 'text-clay-700' : 'text-ink-500 hover:text-ink-900'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {label}
          <span
            aria-hidden="true"
            className={`absolute inset-x-3 -bottom-px h-[2.5px] rounded-full bg-gradient-to-r from-clay-600 to-brand-500 transition-all duration-300 ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </>
      )}
    </NavLink>
  )
}

function DrawerLink({ to, label, icon, end, onNavigate }: LinkItem & { end?: boolean; onNavigate?: () => void }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      className={({ isActive }) =>
        `group flex items-center gap-3 px-3.5 py-3 min-h-[48px] rounded-2xl text-sm font-semibold no-underline transition-all ${
          isActive
            ? 'bg-clay-600 text-white shadow-md'
            : 'text-ink-600 hover:bg-cream-deep border border-transparent'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-xl transition-colors ${
              isActive ? 'bg-white/15 text-white' : 'bg-cream-deep text-clay-600 group-hover:bg-white'
            }`}
          >
            <Icon name={icon} size={16} />
          </span>
          <span className="truncate">{label}</span>
        </>
      )}
    </NavLink>
  )
}

export default function Layout() {
  const { isAuthenticated, role, username, logout } = useAuth()
  const { birthdayWallEnabled } = useSiteSettings()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const closeMobile = () => setMobileOpen(false)

  useEffect(() => {
    closeMobile()
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.classList.add('menu-open')
    else document.body.classList.remove('menu-open')
    return () => document.body.classList.remove('menu-open')
  }, [mobileOpen])

  /* Scroll-reveal: activate every .reveal element as it enters the viewport. */
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (!('IntersectionObserver' in window) || els.length === 0) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-visible')
      else observer.observe(el)
    })
    return () => observer.disconnect()
  }, [location.pathname])

  const visiblePublicLinks = publicLinks.filter(
    (l) => l.to !== '/birthday-wall' || birthdayWallEnabled || role === 'admin',
  )
  const visiblePortalLinks =
    role === 'admin'
      ? [...portalLinks, { to: '/portal/settings', label: 'Site Settings', icon: 'settings' as IconName }]
      : portalLinks

  const drawer = (
    <nav className="flex flex-col gap-1" aria-label="Main navigation">
      <p className="px-3 mb-1.5 text-[10px] uppercase tracking-[0.22em] text-ink-400 font-bold">Explore</p>
      {visiblePublicLinks.map((l) => (
        <DrawerLink key={l.to} {...l} end={l.to === '/'} onNavigate={closeMobile} />
      ))}
      {isAuthenticated && (
        <>
          <p className="px-3 mt-5 mb-1.5 text-[10px] uppercase tracking-[0.22em] text-ink-400 font-bold">Portal</p>
          {visiblePortalLinks.map((l) => (
            <DrawerLink key={l.to} {...l} onNavigate={closeMobile} />
          ))}
        </>
      )}
    </nav>
  )

  return (
    <div className="app-shell min-h-dvh flex flex-col w-full max-w-[100vw] overflow-x-hidden">
      <header
        className={`sticky top-0 z-50 safe-top transition-all duration-300 ${
          scrolled
            ? 'border-b border-line/80 bg-cream/80 shadow-sm backdrop-blur-2xl'
            : 'border-b border-transparent bg-cream/60 backdrop-blur-xl'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 sm:h-[4.5rem] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <button
              type="button"
              className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl hover:bg-cream-deep text-ink-600 shrink-0 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <Icon name={mobileOpen ? 'close' : 'menu'} size={22} />
            </button>
            <NavLink to="/" className="flex items-center gap-2.5 no-underline group min-w-0">
              <span className="relative shrink-0">
                <img
                  src={assetUrl('Vahani Alumni Association Logo.png')}
                  alt=""
                  className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-2xl ring-1 ring-line bg-white/70 p-0.5 transition-transform duration-300 group-hover:-rotate-3"
                />
              </span>
              <span className="min-w-0 hidden min-[380px]:block">
                <span className="block font-display text-[1.05rem] leading-none truncate">
                  Vahani Alumni
                </span>
                <span className="block text-[10px] text-ink-400 uppercase tracking-[0.22em] truncate mt-0.5">
                  Association
                </span>
              </span>
            </NavLink>
          </div>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
            {visiblePublicLinks.map((l) => (
              <DesktopLink key={l.to} to={l.to} label={l.label} end={l.to === '/'} />
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            {isAuthenticated ? (
              <>
                <div className="hidden md:flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-white/70 border border-line text-sm shadow-2xs">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  </span>
                  <span className="text-ink-700 truncate font-semibold max-w-[140px]">{username}</span>
                </div>
                <button type="button" onClick={logout} className="btn-ghost" aria-label="Logout">
                  <Icon name="logout" size={16} />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            ) : (
              <NavLink to="/login" className="btn-primary no-underline text-xs sm:text-sm px-4 sm:px-5">
                <Icon name="lock" size={15} />
                <span className="hidden sm:inline">Internal Portal</span>
                <span className="sm:hidden">Login</span>
              </NavLink>
            )}
          </div>
        </div>

        {isAuthenticated && (
          <div className="hidden lg:block border-t border-line/70 bg-white/40">
            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center gap-1.5">
              <span className="mr-1.5 text-[10px] uppercase tracking-[0.22em] text-ink-400 font-bold">Portal</span>
              {visiblePortalLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold no-underline transition-all ${
                      isActive
                        ? 'bg-clay-600 text-white shadow-md'
                        : 'text-ink-500 hover:bg-cream-deep hover:text-ink-800'
                    }`
                  }
                >
                  <Icon name={l.icon} size={14} />
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <div className="flex flex-1 w-full max-w-7xl mx-auto min-w-0">
        {mobileOpen && (
          <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
            <div
              className="drawer-backdrop absolute inset-0 bg-ink-900/40 backdrop-blur-sm"
              onClick={closeMobile}
              aria-hidden="true"
            />
            <aside className="drawer-panel absolute left-0 top-16 bottom-0 w-[min(86vw,330px)] bg-cream border-r border-line p-4 overflow-y-auto overscroll-contain safe-bottom">
              {drawer}
            </aside>
          </div>
        )}

        <main
          key={location.pathname}
          className="flex-1 min-w-0 w-full p-4 sm:p-6 md:p-9 pb-28 lg:pb-12 page-enter content-container"
        >
          <Outlet />
        </main>
      </div>

      <Footer />
      <MobileBottomNav isAuthenticated={isAuthenticated} />
    </div>
  )
}
