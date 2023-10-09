import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NewsCard = ({news}) => {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <div>
            <div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="max-w-xs mx-auto mt-6">
            <Link to={`/news/${news.id}`}  className="cursor-pointer relative block transform hover:-translate-y-2 transition-transform duration-500">
                <div className="bg-golden  rounded-lg overflow-hidden shadow-lg">
                <img src={news.image} className="w-full h-56 object-cover" alt={news.title} />
                <div className="p-4">
                    <h1 className='text-xl text-white'>{news.title}</h1>
                </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black to-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
            </div>
            </div>
        </div>
    );
};

export default NewsCard;