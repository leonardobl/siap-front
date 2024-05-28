import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Outlet } from "react-router-dom";
import { useLayout } from "./useLayout";

interface ILayoutTemplateProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
}

export const LayoutTemplate = (props: ILayoutTemplateProps) => {
  const {
    logout,
    menuOpen,
    setMenuOpen,
    token,
    modalIsOpen,
    navigate,
    setModalIsOpen,
    isCliente,
  } = useLayout();

  return (
    <S.Container {...props}>
      <S.WrapperMainMenu>
        <S.MainMenu data-open={false}>
          <p>Menu</p>
        </S.MainMenu>
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
