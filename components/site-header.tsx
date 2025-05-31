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
          className={`${currentPath === "/" ? "font-bold text-spring-green underline underline-offset-4" : "text-charcoal hover:text-sea-green"}`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${currentPath === "/about" ? "font-bold text-spring-green underline underline-offset-4" : "text-charcoal hover:text-sea-green"}`}
        >
          About
        </Link>
        <Link
          href="/support-us"
          className={`${currentPath === "/support-us" ? "font-bold text-spring-green underline underline-offset-4" : "text-charcoal hover:text-sea-green"}`}
        >
          Support us
        </Link>
        <Link
          href="/gallery"
          className={`${currentPath === "/gallery" ? "font-bold text-spring-green underline underline-offset-4" : "text-charcoal hover:text-sea-green"}`}
        >
          Gallery
        </Link>
        <Link
          href="/blog"
          className={`${currentPath === "/blog" ? "font-bold text-spring-green underline underline-offset-4" : "text-charcoal hover:text-sea-green"}`}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={`${currentPath === "/contact" ? "font-bold text-spring-green underline underline-offset-4" : "text-charcoal hover:text-sea-green"}`}
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
