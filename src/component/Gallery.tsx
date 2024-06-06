import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import Pic1 from "../../public/image1.png";
import Pic2 from "../../public/image2.png";
import Pic3 from "../../public/image3.png";
import Pic4 from "../../public/image4.png";
import Pic5 from "../../public/image5.png";
import Pic6 from "../../public/image6.png";
const Gallery = () => {
  return (
    <Box className="w-full my-[20px] sm:flex sm:flex-row sm:justify-around flex flex-col justify-center items-center gap-3">
      <Box className=" sm:w-[30%] w-[95%] h-[500px] ">
        <Box className="w-full h-full ">
          <Image
            priority
            src={Pic1}
            alt="gallery"
            className="object-cover rounded-md"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Box>
      <Box className="sm:w-[30%] w-[95%] h-[500px] flex flex-col justify-between">
        <Box className="h-[230px] w-full">
          <Image
            priority
            src={Pic2}
            alt="gallery"
            className="object-cover rounded-md"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box className="h-[230px] w-full ">
          <Image
            priority
            src={Pic3}
            alt="gallery"
            className="object-cover rounded-md"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Box>
      <Box className="sm:w-[30%] w-[95%] h-[500px] flex justify-between flex-col">
        <Box className="w-full h-[230px]">
          <Image
            priority
            src={Pic4}
            alt="gallery"
            className="object-cover rounded-md"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box className="w-full h-[230px] flex justify-between">
          <Box className="h-[230px] w-[48%]">
            <Image
              priority
              src={Pic5}
              alt="gallery"
              className="object-cover rounded-md"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
          <Box className="h-[230px] w-[48%]">
            <Image
              priority
              src={Pic6}
              alt="gallery"
              className="object-cover rounded-md"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Gallery;
