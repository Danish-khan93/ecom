"use client";
import React, { FC } from "react";
import { OutlinedInput } from "@mui/material";
import { CiSearch } from "react-icons/ci";
const DebounceSearch: FC = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e?.target?.value);
  };

  return <OutlinedInput placeholder="Search" endAdornment={<CiSearch />} onChange={handleChange} size="small"/>;
};

export default DebounceSearch;
