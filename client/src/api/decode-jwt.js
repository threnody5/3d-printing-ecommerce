import { jwtDecode } from 'jwt-decode';

/**
 * Function to decode a JSON Web Token (JWT) and extract its payload data.
 * @param {string} token - The JWT string to be decoded.
 * @returns {object} Decoded payload data from the JWT.
 */
const decodeJWT = (token) => {
  // Decode the provided JWT token to extract its payload data.
  return jwtDecode(token); // Returns the decoded payload object.
};

export { decodeJWT };
