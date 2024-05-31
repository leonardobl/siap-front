import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useDetailsMenu = () => {
  const [isOpen, setISOpen] = useState(false);
  const navigate = useNavigate();

  return {};
};
