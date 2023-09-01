import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './components/Navigation.jsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';
import './index.css';

//TODO: Find a cleaner way to include navigation on each page instead of adding the component to each router element.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>{/* <Navigation /> */}</RouterProvider>
  </React.StrictMode>
);
