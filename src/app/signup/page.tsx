"use client";
import React from "react";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { ComButton, InputField } from "@/component";
import { nameRules } from "@/rules/authRules";
import Image from "next/image";
import Logo from "../../../public/assets/images/logo.png";
import { FORMTYPESIGNUP } from "@/type/formType";
import Link from "next/link";
import facebook from "../../../public/assets/images/Rectangle 425.svg";
import google from "../../../public/assets/images/image 13.svg";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  // form setup
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<FORMTYPESIGNUP>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  // form setup

  const onSubmit = (data: FORMTYPESIGNUP) => {
    console.log(data);
    if (data?.confirmPassword === data?.password) {
      delete data?.confirmPassword;
      console.log(data);
      try {
        localStorage.setItem("user", JSON.stringify(data));
        console.log("User data saved to localStorage");
        router.push("/");
      } catch (error) {
        console.error("Error saving to localStorage", error);
      }
    } else {
      setError("confirmPassword", {
        types: {
          required: "password is not match",
        },
      });
    }
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
                Welcome to E-Com!
              </Typography>
              <Typography className="text-textSec">
                Let's make your account.
              </Typography>
            </Box>
            <Box className="w-full flex flex-col gap-5 ">
              <InputField
                control={control}
                placeHolder="Enter your name"
                type="text"
                label=" Name"
                rule={nameRules}
                name="name"
              />
              <InputField
                control={control}
                placeHolder="Enter your Email"
                type="email"
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
              <InputField
                control={control}
                placeHolder="Confirm Password"
                type="password"
                label="Confirm Password"
                rule={nameRules}
                name="confirmPassword"
              />
              <Typography className="text-red-800 text-[12px]">
                {errors?.confirmPassword?.types?.required}
              </Typography>
              <ComButton type="submit">SignUp</ComButton>
            </Box>
          </Box>
        </form>
        <Box className="w-[100%]">
          <Box>
            <Divider className="text-[#000] w-[90%] mx-auto">or</Divider>
          </Box>
        </Box>
        <Box className="flex justify-center gap-8 w-[100%]">
          <IconButton>
            <Image
              src={facebook}
              priority
              alt="fb Icon"
              width={30}
              height={30}
              className="w-[30px] h-[30px]"
            />
          </IconButton>
          <IconButton>
            <Image
              src={google}
              priority
              alt="fb Icon"
              width={30}
              height={30}
              className="w-[30px] h-[30px]"
            />
          </IconButton>
        </Box>
        <Box>
          <Typography>
            Already have an account?{" "}
            <Link href={"/login"} className="text-btnColor font-bold">
              Login
            </Link>
            .
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
