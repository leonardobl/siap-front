import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { useServices } from "./useServices";
import { ServicesList } from "../../Molecules/Lists/ServicesList";
import { FormFilterServices } from "../../Molecules/Forms/FormFilterServices";
import { MyModal } from "../../Atoms/Modal";
import { FormServiceRegister } from "../../Molecules/Forms/FormServiceRegister";

export const ServicesTemplate = () => {
  const {
    filterOpen,
    servicos,
    setFilterOpen,
    modalOpen,
    setModalOpen,
    handleSubmitFilter,
    handleClean,
    handleCreate,
  } = useServices();

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
            onClick={() => setModalOpen(true)}
          >
            Cadastrar
          </Button>
        </S.WrapperButtons>

        {filterOpen && (
          <FormFilterServices
            onClean={handleClean}
            submitForm={handleSubmitFilter}
          />
        )}

        <ServicesList servicesList={servicos} />

        <MyModal isOpen={modalOpen}>
          <S.ContentModal>
            <S.HeaderModal>
              <img
                src="/assets/svg/icon-close-gray.svg"
                alt="icone fechar"
                onClick={() => setModalOpen(false)}
              />
            </S.HeaderModal>
            <h1>Cadastro de Serviços</h1>
            <FormServiceRegister submitForm={handleCreate} />
          </S.ContentModal>
        </MyModal>
      </S.Container>
    </LayoutTemplate>
  );
};
