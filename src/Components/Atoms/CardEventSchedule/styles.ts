import styled from "styled-components";

export const Card = styled.div`
  background: #2082e3;
  height: 100%;
  cursor: default;
  padding: 0.5rem;
  position: relative;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    padding: 1rem;
  }
`;

export const CardClose = styled.div`
  position: absolute;
  right: 6px;
  top: 6px;

  span {
    color: #fff;
    font-size: 12px;
    text-align: center;
    display: block;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
    cursor: pointer;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    right: 16px;
    top: 16px;
  }
`;

export const CardDates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  p {
    color: #fff;
    font-size: 10px;
    text-align: center;
    display: block;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    p {
      color: #fff;
      font-size: 12px;
      text-align: center;
      display: block;
      font-style: normal;
      font-weight: 400;
    }
  }
`;
