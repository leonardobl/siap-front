import React from "react";
import { useNavigate } from "react-router-dom";

export const useContractRegister = () => {
  const navigate = useNavigate();

  function handleSubmit(data) {}
  return { handleSubmit };
};
