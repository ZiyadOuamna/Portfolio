import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages project repo - only add basePath for production builds
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
};

export default nextConfig;
