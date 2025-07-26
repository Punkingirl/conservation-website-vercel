/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Remove unoptimized - it's causing issues
    unoptimized: false,
    
    // Essential settings for Vercel
    formats: ['image/webp', 'image/avif'],
    quality: 75,
    minimumCacheTTL: 60,
  },
}

module.exports = nextConfig