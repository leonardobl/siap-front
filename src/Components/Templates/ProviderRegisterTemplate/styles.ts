import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 970px;
  margin: 0 auto;
`;

export const WrapperProfessional = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 890px;
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 0 16px;
  margin-bottom: 32px;
`;

export const ContentModal = styled.div`
  max-width: 700px;
  width: 100%;

  > h1 {
    color: ${(props) => props.theme.colors["blue-300"]};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    margin-bottom: 24px;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    > h1 {
      font-size: 20px;
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

export const WrapperButtonSave = styled.div`
  margin-top: 24px;
  button {
    margin-left: auto;
  }
`;
