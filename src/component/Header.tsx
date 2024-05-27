"use client";
import React, { FC, useEffect, useState } from "react";
import { Box, AppBar, Toolbar, Typography, Divider } from "@mui/material";
import logo from "../../public/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { headerLink } from "@/constant/header";
import { DebounceSearch, ResHeaderMenu, SignupAndUser } from "@/component";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const user = ()=>{
  const data= localStorage.getItem("user")
  if(data !== null){
   return  JSON.parse(data)
  } else {
return null
  }
}

const Header: FC = () => {
  const [isLoggedin, setIsLoggedin] = useState(user());
  console.log(isLoggedin);
 

  useEffect(() => {
    if(isLoggedin=== null){
      // @ts-ignore
      setIsLoggedin(JSON.parse(localStorage.getItem("user")))
    }
  }, []);

  return (
    <AppBar position="static" className="bg-[#fff]">
      <Toolbar className="flex justify-around items-center gap-4">
        <Box>
          <Link href={"/"}>
            <Image src={logo} alt="logo" priority width={30} height={30} />
          </Link>
        </Box>
        <Box className="md:flex hidden gap-3">
          {headerLink.map((value, index) => {
            return (
              <Link className="text-[#000]" key={index} href={value.link}>
                {value.title}
              </Link>
            );
          })}
        </Box>
        <Box>
          <DebounceSearch />
        </Box>
        <Box className="sm:flex items-center hidden gap-5">
          <Link href={"/wishlist"}>
            <CiHeart className="text-[#000] text-[20px]" />
          </Link>
          <Link href={"/cart"}>
            <IoCartOutline className="text-[#000] text-[20px]" />
          </Link>
          <Box className="flex items-center">
            {isLoggedin ? (
              <SignupAndUser user={isLoggedin}/>
            ) : (
              <Box className="flex gap-2">
                <CiUser className="text-[#000] text-[20px]" />
                <Link href={"/login"}>
                  <Typography className="text-[#000]">Login</Typography>
                </Link>
                <Divider
                  orientation="vertical"
                  flexItem
                  className="text-[#000] bg-[#000]"
                />
                <Link href={"/signup"}>
                  <Typography className="text-[#000]">Signup</Typography>
                </Link>
              </Box>
            )}
          </Box>
        </Box>
        <Box className="sm:hidden flex">
          <ResHeaderMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
