import styled from "styled-components";

export const Card = styled.div`
  background: #0b4a89;
  height: 100%;
  cursor: default;
  padding: 1rem;
  position: relative;
`;

export const CardClose = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;

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
`;

export const CardDates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  p {
    color: #fff;
    font-size: 12px;
    text-align: center;
    display: block;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
  }
`;
