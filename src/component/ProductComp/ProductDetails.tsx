"use client";
import React, { useState } from "react";
import { Box, Typography, Rating } from "@mui/material";
import { ProductSizeChart } from "@/component";
const ProductDetails = () => {
  const [selectSize, setSelectSize] = useState("false");

  return (
    <Box className="my-[20px] h-[400px] w-full">
      <Box className="flex flex-col gap-4">
        <Typography className="font-bold text-[36px] text-[#000]">
          Product name
        </Typography>
        <Typography className="font-normal text-[24px] text-[#000]">
          Brand name
        </Typography>
        <Typography className="font-normal text-[18px] text-[#000]">
          Sold by :Sellers Name
        </Typography>
        <Box className="flex gap-4">
          <Rating className="text-[#000]" name="read-only" value={3} readOnly />
          <Typography>4.4</Typography>
          <Typography>36 Reviews</Typography>
        </Box>
        <Typography className="flex gap-4 items-center">
          <span className="font-bold text-[24px] text-[#000]">RS. 700</span>
          <span className="line-through text-[#646464]">RS. 700</span>
          <span className="text-[#299E00] text-[20px]">(30% off)</span>
        </Typography>
        <Typography className="font-medium text-[24px] text-[#000]">
          Select Size
        </Typography>
        <Box>
          <ProductSizeChart />
        </Box>
        <Typography className="font-medium text-[24px] text-[#000]">
          Select Color
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDetails;
