import { assetUrl } from '../api/client'

interface Props {
  images: { src: string; caption: string }[]
}

export default function GalleryGrid({ images }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {images.map((img, i) => (
        <figure
          key={img.src}
          className={`reveal relative overflow-hidden rounded-[1.75rem] border border-line bg-ink-900 shadow-sm hover-lift ${
            i % 5 === 0 ? 'sm:col-span-2' : ''
          }`}
          style={{ transitionDelay: `${Math.min(i, 6) * 60}ms` }}
        >
          <div className={`relative w-full ${i % 5 === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
            <img
              src={assetUrl(img.src)}
              alt={img.caption}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-105 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/15 to-transparent"
            aria-hidden="true"
          />
          <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold leading-snug text-white">
            {img.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
