"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

interface LocalMedia {
  id: string
  type: "image" | "video"
  src: string
  alt: string
  caption: string
  category: string
  thumbnail?: string
}

interface StaticGalleryProps {
  images?: LocalMedia[]
}

export default function StaticGallery({ images = [] }: StaticGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const filteredImages = activeCategory === "all" ? images : images.filter((img) => img.category === activeCategory)

  const categories = [
    { id: "all", label: "All" },
    { id: "wildlife", label: "Wildlife" },
    { id: "landscape", label: "Landscape" },
    { id: "volunteers", label: "Volunteers" },
    { id: "events", label: "Events" },
  ]

  const handleVideoClick = (id: string) => {
    setActiveVideo(id === activeVideo ? null : id)
  }

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 px-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm ${
              activeCategory === category.id ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Image/Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mb-12">
        {filteredImages.length > 0 ? (
          filteredImages.map((item) => (
            <div key={item.id} className="flex flex-col">
              <div className="relative aspect-video mb-2 overflow-hidden rounded-md">
                {item.type === "image" ? (
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    {activeVideo === item.id ? (
                      <video
                        src={item.src}
                        controls
                        autoPlay
                        className="absolute inset-0 w-full h-full object-cover"
                        onEnded={() => setActiveVideo(null)}
                      />
                    ) : (
                      <div className="relative w-full h-full cursor-pointer" onClick={() => handleVideoClick(item.id)}>
                        <Image
                          src={item.thumbnail || "/placeholder.svg?height=400&width=600&query=video+thumbnail"}
                          alt={`${item.alt} (video thumbnail)`}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                          <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                            <Play className="w-8 h-8 text-black ml-1" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <p className="text-center text-sm">{item.caption}</p>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-8">
            <p className="text-gray-500">No media found in this category.</p>
          </div>
        )}
      </div>
    </>
  )
}
