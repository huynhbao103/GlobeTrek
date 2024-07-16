import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

function ModalCalendar({ setShowModal, onDateChange }) {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        onDateChange(date);
    }, [date]);

    const isSpecialDay = (date) => {
        const dayOfWeek = date.getDay();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const vietnameseHolidays = [
            { day: 1, month: 1 },
            { day: 30, month: 4 },
            { day: 2, month: 9 },
        ];
        return (
            (dayOfWeek === 0 || dayOfWeek === 6) ||
            vietnameseHolidays.some(holiday => holiday.day === day && holiday.month === month)
        );
    };

    const getPriceForDate = (date) => {
        const isSpecial = isSpecialDay(date);
        return isSpecial ? '360k' : '300k';
    };

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const price = getPriceForDate(date);
            return <p className="text-sm text-center mt-1">{price}</p>;
        }
        return null;
    };

    const onChange = (newDate) => {
        setDate(newDate);
        onDateChange(newDate);
        setShowModal(false);
    };

    const onActiveStartDateChange = ({ activeStartDate }) => {
        setDate(activeStartDate);
        onDateChange(activeStartDate);
    };

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    return (
        
        <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-auto relative">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    onClick={() => setShowModal(false)}
                >
                    &times;
                </button>
                <h2 className="text-xl font-bold mb-4">Chọn ngày</h2>
                <div className="my-4">
                    <Calendar
                        onChange={onChange}
                        value={date}
                        tileContent={tileContent}
                        showNeighboringMonth={true}
                        minDetail="year"
                        minDate={tomorrow}
                        onActiveStartDateChange={onActiveStartDateChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default ModalCalendar;
