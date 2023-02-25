import React from 'react';


import Layout from '@components/Layout';
import FullWidth from '@components/FullWidth';
import MaxWidthWrapper from '@components/MaxWidthWrapper';




const IndexPage = ({ data }: { data: RecentPosts }) => {
  return (
    <Layout>
      <FullWidth>
        <MaxWidthWrapper>
          {/* <Helmet title={siteMetadata.title} /> */}

          <h1>Hi, I’m Ammar</h1>
          <p>
            I do fun things because I'm fun
          </p>
        </MaxWidthWrapper>
      </FullWidth>
    </Layout>
  );
};



export default IndexPage;