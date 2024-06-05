import React from "react";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { useClient } from "./useClient";
import { FormFilterClient } from "../../Molecules/Forms/FormFilterClient";
import { ClientList } from "../../Molecules/Lists/ClientList";
import { LayoutTemplate } from "../LayoutTemplate";

const dataClient = [
  { nome: "Camilla Santos de Alcântara", cpf: "018.895.983.13" },
  { nome: "Camilla Santos de Alcântara", cpf: "018.895.983.13" },
  { nome: "Camilla Santos de Alcântara", cpf: "018.895.983.13" },
  { nome: "Camilla Santos de Alcântara", cpf: "018.895.983.13" },
];

export const ClientTemplate = () => {
  const { filterOpen, setFilterOpen } = useClient();

  return (
    <LayoutTemplate titleHeader="Clientes">
      <S.Container>
        <S.WrapperButtons>
          <Button
            iconleft="/assets/svg/icon-filter.svg"
            variant={filterOpen ? "blue" : null}
            onClick={() => setFilterOpen((prev) => !prev)}
          >
            Filtro
          </Button>
          <Button iconleft="/assets/svg/icon-plus.svg">Cadastrar</Button>
        </S.WrapperButtons>

        {filterOpen && (
          <FormFilterClient
            submitForm={(data) => {
              console.log(data);
            }}
          />
        )}

        <ClientList clients={dataClient} />
      </S.Container>
    </LayoutTemplate>
  );
};
