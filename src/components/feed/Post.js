import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon as HeartOutline, ChatBubbleLeftIcon, BookmarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { useAppContext } from '../../context/AppContext';

const Post = ({ post }) => {
  const { likePost, unlikePost, addComment, darkMode } = useAppContext();
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [showComments, setShowComments] = useState(false);
  
  const handleLike = () => {
    if (!liked) {
      likePost(post.id);
      setLiked(true);
    } else {
      unlikePost(post.id);
      setLiked(false);
    }
  };
  
  const handleComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(post.id, comment);
      setComment('');
    }
  };
  
  // Format timestamp to relative time
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = (now - date) / 1000; // seconds
    
    if (diff < 60) return 'agora mesmo';
    if (diff < 3600) return `${Math.floor(diff / 60)}m atrás`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h atrás`;
    return `${Math.floor(diff / 86400)}d atrás`;
  };
  
  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white'} border-0 mb-6 max-w-xl mx-auto`}>
      {/* Post Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <img 
            src={post.user.profilePicture} 
            alt={post.user.username} 
            className="h-8 w-8 rounded-full object-cover mr-3"
          />
          <div>
            <Link to={`/profile/${post.user.username}`} className="font-semibold text-sm">
              {post.user.username}
            </Link>
            <div className="text-xs text-gray-500">{formatTime(post.timestamp)}</div>
          </div>
        </div>
        <button className="text-gray-500">...</button>
      </div>
      
      {/* Post Image */}
      <div>
        <img 
          src={post.imageUrl} 
          alt={post.caption} 
          className="w-full"
        />
      </div>
      
      {/* Post Actions */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-4">
            <button onClick={handleLike} className="focus:outline-none">
              {liked ? (
                <HeartSolid className="h-6 w-6 text-red-500" />
              ) : (
                <HeartOutline className="h-6 w-6" />
              )}
            </button>
            <button onClick={() => setShowComments(!showComments)} className="focus:outline-none">
              <ChatBubbleLeftIcon className="h-6 w-6" />
            </button>
            <button className="focus:outline-none">
              <PaperAirplaneIcon className="h-6 w-6 rotate-45" />
            </button>
          </div>
          <button className="focus:outline-none">
            <BookmarkIcon className="h-6 w-6" />
          </button>
        </div>
        
        {/* Likes */}
        <div className="font-semibold text-sm">
          {post.likes} curtidas
        </div>
        
        {/* Caption */}
        <div className="mt-1 text-sm">
          <Link to={`/profile/${post.user.username}`} className="font-semibold mr-2">
            {post.user.username}
          </Link>
          <span>{post.caption}</span>
        </div>
        
        {/* Comments */}
        {post.comments && post.comments.length > 0 && (
          <div className="mt-2">
            <button 
              onClick={() => setShowComments(!showComments)} 
              className="text-sm text-gray-500"
            >
              Ver todos os {post.comments.length} comentários
            </button>
            {showComments && post.comments.map(comment => (
              <div key={comment.id} className="text-sm mb-1">
                <Link to={`/profile/${comment.username}`} className="font-semibold mr-1">
                  {comment.username}
                </Link>
                <span>{comment.text}</span>
              </div>
            ))}
          </div>
        )}
        
        {/* Comment Form */}
        <form onSubmit={handleComment} className={`mt-3 pt-3 flex items-center ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <input
            type="text"
            placeholder="Adicione um comentário..."
            className={`${darkMode ? 'bg-black text-white' : 'bg-white'} w-full focus:outline-none text-sm`}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button 
            type="submit" 
            disabled={!comment.trim()}
            className={`text-blue-500 font-semibold text-sm ${!comment.trim() ? 'opacity-50' : ''}`}
          >
            Publicar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;