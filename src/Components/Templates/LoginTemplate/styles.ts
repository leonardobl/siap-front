import styled from "styled-components";

export const MyContainer = styled.div`
  min-height: 100dvh;
  width: 100%;
  background-image: url("/assets/img/bg-login-mobile.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 48px 24px;
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
