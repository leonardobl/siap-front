import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 726px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  button {
    margin-left: auto;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "banco agencia" "conta operacao" "button button";

    > :nth-child(1) {
      grid-area: banco;
    }

    > :nth-child(2) {
      grid-area: agencia;
    }

    > :nth-child(3) {
      grid-area: conta;
    }

    > :nth-child(4) {
      grid-area: operacao;
    }

    > :nth-child(5) {
      grid-area: button;
    }
  }
`;
