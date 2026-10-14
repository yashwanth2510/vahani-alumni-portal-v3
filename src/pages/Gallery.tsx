import GalleryGrid from '../components/GalleryGrid'
import PageHeader from '../components/PageHeader'
import { galleryImages } from '../data/content'

export default function Gallery() {
  return (
    <div>
      <PageHeader
        title="Gallery"
        subtitle="Snapshots from alumni meets, drama performances, and community moments."
        badge="Memories"
      />
      <GalleryGrid images={galleryImages} />
    </div>
  )
}
