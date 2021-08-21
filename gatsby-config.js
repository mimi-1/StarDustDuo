const path = require("path")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
console.log("Project directory:", __dirname)

module.exports = {
  siteMetadata: {
    title: `StarDust Jazz Duo`,
    description: `Stardust Jazz Duo official website, jazz music, music services`,
    author: `Maryna, Victor, Zhanna, Taras`,
    social: [
      {
        name: "YouTube",
        href: "https://www.youtube.com/channel/UCDi1qcqCETpfWFFNV4gXKYQ",
        tooltip: "Follow us on YouTube",
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/stardustjazzduo/",
        tooltip: "Follow us on Instagram",
      },
      {
        name: "Facebook",
        href: "https://www.facebook.com/TheBestJazzExperience",
        tooltip: "Follow us on Facebook",
      },
    ],
    contact: {
      phone: "(647) 472-1727",
      email: "victor@stardustjazzduo.ca",
    },
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `Blog`,
        link: `/blog`,
      },
      {
        name: `About`,
        link: `/about`,
      },
      { name: `Gallery`, link: `/gallery` },
      {
        name: `Contact`,
        link: `/contact`,
      },
    ],
  },

  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        //values are in settings/apikey
        spaceId: `0q1ftthbk8wn`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "@fs/gatsby-plugin-drive",
      options: {
        folderId: process.env.GOOGLE_DRIVE_FOLDER_ID,
        key: {
          private_key: process.env.GOOGLE_PRIVATE_KEY,
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
        },
        destination: path.join(__dirname, "src", "images", "gallery"),
        exportGDocs: false,
        // exportMimeType: "text/html",
        // exportMiddleware: someFunction,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT, // string; add your MC list endpoint here; see instructions below
        timeout: 4000, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `StarDust Jazz Duo`,
        short_name: `SDJD`,
        start_url: `/`,
        background_color: `#000028`,
        theme_color: `#7C51FF`,
        display: `fullscreen`,
        icon: `src/images/SDJD.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Roboto`,
                variants: [`400`, `500`, `600`],
              },
              {
                family: `Fascinate`,
              },
              {
                family: `Kaushan Script`,
              },
              {
                family: `Oswald`,
                variants: [`400`, `600`],
              },
            ],
          },
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          breakpoints: [600, 960, 1280, 1920],
          backgroundColor: `transparent`,
        },
      },
    },

    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: process.env.YOUTUBE_CHANNEL,
        apiKey: process.env.YOUTUBE_API_KEY,
        maxVideos: 20, // Defaults to 50
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/images/gallery/`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
