import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/image/logo-2.png';
import SignInWith from '../SignInWith/SignInWith';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'


const Login = () => {

  const {signInUser} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
  
    const email = e.target.email.value;
    const password = e.target.password.value;
    
  
   if (email === '' || password === '') {
      showError('Please fill in all the fields');
    } else {
      signInUser(email, password)
        .then(() => {
          showSuccess('You have successfully Login');
          window.location.href = '/';
        })
        
        .catch((error) => {
          showError(error.message);
        });
    }
  
    console.log(email, password);
  };
  

  const showError = (message) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
    });
  };

  const showSuccess = (message) => {
    Swal.fire({
      icon: 'success',
      title: 'Success...',
      text: message,
    });
  };

    

    return (
        <div>
            <section className="bg-gray-500 h-screen pt-7">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className=" h-8 mr-2" src={image} alt="logo" />
          
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  
                 
                </div>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>
              <button
                type="submit"
                className="w-full bg-golden text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
                <Link to={'/register'}>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <a href="#" className=" text-blue-400 font-bold hover:underline ">Sign up</a>
              </p>
                </Link>
            </form>
            <SignInWith></SignInWith>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Login;