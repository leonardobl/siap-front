import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { TabProviderForms } from "../../Molecules/Tabs/TabProviderForms";
import { FormProviderBasic } from "../../Molecules/Forms/FormProviderBasic";
import { useProviderRegister } from "./useProviderRegister";
import { FormFinanceRegister } from "../../Molecules/Forms/FormFinanceRegister";
import { Button } from "../../Atoms/Button";
import { FormFilterProfessional } from "../../Molecules/Forms/FormFilterProfessional";
import { ProfessionalsList } from "../../Molecules/Lists/ProfessionalsList";
import { Pagination } from "../../Atoms/Pagination";
import { MyModal } from "../../Atoms/Modal";
import { FormProfessionalRegister } from "../../Molecules/Forms/FormProfessionalRegister";

export const ProviderRegisterTemplate = () => {
  const {
    tabIdx,
    filterOpen,
    navigate,
    setFilterOpen,
    isMobile,
    modalOpen,
    setModalOpen,
    handleSubmitProvider,
    handleSubmitFinance,
    handleSubmitProfessional,
    profissionais,
    setNumberPage,
    pagination,
    handleFilterProfessional,
    handleClean,
  } = useProviderRegister();

  return (
    <LayoutTemplate titleHeader="Cadastro de Prestadores">
      <S.Container>
        <TabProviderForms tabIndex={tabIdx}>
          {[
            <FormProviderBasic submitForm={handleSubmitProvider} key={"123"} />,
            <FormFinanceRegister
              key={"1236"}
              submitForm={handleSubmitFinance}
            />,
            <S.WrapperProfessional key={"1234"}>
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
                <FormFilterProfessional
                  onClean={handleClean}
                  submitForm={handleFilterProfessional}
                />
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
            </S.WrapperProfessional>,
          ]}
        </TabProviderForms>

        <MyModal isOpen={modalOpen}>
          <S.ContentModal>
            <S.HeaderModal>
              <img
                src="/assets/svg/icon-close-gray.svg"
                alt="icone fechar"
                onClick={() => setModalOpen(false)}
              />
            </S.HeaderModal>
            <h1>Cadastro Profissional</h1>
            <FormProfessionalRegister
              onCancel={() => setModalOpen(false)}
              submitForm={handleSubmitProfessional}
            />
          </S.ContentModal>
        </MyModal>
      </S.Container>
    </LayoutTemplate>
  );
};
