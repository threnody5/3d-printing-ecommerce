import { readCookie } from '../api/read-cookie';
import { decodeJWT } from '../api/decode-jwt';

/**
 * Function to retrieve the authenticated user's ID from the decoded JWT stored in a cookie.
 * @returns {string|null} The authenticated user's ID extracted from the decoded JWT, or null if an error occurs.
 */
const authStatus = () => {
  try {
    // Retrieve the user's JWT token from the 'access_token' cookie.
    const userCookie = readCookie('access_token');
    // Decode the JWT to extract the user's ID.
    const decodedJWT = decodeJWT(userCookie);
    // Return the authenticated user's ID extracted from the decoded JWT.
    return decodedJWT.userID;
  } catch (error) {
    // Log any errors encountered during the authentication status check.
    console.error('Error From Auth Status: ', error);
    // Return null in case of an error, indicating the inability to retrieve the user's ID.
    return null;
  }
};

export { authStatus };
