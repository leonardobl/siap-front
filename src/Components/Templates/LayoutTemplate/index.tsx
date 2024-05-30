import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Outlet } from "react-router-dom";
import { useLayout } from "./useLayout";
import { IoMdMenu } from "react-icons/io";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

interface ILayoutTemplateProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
}

export const LayoutTemplate = (props: ILayoutTemplateProps) => {
  const {
    logout,
    menuOpen,
    setMenuOpen,
    modalIsOpen,
    navigate,
    setModalIsOpen,
  } = useLayout();

  return (
    <S.Container {...props}>
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
            <IoIosArrowDropleftCircle
              id="arrowLeft"
              size={32}
              onClick={() => setMenuOpen(false)}
            />
            <IoIosArrowDroprightCircle
              id="arrowRight"
              size={32}
              onClick={() => setMenuOpen(true)}
            />
          </div>
        </S.HeaderMenu>
        <p>menu</p>
      </S.Menu>
      <S.Main data-open={menuOpen}>
        <S.MainContent>
          <S.MainHeader>
            <div id="wrapperIconCloseHeader">
              <IoMdMenu
                id="iconCloseHeader"
                onClick={() => setMenuOpen(true)}
              />
            </div>
          </S.MainHeader>
          {props.children}
          <Outlet />
        </S.MainContent>
      </S.Main>
    </S.Container>
  );
};
