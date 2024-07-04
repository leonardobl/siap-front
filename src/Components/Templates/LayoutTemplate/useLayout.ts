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
  const [dataUser] = useLocalStorage("dataUser");
  const { pathname } = useLocation();
  const { setIsLoad } = useContextSite();
  const isAdmin = [
    RolesEnum.ROLE_ADMIN,
    RolesEnum.ATENDENTE_PRESTADOR,
    RolesEnum.PRESTADOR,
    RolesEnum.PROFISSIONAL,
  ].some((item) => dataUser?.roles?.includes(item));
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
  };
};
