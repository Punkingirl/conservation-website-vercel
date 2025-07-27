import Link from "next/link"
import Image from "next/image"
import { MapPin, ExternalLink, BarChart3, ChevronRight } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <SiteHeader currentPath="/" />

      {/* Hero Section with Beach Background */}
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/millars-beach-peninsula.jpeg"
            alt="Millars Beach Peninsula"
            fill
            className="object-cover"
            priority
          />
          {/* Semi-transparent overlay for better text visibility */}
          <div className="absolute inset-0 bg-dark-green bg-opacity-40"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg font-montserrat">
            Millars Beach Restoration Project
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto drop-shadow-md font-open-sans leading-tight">
            Restoring the Millars Beach & connecting peninsula through pest reduction in Whaka o Te Wera (Paterson
            Inlet), Rakiura (Stewart Island)
          </p>
          <p className="text-lg text-white mb-8 italic max-w-3xl mx-auto drop-shadow-md font-open-sans">
            A project led by the Lord Family Trust and partnering with neighbouring landowners
          </p>
          <Link
            href="/support-us"
            className="bg-sea-green hover:bg-spring-green text-white px-8 py-4 rounded-md uppercase font-medium tracking-wider inline-block transition-colors shadow-lg font-montserrat"
          >
            Support Our Work
          </Link>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-dark-green mb-6 font-montserrat">Our Vision</h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6 font-open-sans">
              We are a family with a vision - to restore our part of Rakiura to thrive the way it was intended - prior to our introduced pests invading.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6 font-open-sans">
              We are also part of a larger vision - to see Rakiura pest free and thriving through Predator Free Rakiura 2050.
            </p>
            <p className="text-lg text-charcoal leading-relaxed italic font-open-sans">
              Project Purpose:  "rejuvenate indigenous flora and fauna on the Peninsula through the heavy suppression of rats, possums, feral cats, and deer, along with eradication of introduced weeds"
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="text-sea-green hover:text-spring-green font-medium inline-flex items-center"
              >
                Read Our Story <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Information Cards Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Increased gap between cards from gap-8 to gap-16 */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Location Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-dark-green mb-2 font-montserrat flex items-center">
                  <MapPin className="w-5 h-5 mr-2" /> Our Location
                </h3>
              </div>

              {/* Professional Map Background */}
              <div className="relative h-[400px] overflow-hidden">
                {/* Map background image */}
                <div className="absolute inset-0">
                  <Image
                    src="/southIslandMap.png"
                    alt="Overview Map of Location in Rakiura (Stewart Island)"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Clickable Location marker - positioned near the red dot, not covering it */}
                <div className="absolute top-[85%] left-[46%]">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=-46.91503,168.04990"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block cursor-pointer"
                    aria-label="View Millars Beach on Google Maps"
                  >
                    <div className="bg-white px-5 py-3 rounded-md shadow-lg whitespace-nowrap group-hover:bg-sea-green group-hover:text-white transition-colors flex items-center">
                      <span className="font-medium text-dark-green group-hover:text-white font-montserrat">View Interactive Map</span>
                      <ExternalLink className="ml-1 h-4 w-4 text-gray-500 group-hover:text-white" />
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <p className="text-gray-600 mb-4">
                    A 100Ha native bush peninsula within Paterson Inlet, Rakiura (Stewart Island) of Aotearoa New
                    Zealand.
                  </p>
                  <p className="text-gray-600">
                    The area being managed also includes the historic Norwegian Whalers Base, who's owner we are
                    partnering with to include their land in the project.
                  </p>
                </div>
              </div>
            </div>

            {/* Conservation Data Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-dark-green mb-2 font-montserrat flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" /> Our Success
                </h3>
              </div>

              {/* Updated Trap.nz Section with Professional Background - Fixed layout to prevent overlap */}
              <div className="relative h-[300px] overflow-hidden">
                {/* Professional trap.nz background */}
                <div className="absolute inset-0 bg-[#b71c1c]">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full grid grid-cols-12 gap-4 px-6">
                      {/* Text content - takes 7 columns on medium screens and up */}
                      <div className="col-span-12 md:col-span-7 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-4">
                          <div className="flex items-center">
                            <Image src="/logo.png" alt="Millars Beach Conservation Trust Logo" width={30} height={30} className="mr-2" />
                            <h3 className="text-3xl font-bold text-white font-montserrat">
                              <span className="text-white">Trap</span>
                              <span className="text-red-200">.</span>
                              <span className="text-white">Nz</span>
                            </h3>
                          </div>
                        </div>

                        <p className="text-white mb-6 max-w-xs mx-auto md:mx-0">
                          We use Trap.NZ - New Zealand's predator control tracking system - to monitor and record our conservation efforts in real-time.
                        </p>

                        <a
                          href="https://www.trap.nz/project/20127930/info"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-[#b71c1c] px-3 py-3 rounded-md shadow-lg transition-colors inline-flex items-center justify-start font-medium font-montserrat hover:bg-sea-green hover:text-white group"
                        >
                          <BarChart3 className="mr-1 h-5 w-5 group-hover:text-white" />
                          See Our Progress
                        </a>
                      </div>

                      {/* Mobile app screenshot - takes 5 columns on medium screens and up, hidden on small screens */}
                      <div className="hidden md:block md:col-span-5">
                        <div className="relative w-[140px] h-[280px] mx-auto">
                          <Image
                            src="/trap-nz-mobile-app-map.png"
                            alt="trap.nz mobile app"
                            width={140}
                            height={280}
                            className="rounded-xl shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-charcoal mb-2 font-montserrat">Project Progress</h4>
                  <p className="text-gray-600">
                    Early October 2023 we initiated Phase 1 of 3 on the eastern-most third of the peninsula -
                    monitoring, trapping and baiting. This includes a core defense-line of Automatic Traps that continue
                    to operate. We are currently expanding into Phase 2 over the next western 1/3 of the peninsula.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife Highlight Section - Replaces the kiwi video with a more general section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dark-green mb-6 font-montserrat">Wildlife at Millars Beach</h2>
            <p className="text-lg text-charcoal leading-relaxed mb-8 font-open-sans">
              Our conservation efforts are helping protect and restore native wildlife on the peninsula, including kiwi,
              tui, bellbirds, and many other species. Visit our About page to learn more and see footage of the wildlife
              we're working to protect.
            </p>
            <Link
              href="/gallery"
              className="bg-sea-green hover:bg-spring-green text-white px-6 py-3 rounded-md font-medium transition-colors inline-block"
            >
              See Our Wildlife
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-dark-green text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">Join Our Conservation Efforts</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-open-sans">
            Whether through donations, volunteering, or spreading awareness, your support makes a meaningful difference
            in preserving this pristine ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link
              href="/donate"
              className="bg-sea-green hover:bg-spring-green text-white px-6 py-3 rounded-md font-medium transition-colors inline-block w-40 text-center"
            >
              Donate
            </Link>
            <Link
              href="/contact"
              className="bg-sea-green hover:bg-spring-green text-white px-6 py-3 rounded-md font-medium transition-colors inline-block w-40 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
