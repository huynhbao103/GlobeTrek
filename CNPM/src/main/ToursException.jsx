import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import CSS for Skeleton
import { Link } from "react-router-dom";
import tour1 from "../assets/tour.png";

const locations = [
  {
    name: "Phú Quốc",
    tours: [
      {
        name: "Khám phá 2 đảo, Sun World Hòn Thơm",
        price: 500000,
        image: tour1,
      },
      { name: "Tour 4 đảo Nam Phú Quốc - 1 ngày", price: 700000, image: tour1 },
      {
        name: "Tour ngắm hoàng hôn và câu mực đêm trên đảo Phú Quốc - Nửa ngày",
        price: 400000,
        image: tour1,
      },
      {
        name: "Tour khám phá 3 đảo tại Phú Quốc - 1 ngày",
        price: 600000,
        image: tour1,
      },
      {
        name: "Khám phá 4 đảo và Sun World Hòn Thơm Phú Quốc - Tour 1 ngày",
        price: 800000,
        image: tour1,
      },
    ],
  },
  {
    name: "Nha Trang",
    tours: [
      {
        name: "Khám phá 2 đảo, Sun World Hòn Thơm",
        price: 500000,
        image: tour1,
      },
      { name: "Tour 4 đảo Nam Phú Quốc - 1 ngày", price: 700000, image: tour1 },
      {
        name: "Tour ngắm hoàng hôn và câu mực đêm trên đảo Phú Quốc - Nửa ngày",
        price: 400000,
        image: tour1,
      },
      {
        name: "Tour khám phá 3 đảo tại Phú Quốc - 1 ngày",
        price: 600000,
        image: tour1,
      },
      {
        name: "Khám phá 4 đảo và Sun World Hòn Thơm Phú Quốc - Tour 1 ngày",
        price: 800000,
        image: tour1,
      },
    ],
  },
  {
    name: "Đà Nẵng",
    tours: [
      {
        name: "Khám phá 2 đảo, Sun World Hòn Thơm",
        price: 500000,
        image: tour1,
      },
      { name: "Tour 4 đảo Nam Phú Quốc - 1 ngày", price: 700000, image: tour1 },
      {
        name: "Tour ngắm hoàng hôn và câu mực đêm trên đảo Phú Quốc - Nửa ngày",
        price: 400000,
        image: tour1,
      },
      {
        name: "Tour khám phá 3 đảo tại Phú Quốc - 1 ngày",
        price: 600000,
        image: tour1,
      },
      {
        name: "Khám phá 4 đảo và Sun World Hòn Thơm Phú Quốc - Tour 1 ngày",
        price: 800000,
        image: tour1,
      },
    ],
  },
  {
    name: "Đà Lạt",
    tours: [
      {
        name: "Khám phá 2 đảo, Sun World Hòn Thơm",
        price: 500000,
        image: tour1,
      },
      { name: "Tour 4 đảo Nam Phú Quốc - 1 ngày", price: 700000, image: tour1 },
      {
        name: "Tour ngắm hoàng hôn và câu mực đêm trên đảo Phú Quốc - Nửa ngày",
        price: 400000,
        image: tour1,
      },
      {
        name: "Tour khám phá 3 đảo tại Phú Quốc - 1 ngày",
        price: 600000,
        image: tour1,
      },
      {
        name: "Khám phá 4 đảo và Sun World Hòn Thơm Phú Quốc - Tour 1 ngày",
        price: 800000,
        image: tour1,
      },
    ],
  },
  {
    name: "Ninh Bình-Hạ Long",
    tours: [
      {
        name: "Khám phá 2 đảo, Sun World Hòn Thơm",
        price: 500000,
        image: tour1,
      },
      { name: "Tour 4 đảo Nam Phú Quốc - 1 ngày", price: 700000, image: tour1 },
      {
        name: "Tour ngắm hoàng hôn và câu mực đêm trên đảo Phú Quốc - Nửa ngày",
        price: 400000,
        image: tour1,
      },
      {
        name: "Tour khám phá 3 đảo tại Phú Quốc - 1 ngày",
        price: 600000,
        image: tour1,
      },
      {
        name: "Khám phá 4 đảo và Sun World Hòn Thơm Phú Quốc - Tour 1 ngày",
        price: 800000,
        image: tour1,
      },
    ],
  },
  {
    name: "Sapa-Hà Giang",
    tours: [
      {
        name: "Khám phá 2 đảo, Sun World Hòn Thơm",
        price: 500000,
        image: tour1,
      },
      { name: "Tour 4 đảo Nam Phú Quốc - 1 ngày", price: 700000, image: tour1 },
      {
        name: "Tour ngắm hoàng hôn và câu mực đêm trên đảo Phú Quốc - Nửa ngày",
        price: 400000,
        image: tour1,
      },
      {
        name: "Tour khám phá 3 đảo tại Phú Quốc - 1 ngày",
        price: 600000,
        image: tour1,
      },
      {
        name: "Khám phá 4 đảo và Sun World Hòn Thơm Phú Quốc - Tour 1 ngày",
        price: 800000,
        image: tour1,
      },
    ],
  },
];

