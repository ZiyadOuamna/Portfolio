import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages project repo (ziyadouamna.github.io/Portfolio)
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio',
};

export default nextConfig;
