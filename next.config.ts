import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages project repo deployment
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio',
  trailingSlash: true,
};

export default nextConfig;
