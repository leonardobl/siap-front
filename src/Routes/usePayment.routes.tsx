import React from "react";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "../Components/Atoms/ProtectedRoute";
import { Payment } from "../Components/Pages/Payment";
import { Pix } from "../Components/Pages/Pix";
import { Ticket } from "../Components/Pages/Ticket";

export const usePaymentRoutes = () => {
  return (
    <Route path="pagamento">
      <Route
        index
        element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        }
      />
      <Route
        path="pix"
        element={
          <ProtectedRoute>
            <Pix />
          </ProtectedRoute>
        }
      />

      <Route
        path="boleto"
        element={
          <ProtectedRoute>
            <Ticket />
          </ProtectedRoute>
        }
      />
    </Route>
  );
};
