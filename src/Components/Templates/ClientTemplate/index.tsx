import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { FormClientDetail } from "../../Molecules/Forms/FormClientDetail";

export const ClientTemplate = () => {
  return (
    <LayoutTemplate titleHeader="Dados do Cliente">
      <S.Container>
        <FormClientDetail />
      </S.Container>
    </LayoutTemplate>
  );
};
