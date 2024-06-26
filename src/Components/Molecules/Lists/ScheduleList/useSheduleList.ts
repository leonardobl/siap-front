import React from "react";
import { useMediaQuery } from "react-responsive";

const StatusColors = {
  "Aguardando Pagamento": "#DEC800",
  Agendado: "#0B4A89",
  Pago: "#0075FF",
  Finalizado: "#00E825",
  Cancelado: "#F20000",
};

export const useSheduleList = () => {
  const isMobile = useMediaQuery({ maxWidth: "640px" });

  return { StatusColors, isMobile };
};
