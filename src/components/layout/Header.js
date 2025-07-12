import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { HomeIcon, MagnifyingGlassIcon as SearchIcon, PlusCircleIcon, HeartIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const { currentUser, darkMode, toggleDarkMode } = useAppContext();
  
  return (
    <header className={`${darkMode ? 'bg-black text-white' : 'bg-white'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-300'} fixed top-0 w-full z-10`}>
      <div className="max-w-5xl mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold italic">
          <h1 className="font-serif italic">Instagram</h1>
        </Link>
        
        {/* Search */}
        <div className="hidden md:block relative">
          <div className="flex items-center">
            <SearchIcon className="h-4 w-4 absolute left-3 text-gray-500" />
            <input 
              type="text" 
              placeholder="Pesquisa" 
              className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'} rounded-md py-1 pl-10 pr-3 focus:outline-none w-64`}
            />
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex items-center space-x-5">
          <Link to="/" className="nav-icon">
            <HomeIcon className="h-6 w-6" />
          </Link>
          <Link to="/explore" className="nav-icon">
            <SearchIcon className="h-6 w-6 md:hidden" />
          </Link>
          <Link to="/create" className="nav-icon">
            <PlusCircleIcon className="h-6 w-6" />
          </Link>
          <Link to="/activity" className="nav-icon">
            <HeartIcon className="h-6 w-6" />
          </Link>
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
          <button 
            onClick={toggleDarkMode} 
            className={`p-1 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;