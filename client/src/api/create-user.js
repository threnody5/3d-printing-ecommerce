import axios from 'axios';

/**
 * Function to send a POST request to create a new user via the server API.
 * @param {Object} userData - The data for creating a new user (e.g., email, password).
 * @returns {Promise} A Promise that resolves with the response data if successful, otherwise rejects with an error.
 */
const createUser = async (userData) => {
  try {
    // Send a POST request to create a new user via the server API.
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API_URL}create-user`, // API endpoint for creating a user.
      userData, // User data for creating a new user.
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

export { createUser };
