import React from 'react';
import { useAppContext } from '../../context/AppContext';

const Stories = () => {
  const { darkMode } = useAppContext();
  
  // Dados fictícios para os stories
  const stories = [
    { id: 1, username: 'notify_me', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 2, username: 'user1_official', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: 3, username: 'chocotone_', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { id: 4, username: 'letstalknow', image: 'https://randomuser.me/api/portraits/women/46.jpg' },
    { id: 5, username: 'morena_fit', image: 'https://randomuser.me/api/portraits/women/47.jpg' },
    { id: 6, username: 'zinemalll', image: 'https://randomuser.me/api/portraits/men/48.jpg' },
  ];
  
  return (
    <div className={`${darkMode ? 'bg-black' : 'bg-white'} mb-4 overflow-x-auto`}>
      <div className="flex space-x-4 p-4">
        {stories.map(story => (
          <div key={story.id} className="flex flex-col items-center space-y-1">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-600 p-[2px] flex items-center justify-center">
              <div className="w-[58px] h-[58px] rounded-full overflow-hidden border-2 border-white">
                <img 
                  src={story.image} 
                  alt={story.username} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="text-xs truncate w-16 text-center">{story.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;