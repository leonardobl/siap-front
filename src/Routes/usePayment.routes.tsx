import React from "react";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "../Components/Atoms/ProtectedRoute";
import { Payment } from "../Components/Pages/Payment";

export const usePaymentRoutes = () => {
  return (
    <Route path="/pagamento">
      <Route
        index
        element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        }
      />
    </Route>
  );
};
