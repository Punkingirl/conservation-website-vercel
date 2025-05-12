"use client"

import { useState } from "react"
import Image from "next/image"
import { urlFor } from "@/lib/sanity"

export function CategoryFilter({ images }) {
  const [activeCategory, setActiveCategory] = useState("all")

  // Ensure images is an array before filtering
  const safeImages = Array.isArray(images) ? images : []

  const filteredImages =
    activeCategory === "all" ? safeImages : safeImages.filter((img) => img.category === activeCategory)

  const categories = [
    { id: "all", label: "All" },
    { id: "wildlife", label: "Wildlife" },
    { id: "landscape", label: "Landscape" },
    { id: "volunteers", label: "Volunteers" },
    { id: "events", label: "Events" },
  ]

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

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mb-12">
        {filteredImages.length > 0 ? (
          filteredImages.map((item) => (
            <div key={item._id} className="flex flex-col">
              <div className="relative aspect-video mb-2 overflow-hidden rounded-md">
                <Image
                  src={urlFor(item.image).width(600).height(400).url() || "/placeholder.svg?height=400&width=600"}
                  alt={item.alt || "Gallery image"}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-center text-sm">{item.caption}</p>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-8">
            <p className="text-gray-500">No images found in this category.</p>
          </div>
        )}
      </div>
    </>
  )
}
