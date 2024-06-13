import React from "react";
import { Route } from "react-router-dom";
import { Contracts } from "../Components/Pages/Contracts";

export const useContractsRoutes = () => {
  return (
    <Route path="/contratos">
      <Route index element={<Contracts />} />
    </Route>
  );
};
