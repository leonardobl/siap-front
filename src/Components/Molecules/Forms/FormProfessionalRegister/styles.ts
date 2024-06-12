import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 635px;
  display: grid;
  gap: 24px 16px;
  grid-template-columns: minmax(320px, 1fr);

  > :nth-child(8) {
    display: flex;
    justify-content: end;
    gap: 0 16px;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    grid-template-columns: 1fr 1fr;
    width: 635px;
    grid-template-areas: "nome nome" "cpf conselho" "numero uf" "email telefone" ". button";

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
      grid-area: uf;
    }
    > :nth-child(6) {
      grid-area: email;
    }
    > :nth-child(7) {
      grid-area: telefone;
    }
    > :nth-child(8) {
      grid-area: button;
    }
  }
`;
