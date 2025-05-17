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
      src: "/videos/VID_Kiwi01.mp4",
      thumbnail: "/images/Image of kiwi.jpg",
      alt: "VID_Kiwi01",
      caption: "Kiwi foraging, captured on camera in the conservation area",
      category: "wildlife",
    },
    {
      id: "local-5",
      type: "video",
      src: "/videos/Drone_Point2Millars.mov",
      thumbnail: "/images/aerial-drone-view.jpeg",
      alt: "Aerial drone footage over Millars Point",
      caption: "Aerial drone footage over Millars Point, showcasing the stunning landscape and conservation area.",
      category: "landscape",
    },
    {
      id: "local-6",
      type: "video",
      src: "/videos/Stewart island Robin.mov",
      thumbnail: "/images/stewart-island-robin-hero.webp",
      alt: "Stewart Island Robin foraging",
      caption: "Charming Stewart Island Robin foraging in the undergrowth, a rare sight in the wild.",
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
            audioSrc="/audios/Tui_Bellbird_Kaka.mov"
            label="Listen to our Tui, Bellbird & Kaka Calls"
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
