import styled from "styled-components";

export const MyContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: ${(props) => props.theme.screens["2xl"]};
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url("/assets/img/bg-login-mobile.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 48px 24px;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    background-image: url("/assets/img/bg-login-desktop.png");
    padding: 150px 24px;

    flex-direction: row;
    gap: 0 312px;
    justify-content: center;
  }
`;

export const TextContent = styled.div`
  width: 312px;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    width: fit-content;
  }
`;

export const MyTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;

  > span {
    display: block;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    color: #fff;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    margin-bottom: 24px;
  }
`;

export const MyText = styled.p`
  color: ${(props) => props.theme.colors["gray-50"]};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 48px;

  > span {
    display: block;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    font-size: 16px;

    span {
      display: inline;
    }
  }
`;
