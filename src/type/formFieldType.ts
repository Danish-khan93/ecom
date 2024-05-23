import { ReactNode } from "react";

export type INPUTFIELD = {
  name: string;
  label?: string;
  placeHolder: string;
  control: any;
  rule: any;
  type: string;
  style?:string
};

export type COMBUTTON = {
  children: ReactNode;
  type: "button" | "submit" | "reset";
  style?: string;
  clickHandler?: () => void;
};

export type COMCHECKBOX = {
  name: string;
  label: string;
  control: any;
  rule?: any;
};

export type OTPFIELD = {
  name: string;
  control: any;
  
};
