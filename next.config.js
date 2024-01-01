/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
