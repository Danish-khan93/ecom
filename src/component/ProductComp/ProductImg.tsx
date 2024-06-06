import React from "react";
import { Box } from "@mui/material";
import ProductImage from "../../../public/image6.png";
import Image from "next/image";
const ProductImg = () => {
  return (
    <Box className="flex gap-5 my-[20px] h-[400px] w-full">
      <Box className="flex flex-col gap-3 h-[400px]">
        <Image
          width={90}
          height={90}
          src={ProductImage}
          alt="product"
          style={{
            width: "90px",
            height: "90px",
          }}
          priority
        />
        <Image
          priority
          width={90}
          height={90}
          src={ProductImage}
          alt="product"
          style={{
            width: "90px",
            height: "90px",
          }}
        />
        <Image
          priority
          width={90}
          height={90}
          src={ProductImage}
          alt="product"
          style={{
            width: "90px",
            height: "90px",
          }}
        />
        <Image
          priority
          width={90}
          height={90}
          src={ProductImage}
          alt="product"
          style={{
            width: "90px",
            height: "90px",
          }}
        />
      </Box>
      <Box className="w-[500px]">
        <Image
          priority
          src={ProductImage}
          alt="product"
          width={500}
          height={400}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
    </Box>
  );
};

export default ProductImg;
