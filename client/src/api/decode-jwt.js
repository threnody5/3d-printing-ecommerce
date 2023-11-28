import { jwtDecode } from 'jwt-decode';

const decodeJWT = (token) => {
  return jwtDecode(token);
};

export { decodeJWT };
