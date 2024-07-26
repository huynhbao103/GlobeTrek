import React from 'react';
import ModalCalendar from './ModalCalendar';
import SidebarCalendar from './SidebarCalendar';
import { useDate } from '../Context/DateContext'; // Import useDate hook

function CalendarApp() {
    const { selectedDate, setSelectedDate } = useDate();
    const [showModal, setShowModal] = React.useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className='bg-white border-2 w-full justify-center items-center'>
            <div className="calendar-app justify-center items-center flex">
                <button onClick={openModal} className="bg-[#f7f9fa] px-2 h-16 sm:mr-6 ml-2 border-gray-100 border text-[#4CA771] font-bold rounded-lg">
                    Xem lịch
                </button>
                <SidebarCalendar selectedDate={selectedDate} onDateChange={handleDateChange} />
                {showModal && (
                    <ModalCalendar setShowModal={setShowModal} onDateChange={handleDateChange} />
                )}
            </div>
        </div>
    );
}

export default CalendarApp;
