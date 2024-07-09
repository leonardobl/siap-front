import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../../Hooks/useSessionStorage";
import { useContextSite } from "../../../Context/Context";
import { useMediaQuery } from "react-responsive";
import { RolesEnum } from "../../../Enum/roles";

export const useLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [dataUser] = useLocalStorage("dataUser");
  const { pathname } = useLocation();
  const { setIsLoad } = useContextSite();
  const isAdmin = [
    RolesEnum.ROLE_ADMIN,
    RolesEnum.ROLE_GERENTE,
    RolesEnum.ROLE_COLABORADOR,
  ].some((item) => dataUser?.roles?.includes(item));

  const isProvider = dataUser?.roles?.includes(RolesEnum.PRESTADOR);

  const isCliente = dataUser?.roles?.includes(RolesEnum.ROLE_CLIENTE);

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
    isProvider,
  };
};
