import React from "react";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { useClients } from "./useClients";
import { FormFilterClient } from "../../Molecules/Forms/FormFilterClient";
import { ClientList } from "../../Molecules/Lists/ClientList";
import { LayoutTemplate } from "../LayoutTemplate";
import { Pagination } from "../../Atoms/Pagination";

export const ClientsTemplate = () => {
  const {
    filterOpen,
    setFilterOpen,
    navigate,
    isMobile,
    clientes,
    handleClean,
    pagination,
    setNumberpage,
    handleFilter,
  } = useClients();

  return (
    <LayoutTemplate titleHeader="Clientes">
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
            onClick={() => navigate("/clientes/cadastro")}
          >
            Cadastrar
          </Button>
        </S.WrapperButtons>

        {filterOpen && (
          <FormFilterClient onClean={handleClean} submitForm={handleFilter} />
        )}

        <ClientList clients={clientes} />

        {clientes.length > 0 && (
          <Pagination
            totalPage={pagination.totalPage}
            totalRegister={pagination.totalRegister}
            actualPage={pagination.actualPage}
            maxPageNumbersDisplayed={isMobile ? 3 : 10}
            setNumberPage={setNumberpage}
            key={`${isMobile} - ${pagination} - ${Math.random()}`}
          />
        )}
      </S.Container>
    </LayoutTemplate>
  );
};
