import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

const Messages = () => {
  const { darkMode } = useAppContext();
  const [selectedChat, setSelectedChat] = useState(null);
  
  // Dados fictícios para as conversas
  const conversations = [
    { id: 1, username: 'Ramiro Falcão', lastMessage: 'Eiiiiiii tudo em paz?', time: '11 h', profilePic: 'https://randomuser.me/api/portraits/men/32.jpg', hasUnread: true },
    { id: 2, username: 'Ryan', lastMessage: 'Você é incrível amigo...', time: '11 h', profilePic: 'https://randomuser.me/api/portraits/men/33.jpg' },
    { id: 3, username: 'César Alexandre de Oliveira', lastMessage: 'César enviou uma foto...', time: '13 h', profilePic: 'https://randomuser.me/api/portraits/men/34.jpg' },
    { id: 4, username: 'André Luiz', lastMessage: 'Reagi com ❤️ a sua mensagem', time: '16 h', profilePic: 'https://randomuser.me/api/portraits/men/35.jpg' },
    { id: 5, username: 'Ritzaly #Rabeere', lastMessage: 'Você: Tadinho...', time: '1 d', profilePic: 'https://randomuser.me/api/portraits/women/36.jpg' },
    { id: 6, username: 'Felipe Tosi', lastMessage: 'Reagiu com ❤️ a sua mensagem', time: '4 d', profilePic: 'https://randomuser.me/api/portraits/men/37.jpg' },
    { id: 7, username: 'Andréa', lastMessage: 'Andréa enviou um áudio...', time: '5 d', profilePic: 'https://randomuser.me/api/portraits/women/38.jpg' },
    { id: 8, username: 'Emily Almeida', lastMessage: 'Você: Como vai tá?', time: '1 sem', profilePic: 'https://randomuser.me/api/portraits/women/39.jpg' },
  ];

  return (
    <div className={`max-w-6xl mx-auto mt-4 ${darkMode ? 'text-white' : 'text-black'}`}>
      <div className={`border rounded-lg overflow-hidden ${darkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-300'} h-[85vh] flex`}>
        {/* Lista de conversas */}
        <div className={`w-full md:w-1/3 border-r ${darkMode ? 'border-gray-800' : 'border-gray-300'} overflow-y-auto`}>
          <div className={`p-4 border-b ${darkMode ? 'border-gray-800' : 'border-gray-300'} flex justify-between items-center`}>
            <h2 className="font-semibold text-lg">victor.gabriel.boeri</h2>
            <svg aria-label="Nova mensagem" className="h-6 w-6" fill="currentColor" role="img" viewBox="0 0 24 24">
              <path d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              <path d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16.848" x2="20.076" y1="3.924" y2="7.153"></line>
            </svg>
          </div>
          
          <div className="p-2">
            <div className="relative mb-2">
              <input 
                type="text" 
                placeholder="Pesquisar" 
                className={`w-full p-2 pl-8 rounded-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}
              />
              <svg aria-label="Pesquisar" className="h-4 w-4 absolute left-2 top-3 text-gray-500" fill="currentColor" role="img" viewBox="0 0 24 24">
                <path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16.511" x2="22" y1="16.511" y2="22"></line>
              </svg>
            </div>
            
            {conversations.map(chat => (
              <div 
                key={chat.id} 
                className={`flex items-center p-3 cursor-pointer ${selectedChat === chat.id ? (darkMode ? 'bg-gray-800' : 'bg-gray-100') : ''} hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md`}
                onClick={() => setSelectedChat(chat.id)}
              >
                <div className="relative">
                  <img 
                    src={chat.profilePic} 
                    alt={chat.username} 
                    className="h-12 w-12 rounded-full object-cover mr-3"
                  />
                  {chat.hasUnread && (
                    <div className="absolute bottom-0 right-2 h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-black"></div>
                  )}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <span className="font-medium">{chat.username}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{chat.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Área de chat */}
        <div className="hidden md:flex md:w-2/3 flex-col justify-center items-center">
          {selectedChat ? (
            <div className="flex flex-col h-full w-full">
              {/* Cabeçalho do chat */}
              <div className={`p-4 border-b ${darkMode ? 'border-gray-800' : 'border-gray-300'} flex items-center`}>
                <img 
                  src={conversations.find(c => c.id === selectedChat)?.profilePic} 
                  alt="Profile" 
                  className="h-8 w-8 rounded-full object-cover mr-3"
                />
                <span className="font-semibold">{conversations.find(c => c.id === selectedChat)?.username}</span>
              </div>
              
              {/* Mensagens */}
              <div className="flex-grow p-4 overflow-y-auto">
                {/* Aqui seriam exibidas as mensagens */}
              </div>
              
              {/* Input de mensagem */}
              <div className="p-4">
                <div className={`flex items-center rounded-full border ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-300'} p-2`}>
                  <input 
                    type="text" 
                    placeholder="Enviar mensagem..." 
                    className={`flex-grow bg-transparent focus:outline-none px-2`}
                  />
                  <button className="text-blue-500 p-1">
                    <PaperAirplaneIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="inline-block p-8 rounded-full border-2 border-gray-300 dark:border-gray-700 mb-4">
                <svg aria-label="" className="h-12 w-12" fill="currentColor" role="img" viewBox="0 0 24 24">
                  <path d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.739"></path>
                  <path d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z" fillRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-light mb-2">Suas mensagens</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">Envie fotos e mensagens privadas para um amigo ou grupo</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600">
                Enviar mensagem
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;