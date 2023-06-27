import { useStaticQuery, graphql } from 'gatsby';
import React, { FC } from 'react';
import { Helmet, HelmetProps } from 'react-helmet';
import { SiteMetaData } from 'types';

interface SeoProps {
  description?: string;
  lang?: string;
  meta?: HelmetProps['meta'];
  title: string;
}

interface SiteMetaQuery {
  site: { siteMetadata?: SiteMetaData };
}

const siteMetaQuery = graphql/* GraphQL */ `
  query SiteMetaQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const Seo: FC<SeoProps> = ({ description = '', lang = 'en', meta = [], title }) => {
  const { site } = useStaticQuery<SiteMetaQuery>(siteMetaQuery);

  const metaDescription = description || site.siteMetadata?.description;
  const defaultTitle = site.siteMetadata?.title;
  const titleTemplate = defaultTitle ? `%s | ${defaultTitle}` : undefined;
  const defaultMeta: HelmetProps['meta'] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      name: 'title',
      property: `og:title`,
      content: titleTemplate ? titleTemplate.replace('%s', title) : title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata?.author || ``,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];
  const combinedMeta = defaultMeta.slice();
  meta.forEach((m): void => {
    const mIndex = combinedMeta.findIndex((dm) => dm.name === m.name);
    if (mIndex > -1) combinedMeta[mIndex] = m;
    else combinedMeta.push(m);
  });

  return <Helmet htmlAttributes={{ lang }} title={title} titleTemplate={titleTemplate} meta={combinedMeta} />;
};

export default Seo;
