import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Tournaments from '../Tournaments/Tournaments';
import LatestGame from '../LatestGame/LatestGame';

const Home = () => {

    const tournaments = useLoaderData()

    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <div>
                <div>
                    <h1 className='text-center text-6xl my-[100px]'><span className='text-golden'>Tour</span>naments</h1>
                </div>
                <div>
                    <Tournaments tournaments={tournaments}></Tournaments>
                </div>
                <div>
                    <LatestGame></LatestGame>
                </div>
            </div>
        </div>
    );
};

export default Home;