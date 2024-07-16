import React from 'react';

function TourCard({ title, price, oldPrice, discount }) {
  return (
    <div className="border p-4 mb-4 rounded shadow">
      <h2 className="font-bold text-lg">{title}</h2>
      <a href="#" className="text-[#4CA771]">Xem chi tiết</a>
      <div className="mt-2 flex items-center">
        {oldPrice && (
          <span className="line-through text-gray-500 mr-2">{oldPrice}</span>
        )}
        <span className="text-orange-500 font-bold">{price}</span>
        {discount && (
          <span className="bg-red-100 text-red-500 px-2 ml-2 rounded">{discount}</span>
        )}
      </div>
      <button className="bg-[#4CA771] text-white py-2 px-4 rounded mt-2">Chọn vé</button>
    </div>
  );
}

export default TourCard;
