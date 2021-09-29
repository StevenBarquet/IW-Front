const webpack = require("webpack");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const withOffline = require("next-offline");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const nextConfig = {
  trailingSlash: true,
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
  },
  images: {
    domains: ["localhost", "interware.mx"],
  },
  async exportPathMap() {
    return {
      "/": { page: "/" },
      "/home": { page: "/home" },
      "/robot": { page: "/robot" },
      "/specialized-services": { page: "/specialized-services" },
      "/join-us": { page: "/join-us" },
      "/vacancies": { page: "/vacancies" },
      "/technology-consulting": { page: "/technology-consulting" },
      "/quality-assurance": { page: "/quality-assurance" },
      "/software-factory": { page: "/software-factory" },
      "/blog": { page: "/blog" },
    };
  },
};

const mainConfig = {
  ...nextConfig,
  webpack: (config, { isServer }) => {
    if (isServer) {
      return config;
    }

    const isProduction = config.mode === "production";

    if (!isProduction) {
      return config;
    }

    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      })
    );

    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    return config;
  },
};

module.exports = withPlugins(
  [
    withSass,
    withImages,
    withCSS,
    [
      withOffline,
      {
        workboxOpts: {
          swDest: process.env.NEXT_EXPORT
            ? "service-worker.js"
            : "static/service-worker.js",
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: "NetworkFirst",
              options: {
                cacheName: "offlineCache",
                expiration: {
                  maxEntries: 200,
                },
              },
            },
          ],
        },
        async rewrites() {
          return [
            {
              source: "/service-worker.js",
              destination: "/_next/static/service-worker.js",
            },
          ];
        },
      },
    ],
  ],
  mainConfig
);
