import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

export const useServices = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: "640px" });

  return { filterOpen, setFilterOpen, isMobile, navigate };
};
