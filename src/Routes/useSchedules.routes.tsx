import React from "react";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "../Components/Atoms/ProtectedRoute";
import { Schedules } from "../Components/Pages/Schedules";

export const useSchedulesRoutes = () => {
  return (
    <>
      <Route
        path="/agendamentos"
        element={
          <ProtectedRoute>
            <Schedules />
          </ProtectedRoute>
        }
      />
    </>
  );
};
