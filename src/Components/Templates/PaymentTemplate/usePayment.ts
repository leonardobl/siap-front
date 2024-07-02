import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const usePayment = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();

  function handleSubmit({ payment }: { payment: string }) {
    navigate(`/novo-agendamento/pagamento/${payment}?id=${id}`);
  }

  return { handleSubmit };
};
