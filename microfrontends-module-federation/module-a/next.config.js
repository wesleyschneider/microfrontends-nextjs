const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "moduleA",
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./home": "./src/pages/home.tsx",
          },
        })
      );
    }

    return config;
  },
};
