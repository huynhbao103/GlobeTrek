import React from 'react';

const seachDetour = () => {
  return (
    <div className="bg-[#FFF4EF] items-center justify-between  flex shadow-md h-28 w-96  p-6 m-6">
   
      <div className='flex flex-col  ml-4 justify-between'>
        <div className='flex flex-row  '>
        <p className='text-gray-400 text-sm mb-3  '>Bắt đầu từ </p>
     
        </div>
        <p className='font-bold text-lg text-orange-500'>300.000 VND</p>
      </div>
      <div className='flex items-center justify-center'>
        <button className='bg-orange-500 text-white px-4 py-2 rounded-md ml-3'>
          Tìm tour 
        </button>
      </div>
    </div>
  );
};
  
export default seachDetour;
  