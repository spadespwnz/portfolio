const path = require(`path`)

module.exports = {
    siteMetadata: {
        title: `Web and Software Developer | Nathan Brown | Ontario, Canada`,
        siteUrl: `http://www.nathanb.ca`,
        description: `Full-Stack Web and Software developer living in Ontario, Canada. Currently searching for job opportunities. Hire me!`,
    },
    plugins: [{
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `gatsby_image`,
          path: path.join(__dirname, `src`,`gatsby_image`),
        },
      },`gatsby-plugin-glamor`,`gatsby-plugin-react-helmet`,`gatsby-transformer-sharp`, `gatsby-plugin-sharp`],
}