import React from 'react';
import Swal from 'sweetalert2'

const GamesCcard = ({game}) => {

    const handleCart = ()=>
    {
        Swal.fire(
            'Add to Cart Successful',
            'You clicked the button!',
            
          )
    }

    return (
        <div className='mx-auto'>
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
      src={game.image}
      className="h-full w-full object-cover"
      alt="game"
    />
  </div>
  <div className="p-6">
    <div className="mb-2 flex items-center justify-between">
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        {game.name}
      </p>
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        ${game.price}
      </p>
    </div>
    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
      {game.description}
    </p>
  </div>
  <div className="p-6 pt-0">
    <button onClick={handleCart}
      className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Add to Cart
    </button>
  </div>
</div>
        </div>
    );
};

export default GamesCcard;