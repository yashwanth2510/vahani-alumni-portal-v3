import { assetUrl } from '../api/client'
import Icon from './Icon'

const explore: [string, string][] = [
  ['Vision & Mission', '/vision-mission'],
  ['Events', '/events'],
  ['Gallery', '/gallery'],
  ['Impact360', '/impact360'],
]

const community: [string, string][] = [
  ['Vijayibhawa Mentorship', '/vijayibhawa'],
  ['Alumni Directory', '/portal/alumni'],
  ['Job Portal', '/portal/jobs'],
  ['Support Fund', '/portal/support-fund'],
]

export default function Footer() {
  return (
    <footer className="mt-auto safe-bottom pb-20 lg:pb-0">
      <div className="relative overflow-hidden bg-navy-900 text-navy-100">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.15]" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-gold-200/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-200/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
            <div className="col-span-2 md:col-span-5 md:pr-10">
              <div className="flex items-center gap-3 mb-5">
                <img
                  src={assetUrl('Vahani Alumni Association Logo.png')}
                  alt="Vahani Alumni Association"
                  className="w-12 h-12 object-contain rounded-2xl bg-white/10 p-1"
                />
                <div>
                  <p className="font-display text-lg text-white leading-tight">Vahani Alumni</p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-navy-100/60">Association</p>
                </div>
              </div>
              <p className="text-sm text-navy-100/70 leading-relaxed max-w-sm">
                A lifelong network of changemakers, bound by shared values and purpose. An initiative of the Vahani
                Scholarship Trust community.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="https://www.linkedin.com/company/vahani-alumni-association/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 flex items-center justify-center rounded-2xl border border-white/15 text-navy-100 hover:text-white hover:bg-brand-500 hover:border-brand-500 transition-all hover:-translate-y-0.5"
                >
                  <Icon name="linkedin" size={17} />
                </a>
                <a
                  href="https://www.instagram.com/vahanialumni/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 flex items-center justify-center rounded-2xl border border-white/15 text-navy-100 hover:text-white hover:bg-brand-500 hover:border-brand-500 transition-all hover:-translate-y-0.5"
                >
                  <Icon name="instagram" size={17} />
                </a>
                <a
                  href="https://www.vahanischolarship.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-100/80 hover:text-white underline decoration-white/25 underline-offset-4 transition-colors"
                >
                  vahanischolarship.com
                  <Icon name="arrow-right" size={13} />
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-navy-100/50 font-bold mb-4">Explore</h4>
              <ul className="space-y-2.5 text-sm">
                {explore.map(([label, to]) => (
                  <li key={to}>
                    <a href={to} className="text-navy-100/75 hover:text-white transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-navy-100/50 font-bold mb-4">Community</h4>
              <ul className="space-y-2.5 text-sm">
                {community.map(([label, to]) => (
                  <li key={to}>
                    <a href={to} className="text-navy-100/75 hover:text-white transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-3">
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-navy-100/50 font-bold mb-4">Contact</h4>
              <div className="space-y-3.5 text-sm text-navy-100/75">
                <a
                  href="mailto:valumniassociation@gmail.com"
                  className="flex items-start gap-3 hover:text-white transition-colors"
                >
                  <Icon name="mail" size={16} className="mt-0.5 shrink-0 text-gold-200" />
                  <span>valumniassociation@gmail.com</span>
                </a>
                <a href="tel:+919319452777" className="flex items-start gap-3 hover:text-white transition-colors">
                  <Icon name="phone" size={16} className="mt-0.5 shrink-0 text-gold-200" />
                  <span>+91 93194 52777</span>
                </a>
                <p className="flex items-start gap-3">
                  <Icon name="map-pin" size={16} className="mt-0.5 shrink-0 text-gold-200" />
                  <span>Think Valley, Malviya Nagar Extension, Saket, New Delhi 110017</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-navy-100/50">
            <p>© 2015–2026 Vahani Scholarship Trust · Vahani Alumni Association</p>
            <p className="flex items-center gap-1.5">
              <Icon name="heart" size={13} className="text-brand-400" />
              VAP 3.0 — redesigned alumni portal
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
