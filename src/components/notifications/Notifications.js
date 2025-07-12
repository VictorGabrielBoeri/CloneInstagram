import React from 'react';
import { useAppContext } from '../../context/AppContext';

const Notifications = () => {
  const { darkMode } = useAppContext();
  
  // Dados fictícios para as notificações
  const todayNotifications = [
    { id: 1, username: 'bernardosilva8', action: 'curtiu seu story.', time: '12 h', profilePic: 'https://randomuser.me/api/portraits/men/42.jpg', image: 'https://picsum.photos/id/237/50/50' },
    { id: 2, username: 'camila.santos', action: 'curtiu seu story.', time: '12 h', profilePic: 'https://randomuser.me/api/portraits/women/43.jpg', image: 'https://picsum.photos/id/238/50/50' }
  ];
  
  const thisMonthNotifications = [
    { id: 3, username: 'aline.xdl', action: 'curtiu seu story.', time: '6 d', profilePic: 'https://randomuser.me/api/portraits/women/44.jpg', image: 'https://picsum.photos/id/239/50/50' },
    { id: 4, username: 'blogfabio_', action: 'começou a seguir você.', time: '15 d', profilePic: 'https://randomuser.me/api/portraits/men/45.jpg', followButton: true },
    { id: 5, username: 'amy.pxy', action: 'começou a seguir você.', time: '2 jul', profilePic: 'https://randomuser.me/api/portraits/women/46.jpg', followButton: true },
    { id: 6, username: 'choffeeshop_', action: 'começou a seguir você.', time: '20 jul', profilePic: 'https://randomuser.me/api/portraits/men/47.jpg', followButton: true },
    { id: 7, username: 'blogfabio', action: 'começou a seguir você.', time: '22 jul', profilePic: 'https://randomuser.me/api/portraits/men/48.jpg', followButton: true },
    { id: 8, username: 'bernardosilva8', action: 'curtiu seu story.', time: '28 jul', profilePic: 'https://randomuser.me/api/portraits/men/49.jpg', image: 'https://picsum.photos/id/240/50/50' },
    { id: 9, username: 'bernardosilva8_aline.xdl e camila.santos', action: 'curtiram seu story.', time: '28 jul', profilePic: 'https://randomuser.me/api/portraits/men/50.jpg', image: 'https://picsum.photos/id/241/50/50' },
    { id: 10, username: 'wesley_silva32', action: 'curtiu seu post.', time: '27 jul', profilePic: 'https://randomuser.me/api/portraits/men/51.jpg', image: 'https://picsum.photos/id/242/50/50' },
    { id: 11, username: 'andreiasouto95', action: 'e outras pessoas curtiram seu post.', time: '27 jul', profilePic: 'https://randomuser.me/api/portraits/women/52.jpg', image: 'https://picsum.photos/id/243/50/50' },
    { id: 12, username: 'sol_2474', action: 'mencionou71 e andreiasouto95 curtiram seu story.', time: '26 jul', profilePic: 'https://randomuser.me/api/portraits/women/53.jpg', image: 'https://picsum.photos/id/244/50/50' },
    { id: 13, username: 'sol_2474', action: 'comentou: Feliz aniversário linda, te desejo tudo de bom, muita saúde, paz, amor e vida longa ❤️', time: '26 jul', profilePic: 'https://randomuser.me/api/portraits/women/54.jpg', image: 'https://picsum.photos/id/245/50/50' },
    { id: 14, username: 'aline.xdl', action: 'comentou: Vdd feliz aniversário meu amor, feliz vida ❤️', time: '26 jul', profilePic: 'https://randomuser.me/api/portraits/women/55.jpg', image: 'https://picsum.photos/id/246/50/50' }
  ];

  const renderNotification = (notification) => (
    <div key={notification.id} className="flex items-center p-4 hover:bg-black hover:text-white">
      <img 
        src={notification.profilePic} 
        alt={notification.username} 
        className="h-11 w-11 rounded-full object-cover mr-3"
      />
      <div className="flex-grow">
        <p className="text-sm">
          <span className="font-semibold">{notification.username}</span> {notification.action} <span className="text-gray-500 dark:text-gray-400">{notification.time}</span>
        </p>
      </div>
      {notification.followButton ? (
        <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded font-semibold hover:bg-blue-600">
          Seguindo
        </button>
      ) : notification.image ? (
        <img 
          src={notification.image} 
          alt="Content" 
          className="h-11 w-11 object-cover"
        />
      ) : null}
    </div>
  );

  return (
    <div className={`max-w-xl mx-auto mt-4 ${darkMode ? 'text-white' : 'text-black'}`}>
      <div className={`border rounded-lg overflow-hidden ${darkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-300'}`}>
        <h2 className="text-xl font-semibold p-4 border-b border-gray-300 dark:border-gray-800">Notificações</h2>
        
        <div className="overflow-y-auto max-h-[80vh]">
          <h3 className="font-semibold p-4">Hoje</h3>
          {todayNotifications.map(renderNotification)}
          
          <h3 className="font-semibold p-4">Este mês</h3>
          {thisMonthNotifications.map(renderNotification)}
        </div>
      </div>
    </div>
  );
};

export default Notifications;