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
import News from './Components/News/News';
import NewsDetails from './Components/News/NewsDetails';
import Blog from './Components/Blog/Blog';
import Games from './Components/Games/Games';
import COntact from './Components/Contact/COntact';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import SignInWith from './Components/SignInWith/SignInWith';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';



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
      },
      {
        path: "/news",
        element: <Blog></Blog>,
      },
      {
        path: "/tournaments/:id",
        element: <PrivateRoute><TournamentDetails></TournamentDetails></PrivateRoute>,
        loader : () => fetch('/tournament.json')
      },
      {
        path: "/blog",
        element: <News></News>,
        loader: ()=> fetch('/news.json')
      },
      {
        path: "/news/:id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: ()=> fetch('/news.json')
      },
      {
        path: "/news",
        element: <Blog></Blog>,
      },
      {
        path: "/games",
        element: <PrivateRoute><Games></Games></PrivateRoute>,
      },
      {
        path: "/contact",
        element: <COntact></COntact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      }, {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/signinwith",
        element: <SignInWith></SignInWith>
      },
      
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
