import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { FormProfessionalDetail } from "../../Molecules/Forms/FormProfessionalDetail";

export const ProfessionalRegisterDetailTemplate = () => {
  return (
    <LayoutTemplate titleHeader="Dados do Profissional">
      <S.Container>
        <S.WrapperButton>
          <Button iconleft="/assets/svg/icon-plus.svg">Cadastrar Agenda</Button>
        </S.WrapperButton>

        <FormProfessionalDetail />
      </S.Container>
    </LayoutTemplate>
  );
};
