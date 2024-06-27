import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

export const useNewSchedule = () => {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate(`/novo-agendamento/servico/detalhe?id=${v4()}`);
  }
  return { handleSubmit };
};
