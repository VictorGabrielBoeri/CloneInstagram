import axios from 'axios';

// Unsplash API for images
const unsplashAPI = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Y7yrl5PUgciRN3Df7cZl5xw7cQ1kWhJuetIi0TZLo20' // Sua Access Key do Unsplash
  }
});

// Random User API for user data
const randomUserAPI = axios.create({
  baseURL: 'https://randomuser.me/api'
});

export const fetchImages = async (count = 10) => {
  try {
    const response = await unsplashAPI.get('/photos/random', {
      params: { count }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

export const fetchUsers = async (count = 10) => {
  try {
    const response = await randomUserAPI.get('/', {
      params: { results: count }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

// Function to generate mock posts combining users and images
export const generatePosts = async (count = 10) => {
  try {
    const users = await fetchUsers(count);
    const images = await fetchImages(count);
    
    return images.map((image, index) => {
      const user = users[index % users.length];
      return {
        id: image.id,
        imageUrl: image.urls.regular,
        caption: image.description || image.alt_description || 'Beautiful moment captured',
        likes: Math.floor(Math.random() * 1000),
        timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
        user: {
          id: user.login.uuid,
          username: user.login.username,
          name: `${user.name.first} ${user.name.last}`,
          profilePicture: user.picture.medium
        },
        comments: []
      };
    });
  } catch (error) {
    console.error('Error generating posts:', error);
    return [];
  }
};