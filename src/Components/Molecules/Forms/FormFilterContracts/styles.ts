import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 360px;
  padding: 32px 22px;
  display: flex;
  flex-direction: column;
  gap: 24px 16px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 3px 2px 3px 0px rgba(0, 0, 0, 0.16);
  margin-bottom: 32px;

  > :nth-child(7) {
    display: flex;
    gap: 0 24px;
    justify-content: end;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    max-width: 790px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "nome social" "cnpj servico" "datainicial datafinal" ". button";

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
      grid-area: servico;
    }

    > :nth-child(5) {
      grid-area: datainicial;
    }

    > :nth-child(6) {
      grid-area: datafinal;
    }

    > :nth-child(7) {
      grid-area: button;
      gap: 0 16px;
    }
  }
`;
