import Card from '../components/Card'
import PageHeader from '../components/PageHeader'

const upcoming = ['Stay tuned — new events will be announced here soon.']

const pastEvents = [
  { title: 'Joy of Giving Drive 2026', desc: 'From April 5th to April 30th, 2026 — donating clothes, books, and essentials to those in need.' },
  { title: 'Build for Yourself – Empowering Accessibility through AI', desc: 'Workshop on 18th April 2026 as part of Impact 360, with Samarthanam Trust for the Disabled.' },
  { title: 'Session on "Your Periods & Your Mind"', desc: 'ShineWithin – Women & Emotional Wellness Series, April 2026.' },
  { title: 'India AI Impact Summit 2026', desc: '8th position in AI Impact Buildathon finals at Bharat Mandapam, New Delhi — February 2026.' },
  { title: 'Launch of Impact360', desc: 'AI-based learning workshops, wellbeing activities, and community engagement — February 2026.' },
  { title: 'Alumni Meet 2025', desc: 'Annual Meet-Up and Celebration at Goa — December 2025.' },
  { title: 'Vahani Alumni Orientation Session', desc: 'For Graduating Batch 2025.' },
  { title: 'Round Table Discussion', desc: 'Between Alumni and Scholars — Vahani Summer Conference 2025.' },
  { title: 'Alumni Drama', desc: 'An act to show the impact.' },
  { title: 'Alumni Meet December 2024', desc: 'Annual Meet-Up at Rishikesh, Uttarakhand.' },
  { title: 'Expert Talk by Mr. Rajiv Misra', desc: 'Embracing Change: Motivating Adaptability and Innovation.' },
  { title: 'Expert Talk by Ms. Naiyya Sagi', desc: 'Standing out with your Authentic Personal Brand.' },
  { title: 'Cyber Security Workshop by Ms. Janice', desc: 'March 2025.' },
  { title: 'Alumni Meet December 2023', desc: 'Annual Meet-Up at Udaipur, Rajasthan.' },
  { title: 'Alumni Meet December 2022', desc: 'Annual Meet-Up at Jaipur, Rajasthan.' },
]

export default function Events() {
  return (
    <div>
      <PageHeader
        title="Events"
        subtitle="Celebrating milestones, fostering connections, and driving impact together."
        badge="Community"
      />

      <Card className="reveal mb-10 border-brand-200 bg-brand-50/60">
        <h2 className="font-display text-2xl font-semibold text-ink-900 mb-4 flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse" />
          Upcoming / Ongoing
        </h2>
        <ul className="space-y-2">
          {upcoming.map((e) => (
            <li key={e} className="text-ink-500 pl-4 border-l-2 border-brand-300">
              {e}
            </li>
          ))}
        </ul>
      </Card>

      <h2 className="font-display text-3xl font-semibold text-ink-900 mb-6">Past Events</h2>
      <ol className="reveal relative border-l border-line ml-1.5 space-y-5">
        {pastEvents.map((e) => (
          <li key={e.title} className="pl-6 relative">
            <span className="absolute -left-[7px] top-5 w-3.5 h-3.5 rounded-full border-2 border-brand-500 bg-cream" />
            <Card hover padding="sm">
              <h3 className="font-display text-lg font-semibold text-ink-900 mb-1">{e.title}</h3>
              <p className="text-sm text-ink-500 leading-relaxed">{e.desc}</p>
            </Card>
          </li>
        ))}
      </ol>
    </div>
  )
}
