import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome'; // Đảm bảo bạn đã import file cấu hình FontAwesome


function Location() {
  return (
    <div className="container mx-auto my-4  ">
      <div className=" flex items-center  p-4  ">
        <div className="flex items-center ">
        <FontAwesomeIcon icon="fa-solid fa-location-dot" />
          <div className=" p-2 text-black text-sm font-bold sm:text-base ">
            Vị trí hiện tại của bạn
          </div>
        </div>

      <div className="flex items-center">
  <div className="bg-white rounded-full border border-[#4CA771] p-2 flex items-center">
    <div className="text-black font-bold sm:text-base text-sm mr-2 whitespace-nowrap">
      Việt Nam
    </div>
    <div className="w-[0.5px] h-7 bg-[#4CA771]"></div>
    <div className="text-[#4CA771] ml-1 font-bold sm:text-base text-sm cursor-pointer whitespace-nowrap">
      Thay đổi
    </div>
  </div>
</div>

      </div>
      <div className="bg-[#4CA771] rounded-full w-72 mt-4 p-2 font-bold justify-center text-white text-sm flex items-center">
        <div className='px-2'>Xem các hoạt động ở vị trí của bạn </div>
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
      </div>
    </div>
  )
}

export default Location
