import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { FormContractRegister } from "../../Molecules/Forms/FormContractRegister";
import { useContractRegister } from "./useContractRegister";

export const ContractRegisterTemplate = () => {
  const {} = useContractRegister();
  return (
    <LayoutTemplate titleHeader="Cadastro Novo Contrato">
      <S.Container>
        <FormContractRegister submitForm={(e) => console.log(e)} />
      </S.Container>
    </LayoutTemplate>
  );
};
