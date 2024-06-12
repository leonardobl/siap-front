import React from "react";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "../Components/Atoms/ProtectedRoute";
import { Services } from "../Components/Pages/Services";

export const useServicesRoutes = () => {
  return (
    <Route path="/servicos">
      <Route
        index
        element={
          <ProtectedRoute>
            <Services />
          </ProtectedRoute>
        }
      />
    </Route>
  );
};
