import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

const TournamentDetails = () => {
    const { id } = useParams();
    const tournamentData = useLoaderData();

    const tournaments = tournamentData.find( tournament => tournament.id === parseInt(id));
    
    const handleJoinButton = () => {
        Swal.fire(
            'Successfully Joined This Tournament',
            'You clicked the button!',
            
          )
    }


    return (
        <div>
            <div className='w-[70%] bg-teal-500 mx-auto  border border-golden'>
                <div className='w-[100%] h-[250px]'>
                    <img className='w-[100%] h-[100%]' src={tournaments.image} alt="" />
                </div>
                <div className='flex justify-between'>
                    <h2 className='text-3xl font-semibold p-4 text-white'>{tournaments.title}</h2>
                    <h3 className='text-3xl font-semibold p-4 text-white'><span className='text-golden'>$</span>{tournaments.entry_fee}</h3>
                </div>
                <div>
                    <p className='p-4 text-justify '>{tournaments.description}</p>
                </div>
                <button onClick={handleJoinButton} className='text-center block mx-auto bg-golden px-6 py-2 rounded-md text-white text-xl'>Join Tournament</button>
                <div>

                </div>
            </div>
        </div>
    );
};

export default TournamentDetails;
