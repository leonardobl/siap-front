import React, { useState } from "react";

export const useClient = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  return { filterOpen, setFilterOpen };
};
