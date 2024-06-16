import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { Button } from "../../Atoms/Button";
import { useProviderType } from "./useProviderType";
import { FormFilterProviderType } from "../../Molecules/Forms/FomrFilterProviderType";
import { faker } from "@faker-js/faker";
import { ProviderTypeList } from "../../Molecules/Lists/ProviderTypeList";
import { Pagination } from "../../Atoms/Pagination";
import { MyModal } from "../../Atoms/Modal";
import { FormProviderTypeRegister } from "../../Molecules/Forms/FormProviderTypeRegister";

const providers = Array(6).fill({ nome: faker.person.fullName() });

export const ProviderTypeTemplate = () => {
  const { filterOpen, isMobile, setFilterOpen, modalOpen, setModalOpen } =
    useProviderType();

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
          <FormFilterProviderType submitForm={(e) => console.log(e)} />
        )}

        <ProviderTypeList providersTypes={providers} />

        <Pagination
          totalPage={10}
          totalRegister={10}
          actualPage={0}
          maxPageNumbersDisplayed={isMobile ? 3 : 10}
          setNumberPage={() => ""}
        />

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
              submitForm={(e) => console.log(e)}
              onCancel={() => setModalOpen(false)}
            />
          </S.ContentModal>
        </MyModal>
      </S.Container>
    </LayoutTemplate>
  );
};
