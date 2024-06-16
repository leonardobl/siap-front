import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { Button } from "../../Atoms/Button";
import { useProviderType } from "./useProviderType";
import { FormFilterProviderType } from "../../Molecules/Forms/FomrFilterProviderType";

export const ProviderTypeTemplate = () => {
  const { filterOpen, isMobile, setFilterOpen } = useProviderType();

  return (
    <LayoutTemplate titleHeader="Tipos de Prestadores">
      <S.Container>
        <S.WrapperButtons>
          <Button
            iconleft="/assets/svg/icon-filter.svg"
            variant={filterOpen ? "filter" : null}
            onClick={() => setFilterOpen((prev) => !prev)}
          >
            Filtro
          </Button>
          <Button iconleft="/assets/svg/icon-plus.svg" onClick={() => ""}>
            Cadastrar
          </Button>
        </S.WrapperButtons>

        {filterOpen && (
          <FormFilterProviderType submitForm={(e) => console.log(e)} />
        )}
      </S.Container>
    </LayoutTemplate>
  );
};
