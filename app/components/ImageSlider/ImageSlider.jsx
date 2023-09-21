"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageSlidercard from "./ImageSlidercard";

// Import Swiper styles
import "swiper/css";
// import "swiper/swiper.min.css"
// import "swiper/css/swiper.css"; // Import Swiper core styles

const ImageSlider = () => {
  const sliderArray = [
    {
      image: "/assets/images/p 1.jpg",
    },
    {
      image: "/assets/images/p 2.jpg",
    },
    {
      image: "/assets/images/p 3.jpg",
    },
    {
      image: "/assets/images/p 4.jpg",
    },
    {
      image: "/assets/images/p 1.jpg",
    },
    {
      image: "/assets/images/p 2.jpg",
    },
    {
      image: "/assets/images/p 3.jpg",
    },
    {
      image: "/assets/images/p 4.jpg",
    },
  ];

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {sliderArray.map((el, i) => (
          <ImageSlidercard el={el} key={i + 1} i={i} />
        ))}
        ...
      </Swiper>
    </div>
  );
};

export default ImageSlider;
