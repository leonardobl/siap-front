import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px 0;

  > :nth-child(1) {
    min-width: 300px;
  }

  > :nth-child(2) {
    display: flex;
    justify-content: end;
    gap: 0 24px;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    > :nth-child(1) {
      min-width: 600px;
    }
  }
`;
