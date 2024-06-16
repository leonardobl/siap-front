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

export const ContentModal = styled.div`
  > h2 {
    color: ${(props) => props.theme.colors["blue-300"]};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 24px;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    font-size: 20px;
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  justify-content: end;

  img {
    cursor: pointer;
  }
`;

export const FormModal = styled.form`
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
