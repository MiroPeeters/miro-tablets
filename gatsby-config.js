module.exports = {
  siteMetadata: {
    title: "Tablet shop",
    description: "This webshop was founded in 2021 by founder, Miro Peeters",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://peetersmiroproject.local/graphql",
        schema: {

          timeout: 1000000,
          
          },
      },
    },
    ],
}
