import React from 'react';

const TourInfo = () => {
  return (
    <div className="bg-gray-100 flex shadow-md h-28 w-96 p-6 m-6  cursor-pointer">
      <div className='bg-green-300 flex rounded-full w-16 h-16 justify-center items-center'>
        <p className='text-white font-bold text-3xl'>9.2</p>
      </div>
      <div className='flex flex-col justify-center ml-4'>
        <div className='flex flex-row  '>
        <p className='text-green-500 font-bold text-lg'>Tốt</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-green-500 font-bold"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        </div>
        <p className='font-bold text-md'>từ 26 đánh giá</p>
      </div>
    </div>
  );
};

export default TourInfo;
