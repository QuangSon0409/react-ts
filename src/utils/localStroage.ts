import { SigninForm } from "../interface/auth";

export const authenticated = (user: SigninForm) => {
  localStorage.setItem("user", JSON.stringify(user));
};
export const isAuthenticate = () => {
  if (!localStorage.getItem("user")) return;
  return JSON.parse(localStorage.getItem("user") as string);
};
