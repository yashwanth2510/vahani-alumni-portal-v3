import { assetUrl } from '../api/client'
import { NavLink } from 'react-router-dom'
import Card from '../components/Card'
import Icon, { type IconName } from '../components/Icon'

const stats: { value: string; label: string }[] = [
  { value: '2015', label: 'Vahani established' },
  { value: '10+', label: 'Years of impact' },
  { value: '10', label: 'States & UTs reached' },
  { value: '4', label: 'Alumni Meets hosted' },
]

const explore: { to: string; title: string; desc: string; icon: IconName }[] = [
  {
    to: '/vision-mission',
    title: 'Vision & Mission',
    desc: 'The guiding principles that unite our alumni community.',
    icon: 'compass',
  },
  {
    to: '/impact360',
    title: 'Impact360',
    desc: 'AI workshops, wellbeing drives, and the Joy of Giving initiative.',
    icon: 'globe',
  },
  {
    to: '/vijayibhawa',
    title: 'Vijayibhawa Mentorship',
    desc: 'Book a session with alumni mentors and grow together.',
    icon: 'handshake',
  },
  {
    to: '/events',
    title: 'Events',
    desc: 'Alumni meets, expert talks, and community gatherings.',
    icon: 'calendar',
  },
  {
    to: '/gallery',
    title: 'Gallery',
    desc: 'Memories from meets, drama performances, and celebrations.',
    icon: 'image',
  },
  {
    to: '/birthday-wall',
    title: 'Birthday Wall',
    desc: 'A tribute of gratitude, memories, and warm wishes.',
    icon: 'cake',
  },
]

export default function Home() {
  return (
    <div className="w-full max-w-full">
      {/* Hero */}
      <section className="card overflow-hidden mb-8 sm:mb-12">
        <div className="grid lg:grid-cols-2">
          <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center">
            <span className="eyebrow mb-4">
              <span className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-brand-400" aria-hidden="true" />
                Vahani Scholarship Trust · Alumni
              </span>
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] text-ink-900 mb-5">
              A lifelong network of <span className="gradient-text">changemakers</span>
            </h1>
            <p className="text-ink-500 text-base sm:text-lg max-w-xl leading-relaxed mb-7">
              Bound by shared values and purpose — supporting one another, celebrating each other's achievements, and
              creating lasting impact together.
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
          <div className="relative min-h-[240px] lg:min-h-full">
            <img
              src={assetUrl('welcome_banner.jpg')}
              alt="Vahani alumni together"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-clay-900/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-cream/60 lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 sm:mb-12">
        {stats.map((s) => (
          <div key={s.label} className="card p-5 text-center">
            <p className="font-display text-3xl sm:text-4xl font-semibold text-brand-600 leading-none">{s.value}</p>
            <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wide text-ink-400">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Mission quote */}
      <section className="card p-7 sm:p-12 mb-8 sm:mb-12 bg-cream-deep/60">
        <div className="max-w-3xl mx-auto text-center">
          <Icon name="quote" size={34} className="mx-auto text-brand-400 mb-5" />
          <p className="font-display text-xl sm:text-2xl md:text-3xl leading-snug text-ink-800 italic">
            "The Vahani Alumni Association stands as a lifelong network of changemakers, bound by shared values and
            purpose — creating impact by supporting one another and contributing meaningfully to society."
          </p>
          <div className="rule-accent mx-auto mt-7" />
        </div>
      </section>

      {/* Explore */}
      <section className="mb-8 sm:mb-12">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <span className="eyebrow block mb-2">Discover</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900">Explore the community</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {explore.map((e) => (
            <NavLink key={e.to} to={e.to} className="no-underline group">
              <Card hover className="h-full flex flex-col">
                <span className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  <Icon name={e.icon} size={22} />
                </span>
                <h3 className="font-display text-xl font-semibold text-ink-900 mb-1.5">{e.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed flex-1">{e.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Explore <Icon name="arrow-right" size={15} />
                </span>
              </Card>
            </NavLink>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="rounded-3xl overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-brand-400 p-8 sm:p-12 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-3">
          Reconnect. Rise. Revolutionize.
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-7 leading-relaxed">
          Access the alumni directory, job and internship portal, mentorship, and support fund — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <NavLink
            to="/login"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-brand-700 font-semibold no-underline hover:bg-cream transition-colors min-h-[44px]"
          >
            <Icon name="lock" size={16} />
            Enter Internal Portal
          </NavLink>
          <NavLink
            to="/vijayibhawa"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/60 text-white font-semibold no-underline hover:bg-white/10 transition-colors min-h-[44px]"
          >
            <Icon name="handshake" size={16} />
            Request Mentorship
          </NavLink>
        </div>
      </section>
    </div>
  )
}
