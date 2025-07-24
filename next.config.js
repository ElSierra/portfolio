/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/portfolio-7dba7.appspot.com/**",
      },
    ],
  },
};

module.exports = nextConfig;
