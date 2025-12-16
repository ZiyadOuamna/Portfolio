import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Active basePath uniquement si le repo n'est pas un user site GitHub Pages
  // Pour user site (ziyadouamna.github.io): basePath: ''
  // Pour project repo (Portfolio): basePath: '/Portfolio'
  basePath: isProd ? '' : '',
  assetPrefix: isProd ? '' : '',
};

export default nextConfig;
