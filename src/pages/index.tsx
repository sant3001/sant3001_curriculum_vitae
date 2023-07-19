import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { graphql, PageProps } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React, { FC } from 'react';
import { HelmetProps } from 'react-helmet';
import Layout from 'components/layout';
import Main from 'components/Main';
import Seo from 'components/seo';
import Sidebar from 'components/sidebar';
import { User } from 'types';

interface GetUserQuery {
  user: User;
}
interface GetJSONUser {
  record: User;
}

const useFetchData = (initialUser: User) => {
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: ({ signal }) => {
      return axios.get<GetJSONUser>(process.env.GATSBY_JSONBIN_URL || '', {
        signal,
        headers:
          process.env.NODE_ENV !== 'production'
            ? {
                'X-Master-Key': process.env.GATSBY_JSONBIN_API_KEY,
              }
            : {
                'X-Access-Key': process.env.GATSBY_JSONBIN_API_KEY,
              },
      });
    },
  });

  const combinedData: User = { ...initialUser, ...data?.data?.record, img: initialUser.img };

  return combinedData;
};

const IndexPage: FC<PageProps<GetUserQuery>> = (props) => {
  const {
    data: { user: initialUser },
  } = props;
  const user = useFetchData(initialUser);
  if (!user) return null;

  const image = getImage(user.img);
  const imgUrl = image?.images.fallback?.src;
  // Remove last slash
  const siteUrl = (process.env.SITE_URL || '').replace(/\/$/, '');
  const pathPrefix = process.env.PATH_PREFIX || '';
  const meta: HelmetProps['meta'] = [];
  if (imgUrl) meta.push({ name: 'image', property: 'og:image', content: `${siteUrl}${imgUrl}` });
  if (siteUrl) meta.push({ property: 'og:url', content: `${siteUrl}${pathPrefix}/` });
  return (
    <Layout>
      <Seo title="Resume" meta={meta} />
      <div className="row">
        <Sidebar user={user} image={image} />
        <Main user={user} />
      </div>
    </Layout>
  );
};

export const query = graphql/* GraphQL */ `
  query GetUser {
    user {
      imgAlt
      name
      title
      addressLine1
      addressLine2
      phoneNumber
      email
      img {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

export default IndexPage;
