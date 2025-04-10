/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: 'anonymous',
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
};

export default nextConfig;
