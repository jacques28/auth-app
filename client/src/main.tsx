import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
import './index.css';
import { createBrowserRouter,RouterProvider,Route,Link } from "react-router-dom";
import Home from './pages/Home';
import NotFind from './pages/NotFind';


const router = createBrowserRouter(
  [
   { path: "/", element: <Home /> },
   { path: "*", element: <NotFind /> },
 ]
);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);