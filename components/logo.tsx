import Link from "next/link"

interface LogoProps {
  className?: string
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`block ${className}`}>
      <div className="relative h-10 w-auto">
        <svg width="200" height="50" viewBox="0 0 200 50" className="h-full w-auto">
          {/* Simple fern spiral */}
          <path d="M50 25C50 14 59 5 70 5C81 5 90 14 90 25C90 36 81 45 70 45C59 45 50 36 50 25Z" fill="#1D3C32" />
          <path
            d="M70 5C70 5 65 15 70 25C75 35 85 35 85 25C85 15 75 15 75 25C75 30 80 30 80 25"
            stroke="#8FBC94"
            strokeWidth="3"
            fill="none"
          />

          {/* Text */}
          <text x="95" y="20" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="14" fill="#1D3C32">
            MILLARS
          </text>
          <text x="95" y="35" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="14" fill="#1D3C32">
            BEACH
          </text>
        </svg>
      </div>
    </Link>
  )
}
