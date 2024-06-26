import React, { useState } from "react";

export const useSchedules = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  function handleFilter() {}

  return { filterOpen, setFilterOpen, handleFilter };
};
