import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px 16px;
  /* margin-bottom: 32px; */
  width: 100%;
  max-width: 640px;

  > :nth-child(5) {
    display: flex;
    justify-content: end;
    gap: 0 24px;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    grid-template-areas: "nome cpf" "conselho numero" ". button";

    > :nth-child(1) {
      grid-area: nome;
    }

    > :nth-child(2) {
      grid-area: cpf;
    }

    > :nth-child(3) {
      grid-area: conselho;
    }

    > :nth-child(4) {
      grid-area: numero;
    }

    > :nth-child(5) {
      grid-area: button;
    }
  }
`;
