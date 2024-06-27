import React from "react";
import { Route, Navigate } from "react-router-dom";
import { UserRegister } from "../Components/Pages/UserRegister";
import { Login } from "../Components/Pages/Login";

export const useMainRoutes = () => {
  return (
    <>
      <Route index element={<Navigate to={"/usuarios"} />} />
      <Route path="cadastro-usuario" element={<UserRegister />} />
      <Route path="login" element={<Login />} />
    </>
  );
};
