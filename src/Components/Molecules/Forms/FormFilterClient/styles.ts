import styled from "styled-components";

export const FormFilter = styled.form`
  border-radius: 12px;
  background: #fff;
  width: 100%;
  max-width: 780px;
  margin-bottom: 24px;
  padding: 32px 22px;
  box-shadow: 3px 2px 3px 0px rgba(0, 0, 0, 0.16);
  display: grid;
  gap: 24px 16px;
  grid-template-columns: 1fr;
  grid-template-areas: "nome" "cpf" "telefone" "email" "buttons";

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
    grid-area: buttons;
    display: flex;
    justify-content: end;
    gap: 0 22px;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "nome cpf" "telefone email" ". buttons";
    padding: 32px;
    margin-bottom: 32px;
  }
`;
