import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../../Hooks/useSessionStorage";
import { useContextSite } from "../../../Context/Context";
import { useMediaQuery } from "react-responsive";
import { RolesEnum } from "../../../Enum/roles";

export const useLayout = () => {
  const isMobile = useMediaQuery({ maxWidth: "1020px" });
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [token] = useLocalStorage("@token");
  const [usuarioLogado] = useLocalStorage("usuario");
  const { pathname } = useLocation();
  const { setIsLoad } = useContextSite();

  const isCliente = usuarioLogado?.roles?.includes(RolesEnum.ROLE_CLIENTE);
  const isAdmin = usuarioLogado?.roles?.includes(RolesEnum.ROLE_ADMIN);

  function logout() {
    setIsLoad(true);

    setTimeout(() => {
      localStorage.clear();
      window.open("/login", "_self");
      setIsLoad(false);
    }, 1000);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [pathname]);

  return {
    logout,
    menuOpen,
    setMenuOpen,
    navigate,
    isCliente,
    isAdmin,
  };
};
