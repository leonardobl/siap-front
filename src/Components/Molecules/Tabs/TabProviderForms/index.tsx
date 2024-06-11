import React, { ComponentProps } from "react";
import * as S from "./styles";

interface ITabProviderFormsProps extends ComponentProps<"div"> {
  children: React.ReactElement[];
  tabIndex: number;
}

export const TabProviderForms = ({
  children,
  tabIndex,
  ...rest
}: ITabProviderFormsProps) => {
  return (
    <S.Container {...rest}>
      <S.Headers>
        <S.TabItem data-active={tabIndex === 1}>Dados Básicos</S.TabItem>
        <S.TabItem data-active={tabIndex === 2}>Financeiro</S.TabItem>
        <S.TabItem data-active={tabIndex === 3}>Profissional</S.TabItem>
      </S.Headers>
      <S.TabContent>{children[tabIndex - 1]}</S.TabContent>
    </S.Container>
  );
};
