import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/image/logo-2.png';
import SignInWith from '../SignInWith/SignInWith';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'


const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
  
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const terms = e.target.terms.checked;
  
    if (password.length < 6) {
      showError('Password must be at least 6 characters long');
    } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      showError('Password must contain at least one letter and one number');
    } else if (!terms) {
      showError('You must accept the terms and conditions');
    } else if (email === '' || password === '' || name === '') {
      showError('Please fill in all the fields');
    } else {
      createUser(email, password)
        .then(() => {
          showSuccess('You have successfully registered');
          window.location.href = '/';
        })
        
        .catch((error) => {
          showError(error.message);
        });
    }
  
    console.log(name, email, password, terms);
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
            <div>
            <section className="bg-gray-500 h-screen pt-7">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className=" h-8 mr-2" src={image} alt="logo" />
         
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form onSubmit={handleRegister} className="space-y-4 md:space-y-6" >
            <div>
                <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input
                  type="Name"
                  name="name"
                  id="Name"
                  placeholder="Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  
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
                  
                />
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                    I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" >Terms and Conditions</a>
                  </label>
                </div>
              </div>
              <button 
                type="submit"
                className="w-full text-white bg-golden focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              
              <Link to={'/login'}><p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <a className="font-bold text-blue-400 hover:underline dark:text-primary-500">Login here</a>

              </p></Link>
            </form>
          </div>
          <SignInWith></SignInWith>
        </div>
      </div>
    </section>
            </div>
        </div>
    );
};

export default Register;