import React from 'react';
import Layout from '../components/layout/Layout';
import Messages from '../components/messages/Messages';

const MessagesPage = ({ onOpenCreateModal }) => {
  return (
    <Layout onOpenCreateModal={onOpenCreateModal}>
      <Messages />
    </Layout>
  );
};

export default MessagesPage;