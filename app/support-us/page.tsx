"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Clock, DollarSign, Users, Axe, MapPin } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function SupportUsPage() {
  const [email, setEmail] = useState("")

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    alert(`Thank you for subscribing with: ${email}`)
    setEmail("")
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <SiteHeader currentPath="/support-us" />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/paterson-inlet-sunrise.jpeg"
            alt="Paterson Inlet Sunrise"
            fill
            className="object-cover"
            priority
          />
          {/* Semi-transparent overlay for better text visibility */}
          <div className="absolute inset-0 bg-dark-green bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg font-montserrat">
            Support Our Conservation Efforts
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md font-open-sans">
            Join us in protecting and restoring the natural beauty of Millars Beach Peninsula
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-green mb-6 font-montserrat">How You Can Help</h2>
            <p className="text-lg text-charcoal leading-relaxed">
              Your support is vital to our conservation efforts. Whether through financial contributions, volunteering
              your time, or sharing your expertise, every bit helps us restore and protect this precious ecosystem for
              future generations.
            </p>
          </div>

          {/* Support Options */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Financial Support Column */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="bg-dark-green p-6 text-white">
                <h3 className="text-2xl font-bold font-montserrat flex items-center">
                  <DollarSign className="mr-2 h-6 w-6" /> Financial Support
                </h3>
                <p className="mt-2 text-gray-100">
                  Your financial contribution directly supports our conservation work on the peninsula
                </p>
              </div>

              <div className="p-8">
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-dark-green mb-4 font-montserrat">Donate Online</h4>
                  <p className="mb-6 text-charcoal">
                    Make a secure online donation to support our ongoing conservation efforts.
                  </p>
                  <Link
                    href="/donate"
                    className="bg-sea-green hover:bg-spring-green text-white px-6 py-3 rounded-md font-medium transition-colors inline-block"
                  >
                    Donate Now
                  </Link>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-dark-green mb-4 font-montserrat">Direct Bank Transfer</h4>
                  <p className="mb-4 text-charcoal">Contribute financially directly to our restoration project:</p>
                  <div className="bg-white p-6 rounded-md border border-gray-200 mb-4">
                    <p className="mb-2">
                      <strong className="font-montserrat">Name:</strong> Millars Restoration
                    </p>
                    <p className="mb-2">
                      <strong className="font-montserrat">Account No:</strong> 02 0924 02012 40 001
                    </p>
                    <p>
                      <strong className="font-montserrat">Bank:</strong> BNZ
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    Please include your name as a reference so we can acknowledge your contribution.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-dark-green mb-4 font-montserrat">Give a Trap</h4>
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1">
                      <p className="mb-4 text-charcoal">
                        Contribute towards traps or trap supplies easily via the Give a Trap Site. We're listed under
                        the Southland Region - Millars Beach Restoration Project.
                      </p>
                      <a
                        href="https://giveatrap.co.nz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sea-green hover:text-spring-green font-medium inline-flex items-center"
                      >
                        Visit Give a Trap Website
                      </a>
                    </div>
                    <a
                      href="https://giveatrap.co.nz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0"
                    >
                      <Image
                        src="/images/giveATrapLogo.png"
                        alt="Give a Trap Logo"
                        width={120}
                        height={120}
                        className="mx-auto mb-4"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Volunteer & Expertise Column */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="bg-sea-green p-6 text-white">
                <h3 className="text-2xl font-bold font-montserrat flex items-center">
                  <Users className="mr-2 h-6 w-6" /> Volunteer & Expertise
                </h3>
                <p className="mt-2 text-gray-100">
                  Share your time, skills, and knowledge to help our conservation project thrive
                </p>
              </div>

              <div className="p-8">
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-dark-green mb-4 font-montserrat flex items-center">
                    <Clock className="mr-2 h-5 w-5" /> Contribute Your Time
                  </h4>
                  <p className="mb-4 text-charcoal">
                    We welcome volunteers to help with various aspects of our conservation work, including:
                  </p>
                  <ul className="list-disc pl-5 mb-4 space-y-2 text-charcoal">
                    <li>Track cutting and maintenance</li>
                    <li>Setting up and checking traps</li>
                    <li>Wildlife monitoring</li>
                    <li>Native planting</li>
                    <li>Beach clean-ups</li>
                  </ul>
                  <p className="text-charcoal">
                    Volunteering is a rewarding way to connect with nature and make a tangible difference to our
                    conservation efforts.
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-dark-green mb-4 font-montserrat flex items-center">
                    <Axe className="mr-2 h-5 w-5" /> Hunting Enquiries
                  </h4>
                  <p className="mb-4 text-charcoal">
                    Controlled hunting helps us manage invasive species like deer that damage the native forest
                    ecosystem. If you're an experienced hunter interested in supporting our conservation goals, please
                    get in touch.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-dark-green mb-4 font-montserrat flex items-center">
                    <MapPin className="mr-2 h-5 w-5" /> Professional Expertise
                  </h4>
                  <p className="mb-4 text-charcoal">
                    Do you have expertise in conservation, ecology, pest management, or other relevant fields? We value
                    professional knowledge and would appreciate your input to enhance our restoration efforts.
                  </p>
                  <div className="bg-white p-6 rounded-md border border-gray-200">
                    <h5 className="font-bold text-dark-green mb-3 font-montserrat">Contact Us</h5>
                    <p className="mb-4 text-charcoal">
                      For volunteering, hunting permissions, or to offer your expertise:
                    </p>
                    <a
                      href="mailto:millarsbeach@gmail.com"
                      className="flex items-center text-sea-green hover:text-spring-green font-medium"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      millarsbeach@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup - Updated to full width */}
          <div className="w-full bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-dark-green mb-4 text-center font-montserrat">Stay Updated</h3>
            <p className="text-center mb-6 text-charcoal">
              Subscribe to our newsletter to receive updates on our conservation progress, upcoming volunteer
              opportunities, and ways to get involved.
            </p>

            <form onSubmit={handleSubscribe} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:ring-sea-green focus:border-sea-green"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <button
                  type="submit"
                  className="bg-dark-green hover:bg-spring-green text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">
                We respect your privacy and will never share your information with third parties.
              </p>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
