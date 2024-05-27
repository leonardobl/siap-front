import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Outlet } from "react-router-dom";
import { Button } from "../../Atoms/Button";
import { useLayout } from "./useLayout";
import { NavLink } from "react-router-dom";

interface LayoutTemplateProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
}

export const LayoutTemplate = (props: LayoutTemplateProps) => {
  const {
    logout,
    menuOpen,
    setMenuOpen,
    token,
    modalIsOpen,
    navigate,
    setModalIsOpen,
    isCliente,
    LINKS,
  } = useLayout();

  return (
    <S.Container {...props}>
      <S.WrapperMainMenu>
        <S.MainMenu data-open={menuOpen}></S.MainMenu>
      </S.WrapperMainMenu>

      <S.WrapperMain>
        <S.Wrapper>
          <S.Main>
            {props.children}
            <Outlet />
          </S.Main>
          {/* <S.IconMap src="/assets/svgs/paguexlogo.svg" alt="icone mapa" /> */}
        </S.Wrapper>
      </S.WrapperMain>
    </S.Container>
  );
};
