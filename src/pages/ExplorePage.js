import React from 'react';
import Layout from '../components/layout/Layout';
import Explore from '../components/explore/Explore';

const ExplorePage = ({ onOpenCreateModal }) => {
  return (
    <Layout onOpenCreateModal={onOpenCreateModal}>
      <Explore />
    </Layout>
  );
};

export default ExplorePage;