import React from "react";
import { Route } from "react-router-dom";
import { Contracts } from "../Components/Pages/Contracts";
import { ContractRegister } from "../Components/Pages/ContractRegister";

export const useContractsRoutes = () => {
  return (
    <Route path="/contratos">
      <Route index element={<Contracts />} />
      <Route path="cadastro" element={<ContractRegister />} />
    </Route>
  );
};
