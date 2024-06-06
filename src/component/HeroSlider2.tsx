"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// import "./globals.css";
import "../app/globals.css";
const HeroSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      //   pagination={{ clickable: true }} // Enable clickable pagination
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Box className="bg-[url('../../public/heroSlider2.png')] bg-cover bg-center bg-no-repeat w-screen h-[600px]">
          <Box className="flex flex-col justify-center items-center gap-6 h-full">
            <Typography className="text-[#fff] font-bold text-[48px]">
              Forever 21 Logo
            </Typography>
            <Typography className="text-[#fff] font-bold text-[30px]">
              Big Fashion Festival
            </Typography>
            <Typography className="text-[#fff] font-bold text-[30px]">
              70% - 80% off
            </Typography>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box className="bg-[url('../../public/heroSlider2.png')] bg-cover bg-center bg-no-repeat w-screen h-[600px]">
          <Box className="flex flex-col justify-center items-center gap-6 h-full">
            <Typography className="text-[#fff] font-bold text-[48px]">
              Forever 21 Logo
            </Typography>
            <Typography className="text-[#fff] font-bold text-[30px]">
              Big Fashion Festival
            </Typography>
            <Typography className="text-[#fff] font-bold text-[30px]">
              70% - 80% off
            </Typography>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box className="bg-[url('../../public/heroSlider2.png')] bg-cover bg-center bg-no-repeat w-screen h-[600px]">
          <Box className="flex flex-col justify-center items-center gap-6 h-full">
            <Typography className="text-[#fff] font-bold text-[48px]">
              Forever 21 Logo
            </Typography>
            <Typography className="text-[#fff] font-bold text-[30px]">
              Big Fashion Festival
            </Typography>
            <Typography className="text-[#fff] font-bold text-[30px]">
              70% - 80% off
            </Typography>
          </Box>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
