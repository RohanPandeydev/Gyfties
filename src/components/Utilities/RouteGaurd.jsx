import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { token } = useContext(UserContext);
  if (!!!token) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};
