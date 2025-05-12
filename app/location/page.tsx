"use client"
import Image from "next/image"
import Link from "next/link"
import { MapPin, ExternalLink } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

// Simple map component that doesn't use Google Maps API
// This is a fallback solution to avoid the error
const StaticMap = () => {
  return (
    <div className="relative w-full h-[500px] bg-gray-100 rounded-md overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <h3 className="text-lg font-medium mb-2">Millars Beach Restoration Project</h3>
        <p className="mb-4">Located at: 46.9470° S, 168.1250° E</p>
        <p className="text-sm text-gray-600 max-w-md">
          The interactive map is currently unavailable. Please refer to the static map image above for the project
          location.
        </p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=-46.947,168.125`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  )
}

export default function LocationPage() {
  return (
    <div>
      {/* Navigation */}
      <SiteHeader currentPath="/location" />

      <main className="max-w-6xl mx-auto bg-white">
        {/* Page Title */}
        <div className="text-center my-8">
          <h1 className="text-4xl font-bold tracking-wider">Project Location</h1>
        </div>

        {/* Location Information */}
        <div className="px-6 mb-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Millars Beach Restoration Project</h2>
              <p className="mb-4">
                The Millars Beach Restoration Project is located on a 100-hectare native bush peninsula within Paterson
                Inlet on Rakiura (Stewart Island), New Zealand. This area is part of a broader conservation effort aimed
                at rejuvenating indigenous flora and fauna by suppressing invasive species such as rats, possums, feral
                cats, and deer.
              </p>

              <div className="bg-gray-100 p-4 rounded-md mb-4">
                <h3 className="font-bold flex items-center mb-2">
                  <MapPin className="mr-2 h-5 w-5" /> Location Details
                </h3>
                <p className="mb-2">
                  <strong>Project Area:</strong> Millars Beach Peninsula, Paterson Inlet, Rakiura (Stewart Island), New
                  Zealand
                </p>
                <p className="mb-2">
                  <strong>Coordinates:</strong> 46.9470° S, 168.1250° E
                </p>
                <p>
                  These coordinates place the project within the southeastern region of Stewart Island, near the
                  historic Norwegian Whalers Base, which is also included in the restoration efforts.
                </p>
              </div>

              <div className="mb-4">
                <Link
                  href="https://millarsbeach.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  Visit the official website <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div>
              <div className="mb-4 rounded-md overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zf22mdNq5If3NKStDY5V6tuZZRHJ4M.png"
                  alt="Overview Map of Location in Rakiura (Stewart Island)"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-600 italic text-center">
                Overview Map of Location in Rakiura (Stewart Island)
              </p>
            </div>
          </div>

          {/* Static Map Instead of Google Maps */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Interactive Map</h2>
            <StaticMap />
            <p className="text-sm text-gray-600 mt-2">
              * Click "View on Google Maps" to see the location on Google Maps in a new tab.
            </p>
          </div>

          {/* Additional Information */}
          <div className="bg-gray-50 p-6 rounded-md mb-8">
            <h2 className="text-2xl font-bold mb-4">Getting There</h2>
            <p className="mb-4">
              Stewart Island is accessible by ferry from Bluff (approximately 1 hour) or by small plane from
              Invercargill (approximately 20 minutes). Once on the island, Paterson Inlet can be reached by water taxi
              or guided tour from the main settlement of Oban.
            </p>
            <p>
              For specific directions or to arrange a visit to the project site, please contact the project coordinators
              through the official website.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
