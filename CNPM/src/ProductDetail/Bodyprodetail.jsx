import React from 'react'
import Inforimage from './InfoImage.jsx'
import '../index.css'
import TourInfo from './TourInfo.jsx'
import Mapview from './Mapview.jsx';
import SearchDetour from './SearchDetour.jsx';
import ReadMoreText from './ReadMoreText.jsx';

import Calendar from './Calendar.jsx';
import Header from '../header1/Header.jsx';
import Footer from '../footer/Footer.jsx';


function Bodyprodetail() {
  return (
    <div>
      <Header/>
      <div className='mt-40 justify-center items-center '>
       <Inforimage/>
    <div className=' flex justify-center items-center max-md:flex-col '>
    <TourInfo/>
    <Mapview/>
    <SearchDetour/>
    </div>
    <ReadMoreText/>

    <Calendar/>
    <div className='max-sm:hidden'>
    <Footer/>
    </div>
    </div>
    </div>
  )
}

export default Bodyprodetail