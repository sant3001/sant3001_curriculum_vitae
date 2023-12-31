import dotEnv from 'dotenv';
import type { GatsbyConfig } from 'gatsby';
import adapter from 'gatsby-adapter-netlify';

dotEnv.config({ path: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}` });

const config: GatsbyConfig = {
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
  }),
  pathPrefix: process.env.PATH_PREFIX,
  siteMetadata: {
    title: process.env.SITE_TITLE,
    description: process.env.SITE_DESCRIPTION,
    author: process.env.SITE_AUTHOR,
  },
  plugins: [
    `gatsby-plugin-pnpm`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Santiago Bendavid Curriculum Vitae`,
        short_name: `sant3001_curriculum_vitae`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#00334D`,
        display: `minimal-ui`,
        icon: process.env.FAVICON ? `src/images/${process.env.FAVICON}` : undefined, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          src: `${__dirname}/src`,
          components: `${__dirname}/src/components`,
          types: `${__dirname}/src/types`,
          hooks: `${__dirname}/src/hooks`,
          pages: `${__dirname}/src/pages`,
        },
        extensions: ['js', 'ts', 'tsx'],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`, 'IM Fell French Canon SC'],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `cv/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        uploadFolder: 'cv',
        transformTypes: ['CloudinaryAsset'],
      },
    },
  ],
};

export default config;
