"use client";
import React from "react";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { ComButton, InputField, ComCheckBox } from "@/component";
import { nameRules } from "@/rules/authRules";
import Image from "next/image";
import Logo from "../../../public/assets/images/logo.png";
import Link from "next/link";
import { FORMTYPESIGNIN } from "@/type/formType";
import facebook from "../../../public/assets/images/Rectangle 425.svg";
import google from "../../../public/assets/images/image 13.svg";
const page = () => {
  // form setup
  const { handleSubmit, control } = useForm<FORMTYPESIGNIN>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // form setup

  const onSubmit = (data: FORMTYPESIGNIN) => {
    console.log(data);
  };

  return (
    <Box className="flex justify-center py-[100px]">
      <Box className="rounded-[8px] flex flex-col items-center gap-5 justify-center sm:shadow-md shadow-none  w-[500px] py-[40px]">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Box className="flex flex-col items-center gap-3">
            <Box>
              <Image
                src={Logo}
                priority
                alt="web_logo"
                width={100}
                height={100}
              />
            </Box>
            <Box className="flex flex-col items-center gap-3">
              <Typography className="font-bold text-[28px] text-main">
                Welcome back to E-Com!
              </Typography>
              <Typography className="text-textSec">
                Sign in to continue
              </Typography>
            </Box>
            <Box className="w-full flex flex-col gap-5 ">
              <InputField
                control={control}
                placeHolder="Enter your Email"
                type="text"
                label="Email"
                rule={nameRules}
                name="email"
              />
              <InputField
                control={control}
                placeHolder="Password"
                type="password"
                label="Password"
                rule={nameRules}
                name="password"
              />
              <Box className="text-right">
                <Link href="/forgot-password" className="font-bold text-btnColor">
                  Forgot Password?
                </Link>
              </Box>
              <ComCheckBox
                name="rememberMe"
                control={control}
                label="Remember me"
              />
              <ComButton type="submit">Login</ComButton>
            </Box>
          </Box>
        </form>
        <Box className="w-[100%]">
          <Divider className="text-[#000] w-[90%] mx-auto">or</Divider>
        </Box>
        <Box className="flex justify-center gap-8 w-[100%]">
          <IconButton>
            <Image
              src={facebook}
              priority
              alt="fb Icon"
              width={50}
              height={50}
              className="w-[50px] h-[50px]"
            />
          </IconButton>
          <IconButton>
            <Image src={google} priority alt="fb Icon" width={50} height={50} className="w-[50px] h-[50px]" />
          </IconButton>
        </Box>
        <Box>
          <Typography>
            Don't have a account?{" "}
            <Link href={"/signup"} className="text-btnColor font-bold">
              Register
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
