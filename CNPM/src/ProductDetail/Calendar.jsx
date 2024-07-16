import React, { useState } from 'react';
import Modal from './ModalCalendar';
import TourCard from './TourCard';
import CalendarApp from './CalendarApp';

function calendar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-5 w-full justify-center items-center ">
 <div className=' w-[80%] mx-auto items-center justify-center'>
      <h1 className="text-2xl font-bold mb-4">Có vé trống cho bạn</h1>
     
    <CalendarApp/>
   
      <div className="mt-4">
        <TourCard 
          title="[PROMO] Tour ghép - Khởi hành tại Phú Quốc" 
          price="722.850 VND" 
          oldPrice="800.000 VND" 
          discount="-10%" 
        />
        <TourCard 
          title="Tour ghép - Khởi hành tại Phú Quốc" 
          price="800.000 VND" 
        />
      </div> </div>
    

      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default calendar;
