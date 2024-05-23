"use client";
import React from "react";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { ComButton, InputField } from "@/component";
import { nameRules } from "@/rules/authRules";
import Image from "next/image";
import Logo from "../../../public/assets/images/logo.png";
import { FORMTYPERESTPASS } from "@/type/formType";

const page = () => {
  // form setup
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<FORMTYPERESTPASS>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  // form setup

  const onSubmit = (data: FORMTYPERESTPASS) => {
    console.log(data);
    if (data?.confirmPassword === data?.password) {
      delete data?.confirmPassword;
      console.log(data);
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
                New Password
              </Typography>
              <Typography className="text-textSec">
                Set new password for your account.
              </Typography>
            </Box>
            <Box className="w-full flex flex-col gap-5 ">
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
              <ComButton type="submit">Send Verification</ComButton>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default page;
