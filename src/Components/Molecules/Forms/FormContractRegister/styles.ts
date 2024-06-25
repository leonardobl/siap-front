import styled from "styled-components";

export const Form = styled.form`
  border-radius: 12px;
  background: #fff;
  box-shadow: 3px 2px 3px 0px rgba(0, 0, 0, 0.16);
  padding: 32px 22px;
  width: 100%;
  max-width: 360px;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    padding: 32px;
    max-width: 780px;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px 16px;
  margin-bottom: 32px;

  > :nth-child(5) {
    grid-area: valor;
    display: flex;
    flex-direction: column;
    gap: 16px;

    > :nth-child(1) {
      flex: 1;
    }

    button {
      margin-left: auto;
    }
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "prestador prestador" "inicial final" "servico valor";

    > :nth-child(1) {
      grid-area: prestador;
    }

    > :nth-child(2) {
      grid-area: inicial;
    }

    > :nth-child(3) {
      grid-area: final;
    }
    > :nth-child(4) {
      grid-area: servico;
    }

    > :nth-child(5) {
      grid-area: valor;
      flex-direction: row;

      :nth-child(1) {
        flex: 1;
      }
    }
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 0 16px;
  justify-content: end;
`;
