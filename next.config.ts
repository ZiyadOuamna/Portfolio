import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Active uniquement en production pour GitHub Pages
  basePath: isProd ? '/Portfolio' : '',
  assetPrefix: isProd ? '/Portfolio/' : '',
};

export default nextConfig;
