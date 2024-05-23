export type FORMTYPE = {
  name: string;
  password: string;
  rememberMe: boolean;
  email: string;
  confirmPassword?: "";
};

export type FORMTYPESIGNIN = Omit<FORMTYPE, "confirmPassword" | "name">;
export type FORMTYPESIGNUP = Omit<FORMTYPE, "rememberMe">;
export type FORMTYPEFORGOTPASS = Omit<FORMTYPE, "rememberMe" | "confirmPassword" | "name" | "password"  >;
export type FORMTYPERESTPASS = Omit<FORMTYPE, "rememberMe" | "email" | "name"   >;


export type FORMOTP = {
  otp:string
}
