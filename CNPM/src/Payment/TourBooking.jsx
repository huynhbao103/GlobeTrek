import React, { useState, useEffect } from 'react';
import tour1 from '../assets/tour1.png';
import SidebarCalendar from '../ProductDetail/SidebarCalendar';
import { useDate } from '../Context/DateContext';
import backicon from '../assets/backicon.png';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for making API requests

const TourBooking = () => {
  const { selectedDate, setSelectedDate } = useDate();
  const [adultCount, setAdultCount] = useState(1); // Initialize with 1
  const [childCount, setChildCount] = useState(0); // Initialize with 0
  const [prices, setPrices] = useState({ adultPrice: 1000, childPrice: 200 });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch price data from API
    const fetchPrices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/prices'); // URL of your API
        setPrices(response.data.prices);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchPrices();
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const increaseCount = (setter, count) => {
    if (adultCount + childCount < 30) {
      setter(count + 1);
      setErrorMessage('');
    } else {
      setErrorMessage('Tổng số vé không được vượt quá 30 vé.');
    }
  };

  const decreaseCount = (setter, count, isAdult = false) => {
    if (isAdult) {
      // For adult tickets, do not allow decrease below 1
      if (count > 1) {
        setter(count - 1);
        setErrorMessage('');
      }
    } else {
      // For child tickets, allow decrease to 0
      if (count > 0) {
        setter(count - 1);
        setErrorMessage('');
      }
    }
  };

  // Calculate total price based on selected counts and prices
  const totalPrice = (adultCount * prices.adultPrice) + (childCount * prices.childPrice);

  const handleBooking = () => {
    // Create an object with ticket details
    const bookingData = {
      adultCount,
      childCount,
      totalPrice
    };
  
    // Save to local storage
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
  
    // Redirect to UserProfile or Price page
    window.location.href = '/BookingForm'; // Redirect to BookingForm page
  };
  

  return (
    <div className=''>
      <div className="p-4 mx-auto">
        <div className="w-[100%] mx-auto  items-center mb-8">
          <Link to='/ProDetail' className='sm:mb-5   shadow-md'>
            <img className='w-4 h-4' src={backicon} alt="Back" />
          </Link>
        </div>

        <div className="sm:flex w-[80%] sm:w-full mx-auto">
          {/* Tour Information Section */}
          <div className="sm:w-[70%] sm:mt-16  sm:shadow-xl rounded-md">
            <img
              src={tour1}
              alt="Tour"
              className="w-full rounded-lg"
            />
            <div className="ml-4">
              <h2 className="text-xl font-bold mb-2">
                Tour ghép cho tối đa 40 khách - Khởi hành TPHCM cùng Vietjet Air
              </h2>
              <p>Không thể hoàn tiền</p>
              <button className="mt-4 bg-green-100 text-green-500 py-2 px-4 rounded-lg">
                Xem thông tin vé
              </button>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="w-[90%] p-4 ml-4">
            <div className="mt-4">
              <div className="w-full justify-center items-center">
                <SidebarCalendar selectedDate={selectedDate} onDateChange={handleDateChange} />
              </div>
              <div className="mt-4 bg-green-100 p-4 rounded-lg">
                <p className="text-lg">Ngày tham quan đã chọn</p>
                <h3 className="text-xl font-bold">
                  {selectedDate ? selectedDate.toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : 'Chưa chọn ngày'}
                </h3>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-bold">Người lớn</h4>
                  <p className="text-green-500">{prices.adultPrice.toLocaleString()} VND</p>
                  <p className="text-gray-500">Nhận 14.535 xu</p>
                </div>
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-lg"
                    onClick={() => decreaseCount(setAdultCount, adultCount, true)}
                  >
                    -
                  </button>
                  <span className="mx-2">{adultCount}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-lg"
                    onClick={() => increaseCount(setAdultCount, adultCount)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h4 className="text-xl font-bold">Trẻ em</h4>
                  <p className="text-green-500">{prices.childPrice.toLocaleString()} VND</p>
                  <p className="text-gray-500">Nhận 14.535 xu</p>
                </div>
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-lg"
                    onClick={() => decreaseCount(setChildCount, childCount)}
                  >
                    -
                  </button>
                  <span className="mx-2">{childCount}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-lg"
                    onClick={() => increaseCount(setChildCount, childCount)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            {errorMessage && (
              <div className="mt-4 p-4 bg-red-100 text-red-500 rounded-lg">
                {errorMessage}
              </div>
            )}
            <div className="mt-4 flex justify-between items-center">
              <h3 className="text-2xl font-bold">{totalPrice.toLocaleString()} VND</h3>
              <Link 
                to='/BookingForm' 
                className="bg-[#4CA771] font-bold text-white py-2 px-4 rounded-lg"
                onClick={handleBooking}
              >
                Đặt ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourBooking;
