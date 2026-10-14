import { assetUrl } from '../api/client'
import { NavLink } from 'react-router-dom'
import Icon, { type IconName } from '../components/Icon'

const stats: { value: string; label: string }[] = [
  { value: '2015', label: 'Vahani established' },
  { value: '10+', label: 'Years of impact' },
  { value: '10', label: 'States & UTs reached' },
  { value: '4', label: 'Alumni Meets hosted' },
]

const explore: { to: string; title: string; desc: string; icon: IconName; tone: string }[] = [
  {
    to: '/vision-mission',
    title: 'Vision & Mission',
    desc: 'The guiding principles that unite our alumni community.',
    icon: 'compass',
    tone: 'bg-clay-50 text-clay-600 group-hover:bg-clay-600',
  },
  {
    to: '/impact360',
    title: 'Impact360',
    desc: 'AI workshops, wellbeing drives, and the Joy of Giving initiative.',
    icon: 'globe',
    tone: 'bg-accent-50 text-accent-700 group-hover:bg-accent-600',
  },
  {
    to: '/vijayibhawa',
    title: 'Vijayibhawa Mentorship',
    desc: 'Book a session with alumni mentors and grow together.',
    icon: 'handshake',
    tone: 'bg-brand-50 text-brand-600 group-hover:bg-brand-500',
  },
  {
    to: '/events',
    title: 'Events',
    desc: 'Alumni meets, expert talks, and community gatherings.',
    icon: 'calendar',
    tone: 'bg-gold-50 text-gold-600 group-hover:bg-gold-400',
  },
  {
    to: '/gallery',
    title: 'Gallery',
    desc: 'Memories from meets, drama performances, and celebrations.',
    icon: 'image',
    tone: 'bg-navy-50 text-navy-700 group-hover:bg-navy-800',
  },
  {
    to: '/birthday-wall',
    title: 'Birthday Wall',
    desc: 'A tribute of gratitude, memories, and warm wishes.',
    icon: 'cake',
    tone: 'bg-clay-50 text-clay-600 group-hover:bg-clay-600',
  },
]

export default function Home() {
  return (
    <div className="w-full max-w-full">
      {/* ── Hero ── */}
      <section className="reveal relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem] border border-line bg-surface-raised shadow-lg mb-10 sm:mb-16">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-500/12 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-gold-200/20 blur-3xl" aria-hidden="true" />
        <div className="grid lg:grid-cols-[1.05fr_1fr]">
          <div className="relative p-7 sm:p-12 lg:p-16 flex flex-col justify-center">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(80%_60%_at_20%_20%,#000,transparent)]" aria-hidden="true" />
            <div className="relative">
              <span className="eyebrow mb-5">Vahani Scholarship Trust · Alumni</span>
              <h1 className="font-display text-display text-ink-900 mb-6">
                A lifelong network of <span className="gradient-text">changemakers</span>
              </h1>
              <p className="text-ink-500 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
                Bound by shared values and purpose — supporting one another, celebrating each other's achievements,
                and creating lasting impact together.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <NavLink to="/vision-mission" className="btn-primary no-underline w-full sm:w-auto">
                  Our Vision
                  <Icon name="arrow-right" size={16} />
                </NavLink>
                <NavLink to="/login" className="btn-secondary no-underline w-full sm:w-auto">
                  <Icon name="lock" size={15} />
                  Access Portal
                </NavLink>
              </div>
            </div>
          </div>

          <div className="relative min-h-[280px] lg:min-h-[520px]">
            <img
              src={assetUrl('welcome_banner.jpg')}
              alt="Vahani alumni together"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-clay-900/60 via-clay-900/5 to-transparent lg:bg-gradient-to-r lg:from-surface-raised/70 lg:via-transparent lg:to-transparent" />
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
              <span className="chip bg-white/85 backdrop-blur text-clay-700 border-white/60 shadow-sm">
                <Icon name="sparkle" size={13} /> Est. 2015
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto">
              <div className="glass-card inline-flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-white">
                  <Icon name="users" size={18} />
                </span>
                <div>
                  <p className="font-display text-lg leading-none text-ink-900">4 meets</p>
                  <p className="text-[11px] text-ink-400 font-semibold uppercase tracking-wide">Across India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="reveal grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-16">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="card card-hover p-5 sm:p-6 text-center"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <p className="font-display text-4xl sm:text-5xl text-clay-600 leading-none">{s.value}</p>
            <p className="mt-3 text-xs sm:text-[0.8rem] font-bold uppercase tracking-[0.12em] text-ink-400">
              {s.label}
            </p>
          </div>
        ))}
      </section>

      {/* ── Mission quote ── */}
      <section className="reveal relative overflow-hidden card p-8 sm:p-14 mb-10 sm:mb-16 bg-cream-deep/70">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.35]" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
            <Icon name="quote" size={26} className="text-gold-400" />
          </span>
          <p className="text-quote text-2xl sm:text-3xl md:text-4xl leading-snug text-ink-800">
            "The Vahani Alumni Association stands as a lifelong network of changemakers, bound by shared values and
            purpose — creating impact by supporting one another and contributing meaningfully to society."
          </p>
          <div className="rule-accent mx-auto mt-8" />
        </div>
      </section>

      {/* ── Explore ── */}
      <section className="mb-10 sm:mb-16">
        <div className="reveal flex items-end justify-between gap-4 mb-8">
          <div>
            <span className="eyebrow mb-3">Discover</span>
            <h2 className="font-display text-headline text-ink-900">Explore the community</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {explore.map((e, i) => (
            <NavLink
              key={e.to}
              to={e.to}
              className="reveal no-underline group"
              style={{ transitionDelay: `${Math.min(i, 6) * 60}ms` }}
            >
              <div className="card card-hover h-full flex flex-col p-6">
                <span
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-white transition-all duration-300 group-hover:text-white ${e.tone}`}
                >
                  <Icon name={e.icon} size={22} />
                </span>
                <h3 className="font-display text-xl text-ink-900 mb-2">{e.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed flex-1">{e.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600">
                  Explore
                  <Icon
                    name="arrow-right"
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="reveal relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem] bg-gradient-to-br from-navy-800 via-navy-900 to-clay-800 p-8 sm:p-14 text-center">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.12]" aria-hidden="true" />
        <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold-200/15 blur-3xl" aria-hidden="true" />
        <div className="relative">
          <span className="chip bg-white/10 border-white/20 text-gold-200 mb-5">
            <Icon name="sparkle" size={13} /> Alumni Portal 3.0
          </span>
          <h2 className="font-display text-headline text-white mb-4">Reconnect. Rise. Revolutionize.</h2>
          <p className="text-white/75 max-w-2xl mx-auto mb-8 leading-relaxed">
            Access the alumni directory, job and internship portal, mentorship, and support fund — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <NavLink to="/login" className="btn-gold no-underline w-full sm:w-auto">
              <Icon name="lock" size={16} />
              Enter Internal Portal
            </NavLink>
            <NavLink
              to="/vijayibhawa"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/40 text-white font-bold no-underline hover:bg-white/10 hover:border-white/70 transition-all min-h-[44px]"
            >
              <Icon name="handshake" size={16} />
              Request Mentorship
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}
