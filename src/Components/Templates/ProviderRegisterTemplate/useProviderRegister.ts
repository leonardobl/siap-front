import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

export const useProviderRegister = () => {
  const [tabIdx, setTabIdx] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [modalOpen, setModalOpen] = useState(false);

  return {
    tabIdx,
    setTabIdx,
    filterOpen,
    setFilterOpen,
    navigate,
    isMobile,
    modalOpen,
    setModalOpen,
  };
};
