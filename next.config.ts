import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //output: 'export',
  basePath : 'https://licuru.github.io/agroecology-ecommerce-ui',

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'licuru.github.io',
        port: '',
        pathname: '/agroecology-ecommerce-ui/**',
        search: '',
      },
    ],
  },
};

module.exports = nextConfig

export default nextConfig;
