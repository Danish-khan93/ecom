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
    <Box className="px-[20px] w-full flex justify-evenly items-center py-[20px]">
      <Box>
        <Image src={Pic1} alt="gallery" />
      </Box>
      <Box className="flex flex-col gap-3">
        <Image src={Pic2} alt="gallery" />
        <Image src={Pic3} alt="gallery" />
      </Box>
      <Box className="flex flex-col gap-3">
        <Box>
          <Image src={Pic4} alt="gallery" />
        </Box>
        <Box className="flex justify-between ">
          <Image src={Pic5} alt="gallery" />
          <Image src={Pic6} alt="gallery" />
        </Box>
      </Box>
    </Box>
  );
};

export default Gallery;
