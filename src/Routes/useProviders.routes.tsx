import React from "react";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "../Components/Atoms/ProtectedRoute";
import { Providers } from "../Components/Pages/Providers";
import { ProviderRegister } from "../Components/Pages/ProviderRegister";

export const useProvidersRoutes = () => {
  return (
    <Route path="prestadores">
      <Route
        index
        element={
          <ProtectedRoute>
            <Providers />
          </ProtectedRoute>
        }
      />
      <Route
        path="cadastro"
        element={
          <ProtectedRoute>
            <ProviderRegister />
          </ProtectedRoute>
        }
      />
    </Route>
  );
};
