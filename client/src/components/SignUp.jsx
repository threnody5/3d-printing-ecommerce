import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../api/create-user';

import './styles.css';

const SignUp = () => {
  const [emailAddress, setEmailAddress] = useState('test1@test.com');
  const [password, setPassword] = useState('Temppassword1!');
  const [reEnterPassword, setReEnterPassword] = useState('Temppassword1!');
  const [errormessage, setErrorMessage] = useState([]);
  const [successMessage, setSuccessMessage] = useState();

  const createAccountHandler = async (e) => {
    e.preventDefault();

    setErrorMessage([]);

    const validate = [];

    if (password === reEnterPassword) {
      const passwordStrength = new RegExp(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d@$!%*?&]{6,}$'
      );

      if (passwordStrength.test(password)) {
        const userData = {
          emailAddress: emailAddress,
          password: password,
        };

        try {
          const response = await createUser(userData);
          setSuccessMessage(response.data.message);

          setTimeout(() => {
            setSuccessMessage('');
          }, 5000);
        } catch (error) {
          validate.push(error.response.data.message);
          console.error('Error: ', error);
        }
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
      {successMessage && <div>{successMessage}</div>}
      {errormessage && <div>{errormessage}</div>}
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
