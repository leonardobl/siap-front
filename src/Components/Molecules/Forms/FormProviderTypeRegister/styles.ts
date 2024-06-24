import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px 0;

  > div:nth-child(1) {
    width: 100%;
    min-width: 300px;
  }

  > div:nth-child(2) {
    display: flex;
    justify-content: end;
    gap: 0 16px;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    > div:nth-child(1) {
      width: 100%;
      min-width: 600px;
    }
  }
`;
