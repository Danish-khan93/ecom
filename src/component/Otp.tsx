"use client"
import React, { FC } from "react";
import OtpInput from "react-otp-input";
import { Controller } from "react-hook-form";
import { OTPFIELD } from "@/type/formFieldType";
const Otp: FC<OTPFIELD> = ({ control, name }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <OtpInput
            value={value}
            onChange={onChange}
            numInputs={6}
            renderSeparator={<span>-</span>}
            inputStyle={{
              width: "50px",
              height: "50px",
              margin: "0 10px",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              textAlign: "center",
              outline: "none",
              backgroundColor: "#f7f7f7",
            }}
            renderInput={(props) => <input {...props} />}
          />
        );
      }}
    />
  );
};

export default Otp;
