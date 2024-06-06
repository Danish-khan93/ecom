import React from "react";
import { Box } from "@mui/material";
import { ProductImg,ProductDetails } from "@/component";
const page = () => {
  return (
    <>
      <Box className="mx-[20px] flex justify-between gap-5 items-center">
        <ProductImg />
        <ProductDetails/>
      </Box>
    </>
  );
};

export default page;
