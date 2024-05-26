import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  padding: 48px 20px;
  width: 310px;
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
  display: flex;
  flex-direction: column;
  gap: 24px 0;

  button {
    width: 100%;
  }

  input {
    border: none;
  }
`;
