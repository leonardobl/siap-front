import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 890px;
  margin: 0 auto;
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
