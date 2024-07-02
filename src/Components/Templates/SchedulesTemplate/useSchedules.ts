import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { IPagination } from "../../../Types/pagination";
import { useLocation } from "react-router-dom";

const Title = {
  "/meus-agendamentos": "Meus Agendamentos",
  "/agendamentos": "Agendamentos",
};

export const useSchedules = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [pagination, setpagination] = useState<IPagination>({} as IPagination);
  const [numberPage, setNumberPage] = useState(0);
  const { pathname } = useLocation();

  function handleFilter() {}

  useEffect(() => {}, [numberPage]);

  return {
    filterOpen,
    setFilterOpen,
    handleFilter,
    isMobile,
    pagination,
    setNumberPage,
    pathname,
    Title,
  };
};
