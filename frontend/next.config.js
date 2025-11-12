const { i18n } = require('./next-i18next.config.js');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Enable static export for Render
  output: 'export',

  // ✅ Keep your existing settings
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Required for static images to work after export
  images: {
    unoptimized: true,
  },

  // ✅ Your existing i18n support
  i18n,
};

module.exports = withBundleAnalyzer(nextConfig);
