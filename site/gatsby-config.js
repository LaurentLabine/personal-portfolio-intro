module.exports = {
  siteMetadata: {
    description: "Personal page of Laurent Labine",
    locale: "en",
    title: "Laurent's Personal Space",
    formspreeEndpoint: "https://formspree.io/f/mgeradey",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: {
          'back': '#edf0f3',
          'front': '#2b3137',
          'lead': '#2781ed',
          'lead-text': '#ffffff',
          'line': '#ced9e3',
          'skill-1': '#405060',
          'skill-2': '#fc8732',
          'skill-3': '#2ebc50',
        },
      },

    },
  ],
  pathPrefix: `/personal-portfolio-intro`,
}
