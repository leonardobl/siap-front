import React from "react";
import { Navigate, Route } from "react-router-dom";
import { ProtectedRoute } from "../Components/Atoms/ProtectedRoute";

import { usePaymentRoutes } from "./usePayment.routes";
import { useNewScheduleServiceRoutes } from "./useNewScheduleService.routes";
import { NewScheduleServiceDetail } from "../Components/Pages/NewScheduleServiceDetail";

export const useNewScheduleRoutes = () => {
  const PaymentRoutes = usePaymentRoutes();
  const NewScheduleServiceRoutes = useNewScheduleServiceRoutes();

  return (
    <Route path="/novo-agendamento">
      <Route index element={<Navigate to={"servico"} />} />
      <Route
        path="agendamento"
        element={
          <ProtectedRoute>
            <NewScheduleServiceDetail />
          </ProtectedRoute>
        }
      />
      {NewScheduleServiceRoutes}
      {PaymentRoutes}
    </Route>
  );
};
