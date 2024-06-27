import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

export const usePayment = () => {
  const navigate = useNavigate();

  function handleSubmit(data) {
    navigate(`/novo-agendamento/pagamento/${data?.payment}?id=${v4()}`);
  }
  return { handleSubmit };
};
