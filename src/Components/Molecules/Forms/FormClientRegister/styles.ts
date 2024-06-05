import styled from "styled-components";

export const Form = styled.form`
  border-radius: 12px;
  border: 0.3px solid ${(props) => props.theme.colors["gray-200"]};
  background: #fff;
  padding: 32px 22px;
  display: flex;
  flex-direction: column;
  gap: 20px 0;

  div#wrapper-buttons {
    display: flex;
    justify-content: end;
    gap: 0 16px;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    padding: 32px;
    gap: 24px 16px;
    grid-template-areas: "nome nome" "cpf telefone" "email cep" "rua numero" "complemento bairro" "uf cidade" "senha confirmacao" ". buttons";
    display: grid;
    grid-template-columns: 1fr 1fr;

    > :nth-child(1) {
      grid-area: nome;
    }

    > :nth-child(2) {
      grid-area: cpf;
    }

    > :nth-child(3) {
      grid-area: telefone;
    }

    > :nth-child(4) {
      grid-area: email;
    }

    > :nth-child(5) {
      grid-area: cep;
    }

    > :nth-child(6) {
      grid-area: rua;
    }

    > :nth-child(7) {
      grid-area: numero;
    }

    > :nth-child(8) {
      grid-area: complemento;
    }

    > :nth-child(9) {
      grid-area: bairro;
    }

    > :nth-child(10) {
      grid-area: uf;
    }
    > :nth-child(11) {
      grid-area: cidade;
    }

    > :nth-child(12) {
      grid-area: senha;
    }
    > :nth-child(13) {
      grid-area: confirmacao;
    }

    > :nth-child(14) {
      grid-area: buttons;
    }
  }
`;
