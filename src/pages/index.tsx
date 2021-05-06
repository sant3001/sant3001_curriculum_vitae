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
      <Seo title="Resume" />
      <div className="row">
        <Sidebar user={user} image={image} />
        <Main user={user} />
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
      experience {
        id
        company {
          name
          website
        }
        location {
          city
          state
          country
        }
        role
        duration {
          start
          end
        }
        description
      }
      education {
        id
        college
        location {
          city
          state
          country
        }
        duration {
          start
          end
        }
        degree
      }
    }
  }
`;

export default IndexPage;
