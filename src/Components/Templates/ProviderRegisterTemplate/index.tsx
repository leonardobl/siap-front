import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { TabProviderForms } from "../../Molecules/Tabs/TabProviderForms";
import { FormProviderBasic } from "../../Molecules/Forms/FormProviderBasic";
import { useProviderRegister } from "./useProviderRegister";

export const ProviderRegisterTemplate = () => {
  const { tabIdx, setTabIdx } = useProviderRegister();

  return (
    <LayoutTemplate titleHeader="Cadastro de Prestadores">
      <S.Container>
        <TabProviderForms setTabIndex={setTabIdx} tabIndex={tabIdx}>
          {[<FormProviderBasic />, <p>Tab2</p>, <p>Tab3</p>]}
        </TabProviderForms>
      </S.Container>
    </LayoutTemplate>
  );
};
