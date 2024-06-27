import React from "react";
import { useMediaQuery } from "react-responsive";

const StatusColors = {
  Ativo: "#2082E3",
  Inativo: "#ED0000",
  Suspenso: "#EDBD2E",
};
export const useContractsList = () => {
  const isMobile = useMediaQuery({ maxWidth: "640px" });

  return { isMobile, StatusColors };
};
