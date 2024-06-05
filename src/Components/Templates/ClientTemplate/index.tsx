import React from "react";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { useClient } from "./useClient";
import { FormFilterClient } from "../../Molecules/Forms/FormFilterClient";
import { ClientList } from "../../Molecules/Lists/ClientList";
import { LayoutTemplate } from "../LayoutTemplate";
import { mockClientList } from "../../../Mocks/mick-clientList";
import { Pagination } from "../../Atoms/Pagination";

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
