import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../api/login';

import './styles.css';
const SignIn = () => {
  const [emailAddress, setEmailAddress] = useState('test9@test.com');
  const [password, setPassword] = useState('Temppassword1!');
  const [errorMessage, setErrorMessage] = useState();

  const loginUser = async (e) => {
    e.preventDefault();

    setErrorMessage([]);

    const validate = [];

    const userData = {
      emailAddress: emailAddress,
      password: password,
    };

    try {
      const response = await login(userData);
    } catch (error) {
      validate.push(error.response.data.message);
    }
    setErrorMessage(validate);
  };

  return (
    <main className='signin-container__main'>
      {errorMessage && <div>{errorMessage}</div>}
      <h2 className='signin-container__title'>Sign In</h2>
      <form className='signin-container__form'>
        <label className='signin-container__label'>
          Email Address:
          <input
            className='signin-container__input'
            type='text'
            onChange={(e) => {
              setEmailAddress(e.target.value);
            }}
            value={emailAddress}
            id='email-address-input'
          />
        </label>
        <label className='signin-container__label'>
          Password:
          <input
            className='signin-container__input'
            type='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            id='password-input'
          />
        </label>
        <div className='signin-container__button-container'>
          <button
            className='signin-container__button'
            onClick={(e) => loginUser(e)}
          >
            Sign In
          </button>
        </div>
      </form>
      <div className='signin-container__no-account'>
        Don't have an account? <Link to='/sign-up'>Sign Up</Link>
      </div>
    </main>
  );
};

export default SignIn;
