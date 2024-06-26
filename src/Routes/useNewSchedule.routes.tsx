import React from "react";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "../Components/Atoms/ProtectedRoute";
import { NewSchedule } from "../Components/Pages/NewSchedule";
import { NewScheduleDetail } from "../Components/Pages/NewScheduleDetail";

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
      <Route
        path="agendamento"
        element={
          <ProtectedRoute>
            <NewScheduleDetail />
          </ProtectedRoute>
        }
      />
    </Route>
  );
};
