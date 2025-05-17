import Link from "next/link"
import MobileNav from "./mobile-nav"
import Logo from "./logo"

interface SiteHeaderProps {
  currentPath?: string
}

export default function SiteHeader({ currentPath = "" }: SiteHeaderProps) {
  return (
    <nav className="flex items-center justify-between p-8 bg-white border-b border-cambridge-blue">
      <Logo />
      <div className="hidden md:flex items-center space-x-6">
        <Link
          href="/"
          className={`hover:text-sea-green ${currentPath === "/" ? "font-medium text-dark-green" : "text-charcoal"}`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`hover:text-sea-green ${currentPath === "/about" ? "font-medium text-dark-green" : "text-charcoal"}`}
        >
          About
        </Link>
        <Link
          href="/support-us"
          className={`hover:text-sea-green ${currentPath === "/support-us" ? "font-medium text-dark-green" : "text-charcoal"}`}
        >
          Support us
        </Link>
        <Link
          href="/gallery"
          className={`hover:text-sea-green ${currentPath === "/gallery" ? "font-medium text-dark-green" : "text-charcoal"}`}
        >
          Gallery
        </Link>
        <Link
          href="/blog"
          className={`hover:text-sea-green ${currentPath === "/blog" ? "font-medium text-dark-green" : "text-charcoal"}`}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={`hover:text-sea-green ${currentPath === "/contact" ? "font-medium text-dark-green" : "text-charcoal"}`}
        >
          Contact
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/admin/login" className="bg-dark-green text-white px-4 py-2 rounded hidden md:block hover:bg-spring-green transition-colors">
          Login
        </Link>
        <MobileNav currentPath={currentPath} />
      </div>
    </nav>
  )
}
