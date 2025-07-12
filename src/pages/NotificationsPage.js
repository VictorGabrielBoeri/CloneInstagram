import React from 'react';
import Layout from '../components/layout/Layout';
import Notifications from '../components/notifications/Notifications';

const NotificationsPage = ({ onOpenCreateModal }) => {
  return (
    <Layout onOpenCreateModal={onOpenCreateModal}>
      <Notifications />
    </Layout>
  );
};

export default NotificationsPage;