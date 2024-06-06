import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { PRODUCTSIZE } from "@/type/componentType";
import { CgUnavailable } from "react-icons/cg";
const ProductSize: FC<PRODUCTSIZE> = ({ name, id, availabel, symbol }) => {
  return (
    <Box
      className={`w-[30px] h-[30px] rounded-full border border-[#BABABA] flex justify-center items-center relative `}
    >
      {availabel ? null : (
        <CgUnavailable className="text-[#BABABA] w-[30px] h-[30px] absolute" />
      )}
      <Typography
        className={`text-[#000] text-[18px] ${
          availabel ? "text-[#000]" : "text-[#BABABA]"
        }`}
      >
        {symbol}
      </Typography>
    </Box>
  );
};

export default ProductSize;
