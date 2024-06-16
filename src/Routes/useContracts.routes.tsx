import React from "react";
import { Route } from "react-router-dom";
import { Contracts } from "../Components/Pages/Contracts";
import { ContractRegister } from "../Components/Pages/ContractRegister";
import { ProtectedRoute } from "../Components/Atoms/ProtectedRoute";

export const useContractsRoutes = () => {
  return (
    <Route path="/contratos">
      <Route
        index
        element={
          <ProtectedRoute>
            <Contracts />
          </ProtectedRoute>
        }
      />
      <Route
        path="cadastro"
        element={
          <ProtectedRoute>
            <ContractRegister />
          </ProtectedRoute>
        }
      />
    </Route>
  );
};
