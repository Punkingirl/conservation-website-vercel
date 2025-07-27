/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    staticPageGenerationTimeout: 120,
  },
  assetPrefix: '',
  basePath: '',
}

export default nextConfig
