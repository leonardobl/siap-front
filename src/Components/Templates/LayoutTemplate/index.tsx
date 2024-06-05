import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Outlet } from "react-router-dom";
import { useLayout } from "./useLayout";
import { DetailsMenu } from "../../Atoms/DetailsMenu";
import { NavLink } from "react-router-dom";

interface ILayoutTemplateProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
  titleHeader?: string;
}

export const LayoutTemplate = ({
  titleHeader,
  children,
  ...rest
}: ILayoutTemplateProps) => {
  const {
    logout,
    menuOpen,
    setMenuOpen,
    modalIsOpen,
    navigate,
    setModalIsOpen,
  } = useLayout();

  return (
    <S.Container {...rest}>
      <S.Menu data-open={menuOpen}>
        <S.HeaderMenu data-open={menuOpen}>
          <img
            id="iconCloseMenu"
            src="/assets/svg/icon-close-gray.svg"
            alt="icone de fechar"
            onClick={() => setMenuOpen(false)}
          />

          <div id="wrapperLogos">
            <img
              id="siglaSiap"
              src="/assets/img/sigla-siap.png"
              alt="logo siap"
            />
            <img
              id="logoSiap"
              src="/assets/img/logo-siap-blue.png"
              alt="logo siap"
            />
          </div>

          <div id="wrapperArrow">
            <img
              id="arrowLeft"
              alt="seta esquerda"
              src="/assets/svg/icon-arrowleft.svg"
              onClick={() => setMenuOpen(false)}
            />
            <img
              id="arrowRight"
              alt="seta direira"
              src="/assets/svg/icon-arrowright.svg"
              onClick={() => setMenuOpen(true)}
            />
          </div>
        </S.HeaderMenu>

        <S.WrapperGroupMenu data-border-bottom>
          <DetailsMenu title="CADASTRO" data-openmenu={menuOpen} open>
            <NavLink to={"/"}>
              <img src="/assets/svg/icon-users.svg" alt="icone usuario" />
              <span>Usuários</span>
            </NavLink>
            <NavLink to={"/login"}>
              <img src="/assets/svg/icon-services.svg" alt="icone usuario" />
              <span>Serviços</span>
            </NavLink>
            <NavLink to={"/cliente"}>
              <img src="/assets/svg/icon-user.svg" alt="icone usuario" />
              <span>Clientes</span>
            </NavLink>
            <NavLink to={"/login"}>
              <img src="/assets/svg/icon-contracts.svg" alt="icone usuario" />
              <span>Contratos</span>
            </NavLink>

            <NavLink to={"/login"}>
              <img src="/assets/svg/icon-prestadores.svg" alt="icone usuario" />
              <span>Prestadores</span>
            </NavLink>

            <NavLink to={"/login"}>
              <img
                src="/assets/svg/icon-prestadores-plus.svg"
                alt="icone usuario"
              />
              <span>Tipos de Prestadores</span>
            </NavLink>
          </DetailsMenu>
        </S.WrapperGroupMenu>

        <S.WrapperGroupMenu>
          <DetailsMenu title="CONTA" data-openmenu={menuOpen} open>
            <button onClick={logout}>
              <img src="/assets/svg/icon-logout.svg" alt="icone usuario" />
              <span>Logout</span>
            </button>
          </DetailsMenu>
        </S.WrapperGroupMenu>
      </S.Menu>
      <S.Main data-open={menuOpen}>
        <S.MainContent>
          <S.MainHeader>
            <h1>{titleHeader}</h1>
            <div id="wrapperIconCloseHeader">
              <img
                src="/assets/svg/hamburguermenu.svg"
                alt="icone menu hamburguer"
                id="iconCloseHeader"
                onClick={() => setMenuOpen(true)}
              />
            </div>
          </S.MainHeader>
          <S.Content>
            {children}
            <Outlet />
          </S.Content>
        </S.MainContent>
      </S.Main>
    </S.Container>
  );
};
