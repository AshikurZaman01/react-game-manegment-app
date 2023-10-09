import React, { useState } from 'react';
import image from '../../assets/image/logo-2.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
    const user = true;
  return (
    <div>
      <nav className="bg-black border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center">
                <img src={image} className="h-8 mr-3" alt="Logo" />
            </a>
            <div className="flex md:order-2">
           
           {
             user ?  <button className='text-xl font-semibold bg-[#eec645] text-white px-6 rounded-full'>Login</button> : 
              <div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt="Profile Picture"
                    className="w-full h-full object-cover"
                    />
                </div>
 
                <div>
                    <p className="text-lg font-semibold">John Doe</p>
                </div>
 
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
                    Logout
                </button>
     </div>
              </div>
           }
 
             <button
               type="button"
               onClick={toggleMobileMenu}
               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
               aria-expanded={isMobileMenuOpen}
             >
               
               <svg
                 className="w-5 h-5"
                 aria-hidden="true"
                 fill="none"
                 viewBox="0 0 17 14"
               >
                 <path
                   stroke="currentColor"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   d="M1 1h15M1 7h15M1 13h15"
                 />
                 
               </svg>
             </button>
           </div>
           <div
             className={`${
               isMobileMenuOpen ? 'block' : 'hidden'
             } md:block items-center justify-between w-full md:w-auto md:order-1`}
             id="navbar-sticky"
           >
             <ul className="flex flex-col p-4 md:p-0 mt-4   md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-2xl text-[#eec645] font-bold">
               <li>
                 <NavLink
                   to="/"
                   activeClassName="underline"
                   className="hover:underline"
                   aria-current="page"
                 >
                   Home
                 </NavLink>
               </li>
               <li>
                 <NavLink
                   to="/games"
                   activeClassName="underline"
                   className="hover:underline"
                   aria-current="page"
                 >
                   Games
                 </NavLink>
               </li>
              
               <li>
                 <NavLink
                   to="/blog"
                   activeClassName="underline"
                   className="hover:underline"
                   aria-current="page"
                 >
                   Blog
                 </NavLink>
               </li>
               <li>
                 <NavLink
                   to="/contact"
                   activeClassName="underline"
                   className="hover:underline"
                   aria-current="page"
                 >
                   Contact
                 </NavLink>
               </li>
             </ul>
           </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
