import React from "react";
import * as S from "./styles";

interface ILayoutNoLogin {
  children: JSX.Element;
}

export const LayoutNoLogin = ({ children }: ILayoutNoLogin) => {
  return (
    <S.Container>
      <S.LeftSide>
        <div id="fake-container"></div>

        <div>
          <S.LogoSiap
            src="/assets/img/logo-siap-simples-white.png"
            alt="logo marca siap"
          />
        </div>
        <S.WrapperText>
          <p>
            Sistema Integrado de <span>Agendamentos e Pagamentos</span>
          </p>
        </S.WrapperText>
      </S.LeftSide>
      <S.RightSide>{children}</S.RightSide>
    </S.Container>
  );
};
