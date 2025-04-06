import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import bannar1 from "../assets/coffee_slide-1-1.jpg";
import bannar2 from "../assets/coffee_slide-2-1.jpg";
import bannar3 from "../assets/coffee_slide-3.jpg";

const Banner = () => {
  const slides = [
    {
      img: bannar1,
      title: "Freshly Brewed Coffee",
      desc: "Experience the aroma of freshly roasted beans — only at Coffee Market.",
    },
    {
      img: bannar2,
      title: "Online Coffee Store",
      desc: "From your favorite espresso to exclusive blends, get them all online.",
    },
    {
      img: bannar3,
      title: "Feel the Taste",
      desc: "Sip the taste of premium coffee right from the comfort of your home.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-8 rounded-2xl overflow-hidden shadow-2xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center bg-[#f3ede7]">
              <div className="p-6 md:w-1/2 space-y-4 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold text-[#6F4E37]">
                  {slide.title}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">{slide.desc}</p>
                <button className="mt-3 px-6 py-2 bg-[#6F4E37] text-white rounded-full hover:bg-[#5c3f2b] transition">
                  Shop Now
                </button>
              </div>
              <div className="md:w-1/2">
                <img
                  src={slide.img}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  ); 
};

export default Banner;
