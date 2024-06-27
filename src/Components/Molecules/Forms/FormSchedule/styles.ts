import styled from "styled-components";

export const Form = styled.form`
  border-radius: 0.75rem;
  background: #fff;
  box-shadow: 3px 2px 3px 0px rgba(0, 0, 0, 0.16);
  padding: 2rem;
  margin: 0 auto;

  max-width: 49.0625rem;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem 1rem;

  button {
    margin-left: auto;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    grid-template-areas: "profissional profissional" "data horario" ". button";
    grid-template-columns: 1fr 1fr;

    > :nth-child(1) {
      grid-area: profissional;
    }

    > :nth-child(2) {
      grid-area: data;
    }

    > :nth-child(3) {
      grid-area: horario;
    }

    > :nth-child(4) {
      grid-area: button;
    }
  }
`;
