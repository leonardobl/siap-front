import React from "react";
import { Route } from "react-router-dom";
import { ProviderType } from "../Components/Pages/ ProviderType";

export const useProviderTypeRoutes = () => {
  return <Route path="/tipo-prestadores" element={<ProviderType />} />;
};
