import React, { ComponentProps } from "react";
import * as S from "./styles";
import { useTabProviderForm } from "./useTabProviderForm";

interface ITabProviderFormsProps extends ComponentProps<"div"> {
  children: React.ReactElement[];
}

export const TabProviderForms = ({
  children,
  ...rest
}: ITabProviderFormsProps) => {
  const { setTabIdx, tabIdx } = useTabProviderForm();

  return (
    <S.Container {...rest}>
      <S.Headers>
        <S.TabItem onClick={() => setTabIdx(1)} data-active={tabIdx === 1}>
          Dados Básicos
        </S.TabItem>
        <S.TabItem onClick={() => setTabIdx(2)} data-active={tabIdx === 2}>
          Financeiro
        </S.TabItem>
        <S.TabItem onClick={() => setTabIdx(3)} data-active={tabIdx === 3}>
          Profissional
        </S.TabItem>
      </S.Headers>
      <S.TabContent>{children[tabIdx - 1]}</S.TabContent>
    </S.Container>
  );
};
