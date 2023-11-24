/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    // domains: ["codemobiles.com", "pospos.co", "localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codemobiles.com",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**",
      },
    ],
    minimumCacheTTL: 0,
  },
};

module.exports = nextConfig;
