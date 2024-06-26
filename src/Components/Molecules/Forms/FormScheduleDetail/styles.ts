import styled from "styled-components";

export const Form = styled.form`
  padding: 2rem 1.38rem;
  border-radius: 0.75rem;
  background: #fff;
  box-shadow: 3px 2px 3px 0px rgba(0, 0, 0, 0.16);
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem 0;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    padding: 2rem;
    gap: 2rem 1rem;
    flex-direction: row;
    flex-wrap: wrap;

    > div {
      flex: 1 1 calc(50% - 16px);
    }
  }
`;
