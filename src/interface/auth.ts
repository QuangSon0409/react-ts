import * as Yup from "yup";
export const signupSchema = Yup.object({
  name: Yup.string().required("LastName không được để trống"),
  email: Yup.string()
    .email("Email đúng định đạng")
    .required("Email không được để trống"),
  password: Yup.string().min(6).required("Password không được để trống"),
  confirmPassword: Yup.string()
    .min(6)
    .oneOf([Yup.ref("password")], "Mật khẩu không có khớp"),
});
export type SignUpForm = Yup.InferType<typeof signupSchema>;

export const signinSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});
export type SigninForm = Yup.InferType<typeof signinSchema>;
