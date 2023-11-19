import { Link } from 'react-router-dom';

import './styles.css';

const SignUp = () => {
  return (
    <main className='signup-container__main'>
      <h2 className='signup-container__title'>Create Account</h2>
      <form className='signup-container__form'>
        <label className='signup-container__label'>
          Email Address:
          <input
            className='signup-container__input'
            type='text'
          />
        </label>
        <label className='signup-container__label'>
          Password:
          <input
            className='signup-container__input'
            type='password'
          />
        </label>
        <label className='signup-container__label'>
          Re-Enter Password:
          <input
            className='signup-container__input'
            type='password'
          />
        </label>
        <div className='signup-container__button-container'>
          <button className='signup-container__button'>Create Account</button>
        </div>
      </form>
      <div className='signup-container__yes-account'>
        Already have an account? <Link to='/sign-in'>Sign In</Link>
      </div>
    </main>
  );
};

export default SignUp;
