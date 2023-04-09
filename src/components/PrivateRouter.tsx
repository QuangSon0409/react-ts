import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { isAuthenticate } from "../utils/localStroage";
import { Alert, Space } from "antd";

type PrivateRouterProps = {
  children: JSX.Element;
};
const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  console.log(e, "I was closed.");
};

export const PrivateRouter = (props: PrivateRouterProps) => {
  const user = isAuthenticate();
  if (!user.role) {
    <Alert
      message="Bạn cần đăng nhập để thực hiện chức năng này"
      type="warning"
      closable
      onClose={onClose}
    />;
    return <Navigate to="/signin" />;
  }
  if (user.role === "member") {
    return <Navigate to="/" />;
  }
  return props.children;
};

export const PrivateMember = (props: PrivateRouterProps) => {
  const user = isAuthenticate();
  if (!user) {
    <Alert
      message="Bạn cần đăng nhập để thực hiện chức năng này"
      type="warning"
      closable
      onClose={onClose}
    />;
    return <Navigate to="/signin" />;
  }

  return props.children;
};
