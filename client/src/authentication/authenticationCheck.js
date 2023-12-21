import axios from 'axios';

const authenticationCheck = async (userDataCookie) => {
  const cookieObject = {
    userDataCookie: userDataCookie,
  };

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API_URL}authentication-check`,
      cookieObject,
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

export { authenticationCheck };
