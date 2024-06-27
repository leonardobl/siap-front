import styled from "styled-components";

export const Form = styled.form`
  border-radius: 0.75rem;
  background: #fff;
  box-shadow: 3px 2px 3px 0px rgba(0, 0, 0, 0.16);
  padding: 2rem 1.5rem;
  max-width: 50rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem 0;

  > div:last-child {
    display: flex;
    justify-content: end;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "servico cidade" "prestador prestador" ". button";
    gap: 1.5rem 1rem;

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
      grid-area: button;
    }
  }
`;
