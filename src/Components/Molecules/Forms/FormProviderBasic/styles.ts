import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 730px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 24px 0;

  > :nth-child(16) {
    button {
      margin-left: auto;
    }
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "nome nome" "social cnpj" "municipal estadual" "email tipo" "telefone cep" "rua numero" "complemento bairro" "uf cidade" "button button";
    gap: 16px;

    > :nth-child(1) {
      grid-area: nome;
    }

    > :nth-child(2) {
      grid-area: social;
    }

    > :nth-child(3) {
      grid-area: cnpj;
    }

    > :nth-child(4) {
      grid-area: municipal;
    }

    > :nth-child(5) {
      grid-area: estadual;
    }
    > :nth-child(6) {
      grid-area: email;
    }

    > :nth-child(7) {
      grid-area: tipo;
    }

    > :nth-child(8) {
      grid-area: telefone;
    }

    > :nth-child(9) {
      grid-area: cep;
    }

    > :nth-child(10) {
      grid-area: rua;
    }

    > :nth-child(11) {
      grid-area: numero;
    }

    > :nth-child(12) {
      grid-area: complemento;
    }

    > :nth-child(13) {
      grid-area: bairro;
    }
    > :nth-child(14) {
      grid-area: uf;
    }

    > :nth-child(15) {
      grid-area: cidade;
    }

    > :nth-child(16) {
      grid-area: button;
    }
  }
`;
