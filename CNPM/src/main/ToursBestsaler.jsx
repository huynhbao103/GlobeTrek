import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import tour1 from '../assets/tour.png'; // Example image import


const locations = [
  {
    name: 'Phú Quốc',
    tours: [
      { name: 'Khám phá 2 đảo, Sun World Hòn Thơm', price: 500000, image: tour1 },
      { name: 'Tour 4 đảo Nam Phú Quốc - 1 ngày', price: 700000, image: tour1 },
      { name: 'Tour ngắm hoàng hôn và câu mực đêm trên đảo Phú Quốc - Nửa ngày', price: 400000, image: tour1 },
      { name: 'Tour khám phá 3 đảo tại Phú Quốc - 1 ngày', price: 600000, image: tour1 },
      { name: 'Khám phá 4 đảo và Sun World Hòn Thơm Phú Quốc - Tour 1 ngày', price: 800000, image: tour1 }
    ]
  },
  {
    name: 'Nha Trang',
    tours: [
      { name: 'Khám phá 2 đảo, Sun World Hòn Thơm', price: 500000, image: tour1 },
      { name: 'Tour 4 đảo Nam Phú Quốc - 1 ngày', price: 700000, image: tour1 },
      { name: 'Tour ngắm hoàng hôn và câu mực đêm trên đảo Phú Quốc - Nửa ngày', price: 400000, image: tour1 },
      { name: 'Tour khám phá 3 đảo tại Phú Quốc - 1 ngày', price: 600000, image: tour1 },
      { name: 'Khám phá 4 đảo và Sun World Hòn Thơm Phú Quốc - Tour 1 ngày', price: 800000, image: tour1 }
    ]
  },
  {
    name: 'Đà Nẵng',
    tours: [
      { name: 'Khám phá 2 đảo, Sun World Hòn Thơm', price: 500000, image: tour1 },
      { name: 'Tour 4 đảo Nam Phú Quốc - 1 ngày', price: 700000, image: tour1 },
      { name: 'Tour ngắm hoàng hôn và câu mực đêm trên đảo Phú Quốc - Nửa ngày', price: 400000, image: tour1 },
      { name: 'Tour khám phá 3 đảo tại Phú Quốc - 1 ngày', price: 600000, image: tour1 },
      { name: 'Khám phá 4 đảo và Sun World Hòn Thơm Phú Quốc - Tour 1 ngày', price: 800000, image: tour1 }
    ]
  },
  {
    name: 'Đà Lạt',
    tours: [
      { name: 'Khám phá 2 đảo, Sun World Hòn Thơm', price: 500000, image: tour1 },
      { name: 'Tour 4 đảo Nam Phú Quốc - 1 ngày', price: 700000, image: tour1 },
      { name: 'Tour ngắm hoàng hôn và câu mực đêm trên đảo Phú Quốc - Nửa ngày', price: 400000, image: tour1 },
      { name: 'Tour khám phá 3 đảo tại Phú Quốc - 1 ngày', price: 600000, image: tour1 },
      { name: 'Khám phá 4 đảo và Sun World Hòn Thơm Phú Quốc - Tour 1 ngày', price: 800000, image: tour1 }
    ]
  },
  {
    name: 'Ninh Bình-Hạ Long',
    tours: [
      { name: 'Khám phá 2 đảo, Sun World Hòn Thơm', price: 500000, image: tour1 },
      { name: 'Tour 4 đảo Nam Phú Quốc - 1 ngày', price: 700000, image: tour1 },
      { name: 'Tour ngắm hoàng hôn và câu mực đêm trên đảo Phú Quốc - Nửa ngày', price: 400000, image: tour1 },
      { name: 'Tour khám phá 3 đảo tại Phú Quốc - 1 ngày', price: 600000, image: tour1 },
      { name: 'Khám phá 4 đảo và Sun World Hòn Thơm Phú Quốc - Tour 1 ngày', price: 800000, image: tour1 }
    ]
  },
  {
    name: 'Sapa-Hà Giang',
    tours: [
      { name: 'Khám phá 2 đảo, Sun World Hòn Thơm', price: 500000, image: tour1 },
      { name: 'Tour 4 đảo Nam Phú Quốc - 1 ngày', price: 700000, image: tour1 },
      { name: 'Tour ngắm hoàng hôn và câu mực đêm trên đảo Phú Quốc - Nửa ngày', price: 400000, image: tour1 },
      { name: 'Tour khám phá 3 đảo tại Phú Quốc - 1 ngày', price: 600000, image: tour1 },
      { name: 'Khám phá 4 đảo và Sun World Hòn Thơm Phú Quốc - Tour 1 ngày', price: 800000, image: tour1 }
    ]
  }
];

function BestsalerTour() {
  const [activeLocation, setActiveLocation] = useState(locations[0]);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      }
    ]
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
    <div className='w-full flex justify-center pb-10'>
      <div className='w-[83%]'>
        <h1 className='font-bold text-2xl'>Các Tour bán chạy</h1>
        <div className='w-full mx-auto pt-10'>
          <div className='flex overflow-x-auto space-x-4 mb-6'>
            {locations.map((location, index) => (
              <button 
                key={index}
                className={`px-4 py-2 flex-shrink-0 rounded-md cursor-pointer ${activeLocation.name === location.name ? 'bg-[#4CA771] text-white font-bold' : 'bg-[#FFFF] text-[#4CA771] font-bold'}`}
                onClick={() => setActiveLocation(location)}
              >
                {location.name}
              </button>
            ))}
          </div>
          <div className='relative'>
            <Slider ref={sliderRef} {...settings}>
              {activeLocation.tours.map((tour, index) => (
                <div key={index} className='pr-2'>
                  <Link to="/ProDetail" className='block bg-white rounded-lg overflow-hidden h-72 hover:border-[#4CA771] cursor-pointer'>
                    <img src={tour.image} alt={tour.name} className='w-full h-40 object-cover' />
                    <div className='p-4 h-32'>
                      <h3 className='text-md text-[#013237] font-semibold'>{tour.name}</h3>
                      <p className='text-[#4CA771]'>VND {tour.price}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
            <button className='absolute top-1/2 transform -translate-y-1/2 left-0 z-10 bg-white bg-opacity-50 p-2 rounded-full cursor-pointer' onClick={prevSlide}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className='absolute top-1/2 transform -translate-y-1/2 right-0 z-10 bg-white bg-opacity-50 p-2 rounded-full cursor-pointer' onClick={nextSlide}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);
}


export default BestsalerTour;