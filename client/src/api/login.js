import axios from 'axios';

/**
 * Function to perform user login by sending a POST request to the server.
 * @param {Object} userData - User data including emailAddress and password.
 * @returns {Promise} A Promise that resolves with the response data if successful, otherwise rejects with an error.
 */
const login = async (userData) => {
  try {
    // Send a POST request to the login endpoint with user data.
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API_URL}login`,
      userData, // User data (emailAddress, password.)
      {
        withCredentials: true, // Include credentials (cookies) in the request.
      }
    );
    // Return the response data if successful.
    return response;
  } catch (error) {
    // Log and re-throw the error if the request fails.
    console.error('Error: ', error);
    throw error; // Propagate the error to the caller.
  }
};

export { login };
