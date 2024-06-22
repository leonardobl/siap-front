import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { FormClientDetail } from "../../Molecules/Forms/FormClientDetail";
import { useClient } from "./useClient";

export const ClientTemplate = () => {
  const { cliente } = useClient();

  return (
    <LayoutTemplate titleHeader="Dados do Cliente">
      <S.Container>
        <FormClientDetail client={cliente} />
      </S.Container>
    </LayoutTemplate>
  );
};
