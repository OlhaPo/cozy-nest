import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'superb-birthday-c84a546d28.media.strapiapp.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
