"use client";
import React from "react";
import { Box, Button } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { ProductSize } from "@/component";
import { productSizs } from "@/constant/comConstant";
import { PRODUCTSIZE } from "@/type/componentType";
import { motion } from "framer-motion";
const ProductSizeChart = () => {
  //   const [hidden, setHidden] = useState<boolean>(false);
  //   const handleCLick = () => {
  //     console.log("working");
  //     setHidden(!hidden);
  //   };
  return (
    <>
      <Button
        className="text-[#00398F] text-[16px] p-0"
        endIcon={<IoIosArrowForward className="text-[#00398F] text-[16px]" />}
        // oxnClick={handleCLick}
      >
        Size Chart
      </Button>
      {/* {hidden ? ( */}
      <Box
        component={motion.div}
        className="flex gap-3"
        // initial={{x:-250,opacity:0}}
        // animate={{x:0 ,opacity:1}}
        // transition={{delay:1.5}}
      >
        {productSizs.map((value: PRODUCTSIZE) => {
          return (
            <ProductSize
              key={value?.id}
              name={value?.name}
              symbol={value?.symbol}
              availabel={value?.availabel}
              id={value?.id}
            // value = {value}
            />
          );
        })}
      </Box>
      {/* ) : null} */}
    </>
  );
};

export default ProductSizeChart;
