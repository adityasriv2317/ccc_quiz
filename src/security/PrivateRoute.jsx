import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { isLogin } = useAuth();

  return (
    <Route {...rest} element={isLogin ? <Component /> : <Navigate to="/" />} />
  );
};

import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default PrivateRoute;
