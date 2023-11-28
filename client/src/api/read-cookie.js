import Cookies from 'universal-cookie';

const readCookie = (accessCookie) => {
  const cookies = new Cookies();

  const accessTokenState = cookies.get(accessCookie);
  return accessTokenState;
};

export { readCookie };
