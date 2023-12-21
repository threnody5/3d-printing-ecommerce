import axios from 'axios';

/**
 * Function to verify a user's existence or validity by sending a POST request to the server.
 * @param {string} userID - The unique identifier of the user to verify.
 * @returns {Promise} A Promise that resolves with the response data if successful, otherwise rejects with an error.
 */
const verifyUser = async (userID) => {
  try {
    // Send a POST request to verify the user's existence or validity.
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API_URL}verify-user`, // API endpoint for user verification.
      userID, // User ID to be verified.
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

export { verifyUser };
