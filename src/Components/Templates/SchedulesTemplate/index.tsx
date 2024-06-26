import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { FormFilterSchedules } from "../../Molecules/Forms/FormFilterSchedules";
import { useSchedules } from "./useSchedules";

export const SchedulesTemplate = () => {
  const { filterOpen, setFilterOpen, handleFilter } = useSchedules();

  return (
    <LayoutTemplate titleHeader="Agendamentos">
      <S.Container>
        <S.WrapperButtons>
          <Button
            iconleft="/assets/svg/icon-filter.svg"
            variant={filterOpen ? "filter" : null}
            onClick={() => setFilterOpen((prev) => !prev)}
          >
            Filtro
          </Button>
        </S.WrapperButtons>

        {filterOpen && (
          <FormFilterSchedules onClean={() => ""} submitForm={handleFilter} />
        )}
      </S.Container>
    </LayoutTemplate>
  );
};
