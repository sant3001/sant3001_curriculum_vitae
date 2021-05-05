import * as React from "react";
import Layout from "components/layout";
import Seo from "components/seo";
import Sidebar from "components/sidebar";
import { User } from "types";
import { graphql, PageProps } from "gatsby";
import { getImage } from "gatsby-plugin-image";

interface GetUserQuery {
  user: User;
}

const IndexPage = (props: PageProps<GetUserQuery>): JSX.Element => {
  const { data: { user } } = props;
  const image = getImage(user.img);
  return (
    <Layout>
      <Seo title="Home" />
      <div className="row">
        <Sidebar user={user} image={image} />
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
      img { childImageSharp { gatsbyImageData } }
      skillsSet { id name skills { id name value } }
    }
  }
`;

export default IndexPage;
