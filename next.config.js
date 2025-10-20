// @ts-check
import nextra from 'nextra';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Disable static export for now to simplify the setup
  // output: 'export',
  images: {
    unoptimized: true
  },
  // Disable the static export behavior for development
  experimental: {},
};

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  defaultShowCopyCode: true,
  themeConfig: './theme.config.tsx'
});

export default withNextra(nextConfig);