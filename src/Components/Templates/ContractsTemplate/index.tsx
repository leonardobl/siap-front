import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { Button } from "../../Atoms/Button";
import { useContracts } from "./useContracts";
import { FormFilterContracts } from "../../Molecules/Forms/FormFilterContracts";
import { ContractsList } from "../../Molecules/Lists/ContractsList";
import { Pagination } from "../../Atoms/Pagination";

export const ContractsTemplate = () => {
  const {
    filterOpen,
    isMobile,
    navigate,
    setFilterOpen,
    contratos,
    setNumberPage,
    pagination,
  } = useContracts();

  return (
    <LayoutTemplate titleHeader="Contratos">
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
            onClick={() => navigate("/contratos/cadastro")}
          >
            Cadastrar
          </Button>
        </S.WrapperButtons>

        {filterOpen && (
          <FormFilterContracts submitForm={(e) => console.log(e)} />
        )}

        <ContractsList contracts={contratos} />

        {contratos?.length > 0 && (
          <Pagination
            totalPage={pagination.totalPage}
            totalRegister={pagination.totalRegister}
            actualPage={pagination.actualPage}
            key={`${isMobile} - ${Math.random()} - ${pagination}`}
            setNumberPage={setNumberPage}
            maxPageNumbersDisplayed={isMobile ? 3 : 10}
          />
        )}
      </S.Container>
    </LayoutTemplate>
  );
};
