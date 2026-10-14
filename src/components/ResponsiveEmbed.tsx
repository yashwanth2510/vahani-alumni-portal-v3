interface Props {
  src: string
  title: string
  minHeight?: number
}

/** Responsive iframe wrapper — prevents horizontal overflow on small screens */
export default function ResponsiveEmbed({ src, title, minHeight = 400 }: Props) {
  const height = `clamp(260px, 55vh, ${minHeight}px)`

  return (
    <div className="responsive-embed w-full rounded-2xl overflow-hidden border border-line">
      <iframe
        src={src}
        title={title}
        className="w-full border-0 block"
        style={{ height }}
        allow="camera;microphone;geolocation;display-capture;clipboard-write"
        loading="lazy"
      />
    </div>
  )
}
