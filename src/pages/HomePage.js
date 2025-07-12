import React from 'react';
import Layout from '../components/layout/Layout';
import Feed from '../components/feed/Feed';

const HomePage = ({ onOpenCreateModal }) => {
  return (
    <Layout onOpenCreateModal={onOpenCreateModal}>
      <Feed />
    </Layout>
  );
};

export default HomePage;