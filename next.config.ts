import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  /* Configurações para deploy no github pages*/
  /* descomente quando for dar deploy */
  //output: 'export',
  //basePath : '/agroecology-ecommerce-ui',

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
