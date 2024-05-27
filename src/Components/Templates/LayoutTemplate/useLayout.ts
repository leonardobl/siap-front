import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../../Hooks/useSessionStorage";
import { RolesEnum } from "../../../Enum/roles";
import { useContextSite } from "../../../Context/Context";

const LINKS = {
  starcheck: "https://starcheck.com.br/",
  log: "https://logvistorias.com.br/",
  vlx: "https://veloxvistorias.com.br/",
  tokyo: "https://tokyovistorias.com.br/",
};

export const useLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [cliente] = useLocalStorage("cliente");
  const [token] = useLocalStorage("@token");
  const { pathname } = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { setIsLoad } = useContextSite();

  const isCliente = cliente?.roles?.includes(RolesEnum.ROLE_CLIENTE);

  function logout() {
    setIsLoad(true);
    setModalIsOpen(false);

    setTimeout(() => {
      localStorage.clear();
      setIsLoad(false);
      window.open("/", "_self");
    }, 1000);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return {
    logout,
    menuOpen,
    setMenuOpen,
    token,
    modalIsOpen,
    navigate,
    setModalIsOpen,
    isCliente,
    LINKS,
  };
};
