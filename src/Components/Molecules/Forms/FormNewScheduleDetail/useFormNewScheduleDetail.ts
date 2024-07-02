import React from "react";
import { useNavigate } from "react-router-dom";

export const useFormNewScheduleDetail = () => {
  const navigate = useNavigate();

  return { navigate };
};
