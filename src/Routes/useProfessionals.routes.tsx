import React from "react";
import { Route } from "react-router-dom";
import { Professionals } from "../Components/Pages/Professionals";
import { ProfessionalRegister } from "../Components/Pages/ProfessionalRegister";
import { ProfessionalRegisterDetail } from "../Components/Pages/ProfessionalRegisterDetail";
import { ProfessionalSchedule } from "../Components/Pages/ProfessionalSchedule";
import { ProtectedRoute } from "../Components/Atoms/ProtectedRoute";

export const userProfessionalsRoutes = () => {
  return (
    <Route path="/profissionais">
      <Route
        index
        element={
          <ProtectedRoute>
            <Professionals />
          </ProtectedRoute>
        }
      />
      <Route path="cadastro">
        <Route
          index
          element={
            <ProtectedRoute>
              <ProfessionalRegister />
            </ProtectedRoute>
          }
        />
        <Route
          path="detalhe"
          element={
            <ProtectedRoute>
              <ProfessionalRegisterDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="agenda"
          element={
            <ProtectedRoute>
              <ProfessionalSchedule />
            </ProtectedRoute>
          }
        />
      </Route>
    </Route>
  );
};
