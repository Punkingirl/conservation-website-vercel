import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div>
      {/* Navigation */}
      <SiteHeader currentPath="/about" />

      <main className="max-w-6xl mx-auto bg-white">
        {/* Page Title */}
        <div className="text-center my-12">
          <h1 className="text-4xl font-bold tracking-wider font-montserrat">About Us</h1>
        </div>

        {/* Our Story Section */}
        <div className="px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-green mb-6 font-montserrat">Our Story</h2>
            <div className="prose max-w-none">
              <p>
                The vision started with Lindsay and Joy Lord purchasing the 100Ha peninsula in the early 1970's. They
                have now passed on their love of this wild and beautiful place to their children and grandchildren.
              </p>
              <p>
                The Lord Family Trust is now seeking to restore it to be place where native birdlife, flora and fauna
                thrive for their great-grandchildren and visitors to experience; birds like our resident Kiwi population
                and our Tui, Korora, Kaka and Kakariki.
              </p>
              <p>
                Early October 2023 we initiated Phase 1 of 3 on the eastern-most third of the peninsula - monitoring,
                trapping and baiting. This includes a core defense-line of Automatic Traps that continue to operate. We
                are currently expanding into Phase 2 over the next western 1/3 of the peninsula.
              </p>
            </div>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="bg-gray-50 py-16 px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-green mb-6 font-montserrat">Our Vision</h2>
            <div className="prose max-w-none">
              <p>
                We are a family with a vision - to restore our part of Rakiura to thrive the way it was intended - prior
                to our introduced pests invading.
              </p>
              <p>
                We are also part of a larger vision - to see Rakiura pest free and thriving through Predator Free
                Rakiura 2050.
              </p>
              <blockquote className="border-l-4 border-sea-green pl-4 italic">
                <p className="text-xl">
                  "Rejuvenate indigenous flora and fauna on the Peninsula through the heavy suppression of rats,
                  possums, feral cats, and deer, along with eradication of introduced weeds"
                </p>
                <cite>— Project Purpose</cite>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Our Location Section */}
        <div className="px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-green mb-6 font-montserrat">Our Location</h2>
            <div className="prose max-w-none mb-8">
              <p>
                A 100Ha native bush peninsula within Paterson Inlet, Rakiura (Stewart Island) of Aotearoa New Zealand.
              </p>
              <p>
                The area being managed also includes the historic Norwegian Whalers Base, who's owner we are partnering
                with to include their land in the project.
              </p>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
              <Image
                src="/images/overview-map-rakiura.jpeg"
                alt="Overview Map of Location in Rakiura (Stewart Island)"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 p-2 rounded-md text-sm">
                Overview Map of Location in Rakiura (Stewart Island)
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/location"
                className="inline-flex items-center text-sea-green hover:text-spring-green font-medium"
              >
                View detailed location information
              </Link>
            </div>
          </div>
        </div>

        {/* Our Success Section */}
        <div className="bg-gray-50 py-16 px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-green mb-6 font-montserrat">Our Success</h2>
            <div className="prose max-w-none mb-8">
              <p>
                Our project success is measured by both the increase in birdlife and other flora/fauna and the reduction
                of their predators.
              </p>
              <p>Review our latest predator reduction stats and get a sense of our location here:</p>
            </div>

            <div className="text-center mb-12">
              <a
                href="https://www.trap.nz/project/20127930/info"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#b71c1c] text-white px-6 py-3 rounded-md inline-flex items-center font-medium hover:bg-[#a00000] transition-colors"
              >
                View Our Progress on Trap.NZ
              </a>
            </div>

            <div className="text-center" id="kiwi-footage">
              <h3 className="text-xl font-bold text-dark-green mb-4 font-montserrat">Kiwi at Millars Beach</h3>
              <div className="max-w-2xl mx-auto bg-black rounded-lg overflow-hidden shadow-lg">
                <video
                  src="/videos/kiwi-footage.mp4"
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-full h-auto"
                  poster="/placeholder.svg?key=uwt1n"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="mt-4 text-gray-600 italic">Rare footage of a kiwi at Millars Beach Peninsula</p>
            </div>
          </div>
        </div>

        {/* Our Supporters Section - Redesigned with text-based logos */}
        <div className="px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-green mb-8 font-montserrat text-center">Our Supporters</h2>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
              <div className="bg-dark-green p-6 text-white">
                <p className="text-lg font-montserrat text-center">
                  We deeply appreciate the mahi (volunteer & paid work), advice and financial support in restoring this
                  area.
                </p>
                <p className="text-center italic mt-2">Ngā mihi nui ki a koe - thank you, thank you, thankyou!</p>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-dark-green mb-6 font-montserrat border-b pb-2">
                  Funding Partners
                </h3>

                <div className="space-y-8">
                  {/* Jobs for Nature */}
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div>
                      <h4 className="text-lg font-bold text-dark-green font-montserrat">
                        Jobs for Nature and Environment Southland
                      </h4>
                      <p className="text-gray-700 mt-2">
                        The initial funding partnership that got the project started. Their support has been
                        instrumental in establishing the foundation of our conservation efforts.
                      </p>
                    </div>
                  </div>

                  {/* Pacific Development and Conservation Trust */}
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div>
                      <h4 className="text-lg font-bold text-dark-green font-montserrat">
                        Pacific Development and Conservation Trust
                      </h4>
                      <p className="text-gray-700 mt-2">
                        Supporting our conservation efforts through their commitment to environmental sustainability and
                        biodiversity preservation in the Pacific region.
                      </p>
                    </div>
                  </div>

                  {/* Murihiku Rūnaka */}
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div>
                      <h4 className="text-lg font-bold text-dark-green font-montserrat">
                        Murihiku Rūnaka and Rio Tinto / NZAS
                      </h4>
                      <p className="text-gray-700 mt-2">
                        Community Development Fund support that has enabled us to expand our conservation initiatives
                        and engage with the wider community.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Volunteers Section */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-dark-green mb-6 font-montserrat border-b pb-2">
                    Volunteer Support
                  </h3>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-dark-green font-montserrat mb-3">Family and Friends</h4>
                    <p className="text-gray-700">
                      Our family and friends who have volunteered countless hours - cutting tracks, making bait
                      stations, setting up the monitoring network, checking and rebaiting traps and so much more!
                    </p>
                    <p className="text-gray-700 mt-3">
                      Their dedication and hard work have been essential to the progress we've made in restoring the
                      natural ecosystem of Millars Beach Peninsula.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                      <Link
                        href="/support-us"
                        className="bg-sea-green hover:bg-spring-green text-white px-5 py-2 rounded-md font-medium transition-colors inline-block"
                      >
                        Become a Volunteer
                      </Link>
                      <Link
                        href="/donate"
                        className="bg-dark-green hover:opacity-90 text-white px-5 py-2 rounded-md font-medium transition-colors inline-block"
                      >
                        Support Our Work
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
