import React from "react";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "../Components/Atoms/ProtectedRoute";
import { NewSchedule } from "../Components/Pages/NewSchedule";

export const useNewScheduleRoutes = () => {
  return (
    <Route path="/novo-agendamento">
      <Route
        index
        element={
          <ProtectedRoute>
            <NewSchedule />
          </ProtectedRoute>
        }
      />
    </Route>
  );
};
