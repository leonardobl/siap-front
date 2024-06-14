import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { useUsers } from "./useUsers";
import { FormFilterUsers } from "../../Molecules/Forms/FormFilterUsers";
import { UsersList } from "../../Molecules/Lists/UsersList";
import { Pagination } from "../../Atoms/Pagination";
import { IUsuarioDTO } from "../../../Types/usuario";

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
  const { filterOpen, isMobile, navigate, setFilterOpen } = useUsers();

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
            onClick={() => navigate("/usuarios/cadastro")}
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
      </S.Container>
    </LayoutTemplate>
  );
};
