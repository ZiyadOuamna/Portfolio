import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Si votre repo s'appelle "Portfolio", décommentez ces lignes:
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
};

export default nextConfig;
