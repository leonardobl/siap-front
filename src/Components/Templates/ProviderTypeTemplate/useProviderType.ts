import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useProviderType = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [modalOpen, setModalOpen] = useState(false);

  return { filterOpen, setFilterOpen, isMobile, modalOpen, setModalOpen };
};
