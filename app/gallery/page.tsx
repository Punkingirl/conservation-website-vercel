import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import AudioPlayer from "@/components/audio-player"
import StaticGallery from "@/components/static-gallery"

// API configuration for Trap.NZ integration
const apiKey = process.env.TRAPNZ_API_KEY;
const nodeId = process.env.TRAPNZ_NODE_ID;

export default function GalleryPage() {
  // Media items with their metadata and categorization
  const localMedia = [
    {
      id: "local-1",
      type: "image" as const,
      src: "/images/greenhood-orchid.jpeg",
      alt: "Native Greenhood Orchid",
      caption: "Native Greenhood Orchid found in the conservation area",
      category: "wildlife",
    },
    {
      id: "local-2",
      type: "image" as const,
      src: "/images/paterson-inlet-sunrise.jpeg",
      alt: "Sunrise at Paterson Inlet",
      caption: "Beautiful sunrise view through native bush at Paterson Inlet",
      category: "landscape",
    },
    {
      id: "local-3",
      type: "image" as const,
      src: "/images/kiwi-footprints.jpeg",
      alt: "Kiwi footprints in the sand",
      caption: "Kiwi footprints found on the beach near the conservation area",
      category: "wildlife",
    },
    {
      id: "local-4",
      type: "video" as const,
      src: "/videos/VID_Kiwi01.mp4",
      thumbnail: "/images/Image of kiwi.jpg",
      alt: "VID_Kiwi01",
      caption: "Kiwi foraging, captured on camera in the conservation area",
      category: "wildlife",
    },
    {
      id: "local-5",
      type: "video" as const,
      src: "/videos/Drone_Point2Millars.mov",
      thumbnail: "/images/aerial-drone-view.jpeg",
      alt: "Aerial drone footage over Millars Point",
      caption: "Aerial drone footage over Millars Point, showcasing the stunning landscape and conservation area.",
      category: "landscape",
    },
    {
      id: "local-6",
      type: "video" as const,
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

      <main className="max-w-6xl mx-auto bg-white pb-8 pt-8">
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

        {/* Only show local images/videos */}
        <StaticGallery images={localMedia} />
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
