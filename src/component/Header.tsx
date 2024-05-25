import React, { FC } from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import logo from "../../public/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { headerLink } from "@/constant/header";
import { DebounceSearch,ResHeaderMenu } from "@/component";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const Header: FC = () => {
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
        <Box className="sm:flex hidden gap-5">
          <Link href={"/wishlist"}>
            <CiHeart className="text-[#000] text-[20px]" />
          </Link>
          <Link href={"/cart"}>
            <IoCartOutline className="text-[#000] text-[20px]" />
          </Link>
          <Link href={"/signup"}>
            <CiUser className="text-[#000] text-[20px]" />
          </Link>
        </Box>
        <Box className="sm:hidden flex">
          <ResHeaderMenu/>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
