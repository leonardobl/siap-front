import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { TabProviderForms } from "../../Molecules/Tabs/TabProviderForms";

export const ProviderRegisterTemplate = () => {
  return (
    <LayoutTemplate titleHeader="Cadastro de Prestadores">
      <S.Container>
        <TabProviderForms>
          {[<p>Tab1</p>, <p>Tab2</p>, <p>Tab3</p>]}
        </TabProviderForms>
      </S.Container>
    </LayoutTemplate>
  );
};
