import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  sassOptions: {
    implementation: 'sass',
  },
};

module.exports = nextConfig

export default nextConfig;
