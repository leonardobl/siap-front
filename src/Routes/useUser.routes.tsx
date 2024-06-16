import React from "react";
import { Route } from "react-router-dom";
import { Users } from "../Components/Pages/Users";
import { ProtectedRoute } from "../Components/Atoms/ProtectedRoute";

export const useUserRoutes = () => {
  return (
    <Route path="/usuarios">
      <Route
        index
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />
    </Route>
  );
};
