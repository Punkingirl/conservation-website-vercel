"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

interface MobileNavProps {
  currentPath?: string
}

const MobileNav = ({ currentPath = "" }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button onClick={toggleMenu} className="block md:hidden focus:outline-none" aria-label="Open menu">
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M4 5h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm0 6h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a1 1 0 011-1zm0 6h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white animate-in slide-in-from-right duration-300">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="p-2 focus:outline-none" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 p-6">
            <Link
              href="/"
              className={`text-lg hover:text-gray-600 ${currentPath === "/" ? "font-medium" : ""}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-lg hover:text-gray-600 ${currentPath === "/about" ? "font-medium" : ""}`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/support-us"
              className={`text-lg hover:text-gray-600 ${currentPath === "/support-us" ? "font-medium" : ""}`}
              onClick={toggleMenu}
            >
              Support us
            </Link>
            <Link
              href="/gallery"
              className={`text-lg hover:text-gray-600 ${currentPath === "/gallery" ? "font-medium" : ""}`}
              onClick={toggleMenu}
            >
              Gallery
            </Link>
            <Link
              href="/blog"
              className={`text-lg hover:text-gray-600 ${currentPath === "/blog" ? "font-medium" : ""}`}
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`text-lg hover:text-gray-600 ${currentPath === "/contact" ? "font-medium" : ""}`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <button className="bg-black text-white px-4 py-2 rounded mt-4">Login</button>
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileNav
