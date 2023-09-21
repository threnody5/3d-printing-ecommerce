import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OurStory from './pages/OurStory';
import Reviews from './pages/Reviews';
import Rewards from './pages/Rewards';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
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
]);
