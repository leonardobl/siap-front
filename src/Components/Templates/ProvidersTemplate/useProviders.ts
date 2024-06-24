import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

export const useProviders = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [prestadores, setPrestadores] = useState([]);

  return {
    filterOpen,
    setFilterOpen,
    navigate,
    isMobile,
    prestadores,
  };
};
