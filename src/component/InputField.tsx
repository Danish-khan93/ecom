import React, { FC } from "react";
import { Controller } from "react-hook-form";
import { Typography, FormLabel, OutlinedInput, Box } from "@mui/material";
import { INPUTFIELD } from "@/type/formFieldType";
const InputField: FC<INPUTFIELD> = ({
  name,
  placeHolder,
  label,
  control,
  rule,
  type,
  style
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rule}
      render={({ fieldState: { error }, field: { onChange, value } }) => {
        return (
          <Box className="flex flex-col">
            {label ? <FormLabel className="pb-2">{label}</FormLabel> : null}
            <OutlinedInput
            className={`${style}`}
              placeholder={placeHolder}
              type={type}
              onChange={onChange}
              sx={{
                "&:focus": {
                  borderColor: "#000", // Optional: Change border color on focus
                  outline: "none",
                },
              }}
            />
            {error && <Typography>{error?.message}</Typography>}
          </Box>
        );
      }}
    />
  );
};

export default InputField;
