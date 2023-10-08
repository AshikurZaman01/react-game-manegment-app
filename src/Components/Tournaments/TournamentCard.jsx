import React from 'react';
import { Link } from 'react-router-dom';

const TournamentCard = ({ tournament }) => {
  const {id, title, image, entry_fee, details, description } = tournament;

  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className='mx-auto'
    >
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            className="h-full w-full object-cover"
            alt="Tournament"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-blinker text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {title}
            </p>
            <p className="text-orange-500 block font-blinker text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${entry_fee}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {details}
          </p>
        </div>
        <div className="p-6 pt-0">
          
          <Link to={`/tournaments/${id}`}>
          <button
            className="block  w-full select-none rounded-lg bg-golden text-white text-2xl py-3 px-6 text-center align-middle font-blinker font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            View Details
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
