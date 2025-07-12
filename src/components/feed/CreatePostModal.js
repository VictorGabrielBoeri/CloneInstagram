import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { XMarkIcon } from '@heroicons/react/24/outline';

const CreatePostModal = ({ isOpen, onClose }) => {
  const { currentUser, darkMode } = useAppContext();
  const [caption, setCaption] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [step, setStep] = useState(1); // 1: selecionar imagem, 2: adicionar legenda

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setStep(2); // Avança para o próximo passo
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para enviar o post para o backend
    alert('Funcionalidade de criar post será implementada com um backend real!');
    // Limpar o formulário e fechar o modal
    setCaption('');
    setImageFile(null);
    setImagePreview(null);
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white'} rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col`}>
        {/* Header */}
        <div className="border-b border-gray-300 dark:border-gray-700 p-3 flex justify-between items-center">
          <button onClick={onClose} className="p-1">
            <XMarkIcon className="h-6 w-6" />
          </button>
          <h2 className="text-center font-semibold">Criar novo post</h2>
          {step === 2 && (
            <button 
              onClick={handleSubmit}
              className="text-blue-500 font-semibold"
            >
              Compartilhar
            </button>
          )}
          {step === 1 && <div className="w-6"></div>}
        </div>

        {/* Content */}
        <div className="flex-grow overflow-auto">
          {step === 1 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <svg aria-label="Ícone para representar mídia, como imagens ou vídeos" className="h-16 w-16 mb-4" fill="currentColor" role="img" viewBox="0 0 97.6 77.3">
                <path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path>
                <path d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path>
              </svg>
              <h3 className="text-xl font-light mb-4">Arraste as fotos e os vídeos aqui</h3>
              <label className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 cursor-pointer">
                Selecionar do computador
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange} 
                  className="hidden"
                  required
                />
              </label>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-2/3 bg-black flex items-center justify-center h-96 md:h-full">
                {imagePreview && (
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="max-h-full max-w-full object-contain"
                  />
                )}
              </div>
              <div className="md:w-1/3 p-4 border-l border-gray-300 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  {currentUser?.profilePicture ? (
                    <img 
                      src={currentUser.profilePicture} 
                      alt="Profile" 
                      className="h-8 w-8 rounded-full object-cover mr-2"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-700 mr-2"></div>
                  )}
                  <span className="font-semibold">{currentUser?.username || 'username'}</span>
                </div>
                <textarea 
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className={`${darkMode ? 'bg-gray-900' : 'bg-white'} w-full p-2 h-32 focus:outline-none resize-none`}
                  placeholder="Escreva uma legenda..."
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;