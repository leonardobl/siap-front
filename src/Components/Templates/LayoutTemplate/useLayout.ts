import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../../Hooks/useSessionStorage";
import { useContextSite } from "../../../Context/Context";

export const useLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [token] = useLocalStorage("@token");
  const { pathname } = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { setIsLoad } = useContextSite();

  function logout() {
    setIsLoad(true);
    setModalIsOpen(false);

    setTimeout(() => {
      localStorage.clear();
      window.open("/login", "_self");
      setIsLoad(false);
    }, 1000);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return {
    logout,
    menuOpen,
    setMenuOpen,
    modalIsOpen,
    navigate,
    setModalIsOpen,
  };
};
