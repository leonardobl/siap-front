import React from "react";
import { Route } from "react-router-dom";
import { ProviderType } from "../Components/Pages/ProviderType";
import { ProtectedRoute } from "../Components/Atoms/ProtectedRoute";

export const useProviderTypeRoutes = () => {
  return (
    <Route
      path="/tipo-prestadores"
      element={
        <ProtectedRoute>
          <ProviderType />
        </ProtectedRoute>
      }
    />
  );
};
