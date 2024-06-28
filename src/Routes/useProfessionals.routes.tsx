import React from "react";
import { Route } from "react-router-dom";
import { Professionals } from "../Components/Pages/Professionals";
import { ProfessionalRegister } from "../Components/Pages/ProfessionalRegister";
import { ProfessionalRegisterDetail } from "../Components/Pages/ProfessionalRegisterDetail";

export const userProfessionalsRoutes = () => {
  return (
    <Route path="/profissionais">
      <Route index element={<Professionals />} />
      <Route path="cadastro">
        <Route index element={<ProfessionalRegister />} />
        <Route path="detalhe" element={<ProfessionalRegisterDetail />} />
        <Route path="agenda" element={<ProfessionalRegister />} />
      </Route>
    </Route>
  );
};
