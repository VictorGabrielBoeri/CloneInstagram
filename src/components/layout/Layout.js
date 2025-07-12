import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import { useAppContext } from '../../context/AppContext';

const Layout = ({ children, onOpenCreateModal }) => {
  const { darkMode } = useAppContext();
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-gray-50'}`}>
      <Sidebar onOpenCreateModal={onOpenCreateModal} />
      <div className="md:ml-[220px]">
        <main className="pb-16 md:pb-8">  {/* Adicionado padding-bottom para mobile para não sobrepor a navegação */}
          {children}
        </main>
      </div>
      <MobileNav onOpenCreateModal={onOpenCreateModal} />
    </div>
  );
};

export default Layout;