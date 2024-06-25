import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./stylest";
import { Button } from "../../Atoms/Button";
import { useProviders } from "./useProviders";
import { FormFilterProviders } from "../../Molecules/Forms/FormFilterProviders";
import { ProvidersList } from "../../Molecules/Lists/ProvidersList";
import { Pagination } from "../../Atoms/Pagination";

export const ProvidersTemplate = () => {
  const {
    filterOpen,
    navigate,
    setFilterOpen,
    isMobile,
    prestadores,
    pagination,
    setNumberPage,
    handleFilter,
    handleClean,
  } = useProviders();

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
          <FormFilterProviders
            onClean={handleClean}
            submitForm={handleFilter}
          />
        )}

        <ProvidersList prestadores={prestadores} />

        {prestadores?.length > 0 && (
          <Pagination
            totalPage={pagination.totalPage}
            totalRegister={pagination.totalRegister}
            maxPageNumbersDisplayed={isMobile ? 3 : 10}
            actualPage={pagination.actualPage}
            key={`${isMobile} - ${pagination} - ${Math.random()}`}
            setNumberPage={setNumberPage}
          />
        )}
      </S.Container>
    </LayoutTemplate>
  );
};
