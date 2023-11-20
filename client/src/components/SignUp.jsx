import { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const SignUp = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');

  const createAccountHandler = (e) => {
    e.preventDefault();

    if (password === reEnterPassword) {
      console.log('Passwords are the same');
    } else {
      console.log('Passwords are not the same');
    }
  };

  return (
    <main className='signup-container__main'>
      <h2 className='signup-container__title'>Create Account</h2>
      <form className='signup-container__form'>
        <label className='signup-container__label'>
          Email Address:
          <input
            className='signup-container__input'
            type='text'
            onChange={(e) => {
              setEmailAddress(e.target.value);
            }}
            value={emailAddress}
          />
        </label>
        <label className='signup-container__label'>
          Password:
          <input
            className='signup-container__input'
            type='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </label>
        <label className='signup-container__label'>
          Re-Enter Password:
          <input
            className='signup-container__input'
            type='password'
            onChange={(e) => {
              setReEnterPassword(e.target.value);
            }}
            value={reEnterPassword}
          />
        </label>
        <div className='signup-container__button-container'>
          <button
            className='signup-container__button'
            onClick={(e) => createAccountHandler(e)}
          >
            Create Account
          </button>
        </div>
      </form>
      <div className='signup-container__yes-account'>
        Already have an account? <Link to='/sign-in'>Sign In</Link>
      </div>
    </main>
  );
};

export default SignUp;
