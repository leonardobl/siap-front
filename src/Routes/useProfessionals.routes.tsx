import React from "react";
import { Route } from "react-router-dom";
import { Professionals } from "../Components/Pages/Professionals";
import { ProfessionalRegister } from "../Components/Pages/ProfessionalRegister";
import { ProfessionalRegisterDetail } from "../Components/Pages/ProfessionalRegisterDetail";
import { ProfessionalSchedule } from "../Components/Pages/ProfessionalSchedule";

export const userProfessionalsRoutes = () => {
  return (
    <Route path="/profissionais">
      <Route index element={<Professionals />} />
      <Route path="cadastro">
        <Route index element={<ProfessionalRegister />} />
        <Route path="detalhe" element={<ProfessionalRegisterDetail />} />
        <Route path="agenda" element={<ProfessionalSchedule />} />
      </Route>
    </Route>
  );
};
