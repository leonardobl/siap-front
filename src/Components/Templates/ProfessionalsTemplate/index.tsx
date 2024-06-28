import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import { Button } from "../../Atoms/Button";
import { Pagination } from "../../Atoms/Pagination";
import { useProfessionals } from "./useProfessionals";
import * as S from "./styles";
import { ProfessionalsList } from "../../Molecules/Lists/ProfessionalsList";
import { FormFilterProfessional } from "../../Molecules/Forms/FormFilterProfessional";

export const ProfessionalsTemplate = () => {
  const {
    filterOpen,
    isMobile,
    navigate,
    pagination,
    profissionais,
    setFilterOpen,
    setNumberPage,
    handleClean,
    handleFilterProfessional,
  } = useProfessionals();

  return (
    <LayoutTemplate titleHeader="Profissionais">
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
            onClick={() => navigate("/profissionais/cadastro")}
          >
            Cadastrar
          </Button>
        </S.WrapperButtons>

        {filterOpen && (
          <S.WrraperFilter>
            <FormFilterProfessional
              onClean={handleClean}
              submitForm={handleFilterProfessional}
            />
          </S.WrraperFilter>
        )}

        <ProfessionalsList professionals={profissionais} />

        {profissionais?.length > 0 && (
          <Pagination
            totalPage={pagination.totalPage}
            totalRegister={pagination.totalRegister}
            actualPage={pagination.actualPage}
            key={`${pagination} - ${isMobile} - ${Math.random()}`}
            maxPageNumbersDisplayed={isMobile ? 3 : 10}
            setNumberPage={setNumberPage}
          />
        )}
      </S.Container>
    </LayoutTemplate>
  );
};
