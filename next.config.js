/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    distDir: 'build',
    experimental: {
      images: {
      unoptimized: true
    }
  }
  };
