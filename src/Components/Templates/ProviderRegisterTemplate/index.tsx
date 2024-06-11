import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { TabProviderForms } from "../../Molecules/Tabs/TabProviderForms";
import { FormProviderBasic } from "../../Molecules/Forms/FormProviderBasic";
import { useProviderRegister } from "./useProviderRegister";
import { FormFinanceRegister } from "../../Molecules/Forms/FormFinanceRegister";

export const ProviderRegisterTemplate = () => {
  const { tabIdx, setTabIdx } = useProviderRegister();

  return (
    <LayoutTemplate titleHeader="Cadastro de Prestadores">
      <S.Container>
        <TabProviderForms tabIndex={tabIdx}>
          {[
            <FormProviderBasic
              submitForm={(e) => {
                console.log(e);
                setTabIdx(2);
              }}
              key={Math.random()}
            />,
            <FormFinanceRegister submitForm={(e) => console.log(e)} />,
            <p key={Math.random()}>Tab3</p>,
          ]}
        </TabProviderForms>
      </S.Container>
    </LayoutTemplate>
  );
};
