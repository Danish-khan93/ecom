"use client";
import React from "react";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { ComButton, InputField } from "@/component";
import { nameRules } from "@/rules/authRules";
import Image from "next/image";
import Logo from "../../../public/assets/images/logo.png";
import { FORMTYPEFORGOTPASS } from "@/type/formType";
import { useRouter } from "next/navigation";

const page = () => {
  // form setup
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<FORMTYPEFORGOTPASS>({
    defaultValues: {
      email: "",
    },
  });
  // form setup

  const onSubmit = (data: FORMTYPEFORGOTPASS) => {
    console.log(data);
  };

  const router = useRouter()

  return (
    <Box className="flex justify-center py-[100px] ">
      <Box className="rounded-[8px] flex flex-col items-center gap-5 justify-center sm:shadow-md shadow-none w-[500px] py-[40px]">
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
                Forgot Password
              </Typography>
              <Typography className="text-textSec">
                We will send you a message to set or reset your new password
              </Typography>
            </Box>
            <Box className="w-full flex flex-col gap-5 ">
              <InputField
                control={control}
                placeHolder="Enter your Email"
                type="email"
                label="Email"
                rule={nameRules}
                name="email"
              />

              <ComButton
                type="submit"
                clickHandler={() => {
                  console.log("going in otp screen");
                  router.push("/code-varification");
                }}
              >
                Send Verification
              </ComButton>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default page;
