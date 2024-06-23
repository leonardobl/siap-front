import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { FormClientRegister } from "../../Molecules/Forms/FormClientRegister";
import { useClienteRegister } from "./useClienteRegister";

export const ClientRegisterTemplate = () => {
  const { handleSubmit } = useClienteRegister();

  return (
    <LayoutTemplate titleHeader="Cadastro de Clientes">
      <S.Container>
        <FormClientRegister submitForm={handleSubmit} />
      </S.Container>
    </LayoutTemplate>
  );
};
