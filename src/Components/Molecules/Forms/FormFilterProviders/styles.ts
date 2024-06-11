import styled from "styled-components";

export const Form = styled.form`
  border-radius: 12px;
  background: #fff;
  box-shadow: 3px 2px 3px 0px rgba(0, 0, 0, 0.16);
  width: 100%;
  max-width: 880px;
  padding: 32px 22px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;

  > :nth-child(1) {
    grid-area: nome;
  }
  > :nth-child(2) {
    grid-area: cnpj;
  }
  > :nth-child(3) {
    grid-area: cidade;
  }
  > :nth-child(4) {
    grid-area: tipo;
  }
  > :nth-child(5) {
    grid-area: status;
  }

  > :nth-child(6) {
    grid-area: button;
    display: flex;
    gap: 0 24px;
    justify-content: end;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "nome nome nome" "cnpj cidade tipo" "status status button";

    > :nth-child(6) {
      grid-area: button;
      display: flex;
      gap: 0 24px;
    }
  }
`;
