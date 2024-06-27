import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { IPagination } from "../../../Types/pagination";

export const useSchedules = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [pagination, setpagination] = useState<IPagination>({} as IPagination);
  const [numberPage, setNumberPage] = useState(0);

  function handleFilter() {}

  useEffect(() => {}, [numberPage]);

  return {
    filterOpen,
    setFilterOpen,
    handleFilter,
    isMobile,
    pagination,
    setNumberPage,
  };
};
