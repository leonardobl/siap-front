import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { useUsers } from "./useUsers";
import { FormFilterUsers } from "../../Molecules/Forms/FormFilterUsers";
import { UsersList } from "../../Molecules/Lists/UsersList";
import { Pagination } from "../../Atoms/Pagination";
import { IUsuarioDTO } from "../../../Types/usuario";
import { MyModal } from "../../Atoms/Modal";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";

const usersList = [
  {
    nome: "Camilla Santos de Alcântara",
    cpfCnpj: "018.895.983.13",
  },
  {
    nome: "Camilla Santos de Alcântara",
    cpfCnpj: "018.895.983.13",
  },
  {
    nome: "Camilla Santos de Alcântara",
    cpfCnpj: "018.895.983.13",
  },
  {
    nome: "Camilla Santos de Alcântara",
    cpfCnpj: "018.895.983.13",
  },
  {
    nome: "Camilla Santos de Alcântara",
    cpfCnpj: "018.895.983.13",
  },
] as IUsuarioDTO[];

export const UsersTemplate = () => {
  const {
    filterOpen,
    isMobile,
    setFilterOpen,
    openModal,
    setOpenModal,
    options,
    teste,
    setTeste,
  } = useUsers();

  return (
    <LayoutTemplate titleHeader="Usuário">
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
            onClick={() => setOpenModal(true)}
          >
            Cadastrar
          </Button>
        </S.WrapperButtons>

        {filterOpen && <FormFilterUsers submitForm={(e) => console.log(e)} />}

        <UsersList users={usersList} />

        <Pagination
          totalPage={10}
          totalRegister={10}
          actualPage={0}
          setNumberPage={() => ""}
          maxPageNumbersDisplayed={isMobile ? 3 : 10}
        />

        <MyModal isOpen={openModal}>
          <S.ContentModal>
            <S.ModalHeader>
              <img
                src="/assets/svg/icon-close-gray.svg"
                alt="icone fechar"
                onClick={() => setOpenModal(false)}
              />
            </S.ModalHeader>

            <h2>Cadastro de Usuário</h2>

            <S.FormModal>
              <div>
                <Input label="Nome" required id="nome" />
              </div>

              <div>
                <Input label="CPF" required id="cpf" />
              </div>

              <div>
                <Input label="Telefone" required id="telefone" />
              </div>

              <div>
                <Input label="E-mail" id="email" />
              </div>

              <div>
                <SimpleSelect
                  label="Perfil"
                  required
                  inputId="perfil"
                  isMulti
                  value={teste}
                  onChange={setTeste}
                  options={options}
                />
              </div>

              <div>
                <Button type="button" onClick={() => setOpenModal(false)}>
                  Cancelar
                </Button>
                <Button variant="blue">Salvar</Button>
              </div>
            </S.FormModal>
          </S.ContentModal>
        </MyModal>
      </S.Container>
    </LayoutTemplate>
  );
};
