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
          {[
            <FormProviderBasic
              submitForm={(e) => console.log(e)}
              key={Math.random()}
            />,
            <p key={Math.random()}>Tab2</p>,
            <p key={Math.random()}>Tab3</p>,
          ]}
        </TabProviderForms>
      </S.Container>
    </LayoutTemplate>
  );
};
