import React from "react";
import imgtopbody from "../assets/imgtopbody.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome"; // Đảm bảo bạn đã import file cấu hình FontAwesome

function Topbody() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center w-full">
        <div className="w-[83%] pt-[180px]">
          <h1 className="font-bold text-5xl mb-7">Tour</h1>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-[83%] mx-2 flex flex-col items-center">
            <img
              className="w-full h-[300px] object-cover"
              src={imgtopbody}
              alt="Tour"
            />
            <div className="w-full flex justify-center mt-[-50px]">
              <div className="flex flex-col md:flex-row sm:w-[65%] w-full bg-white rounded-md shadow-lg p-4 items-center">
                <div className="relative flex items-center w-full mb-2 md:mb-0 md:mr-2">
                  <FontAwesomeIcon
                    icon="magnifying-glass"
                    className="absolute left-4 text-gray-500"
                  />
                  <input
                    type="text"
                    className="flex-grow rounded-sm pl-10 pr-4 text-sm py-3 ml-2 border border-[#4CA771] focus:outline-none focus:ring-2 focus:ring-[#4CA771] focus:border-[#4CA771]"
                    placeholder="Bạn có ý tưởng gì cho chuyến đi tiếp theo không?"
                  />
                </div>
                <button className="w-full md:w-auto font-bold bg-[#4CA771] text-sm  text-white px-4 py-2 rounded-md hover:bg-[#013237]">
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbody;
