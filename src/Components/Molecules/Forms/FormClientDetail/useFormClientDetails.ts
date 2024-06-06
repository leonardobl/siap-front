import React from "react";
import { useNavigate } from "react-router-dom";

export const useFormClientDetails = () => {
  const navigate = useNavigate();
  return { navigate };
};
