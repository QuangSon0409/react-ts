import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticate } from "../utils/localStroage";

type PrivateRouterProps = {
  children: JSX.Element;
};

const PrivateRouter = (props: PrivateRouterProps) => {
  const user = isAuthenticate();
  if (!user.role) {
    return <Navigate to="/signin" />;
  }
  if (user.role === "member") {
    return <Navigate to="/" />;
  }
  return props.children;
};

export default PrivateRouter;
