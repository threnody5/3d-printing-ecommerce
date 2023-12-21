import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';
import { store } from './store.js';
import { Provider } from 'react-redux';
import Verification from './components/Verification.jsx';
import './index.css';

//TODO: Find a cleaner way to include navigation on each page instead of adding the component to each router element.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Verification />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
