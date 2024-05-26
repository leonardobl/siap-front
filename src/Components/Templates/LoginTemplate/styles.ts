import styled from "styled-components";

export const MyContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: ${(props) => props.theme.screens["2xl"]};
  margin: 0 auto;

  background-image: url("/assets/img/bg-login-mobile.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 48px 24px;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    background-image: url("/assets/img/bg-login-desktop.png");
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
`;

export const MyText = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 48px;

  > span {
    display: block;
  }
`;
