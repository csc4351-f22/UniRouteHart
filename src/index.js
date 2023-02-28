import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/pages/Login';
import GetRoute from './components/pages/GetRoute';
import Profile from './components/pages/Profile';
import Register from './components/pages/Register';

const AppLayout = () => {
  const [directions, setDirections] = useState(null);
  const [directionsRequest, setDirectionsRequest] = useState(null);

  return (
    <>
      <Navbar />
      <Outlet
        context={[
          // directions,
          // setDirections,
          directionsRequest,
          setDirectionsRequest,
        ]}
      />
      <App
        directions={directions}
        setDirections={setDirections}
        directionsRequest={directionsRequest}
        setDirectionsRequest={setDirectionsRequest}
      />
    </>
  );
};
/**Routes for the navbar that gives the path and element */
const router = createBrowserRouter([
  {
    /** This allows the navbar to cover everything in the navbar*/
    element: <AppLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/',
        element: <GetRoute />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
