import styled from "styled-components";

export const MyFormLogin = styled.form`
  padding: 50px 22px;
  position: relative;
  width: 312px;
  margin: 0 auto;

  > img#logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 48px;
  }

  > img#fundo {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    mix-blend-mode: color-dodge;
  }
`;

export const Grid = styled.div`
  display: grid;
  position: relative;

  grid-template-columns: 1fr;
  grid-template-areas: "login" "senha";
  gap: 24px 0;

  &:nth-child(1) {
    grid-area: login;
  }

  &:nth-child(2) {
    grid-area: senha;
  }

  &:nth-child(3) {
    grid-area: btn1;
  }
`;
