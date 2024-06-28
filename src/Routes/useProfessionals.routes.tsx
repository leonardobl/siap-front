import React from "react";
import { Route } from "react-router-dom";
import { Professionals } from "../Components/Pages/Professionals";

export const userProfessionalsRoutes = () => {
  return (
    <Route path="/profissionais">
      <Route index element={<Professionals />} />
    </Route>
  );
};
