import GalleryGrid from '../components/GalleryGrid'
import PageHeader from '../components/PageHeader'
import Card from '../components/Card'
import Icon from '../components/Icon'
import { impact360Images } from '../data/content'

const journey = [
  '"Build for Yourself" workshop — April 2026',
  'AI Workshop at JNV South Goa — 135 students reached',
  'Joy of Giving Drives — blood donation, food distribution, and more',
]

export default function Impact360() {
  return (
    <div>
      <PageHeader
        title="Impact360 Initiative"
        subtitle="Empowering underserved communities through AI workshops, wellbeing activities, and Joy of Giving drives."
        badge="Social Impact"
      />

      <Card className="mb-5">
        <p className="text-ink-500 leading-relaxed mb-4">
          <strong className="text-ink-900">Impact360</strong> is an initiative by the{' '}
          <strong className="text-brand-600">Vahani Alumni Association</strong> to empower underserved students and
          families through AI-based learning workshops, wellbeing activities, climate awareness sessions, and Joy of
          Giving drives.
        </p>
        <p className="text-ink-500 leading-relaxed">
          The <strong className="text-ink-900">Vahani Alumni Association holds a valid 80G certification</strong>,
          enabling donors and CSR partners to support eligible initiatives under applicable provisions.
        </p>
      </Card>

      <Card className="mb-8 bg-accent-50/60 border-accent-200">
        <h3 className="font-display text-2xl font-semibold text-ink-900 mb-4">Our Journey So Far</h3>
        <ul className="space-y-3 text-sm text-ink-600">
          {journey.map((j) => (
            <li key={j} className="flex gap-3">
              <Icon name="check" size={18} className="text-accent-600 shrink-0 mt-0.5" />
              <span>{j}</span>
            </li>
          ))}
        </ul>
      </Card>

      <h3 className="font-display text-3xl font-semibold text-ink-900 mb-5">Impact Moments</h3>
      <GalleryGrid images={impact360Images} />
    </div>
  )
}
