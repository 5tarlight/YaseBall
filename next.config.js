/** @type {import('next').NextConfig} */

const withImages = require("next-images");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.discordapp.com"],
  },
};

module.exports = nextConfig;
