import styled from "styled-components";

export const Form = styled.form`
  border-radius: 0.75rem;
  border: 0.3px solid ${(props) => props.theme.colors["gray-200"]};
  background: #fff;
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem 1rem;
  width: 100%;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    padding: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "nome nome" "cpf telefone" "email conselho" "numero uf";

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
      grid-area: conselho;
    }

    > :nth-child(6) {
      grid-area: numero;
    }

    > :nth-child(7) {
      grid-area: uf;
    }
  }
`;
