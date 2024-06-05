import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useClient = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();
  return { filterOpen, setFilterOpen, navigate };
};
