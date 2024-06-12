import React from "react";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "../Components/Atoms/ProtectedRoute";
import { Clients } from "../Components/Pages/Clients";
import { ClientRegister } from "../Components/Pages/ClientRegister";
import { Client } from "../Components/Pages/Client";

export const useClientsRoutes = () => {
  return (
    <Route path="clientes">
      <Route
        index
        element={
          <ProtectedRoute>
            <Clients />
          </ProtectedRoute>
        }
      />
      <Route
        path="cadastro"
        element={
          <ProtectedRoute>
            <ClientRegister />
          </ProtectedRoute>
        }
      />
      <Route
        path="cliente"
        element={
          <ProtectedRoute>
            <Client />
          </ProtectedRoute>
        }
      />
    </Route>
  );
};
