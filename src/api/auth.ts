import { SignUpForm, SigninForm } from "../interface/auth";
import instance from "./instance";
export const SignUp = (user: SignUpForm) => {
  return instance.post("/signup", user);
};
export const SignIn = (user: SigninForm) => {
  return instance.post("/signin", user);
};
