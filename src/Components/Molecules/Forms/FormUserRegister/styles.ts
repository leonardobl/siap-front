import styled from "styled-components";

export const Form = styled.form`
  width: 270px;

  > h1 {
    color: ${(props) => props.theme.colors["blue-300"]};
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 100% */
  }

  > p {
    color: ${(props) => props.theme.colors["blue-300"]};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 114.286% */
    margin-bottom: 32px;

    span {
      font-weight: 700;
      display: block;
    }
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    width: 420px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-areas: "nome" "cpf" "telefone" "email" "cep" "rua" "numero" "complemento" "bairro" "uf" "cidade" "senha" "confirmSenha" "btn";
  gap: 24px 0;

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
    grid-area: confirmSenha;
  }

  > :nth-child(14) {
    grid-area: btn;

    button {
      width: 100%;
    }
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: 24px 16px;
    grid-template-areas: "nome nome" "cpf telefone" "email cep" "rua numero" "complemento bairro" "uf cidade" "senha confirmSenha" "btn btn";
  }
`;
