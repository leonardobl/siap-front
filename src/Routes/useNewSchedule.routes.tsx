import React from "react";
import { Navigate, Route } from "react-router-dom";
import { ProtectedRoute } from "../Components/Atoms/ProtectedRoute";
import { usePaymentRoutes } from "./usePayment.routes";
import { useNewScheduleServiceRoutes } from "./useNewScheduleService.routes";
import { Schedule } from "../Components/Pages/Schedule";
import { ScheduleDetail } from "../Components/Pages/ScheduleDetail";

export const useNewScheduleRoutes = () => {
  const PaymentRoutes = usePaymentRoutes();
  const NewScheduleServiceRoutes = useNewScheduleServiceRoutes();

  return (
    <Route path="/novo-agendamento">
      <Route index element={<Navigate to={"servico"} />} />
      <Route path="agendamento">
        <Route
          index
          element={
            <ProtectedRoute>
              <Schedule />
            </ProtectedRoute>
          }
        />

        <Route
          path="detalhe"
          element={
            <ProtectedRoute>
              <ScheduleDetail />
            </ProtectedRoute>
          }
        />
      </Route>
      {NewScheduleServiceRoutes}
      {PaymentRoutes}
    </Route>
  );
};
