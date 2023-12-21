import { useEffect } from 'react';
import { authenticationCheck } from '../authentication/authenticationCheck';
import { readCookie } from '../api/read-cookie';
import { useDispatch } from 'react-redux';
import { setAuthState } from '../authentication/authSlice';
// import { authStatus } from '../api/auth-status';

//TODO: Figure out how to get this to wait for the promise to fulfill before returning the results
const Verification = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const authCookie = readCookie('access_token');
    console.log('Auth Cookie: ', authCookie);
    if (authCookie === undefined) {
      return undefined;
    } else {
      try {
        const authCall = async () => {
          const authStatus = await authenticationCheck(authCookie);
          console.log('Auth Status: ', authStatus);
          // dispatch(setAuthState());
        };

        authCall();
      } catch (error) {
        console.error('Error From Authentication: ', error);
        throw new Error();
      }
    }
  }, []);
};

export default Verification;
