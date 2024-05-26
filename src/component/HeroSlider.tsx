"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Slide from "../../public/assets/images/slide.png";
import Image from "next/image";

const HeroSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image src={Slide} alt="sliderimage" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Slide} alt="sliderimage" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Slide} alt="sliderimage" className="w-full" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
