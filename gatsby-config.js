module.exports = {
  siteMetadata: {
    description: "Personal page of Laurent Labine",
    locale: "en",
    title: "Laurent Labine",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
      },
    },
  ],
}
