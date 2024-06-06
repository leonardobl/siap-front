import React from "react";
import { useNavigate } from "react-router-dom";

export const useClientList = () => {
  const navigate = useNavigate();
  return { navigate };
};
