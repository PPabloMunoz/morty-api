/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['rickandmortyapi.com'],
    dangerouslyAllowSVG: true
  }
}

module.exports = nextConfig
