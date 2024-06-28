import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { FormProfessionalRegister } from "../../Molecules/Forms/FormProfessionalRegister";
import { useProfessionalRegister } from "./useProfessionalRegister";

export const ProfessionalRegisterTemplate = () => {
  const { handleSubmitProfessional } = useProfessionalRegister();

  return (
    <LayoutTemplate titleHeader="Cadastro de Profissionais">
      <S.Container>
        <S.WrapperForm>
          <h1>Cadastro de Profissionais</h1>
          <FormProfessionalRegister submitForm={handleSubmitProfessional} />
        </S.WrapperForm>
      </S.Container>
    </LayoutTemplate>
  );
};
