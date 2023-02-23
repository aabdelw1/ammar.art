import React from 'react';


import Layout from '@components/Layout';




const IndexPage = ({ data }: { data: RecentPosts }) => {

  return (
    <Layout>
      {/* <Helmet title={siteMetadata.title} /> */}
            <h1>Hi, I’m Ammar</h1>
            <p>
              I do fun things because I'm fun
            </p>
    </Layout>
  );
};



export default IndexPage;