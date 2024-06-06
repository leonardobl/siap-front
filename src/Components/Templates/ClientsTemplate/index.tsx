import React from "react";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { useClients } from "./useClients";
import { FormFilterClient } from "../../Molecules/Forms/FormFilterClient";
import { ClientList } from "../../Molecules/Lists/ClientList";
import { LayoutTemplate } from "../LayoutTemplate";
import { mockClientList } from "../../../Mocks/mick-clientList";
import { Pagination } from "../../Atoms/Pagination";

export const ClientsTemplate = () => {
  const { filterOpen, setFilterOpen, navigate } = useClients();

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
          <Button
            iconleft="/assets/svg/icon-plus.svg"
            onClick={() => navigate("/clientes/cadastro")}
          >
            Cadastrar
          </Button>
        </S.WrapperButtons>

        {filterOpen && (
          <FormFilterClient
            submitForm={(data) => {
              console.log(data);
            }}
          />
        )}

        <ClientList clients={mockClientList} />

        <Pagination
          totalPage={5}
          totalRegister={10}
          actualPage={0}
          setNumberPage={undefined}
        />
      </S.Container>
    </LayoutTemplate>
  );
};
