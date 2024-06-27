import React from "react";
import { useNavigate } from "react-router-dom";

export const useFormSchedule = () => {
  const navigate = useNavigate();
  return { navigate };
};
