import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const usePix = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      navigate("/novo-agendamento/pagamento/confirmacao");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return {};
};
