import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`block ${className}`}>
      <div className="relative h-28 w-auto">
        <Image
          src="/images/logo.png"
          alt="Millars Beach Conservation Trust Logo"
          width={140}
          height={140}
          className="h-full w-auto object-contain"
          priority
        />
      </div>
    </Link>
  )
}
