import React, { useState } from 'react';
import TournamentCard from './TournamentCard';

const Tournaments = ({tournaments}) => {

    const [isShow , setIsShow] = useState(false);


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 container text-center mx-auto mb-[40px] gap-6'>
                {
                    isShow ?
                    tournaments?.map(tournament => <TournamentCard key={tournament.id} tournament={tournament}></TournamentCard>) : tournaments?.slice(0,4).map(tournament => <TournamentCard key={tournament.id} tournament={tournament}></TournamentCard>)
                }
            </div>
            <div className='text-center text-3xl'>
                {
                    tournaments.length > 4 ?   
                    <button onClick={() => setIsShow(!isShow)}>{isShow ? 'Hide' : 'Show More'}</button> :
                    <button>No more tournaments</button>
                }
            </div>
        </div>
    );
};

export default Tournaments;