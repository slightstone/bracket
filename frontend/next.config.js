const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // SSR build for Render Web Service
  output: 'standalone',

  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable Next.js image optimization to avoid optional sharp install issues on some environments
  images: {
    unoptimized: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
