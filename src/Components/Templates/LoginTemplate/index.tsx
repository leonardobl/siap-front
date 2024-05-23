import React from "react";
import * as S from "./styles";
import { FormLogin } from "../../Molecules/FormLogin";
import { useLogin } from "./useLogin";

export const LoginTemplate = () => {
  const { submiteForm } = useLogin();

  return (
    <S.MyContainer>
      <S.MyTitle>
        Olá, <span></span>Bem vindo(a)
      </S.MyTitle>
      <S.MyText>
        Preencha o formulário <span>para fazer login.</span>
      </S.MyText>
      <FormLogin submiteForm={submiteForm} />
    </S.MyContainer>
  );
};
