/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "host",
          remotes: {
            remote: "remote@http://localhost:3001/remote.js",
            cart: "cart@http://localhost:3000/remote.js",
            checkout:
              "checkout@http://localhost:3002/_next/static/chunks/remoteEntry.js",
            // Add more remotes as needed
          },

          filename: "static/chunks/remoteEntry.js",
        })
      );
    }

    return config;
  },
};

module.exports = nextConfig;
