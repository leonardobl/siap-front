import styled, { keyframes } from "styled-components";

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
  min-height: 100vh;
  overflow: hidden;
  -webkit-transition: width 0.3s ease-in-out;
  -moz-transition: width 0.3s ease-in-out;
  -o-transition: width 0.3s ease-in-out;
  transition: width 0.3s ease-in-out;
  width: 0;
  z-index: 9999;

  &[data-open="true"] {
    width: 100%;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    position: relative;
    z-index: 0;
    width: 120px;
    overflow: visible;

    &[data-open="true"] {
      width: 254px;
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

  img#logoSiap {
    width: 240px;
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
      right: -14px;

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
        max-width: 160px;
        width: 100%;
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
  background: #f6f6f6;
`;

export const MainContent = styled.div``;

export const MainHeader = styled.div`
  position: relative;
  height: 64px;
  background-image: url("/assets/img/bg-main-header-mobile.png");
  background-size: cover;
  background-repeat: no-repeat;

  padding-left: 28px;
  display: flex;
  align-items: center;

  > div#wrapperIconCloseHeader {
    position: absolute;
    right: 36px;
    bottom: -20px;
    width: 40px;

    > img {
      display: block;
      width: 100%;
    }
  }

  > h1 {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    background-image: url("/assets/img/bg-main-header-lg.png");
    height: 140px;
    position: static;
    padding-left: 42px;
    display: flex;
    align-items: center;
    padding-left: 42px;

    > div#wrapperIconCloseHeader {
      display: none;
    }

    > h1 {
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px;
      width: fit-content;
    }
  }
`;

export const WrapperGroupMenu = styled.div`
  padding: 16px 0 32px;

  &[data-border-bottom="true"] {
    border-bottom: 1px solid ${(props) => props.theme.colors["gray-200"]};
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px);
  max-width: ${(props) => props.theme.screens.xl};
  margin: 0 auto;
  padding: ${(props) => props.theme.padding.mobile} 24px;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    min-height: calc(100vh - 140px);
    padding: ${(props) => props.theme.padding.lg} 20px;
  }
`;
