import React from "react";

import { Navigate } from "react-router-dom";
import { useLocalStorage } from "../../../Hooks/useSessionStorage";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  // const { isAuth } = useContextSite();
  const [token] = useLocalStorage("@token");

  return token ? children : <Navigate to={"/login"} />;
};
