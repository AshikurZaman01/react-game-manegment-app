import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LatestGame = () => {
    useEffect(() => {
        AOS.init(); 
      }, []);

    return (
        <div>
            <div  data-aos="fade-up"
     data-aos-duration="3000" className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 h-screen flex flex-col justify-center items-center my-[100px]'>
                <div className=' my-10 mx-auto flex justify-between items-center text-center gap-6'>
                    <div className='w-[600px]'>
                         <h1 className='text-white text-4xl font-bold mb-6'><span className='text-golden'>FIFA SOCCER 24</span> IS RELEASED!</h1>
                        <p className='text-white text-xl font-bold'>FIFA 24 is a football video game developed by EA Sports and published by Electronic Arts for Microsoft Windows, PlayStation 4, and Xbox One. It was released on September 12, 2019, for Microsoft Windows, PlayStation 4, and Xbox One. It is the 24th installment in the FIFA series, and the first to be developed by EA Sports.</p>

                    </div>
                    <div>
                        <img  src={'https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2018/01/fifa-release-image-530x370.jpg'} alt="" className=' rounded-lg shadow-lg' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestGame;
