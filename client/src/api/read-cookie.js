import Cookies from 'universal-cookie';

/**
 * Function to read a specific cookie value using universal-cookie library.
 * @param {string} accessCookie - The name of the cookie to read.
 * @returns {string|null} The value of the specified cookie, or null if the cookie doesn't exist.
 */
const readCookie = (accessCookie) => {
  const cookies = new Cookies(); // Create a new instance of universal-cookie.

  // Get the value of the specified cookie.
  const accessTokenState = cookies.get(accessCookie);

  return accessTokenState; // Return the value of the cookie or null if not found.
};

export { readCookie };
