import React, { FC } from "react";
import { Box,Typography } from "@mui/material";
import { HOMETYPE } from "@/type/pagesType";
const Container: FC<HOMETYPE> = ({ children }) => {
  return (
    <Box className="w-[100%] px-[100px] sm:bg-slate-400 md:bg-blue-500 lg:bg-green-800 xl:bg-yellow-600">
      <Typography>{children}</Typography>
    </Box>
  );
};

export default Container;
