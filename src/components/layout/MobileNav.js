import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { 
  HomeIcon, 
  MagnifyingGlassIcon, 
  PlusCircleIcon, 
  HeartIcon, 
  UserCircleIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline';

const MobileNav = ({ onOpenCreateModal }) => {
  const { currentUser, darkMode, toggleDarkMode } = useAppContext();
  
  return (
    <div className={`fixed bottom-0 left-0 right-0 ${darkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200'} border-t md:hidden z-10`}>
      <div className="flex justify-around items-center p-3">
        <Link to="/" className="nav-icon">
          <HomeIcon className="h-6 w-6" />
        </Link>
        <Link to="/explore" className="nav-icon">
          <MagnifyingGlassIcon className="h-6 w-6" />
        </Link>
        <button onClick={onOpenCreateModal} className="nav-icon">
          <PlusCircleIcon className="h-6 w-6" />
        </button>
        <button onClick={toggleDarkMode} className="nav-icon">
          {darkMode ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>
        <Link to="/profile" className="nav-icon">
          {currentUser?.profilePicture ? (
            <img 
              src={currentUser.profilePicture} 
              alt="Profile" 
              className="h-6 w-6 rounded-full object-cover"
            />
          ) : (
            <UserCircleIcon className="h-6 w-6" />
          )}
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;