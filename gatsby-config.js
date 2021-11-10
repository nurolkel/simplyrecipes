/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title:'Simply Recipes',
    description:'Nice and Clean Recipes Site',
    author:'@kelvin',
    person: {
      name:'Kelvin',
      age: 31
    },
    simpleData:['item 1', 'item 2'],
    complexData: [
      {
        name:'Kelvin',
        age: 31
      },
      {
        name:'Nunez',
        age: 31
      },
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_API_KEY,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:400`,
          `Inconsolata\:400,500,600,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
  ],
}
