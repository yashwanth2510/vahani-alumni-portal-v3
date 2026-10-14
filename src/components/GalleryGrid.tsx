import { assetUrl } from '../api/client'

interface Props {
  images: { src: string; caption: string }[]
}

export default function GalleryGrid({ images }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {images.map((img) => (
        <figure
          key={img.src}
          className="card card-hover overflow-hidden group flex h-full flex-col"
        >
          <div className="relative aspect-[4/3] shrink-0 overflow-hidden">
            <img
              src={assetUrl(img.src)}
              alt={img.caption}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-clay-900/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <figcaption className="flex min-h-[4rem] flex-1 items-center justify-center p-4 text-center text-sm leading-snug text-ink-500 transition-colors group-hover:text-ink-800">
            {img.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
