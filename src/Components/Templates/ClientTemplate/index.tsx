import React from "react";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { useClient } from "./useClient";
import { FormFilterClient } from "../../Molecules/Forms/FormFilterClient";

export const ClientTemplate = () => {
  const { filterOpen, setFilterOpen } = useClient();

  return (
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
    </S.Container>
  );
};
