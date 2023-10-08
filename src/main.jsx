import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/404 pages/ErrorPage';
import Games from './Pages/Games/Games';
import Esports from './Pages/Esports/Esports';
import BLog from './Pages/Blog/BLog';
import Contact from './Pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/games",
        element: <Games></Games>
      },
      {
        path: "/esport",
        element: <Esports></Esports>
      },
      {
        path: "/blog",
        element: <BLog></BLog>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
