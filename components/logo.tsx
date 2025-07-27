import Link from "next/link"

interface LogoProps {
  className?: string
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`block ${className}`}>
      <div className="relative h-44 w-auto">
        <img
          src="https://via.placeholder.com/180x180/4CAF50/FFFFFF?text=Logo"
          alt="Millars Beach Conservation Trust Logo"
          className="h-full w-auto object-contain"
        />
      </div>
    </Link>
  )
}
