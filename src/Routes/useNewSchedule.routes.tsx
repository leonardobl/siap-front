import React from "react";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "../Components/Atoms/ProtectedRoute";
import { NewSchedule } from "../Components/Pages/NewSchedule";
import { NewScheduleDetail } from "../Components/Pages/NewScheduleDetail";
import { usePaymentRoutes } from "./usePayment.routes";

export const useNewScheduleRoutes = () => {
  const PaymentRoutes = usePaymentRoutes();

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
      {PaymentRoutes}
    </Route>
  );
};
