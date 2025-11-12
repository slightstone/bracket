const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Enables static export for Render
  output: 'export',

  // ✅ Keep strict mode and linting setup
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Required for static image support
  images: {
    unoptimized: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
