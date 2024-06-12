import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 880px;
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 0 16px;
  margin-bottom: 24px;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    gap: 0 20px;
    margin-bottom: 32px;
  }
`;
