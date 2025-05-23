import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, MapPin } from "lucide-react"
import Logo from "./logo"

export default function SiteFooter() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-dark-green mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-sea-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-sea-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-sea-green transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-sea-green transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-sea-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-montserrat font-bold text-dark-green mb-4">Support Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/donate" className="text-gray-600 hover:text-sea-green transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/support-us" className="text-gray-600 hover:text-sea-green transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/support-us" className="text-gray-600 hover:text-sea-green transition-colors">
                  Corporate Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-bold text-dark-green mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-sea-green mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">
                  Millars Beach Peninsula, Paterson Inlet, Rakiura (Stewart Island), New Zealand
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-sea-green mr-2 flex-shrink-0" />
                <a href="mailto:info@millarsbeach.org" className="text-gray-600 hover:text-sea-green transition-colors">
                  info@millarsbeach.org
                </a>
              </li>
            </ul>

            <div className="mt-4">
              <h4 className="font-montserrat font-medium text-dark-green mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-sea-green transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-sea-green transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-sea-green transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 text-center">
          <p className="text-sm text-gray-600">© 2023 Lord Family Trust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
