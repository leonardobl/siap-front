import React from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 } from "uuid";

const StatusColors = {
  "Aguardando Pagamento": "#DEC800",
  Agendado: "#0B4A89",
  Pago: "#0075FF",
  Finalizado: "#00E825",
  Cancelado: "#F20000",
};

export const useSheduleList = () => {
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleDetail() {
    if (pathname.includes("/meus-agendamentos")) {
      navigate(`/meus-agendamentos/agendamento?id=${v4()}`);
      return;
    }
    navigate(`/agendamentos/agendamento?id=${v4()}`);
  }

  return { StatusColors, isMobile, handleDetail };
};
