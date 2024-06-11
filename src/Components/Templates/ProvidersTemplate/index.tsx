import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./stylest";
import { Button } from "../../Atoms/Button";
import { useProviders } from "./useProviders";
import { FormFilterProviders } from "../../Molecules/Forms/FormFilterProviders";

export const ProvidersTemplate = () => {
  const { filterOpen, navigate, setFilterOpen } = useProviders();

  return (
    <LayoutTemplate titleHeader="Prestadores">
      <S.Container>
        <S.WrapperButtons>
          <Button
            iconleft="/assets/svg/icon-filter.svg"
            variant={filterOpen ? "blue" : null}
            onClick={() => setFilterOpen((prev) => !prev)}
          >
            Filtro
          </Button>
          <Button
            iconleft="/assets/svg/icon-plus.svg"
            onClick={() => navigate("/prestadores/cadastro")}
          >
            Cadastrar
          </Button>
        </S.WrapperButtons>
        {filterOpen && (
          <FormFilterProviders submitForm={(data) => console.log(data)} />
        )}
      </S.Container>
    </LayoutTemplate>
  );
};
