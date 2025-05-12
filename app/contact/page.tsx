"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Mail, MapPin, Clock, Phone, ExternalLink } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null)
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(null)
    setErrorMessage("")

    try {
      // Using Formspree as a reliable alternative that doesn't require API keys
      const response = await fetch("https://formspree.io/f/xleqgkrw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New contact form submission: ${formData.subject}`,
          _replyto: formData.email,
        }),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || "Form submission failed")
      }
    } catch (error) {
      setSubmitSuccess(false)
      setErrorMessage(
        error instanceof Error ? error.message : "There was an error submitting your message. Please try again.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <SiteHeader currentPath="/contact" />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/millars-beach-peninsula.jpeg"
            alt="Millars Beach Peninsula"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Semi-transparent overlay for better text visibility */}
          <div className="absolute inset-0 bg-dark-green bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg font-montserrat">Contact Us</h1>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md font-open-sans">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-green mb-6 font-montserrat">Get In Touch</h2>
            <p className="text-lg text-charcoal leading-relaxed">
              Whether you have questions about our conservation efforts, want to volunteer, or are interested in
              supporting our work, we're here to help. Fill out the form below or use our contact details to reach us.
            </p>
          </div>

          {/* Contact Form and Information */}
          <div className="grid md:grid-cols-5 gap-16 mb-16">
            {/* Contact Form - 3 columns wide */}
            <div className="md:col-span-3 bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="bg-dark-green p-6 text-white">
                <h3 className="text-2xl font-bold font-montserrat">Send Us a Message</h3>
                <p className="mt-2 text-gray-100">We'll get back to you as soon as possible</p>
              </div>

              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-sea-green focus:border-sea-green"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-sea-green focus:border-sea-green"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-sea-green focus:border-sea-green"
                      required
                    >
                      <option value="">Please select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Volunteering">Volunteering</option>
                      <option value="Donation">Donation</option>
                      <option value="Hunting Permission">Hunting Permission</option>
                      <option value="Media Inquiry">Media Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-sea-green focus:border-sea-green resize-none"
                      required
                    ></textarea>
                  </div>

                  {errorMessage && <div className="text-red-500 text-sm p-3 bg-red-50 rounded-md">{errorMessage}</div>}

                  {submitSuccess === true && (
                    <div className="text-green-600 p-3 bg-green-50 rounded-md">
                      Thank you for your message! We will get back to you soon.
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 bg-sea-green text-white font-medium rounded-md hover:bg-spring-green transition-colors disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information - 2 columns wide */}
            <div className="md:col-span-2 space-y-8">
              {/* Contact Details Card */}
              <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <div className="bg-dark-green p-6 text-white">
                  <h3 className="text-xl font-bold font-montserrat">Contact Details</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-sea-green mt-1 flex-shrink-0" />
                    <div className="ml-3">
                      <h4 className="font-medium text-dark-green">Email</h4>
                      <a
                        href="mailto:millarsbeach@gmail.com"
                        className="text-gray-600 hover:text-sea-green transition-colors"
                      >
                        millarsbeach@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-sea-green mt-1 flex-shrink-0" />
                    <div className="ml-3">
                      <h4 className="font-medium text-dark-green">Phone</h4>
                      <p className="text-gray-600">+64 27 123 4567</p>
                      <p className="text-sm text-gray-500">Available Mon-Fri, 9am-5pm NZST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-sea-green mt-1 flex-shrink-0" />
                    <div className="ml-3">
                      <h4 className="font-medium text-dark-green">Location</h4>
                      <p className="text-gray-600">Millars Beach Peninsula</p>
                      <p className="text-gray-600">Paterson Inlet, Rakiura (Stewart Island)</p>
                      <p className="text-gray-600">New Zealand</p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=-46.91503,168.04990"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sea-green hover:text-spring-green text-sm mt-1 inline-flex items-center"
                      >
                        View on Google Maps <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-sea-green mt-1 flex-shrink-0" />
                    <div className="ml-3">
                      <h4 className="font-medium text-dark-green">Response Time</h4>
                      <p className="text-gray-600">We aim to respond to all inquiries within 2 business days.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <div className="bg-dark-green p-6 text-white">
                  <h3 className="text-xl font-bold font-montserrat">Follow Us</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Stay updated with our latest news and conservation efforts on social media.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
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
