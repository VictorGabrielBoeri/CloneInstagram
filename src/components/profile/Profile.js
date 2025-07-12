import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const Profile = () => {
  const { username } = useParams();
  const { posts, currentUser } = useAppContext();
  
  // If username is provided, find that user's posts, otherwise show current user
  const profileUser = username 
    ? posts.find(post => post.user.username === username)?.user 
    : currentUser;
  
  const userPosts = posts.filter(post => post.user.username === (profileUser?.username || ''));
  
  if (!profileUser) {
    return <div className="text-center p-8">User not found</div>;
  }
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mr-0 md:mr-8 mb-4 md:mb-0">
          <img 
            src={profileUser.profilePicture} 
            alt={profileUser.username} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <h1 className="text-2xl font-light mb-4">{profileUser.username}</h1>
          
          <div className="flex space-x-6 mb-4">
            <div>
              <span className="font-semibold">{userPosts.length}</span> posts
            </div>
            <div>
              <span className="font-semibold">0</span> followers
            </div>
            <div>
              <span className="font-semibold">0</span> following
            </div>
          </div>
          
          <div>
            <h2 className="font-semibold">{profileUser.name}</h2>
          </div>
        </div>
      </div>
      
      {/* Profile Posts */}
      <div className="border-t border-gray-300 pt-4">
        <div className="grid grid-cols-3 gap-1 md:gap-4">
          {userPosts.map(post => (
            <div key={post.id} className="relative pb-[100%]">
              <img 
                src={post.imageUrl} 
                alt={post.caption} 
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;