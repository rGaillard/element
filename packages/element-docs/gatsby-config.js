module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  pathPrefix: "/docs",
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-apollo-docs",
      options: {
        root: __dirname,
        subtitle: "Flood Element",
        description: "A guide to load testing with Flood Element",
        githubRepo: "flood-io/element",
        contentDir: "packages/docs",
        defaultVersion: "1",
        versions: {
          1: "feature/docs",
        },
        sidebarCategories: {
          null: ["index"],
          Examples: ["examples/generating-data.md"],

          // API: [
          //   // "api/Browser",
          //   // "features/errors",
          //   // "features/data-sources",
          // ],
          // "Getting Started": ["getting-started"],
        },
      },
    },
  ],
  // plugins: [
  //   // `gatsby-plugin-react-helmet`,
  //   // // `gatsby-source-filesystem`,
  //   // {
  //   //   resolve: `gatsby-source-filesystem`,
  //   //   options: {
  //   //     name: `images`,
  //   //     path: `${__dirname}/src/images`,
  //   //   },
  //   // },
  //   // `gatsby-transformer-sharp`,
  //   // `gatsby-plugin-sharp`,
  //   // {
  //   //   resolve: `gatsby-plugin-manifest`,
  //   //   options: {
  //   //     name: `gatsby-starter-default`,
  //   //     short_name: `starter`,
  //   //     start_url: `/`,
  //   //     background_color: `#663399`,
  //   //     theme_color: `#663399`,
  //   //     display: `minimal-ui`,
  //   //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
  //   //   },
  //   // },
  //   // this (optional) plugin enables Progressive Web App + Offline functionality
  //   // To learn more, visit: https://gatsby.dev/offline
  //   // `gatsby-plugin-offline`,
  // ],
}
