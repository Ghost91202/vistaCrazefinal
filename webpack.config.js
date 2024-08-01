module.exports = {
  // Your existing configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.ignoreWarnings = [
        (warning) =>
          warning.message.includes('Managed item') &&
          warning.message.includes('isn\'t a directory or doesn\'t contain a package.json'),
      ];
    }
    return config;
  },
};
