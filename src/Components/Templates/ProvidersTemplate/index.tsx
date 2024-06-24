import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./stylest";
import { Button } from "../../Atoms/Button";
import { useProviders } from "./useProviders";
import { FormFilterProviders } from "../../Molecules/Forms/FormFilterProviders";
import { ProvidersList } from "../../Molecules/Lists/ProvidersList";
import { Pagination } from "../../Atoms/Pagination";

export const ProvidersTemplate = () => {
  const { filterOpen, navigate, setFilterOpen, isMobile, prestadores } =
    useProviders();

  return (
    <LayoutTemplate titleHeader="Prestadores">
      <S.Container>
        <S.WrapperButtons>
          <Button
            iconleft="/assets/svg/icon-filter.svg"
            variant={filterOpen ? "filter" : null}
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

        <ProvidersList prestadores={[]} />

        <Pagination
          totalPage={12}
          totalRegister={20}
          maxPageNumbersDisplayed={isMobile ? 3 : 10}
          actualPage={0}
          setNumberPage={() => ""}
        />
      </S.Container>
    </LayoutTemplate>
  );
};
