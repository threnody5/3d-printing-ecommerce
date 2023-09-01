import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OurStory from './pages/OurStory';
import Reviews from './pages/Reviews';
import Rewards from './pages/Rewards';
import Navigation from './components/Navigation';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navigation />
        <LandingPage />
      </>
    ),
  },
  {
    path: '/our-story',
    element: (
      <>
        <Navigation />
        <OurStory />
      </>
    ),
  },
  {
    path: '/reviews',
    element: (
      <>
        <Navigation />
        <Reviews />
      </>
    ),
  },
  {
    path: '/rewards',
    element: (
      <>
        <Navigation />
        <Rewards />
      </>
    ),
  },
]);
