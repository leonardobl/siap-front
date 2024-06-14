import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const options = [
  {
    value: "Teste1",
    label: "Teste1",
  },
  {
    value: "Teste2",
    label: "Teste2",
  },
  {
    value: "Teste3",
    label: "Teste3",
  },
  {
    value: "Teste4",
    label: "Teste4",
  },
];

export const useUsers = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "640px" });

  return {
    filterOpen,
    setFilterOpen,
    isMobile,
    openModal,
    setOpenModal,
    options,
  };
};
