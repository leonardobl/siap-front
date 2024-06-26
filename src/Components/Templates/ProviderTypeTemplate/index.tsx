import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { Button } from "../../Atoms/Button";
import { useProviderType } from "./useProviderType";
import { FormFilterProviderType } from "../../Molecules/Forms/FormFilterProviderType";
import { ProviderTypeList } from "../../Molecules/Lists/ProviderTypeList";
import { Pagination } from "../../Atoms/Pagination";
import { MyModal } from "../../Atoms/Modal";
import { FormProviderTypeRegister } from "../../Molecules/Forms/FormProviderTypeRegister";

export const ProviderTypeTemplate = () => {
  const {
    filterOpen,
    isMobile,
    setFilterOpen,
    modalOpen,
    setModalOpen,
    setNumberPage,
    tipos,
    pagination,
    handleSubmit,
    handleFilter,
    handleClean,
  } = useProviderType();

  return (
    <LayoutTemplate titleHeader="Tipos de Prestadores">
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
            onClick={() => setModalOpen(true)}
          >
            Cadastrar
          </Button>
        </S.WrapperButtons>

        {filterOpen && (
          <FormFilterProviderType
            onClean={handleClean}
            submitForm={handleFilter}
          />
        )}

        <ProviderTypeList providersTypes={tipos} />

        {tipos?.length > 0 && (
          <Pagination
            totalPage={pagination.totalPage}
            totalRegister={pagination.totalRegister}
            actualPage={pagination.actualPage}
            maxPageNumbersDisplayed={isMobile ? 3 : 10}
            key={`${isMobile} - ${pagination} - ${Math.random()}`}
            setNumberPage={setNumberPage}
          />
        )}

        <MyModal isOpen={modalOpen}>
          <S.ContentModal>
            <S.HeaderModal>
              <img
                src="/assets/svg/icon-close-gray.svg"
                alt="icone de fechar"
                onClick={() => setModalOpen(false)}
              />
            </S.HeaderModal>

            <h2>Cadastro Tipo de Prestador</h2>

            <FormProviderTypeRegister
              submitForm={handleSubmit}
              onCancel={() => {
                setModalOpen(false);
              }}
            />
          </S.ContentModal>
        </MyModal>
      </S.Container>
    </LayoutTemplate>
  );
};
