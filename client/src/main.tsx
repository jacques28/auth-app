import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import NotFind from './pages/NotFind';
import Login from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFind /> },
    { path: "/login", element: <Login />},
    { path: "/signup", element: <Signup />}
  ]
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);