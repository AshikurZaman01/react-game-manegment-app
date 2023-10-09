import React, { useEffect, useState } from 'react';
import GamesCcard from './GamesCcard';

const Games = () => {
    const [games, setGames] = useState(null);

  useEffect(() => {
    fetch('/games.json')
      .then(res => res.json())
      .then(data => setGames(data))
      
  }, []);

    return (
        <div>
            <div>
                <h1 className=' text-center text-5xl font-bold my-10'><span className='text-golden'>Trending</span> Games</h1>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-3 mx-auto'>
        {
          games?.map(game => <GamesCcard key={game.id} game={game}></GamesCcard>)
        
        }
      </div>
        </div>
    );
};

export default Games;