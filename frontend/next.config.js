const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { i18n } = require('./next-i18next.config');

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

  // Ensure Next provides locale to pages and middleware
  i18n,
};

module.exports = withBundleAnalyzer(nextConfig);
