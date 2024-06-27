import React from "react";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "../Components/Atoms/ProtectedRoute";
import { Schedules } from "../Components/Pages/Schedules";
import { ScheduleDetail } from "../Components/Pages/ScheduleDetail";

export const useSchedulesRoutes = () => {
  return (
    <>
      <Route path="agendamentos">
        <Route
          index
          element={
            <ProtectedRoute>
              <Schedules />
            </ProtectedRoute>
          }
        />
        <Route
          path="agendamento"
          element={
            <ProtectedRoute>
              <ScheduleDetail />
            </ProtectedRoute>
          }
        />
      </Route>
    </>
  );
};
