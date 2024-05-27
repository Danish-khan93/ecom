import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Slide from "../../public/assets/images/slide.png";
const Card = () => {
  return (
    <Box className="w-[300px] h-[350px] rounded-md mx-auto shadow my-3">
      <Image
        src={Slide}
        alt="productImage"
        className="w-full h-[200px] rounded-t-lg"
      />
      <Box className="flex flex-col gap-2 pt-2 px-2 ">
        <Typography className="text-[24px] text-[#000] font-semibold">Name</Typography>
        <Box className="flex gap-3">
          <Typography className="text-[18px] text-[#000] ">
            Brand Name
          </Typography>
          <Typography className="text-[18px] text-textSec ">
            Brand Name
          </Typography>
        </Box>
        <Box className="flex gap-3">
          <Typography className="text-[24px] text-[#000] font-medium">
            Rs.{1}
          </Typography>
          <Typography className="text-[24px] text-textSec line-through font-medium">
            Rs.{100}
          </Typography>
          <Typography className="text-[24px] text-[#0A8200] font-medium">
            (off 30%)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Card;
