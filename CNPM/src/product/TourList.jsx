import React from 'react';
import TourItem from './TourItem';

const ToursList = ({ tours, view }) => {
  return (
    <div className='  mx-auto items-center justify-center bg-cover object-cover'>
    <div className={`${view === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4' : 'space-y-4 p-4'}`}>
      {tours.map((tour, index) => (
        <TourItem key={index} tour={tour} />
      ))}
    </div>
    </div>
  );
};
    
export default ToursList;
