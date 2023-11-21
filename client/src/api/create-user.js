import axios from 'axios';

const createUser = async (userData) => {
  //TODO: Probably find a way of salting the password before sending it to the server.
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API_URL}create-user`,
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

export { createUser };
