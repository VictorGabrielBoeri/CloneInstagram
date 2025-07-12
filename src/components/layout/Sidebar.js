import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { 
  HomeIcon, 
  MagnifyingGlassIcon, 
  PlusCircleIcon, 
  HeartIcon, 
  UserCircleIcon,
  FilmIcon,
  ChatBubbleLeftEllipsisIcon,
  BookmarkIcon,
  Bars3Icon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline';

const Sidebar = ({ onOpenCreateModal }) => {
  const { currentUser, darkMode, toggleDarkMode } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className={`fixed left-0 top-0 h-full w-[220px] border-r ${darkMode ? 'bg-black text-white border-gray-800' : 'bg-white border-gray-200'} hidden md:block`}>
      <div className="p-4 pt-8">
        <Link to="/" className="text-xl font-bold italic block mb-10">
          <h1 className="font-serif italic">Instagram</h1>
        </Link>
        
        <nav className="flex flex-col space-y-5">
          <Link to="/" className={`flex items-center space-x-3 p-2 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} rounded-md transition-colors`}>
            <HomeIcon className="h-6 w-6" />
            <span>Página Inicial</span>
          </Link>
          <Link to="/explore" className={`flex items-center space-x-3 p-2 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} rounded-md transition-colors`}>
            <MagnifyingGlassIcon className="h-6 w-6" />
            <span>Pesquisa</span>
          </Link>
          <Link to="/explore" className={`flex items-center space-x-3 p-2 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} rounded-md transition-colors`}>
            <FilmIcon className="h-6 w-6" />
            <span>Explorar</span>
          </Link>
          <Link to="/messages" className={`flex items-center space-x-3 p-2 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} rounded-md transition-colors`}>
            <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />
            <span>Mensagens</span>
          </Link>
          <Link to="/notifications" className={`flex items-center space-x-3 p-2 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} rounded-md transition-colors`}>
            <HeartIcon className="h-6 w-6" />
            <span>Notificações</span>
          </Link>
          <Link to="#" 
            className={`flex items-center space-x-3 p-2 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} rounded-md transition-colors`}
            onClick={(e) => {
              e.preventDefault();
              onOpenCreateModal();
            }}
          >
            <PlusCircleIcon className="h-6 w-6" />
            <span>Criar</span>
          </Link>
          <Link to="/profile" className={`flex items-center space-x-3 p-2 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} rounded-md transition-colors`}>
            {currentUser?.profilePicture ? (
              <img 
                src={currentUser.profilePicture} 
                alt="Profile" 
                className="h-6 w-6 rounded-full object-cover"
              />
            ) : (
              <UserCircleIcon className="h-6 w-6" />
            )}
            <span>Perfil</span>
          </Link>
          
          {/* Botão específico para mudar o tema */}
          <button 
            onClick={toggleDarkMode} 
            className={`flex items-center space-x-3 p-2 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} rounded-md transition-colors`}
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
            <span>{darkMode ? 'Modo Claro' : 'Modo Escuro'}</span>
          </button>
        </nav>
        
        <div className="absolute bottom-5 left-0 w-full px-4">
          <button 
            onClick={toggleMenu} 
            className={`flex items-center space-x-3 p-2 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} rounded-md transition-colors w-full`}
          >
            <Bars3Icon className="h-6 w-6" />
            <span>Mais</span>
          </button>
          
          {/* Menu expandido */}
          {menuOpen && (
            <div className={`absolute bottom-16 left-4 right-4 p-3 rounded-md shadow-lg ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'}`}>
              <div className="flex flex-col space-y-3">
                <Link to="/saved" className={`flex items-center space-x-3 p-2 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} rounded-md transition-colors`}>
                  <BookmarkIcon className="h-5 w-5" />
                  <span>Salvos</span>
                </Link>
                <hr className={darkMode ? 'border-gray-800' : 'border-gray-200'} />
                <button className={`text-left p-2 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} rounded-md transition-colors`}>
                  <span>Configurações</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;