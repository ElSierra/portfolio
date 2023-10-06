/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  ignoreDuringBuilds: true,
};

module.exports = nextConfig;
