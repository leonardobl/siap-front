import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { FormFilterSchedules } from "../../Molecules/Forms/FormFilterSchedules";
import { useSchedules } from "./useSchedules";
import { ScheduleList } from "../../Molecules/Lists/ScheduleList";
import { Pagination } from "../../Atoms/Pagination";

export const SchedulesTemplate = () => {
  const {
    filterOpen,
    setFilterOpen,
    handleFilter,
    isMobile,
    pagination,
    setNumberPage,
    Title,
    pathname,
  } = useSchedules();

  return (
    <LayoutTemplate titleHeader={Title[pathname]}>
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

        <ScheduleList Schedules={[]} />

        <Pagination
          totalPage={pagination.totalPage}
          totalRegister={pagination.totalRegister}
          actualPage={pagination.actualPage}
          setNumberPage={setNumberPage}
          key={`${isMobile} - ${pagination} - ${Math.random()}`}
          maxPageNumbersDisplayed={isMobile ? 3 : 10}
        />
      </S.Container>
    </LayoutTemplate>
  );
};
