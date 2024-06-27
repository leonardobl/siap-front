import React from "react";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "../Components/Atoms/ProtectedRoute";
import { NewScheduleService } from "../Components/Pages/NewScheduleService";
import { NewScheduleServiceDetail } from "../Components/Pages/NewScheduleServiceDetail";

export const useNewScheduleServiceRoutes = () => {
  return (
    <Route path="servico">
      <Route
        index
        element={
          <ProtectedRoute>
            <NewScheduleService />
          </ProtectedRoute>
        }
      />
      <Route
        path="detalhe"
        element={
          <ProtectedRoute>
            <NewScheduleServiceDetail />
          </ProtectedRoute>
        }
      />
    </Route>
  );
};
