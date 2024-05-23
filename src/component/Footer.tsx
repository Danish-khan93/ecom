"use client";
import React, { FC } from "react";
import { Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
import { footerList } from "@/constant/footer";
import { InputField } from "@/component";
import { useForm } from "react-hook-form";
import { FORMTYPEFORGOTPASS } from "@/type/formType";
import { nameRules } from "@/rules/authRules";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer: FC = () => {
  const { control, handleSubmit } = useForm<FORMTYPEFORGOTPASS>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FORMTYPEFORGOTPASS) => {
    console.log(data, "email from footer");
  };
  return (
    <Box className="bg-[#000] py-[35px] px-[20px]">
      <Box className="flex items-center gap-3 ">
        <Image
          alt="logo"
          src={logo}
          priority
          width={50}
          height={50}
          className="w-[50px] h-[50px]"
        />
        <Typography className="text-[#fff] font-bold">E-Com</Typography>
      </Box>
      <Box className="md:py-[50px] py-[10px]">
        <Box className="md:flex md:flex-row md:justify-around  flex-wrap justify-start hidden">
          {footerList.map((value, index) => {
            return (
              <Box key={index} className="flex flex-col gap-2">
                <Typography className="text-[#fff] text-[20px] font-semibold">
                  {value.title}
                </Typography>
                {value.list.map((val, index) => {
                  return (
                    <Typography key={index} className="text-[#fff]">
                      {val}
                    </Typography>
                  );
                })}
              </Box>
            );
          })}
          <Box className="flex flex-col gap-2 ">
            <Typography className="text-[#fff] font-bold text-[24px]">
              Stay In Touch
            </Typography>
            <Typography className="text-[#fff] text-white whitespace-pre-wrap">
              Stay in touch to get special offers, free giveaways{"\n"}and once
              in a lifetime deals
            </Typography>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <InputField
                name="email"
                placeHolder="Enter your Email"
                type="email"
                control={control}
                rule={nameRules}
                style="border border-[#fff] text-[#fff]"
              />
            </form>
          </Box>
        </Box>
      </Box>
      <Box className="w-[100%] my-[10px]">
        <Divider className="bg-[#fff]" />
      </Box>
      <Box className="flex justify-evenly items-center pt-[10px]">
        <Typography className="text-[#fff]">Terms & Conditions</Typography>
        <Typography className="text-[#fff]">Privacy Policy</Typography>
        <Box className="flex gap-3">
          <FaFacebookSquare className="text-[#fff]" />
          <FaInstagram className="text-[#fff]" />
          <FaWhatsapp className="text-[#fff]" />
          <FaTwitter className="text-[#fff]" />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
