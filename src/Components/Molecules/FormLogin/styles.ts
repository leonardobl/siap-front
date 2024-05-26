import styled from "styled-components";

export const MyFormLogin = styled.form`
  padding: 50px 22px;
  position: relative;
  width: 312px;

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
  grid-template-areas: "login" "senha" "btnEntrar" "btnCadastro" "btnEsqueceu";
  gap: 24px 0;

  > :nth-child(1) {
    grid-area: login;
  }

  > :nth-child(2) {
    grid-area: senha;
  }

  > :nth-child(3) {
    grid-area: btnEntrar;
  }

  > :nth-child(4) {
    grid-area: btnCadastro;
  }

  > :nth-child(5) {
    grid-area: btnEsqueceu;

    > a#forgot {
      color: #e8e8e8;
      display: block;
      text-align: center;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
    }
  }
`;

export const ButtonEnter = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  outline: none;
  padding: 8px 6px;
  justify-content: center;
  align-items: center;
  border: none;

  border-radius: 12px;
  background: ${(props) => props.theme.colors["blue-100"]};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const ButtonRegister = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  outline: none;
  padding: 8px 6px;
  justify-content: center;
  align-items: center;
  border: none;

  border-radius: 12px;
  background: ${(props) => props.theme.colors["blue-300"]};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const ContentModal = styled.div`
  background-color: ${(props) => props.theme.colors["blue-100"]};
  padding: 16px;
  width: 311px;

  > img#icon-close {
    display: block;
    margin-left: auto;
    margin-bottom: 28px;
    cursor: pointer;
  }

  > p {
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
    margin-bottom: 28px;

    span {
      font-weight: 600;
    }
  }

  > div.wrapperBtns {
    display: flex;
    justify-content: space-between;
  }
`;
