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

export const ContentModal = styled.div`
  width: 100%;
  max-width: 600px;

  h1 {
    color: ${(props) => props.theme.colors["blue-300"]};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 16px;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    h1 {
      font-size: 20px;
      margin-bottom: 24px;
    }
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  justify-content: end;

  > img {
    cursor: pointer;
  }
`;
