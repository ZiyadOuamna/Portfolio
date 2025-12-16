import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages user site (ziyadouamna.github.io) - no basePath needed
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
