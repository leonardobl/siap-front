import React from "react";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "../Components/Atoms/ProtectedRoute";
import { Providers } from "../Components/Pages/Providers";

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
    </Route>
  );
};
