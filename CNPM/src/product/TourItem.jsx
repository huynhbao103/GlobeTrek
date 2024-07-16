import React from 'react';
import { Link } from 'react-router-dom';

const TourItem = ({ tour }) => {
  return (
    <Link to="/ProDetail">
      <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img className="w-full h-48 object-cover bg-cover
        " src={tour.image} alt={tour.title} />
        <div className="p-4">
          <div className="text-gray-600">{tour.location}</div>
          <div className="font-bold text-lg">{tour.title}</div>
          <div className="text-red-500 font-bold">{tour.price.toLocaleString()} VND</div>
          <div className="text-blue-500">{tour.rating} ⭐</div>
        </div>
      </div>
    </Link>
  );
};

export default TourItem;
