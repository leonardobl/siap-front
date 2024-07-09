import React from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation, useNavigate } from "react-router-dom";

const StatusColors = {
  AGUARDANDO_PAGAMENTO: "#DEC800",
  AGENDADO: "#0829D7",
  PAGO: "#0075FF",
  FINALIZADO: "#00E825",
  CANCELADO: "#F20000",
  ABERTO: "#05B1C8",
};

export const useSheduleList = () => {
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleDetail(id: string) {
    if (pathname.includes("/meus-agendamentos")) {
      navigate(`/meus-agendamentos/agendamento?id=${id}`);
      return;
    }
    navigate(`/agendamentos/agendamento?id=${id}`);
  }

  return { StatusColors, isMobile, handleDetail };
};
