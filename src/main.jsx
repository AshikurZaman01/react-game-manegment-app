import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Root/Root';
import Home from './Components/Home/Home';
import ErrorPage from './Components/404/ErrorPage';
import TournamentDetails from './Components/Tournaments/TournamentDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : () => fetch('/tournament.json')
      },{
        path: "/tournaments/:id",
        element: <TournamentDetails></TournamentDetails>,
        loader : () => fetch('/tournament.json')
      }
     
      
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
