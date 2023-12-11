import type { GetServerDataReturn, PageProps } from 'gatsby';
import React, { FC } from 'react';
import { HelmetProps } from 'react-helmet';
import { UserContext } from 'components/context';
import Layout from 'components/layout';
import Main from 'components/Main';
import Seo from 'components/seo';
import Sidebar from 'components/sidebar';
import { fetchData } from 'hooks';
import { User } from 'types';

interface ServerDataProps {
  user?: User;
}

const IndexPage: FC<PageProps<unknown, unknown, unknown, ServerDataProps>> = (props) => {
  const {
    serverData: { user },
  } = props;

  if (!user) return null;

  // Remove last slash
  const siteUrl = (process.env.SITE_URL || '').replace(/\/$/, '');
  const pathPrefix = process.env.PATH_PREFIX || '';
  const meta: HelmetProps['meta'] = [];
  if (siteUrl) meta.push({ property: 'og:url', content: `${siteUrl}${pathPrefix}/` });

  return (
    <UserContext.Provider value={user}>
      <Layout>
        <Seo title="Resume" meta={meta} />
        <div className="row">
          <Sidebar />
          <Main />
        </div>
      </Layout>
    </UserContext.Provider>
  );
};

export const getServerData = async (): GetServerDataReturn<ServerDataProps> => {
  const data = await fetchData();
  return {
    status: 200,
    headers: {},
    props: { user: data },
  };
};

export default IndexPage;
