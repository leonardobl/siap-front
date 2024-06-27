import styled from "styled-components";

export const Form = styled.form`
  border-radius: 0.75rem;
  background: #fff;
  box-shadow: 3px 2px 3px 0px rgba(0, 0, 0, 0.16);
  width: 100%;
  max-width: 49.3125rem;
  padding: 2rem 1rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > div {
    flex: 1;
  }

  > div:last-child {
    display: flex;
    gap: 0 1rem;
    justify-content: end;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    display: grid;
    gap: 2.15rem 1rem;
    padding: 2rem;

    grid-template-columns: 1fr 1fr;
    grid-template-areas: "cliente cliente" "profissional status" "dataIni dataFim" ". button";

    > :nth-child(1) {
      grid-area: cliente;
    }

    > :nth-child(2) {
      grid-area: profissional;
    }

    > :nth-child(3) {
      grid-area: status;
    }

    > :nth-child(4) {
      grid-area: dataIni;
    }

    > :nth-child(5) {
      grid-area: dataFim;
    }

    > :nth-child(6) {
      grid-area: button;
    }
  }
`;
