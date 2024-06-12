import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 565px;
  border-radius: 12px;
  background: #fff;
  padding: 32px 16px;
  box-shadow: 3px 2px 3px 0px rgba(0, 0, 0, 0.16);
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px 0;

  > :nth-child(2) {
    display: flex;
    justify-content: end;
    gap: 0 16px;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    padding: 32px;
    margin-bottom: 32px;
  }
`;
