import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contacts from './containers/Contacts';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFoundPage from './containers/NotFound';
import Contact from './containers/Contact';

const router = createBrowserRouter([
  {
    path:"/contacts",
    element: <Contacts/>,
    errorElement:<NotFoundPage/>,
  },
  {
    path:"/contact/:id",
    element: <Contact/>,
    errorElement:<NotFoundPage/>,
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

