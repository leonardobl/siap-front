import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { FormClientDetail } from "../../Molecules/Forms/FormClientDetail";
import { mockClientDetail } from "../../../Mocks/mock-client";

export const ClientTemplate = () => {
  return (
    <LayoutTemplate titleHeader="Dados do Cliente">
      <S.Container>
        <FormClientDetail client={mockClientDetail} />
      </S.Container>
    </LayoutTemplate>
  );
};
