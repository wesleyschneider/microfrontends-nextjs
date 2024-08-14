const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "appCore",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            moduleA: `moduleA@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
          },
        })
      );
    }

    return config;
  },
};
