import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    display: flex;
  }
`;

export const LogoSiap = styled.img`
  display: block;
`;

export const WrapperText = styled.div`
  display: flex;
  align-items: center;
  gap: 0 16px;
  justify-content: end;
  width: 100%;

  > p {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */

    > span {
      display: block;
    }
  }

  &::before {
    content: "";
    display: block;
    height: 55px;
    width: 1px;
    background-color: #fff;
  }
`;

export const LeftSide = styled.div`
  padding: 40px 30px;
  width: 100%;
  height: 380px;
  background-image: url("/assets/img/bg-login-mobile.png");
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    background-image: url("/assets/img/bg-login-xl.png");
    min-height: 100vh;
    background-position: right center;
    flex: 1;
  }

  @media (min-width: ${(props) => props.theme.screens["2xl"]}) {
    background-image: url("/assets/img/bg-login-2xl.png");
  }
`;

export const RightSide = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    flex: 1;
    align-items: center;
  }
`;
