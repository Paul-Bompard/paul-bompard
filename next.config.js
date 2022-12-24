/** @type {import("next").NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { i18n } = require('./next-i18next.config');
const { headers } = require('./next-headers.config');

const moduleExports = withBundleAnalyzer({
  publicRuntimeConfig: {
    // This config will be available and visible on both server and client side
  },
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  eslint: {
    dirs: ['.'],
  },
  headers,
  poweredByHeader: false,
  images: {
    domains: [],
  },
  i18n,
});

module.exports = moduleExports;
