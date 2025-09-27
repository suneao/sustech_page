// @ts-check
import withNextra from 'nextra';

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

const withNextraConfig = withNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  staticImage: true,
});

export default withNextraConfig(nextConfig);