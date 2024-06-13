import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { Button } from "../../Atoms/Button";
import { useContracts } from "./useContracts";
import { FormFilterContracts } from "../../Molecules/Forms/FormFilterContracts";

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
            onClick={() => navigate("/clientes/cadastro")}
          >
            Cadastrar
          </Button>
        </S.WrapperButtons>

        {filterOpen && (
          <FormFilterContracts submitForm={(e) => console.log(e)} />
        )}
      </S.Container>
    </LayoutTemplate>
  );
};
