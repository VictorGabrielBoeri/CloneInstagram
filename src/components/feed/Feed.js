import React from 'react';
import Post from './Post';
import Stories from './Stories';
import { useAppContext } from '../../context/AppContext';

const Feed = () => {
  const { posts, loading, darkMode } = useAppContext();
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 ${darkMode ? 'border-white' : 'border-gray-900'}`}></div>
      </div>
    );
  }
  
  return (
    <div className="max-w-xl mx-auto px-4">
      <Stories />
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;