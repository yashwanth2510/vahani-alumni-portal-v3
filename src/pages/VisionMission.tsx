import { assetUrl } from '../api/client'
import Card from '../components/Card'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import { teamMembers } from '../data/content'

export default function VisionMission() {
  return (
    <div>
      <PageHeader
        title="Vision & Mission"
        subtitle="Guiding principles that unite the Vahani alumni community."
        badge="About Us"
      />

      <div className="reveal grid md:grid-cols-2 gap-5 mb-10">
        <Card className="relative overflow-hidden">
          <span className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
            <Icon name="compass" size={22} />
          </span>
          <h2 className="font-display text-2xl font-semibold text-ink-900 mb-2">Our Vision</h2>
          <p className="text-ink-500 leading-relaxed">
            Create a strong Vahani alumni community where members inspire others, celebrate each other's achievements,
            and work together to make a positive and lasting impact on society.
          </p>
        </Card>
        <Card className="relative overflow-hidden">
          <span className="w-12 h-12 rounded-2xl bg-accent-50 text-accent-700 flex items-center justify-center mb-4">
            <Icon name="leaf" size={22} />
          </span>
          <h2 className="font-display text-2xl font-semibold text-ink-900 mb-2">Our Mission</h2>
          <p className="text-ink-500 leading-relaxed">
            Build a lifelong, supportive Vahani alumni community where members collaborate meaningfully, share
            knowledge, and grow together — creating opportunities to uplift each other and inspire the next generation.
          </p>
        </Card>
      </div>

      <Card className="reveal mb-10">
        <span className="eyebrow block mb-2">Leadership</span>
        <h2 className="font-display text-3xl font-semibold text-ink-900 mb-6">Message from the President</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 text-ink-500 space-y-4 leading-relaxed">
            <p className="text-ink-700 italic">Dear Alumni,</p>
            <p>
              I strongly believe that <strong className="text-ink-900">Vahani is in my heart</strong>, and{' '}
              <strong className="text-ink-900">ideas are in my mind</strong>. As the President of the Vahani Alumni
              Association, I strive to be a guiding force — supporting, mentoring, and creating opportunities for all.
            </p>
            <p>
              We envision this platform as a space where alumni feel connected, valued and supported. Together we will
              see the Vahani Alumni Association reach new heights, driven by unity, empowerment, and a shared
              commitment to impact and excellence.
            </p>
            <p>Let us grow stronger together — as individuals and as a community.</p>
            <div className="pt-4 border-t border-line">
              <p className="font-display text-xl font-semibold text-ink-900">Shubham Tayade</p>
              <p className="text-sm text-brand-600 font-semibold">President, Vahani Alumni Association</p>
            </div>
          </div>
          <div className="shrink-0">
            <img
              src={assetUrl('photos/president_photo.jpg')}
              alt="Shubham Tayade"
              className="w-full max-w-[240px] rounded-3xl mx-auto object-cover"
            />
          </div>
        </div>
      </Card>

      <section className="reveal mb-10">
        <span className="eyebrow block mb-2">Office Bearers</span>
        <h2 className="font-display text-3xl font-semibold text-ink-900 mb-5">The Committee</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {teamMembers.map((m) => (
            <div key={m.name} className="text-center">
              <img
                src={assetUrl(m.photo)}
                alt={m.name}
                className="w-full aspect-square object-cover rounded-2xl border border-line mb-3"
                loading="lazy"
              />
              <p className="font-semibold text-ink-800 text-sm leading-tight">{m.name}</p>
              <p className="text-xs text-brand-600 font-semibold mt-0.5">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <Card padding="sm" className="reveal overflow-hidden">
        <img
          src={assetUrl('alumni_team.jpg')}
          alt="Vahani Alumni Association Team"
          className="w-full rounded-2xl"
        />
        <p className="text-center text-sm text-ink-400 mt-4 py-1">Vahani Alumni Association Team</p>
      </Card>
    </div>
  )
}
