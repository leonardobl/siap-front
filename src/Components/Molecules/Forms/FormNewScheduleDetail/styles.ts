import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem 1rem;
  padding: 2rem 1.5rem;
  width: 100%;
  max-width: 50rem;
  border-radius: 0.75rem;
  background: #fff;
  box-shadow: 3px 2px 3px 0px rgba(0, 0, 0, 0.16);
  margin: 0 auto;

  > div:last-child {
    button {
      margin-left: auto;
    }
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "servico cidade" "prestador prestador" "rua cnpj" "telefone email" ". button";

    > :nth-child(1) {
      grid-area: servico;
    }

    > :nth-child(2) {
      grid-area: cidade;
    }

    > :nth-child(3) {
      grid-area: prestador;
    }

    > :nth-child(4) {
      grid-area: rua;
    }

    > :nth-child(5) {
      grid-area: cnpj;
    }

    > :nth-child(6) {
      grid-area: telefone;
    }

    > :nth-child(7) {
      grid-area: email;
    }

    > :nth-child(8) {
      grid-area: button;
    }
  }
`;
