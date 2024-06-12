import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { useServices } from "./useServices";
import { ServicesList } from "../../Molecules/Lists/ServicesList";
import { FormFilterServices } from "../../Molecules/Forms/FormFilterServices";

export const ServicesTemplate = () => {
  const { filterOpen, isMobile, navigate, setFilterOpen } = useServices();

  return (
    <LayoutTemplate titleHeader="Serviços">
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
          <FormFilterServices submitForm={(e) => console.log(e)} />
        )}

        <ServicesList />
      </S.Container>
    </LayoutTemplate>
  );
};
