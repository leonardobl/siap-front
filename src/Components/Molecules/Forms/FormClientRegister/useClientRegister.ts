import React from "react";
import { useNavigate } from "react-router-dom";

export const useClientRegister = () => {
  const navigate = useNavigate();
  return { navigate };
};
