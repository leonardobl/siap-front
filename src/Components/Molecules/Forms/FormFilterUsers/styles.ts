import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 790px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 3px 2px 3px 0px rgba(0, 0, 0, 0.16);
  padding: 32px 22px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
  gap: 24px 16px;

  > :nth-child(5) {
    display: flex;
    justify-content: end;
    gap: 0 16px;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    padding: 32px;
    flex-direction: row;
    flex-wrap: wrap;

    > div {
      flex: 1 1 calc(50% - 16px);
    }
  }
`;
