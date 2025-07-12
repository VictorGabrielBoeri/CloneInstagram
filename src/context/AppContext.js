import React, { createContext, useState, useEffect, useContext } from 'react';
import { generatePosts } from '../services/api';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const postsData = await generatePosts(15);
        setPosts(postsData);
        
        // Set a mock current user (first user from the posts)
        if (postsData.length > 0) {
          setCurrentUser(postsData[0].user);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  const likePost = (postId) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const unlikePost = (postId) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId ? { ...post, likes: Math.max(0, post.likes - 1) } : post
      )
    );
  };

  const addComment = (postId, comment) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId ? { 
          ...post, 
          comments: [...post.comments, {
            id: Date.now(),
            username: currentUser.username,
            text: comment,
            timestamp: new Date().toISOString()
          }] 
        } : post
      )
    );
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  
  return (
    <AppContext.Provider value={{ 
      posts, 
      loading, 
      currentUser,
      darkMode,
      likePost,
      unlikePost,
      addComment,
      toggleDarkMode
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContext;