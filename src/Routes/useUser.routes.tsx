import React from "react";
import { Route } from "react-router-dom";
import { Users } from "../Components/Pages/Users";

export const useUserRoutes = () => {
  return (
    <Route path="/usuarios">
      <Route index element={<Users />} />
    </Route>
  );
};
