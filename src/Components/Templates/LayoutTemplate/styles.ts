import styled, { css, keyframes } from "styled-components";
import { pxToRem } from "../../../Utils/pxToRem";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const Menu = styled.nav`
  position: fixed;
  background: #fff;
  filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.16));
  height: 100vh;
  overflow: hidden;
  -webkit-transition: width 0.3s ease-in-out;
  -moz-transition: width 0.3s ease-in-out;
  -o-transition: width 0.3s ease-in-out;
  transition: width 0.3s ease-in-out;
  width: 0;
  z-index: 99;

  &[data-open="true"] {
    width: 100%;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    position: relative;
    z-index: 0;
    width: 94px;
    overflow: visible;

    &[data-open="true"] {
      width: 232px;
    }
  }
`;

export const HeaderMenu = styled.div`
  position: relative;
  padding: 16px 16px 48px 32px;
  height: 140px;
  border-bottom: 1px solid ${(props) => props.theme.colors["gray-200"]};

  img#iconCloseMenu {
    display: block;
    margin-left: auto;
    margin-bottom: 16px;
  }

  img#siglaSiap {
    display: none;
  }

  div#wrapperArrow {
    display: none;
  }

  &[data-open="true"] {
    img#logoSiap {
      display: block;
    }
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    padding: 0;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;

    div#wrapperArrow {
      display: block;
      position: absolute;
      right: -16px;

      svg,
      img {
        cursor: pointer;
      }

      #arrowLeft {
        display: none;
      }
    }

    img#iconCloseMenu {
      display: none;
    }

    img#siglaSiap {
      display: block;
      opacity: 1;
      animation: ${fadeIn} 0.3s ease-in-out forwards;
    }

    img#logoSiap {
      display: none;
      opacity: 0;
      animation: ${fadeOut} 0.3s ease-in-out forwards;
    }

    &[data-open="true"] {
      img#siglaSiap {
        display: none;
        opacity: 0;
        animation: ${fadeOut} 0.3s ease-in-out forwards;
      }

      img#logoSiap {
        display: block;
        opacity: 1;
        animation: ${fadeIn} 0.3s ease-in-out forwards;
      }

      div#wrapperArrow {
        #arrowLeft {
          display: block;
        }

        #arrowRight {
          display: none;
        }
      }
    }
  }
`;

export const Main = styled.main`
  flex: 1;
`;

export const MainContent = styled.div``;

export const MainHeader = styled.div`
  position: relative;
  height: 64px;
  background-image: url("/assets/img/bg-main-header-mobile.png");
  background-size: cover;
  background-repeat: no-repeat;

  > div#wrapperIconCloseHeader {
    padding: 6px;
    width: fit-content;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 36px;
    bottom: -13px;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    background-image: url("/assets/img/bg-main-header-lg.png");
    height: 140px;
    position: static;

    > div#wrapperIconCloseHeader {
      display: none;
    }
  }
`;
