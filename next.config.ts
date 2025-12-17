import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Ensure folder-based routes like /projects/index.html
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages project repo deployment
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio',
};

export default nextConfig;
