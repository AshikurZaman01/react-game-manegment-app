import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Tournaments from '../Tournaments/Tournaments';

const Home = () => {

    const tournaments = useLoaderData()

    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <div>
                <div>
                    <h1 className='text-center text-6xl my-[100px]'>Tournaments</h1>
                </div>
                <div>
                    <Tournaments tournaments={tournaments}></Tournaments>
                </div>
            </div>
        </div>
    );
};

export default Home;