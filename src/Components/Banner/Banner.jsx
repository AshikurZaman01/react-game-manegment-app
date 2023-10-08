import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Banner = () => {

    useEffect(() => {
        AOS.init(); 
      }, []);

    return (
        <div>
        <div className="relative bg-cover bg-center h-[91vh]" 
             style={{backgroundImage: `url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')`, 
        }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container mx-auto relative z-10 text-white flex flex-col justify-center h-full text-center" >
        <h2 data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="2000" className="text-3xl font-semibold leading-tight mb-4">
          Welcome to Our Gaming Event
        </h2>
        <h1 data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="2000" className='text-6xl text-golden font-blinker'>
            Gamer's Paradise Awaits You!
        </h1>

        <Link to={'/register'}>
        <button data-aos="fade-up"
     data-aos-duration="2500" className="mt-[40px] text-4xl font-semibold text-golden bg-purple-800 w-[600px] mx-auto rounded-md px-4 py-2">
            Join the Ultimate Gaming Extravaganza!
        </button>
        </Link>
       
      </div>
    </div>
        </div>
    );
};

export default Banner;