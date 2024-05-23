import React, { FC } from "react";
import { COMBUTTON } from "@/type/formFieldType";
import { Button } from "@mui/material";
const ComButton: FC<COMBUTTON> = ({ children, type="button", style, clickHandler }) => {
  return (
    <Button
      onClick={clickHandler}
      className={`rounded-[10px] bg-btnColor py-[15px] px-[20px] text-[#fff] hover:bg-btnColor ${style}`}
      type={type}
    >
      {children}
    </Button>
  );
};

export default ComButton;
