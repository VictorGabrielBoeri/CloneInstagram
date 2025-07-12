import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ExplorePage from './pages/ExplorePage';
import CreatePostPage from './pages/CreatePostPage';
import MessagesPage from './pages/MessagesPage';
import NotificationsPage from './pages/NotificationsPage';
import CreatePostModal from './components/feed/CreatePostModal';

function App() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <AppProvider>
      <Router>
        <CreatePostModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
        <Routes>
          <Route path="/" element={<HomePage onOpenCreateModal={() => setIsCreateModalOpen(true)} />} />
          <Route path="/profile" element={<ProfilePage onOpenCreateModal={() => setIsCreateModalOpen(true)} />} />
          <Route path="/profile/:username" element={<ProfilePage onOpenCreateModal={() => setIsCreateModalOpen(true)} />} />
          <Route path="/explore" element={<ExplorePage onOpenCreateModal={() => setIsCreateModalOpen(true)} />} />
          <Route path="/create" element={<CreatePostPage />} />
          <Route path="/messages" element={<MessagesPage onOpenCreateModal={() => setIsCreateModalOpen(true)} />} />
          <Route path="/notifications" element={<NotificationsPage onOpenCreateModal={() => setIsCreateModalOpen(true)} />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;