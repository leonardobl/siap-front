import React from "react";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "../Components/Atoms/ProtectedRoute";
import { Home } from "../Components/Pages/Home";
import { UserRegister } from "../Components/Pages/UserRegister";
import { Login } from "../Components/Pages/Login";

export const useMainRoutes = () => {
  return (
    <>
      <Route
        index
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="cadastro-usuario" element={<UserRegister />} />
      <Route path="login" element={<Login />} />
    </>
  );
};
