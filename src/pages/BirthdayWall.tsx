import { assetUrl } from '../api/client'
import Card from '../components/Card'
import PageHeader from '../components/PageHeader'
import ResponsiveEmbed from '../components/ResponsiveEmbed'
import Icon from '../components/Icon'

export default function BirthdayWall() {
  return (
    <div className="w-full max-w-full">
      <PageHeader
        title="Celebrating Your Journey, Preeti Ma'am"
        subtitle="A tribute filled with gratitude, memories, and warm wishes."
        badge="Special Tribute"
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
        <Card className="lg:col-span-2 border-rose-200">
          <img
            src={assetUrl('photos/Preeti_maam.jpeg')}
            alt="Preeti Ma'am"
            className="w-full max-h-[400px] object-cover rounded-2xl mb-4 border border-rose-200"
          />
          <p className="text-center text-rose-600 font-display text-xl font-semibold">Preeti Ma'am</p>
          <h5 className="text-center text-ink-400 text-xs uppercase tracking-[0.18em] font-bold mt-5 mb-3">
            Dedicated Song
          </h5>
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-line">
            <iframe
              className="w-full h-full border-0"
              src="https://www.youtube.com/embed/Fvm-fIXredE"
              title="Birthday song"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </Card>

        <Card className="lg:col-span-3 bg-gradient-to-br from-rose-50 to-brand-50 border-rose-100">
          <Icon name="heart" size={30} className="text-rose-400 mb-4" />
          <div className="text-ink-700 text-base sm:text-lg leading-relaxed space-y-4 break-words">
            <p>
              Dear Preeti Ma'am,
              <br />
              Today we don't say goodbye,
              <br />
              We celebrate a journey that changed countless lives.
            </p>
            <p>
              You didn't just lead Vahani — you built a path for all of us to walk with confidence. Your vision will
              continue to guide us.
            </p>
            <p>
              Thank you for believing in us before we believed in ourselves. Wishing you new beginnings as inspiring
              as the journey you've given us!
            </p>
            <p className="font-semibold text-rose-600 pt-2">From — The Vahani Family</p>
          </div>
        </Card>
      </div>

      <Card>
        <h3 className="font-display text-2xl font-semibold text-ink-900 mb-4 text-center">Share Your Wishes</h3>
        <ResponsiveEmbed src="https://padlet.com/embed/wqnnd6x5sfrk2rhy" title="Birthday wishes padlet" minHeight={550} />
      </Card>
    </div>
  )
}
