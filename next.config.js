module.exports = {
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader",
    });
    return configuration;
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
