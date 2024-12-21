import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'giphy.com',
        port: '',
        pathname: '/embed/uWlpPGquhGZNFzY90z',
        search: '',
      },
    ],
  },

};

export default nextConfig;
