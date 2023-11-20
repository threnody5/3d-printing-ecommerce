import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './styles.css';

const SignUp = () => {
  const [emailAddress, setEmailAddress] = useState('test1@test.com');
  const [password, setPassword] = useState('Temppassword1!');
  const [reEnterPassword, setReEnterPassword] = useState('Temppassword1!');
  const [errormessage, setErrorMessage] = useState([]);

  const createAccountHandler = (e) => {
    e.preventDefault();

    setErrorMessage([]);

    const validate = [];

    if (password === reEnterPassword) {
      console.log('Passwords are the same');
      const passwordStrength = new RegExp(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d@$!%*?&]{6,}$'
      );

      if (passwordStrength.test(password)) {
        console.log('Password is strong enough');

        const data = {
          emailAddress: emailAddress,
          password: password,
        };

        //TODO: Probably find a way of salting the password before sending it to the server.
        //TODO: Move this API call into a function and store in the api directory.
        axios
          .post(`${import.meta.env.VITE_BASE_API_URL}create-user`, data, {
            withCredentials: true,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        validate.push(
          'Password is not strong enough. Please include at least one lowercase letter, one uppercase letter, one number, and a minimum length of 6 characters.'
        );
      }
    } else {
      validate.push('Passwords are not the same.');
    }
    setErrorMessage(validate);
  };

  return (
    <main className='signup-container__main'>
      {errormessage.length > 0 && <div>{errormessage}</div>}
      <h2 className='signup-container__title'>Create Account</h2>
      <form
        className='signup-container__form'
        id='signup-form'
      >
        <label className='signup-container__label'>
          Email Address:
          <input
            className='signup-container__input'
            type='text'
            onChange={(e) => {
              setEmailAddress(e.target.value);
            }}
            value={emailAddress}
            id='email-address-input'
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
            id='password-input'
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
            id='reEnter-password-input'
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
