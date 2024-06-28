import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { FormProfessionalDetail } from "../../Molecules/Forms/FormProfessionalDetail";
import { useProfessionalRegisterDetail } from "./useProfessionalRegisterDetail";

export const ProfessionalRegisterDetailTemplate = () => {
  const { professional, navigate } = useProfessionalRegisterDetail();

  return (
    <LayoutTemplate titleHeader="Dados do Profissional">
      <S.Container>
        <S.WrapperButton>
          <Button
            iconleft="/assets/svg/icon-plus.svg"
            onClick={() => navigate("/profissionais/cadastro/agenda")}
          >
            Cadastrar Agenda
          </Button>
        </S.WrapperButton>

        <FormProfessionalDetail professional={professional} />
      </S.Container>
    </LayoutTemplate>
  );
};
