import React from 'react';
import Layout from '../components/layout/Layout';
import Profile from '../components/profile/Profile';

const ProfilePage = ({ onOpenCreateModal }) => {
  return (
    <Layout onOpenCreateModal={onOpenCreateModal}>
      <Profile />
    </Layout>
  );
};

export default ProfilePage;