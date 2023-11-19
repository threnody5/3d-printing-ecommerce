import { Link } from 'react-router-dom';

import './styles.css';
const SignIn = () => {
  return (
    <main className='signin-container__main'>
      <h2 className='signin-container__title'>Sign In</h2>
      <form className='signin-container__form'>
        <label className='signin-container__label'>
          Email Address:
          <input
            className='signin-container__input'
            type='text'
          />
        </label>
        <label className='signin-container__label'>
          Password:
          <input
            className='signin-container__input'
            type='password'
          />
        </label>
      </form>
      <div className='signin-container__no-account'>
        Don't have an account? <Link to='/sign-up'>Sign Up</Link>
      </div>
    </main>
  );
};

export default SignIn;
