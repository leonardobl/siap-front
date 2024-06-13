import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { Button } from "../../Atoms/Button";
import { useContracts } from "./useContracts";
import { FormFilterContracts } from "../../Molecules/Forms/FormFilterContracts";
import { ContractsList } from "../../Molecules/Lists/ContractsList";
import { IContratoCompletoDTO } from "../../../Types/contrato";
import { Pagination } from "../../Atoms/Pagination";

const list: IContratoCompletoDTO[] = [
  {
    dataFinal: "03/05/2023",
    status: "Ativo",
    prestador: { nome: "Teste1", cnpj: "123456789" },
  },
  {
    dataFinal: "03/05/2023",
    status: "Suspenso",
    prestador: { nome: "Teste2", cnpj: "123456789" },
  },
  {
    dataFinal: "03/05/2023",
    status: "Inativo",
    prestador: { nome: "Teste3", cnpj: "123456789" },
  },
  {
    dataFinal: "03/05/2023",
    status: "Ativo",
    prestador: { nome: "Teste4", cnpj: "123456789" },
  },
] as IContratoCompletoDTO[];

export const ContractsTemplate = () => {
  const { filterOpen, isMobile, navigate, setFilterOpen } = useContracts();

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

        <ContractsList contracts={list} />

        <Pagination
          totalPage={10}
          totalRegister={10}
          actualPage={0}
          setNumberPage={() => ""}
          maxPageNumbersDisplayed={isMobile ? 3 : 10}
        />
      </S.Container>
    </LayoutTemplate>
  );
};
