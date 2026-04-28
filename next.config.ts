import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
    // Konfigurasi yang lebih tepat untuk mengizinkan query string pada gambar lokal
    localPatterns: [
      {
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
