import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

const Account = () => {
  //TODO: Make it so if the user is not logged in, sign in is in the navigation bar, if they are signed in, account is in the navigation bar with a dropdown menu and there is an option to sign out.

  //TODO: Handle sign in and sign up authentication before cart functionality or anything else

  //TODO: User should be able to make an account and store their authentication information on MySQL server.
  return (
    <main>
      <h2>Don't have an account?</h2>
      <SignUp />
      <h2>Already have an account?</h2>
      <SignIn />
    </main>
  );
};

export default Account;
