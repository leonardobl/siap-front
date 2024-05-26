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
