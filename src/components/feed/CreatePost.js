import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const CreatePost = () => {
  const { currentUser, darkMode } = useAppContext();
  const [caption, setCaption] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para enviar o post para o backend
    // Como estamos usando dados mockados, podemos apenas mostrar uma mensagem
    alert('Funcionalidade de criar post será implementada com um backend real!');
    // Limpar o formulário
    setCaption('');
    setImageFile(null);
    setImagePreview(null);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white'} border border-gray-300 rounded-md p-4 mb-6 max-w-xl mx-auto`}>
      <h2 className="text-xl font-semibold mb-4">Criar Novo Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Imagem</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} w-full p-2 rounded`}
            required
          />
          {imagePreview && (
            <div className="mt-2 relative pb-[60%]">
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Legenda</label>
          <textarea 
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} w-full p-2 rounded`}
            rows="3"
            placeholder="Escreva uma legenda..."
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600"
        >
          Publicar
        </button>
      </form>
    </div>
  );
};

export default CreatePost;