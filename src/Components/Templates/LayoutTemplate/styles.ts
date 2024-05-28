import styled, { css } from "styled-components";
import { pxToRem } from "../../../Utils/pxToRem";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

export const WrapperMain = styled.div`
  flex: 1;
`;

export const WrapperMainMenu = styled.nav``;

export const Main = styled.main`
  flex: 1;
`;

export const MainMenu = styled.div`
  background: #fff;
  height: 100%;
  box-shadow: 8px 4px 20.7px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  -webkit-transition: width 0.3s ease-in-out;
  -moz-transition: width 0.3s ease-in-out;
  -o-transition: width 0.3s ease-in-out;
  transition: width 0.3s ease-in-out;
  width: ${pxToRem(0)};
  position: absolute;
  background-color: red;

  &[data-open="true"] {
    width: 100vh;
  }

  @media (max-width: 500px) {
    &[data-open="true"] {
      width: 100vw;
      position: fixed;
      z-index: 10;
    }
  }
`;

export const Wrapper = styled.div`
  padding: 20px;
  min-height: calc(100dvh - 90px);
  display: flex;
  flex-direction: column;
`;
