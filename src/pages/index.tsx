import { graphql, PageProps } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from 'components/layout';
import Main from 'components/Main';
import Seo from 'components/seo';
import Sidebar from 'components/sidebar';
import { User } from 'types';

interface GetUserQuery {
  user: User;
}

const IndexPage = (props: PageProps<GetUserQuery>): JSX.Element => {
  const {
    data: { user },
  } = props;
  const image = getImage(user.img);
  return (
    <Layout>
      <Seo title="Home" />
      <div className="row">
        <Sidebar user={user} image={image} />
        <Main />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query GetUser {
    user {
      about
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
      skillsSet {
        id
        name
        skills {
          id
          name
          value
        }
      }
    }
  }
`;

export default IndexPage;
