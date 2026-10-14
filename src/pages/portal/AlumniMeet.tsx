import { assetUrl } from '../../api/client'
import Card from '../../components/Card'
import PageHeader from '../../components/PageHeader'
import Icon from '../../components/Icon'
import { day1Itinerary, day2Itinerary } from '../../data/content'

function ItineraryTable({ rows }: { rows: string[][] }) {
  return (
    <div className="responsive-table-wrap rounded-2xl border border-line">
      <table className="w-full text-sm min-w-[280px]">
        <thead>
          <tr className="bg-brand-50">
            <th className="px-4 py-3 text-left font-semibold text-brand-700 border-b border-line">Time</th>
            <th className="px-4 py-3 text-left font-semibold text-brand-700 border-b border-line">Activity</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([time, activity], i) => (
            <tr key={i} className="hover:bg-cream transition-colors">
              <td className="px-4 py-3 text-ink-400 border-b border-line whitespace-nowrap">{time}</td>
              <td className="px-4 py-3 text-ink-700 border-b border-line">{activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const coordinators = [
  'Shubham Tayade (President) — +91 9623070965',
  'Shrutikirti Verma (Vice President) — +91 9569633611',
  'Shipra Saini (Joint Secretary) — +91 6397209822',
  'Kaushal Verma (Creative Lead) — +91 6378182256',
  'Dhanashree P. (Executive Member) — +91 9022833271',
  'Pruthvi M Dev (Treasurer) — +91 8792441046',
]

export default function AlumniMeet() {
  return (
    <div>
      <PageHeader
        title="Vahani Alumni Meet 2025"
        subtitle="Reconnect. Rise. Revolutionize — The evolution from scholars to leaders."
        badge="RRR 2025"
      />

      <div className="rounded-3xl p-6 sm:p-10 text-center mb-8 relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-clay-700">
        <div className="relative">
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white mb-2">RRR</h1>
          <p className="text-lg sm:text-2xl text-brand-100 font-light mb-2">Reconnect · Rise · Revolutionize</p>
          <p className="text-brand-50/90">6th–7th December 2025 · Goa, India</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-8">
        <Card>
          <h2 className="font-display text-xl font-semibold text-ink-900 mb-3">Venue Details</h2>
          <div className="text-sm text-ink-500 space-y-2">
            <p>
              <strong className="text-ink-700">Venue:</strong>{' '}
              <a href="https://whisperingpalms.com/goa/" target="_blank" rel="noreferrer">
                Whispering Palms Beach Resort, Candolim, Goa
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Icon name="map-pin" size={15} className="text-brand-500" />
              <a href="https://maps.app.goo.gl/JPkPgKsbbBkWC3PU6" target="_blank" rel="noreferrer">
                View on Google Maps
              </a>
            </p>
            <p><strong className="text-ink-700">Expected:</strong> 65 participants</p>
          </div>
        </Card>
        <Card padding="sm" className="overflow-hidden">
          <img src={assetUrl('hotel_image.png')} alt="Resort" className="w-full h-44 object-cover rounded-2xl" />
        </Card>
      </div>

      <Card className="mb-6">
        <h2 className="font-display text-2xl font-semibold text-ink-900 mb-4">Event Itinerary</h2>
        <details className="mb-4 group" open>
          <summary className="cursor-pointer font-semibold text-brand-600 py-2 flex items-center gap-2 list-none">
            <span className="transition-transform group-open:rotate-90">▶</span> Day 1 — 6th December 2025
          </summary>
          <div className="mt-3"><ItineraryTable rows={day1Itinerary} /></div>
        </details>
        <details className="group">
          <summary className="cursor-pointer font-semibold text-brand-600 py-2 flex items-center gap-2 list-none">
            <span className="transition-transform group-open:rotate-90">▶</span> Day 2 — 7th December 2025
          </summary>
          <div className="mt-3"><ItineraryTable rows={day2Itinerary} /></div>
        </details>
      </Card>

      <div className="grid md:grid-cols-2 gap-5">
        <Card>
          <h3 className="font-display text-xl font-semibold text-ink-900 mb-3">Event Coordinators</h3>
          <ul className="text-sm text-ink-500 space-y-1.5">
            {coordinators.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <p className="text-sm text-brand-600 font-semibold mt-3">valumniassociation@gmail.com</p>
        </Card>
        <Card>
          <h3 className="font-display text-xl font-semibold text-ink-900 mb-3">Event Advisors</h3>
          <p className="text-sm text-ink-500 mb-2">Kritika Mahendra — Senior Operations Manager</p>
          <p className="text-sm text-ink-500 mb-4">Preeti Bhatia — CEO, Vahani Scholarship Trust</p>
          <h3 className="font-display text-xl font-semibold text-ink-900 mb-2">Special Thanks</h3>
          <p className="text-sm text-ink-500">Reeva Misra — Founder & Chairperson, VST</p>
        </Card>
      </div>

      <p className="mt-8 text-center text-brand-600 font-semibold text-lg">
        We can't wait to see you at the Alumni Meet 2025!
      </p>
    </div>
  )
}
