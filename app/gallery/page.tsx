import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import AudioPlayer from "@/components/audio-player"
import { getAllGalleryImages } from "@/lib/api"
import { CategoryFilter } from "@/components/category-filter"
import StaticGallery from "@/components/static-gallery"

export default async function GalleryPage() {
  // Fetch images server-side
  let images = []
  try {
    images = (await getAllGalleryImages()) || []
  } catch (error) {
    console.error("Error fetching gallery images:", error)
    // Continue with empty array if there's an error
  }

  // Local images and videos to display before CMS content is added
  const localMedia = [
    {
      id: "local-1",
      type: "image",
      src: "/images/greenhood-orchid.jpeg",
      alt: "Native Greenhood Orchid",
      caption: "Native Greenhood Orchid found in the conservation area",
      category: "wildlife",
    },
    {
      id: "local-2",
      type: "image",
      src: "/images/paterson-inlet-sunrise.jpeg",
      alt: "Sunrise at Paterson Inlet",
      caption: "Beautiful sunrise view through native bush at Paterson Inlet",
      category: "landscape",
    },
    {
      id: "local-3",
      type: "image",
      src: "/images/kiwi-footprints.jpeg",
      alt: "Kiwi footprints in the sand",
      caption: "Kiwi footprints found on the beach near the conservation area",
      category: "wildlife",
    },
    {
      id: "local-4",
      type: "video",
      src: "/videos/kiwi-video.mp4",
      thumbnail: "/images/kiwi-footprints.jpeg", // Using the footprints image as a thumbnail
      alt: "Kiwi in the wild",
      caption: "Rare footage of a kiwi foraging in its natural habitat",
      category: "wildlife",
    },
  ]

  return (
    <div>
      {/* Navigation */}
      <SiteHeader currentPath="/gallery" />

      <main className="max-w-6xl mx-auto bg-white">
        {/* Page Title */}
        <div className="text-center my-8">
          <h1 className="text-4xl font-bold uppercase tracking-wider">Gallery</h1>
        </div>

        {/* Audio Feature */}
        <div className="mb-8 px-6">
          <AudioPlayer
            audioSrc="https://assets.mixkit.co/sfx/preview/mixkit-forest-birds-ambience-1210.mp3"
            fallbackSrc="https://assets.mixkit.co/sfx/preview/mixkit-morning-birds-singing-in-the-forest-2457.mp3"
            label="Listen to our birdsong"
          />
        </div>

        {/* Display images from Sanity if available, otherwise show local images */}
        {images.length > 0 ? <CategoryFilter images={images} /> : <StaticGallery images={localMedia} />}
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
