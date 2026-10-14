import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-white/60 safe-bottom pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:pr-8">
            <h3 className="font-display font-semibold text-2xl text-ink-900 mb-3">Vahani Alumni Association</h3>
            <p className="text-sm text-ink-500 leading-relaxed max-w-sm">
              A lifelong network of changemakers, bound by shared values and purpose. An initiative of the Vahani
              Scholarship Trust community.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.linkedin.com/company/vahani-alumni-association/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-line text-ink-500 hover:text-white hover:bg-brand-500 hover:border-brand-500 transition-colors"
              >
                <Icon name="linkedin" size={17} />
              </a>
              <a
                href="https://www.instagram.com/vahanialumni/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-line text-ink-500 hover:text-white hover:bg-brand-500 hover:border-brand-500 transition-colors"
              >
                <Icon name="instagram" size={17} />
              </a>
              <a
                href="https://www.vahanischolarship.com/"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-ink-500 hover:text-brand-600 underline decoration-line-strong underline-offset-4 transition-colors"
              >
                vahanischolarship.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.18em] text-ink-400 font-bold mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Vision & Mission', '/vision-mission'],
                ['Events', '/events'],
                ['Gallery', '/gallery'],
                ['Impact360', '/impact360'],
                ['Vijayibhawa Mentorship', '/vijayibhawa'],
              ].map(([label, to]) => (
                <li key={to}>
                  <a href={to} className="text-ink-500 hover:text-brand-600 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.18em] text-ink-400 font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-ink-500">
              <p className="flex items-start gap-2">
                <Icon name="mail" size={16} className="mt-0.5 shrink-0 text-brand-500" />
                <a href="mailto:valumniassociation@gmail.com" className="hover:text-brand-600">
                  valumniassociation@gmail.com
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Icon name="phone" size={16} className="mt-0.5 shrink-0 text-brand-500" />
                <a href="tel:+919319452777" className="hover:text-brand-600">
                  +91 93194 52777
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Icon name="map-pin" size={16} className="mt-0.5 shrink-0 text-brand-500" />
                <span>Think Valley, Malviya Nagar Extension, Saket, New Delhi 110017</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-400">
          <p>© 2015–2026 Vahani Scholarship Trust · Vahani Alumni Association. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <Icon name="heart" size={13} className="text-brand-500" />
            VAP 3.0 — redesigned alumni portal
          </p>
        </div>
      </div>
    </footer>
  )
}
