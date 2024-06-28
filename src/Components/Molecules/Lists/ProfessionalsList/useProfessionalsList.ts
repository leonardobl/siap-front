import React from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

export const useProfessionalsList = () => {
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const navigate = useNavigate();
  return { isMobile, navigate };
};
