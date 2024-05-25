"use client"
import React, { FC } from "react";
import { Controller } from "react-hook-form";
import { Checkbox, FormLabel } from "@mui/material";
import { COMCHECKBOX } from "@/type/formFieldType";

const ComCheckBox: FC<COMCHECKBOX> = ({ name, control, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref } }) => {
        console.log(value);

        return (
          <FormLabel>
            <Checkbox
              onChange={onChange}
              checked={value}
              defaultChecked={false}
              inputRef={ref}
            />
            {label}
          </FormLabel>
        );
      }}
    />
  );
};

export default ComCheckBox;


// check box sahi karna hai agar check nai ho tu false ay abhi undefined araha hai 

