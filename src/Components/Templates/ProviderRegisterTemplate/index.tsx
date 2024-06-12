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
import { IProfissionalDTO } from "../../../Types/profissional";
import { v4 } from "uuid";
import { ConselhoEnum } from "../../../Enum/conselho";
import { Pagination } from "../../Atoms/Pagination";
import { MyModal } from "../../Atoms/Modal";
import { FormProfessionalRegister } from "../../Molecules/Forms/FormProfessionalRegister";

const fakeProfessional: IProfissionalDTO[] = [
  {
    conselho: ConselhoEnum.COREN,
    cpf: "01426904304",
    email: "email@teste.com.br",
    nome: "Leonardo Lima",
    numeroConselho: "123",
    telefone: "86995233237",
    ufConselho: "PI",
    uuid: v4(),
  },
  {
    conselho: ConselhoEnum.COREN,
    cpf: "01426904304",
    email: "email@teste.com.br",
    nome: "Leonardo Lima",
    numeroConselho: "123",
    telefone: "86995233237",
    ufConselho: "PI",
    uuid: v4(),
  },
  {
    conselho: ConselhoEnum.COREN,
    cpf: "01426904304",
    email: "email@teste.com.br",
    nome: "Leonardo Lima",
    numeroConselho: "123",
    telefone: "86995233237",
    ufConselho: "PI",
    uuid: v4(),
  },
  {
    conselho: ConselhoEnum.COREN,
    cpf: "01426904304",
    email: "email@teste.com.br",
    nome: "Leonardo Lima",
    numeroConselho: "123",
    telefone: "86995233237",
    ufConselho: "PI",
    uuid: v4(),
  },
  {
    conselho: ConselhoEnum.COREN,
    cpf: "01426904304",
    email: "email@teste.com.br",
    nome: "Leonardo Lima",
    numeroConselho: "123",
    telefone: "86995233237",
    ufConselho: "PI",
    uuid: v4(),
  },
];

export const ProviderRegisterTemplate = () => {
  const {
    tabIdx,
    setTabIdx,
    filterOpen,
    navigate,
    setFilterOpen,
    isMobile,
    modalOpen,
    setModalOpen,
  } = useProviderRegister();

  return (
    <LayoutTemplate titleHeader="Cadastro de Prestadores">
      <S.Container>
        <TabProviderForms tabIndex={tabIdx}>
          {[
            <FormProviderBasic
              submitForm={(e) => {
                console.log(e);
                setTabIdx(2);
              }}
              key={Math.random()}
            />,
            <FormFinanceRegister
              submitForm={(e) => {
                console.log(e);
                setTabIdx(3);
              }}
            />,
            <S.WrapperProfessional>
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
                <FormFilterProfessional submitForm={(e) => console.log(e)} />
              )}

              <ProfessionalsList professionals={fakeProfessional} />

              <Pagination
                totalPage={10}
                totalRegister={20}
                actualPage={0}
                maxPageNumbersDisplayed={isMobile ? 3 : 10}
                setNumberPage={() => ""}
              />
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
              submitForm={(e) => {
                console.log(e);
                navigate("/prestadores");
              }}
            />
          </S.ContentModal>
        </MyModal>
      </S.Container>
    </LayoutTemplate>
  );
};