function BestsalerTour() {
  const [activeLocation, setActiveLocation] = useState(locations[0]);
  const [loading, setLoading] = useState(true); // Add loading state
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
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  // Simulate loading for 2 seconds
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="w-full flex justify-center pb-10">
      <div className="max-w-[1280px] w-[90%] sm:w-[68%]">
        <h1 className="font-bold text-2xl mb-4">
          {loading ? <Skeleton width={200} height={30} /> : "Tour trọn gói xuất ngoại"}
        </h1>
        <p>Khám phá tour 5N4D trọn gói dành cho gia đình!!</p>

        <div className="w-full mx-auto pt-10">
          <div className="flex overflow-x-auto space-x-4 mb-6 hide-scrollbar">
            {loading
              ? Array(5)
                  .fill()
                  .map((_, index) => (
                    <div key={index} className="flex-shrink-0">
                      <Skeleton width={120} height={40} />
                    </div>
                  ))
              : locations.map((location, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 flex-shrink-0 rounded-md cursor-pointer ${
                      activeLocation.name === location.name
                        ? "bg-[#4CA771] text-white font-bold"
                        : "bg-[#FFFF] text-[#4CA771] font-bold"
                    }`}
                    onClick={() => setActiveLocation(location)}
                  >
                    {location.name}
                  </button>
                ))}
          </div>

          <div className="relative">
            {loading ? (
              <Slider ref={sliderRef} {...settings}>
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <div key={index} className="pr-2">
                      <div className="block bg-white rounded-lg overflow-hidden h-72">
                        <Skeleton height={160} width={"100%"} />
                        <div className="p-4 h-32">
                          <Skeleton height={20} width={"60%"} />
                          <Skeleton height={20} width={"40%"} />
                        </div>
                      </div>
                    </div>
                  ))}
              </Slider>
            ) : (
              <Slider ref={sliderRef} {...settings}>
                {activeLocation.tours.map((tour, index) => (
                  <Link to="/ProDetail" key={index}>
                    <div className="pr-2">
                      <div className="block bg-white rounded-lg overflow-hidden h-72 hover:border-[#4CA771] cursor-pointer">
                        <img
                          src={tour.image}
                          alt={tour.name}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-4 h-32">
                          <h3 className="sm:text-md text-[#013237] text-sm font-semibold">
                            {tour.name}
                          </h3>
                          <p className="text-[#4CA771]">VND {tour.price}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            )}
            <button
              className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 bg-white bg-opacity-50 p-2 rounded-full cursor-pointer"
              onClick={prevSlide}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 bg-white bg-opacity-50 p-2 rounded-full cursor-pointer"
              onClick={nextSlide}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestsalerTour;
