import React, { useState } from 'react';
import SortandGrid from './SortandGrid';
import ToursList from './TourList';
import '../index.css';
import Header from '../header1/Header';
import Footer from '../footer/Footer';
import tour from '../assets/tour.png';

const App = () => {
  const [tours, setTours] = useState([
    { image: tour, location: 'Khaosan, Phra Nakhon', title: 'Phuket & Phi Phi Island Thailand Tour - 4 Days 3 Nights', price: 11690000, rating: 10.0 },
    { image: tour, location: 'Singapore, Singapore', title: 'Singapore and Malaysia Full Package Tour', price: 9690000, rating: 9.7 },
    { image: tour, location: 'Khaosan, Phra Nakhon', title: 'Thailand Full Package Tour (Bangkok & Pattaya) - 5D4N', price: 7490000, rating: 9.7 },
    { image: tour, location: 'Khaosan, Phra Nakhon', title: 'Phuket & Phi Phi Island Thailand Tour - 4 Days 3 Nights', price: 11690000, rating: 10.0 },
    { image: tour, location: 'Singapore, Singapore', title: 'Singapore and Malaysia Full Package Tour', price: 9690000, rating: 9.7 },
    { image: tour, location: 'Khaosan, Phra Nakhon', title: 'Thailand Full Package Tour (Bangkok & Pattaya) - 5D4N', price: 7490000, rating: 9.7 },
    { image: tour, location: 'Khaosan, Phra Nakhon', title: 'Phuket & Phi Phi Island Thailand Tour - 4 Days 3 Nights', price: 11690000, rating: 10.0 },
    { image: tour, location: 'Singapore, Singapore', title: 'Singapore and Malaysia Full Package Tour', price: 9690000, rating: 9.7 },
    { image: tour, location: 'Khaosan, Phra Nakhon', title: 'Thailand Full Package Tour (Bangkok & Pattaya) - 5D4N', price: 7490000, rating: 9.7 },
  ]);

  const [sortOption, setSortOption] = useState('popular');
  const [view, setView] = useState('grid');

  const handleSortChange = (option) => {
    setSortOption(option);
    let sortedTours;
    if (option === 'priceLowHigh') {
      sortedTours = [...tours].sort((a, b) => a.price - b.price);
    } else if (option === 'priceHighLow') {
      sortedTours = [...tours].sort((a, b) => b.price - a.price);
    } else {
      sortedTours = [...tours];
    }
    setTours(sortedTours);
  };

  return (
    <>
    <div className='bg-[rgba(174,249,231,0.2)] w-full h-full mt-56'>
    <Header/>
    <div className='  w-[80%] m-auto justify-center items-center'>
    <div className=' justify-center items-center'>
      <SortandGrid onSortChange={handleSortChange} view={view} setView={setView} />
      <ToursList tours={tours} view={view} />
      </div>
      </div>
      <div className='max-sm:hidden'>
     
      <Footer/>
      </div>
      </div>
      </>
  );
};  

export default App;
