import React, { ComponentProps } from "react";
import * as S from "./styles";

interface ITabProviderFormsProps extends ComponentProps<"div"> {
  children: React.ReactElement[];
  tabIndex: number;
  setTabIndex: (n: number) => void;
}

export const TabProviderForms = ({
  children,
  tabIndex,
  setTabIndex,
  ...rest
}: ITabProviderFormsProps) => {
  return (
    <S.Container {...rest}>
      <S.Headers>
        <S.TabItem onClick={() => setTabIndex(1)} data-active={tabIndex === 1}>
          Dados Básicos
        </S.TabItem>
        <S.TabItem onClick={() => setTabIndex(2)} data-active={tabIndex === 2}>
          Financeiro
        </S.TabItem>
        <S.TabItem onClick={() => setTabIndex(3)} data-active={tabIndex === 3}>
          Profissional
        </S.TabItem>
      </S.Headers>
      <S.TabContent>{children[tabIndex - 1]}</S.TabContent>
    </S.Container>
  );
};
