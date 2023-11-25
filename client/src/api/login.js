import axios from 'axios';

const login = async (userData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API_URL}login`,
      userData,
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};

export { login };
