import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { FormClientRegister } from "../../Molecules/Forms/FormClientRegister";

export const ClientRegisterTemplate = () => {
  return (
    <LayoutTemplate titleHeader="Cadastro de Clientes">
      <S.Container>
        <FormClientRegister />
      </S.Container>
    </LayoutTemplate>
  );
};
