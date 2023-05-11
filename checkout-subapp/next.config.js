/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  webpack(config, options) {
    Object.assign(config.experiments, { topLevelAwait: true });

    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "checkout",
          exposes: {
            "./Nav": "./src/components/Nav",
            "./App": "./src/app/page.tsx",
          },
          filename: "static/chunks/remoteEntry.js",
          extraOptions: {
            exposePages: true,
          },
          shared: {
            react: {
              singleton: true,
              version: "0",
              requiredVersion: false,
              eager: false,
            },
            "react-dom": {
              requiredVersion: false,
              singleton: true,
              version: "0",
              eager: false,
            },
            tailwindcss: {
              requiredVersion: false,
              singleton: true,
              version: "0",
              eager: false,
            },
          },
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
