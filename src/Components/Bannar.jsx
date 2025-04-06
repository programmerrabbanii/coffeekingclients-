import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bannar1 from "../assets/coffee_slide-1-1.jpg";
import bannar2 from "../assets/coffee_slide-2-1.jpg";
import bannar3 from "../assets/coffee_slide-3.jpg";

const Banner = () => {
  const slides = [
    {
      img: bannar1,
      title: "Artisan Coffee, Delivered Fresh",
      desc: "Discover a wide variety of specialty coffee blends sourced from around the world — brewed with passion.",
    },
    {
      img: bannar2,
      title: "Brew Better Every Morning",
      desc: "Your mornings deserve rich aroma & bold flavors. Make every cup memorable with us.",
    },
    {
      img: bannar3,
      title: "Feel the Aroma of Nature",
      desc: "Ethically sourced, expertly roasted — from bean to cup, experience coffee differently.",
    },
  ]; 

  return (
    <div className="max-w-7xl mx-auto   overflow-hidden shadow-xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#fcf9f4]">
              <div className="w-full md:w-1/2 p-6 md:p-12 space-y-6">
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#4B3621] leading-tight">
                  {slide.title}
                </h2>
                <p className="text-gray-600 md:text-lg">{slide.desc}</p>
                <button className="mt-3 inline-block px-6 py-2 text-white bg-[#6F4E37] hover:bg-[#5a3f2a] rounded-full transition-all duration-300 shadow-md">
                  Explore Now
                </button>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={slide.img}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-[280px] md:h-[450px] object-cover"
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
