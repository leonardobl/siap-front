import React from "react";
import { useMediaQuery } from "react-responsive";

const StatusColors = {
  Suspenso: "#2082E3",
  Inativo: "#EDBD2E",
  Ativo: "#ED0000",
};

export const useContractsList = () => {
  const isMobile = useMediaQuery({ maxWidth: "640px" });

  return { isMobile, StatusColors };
};
