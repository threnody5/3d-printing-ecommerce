import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OurStory from './pages/OurStory';
import Reviews from './pages/Reviews';
import Rewards from './pages/Rewards';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Account from './pages/Account';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './index.css';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className='app'>
        <Navigation />
        <LandingPage />
        <Footer />
      </div>
    ),
  },
  {
    path: '/our-story',
    element: (
      <div className='app'>
        <Navigation />
        <OurStory />
        <Footer />
      </div>
    ),
  },
  {
    path: '/reviews',
    element: (
      <div className='app'>
        <Navigation />
        <Reviews />
        <Footer />
      </div>
    ),
  },
  {
    path: '/rewards',
    element: (
      <div className='app'>
        <Navigation />
        <Rewards />
        <Footer />
      </div>
    ),
  },
  {
    path: '/products',
    element: (
      <div className='app'>
        <Navigation />
        <Products />
        <Footer />
      </div>
    ),
  },
  {
    path: '/cart',
    element: (
      <div className='app'>
        <Navigation />
        <Cart />
        <Footer />
      </div>
    ),
  },
  {
    path: '/account',
    element: (
      <div className='app'>
        <Navigation />
        <Account />
        <Footer />
      </div>
    ),
  },
  {
    path: '/sign-in',
    element: (
      <div className='app'>
        <Navigation />
        <SignIn />
        <Footer />
      </div>
    ),
  },
  {
    path: '/sign-up',
    element: (
      <div className='app'>
        <Navigation />
        <SignUp />
        <Footer />
      </div>
    ),
  },
]);
