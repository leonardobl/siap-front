import React from "react";
import { useMediaQuery } from "react-responsive";

export const useProvidersList = () => {
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  return { isMobile };
};
